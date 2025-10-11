const fs = require('fs');
const path = require('path');

// Fix ContentPromotionBanner.tsx
const contentPromotionBanner = `'use client';
import React from 'react';
import { Zap, Shield, Star, Users, ArrowRight } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence for your business needs'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security and compliance standards'
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Industry-leading solutions and support'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated professionals at your service'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Experience the power of cutting-edge technology with our comprehensive AI and IT solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-white mb-4">
                <feature.icon className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-cyan-100 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-all duration-300 flex items-center justify-center mx-auto">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;`;

// Fix ContentCarousel.tsx
const contentCarousel = `'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const ContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const items: CarouselItem[] = [
    {
      id: 1,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with our advanced AI technologies',
      image: '/api/placeholder/600/400',
      link: '/ai-solutions'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      image: '/api/placeholder/600/400',
      link: '/cloud-solutions'
    },
    {
      id: 3,
      title: 'Data Analytics',
      description: 'Unlock insights from your data with powerful analytics tools',
      image: '/api/placeholder/600/400',
      link: '/data-analytics'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: 'translateX(-' + currentIndex * 100 + '%)' }}
        >
          {items.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-lg mb-4">{item.description}</p>
                    <a
                      href={item.link}
                      className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={'w-3 h-3 rounded-full transition-all ' + (index === currentIndex ? 'bg-cyan-500' : 'bg-gray-300')}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentCarousel;`;

// Fix DynamicContentShowcase.tsx
const dynamicContentShowcase = `'use client';
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

export default DynamicContentShowcase;`;

// Fix ContentStatistics.tsx
const contentStatistics = `'use client';
import React from 'react';
import { TrendingUp, Users, Award, Zap } from 'lucide-react';

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
}

const ContentStatistics: React.FC = () => {
  const stats: StatItem[] = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Active Users',
      change: '+25%',
      changeType: 'positive'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      change: '+0.1%',
      changeType: 'positive'
    },
    {
      icon: Award,
      value: '50+',
      label: 'Awards Won',
      change: '+5',
      changeType: 'positive'
    },
    {
      icon: Zap,
      value: '2.5s',
      label: 'Avg Response Time',
      change: '-0.3s',
      changeType: 'positive'
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we're making a difference for businesses worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="text-cyan-400">
                  <stat.icon className="h-8 w-8" />
                </div>
                <span className={'text-sm font-semibold ' + (
                  stat.changeType === 'positive' ? 'text-green-400' : 
                  stat.changeType === 'negative' ? 'text-red-400' : 
                  'text-gray-400'
                )}>
                  {stat.change}
                </span>
              </div>
              
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              
              <div className="text-gray-300 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;`;

// Write all component files
const components = [
  { path: 'app/components/ContentPromotionBanner.tsx', content: contentPromotionBanner },
  { path: 'app/components/ContentCarousel.tsx', content: contentCarousel },
  { path: 'app/components/DynamicContentShowcase.tsx', content: dynamicContentShowcase },
  { path: 'app/components/ContentStatistics.tsx', content: contentStatistics }
];

components.forEach(component => {
  try {
    fs.writeFileSync(component.path, component.content);
    console.log(`Fixed: ${component.path}`);
  } catch (error) {
    console.error(`Error fixing ${component.path}:`, error.message);
  }
});

console.log('All component files have been processed.');