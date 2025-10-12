'use client';

import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

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
      id: 'ai-content',
      title: 'AI Content Generation',
      description: 'Transform your content strategy with our advanced AI-powered content generation tools.',
      icon: Zap,
      features: ['Automated content creation', 'SEO optimization', 'Multi-language support'],
      price: 'Starting at $99/month',
      category: 'AI Services'
    },
    {
      id: 'cloud-services',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud infrastructure solutions for your business.',
      icon: Cloud,
      features: ['Scalable infrastructure', '99.9% uptime', 'Global CDN'],
      price: 'Starting at $199/month',
      category: 'IT Services'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with our comprehensive cybersecurity services and monitoring.',
      icon: Shield,
      features: ['Threat detection', 'Security audits', 'Compliance management'],
      price: 'Starting at $499/month',
      category: 'Security'
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

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentItem = items[currentIndex];
  const IconComponent = currentItem.icon;

  return (
    <div className={`relative ${className}`}>
      {/* Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={prevItem}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Previous item"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={togglePlayPause}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white" />
            )}
          </button>

          <button
            onClick={nextItem}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Next item"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-cyan-400' : 'bg-white/30'
              }`}
              aria-label={`Go to item ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Card */}
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-cyan-400 font-medium">{currentItem.category}</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">{currentItem.title}</h3>
            <p className="text-gray-300 mb-4">{currentItem.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
              {currentItem.features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between">
              {currentItem.price && (
                <div className="text-cyan-400 font-semibold text-lg">
                  {currentItem.price}
                </div>
              )}

              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;