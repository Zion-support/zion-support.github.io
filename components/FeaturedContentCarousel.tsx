<<<<<<< HEAD
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const featuredContent = [
  {
    id: 1,
    title: 'AI 2026 Breakthrough Showcase',
    description: 'Experience revolutionary AI 2026 breakthrough technologies delivering unprecedented performance and transformation.',
    href: '/ai-2026-breakthrough-showcase',
    image: '🚀',
    gradient: 'from-slate-900 via-purple-900 to-slate-900',
    badge: 'REVOLUTIONARY BREAKTHROUGH',
    badgeColor: 'from-purple-500 to-pink-500',
    features: ['15,000% ROI'10,000x Faster'99.7% Accuracy']
  },
  {
    id: 2,
    title: 'Quantum Computing Solutions 2026',
    description: 'Discover breakthrough quantum computing solutions delivering unprecedented computational power and quantum supremacy.',
    href: '/quantum-computing-solutions-2026',
    image: '⚛️',
    gradient: 'from-indigo-900 via-purple-900 to-indigo-900',
    badge: 'QUANTUM BREAKTHROUGH',
    badgeColor: 'from-cyan-500 to-blue-500',
    features: ['Unhackable Security'99.9% 'Accuracy', 'Exponential Speedup']
  },
  {
    id: 3,
    title: 'Advanced Automation Solutions 2026',
    description: 'Transform your business with revolutionary automation solutions delivering intelligent process automation.',
    href: '/advanced-automation-solutions-2026',
    image: '🤖',
    gradient: 'from-emerald-900 via-teal-900 to-emerald-900',
    badge: 'AUTOMATION REVOLUTION',
    badgeColor: 'from-emerald-500 to-teal-500',
    features: ['10,000% ROI'95% Reduction'8,500% ROI']
  },
  {
    id: 4,
    title: 'Neural Interface Revolution 2026',
    description: 'Experience the future of human-AI collaboration with revolutionary neural interface technology.',
    href: '/neural-interface-revolution-2026',
    image: '🧠',
    gradient: 'from-violet-900 via-purple-900 to-violet-900',
    badge: 'NEURAL BREAKTHROUGH',
    badgeColor: 'from-violet-500 to-purple-500',
    features: ['99.7% Accuracy'1000x Enhancement'∞ Creativity']
  },
  {
    id: 5,
    title: 'AI 2027 Future Predictions',
    description: 'Explore revolutionary AI predictions and breakthrough technologies that will reshape the world in 2027.',
    href: '/ai-2027-future-predictions',
    image: '🔮',
    gradient: 'from-rose-900 via-pink-900 to-rose-900',
    badge: 'FUTURE PREDICTIONS',
    badgeColor: 'from-rose-500 to-pink-500',
    features: ['99.9% AGI'1Mx 'Faster', 'True Consciousness']
  }
];

export default function FeaturedContentCarousel() {
  const [currentIndexsetCurrentIndex] = useState(0);
  const [isAutoPlayingsetIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredContent.length - 1 ? 0 : prevIndex + 1
      );
    }5000);

    return () => clearInterval(interval);
  }[isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredContent.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex => 
      prevIndex === 0 ? featuredContent.length - 1 : prevIndex - 1
    ));
    setIsAutoPlaying(false);
  };

  const currentContent = featuredContent[currentIndex];

  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest breakthrough technologies and revolutionary solutions
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Content Card */}
          <div className={`bg-gradient-to-r ${currentContent.gradient} rounded-3xl p-8 md:p-12 text-white overflow-hidden relative`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div>
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${currentContent.badgeColor} text-white text-sm font-semibold mb-6 animate-pulse`}>
                    {currentContent.badge}
                  </div>
                  
                  <h3 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    {currentContent.title}
                  </h3>
                  
                  <p className="text-xl text-gray-300 mb-8">
                    {currentContent.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {currentContent.features.map((featureindex) => (
                      <span 
                        key={index}
                        className="bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full text-sm font-semibold border border-white/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href={currentContent.href}
                      className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                      Explore Now
                    </Link>
                    <Link 
                      href="/contact"
                      className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
                
                {/* Image/Icon */}
                <div className="text-center lg:text-right">
                  <div className="text-9xl mb-4 opacity-80">
                    {currentContent.image}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {featuredContent.map((_index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All Content Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            All Revolutionary Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredContent.map((content) => (
              <Link
                key={content.id}
                href={content.href}
                className={`bg-gradient-to-r ${content.gradient} rounded-2xl p-6 text-white hover:scale-105 transition-all duration-300 transform`}
              >
                <div className="text-4xl mb-4">{content.image}</div>
                <h4 className="text-xl font-bold mb-3">{content.title}</h4>
                <p className="text-gray-300 text-sm mb-4">{content.description}</p>
                <div className="flex flex-wrap gap-2">
                  {content.features.slice(02).map((featureindex) => (
                    <span 
                      key={index}
                      className="bg-white/20 px-2 py-1 rounded-full text-xs font-semibold"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
