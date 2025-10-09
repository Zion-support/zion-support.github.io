'use client';
import React, { useState, useEffect } from 'react';
import { Brain, Zap, Shield, Globe, Database, Cpu } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    {
      id: 0,
      title: 'AI Solutions',
      icon: Brain,
      content: {
        title: 'Revolutionary AI Technology',
        description: 'Transform your business with cutting-edge artificial intelligence solutions that adapt and learn from your data.',
        features: [
          'Machine Learning Models',
          'Natural Language Processing',
          'Computer Vision',
          'Predictive Analytics',
        ],
        stats: {
          value: '95%',
          label: 'Accuracy Rate',
        },
      },
    },
    {
      id: 1,
      title: 'Automation',
      icon: Zap,
      content: {
        title: 'Intelligent Automation',
        description: 'Streamline your operations with smart automation that reduces costs and increases efficiency.',
        features: [
          'Workflow Automation',
          'Process Optimization',
          'Smart Scheduling',
          'Automated Reporting',
        ],
        stats: {
          value: '80%',
          label: 'Time Savings',
        },
      },
    },
    {
      id: 2,
      title: 'Security',
      icon: Shield,
      content: {
        title: 'Enterprise Security',
        description: 'Protect your business with advanced security solutions powered by AI and machine learning.',
        features: [
          'Threat Detection',
          'Access Control',
          'Data Encryption',
          'Compliance Management',
        ],
        stats: {
          value: '99.9%',
          label: 'Uptime Guarantee',
        },
      },
    },
    {
      id: 3,
      title: 'Cloud Services',
      icon: Globe,
      content: {
        title: 'Scalable Cloud Infrastructure',
        description: 'Leverage the power of cloud computing with our scalable and secure infrastructure solutions.',
        features: [
          'Cloud Migration',
          'Infrastructure as Code',
          'Auto-scaling',
          'Disaster Recovery',
        ],
        stats: {
          value: '50%',
          label: 'Cost Reduction',
        },
      },
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-800/30 to-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Our Technology Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the powerful technologies that drive our solutions and transform businesses worldwide.
          </p>
        </div>

        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="cyber-card p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {tabs[activeTab].content.title}
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  {tabs[activeTab].content.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {tabs[activeTab].content.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-4xl font-bold text-cyan-400">
                    {tabs[activeTab].content.stats.value}
                  </div>
                  <div className="text-gray-300">
                    {tabs[activeTab].content.stats.label}
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <div className="text-8xl">
                    {tabs[activeTab].icon === Brain && '🧠'}
                    {tabs[activeTab].icon === Zap && '⚡'}
                    {tabs[activeTab].icon === Shield && '🛡️'}
                    {tabs[activeTab].icon === Globe && '🌐'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Icons */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Technologies We Use
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', icon: '⚛️' },
              { name: 'TypeScript', icon: '🔷' },
              { name: 'Node.js', icon: '🟢' },
              { name: 'Python', icon: '🐍' },
              { name: 'TensorFlow', icon: '🤖' },
              { name: 'AWS', icon: '☁️' },
            ].map((tech, index) => (
              <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="text-white font-medium">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicContentShowcase;
