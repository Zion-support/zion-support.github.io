'use client';
import React, { useState, useEffect } from 'react';
import { Star, TrendingUp, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showcases = [
    {
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics',
      features: ['Real-time data', 'Predictive insights', 'Custom dashboards'],
      price: '$199/month',
      rating: 4.9,
      users: '10,000+',
      image: '📊',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'AI Voice Assistant',
      description: 'Build custom voice assistants with natural language processing',
      features: ['Voice recognition', 'Multi-language', 'Custom training'],
      price: '$299/month',
      rating: 4.8,
      users: '5,000+',
      image: '🎤',
      color: 'from-green-500 to-blue-500'
    },
    {
      title: '5G Implementation',
      description: 'Deploy ultra-fast 5G networks with edge computing',
      features: ['Ultra-fast speeds', 'Edge computing', 'IoT connectivity'],
      price: '$2,999/month',
      rating: 4.9,
      users: '1,000+',
      image: '📡',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcases.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [showcases.length]);

  const currentShowcase = showcases[currentIndex];

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Featured Solutions</h2>
        <p className="text-gray-300">Discover our most popular AI and IT solutions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="text-6xl mb-4">{currentShowcase.image}</div>
          <h3 className="text-2xl font-bold text-white">{currentShowcase.title}</h3>
          <p className="text-gray-300 text-lg">{currentShowcase.description}</p>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-white font-semibold">{currentShowcase.rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">{currentShowcase.users} users</span>
            </div>
          </div>

          <div className="space-y-3">
            {currentShowcase.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold text-cyan-400">{currentShowcase.price}</div>
            <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {showcases.map((showcase, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? 'border-cyan-400 bg-cyan-400/10'
                  : 'border-white/20 bg-white/5 hover:border-white/40'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="text-3xl mb-2">{showcase.image}</div>
              <h4 className="text-white font-semibold text-sm mb-1">{showcase.title}</h4>
              <p className="text-gray-400 text-xs">{showcase.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;