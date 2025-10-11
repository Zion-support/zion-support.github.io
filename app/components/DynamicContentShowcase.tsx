'use client';
import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface ShowcaseItem {
  id: number;
  title: string;
  description: string;
  type: 'video' | 'image' | 'interactive';
  content: string;
}

const DynamicContentShowcase: React.FC = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const items: ShowcaseItem[] = [
    {
      id: 1,
      title: 'AI Dashboard Demo',
      description: 'Interactive dashboard showcasing real-time AI analytics',
      type: 'interactive',
      content: '/api/placeholder/800/600'
    },
    {
      id: 2,
      title: 'Cloud Migration Process',
      description: 'Step-by-step visualization of our cloud migration process',
      type: 'video',
      content: '/api/placeholder/800/600'
    },
    {
      id: 3,
      title: 'Data Visualization',
      description: 'Advanced data visualization tools in action',
      type: 'image',
      content: '/api/placeholder/800/600'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % items.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPlaying, items.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetShowcase = () => {
    setCurrentItem(0);
    setIsPlaying(true);
  };

  const currentShowcaseItem = items[currentItem];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {currentShowcaseItem.title}
            </h2>
            <p className="text-gray-300">
              {currentShowcaseItem.description}
            </p>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={togglePlayPause}
              className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-lg transition-colors"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </button>
            <button
              onClick={resetShowcase}
              className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-lg transition-colors"
            >
              <RotateCcw className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
          {currentShowcaseItem.type === 'video' ? (
            <video
              src={currentShowcaseItem.content}
              className="w-full h-full object-cover"
              autoPlay={isPlaying}
              muted
              loop
            />
          ) : (
            <img
              src={currentShowcaseItem.content}
              alt={currentShowcaseItem.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentItem(index)}
              className={'w-3 h-3 rounded-full transition-all ' + (index === currentItem ? 'bg-cyan-500' : 'bg-gray-400')}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;