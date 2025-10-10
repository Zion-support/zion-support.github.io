'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Users, Zap } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Automation',
      description: 'Streamline your workflows with intelligent automation solutions',
      stats: '90% efficiency increase'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enhance team productivity with advanced collaboration tools',
      stats: '50% faster project delivery'
    },
    {
      icon: Star,
      title: 'Quality Assurance',
      description: 'Ensure top-quality deliverables with automated testing and monitoring',
      stats: '99.9% uptime guarantee'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dynamic Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our cutting-edge solutions through interactive demonstrations 
            and real-time content updates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Display */}
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-6xl">🚀</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {features[currentIndex].title}
              </h3>
              <p className="text-gray-300 text-lg mb-4">
                {features[currentIndex].description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-cyan-400 font-semibold">
                  {features[currentIndex].stats}
                </span>
                <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Feature List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border transition-all duration-300 cursor-pointer ${
                  index === currentIndex
                    ? 'bg-cyan-500/10 border-cyan-400/50'
                    : 'bg-slate-800/30 border-slate-700 hover:border-cyan-500/30'
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="flex items-start space-x-4">
                  <feature.icon className={`w-8 h-8 mt-1 ${
                    index === currentIndex ? 'text-cyan-400' : 'text-gray-400'
                  }`} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;