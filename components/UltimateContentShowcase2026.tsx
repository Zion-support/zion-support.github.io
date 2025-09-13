'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2026 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechCorp",
      content: "The AI 2026 content revolutionized our entire operation. We achieved 15,000% ROI in just 3 months!",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "CTO, InnovateLab",
      content: "The quantum neural fusion technology is absolutely mind-blowing. Our processing speed increased by 10,000x!",
      avatar: "👨‍💻",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "Research Director, FutureTech",
      content: "The predictive accuracy is unprecedented. We can now forecast market trends with 99.9% precision.",
      avatar: "👩‍🔬",
      rating: 5
    }
  ];

  const features = [
    {
      icon: "🚀",
      title: "Revolutionary Technology",
      description: "Cutting-edge AI systems that redefine what's possible",
      stats: "10,000x faster processing"
    },
    {
      icon: "🎯",
      title: "Unprecedented ROI",
      description: "Proven results with measurable business impact",
      stats: "Up to 25,000% ROI"
    },
    {
      icon: "🔮",
      title: "Future-Ready",
      description: "Built for tomorrow's challenges and opportunities",
      stats: "99.9% accuracy"
    },
    {
      icon: "⚡",
      title: "Instant Deployment",
      description: "Get started immediately with our plug-and-play solutions",
      stats: "Deploy in minutes"
    }
  ];

  const contentHighlights = [
    {
      title: "AI 2026 Neural Interface Revolution",
      description: "Direct brain-computer interfaces for unprecedented control",
      link: "/ai-2026-neural-interface-revolution",
      image: "🧠",
      category: "Neural Tech",
      featured: true
    },
    {
      title: "Quantum Neural Fusion Breakthrough",
      description: "Quantum-enhanced AI for exponential processing power",
      link: "/ai-2026-quantum-neural-fusion-revolution",
      image: "⚡",
      category: "Quantum AI",
      featured: true
    },
    {
      title: "AI 2026 Future Predictions",
      description: "Advanced forecasting with 99.9% accuracy",
      link: "/ai-2026-future-predictions-breakthrough",
      image: "🔮",
      category: "Predictions",
      featured: true
    }
  ];

  return (
    <div className={`py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              ULTIMATE CONTENT
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              SHOWCASE 2026
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            Experience the most comprehensive collection of AI breakthrough content, 
            revolutionary technologies, and future-ready solutions that will transform your business
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 text-center">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-center mb-4">
                {feature.description}
              </p>
              <div className="text-center">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold rounded-full">
                  {feature.stats}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Content Highlights */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            🌟 Featured Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contentHighlights.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                onClick={() => window.location.href = item.link}
              >
                <div className="text-4xl mb-4 text-center">{item.image}</div>
                <div className="text-center mb-2">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-full">
                    {item.category}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-center mb-4">
                  {item.description}
                </p>
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300">
                    Explore →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            💬 What Our Clients Say
          </h3>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-6xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                </div>
                <blockquote className="text-xl text-gray-200 mb-6 italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div className="text-white font-bold text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-300">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>
            
            {/* Testimonial Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-cyan-400 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-16 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-white text-lg">Content Pieces</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">25,000%</div>
              <div className="text-white text-lg">Max ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-white text-lg">Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-white text-lg">Support</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="/ai-2026-future-predictions-breakthrough"
            className="inline-block px-12 py-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold text-xl rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Start Your Ultimate AI Journey →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;