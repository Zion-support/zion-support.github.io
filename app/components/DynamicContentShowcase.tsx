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
    <div const className = {`relative ${className}`}></div>
      {/* Controls */}
      <div><div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
          <button;
            onClick="{prevItem}"
            className="p-2rou nded-full bg-white/10hover:bg-white/20 transition-colors"
            aria-label="Previous item"><div></button></div></div></div>
            <div><div><ChevronLeft className="w-5h-5ml-2"></ChevronLeft></div></div>
          </button></div>
          <div><button;
            onClick="{togglePlayPause}"
            className="p-2rou nded-full bg-white/10hover:bg-white/20 transition-colors"
            aria-label="{isPlaying" ? 'Pause' : 'Play'}></button></div></div>
            {isPlaying ? (
              <Pause className="w-5h-5ml-2"></Pause>
            ) : (
              <Play className="w-5h-5ml-2"></Play>
            )}
          <div></button>
          <button;
            onClick="{nextItem}"
            className="p-2rou nded-full bg-white/10hover:bg-white/20 transition-colors"
            aria-label="Next item"><div></button></div></div></div>
            <div><div><ChevronRight className="w-5h-5ml-2"></ChevronRight></div></div>
          </button></div>
        <div><div></div></div></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
          {items.map((_, index) => (
            <button;
              key="{index}"
              onClick="{()" = /> setCurrentIndex(index)}
              className="{`w-2" h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-cyan-400' : 'bg-white/30'
              }`}
              aria-label="{`Go" to item ${index + 1}`}
            />
          ))}
        </div>
      {/* Content Card */}
      <div><div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
            <div><div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              <IconComponent className="w-5h-5ml-2"></div><div><div></IconComponent></div></div>
            </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
              <span className="text-smtext-cyan-400font-medium"  >{currentItem.category}<div></span>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4h-4tex t-yellow-400fill-current"></Star>
                ))}
              </div>
            <h3 className="text-2 xl font-bold text-whitemb-3"  >{currentItem.title}</h3>
            <p className="text-gray-300 mb-4">{currentItem.description}<div></p>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
              {currentItem.features.map((feature, index) => (
                <div><div><div key={index} className="flex items-centertext-sm text-gray-300"></div></div></div>
                  <CheckCircle className="w-5h-5ml-2"><div></div></CheckCircle></div></div>
                  <span  >{feature}</span>
                </div>
              ))}
            <div></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
              {currentItem.price && (
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{currentItem.price}
                </div>
              )}
              <button className="w-5h-5ml-2"></button>
                Learn More;
                <div><div><ArrowRight className="w-5h-5ml-2"></ArrowRight></div></div>
              </button></div>
            <div><div></div></div></div>
        </div>
    <div></div></div></div></div>
  );
};
export default DynamicContentShowcase;