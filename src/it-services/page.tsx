
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ITServicesPage: React.FC = () => {
    return (
    <>
      <SEOOptimizer
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud migration, cybersecurity, DevOps, database management, and business intelligence solutions."
        keywords={['IT services', 'cloud migration', 'cybersecurity', 'DevOps', 'database management', 'business intelligence', 'IT consulting']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      
      <div>
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">IT Services & Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive IT services to support and optimize your business infrastructure. 
              From cloud migration to cybersecurity, we provide end-to-end solutions.
            </p>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div>
              {itServices.map((service, index) => (
                <div>
                  <div>
                    <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies:</h4>
                    <div>
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-cyan-400/20 text-cyan-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-400">Category: {service.category}</div>
                  </div>
                  <a
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
                  >Learn More<ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free consultation and discover how our IT services can optimize your business operations.
            </p>
            <div>
              <a
                href="/contact"
                className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />Get Free Consultation</a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />(302) 464-0950</a>
            </div>
            <div>
              <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>);
}
export default ITServicesPage