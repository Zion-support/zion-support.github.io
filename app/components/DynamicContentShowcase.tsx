'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Star, Zap, Shield, Brain, Globe, Target } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'AI Solutions',
      icon: Brain,
      color: 'from-purple-500 to-blue-500',
      features: [
        {
          title: 'Machine Learning',
          description: 'Advanced ML algorithms for predictive analytics and automation',
          icon: Brain
        },
        {
          title: 'Natural Language Processing',
          description: 'AI-powered text analysis and language understanding',
          icon: Zap
        },
        {
          title: 'Computer Vision',
          description: 'Image recognition and visual data processing',
          icon: Target
        }
      ]
    },
    {
      title: 'IT Services',
      icon: Shield,
      color: 'from-green-500 to-teal-500',
      features: [
        {
          title: 'Cloud Migration',
          description: 'Seamless migration to cloud platforms with zero downtime',
          icon: Globe
        },
        {
          title: 'Cybersecurity',
          description: 'Comprehensive security solutions and threat protection',
          icon: Shield
        },
        {
          title: 'DevOps & CI/CD',
          description: 'Automated deployment and continuous integration',
          icon: Zap
        }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Star,
      color: 'from-orange-500 to-red-500',
      features: [
        {
          title: 'AI Analytics Dashboard',
          description: 'Real-time business intelligence and reporting',
          icon: Star
        },
        {
          title: 'AI-Powered CRM',
          description: 'Intelligent customer relationship management',
          icon: Target
        },
        {
          title: 'Security Monitoring',
          description: '24/7 security monitoring and threat detection',
          icon: Shield
        }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [tabs.length]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Dynamic Content Showcase
        </h2>
        <p className="text-xl text-gray-300">
          Explore our comprehensive range of AI and IT solutions
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center mb-8 space-x-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
              activeTab === index
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            <tab.icon className="w-5 h-5" />
            <span>{tab.title}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
        <div className="text-center mb-8">
          <div className={`w-16 h-16 bg-gradient-to-r ${tabs[activeTab].color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
            {React.createElement(tabs[activeTab].icon, { className: "w-8 h-8 text-white" })}
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            {tabs[activeTab].title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tabs[activeTab].features.map((feature, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white">
                  {feature.title}
                </h4>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                {feature.description}
              </p>
              <button className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;
