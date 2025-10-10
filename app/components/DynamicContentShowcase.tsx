'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Pause, RotateCcw, Maximize2 } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'image' | 'interactive' | 'demo';
  url?: string;
  thumbnail?: string;
  duration?: string;
  features?: string[];
}

interface DynamicContentShowcaseProps {
  title?: string;
  description?: string;
  contentItems: ContentItem[];
  autoPlay?: boolean;
  showControls?: boolean;
  className?: string;
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({
  title = "Dynamic Content Showcase",
  description = "Experience our solutions through interactive demos and showcases",
  contentItems,
  autoPlay = false,
  showControls = true,
  className = ""
}) => {
  const [currentItem, setCurrentItem] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextItem = () => {
    setCurrentItem((prev) => (prev + 1) % contentItems.length);
  };

  const prevItem = () => {
    setCurrentItem((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToItem = (index: number) => {
    setCurrentItem(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetShowcase = () => {
    setCurrentItem(0);
    setIsPlaying(false);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    if (isPlaying && autoPlay) {
      const interval = setInterval(nextItem, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, autoPlay]);

  if (contentItems.length === 0) {
    return null;
  }

  const currentContent = contentItems[currentItem];

  return (
    <div className={`bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ${className}`}>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">{title}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{description}</p>
          </div>

          <div className={`relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
            {/* Main Content Area */}
            <div className="aspect-video bg-gradient-to-r from-purple-500 to-blue-500 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">
                    {currentContent.type === 'video' && '🎥'}
                    {currentContent.type === 'image' && '🖼️'}
                    {currentContent.type === 'interactive' && '🎮'}
                    {currentContent.type === 'demo' && '🚀'}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{currentContent.title}</h3>
                  <p className="text-lg opacity-90">{currentContent.description}</p>
                  {currentContent.duration && (
                    <div className="mt-4 text-sm opacity-75">
                      Duration: {currentContent.duration}
                    </div>
                  )}
                </div>
              </div>

              {/* Overlay Controls */}
              {showControls && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <button
                      onClick={togglePlayPause}
                      className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                    </button>
                    <button
                      onClick={resetShowcase}
                      className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
                      aria-label="Reset"
                    >
                      <RotateCcw className="w-6 h-6" />
                    </button>
                    <button
                      onClick={toggleFullscreen}
                      className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
                      aria-label="Toggle fullscreen"
                    >
                      <Maximize2 className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            {contentItems.length > 1 && (
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    {contentItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToItem(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                          index === currentItem
                            ? 'bg-purple-500'
                            : 'bg-white/30 hover:bg-white/50'
                        }`}
                        aria-label={`Go to item ${index + 1}`}
                      />
                    ))}
                  </div>
                  <div className="text-white text-sm">
                    {currentItem + 1} / {contentItems.length}
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={prevItem}
                    className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-200"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                    Previous
                  </button>
                  <button
                    onClick={nextItem}
                    className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-200"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            )}

            {/* Features List */}
            {currentContent.features && currentContent.features.length > 0 && (
              <div className="p-6 border-t border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {currentContent.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DynamicContentShowcase;