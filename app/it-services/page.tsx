import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Cloud, Server, Database, Network, Monitor } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'IT Infrastructure Management',
      description: 'Comprehensive IT infrastructure design, implementation, and management for enterprise organizations.',
      icon: '🏗️',
      price: '$2,000/month',
      features: [
        'Server Management & Monitoring',
        'Network Design & Implementation',
        'Storage Solutions',
        'Backup & Disaster Recovery',
        'Performance Optimization',
        'Security Hardening'
      ],
      benefits: [
        'Reduce downtime by 80%',
        'Improve system performance',
        'Enhance security posture',
        'Lower operational costs'
      ],
      marketPrice: '$2,000-5,000/month',
      category: 'Infrastructure',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Ansible']
    },
    {
      title: 'Cloud Migration Services',
      description: 'Seamless migration of your existing infrastructure to cloud platforms with zero downtime.',
      icon: '☁️',
      price: '$3,500/month',
      features: [
        'Cloud Strategy Planning',
        'Data Migration',
        'Application Modernization',
        'Security Configuration',
        'Cost Optimization',
        'Training & Support'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability',
        'Enhance security',
        'Increase flexibility'
      ],
      marketPrice: '$3,500-8,000/month',
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your organization from cyber threats.',
      icon: '🔒',
      price: '$2,500/month',
      features: [
        'Security Assessment',
        'Threat Detection',
        'Incident Response',
        'Security Training',
        'Compliance Management',
        '24/7 Monitoring'
      ],
      benefits: [
        'Prevent 99.9% of cyber attacks',
        'Meet compliance requirements',
        'Reduce security risks',
        'Protect sensitive data'
      ],
      marketPrice: '$2,500-6,000/month',
      category: 'Security',
      technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'MFA', 'Encryption']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud migration, and cybersecurity solutions." />
      </Helmet>
      
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to optimize your infrastructure, 
              enhance security, and drive digital transformation.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {itServices.map((service, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our IT experts to discuss your specific requirements and get a customized solution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITServicesPage;
