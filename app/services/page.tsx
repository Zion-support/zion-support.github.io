'use client';
import React, { useState } from 'react';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Filter
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 'ai-services',
      category: 'ai',
      title: 'AI Services',
      description: 'Comprehensive artificial intelligence solutions to transform your business operations.',
      icon: Brain,
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Automation',
        'Chatbot Development'
      ],
      benefits: [
        'Increased efficiency by up to 300%',
        'Reduced operational costs',
        'Improved decision making',
        '24/7 automated support'
      ]
    },
    {
      id: 'cloud-services',
      category: 'it',
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business.',
      icon: Cloud,
      features: [
        'AWS/Azure/GCP Migration',
        'Container Orchestration',
        'Auto-scaling Solutions',
        'Disaster Recovery',
        'Cloud Security',
        'Cost Optimization'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Reduced infrastructure costs',
        'Enhanced security',
        'Global scalability'
      ]
    },
    {
      id: 'cybersecurity',
      category: 'security',
      title: 'Cybersecurity',
      description: 'Protect your digital assets with enterprise-grade security solutions.',
      icon: Shield,
      features: [
        'Threat Detection & Response',
        'Vulnerability Assessment',
        'Compliance Management',
        'Security Audits',
        'Penetration Testing',
        'Incident Response'
      ],
      benefits: [
        'Advanced threat protection',
        'Compliance with regulations',
        '24/7 security monitoring',
        'Rapid incident response'
      ]
    },
    {
      id: 'custom-development',
      category: 'development',
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your business needs.',
      icon: Code,
      features: [
        'Web Applications',
        'Mobile Apps',
        'API Development',
        'System Integration',
        'Database Design',
        'Legacy Modernization'
      ],
      benefits: [
        'Customized solutions',
        'Faster time to market',
        'Seamless integration',
        'Ongoing support'
      ]
    },
    {
      id: 'data-analytics',
      category: 'analytics',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics tools.',
      icon: BarChart,
      features: [
        'Business Intelligence',
        'Real-time Dashboards',
        'Data Visualization',
        'Predictive Modeling',
        'Data Warehousing',
        'ETL Processes'
      ],
      benefits: [
        'Data-driven decisions',
        'Real-time insights',
        'Improved performance',
        'Competitive advantage'
      ]
    },
    {
      id: 'consulting',
      category: 'consulting',
      title: 'IT Consulting',
      description: 'Expert guidance to help you navigate digital transformation and technology adoption.',
      icon: Users,
      features: [
        'Technology Strategy',
        'Digital Transformation',
        'Process Optimization',
        'Technology Assessment',
        'Training & Support',
        'Change Management'
      ],
      benefits: [
        'Strategic guidance',
        'Reduced risks',
        'Faster implementation',
        'Knowledge transfer'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Filter },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: 'it', name: 'IT Services', icon: Cloud },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'consulting', name: 'Consulting', icon: Users }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI and IT solutions designed to accelerate your digital transformation and drive business growth.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-cyan-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-700 transition-colors group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <Zap className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;