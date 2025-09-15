<<<<<<< HEAD
'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, X, Star, Zap, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const NewContentPromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Show banner after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-rotate slides every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const promotions = [
    {
      id: 1,
      title: "🚀 New AI Innovation Showcase 2025",
      description: "Discover revolutionary AI breakthroughs and cutting-edge technologies",
      link: "/ai-innovation-showcase-2025",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30"
    },
    {
      id: 2,
      title: "✨ Success Stories & Case Studies",
      description: "See how companies achieved 500%+ ROI with our AI solutions",
      link: "/success-stories-2025",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      id: 3,
      title: "🔮 Future Technology Predictions",
      description: "Explore AI trends and predictions for 2025-2030",
      link: "/ai-2025-2030-ultimate-predictions",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30"
    }
  ];

  const currentPromotion = promotions[currentSlide];

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className={`max-w-6xl mx-auto bg-gradient-to-r ${currentPromotion.bgColor} backdrop-blur-sm border ${currentPromotion.borderColor} rounded-2xl shadow-2xl overflow-hidden`}>
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          {/* Content */}
          <div className="p-6 pr-16">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                  <span className="text-sm text-white/80 font-medium">NEW CONTENT</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {currentPromotion.title}
                </h3>
                
                <p className="text-white/80 mb-4 max-w-2xl">
                  {currentPromotion.description}
                </p>

                <div className="flex items-center space-x-4">
                  <Link
                    href={currentPromotion.link}
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${currentPromotion.color} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 group`}
                  >
                    Explore Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <div className="flex items-center space-x-2 text-white/60">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm">Limited Time</span>
                  </div>
                </div>
              </div>

              {/* Visual Element */}
              <div className="hidden md:block ml-8">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-16 h-16 text-white/60" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">!</span>
                  </div>
=======
import React, { useState, useEffect } from 'react';

const NewContentPromotionBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const newContentItems = [
    {
      id: 1,
      title: "Metaverse & Web3 Revolution 2026",
      description: "Experience immersive virtual worlds with decentralized Web3 technologies",
      icon: "🌐",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/MetaverseWeb3Revolution2026",
      badge: "NEW"
    },
    {
      id: 2,
      title: "Edge Computing & IoT Revolution",
      description: "Ultra-low latency processing with intelligent IoT orchestration",
      icon: "⚡",
      gradient: "from-blue-600 to-cyan-600",
      link: "/pages/EdgeComputingIoTRevolution2026",
      badge: "HOT"
    },
    {
      id: 3,
      title: "Green Technology & Sustainability",
      description: "Carbon-neutral AI and renewable energy solutions for a sustainable future",
      icon: "🌱",
      gradient: "from-green-600 to-emerald-600",
      link: "/pages/GreenTechSustainabilityRevolution2026",
      badge: "TRENDING"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContentItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [newContentItems.length]);

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-8 mb-12 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-bold mb-4 animate-bounce">
            🚀 BREAKTHROUGH CONTENT • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            Revolutionary Technology Content
          </h2>
          <p className="text-xl text-purple-200 max-w-4xl mx-auto">
            Discover our latest cutting-edge technology solutions that are reshaping industries and creating new possibilities
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Content Display */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content Info */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-4xl">{newContentItems[currentSlide].icon}</span>
                  <div>
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${newContentItems[currentSlide].gradient} text-white text-xs font-bold rounded-full mb-2`}>
                      {newContentItems[currentSlide].badge}
                    </span>
                    <h3 className="text-3xl font-bold text-white">
                      {newContentItems[currentSlide].title}
                    </h3>
                  </div>
                </div>
                <p className="text-purple-200 mb-6 text-lg">
                  {newContentItems[currentSlide].description}
                </p>
                <a 
                  href={newContentItems[currentSlide].link}
                  className={`inline-block bg-gradient-to-r ${newContentItems[currentSlide].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
                >
                  Explore Now →
                </a>
              </div>

              {/* Visual Element */}
              <div className="text-center">
                <div className={`w-64 h-64 mx-auto bg-gradient-to-br ${newContentItems[currentSlide].gradient} rounded-2xl flex items-center justify-center text-8xl shadow-2xl transform hover:scale-105 transition-transform duration-300`}>
                  {newContentItems[currentSlide].icon}
>>>>>>> origin/cursor/create-and-deploy-new-content-7e3a
                </div>
              </div>
            </div>
          </div>

<<<<<<< HEAD
          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 pb-4">
            {promotions.map((_index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
=======
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-4 mb-6">
            {newContentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
>>>>>>> origin/cursor/create-and-deploy-new-content-7e3a
                }`}
              />
            ))}
          </div>
<<<<<<< HEAD
=======

          {/* Quick Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {newContentItems.map((item, index) => (
              <a
                key={item.id}
                href={item.link}
                className={`p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                  index === currentSlide 
                    ? 'bg-white/20 border-2 border-white/50' 
                    : 'bg-white/10 hover:bg-white/15'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-white font-semibold text-sm">{item.title}</div>
                    <div className="text-purple-200 text-xs">{item.description}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <p className="text-purple-200 mb-4">Ready to explore all our revolutionary content?</p>
          <a 
            href="/pages/SyntheticIntelligence2026" 
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg hover:scale-105"
          >
            🌟 View All Revolutionary Content
          </a>
>>>>>>> origin/cursor/create-and-deploy-new-content-7e3a
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner;