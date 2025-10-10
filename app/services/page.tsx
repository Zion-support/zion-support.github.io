'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Smartphone, 
  Database, 
  Zap, 
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions to transform your business',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      pricing: 'Starting at $5,000/month',
      path: '/ai-solutions'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for enhanced performance and reliability.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster Recovery']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving threats.',
      features: ['Security Audits', 'Penetration Testing', 'Incident Response', 'Compliance']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built to your exact specifications',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Database Design'],
      pricing: 'Starting at $8,000/project',
      path: '/custom-development'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics platforms',
      features: ['Real-time Dashboards', 'Data Visualization', 'Business Intelligence', 'Custom Reports'],
      pricing: 'From $3,000/month',
      path: '/data-analytics'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI and IT Solutions</title>
        <meta name="description" content="Discover our comprehensive range of AI and IT services designed to transform your business. From AI solutions to cloud services and data analytics." />
        <meta name="keywords" content="AI services, IT services, cloud services, data analytics, cybersecurity, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to transform your business and drive growth.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Let's discuss how our services can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
