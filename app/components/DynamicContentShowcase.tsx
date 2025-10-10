'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, CheckCircle, Zap, Brain, Cloud, Shield } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showcases = [
    {
      title: 'AI-Powered Business Transformation',
      description: 'See how we helped a Fortune 500 company reduce operational costs by 40% using our AI automation solutions.',
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      stats: ['40% Cost Reduction', '60% Faster Processing', '99.9% Accuracy'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Cloud Infrastructure Migration',
      description: 'Complete cloud transformation that improved scalability and reduced infrastructure costs by 50%.',
      icon: <Cloud className="w-12 h-12 text-blue-400" />,
      stats: ['50% Cost Savings', '10x Scalability', '99.99% Uptime'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Cybersecurity Implementation',
      description: 'Comprehensive security overhaul that eliminated all cyber threats and achieved SOC 2 compliance.',
      icon: <Shield className="w-12 h-12 text-green-400" />,
      stats: ['Zero Breaches', 'SOC 2 Compliant', '24/7 Monitoring'],
      color: 'from-green-500 to-teal-600'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % showcases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [showcases.length]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Success Stories</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real clients. See how we've transformed businesses across industries.
          </p>
        </div>
        
        <div className="relative">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-cyan-500/20 overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                {showcases[currentIndex].icon}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {showcases[currentIndex].title}
                  </h3>
                  <p className="text-gray-300">
                    {showcases[currentIndex].description}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                {showcases.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-cyan-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {showcases[currentIndex].stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${showcases[currentIndex].color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{stat}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2 mx-auto">
                <span>View Case Study</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicContentShowcase;