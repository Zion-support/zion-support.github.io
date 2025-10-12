import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Star, Zap, Shield, Brain } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  price?: string;
  category: string;
}

interface DynamicContentShowcaseProps {
  items?: ContentItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({
  items = [
    {
      id: '1',
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      icon: Brain,
      features: ['Real-time Analysis', 'Predictive Modeling', 'Custom Dashboards', 'API Integration'],
      price: '$299/month',
      category: 'AI Solutions'
    },
    {
      id: '2',
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses.',
      icon: Shield,
      features: ['Auto-scaling', 'Security Monitoring', 'Cost Optimization', '24/7 Support'],
      price: '$199/month',
      category: 'Cloud Services'
    },
    {
      id: '3',
      title: 'Performance Optimization',
      description: 'Boost your application performance with our optimization tools.',
      icon: Zap,
      features: ['Speed Analysis', 'Resource Optimization', 'Monitoring', 'Automated Fixes'],
      price: '$149/month',
      category: 'Performance'
    }
  ],
  autoPlay = true,
  autoPlayInterval = 5000,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval, items.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = items[currentIndex];

  return (
    <div className={`relative ${className}`}>
      <div className="bg-gray-800 rounded-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mr-4">
              <currentItem.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{currentItem.title}</h3>
              <p className="text-cyan-400 text-sm">{currentItem.category}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            <button
              onClick={goToPrevious}
              className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <p className="text-gray-300 mb-6">{currentItem.description}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {currentItem.features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-300">
              <Star className="w-4 h-4 text-cyan-400 mr-2" />
              {feature}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {currentItem.price && (
              <span className="text-2xl font-bold text-white">{currentItem.price}</span>
            )}
            <button className="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors flex items-center">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-cyan-400' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default DynamicContentShowcase;