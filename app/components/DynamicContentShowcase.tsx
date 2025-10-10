'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, CheckCircle, Zap, Shield, Users, BarChart, Clock } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'ai-solutions',
      name: 'AI Solutions',
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: 'it-services',
      name: 'IT Services',
      icon: <Shield className="w-5 h-5" />
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS',
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 'analytics',
      name: 'Analytics',
      icon: <BarChart className="w-5 h-5" />
    }
  ];

  const content = {
    'ai-solutions': {
      title: 'Revolutionary AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence technologies',
      features: [
        {
          icon: <Zap className="w-6 h-6 text-cyan-400" />,
          title: 'Machine Learning',
          description: 'Advanced ML models for predictive analytics and automation'
        },
        {
          icon: <Users className="w-6 h-6 text-green-400" />,
          title: 'Natural Language Processing',
          description: 'AI-powered text and speech understanding capabilities'
        },
        {
          icon: <BarChart className="w-6 h-6 text-purple-400" />,
          title: 'Computer Vision',
          description: 'Image recognition and visual analysis solutions'
        },
        {
          icon: <Shield className="w-6 h-6 text-yellow-400" />,
          title: 'AI Security',
          description: 'Intelligent threat detection and cybersecurity'
        }
      ],
      stats: [
        { label: 'Projects Completed', value: '500+' },
        { label: 'Client Satisfaction', value: '99%' },
        { label: 'Average ROI', value: '300%' },
        { label: 'Response Time', value: '<24h' }
      ]
    },
    'it-services': {
      title: 'Comprehensive IT Services',
      description: 'End-to-end IT solutions for modern businesses',
      features: [
        {
          icon: <Shield className="w-6 h-6 text-cyan-400" />,
          title: 'Cloud Migration',
          description: 'Seamless transition to cloud infrastructure'
        },
        {
          icon: <Zap className="w-6 h-6 text-green-400" />,
          title: 'DevOps & CI/CD',
          description: 'Automated deployment and continuous integration'
        },
        {
          icon: <Users className="w-6 h-6 text-purple-400" />,
          title: 'Cybersecurity',
          description: 'Advanced security solutions and monitoring'
        },
        {
          icon: <BarChart className="w-6 h-6 text-yellow-400" />,
          title: 'Data Analytics',
          description: 'Business intelligence and data visualization'
        }
      ],
      stats: [
        { label: 'Uptime Guarantee', value: '99.9%' },
        { label: 'Cost Reduction', value: '60%' },
        { label: 'Deployment Speed', value: '75%' },
        { label: 'Security Score', value: 'A+' }
      ]
    },
    'micro-saas': {
      title: '50+ Micro SAAS Solutions',
      description: 'Ready-to-use AI-powered tools for immediate business impact',
      features: [
        {
          icon: <Users className="w-6 h-6 text-cyan-400" />,
          title: 'AI Voice Assistant',
          description: 'Multi-language voice AI with 99.2% accuracy'
        },
        {
          icon: <Zap className="w-6 h-6 text-green-400" />,
          title: 'Predictive Maintenance',
          description: 'Prevent equipment failures with 70% less downtime'
        },
        {
          icon: <BarChart className="w-6 h-6 text-purple-400" />,
          title: 'Recruitment AI',
          description: 'Transform hiring with intelligent candidate screening'
        },
        {
          icon: <Shield className="w-6 h-6 text-yellow-400" />,
          title: 'Content Studio',
          description: 'AI-powered content creation and marketing tools'
        }
      ],
      stats: [
        { label: 'Available Tools', value: '50+' },
        { label: 'Setup Time', value: '<5min' },
        { label: 'User Satisfaction', value: '98%' },
        { label: 'Support Response', value: '<1h' }
      ]
    },
    'analytics': {
      title: 'Advanced Analytics Platform',
      description: 'Data-driven insights for informed business decisions',
      features: [
        {
          icon: <BarChart className="w-6 h-6 text-cyan-400" />,
          title: 'Real-time Dashboards',
          description: 'Live data visualization and monitoring'
        },
        {
          icon: <Zap className="w-6 h-6 text-green-400" />,
          title: 'Predictive Analytics',
          description: 'AI-powered forecasting and trend analysis'
        },
        {
          icon: <Users className="w-6 h-6 text-purple-400" />,
          title: 'Custom Reports',
          description: 'Automated reporting tailored to your needs'
        },
        {
          icon: <Shield className="w-6 h-6 text-yellow-400" />,
          title: 'Data Integration',
          description: 'Connect 100+ data sources seamlessly'
        }
      ],
      stats: [
        { label: 'Data Sources', value: '100+' },
        { label: 'Report Accuracy', value: '99.8%' },
        { label: 'Processing Speed', value: '10x' },
        { label: 'Cost Savings', value: '50%' }
      ]
    }
  };

  const currentContent = content[tabs[activeTab].id as keyof typeof content];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [tabs.length]);

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From AI and machine learning to cloud infrastructure and micro SAAS solutions, we provide everything you need to transform your business.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === index
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="cyber-card hologram-card p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">{currentContent.title}</h3>
            <p className="text-gray-300 text-lg">{currentContent.description}</p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {currentContent.features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {currentContent.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a 
              href={`/${tabs[activeTab].id}`}
              className="inline-flex items-center space-x-2 cyber-button"
            >
              <span>Explore {tabs[activeTab].name}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;