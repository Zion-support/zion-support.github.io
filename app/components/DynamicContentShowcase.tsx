'use client'
import React, { useState, useEffect } from 'react'
import { ArrowRight, Star, Clock, Users, TrendingUp } from 'lucide-react'

interface ContentItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  views: number;
  featured: boolean;
  publishedAt: string;
  author: string;
}

interface DynamicContentShowcaseProps {
  items: ContentItem[];
  title?: string;
  showFilters?: boolean;
  showStats?: boolean;
  autoRotate?: boolean;
  rotationInterval?: number;
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({
  items,
  title = 'Latest Content',
  showFilters = true,
  showStats = true,
  autoRotate = false,
  rotationInterval = 10000
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ['All', ...Array.from(new Set(items.map(item => item.category)))];

  const filteredItems = selectedCategory === 'All' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  const currentItem = filteredItems[currentIndex] || filteredItems[0];

  useEffect(() => {
    if (!autoRotate || filteredItems.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredItems.length);
    }, rotationInterval);

    return () => clearInterval(timer);
  }, [autoRotate, filteredItems.length, rotationInterval]);

  if (!currentItem) return null;

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        {showFilters && (
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentIndex(0);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Featured Content */}
        <div className="relative">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {currentItem.category}
            </span>
            {currentItem.featured && (
              <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <Star className="w-4 h-4 fill-current" />
                Featured
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold text-white mb-3">{currentItem.title}</h3>
          <p className="text-gray-300 mb-4 line-clamp-3">{currentItem.description}</p>

          {showStats && (
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {currentItem.readTime}
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {currentItem.views.toLocaleString()} views
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                {currentItem.author}
              </div>
            </div>
          )}

          <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
            Read More
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Content List */}
        <div className="space-y-4">
          {filteredItems.slice(0, 4).map((item, index) => (
            <div
              key={item.id}
              className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                index === currentIndex
                  ? 'border-cyan-400 bg-cyan-400/10'
                  : 'border-white/20 hover:border-cyan-400/50'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                      {item.category}
                    </span>
                    {item.featured && (
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    )}
                  </div>
                  <h4 className="text-white font-semibold mb-1 line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {item.description}
                  </p>
                  {showStats && (
                    <div className="flex items-center gap-3 text-xs text-gray-400 mt-2">
                      <span>{item.readTime}</span>
                      <span>{item.views.toLocaleString()} views</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;