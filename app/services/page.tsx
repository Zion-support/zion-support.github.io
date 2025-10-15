import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { servicesData } from '../data/servicesData';

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Services - Zion Tech Group | AI & IT Solutions"
        description="Explore our comprehensive range of AI and IT services designed to accelerate your business growth. From AI development to cloud infrastructure, we provide cutting-edge solutions."
        keywords="AI services, IT services, cloud solutions, digital transformation, business automation, technology consulting, micro SAAS, machine learning"
        canonicalUrl="https://ziontechgroup.com/services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Comprehensive Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              From cutting-edge AI solutions to robust IT infrastructure, we provide everything your business needs to thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started Today
              </Link>
              <Link to="/pricing" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View Pricing
              </Link>
            </div>
          </div>

          {/* AI Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              🤖 AI & Machine Learning Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.aiServices.slice(0, 6).map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">${service.pricing.basic}</span>
                    <span className="text-gray-500 text-sm ml-1">/month</span>
                    <span className="text-sm text-gray-500 ml-2">({service.marketPrice})</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to={service.link} 
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/ai-services" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View All AI Services
              </Link>
            </div>
          </section>

          {/* Micro SAAS Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              💼 Micro SAAS Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.microSaas.slice(0, 6).map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-600">${service.pricing.basic}</span>
                    <span className="text-gray-500 text-sm ml-1">/month</span>
                    <span className="text-sm text-gray-500 ml-2">({service.marketPrice})</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to={service.link} 
                    className="text-green-600 hover:text-green-800 font-medium text-sm"
                  >
                    Try Now →
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/micro-saas-solutions" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Browse All SAAS Tools
              </Link>
            </div>
          </section>

          {/* IT Solutions Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              💻 IT Solutions & Infrastructure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.itSolutions.slice(0, 6).map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-purple-600">${service.pricing.basic}</span>
                    <span className="text-gray-500 text-sm ml-1">/month</span>
                    <span className="text-sm text-gray-500 ml-2">({service.marketPrice})</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to={service.link} 
                    className="text-purple-600 hover:text-purple-800 font-medium text-sm"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/it-services" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Explore IT Solutions
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive AI and IT solutions can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Get Free Consultation
              </Link>
              <Link to="/pricing" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold">
                View Pricing Plans
              </Link>
            </div>
            <div className="mt-8 text-sm">
              <p>📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</p>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;