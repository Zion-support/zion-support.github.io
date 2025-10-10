'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, Code, BarChart, Users, ArrowRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions for enterprise automation and optimization.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['AWS Migration', 'Azure Solutions', 'Google Cloud', 'Hybrid Cloud']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: ['Threat Detection', 'Security Audits', 'Compliance', 'Incident Response']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions designed to meet your specific business requirements.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics solutions.',
      features: ['Business Intelligence', 'Data Visualization', 'Predictive Modeling', 'Real-time Analytics']
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to help you make informed technology decisions.',
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Change Management']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services - Zion Tech Group | AI and IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including machine learning, cloud solutions, cybersecurity, and custom development." />
        <meta name="keywords" content="AI services, IT services, cloud solutions, cybersecurity, custom development, data analytics" />
      </Helmet>
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation 
              and drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <ArrowRight className="w-4 h-4 text-cyan-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;