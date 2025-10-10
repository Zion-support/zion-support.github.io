'use client';
import React, { useState, useEffect } from 'react';
import { Brain, Cloud, Shield, Code, BarChart, Users, Zap, Target, ArrowRight, CheckCircle } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const showcaseData = [
    {
      id: 0,
      title: "AI-Powered Solutions",
      description: "Transform your business with cutting-edge artificial intelligence",
      icon: Brain,
      color: "cyan",
      features: [
        "Machine Learning Models",
        "Natural Language Processing", 
        "Computer Vision",
        "Predictive Analytics",
        "AI Automation",
        "Custom AI Development"
      ],
      stats: {
        efficiency: "300%",
        accuracy: "95%",
        costReduction: "50%"
      }
    },
    {
      id: 1,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for modern businesses",
      icon: Cloud,
      color: "blue",
      features: [
        "Cloud Migration",
        "Server Management",
        "Auto-scaling",
        "24/7 Monitoring",
        "Disaster Recovery",
        "Cost Optimization"
      ],
      stats: {
        uptime: "99.9%",
        scalability: "Unlimited",
        security: "Enterprise"
      }
    },
    {
      id: 2,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      icon: Shield,
      color: "purple",
      features: [
        "Threat Detection",
        "Security Audits",
        "Compliance Management",
        "Incident Response",
        "Vulnerability Scanning",
        "Security Training"
      ],
      stats: {
        protection: "100%",
        responseTime: "< 1min",
        compliance: "100%"
      }
    },
    {
      id: 3,
      title: "Custom Development",
      description: "Bespoke software solutions designed specifically for your requirements",
      icon: Code,
      color: "green",
      features: [
        "Web Applications",
        "Mobile Apps",
        "API Development",
        "Database Design",
        "System Integration",
        "Maintenance & Support"
      ],
      stats: {
        delivery: "On Time",
        quality: "100%",
        support: "24/7"
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % showcaseData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentData = showcaseData[activeTab];

  return (
    <section className="py-16 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Core Capabilities
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We combine cutting-edge technology with industry expertise to deliver solutions that drive real business value.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {showcaseData.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-${item.color}-500 text-white shadow-lg`
                  : `bg-slate-700/50 text-gray-300 hover:bg-slate-600/50`
              }`}
            >
              <div className="flex items-center space-x-2">
                <item.icon className="w-5 h-5" />
                <span>{item.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 bg-gradient-to-r from-${currentData.color}-500 to-${currentData.color}-600 rounded-xl flex items-center justify-center`}>
                <currentData.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">{currentData.title}</h3>
                <p className="text-gray-300 text-lg">{currentData.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Key Features:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentData.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className={`w-5 h-5 text-${currentData.color}-400 flex-shrink-0`} />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-6">
              {Object.entries(currentData.stats).map(([key, value], index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl font-bold text-${currentData.color}-400`}>{value}</div>
                  <div className="text-gray-400 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <a
                href="/contact"
                className={`bg-gradient-to-r from-${currentData.color}-500 to-${currentData.color}-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-${currentData.color}-600 hover:to-${currentData.color}-700 transition-all duration-300 flex items-center space-x-2`}
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`/${currentData.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="border border-gray-600 text-gray-300 font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            <div className={`bg-gradient-to-br from-${currentData.color}-500/10 to-${currentData.color}-600/10 rounded-2xl p-8 border border-${currentData.color}-500/20`}>
              <div className="text-center">
                <div className={`text-6xl mb-4 text-${currentData.color}-400`}>
                  {currentData.icon === Brain && '🧠'}
                  {currentData.icon === Cloud && '☁️'}
                  {currentData.icon === Shield && '🛡️'}
                  {currentData.icon === Code && '💻'}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{currentData.title}</h4>
                <p className="text-gray-300 mb-6">{currentData.description}</p>
                
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(currentData.stats).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className={`text-xl font-bold text-${currentData.color}-400`}>{value}</div>
                      <div className="text-gray-400 text-xs capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
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