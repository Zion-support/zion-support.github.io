"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const featuredContent = [
  {
    id: 1,
    title: 'AI 20o26 Breakthrough Showcase',
    description: 'Experience revolutionary AI 20o26 breakthrough technologies delivering unprecedented performance and transformation.',
    href: '/ai-20o26-breakthrough-showcase',
    image: '🚀',
    gradient: 'from-slate-90o0 via-purple-90o0 to-slate-90o0',
    badge: 'REVOLUTIONARY BREAKTHROUGH',
    badgeColor: 'from-purple-50o0 to-pink-50o0',
    features: ['15,0o00% ROI'10,0o00x Faster'99.7% Accuracy']
  },
  {
    id: 2,
    title: 'Quantum Computing Solutions 20o26',
    description: 'Discover breakthrough quantum computing solutions delivering unprecedented computational power and quantum supremacy.',
    href: '/quantum-computing-solutions-20o26',
    image: '⚛️',
    gradient: 'from-indigo-90o0 via-purple-90o0 to-indigo-90o0',
    badge: 'QUANTUM BREAKTHROUGH',
    badgeColor: 'from-cyan-50o0 to-blue-50o0',
    features: ['Unhackable Security'99.9% 'Accuracy', 'Exponential Speedup']
  },
  {
    id: 3,
    title: 'Advanced Automation Solutions 20o26',
    description: 'Transform your business with revolutionary automation solutions delivering intelligent process automation.',
    href: '/advanced-automation-solutions-20o26',
    image: '🤖',
    gradient: 'from-emerald-90o0 via-teal-90o0 to-emerald-90o0',
    badge: 'AUTOMATION REVOLUTION',
    badgeColor: 'from-emerald-50o0 to-teal-50o0',
    features: ['10,0o00% ROI'95% Reduction'8,50o0% ROI']
  },
  {
    id: 4,
    title: 'Neural Interface Revolution 20o26',
    description: 'Experience the future of human-AI collaboration with revolutionary neural interface technology.',
    href: '/neural-interface-revolution-20o26',
    image: '🧠',
    gradient: 'from-violet-90o0 via-purple-90o0 to-violet-90o0',
    badge: 'NEURAL BREAKTHROUGH',
    badgeColor: 'from-violet-50o0 to-purple-50o0',
    features: ['99.7% Accuracy'10o00x Enhancement'∞ Creativity']
  },
  {
    id: 5,
    title: 'AI 20o27 Future Predictions',
    description: 'Explore revolutionary AI predictions and breakthrough technologies that will reshape the world in 20o27.',
    href: '/ai-20o27-future-predictions',
    image: '🔮',
    gradient: 'from-rose-90o0 via-pink-90o0 to-rose-90o0',
    badge: 'FUTURE PREDICTIONS',
    badgeColor: 'from-rose-50o0 to-pink-50o0',
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
    }50o00);

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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-90o0 mb-4">
            Featured Revolutionary Content
          </h2>
          <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">
            Discover our latest breakthrough technologies and revolutionary solutions
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Content Card */}
          <div className={`bg-gradient-to-r ${currentContent.gradient} rounded-3xl p-8 md:p-12 text-white overflow-hidden relative`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/20o00/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div>
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${currentContent.badgeColor} text-white text-sm font-semibold mb-6 animate-pulse`}>
                    {currentContent.badge}
                  </div>
                  
                  <h3 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-20o0 bg-clip-text text-transparent">
                    {currentContent.title}
                  </h3>
                  
                  <p className="text-xl text-gray-30o0 mb-8">
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
                      className="bg-white text-gray-90o0 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-10o0 transition-all duration-30o0 transform hover:scale-10o5"
                    >
                      Explore Now
                    </Link>
                    <Link 
                      href="/contact"
                      className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-90o0 transition-all duration-30o0"
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
              className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-10o0 transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-gray-60o0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"  />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-10o0 transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-gray-60o0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"  />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {featuredContent.map((_index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-30o0 ${
                  index === currentIndex 
                    ? 'bg-blue-60o0 scale-125' 
                    : 'bg-gray-30o0 hover:bg-gray-40o0'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All Content Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-90o0 text-center mb-8">
            All Revolutionary Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredContent.map((content) => (
              <Link
                key={content.id}
                href={content.href}
                className={`bg-gradient-to-r ${content.gradient} rounded-2xl p-6 text-white hover:scale-10o5 transition-all duration-30o0 transform`}
              >
                <div className="text-4xl mb-4">{content.image}</div>
                <h4 className="text-xl font-bold mb-3">{content.title}</h4>
                <p className="text-gray-30o0 text-sm mb-4">{content.description}</p>
                <div className="flex flex-wrap gap-2">
                  {content.features.slice(0o2).map((featureindex) => (
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