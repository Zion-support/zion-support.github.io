'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, CheckCircle, Zap, Shield, Brain } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showcaseItems = [
    {
      title: 'AI-Powered Automation',
      description: 'Streamline your business processes with intelligent automation solutions',
      icon: Brain,
      features: ['Process Optimization', 'Workflow Automation', 'Smart Decision Making', 'Cost Reduction'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Enterprise Security',
      description: 'Protect your business with advanced cybersecurity solutions',
      icon: Shield,
      features: ['Threat Detection', 'Data Protection', 'Compliance Management', '24/7 Monitoring'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and reliable cloud solutions for modern businesses',
      icon: Zap,
      features: ['Auto-scaling', 'High Availability', 'Cost Optimization', 'Global Reach'],
      color: 'from-green-500 to-emerald-600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [showcaseItems.length]);

  const currentItem = showcaseItems[currentIndex];

  return (
    <div className="cyber-card p-8 mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          Dynamic Solutions Showcase
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover how our cutting-edge technology can transform your business operations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className={`w-16 h-16 bg-gradient-to-r ${currentItem.color} rounded-lg flex items-center justify-center`}>
              <currentItem.icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{currentItem.title}</h3>
              <p className="text-gray-300">{currentItem.description}</p>
            </div>
          </div>

          <ul className="space-y-3">
            {currentItem.features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          <button className="cyber-button px-6 py-3 font-semibold inline-flex items-center space-x-2">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="hidden lg:block">
          <div className="relative">
            <div className={`w-full h-64 bg-gradient-to-br ${currentItem.color} rounded-lg flex items-center justify-center transition-all duration-500`}>
              <div className="text-center text-white">
                <currentItem.icon className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-semibold">Interactive Demo</p>
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-4">
              {showcaseItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-cyan-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;