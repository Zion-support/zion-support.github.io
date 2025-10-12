'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, Code, Users, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      category: 'AI Services',
      icon: Brain,
      color: 'from-cyan-500 to-blue-600',
      description: 'Advanced artificial intelligence solutions that transform your business operations',
      services: [
        'AI Chatbots & NLP',
        'AI Content Generation',
        'AI Data Analytics',
        'AI Computer Vision',
        'AI Voice Solutions',
        'AI Workflow Automation',
        'AI Healthcare Solutions',
        'AI Financial Services',
        'AI Document Processing',
        'AI Predictive Analytics',
        'AI HR Solutions',
        'AI Edge Computing'
      ]
    },
    {
      category: 'IT Services',
      icon: Cloud,
      color: 'from-purple-500 to-pink-600',
      description: 'Complete technology infrastructure solutions for modern businesses',
      services: [
        'Cloud Infrastructure',
        'DevOps & CI/CD',
        'Cybersecurity Solutions',
        'Web Development',
        'Mobile Development',
        'API Development',
        'IT Support',
        'Data Analytics & BI',
        'Custom Software',
        'Database Management',
        'Network Infrastructure',
        'IT Asset Management'
      ]
    },
    {
      category: 'Micro SAAS',
      icon: Code,
      color: 'from-green-500 to-emerald-600',
      description: 'Ready-to-use business tools with AI and automation capabilities',
      services: [
        'Zion Analytics Pro',
        'Zion Chat AI',
        'Zion Security Shield',
        'Zion Cloud Vault',
        'Zion Content Studio',
        'Zion CRM Intelligence',
        'Zion Data Sync',
        'Zion Lead Magnet',
        'Zion Project Master',
        'Zion Email Automation',
        'Zion Inventory Smart',
        'Zion Invoice Genius'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including AI solutions, cloud infrastructure, cybersecurity, and micro SAAS platforms." />
        <meta name="keywords" content="AI services, IT services, cloud computing, cybersecurity, micro SAAS, digital transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive growth through cutting-edge technology.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mr-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{service.category}</h2>
                    <p className="text-gray-300 text-lg">{service.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.services.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <a
                    href={`/${service.category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 group"
                  >
                    Learn More About {service.category}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact our experts for a free consultation and discover how our services can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;