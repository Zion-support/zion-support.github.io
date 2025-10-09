'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Clock, Users, Zap, Shield, Brain, Cloud } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const showcaseData = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      description: 'Comprehensive artificial intelligence implementations that transform business operations',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
        'Intelligent Automation'
      ],
      stats: {
        value: '95%',
        label: 'Accuracy Rate'
      }
    },
    {
      id: 'it-services',
      title: 'IT Services',
      description: 'Enterprise-grade IT infrastructure and support services for modern businesses',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-600',
      features: [
        'Cloud Migration',
        'DevOps Implementation',
        'Cybersecurity Solutions',
        'Network Infrastructure',
        'System Administration',
        '24/7 Support'
      ],
      stats: {
        value: '99.9%',
        label: 'Uptime'
      }
    },
    {
      id: 'automation',
      title: 'Process Automation',
      description: 'Intelligent automation solutions that streamline workflows and boost productivity',
      icon: Zap,
      color: 'from-green-500 to-emerald-600',
      features: [
        'Workflow Automation',
        'Document Processing',
        'Data Integration',
        'API Development',
        'System Integration',
        'Custom Solutions'
      ],
      stats: {
        value: '300%',
        label: 'ROI'
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('showcase-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % showcaseData.length);
      }, 6000);

      return () => clearInterval(timer);
    }
  }, [isVisible, showcaseData.length]);

  const currentData = showcaseData[activeTab];
  const IconComponent = currentData.icon;

  return (
    <section id="showcase-section" className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Dynamic Solutions Showcase
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive range of AI and IT solutions designed to transform your business
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {showcaseData.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeTab === index
                      ? `bg-gradient-to-r ${item.color} text-white shadow-lg scale-105`
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                >
                  <ItemIcon className="w-5 h-5" />
                  <span className="font-medium">{item.title}</span>
                </button>
              );
            })}
          </div>

          {/* Content Display */}
          <div className="cyber-card-enhanced holographic-card quantum-field p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${currentData.color}`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {currentData.title}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="text-2xl font-bold text-cyan-400">
                        {currentData.stats.value}
                      </div>
                      <div className="text-gray-300">
                        {currentData.stats.label}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">
                  {currentData.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {currentData.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-sm text-gray-300"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`/${currentData.id}`}
                    className="cyber-button inline-flex items-center justify-center px-6 py-3"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href="/contact"
                    className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className={`w-full h-80 bg-gradient-to-br ${currentData.color} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center text-white">
                    <IconComponent className="w-32 h-32 mx-auto mb-6 opacity-80" />
                    <div className="text-6xl font-bold mb-2">
                      {currentData.stats.value}
                    </div>
                    <div className="text-xl opacity-90">
                      {currentData.stats.label}
                    </div>
                  </div>
                  
                  {/* Animated particles */}
                  <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${2 + Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating stats */}
                <div className="absolute -top-4 -right-4 bg-slate-800/90 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4">
                  <div className="flex items-center space-x-2 text-white">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <div>
                      <div className="text-lg font-bold">5.0</div>
                      <div className="text-xs text-gray-400">Rating</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-slate-800/90 backdrop-blur-sm border border-purple-400/30 rounded-lg p-4">
                  <div className="flex items-center space-x-2 text-white">
                    <Users className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-lg font-bold">100+</div>
                      <div className="text-xs text-gray-400">Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicContentShowcase;