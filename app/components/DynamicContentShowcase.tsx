'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, TrendingUp, Clock, Shield, Zap, Brain } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      content: {
        title: 'Revolutionary AI Solutions',
        description: 'Transform your business with cutting-edge artificial intelligence technologies',
        features: [
          'Machine Learning Models',
          'Natural Language Processing',
          'Computer Vision',
          'Predictive Analytics'
        ],
        stats: [
          { value: '95%', label: 'Accuracy' },
          { value: '300%', label: 'ROI' },
          { value: '24/7', label: 'Support' }
        ]
      }
    },
    {
      id: 'it-services',
      title: 'IT Services',
      icon: Shield,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      content: {
        title: 'Comprehensive IT Services',
        description: 'Complete IT infrastructure and support solutions for modern businesses',
        features: [
          'Cloud Migration',
          'Cybersecurity',
          'System Integration',
          '24/7 Monitoring'
        ],
        stats: [
          { value: '99.9%', label: 'Uptime' },
          { value: '50+', label: 'Projects' },
          { value: '24/7', label: 'Support' }
        ]
      }
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS',
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      content: {
        title: 'Powerful Micro SAAS Tools',
        description: 'Streamline your operations with our collection of specialized business tools',
        features: [
          'Project Management',
          'Content Creation',
          'Email Marketing',
          'Financial Analytics'
        ],
        stats: [
          { value: '1000+', label: 'Users' },
          { value: '50%', label: 'Efficiency' },
          { value: '24/7', label: 'Support' }
        ]
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [tabs.length]);

  const currentTab = tabs[activeTab];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `${tab.bgColor} ${tab.color} border-2 border-current`
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              {currentTab.content.title}
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              {currentTab.content.description}
            </p>
            
            <div className="space-y-3 mb-8">
              {currentTab.content.features.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                  {feature}
                </div>
              ))}
            </div>
            
            <button className={`inline-flex items-center px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-cyan-400 to-blue-600 hover:opacity-90 transition-opacity`}>
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-3 gap-4 mb-8">
              {currentTab.content.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold ${currentTab.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-6">
              <div className="flex items-center justify-center mb-4">
                <div className={`w-16 h-16 rounded-full ${currentTab.bgColor} flex items-center justify-center`}>
                  <currentTab.icon className={`w-8 h-8 ${currentTab.color}`} />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-white text-center mb-2">
                {currentTab.title}
              </h4>
              <p className="text-gray-300 text-center">
                Experience the power of our {currentTab.title.toLowerCase()} solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;