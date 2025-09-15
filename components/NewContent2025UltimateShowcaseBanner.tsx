<<<<<<< HEAD
'use client';

=======
"use client";
>>>>>>> 30b45328d96b64c38b016a4cc6bac6d96d3d090e
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent2025UltimateShowcaseBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "Neural Superintelligence Breakthrough",
      subtitle: "Revolutionary AI achieving human-level consciousness",
      roi: "2,400%",
      icon: "🧠",
      color: "from-purple-600 to-indigo-600",
      features: ["Consciousness AI", "Neural Networks", "Cognitive Computing"]
    },
    {
      title: "Quantum-Neural Fusion Revolution",
      subtitle: "Merging quantum computing with neural networks",
      roi: "5,000%",
      icon: "⚛️",
      color: "from-blue-600 to-cyan-600",
      features: ["Quantum AI", "Neural Processing", "Advanced Computing"]
    },
    {
      title: "Autonomous Business Ecosystems",
      subtitle: "Self-managing business systems with minimal human intervention",
      roi: "8,000%",
      icon: "🤖",
      color: "from-green-600 to-emerald-600",
      features: ["Autonomous Operations", "Self-Healing Systems", "Intelligent Automation"]
    },
    {
      title: "Synthetic Intelligence Revolution",
      subtitle: "AI systems that create, modify, and improve themselves",
      roi: "10,000%",
      icon: "🔬",
      color: "from-orange-600 to-red-600",
      features: ["Self-Improving AI", "Synthetic Intelligence", "Evolutionary Computing"]
    }
  ];

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-blue-600/20 to-transparent"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-cyan-500/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ultimate AI Content Showcase
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Discover the most revolutionary AI content, trends, and insights that are transforming businesses worldwide. 
                Get access to exclusive content with proven ROI results.
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/90">Exclusive AI trends and insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/90">Interactive tools and calculators</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/90">Real case studies with proven ROI</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/90">Implementation guides and frameworks</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/content-showcase"
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Explore Content
                </Link>
                <Link
                  href="/newsletter"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
                >
                  Get Updates
                </Link>
              </div>
            </div>

            {/* Right Side - Interactive Showcase */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                {/* Main Showcase Card */}
                <div className={`bg-gradient-to-br ${currentSlideData.color} text-white rounded-3xl p-8 shadow-2xl transform transition-all duration-500 hover:scale-105`}>
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{currentSlideData.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{currentSlideData.title}</h3>
                    <p className="text-white/90 text-lg">{currentSlideData.subtitle}</p>
                  </div>

                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">{currentSlideData.roi}</div>
                      <div className="text-white/80">Average ROI</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                    {currentSlideData.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link
                      href={`/content/${currentSlide.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block w-full bg-white text-gray-900 text-center py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center space-x-2 mt-6">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        currentSlide === index ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Content Items</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50,000+</div>
              <div className="text-white/80">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">2,400%</div>
              <div className="text-white/80">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
          </div>

          {/* Content Categories */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Content Categories
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "AI Trends", icon: "📈", count: "150+" },
                { name: "Case Studies", icon: "📊", count: "75+" },
                { name: "Implementation", icon: "🛠️", count: "100+" },
                { name: "Tools & Calculators", icon: "💰", count: "50+" }
              ].map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h4 className="text-white font-semibold mb-2">{category.name}</h4>
                  <div className="text-white/80 text-sm">{category.count} items</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateShowcaseBanner;