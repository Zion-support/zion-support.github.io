'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Pause, RotateCcw } from 'lucide-react';

interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  demoUrl?: string;
}

const DynamicContentShowcase: React.FC = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const showcaseItems: ShowcaseItem[] = [
    {
      id: '1',
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and custom reporting.',
      category: 'Analytics',
      image: '/images/showcase/ai-dashboard.jpg',
      demoUrl: '/demo/ai-dashboard'
    },
    {
      id: '2',
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management with cost optimization and auto-scaling.',
      category: 'Infrastructure',
      image: '/images/showcase/cloud-manager.jpg',
      demoUrl: '/demo/cloud-manager'
    },
    {
      id: '3',
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring with threat detection and incident response.',
      category: 'Security',
      image: '/images/showcase/security-suite.jpg',
      demoUrl: '/demo/security-suite'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % showcaseItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying, showcaseItems.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetShowcase = () => {
    setCurrentItem(0);
    setIsPlaying(false);
  };

  const currentShowcase = showcaseItems[currentItem];

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20">
      <div className="relative h-96">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 text-sm rounded-full mb-4">
              {currentShowcase.category}
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">{currentShowcase.title}</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl">{currentShowcase.description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 inline-flex items-center">
                View Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          <button
            onClick={togglePlayPause}
            className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          
          <button
            onClick={resetShowcase}
            className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
          </button>

          {/* Progress Dots */}
          <div className="flex gap-2">
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentItem(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentItem ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;