'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Zap, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  BarChart, 
  Shield, 
  Globe, 
  Cpu, 
  Database,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'Machine Learning Solutions',
      description: 'Custom ML models tailored to your business needs',
      features: [
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Recommendation Systems'
      ],
      price: 'Starting at $5,000/month'
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Streamline operations with intelligent automation',
      features: [
        'Process Automation',
        'Workflow Optimization',
        'Intelligent Document Processing',
        'Smart Data Entry'
      ],
      price: 'Starting at $3,500/month'
    },
    {
      icon: Target,
      title: 'AI Strategy Consulting',
      description: 'Strategic guidance for AI implementation',
      features: [
        'AI Roadmap Development',
        'Technology Assessment',
        'Change Management',
        'ROI Analysis'
      ],
      price: 'Starting at $2,000/month'
    },
    {
      icon: BarChart,
      title: 'Data Analytics & Insights',
      description: 'Transform data into actionable business insights',
      features: [
        'Real-time Dashboards',
        'Predictive Modeling',
        'Data Visualization',
        'Business Intelligence'
      ],
      price: 'Starting at $4,000/month'
    },
    {
      icon: Shield,
      title: 'AI Security & Compliance',
      description: 'Secure AI implementations with compliance focus',
      features: [
        'AI Model Security',
        'Data Privacy Protection',
        'Compliance Auditing',
        'Risk Assessment'
      ],
      price: 'Starting at $3,000/month'
    },
    {
      icon: Globe,
      title: 'AI Integration Services',
      description: 'Seamless integration with existing systems',
      features: [
        'API Development',
        'System Integration',
        'Cloud Migration',
        'Legacy System Modernization'
      ],
      price: 'Starting at $4,500/month'
    }
  ];

  const industries = [
    'Healthcare',
    'Finance',
    'Retail',
    'Manufacturing',
    'Education',
    'Government'
  ];

  const stats = [
    { number: '200+', label: 'AI Models Deployed' },
    { number: '95%', label: 'Accuracy Rate' },
    { number: '50+', label: 'Clients Served' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including machine learning, automation, and data analytics solutions." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, automation, data analytics, AI consulting, Zion Tech Group" />
      </Helmet>

      <div className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to automation, we help you harness the power of AI.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                <button className="w-full text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center py-2">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>

          {/* Industries Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl mb-2">🏥</div>
                  <div className="text-white font-medium">{industry}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Let's discuss your AI needs and create a customized solution 
              that drives real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-cyan-600 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiServicesPage;