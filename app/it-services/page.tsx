import React from 'react';
import { CheckCircle, ArrowRight, Server, Shield, Cloud, Database, Network, Settings, Users, Clock, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Server className="w-8 h-8 text-blue-500" />,
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure management including servers, networks, and data centers.',
      features: ['24/7 Monitoring', 'Proactive Maintenance', 'Performance Optimization', 'Disaster Recovery'],
      pricing: 'Starting at $199/month',
      link: '/infrastructure-management',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from cyber threats and data breaches.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response'],
      pricing: 'Starting at $299/month',
      link: '/cybersecurity',
      popular: true
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Solutions',
      description: 'Cloud migration, management, and optimization across all major cloud platforms.',
      features: ['Cloud Migration', 'Multi-Cloud Strategy', 'Cost Optimization', 'Security Compliance'],
      pricing: 'Starting at $149/month',
      link: '/cloud-solutions',
      popular: false
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'Database Management',
      description: 'Expert database administration, optimization, and maintenance services.',
      features: ['Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Monitoring'],
      pricing: 'Starting at $179/month',
      link: '/database-management',
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Expert Support',
      description: '24/7 technical support from certified IT professionals',
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Proactive Monitoring',
      description: 'Continuous monitoring to prevent issues before they impact your business',
      icon: <Settings className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce IT costs by up to 40% through optimized infrastructure management',
      icon: <DollarSign className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Scalability',
      description: 'Easily scale your IT infrastructure as your business grows',
      icon: <Network className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cybersecurity, cloud solutions, and database management." />
        <meta name="keywords" content="IT services, infrastructure management, cybersecurity, cloud solutions, database management, IT support" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive IT solutions to keep your business running smoothly, securely, and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    {service.icon}
                  </div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                  <Link 
                    to={service.link}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IT solutions are designed to deliver reliability, security, and performance for your business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                    <div className="mb-4 flex justify-center">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Optimize Your IT Infrastructure?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let our expert team help you build a robust, secure, and scalable IT environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ITServicesPage;
