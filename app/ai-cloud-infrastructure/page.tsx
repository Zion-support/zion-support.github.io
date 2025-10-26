'use client';

import React from 'react';
import { CheckCircle, Zap, Shield, Clock, TrendingUp } from 'lucide-react';

const AICloudInfrastructurePage: React.FC = () => {
  const cloudServices = [
    {
      title: 'AI-Powered Cloud Migration',
      description: 'Intelligent cloud migration service that analyzes your infrastructure and automates the migration process with zero downtime.',
      icon: '☁️',
      price: '$2,999/month',
      features: [
        'Automated infrastructure analysis',
        'Zero-downtime migration',
        'Cost optimization recommendations',
        'Security compliance',
        'Performance monitoring',
        'Disaster recovery setup',
        '24/7 support',
        'Migration rollback capability'
      ],
      benefits: [
        'Reduce migration time by 70%',
        'Lower cloud costs by 40%',
        'Improve system reliability by 95%',
        'Enhanced security posture'
      ]
    },
    {
      title: 'AI Cloud Optimization',
      description: 'Continuous cloud resource optimization using AI to automatically adjust resources based on usage patterns and demand.',
      icon: '⚡',
      price: '$1,499/month',
      features: [
        'Real-time resource monitoring',
        'Automated scaling decisions',
        'Cost anomaly detection',
        'Performance optimization',
        'Predictive scaling',
        'Resource right-sizing',
        'Energy efficiency optimization',
        'Compliance monitoring'
      ],
      benefits: [
        'Reduce cloud costs by 35%',
        'Improve performance by 50%',
        'Eliminate resource waste',
        'Automated compliance reporting'
      ]
    },
    {
      title: 'AI Security Monitoring',
      description: 'Advanced AI-powered security monitoring that detects and prevents threats in real-time across your cloud infrastructure.',
      icon: '🛡️',
      price: '$2,299/month',
      features: [
        'Real-time threat detection',
        'Behavioral analysis',
        'Automated incident response',
        'Compliance monitoring',
        'Vulnerability scanning',
        'Access control optimization',
        'Security policy enforcement',
        'Threat intelligence integration'
      ],
      benefits: [
        'Detect threats 90% faster',
        'Reduce false positives by 80%',
        'Automated incident response',
        'Enhanced compliance posture'
      ]
    }
  ];

  const cloudProviders = [
    { name: 'AWS', logo: 'AWS' },
    { name: 'Microsoft Azure', logo: 'Azure' },
    { name: 'Google Cloud', logo: 'GCP' },
    { name: 'IBM Cloud', logo: 'IBM' },
    { name: 'Oracle Cloud', logo: 'Oracle' },
    { name: 'Alibaba Cloud', logo: 'Alibaba' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      

      <div className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Cloud Infrastructure
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your cloud infrastructure with AI-powered solutions for migration, optimization, and security
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Demo
              </a>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {cloudServices.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{service.description}</p>
                
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{service.price}</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <TrendingUp className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <a
                    href="/contact"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all block"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Cloud Providers */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Supported Cloud Providers</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {cloudProviders.map((provider, index) => (
                <div key={index} className="cyber-card hologram-card p-4 text-center">
                  <div className="text-2xl font-bold text-white">{provider.logo}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Cloud Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our AI-powered solutions optimize your cloud infrastructure for maximum efficiency and cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Cloud Transformation
              </a>
              <a
                href="/case-studies"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICloudInfrastructurePage;