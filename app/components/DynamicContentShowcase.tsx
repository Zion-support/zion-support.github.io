'use client';
import React, { useState, useEffect } from 'react';
import { Code, Database, Cpu, Zap, Shield, Globe, ArrowRight, Play, Download } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    {
      id: 'ai-solutions',
      name: 'AI Solutions',
      icon: Cpu,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 'it-services',
      name: 'IT Services',
      icon: Code,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-400/30'
    },
    {
      id: 'automation',
      name: 'Automation',
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-400/30'
    },
    {
      id: 'security',
      name: 'Security',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-400/30'
    }
  ];

  const content = {
    'ai-solutions': {
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning technologies.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Automation',
        'Intelligent Chatbots'
      ],
      stats: [
        { label: 'Models Deployed', value: '500+' },
        { label: 'Accuracy Rate', value: '95%' },
        { label: 'Processing Speed', value: '10x Faster' }
      ],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    'it-services': {
      title: 'Comprehensive IT Services',
      description: 'Complete IT infrastructure solutions for modern enterprises.',
      features: [
        'Cloud Migration',
        'DevOps & CI/CD',
        'Database Management',
        'Network Security',
        'Mobile Development',
        'Web Applications'
      ],
      stats: [
        { label: 'Projects Completed', value: '1000+' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'Response Time', value: '< 1ms' }
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    'automation': {
      title: 'Intelligent Automation',
      description: 'Streamline operations with smart automation solutions.',
      features: [
        'Process Automation',
        'Workflow Optimization',
        'Data Processing',
        'Task Scheduling',
        'Error Handling',
        'Performance Monitoring'
      ],
      stats: [
        { label: 'Processes Automated', value: '200+' },
        { label: 'Time Saved', value: '80%' },
        { label: 'Error Reduction', value: '90%' }
      ],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    'security': {
      title: 'Advanced Security',
      description: 'Protect your digital assets with enterprise-grade security solutions.',
      features: [
        'Threat Detection',
        'Vulnerability Assessment',
        'Security Monitoring',
        'Incident Response',
        'Compliance Management',
        'Data Protection'
      ],
      stats: [
        { label: 'Threats Blocked', value: '1M+' },
        { label: 'Security Score', value: 'A+' },
        { label: 'Response Time', value: '< 5min' }
      ],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  };

  const currentContent = content[tabs[activeTab].id as keyof typeof content];

  return (
    <div className="py-16 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Dynamic Solutions Showcase
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive range of AI and IT solutions designed to transform your business
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === index
                    ? `${tab.bgColor} ${tab.borderColor} border-2 ${tab.color}`
                    : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Content Display */}
          <div className={`cyber-card p-0 overflow-hidden transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 lg:h-96">
                <img
                  src={currentContent.image}
                  alt={currentContent.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {currentContent.title}
                  </h3>
                  <p className="text-gray-200">
                    {currentContent.description}
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentContent.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Performance Metrics</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {currentContent.stats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold text-cyan-400 mb-1">
                            {stat.value}
                          </div>
                          <div className="text-gray-400 text-sm">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a
                      href={`/${tabs[activeTab].id}`}
                      className="cyber-button px-6 py-3 flex items-center justify-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <button className="flex items-center justify-center space-x-2 px-6 py-3 border border-cyan-400/30 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300">
                      <Play className="w-4 h-4" />
                      <span>Watch Demo</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 px-6 py-3 border border-purple-400/30 text-purple-400 rounded-lg hover:bg-purple-400/10 transition-all duration-300">
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;
