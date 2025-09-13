'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Sparkles, TrendingUp, Users, Globe } from 'lucide-react';

const NewContentPromotionBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    "AI-Powered Automation",
    "Quantum Computing",
    "Neural Interfaces",
    "Enterprise Solutions"
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Deploy solutions in minutes, not months"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: "Proven ROI",
      description: "Average 300% return on investment"
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      title: "Global Scale",
      description: "Trusted by 10,000+ companies worldwide"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Content */}
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <span className="text-yellow-200 font-semibold text-lg">NEW CONTENT ALERT</span>
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Revolutionary AI Solutions
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                2025 Edition
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover the latest breakthrough technologies that are transforming industries worldwide. 
              From quantum computing to neural interfaces, explore the future today.
            </p>
          </div>

          {/* Dynamic Feature Display */}
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Sparkles className="w-8 h-8 text-yellow-400" />
              <span className="text-2xl font-bold text-white">
                Now Featuring: <span className="text-yellow-400">{features[currentFeature]}</span>
              </span>
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </div>
          </div>

          {/* Benefits Grid */}
          <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-blue-100">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                href="/new-content-2025"
                className="group bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Explore New Content</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/ai-solutions"
                className="group border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>View All Solutions</span>
                <Users className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className={`transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-blue-200 mb-4">Trusted by leading organizations worldwide</p>
              <div className="flex items-center justify-center space-x-8 opacity-60">
                <div className="text-white font-bold text-lg">Microsoft</div>
                <div className="text-white font-bold text-lg">Google</div>
                <div className="text-white font-bold text-lg">Amazon</div>
                <div className="text-white font-bold text-lg">IBM</div>
                <div className="text-white font-bold text-lg">Tesla</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentPromotionBanner2025;