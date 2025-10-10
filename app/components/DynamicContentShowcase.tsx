'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Users, TrendingUp, Zap, Shield, Globe, Code } from 'lucide-react';

interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  category: string;
  stats: {
    value: string;
    label: string;
  }[];
  features: string[];
  icon: React.ReactNode;
  color: string;
}

const DynamicContentShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const showcaseItems: ShowcaseItem[] = [
    {
      id: '1',
      title: 'AI-Powered Analytics Platform',
      description: 'Transform your business data into actionable insights with our advanced AI analytics platform that learns and adapts to your specific needs.',
      category: 'AI Solutions',
      stats: [
        { value: '95%', label: 'Accuracy Rate' },
        { value: '300%', label: 'ROI Increase' },
        { value: '50+', label: 'Data Sources' }
      ],
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboards',
        'Automated reporting'
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'text-cyan-400'
    },
    {
      id: '2',
      title: 'Quantum Computing Solutions',
      description: 'Leverage the power of quantum computing for complex optimization problems, cryptography, and scientific research applications.',
      category: 'Emerging Tech',
      stats: [
        { value: '1000x', label: 'Speed Increase' },
        { value: '99.9%', label: 'Reliability' },
        { value: '24/7', label: 'Monitoring' }
      ],
      features: [
        'Quantum algorithm optimization',
        'Cryptographic security',
        'Scientific simulations',
        'Machine learning acceleration'
      ],
      icon: <Zap className="w-8 h-8" />,
      color: 'text-purple-400'
    },
    {
      id: '3',
      title: 'Autonomous Systems Platform',
      description: 'Build and deploy intelligent autonomous systems for manufacturing, logistics, and service industries with our comprehensive platform.',
      category: 'AI Solutions',
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '60%', label: 'Cost Reduction' },
        { value: '500+', label: 'Deployments' }
      ],
      features: [
        'Self-healing systems',
        'Predictive maintenance',
        'Real-time optimization',
        'Scalable architecture'
      ],
      icon: <Globe className="w-8 h-8" />,
      color: 'text-green-400'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === showcaseItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [showcaseItems.length]);

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Dynamic Solutions Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our cutting-edge AI and IT solutions that adapt and evolve with your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <div
              key={item.id}
              className={`bg-gray-800/50 rounded-2xl p-8 hover:scale-105 transition-all duration-300 ${
                index === activeIndex ? 'border-2 border-cyan-400' : 'border border-gray-700'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center text-white`}>
                  {item.icon}
                </div>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                  {item.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-6">
                {item.description}
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                {item.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className={`text-2xl font-bold ${item.color} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 flex items-center justify-center">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {showcaseItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-cyan-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;