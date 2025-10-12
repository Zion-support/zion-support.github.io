import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Pause, RotateCcw } from 'lucide-react';

interface ContentItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  featured: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: 1,
    title: 'AI-Powered Analytics',
    description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
    image: '/api/placeholder/400/300',
    category: 'AI Solutions',
    featured: true
  },
  {
    id: 2,
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions designed for modern businesses.',
    image: '/api/placeholder/400/300',
    category: 'Cloud Services',
    featured: false
  },
  {
    id: 3,
    title: 'Cybersecurity Suite',
    description: 'Comprehensive security solutions to protect your digital assets.',
    image: '/api/placeholder/400/300',
    category: 'Security',
    featured: true
  },
  {
    id: 4,
    title: 'IoT Integration',
    description: 'Connect and manage your IoT devices with our smart integration platform.',
    image: '/api/placeholder/400/300',
    category: 'IoT',
    featured: false
  }
];

export default function DynamicContentShowcase() {
  const [currentItem, setCurrentItem] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [filter, setFilter] = useState<string>('all');

  const filteredItems = filter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === filter);

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentItem((prev) => (prev + 1) % filteredItems.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isPlaying, filteredItems.length]);

  const categories = ['all', ...Array.from(new Set(contentItems.map(item => item.category)))];

  return (
    <>
      <Helmet>
        <title>Dynamic Content Showcase - Zion Tech Group</title>
        <meta name="description" content="Explore our dynamic showcase of AI and IT solutions." />
      </Helmet>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dynamic Content Showcase
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our innovative solutions through an interactive showcase experience.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setCurrentItem(0)}
                className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="Reset"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>

            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filter === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category === 'all' ? 'All' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Content Display */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={filteredItems[currentItem]?.image}
                  alt={filteredItems[currentItem]?.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {filteredItems[currentItem]?.category}
                  </span>
                </div>
                {filteredItems[currentItem]?.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {filteredItems[currentItem]?.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {filteredItems[currentItem]?.description}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {filteredItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentItem(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentItem ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to item ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}