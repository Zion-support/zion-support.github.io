import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, X, Zap, Brain, Target, TrendingUp } from 'lucide-react';

const AI2025BreakthroughPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "AI 2025 Breakthrough Revolution",
      subtitle: "Transform Your Business with Revolutionary AI",
      description: "Discover the AI technologies that are delivering 2,500-5,000% ROI and revolutionizing entire industries.",
      cta: "Explore Breakthroughs",
      href: "/ai-2025-breakthrough-revolution",
      icon: "🧠",
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "Quantum Neural Fusion 2026",
      subtitle: "The Future of AI is Here",
      description: "Experience the next generation of AI with quantum-neural fusion technology delivering 10,000x performance gains.",
      cta: "Learn More",
      href: "/quantum-neural-fusion-2026",
      icon: "⚛️",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Autonomous Operations Mastery",
      subtitle: "Complete Business Automation",
      description: "Master autonomous operations with 99.9% accuracy and 10,000x faster processing speeds.",
      cta: "Get Started",
      href: "/autonomous-operations-mastery",
      icon: "🤖",
      color: "from-green-600 to-teal-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  if (!isVisible) return null;

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-indigo-600/90"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-400/30">
                <Zap className="w-4 h-4 inline mr-1" />
                New Breakthrough
              </span>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-full border border-orange-400/30">
                <TrendingUp className="w-4 h-4 inline mr-1" />
                Trending Now
              </span>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full border border-yellow-400/30">
                <Target className="w-4 h-4 inline mr-1" />
                Limited Time
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {currentSlideData.title}
            </h2>

            {/* Subtitle */}
            <h3 className="text-xl text-white/90 mb-4">
              {currentSlideData.subtitle}
            </h3>

            {/* Description */}
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              {currentSlideData.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2,500%</div>
                <div className="text-sm text-white/70">ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm text-white/70">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10,000x</div>
                <div className="text-sm text-white/70">Faster</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-white/70">Companies</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentSlideData.href}
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-white/90 transition-colors"
              >
                {currentSlideData.cta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors border border-white/30"
              >
                Schedule Demo
              </Link>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            {/* Icon Display */}
            <div className="text-center">
              <div className="text-8xl mb-4 animate-bounce">
                {currentSlideData.icon}
              </div>
              <div className="text-white/80 text-lg">
                {currentSlideData.title}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 text-center text-white/80 text-sm">
          <p>Trusted by 500+ Fortune 500 companies • 10,000+ successful implementations</p>
        </div>
      </div>
    </div>
  );
};

export default AI2025BreakthroughPromotionBanner;