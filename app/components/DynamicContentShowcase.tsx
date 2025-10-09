'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, TrendingUp, Users, Award, Clock, Shield, Zap } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const tabs = [
    {
      id: 'ai-solutions',
      label: 'AI Solutions',
      icon: Zap,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 'it-services',
      label: 'IT Services',
      icon: Shield,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-400/30'
    },
    {
      id: 'micro-saas',
      label: 'Micro SAAS',
      icon: Star,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-400/30'
    }
  ];

  const content = {
    'ai-solutions': {
      title: 'Advanced AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence technologies',
      features: [
        {
          icon: TrendingUp,
          title: 'Machine Learning',
          description: 'Custom ML models for predictive analytics and decision-making',
          stats: '95% accuracy'
        },
        {
          icon: Users,
          title: 'Natural Language Processing',
          description: 'Advanced NLP solutions for text analysis and language understanding',
          stats: '50+ languages'
        },
        {
          icon: Award,
          title: 'Computer Vision',
          description: 'Image and video analysis solutions for object detection and recognition',
          stats: '99.9% precision'
        },
        {
          icon: Zap,
          title: 'AI Automation',
          description: 'Intelligent process automation with decision-making capabilities',
          stats: '80% time saved'
        }
      ]
    },
    'it-services': {
      title: 'Comprehensive IT Services',
      description: 'Complete IT solutions for modern businesses',
      features: [
        {
          icon: Shield,
          title: 'Cybersecurity',
          description: 'Advanced security solutions with threat detection and prevention',
          stats: '24/7 monitoring'
        },
        {
          icon: Clock,
          title: 'Cloud Services',
          description: 'Cloud migration, setup, and optimization services',
          stats: '99.9% uptime'
        },
        {
          icon: Users,
          title: 'DevOps & CI/CD',
          description: 'Streamlined development workflows with automated testing and deployment',
          stats: '10x faster'
        },
        {
          icon: Award,
          title: 'Database Services',
          description: 'Database design, optimization, and management with AI-powered tuning',
          stats: '70% faster queries'
        }
      ]
    },
    'micro-saas': {
      title: 'Micro SAAS Solutions',
      description: 'Powerful, affordable AI-powered tools for modern businesses',
      features: [
        {
          icon: Star,
          title: 'AI Project Manager',
          description: 'Intelligent project planning with AI-powered resource optimization',
          stats: '40% productivity boost'
        },
        {
          icon: TrendingUp,
          title: 'AI Analytics Dashboard',
          description: 'Transform your data into actionable insights with AI-powered analytics',
          stats: '45% revenue increase'
        },
        {
          icon: Users,
          title: 'AI Customer Support',
          description: 'Provide 24/7 intelligent customer support with AI-powered chatbot',
          stats: '90% response time reduction'
        },
        {
          icon: Zap,
          title: 'AI Email Marketing',
          description: 'Transform your email marketing with AI-powered content generation',
          stats: '65% open rate increase'
        }
      ]
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const currentContent = content[tabs[activeTab].id as keyof typeof content];

  return (
    <div className={`transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <div className="cyber-card p-8">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-4 mb-8">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `${tab.bgColor} ${tab.borderColor} border-2 text-white`
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            {currentContent.title}
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            {currentContent.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {currentContent.features.map((feature, index) => (
            <div
              key={index}
              className="cyber-card p-6 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${tabs[activeTab].bgColor}`}>
                  <feature.icon className={`w-6 h-6 ${tabs[activeTab].color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-3">
                    {feature.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-cyan-400">
                      {feature.stats}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/contact"
            className="cyber-button px-8 py-3 text-lg font-semibold inline-flex items-center space-x-2"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;