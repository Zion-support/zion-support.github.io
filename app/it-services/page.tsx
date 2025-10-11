import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Shield, Cloud, Database, Wifi, Monitor, ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';

const ItServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'IT Infrastructure',
      description: 'Complete IT infrastructure setup and management for your business.',
      icon: Server,
      features: ['Network setup', 'Server configuration', 'Hardware installation', 'System monitoring'],
      price: 'Starting at $299/month'
    },
    {
      id: 2,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from threats.',
      icon: Shield,
      features: ['Security assessment', 'Firewall setup', 'Antivirus protection', 'Security monitoring'],
      price: 'Starting at $199/month'
    },
    {
      id: 3,
      title: 'Cloud Solutions',
      description: 'Cloud migration and management services for scalable infrastructure.',
      icon: Cloud,
      features: ['Cloud migration', 'Cloud architecture', 'Cost optimization', '24/7 support'],
      price: 'Starting at $399/month'
    },
    {
      id: 4,
      title: 'Database Management',
      description: 'Database design, optimization, and maintenance services.',
      icon: Database,
      features: ['Database design', 'Performance tuning', 'Backup solutions', 'Data migration'],
      price: 'Starting at $249/month'
    },
    {
      id: 5,
      title: 'Network Solutions',
      description: 'Advanced networking solutions for reliable connectivity.',
      icon: Wifi,
      features: ['Network design', 'Wireless setup', 'VPN configuration', 'Network security'],
      price: 'Starting at $179/month'
    },
    {
      id: 6,
      title: 'IT Support',
      description: 'Comprehensive IT support and helpdesk services.',
      icon: Monitor,
      features: ['24/7 support', 'Remote assistance', 'Hardware maintenance', 'Software updates'],
      price: 'Starting at $149/month'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Technology Infrastructure Solutions</title>
        <meta name="description" content="Complete IT services including infrastructure, cybersecurity, cloud solutions, and support. Reliable technology solutions for your business." />
        <meta name="keywords" content="IT services, infrastructure, cybersecurity, cloud solutions, network, database, IT support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IT <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Complete technology infrastructure solutions for your business. From setup to support, we've got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl mb-4 text-cyan-400">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-6">
                    <div className="text-lg font-bold text-cyan-400">{service.price}</div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our IT Services?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Reliable & Secure</h3>
                <p className="text-gray-300">Enterprise-grade security and 99.9% uptime guarantee</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock technical support and monitoring</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scalable Solutions</h3>
                <p className="text-gray-300">Solutions that grow with your business needs</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Upgrade Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our IT services can help improve your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ItServicesPage;