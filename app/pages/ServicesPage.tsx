import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  RocketLaunchIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: CpuChipIcon,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence and machine learning solutions to transform your business.',
      href: '/ai-solutions',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
      href: '/cybersecurity',
      features: ['Threat Detection', 'Security Audits', 'Incident Response', 'Compliance Management']
    },
    {
      icon: CloudIcon,
      title: 'Cloud Solutions',
      description: 'Scalable cloud solutions and infrastructure management for modern businesses.',
      href: '/cloud-solutions',
      features: ['Cloud Migration', 'Infrastructure as Code', 'DevOps', 'Monitoring & Optimization']
    },
    {
      icon: RocketLaunchIcon,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business processes.',
      href: '/digital-transformation',
      features: ['Process Automation', 'Legacy Modernization', 'Data Strategy', 'Change Management']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive AI solutions, cybersecurity, cloud infrastructure, and digital transformation services." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and drive innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to={service.href} 
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;