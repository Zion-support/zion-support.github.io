'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Clock, Users, Award } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const contentTabs = [
    {
      title: 'AI Solutions',
      icon: '🤖',
      content: {
        title: 'Revolutionary AI Technology',
        description: 'Transform your business with our cutting-edge artificial intelligence solutions.',
        features: [
          'Machine Learning Models',
          'Natural Language Processing',
          'Computer Vision',
          'Predictive Analytics',
          'Automated Decision Making',
          'Intelligent Automation'
        ],
        benefits: [
          '300% Average ROI',
          '70% Cost Reduction',
          '90% Process Automation',
          '95% Accuracy Rate'
        ]
      }
    },
    {
      title: 'IT Services',
      icon: '💻',
      content: {
        title: 'Enterprise IT Solutions',
        description: 'Comprehensive IT services for modern businesses with enterprise-grade security.',
        features: [
          'Cloud Migration & Setup',
          'Cybersecurity Solutions',
          'DevOps & CI/CD',
          'Database Management',
          'Network Infrastructure',
          '24/7 Monitoring'
        ],
        benefits: [
          '99.9% Uptime Guarantee',
          '50% Faster Deployment',
          'Zero Downtime Migration',
          '24/7 Expert Support'
        ]
      }
    },
    {
      title: 'Micro SAAS',
      icon: '⚡',
      content: {
        title: 'Powerful Micro SAAS Tools',
        description: 'Affordable, AI-powered tools designed for modern businesses and startups.',
        features: [
          'AI Project Manager',
          'AI Social Media Manager',
          'AI Analytics Dashboard',
          'AI Email Marketing',
          'AI Customer Support Bot',
          'AI Code Review Assistant'
        ],
        benefits: [
          'Starting at $79/month',
          'No Setup Fees',
          'Instant Deployment',
          '30-Day Free Trial'
        ]
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % contentTabs.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [contentTabs.length]);

  return (
    <div className="bg-slate-800/30 rounded-2xl p-8 mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Solutions
        </h2>
        <p className="text-gray-300 text-lg">
          Discover how our innovative solutions can transform your business
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {contentTabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
              activeTab === index
                ? 'bg-cyan-600 text-white'
                : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600'
            }`}
          >
            <span className="text-xl">{tab.icon}</span>
            <span className="font-medium">{tab.title}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="relative min-h-[400px]">
        {contentTabs.map((tab, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${
              index === activeTab
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8 absolute inset-0'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {tab.content.title}
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  {tab.content.description}
                </p>
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-700/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {tab.content.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    Benefits
                  </h4>
                  <ul className="space-y-2">
                    {tab.content.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-gray-300 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicContentShowcase;