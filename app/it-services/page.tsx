import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Database, Shield, Cloud, Code, Smartphone, Globe, Settings } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ItServicesPage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Complete server management, monitoring, and maintenance services.',
      features: [
        '24/7 server monitoring',
        'Automated backups',
        'Performance optimization',
        'Security updates',
        'Disaster recovery'
      ],
      price: 'Starting at $299/month'
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Expert database design, optimization, and management services.',
      features: [
        'Database design and architecture',
        'Performance tuning',
        'Data migration',
        'Backup and recovery',
        'Security hardening'
      ],
      price: 'Starting at $199/month'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: [
        'Security audits',
        'Threat monitoring',
        'Incident response',
        'Compliance management',
        'Security training'
      ],
      price: 'Starting at $399/month'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Cloud migration, management, and optimization services.',
      features: [
        'Cloud migration planning',
        'Multi-cloud management',
        'Cost optimization',
        'Auto-scaling setup',
        'Cloud security'
      ],
      price: 'Starting at $249/month'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built to your exact specifications.',
      features: [
        'Web applications',
        'API development',
        'Integration services',
        'Legacy system modernization',
        'Quality assurance'
      ],
      price: 'Starting at $99/hour'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: [
        'iOS app development',
        'Android app development',
        'Cross-platform solutions',
        'App store optimization',
        'Maintenance and updates'
      ],
      price: 'Starting at $149/hour'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications.',
      features: [
        'Responsive design',
        'SEO optimization',
        'Performance optimization',
        'Content management systems',
        'E-commerce solutions'
      ],
      price: 'Starting at $79/hour'
    },
    {
      icon: Settings,
      title: 'IT Consulting',
      description: 'Strategic IT planning and technology roadmap development.',
      features: [
        'Technology assessment',
        'Strategic planning',
        'Vendor evaluation',
        'Process optimization',
        'Digital transformation'
      ],
      price: 'Starting at $199/hour'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group | Complete Technology Solutions</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cybersecurity, cloud solutions, and custom development. Expert technology solutions for your business." />
        <meta name="keywords" content="IT services, infrastructure management, cybersecurity, cloud services, custom development, mobile development, web development" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Complete <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">IT Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology infrastructure solutions for your business. From infrastructure management 
              to custom development, we provide the expertise you need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-3">{service.price}</div>
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our IT Services?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine deep technical expertise with business understanding to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-white text-lg">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-white text-lg">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-white text-lg">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-white text-lg">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our IT services can help optimize your technology infrastructure and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Get Started
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ItServicesPage;