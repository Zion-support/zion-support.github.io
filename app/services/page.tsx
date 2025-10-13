'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, Zap, BarChart3, Code, Users, Globe, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Comprehensive AI solutions for your business needs',
      icon: <Brain className="w-8 h-8" />,
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions',
      icon: <Cloud className="w-8 h-8" />,
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster Recovery'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business',
      icon: <Shield className="w-8 h-8" />,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response'],
      color: 'from-red-500 to-orange-500'
    },
    {
      title: '5G Solutions',
      description: 'Next-generation connectivity and edge computing',
      icon: <Zap className="w-8 h-8" />,
      features: ['5G Networks', 'Edge Computing', 'IoT Integration', 'Real-time Analytics'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Data Analytics',
      description: 'Transform data into actionable insights',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Business Intelligence', 'Data Visualization', 'Predictive Modeling', 'Real-time Dashboards'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Custom Development',
      description: 'Tailored software solutions for your unique needs',
      icon: <Code className="w-8 h-8" />,
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Micro SAAS',
      description: 'Innovative micro software solutions',
      icon: <Users className="w-8 h-8" />,
      features: ['Rapid Deployment', 'Scalable Architecture', 'User Management', 'Analytics'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Global Services',
      description: 'Worldwide technology solutions and support',
      icon: <Globe className="w-8 h-8" />,
      features: ['24/7 Support', 'Multi-language', 'Global Deployment', 'Compliance'],
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services by Zion Tech Group - AI solutions, cloud infrastructure, cybersecurity, and more" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">{service.title}</h3>
              <p className="text-gray-300 mb-6 text-center">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                    <ArrowRight className="w-4 h-4 text-cyan-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full bg-gradient-to-r ${service.color} text-white py-2 px-4 rounded-lg hover:opacity-90 transition-all duration-300`}>
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300">
                Our team of experienced professionals brings deep expertise in AI, cloud computing, and cybersecurity.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-4">Proven Results</h3>
              <p className="text-gray-300">
                We've successfully delivered projects for clients across various industries with measurable results.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Round-the-clock support to ensure your systems run smoothly and your business stays operational.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;