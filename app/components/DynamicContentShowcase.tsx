'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, ExternalLink } from 'lucide-react';

interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
  featured: boolean;
}

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const showcaseItems: ShowcaseItem[] = [
    {
      id: '1',
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated insights.',
      image: '/images/showcase/analytics-dashboard.jpg',
      category: 'AI & Analytics',
      link: '/ai-analytics',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Migration Success Story',
      description: 'Complete digital transformation for a Fortune 500 company with 99.9% uptime.',
      image: '/images/showcase/cloud-migration.jpg',
      category: 'Cloud Services',
      link: '/cloud-migration',
      featured: false
    },
    {
      id: '3',
      title: 'Quantum Computing Breakthrough',
      description: 'Revolutionary quantum algorithm optimization reducing computation time by 1000x.',
      image: '/images/showcase/quantum-computing.jpg',
      category: 'Quantum Computing',
      link: '/quantum-computing',
      featured: true
    },
    {
      id: '4',
      title: 'Cybersecurity Implementation',
      description: 'Zero-trust security architecture protecting sensitive data across all touchpoints.',
      image: '/images/showcase/cybersecurity.jpg',
      category: 'Cybersecurity',
      link: '/cybersecurity',
      featured: false
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % showcaseItems.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying, showcaseItems.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + showcaseItems.length) % showcaseItems.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % showcaseItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dynamic <span className="text-cyan-400">Content Showcase</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest projects and innovations through an interactive showcase experience.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="relative w-full h-96 md:h-[600px] overflow-hidden rounded-2xl mb-8">
          {showcaseItems.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="relative w-full h-full">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex items-center h-full px-8 md:px-16">
                  <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-block px-4 py-2 bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                      {item.featured && (
                        <span className="inline-block px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-4xl md:text-6xl font-bold text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-200 mb-6 max-w-2xl">
                      {item.description}
                    </p>
                    <div className="flex gap-4">
                      <button className="bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors duration-200 flex items-center gap-2">
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-200">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Controls */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center space-x-4 mb-8">
          {showcaseItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                index === currentIndex ? 'ring-2 ring-cyan-400 scale-110' : 'opacity-60 hover:opacity-80'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {item.featured && (
                <div className="absolute top-1 right-1 w-3 h-3 bg-yellow-400 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/20 rounded-full h-1 mb-8">
          <div
            className="bg-cyan-400 h-1 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / showcaseItems.length) * 100}%` }}
          />
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-400/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how we can help bring your vision to life with our cutting-edge solutions.
            </p>
            <button className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;
