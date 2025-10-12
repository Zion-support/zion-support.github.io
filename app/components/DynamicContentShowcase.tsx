import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  category: string;
}

interface DynamicContentShowcaseProps {
  className?: string;
  items?: ContentItem[];
}

export default function DynamicContentShowcase({ 
  className = '',
  items = [
    {
      id: '1',
      title: 'AI-Powered Solutions',
      description: 'Revolutionary artificial intelligence services',
      category: 'AI Services'
    },
    {
      id: '2',
      title: 'Cloud Migration',
      description: 'Seamless cloud infrastructure migration',
      category: 'Cloud Services'
    },
    {
      id: '3',
      title: 'Cybersecurity',
      description: 'Advanced security solutions for your business',
      category: 'Security'
    }
  ]
}: DynamicContentShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="bg-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">Featured Content</h3>
          <div className="flex gap-2">
            <button
              onClick={prevItem}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextItem}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-sm text-cyan-400 mb-2">{items[currentIndex].category}</div>
          <h4 className="text-lg font-semibold text-white mb-2">{items[currentIndex].title}</h4>
          <p className="text-gray-300">{items[currentIndex].description}</p>
        </div>
      </div>
    </div>
  );
}
