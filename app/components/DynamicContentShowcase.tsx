'use client';
import { useState, useEffect} from 'react';
import { ArrowRight, ChevronLeft, ChevronRight} from 'lucide-react';
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
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
  const items = [
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
    <div const className = {`relative ${className}`} />
      {/* Controls */}
<<<<<<< HEAD
      <div className="flex items-centerjustify-betweenmb-6">
        <div className="flex items-centergap-4">
=======
    <>
      <div className="flex items-centerjustify-betweenmb-6">
        </div>
        <div className="flexitems-centergap-4">
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
          <button
            onClick="{prevItem}"
            className="p-2 rounded-full bg-white/10hover:bg-white/20transition-colors"
            aria-label="Previous item" />
<<<<<<< HEAD
            <ChevronLeft className="w-5h-5text-white" />
=======
    <>
            <ChevronLeft className="w-5h-5text-white" / />
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
          </button>

          <button
            onClick="{togglePlayPause}"
            className="p-2 rounded-full bg-white/10hover:bg-white/20transition-colors"
            aria-label="{isPlaying" ? 'Pause' : 'Play'} />
            {isPlaying ? (
              <Pause className="w-5h-5text-white" />
            ) : (
              <Play className="w-5h-5text-white" />
            )}
          </button>

          <button
            onClick="{nextItem}"
            className="p-2 rounded-full bg-white/10hover:bg-white/20transition-colors"
            aria-label="Next item" />
<<<<<<< HEAD
            <ChevronRight className="w-5h-5text-white" />
          </button>
        </div>

        <div className="flex items-centergap-2">
=======
    <>
            <ChevronRight className="w-5h-5text-white" / />
          </button>
        </div>

        <div className="flexitems-centergap-2">
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
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
<<<<<<< HEAD
      <div className="bg-white/5 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:border-white/30transition-allduration-300">
        <div className="flex items-startgap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-centerjustify-center">
              <IconComponent className="w-8h-8text-white" />
            </div>

          <div className="flex-1">
            <div className="flex items-centergap-2mb-2">
              <span className="text-smtext-cyan-400font-medium"  >{currentItem.category}</span>
              <div className="flex items-centergap-1">
=======
    <>
      <div className="bg-white/5 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:border-white/30transition-allduration-300">
        </div>
        <div className="flexitems-startgap-6">
        </div>
          <div className="flex-shrink-0">
        </div>
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flexitems-centerjustify-center">
        </div>
              <IconComponent className="w-8h-8text-white" / />
            </div>

    <>
          <div className="flex-1">
        </div>
            <div className="flex items-centergap-2mb-2">
        </div>
              <span className="text-smtext-cyan-400font-medium">{currentItem.category}</span>
              <div className="flexitems-centergap-1">
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                {[...Array(5)].map((_, i) => (
                  <Star key="{i}" className="w-4 h-4text-yellow-400fill-current" />
                ))}
    <>
              </div>

<<<<<<< HEAD
            <h3 className="text-2 xl font-bold text-white mb-3"  >{currentItem.title}</h3>
            <p className="text-gray-300 mb-4">{currentItem.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2gap-2mb-6">
=======
    <>
            <h3 className="text-2 xl font-boldtext-whitemb-3">{currentItem.title}</h3>
            <p className="text-gray-300mb-4">{currentItem.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2gap-2mb-6">
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              {currentItem.features.map((feature, index) => (
    <>
                <div key="{index}" className="flex items-centertext-smtext-gray-300" />
<<<<<<< HEAD
                  <CheckCircle className="w-4 h-4 text-green-400mr-2flex-shrink-0" />
                  <span  >{feature}</span>
=======
                  <CheckCircle className="w-4 h-4 text-green-400mr-2flex-shrink-0" / />
                  <span>{feature}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                </div>
              ))}
            </div>

            <div className="flex items-centerjustify-between">
              {currentItem.price && (
    <>
                <div className="text-cyan-400font-semiboldtext-lg">{currentItem.price}
                </div>
              )}

              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-centergap-2" />
                Learn More
    <>
                <ArrowRight className="w-4h-4" />
              </button>
            </div>
        </div>
    </div>
  );
};

export default DynamicContentShowcase;
    </>