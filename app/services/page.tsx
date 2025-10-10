'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'AI Solutions',
      description: 'Comprehensive artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
      icon: Brain,
      category: 'ai',
      price: 'Starting at $1,500/month',
      features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics']
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      icon: Cloud,
      category: 'infrastructure',
      price: 'Starting at $800/month',
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Auto-scaling', 'Disaster Recovery']
    },
    {
      id: 3,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      icon: Shield,
      category: 'security',
      price: 'Starting at $1,200/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Compliance']
    },
    {
      id: 4,
      title: 'Custom Development',
      description: 'Tailored software solutions designed to meet your specific business requirements.',
      icon: Code,
      category: 'development',
      price: 'Starting at $2,000/month',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
    },
    {
      id: 5,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights that drive business growth.',
      icon: BarChart,
      category: 'analytics',
      price: 'Starting at $1,000/month',
      features: ['Business Intelligence', 'Data Visualization', 'Predictive Modeling', 'Real-time Analytics']
    },
    {
      id: 6,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to help you make informed decisions.',
      icon: Users,
      category: 'consulting',
      price: 'Starting at $150/hour',
      features: ['Technology Assessment', 'Digital Transformation', 'Process Optimization', 'Vendor Selection']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive AI and IT services including AI solutions, cloud infrastructure, cybersecurity, custom development, data analytics, and IT consulting." />
      </Helmet>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive AI and IT solutions designed to transform your business 
              and drive growth in the digital age.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 hover:scale-105 transition-transform duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-slate-900" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Let's discuss your project and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 hover:bg-cyan-50 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your Project
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;