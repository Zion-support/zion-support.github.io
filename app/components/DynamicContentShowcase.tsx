'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, Clock, Award } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that learn and adapt to your business needs in real-time'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Military-grade security protocols to protect your most sensitive data'
    },
    {
      icon: Zap,
      title: 'Lightning Performance',
      description: 'Optimized for speed with sub-second response times and 99.9% uptime'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Deploy anywhere in the world with our distributed infrastructure'
    },
    {
      icon: Star,
      title: 'Award-Winning',
      description: 'Recognized by industry leaders for innovation and excellence'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 support from our team of certified professionals'
    }
  ];

  const benefits = [
    'Increase productivity by up to 300%',
    'Reduce operational costs by 50%',
    'Improve customer satisfaction by 95%',
    'Scale seamlessly with your business'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Our Solutions?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our solutions deliver unmatched performance, security, and scalability for businesses of all sizes.
          </p>
        </div>

        {/* Dynamic Feature Showcase */}
        <div className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {React.createElement(features[currentIndex].icon, { className: "w-10 h-10 text-white" })}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {features[currentIndex].title}
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {features[currentIndex].description}
              </p>
            </div>
            
            {/* Feature Indicators */}
            <div className="flex justify-center space-x-2 mb-8">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-purple-500 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <p className="text-white font-medium">{benefit}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies that trust our solutions to power their success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;