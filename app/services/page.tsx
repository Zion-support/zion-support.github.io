'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, Code, BarChart, Users, ArrowRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Custom AI and machine learning solutions tailored to your business needs.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'AI Automation']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable and secure cloud infrastructure solutions.',
      features: ['Cloud Migration', 'Infrastructure Management', 'DevOps', 'Monitoring']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: ['Security Audits', 'Threat Detection', 'Compliance', 'Incident Response']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Bespoke software solutions designed for your specific requirements.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable business insights.',
      features: ['Data Visualization', 'Business Intelligence', 'Predictive Analytics', 'Reporting']
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Strategic technology consulting to guide your digital transformation.',
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Training']
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services from Zion Tech Group." />
      </Helmet>
      
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                We provide comprehensive AI and IT solutions to help your business thrive in the digital age.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400 text-sm flex items-center">
                        <ArrowRight className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ServicesPage;