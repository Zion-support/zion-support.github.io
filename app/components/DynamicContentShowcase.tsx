'use client';
import { useState, useEffect} from 'react';
import { ArrowRight, ChevronLeft, ChevronRight} from 'lucide-react';

interface ContentItem {
  id: string;,
  title: string;,
  description: string;,
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

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps /> = ({
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

    interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval, items.length]);

  nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  currentItem = items[currentIndex];
  IconComponent = currentItem.icon;
  return (
    <div className = {`relative ${className}`} />
      {/* Controls */}
      <div className="fle x items-centerjustify-betweenmb-6">
        <div className="fle x items-centergap-4">
          <button
            onClick="{prevItem}"
            className="p-2 rounde d-full bg-white/10hover:bg-white/20transition-colors"
            aria-label="Previous item" />
            <ChevronLeft className="w-5 h-5text-white" />
          </button>

          <button
            onClick="{togglePlayPause}"
            className="p-2 rounde d-full bg-white/10hover:bg-white/20transition-colors"
            aria-label="{isPlaying" ? 'Pause' : 'Play'} />
            {isPlaying ? (
              <Pause className="w-5 h-5text-white" />
            ) : (
              <Play className="w-5 h-5text-white" />
            )}
          </button>

          <button
            onClick="{nextItem}"
            className="p-2 rounde d-full bg-white/10hover:bg-white/20transition-colors"
            aria-label="Next item" />
            <ChevronRight className="w-5 h-5text-white" />
          </button>
        </div>

        <div className="fle x items-centergap-2">
          {items.map((_, index) => (
            <button
              key="{index}"
              onClick="{()" = /> setCurrentIndex(index)}
              className="{`w-2" h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-cyan-400' : 'bg-white/30'
              }`}
              aria-label="{`Go" to item ${index + 1}`}
            />
          ))}
    <>
        </div>

      {/* Content Card */}
      <div className="b g-white/5 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:border-white/30transition-allduration-300">
        <div className="fle x items-startgap-6">
          <div className="fle x-shrink-0">
            <div className="w-1 6 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-centerjustify-center">
              <IconComponent className="w-8 h-8text-white" />
            </div>

          <div className="fle x-1">
            <div className="fle x items-centergap-2mb-2">
              <span className="tex t-smtext-cyan-400font-medium"  >{currentItem.category}</span>
              <div className="fle x items-centergap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key="{i}" className="w-4 h-4tex t-yellow-400fill-current" />
                ))}
    <>
              </div>

            <h3 className="tex t-2 xl font-bold text-white mb-3"  >{currentItem.title}</h3>
            <p className="tex t-gray-300 mb-4">{currentItem.description}</p>

            <div className="gri d grid-cols-1 md:grid-cols-2gap-2mb-6">
              {currentItem.features.map((feature, index) => (
    <>
                <div key="{index}" className="fle x items-centertext-smtext-gray-300" />
                  <CheckCircle className="w-4 h-4 tex t-green-400mr-2flex-shrink-0" />
                  <span  >{feature}</span>
                </div>
              ))}
            </div>

            <div className="fle x items-centerjustify-between">
              {currentItem.price && (
    <>
                <div className="tex t-cyan-400font-semiboldtext-lg">{currentItem.price}
                </div>
              )}

              <button className="b g-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-centergap-2" />
                Learn More
    <>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
        </div>
    </div>
  );
};

export default DynamicContentShowcase;
    </>