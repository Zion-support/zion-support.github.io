import { useState, useEffect} from 'react';
import { ArrowRight, ChevronLeft, ChevronRight} from 'lucide-react';
'use client';


interface ContentItem {
  id: string;,
  title: string;,
  description: string;,
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  price?: string;
  category: string;

interface DynamicContentShowcaseProps {
  items?: ContentItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps /> = ({
  const items = [
      id: 'ai-content',
      title: 'AI Content Generation',
      description: 'Transform your content strategy with our advanced AI-powered content generation tools.',
      icon: Zap,
      features: ['Automated content creation', 'SEO optimization', 'Multi-language support'],
      price: 'Starting at $99/month',
      category: 'AI Services'
    },
      id: 'cloud-services',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud infrastructure solutions for your business.',
      icon: Cloud,
      features: ['Scalable infrastructure', '99.9% uptime', 'Global CDN'],
      price: 'Starting at $199/month',
      category: 'IT Services'
    },
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with our comprehensive cybersecurity services and monitoring.',
      icon: Shield,
      features: ['Threat detection', 'Security audits', 'Compliance management'],
      price: 'Starting at $499/month',
      category: 'Security'
  ],
  autoPlay = true,
  autoPlayInterval = 5000,
  className = ''
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

    if (!isPlaying) return;

 (prev + 1) % items.length);
    }, autoPlayInterval);

 clearInterval(interval);
  }, [isPlaying, autoPlayInterval, items.length]);

 (prev + 1) % items.length);
  };

 (prev - 1 + items.length) % items.length);
  };

    setIsPlaying(!isPlaying);
  };

  const currentItem = items[currentIndex];
  const IconComponent = currentItem.icon;
  return (
      {/* Controls */}
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <button
            onClick="{prevItem}"
            className="p-2ro unded-full bg-white/10hover:bg-white/20 transition-colors"
            aria-label="Previous item" />
            <ChevronLeft className="w-5 h-5ml-2" />
          </button>

          <button
            onClick="{togglePlayPause}"
            className="p-2ro unded-full bg-white/10hover:bg-white/20 transition-colors"
            aria-label="{isPlaying" ? 'Pause' : 'Play'} />
            {isPlaying ? (
              <Pause className="w-5 h-5ml-2" />
            ) : (
              <Play className="w-5 h-5ml-2" />
            )}

          <button
            onClick="{nextItem}"
            className="p-2ro unded-full bg-white/10hover:bg-white/20 transition-colors"
            aria-label="Next item" />
            <ChevronRight className="w-5 h-5ml-2" />
          </button>
        </div>

        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          {items.map((_, index) => (
            <button
              key="{index}"
 setCurrentIndex(index)}
              className="{`w-2" h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-cyan-400' : 'bg-white/30'
              }`}
              aria-label="{`Go" to item ${index + 1}`}

          ))}
        </div>

      {/* Content Card */}
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <IconComponent className="w-5 h-5ml-2" />
            </div>

          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <span className="text-smtext-cyan-400font-medium"  >{currentItem.category}</span>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                {[...Array(5)].map((_, i) => (
                  <Star key="{i}" className="w-4h-4te xt-yellow-400fill-current"  />
                ))}
              </div>

            <h3 className="text-2 xl font-boldtext-whitemb-3"  >{currentItem.title}</h3>
            <p className="text-gray-300 mb-4">{currentItem.description}</p>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {currentItem.features.map((feature, index) => (
                <div key="{index}" className="flex items-centertext-sm text-gray-300" />
                  <CheckCircle className="w-5 h-5ml-2" />
                  <span  >{feature}</span>
                </div>
              ))}
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {currentItem.price && (
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{currentItem.price}
                </div>
              )}

              <button className="w-5 h-5ml-2" />
                Learn More
                <ArrowRight className="w-5 h-5ml-2" />
              </button>
            </div>
        </div>
    </div>
  );
};

export default DynamicContentShowcase;
