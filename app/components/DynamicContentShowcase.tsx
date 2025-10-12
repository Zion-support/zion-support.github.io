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

            {isPlaying ? (
            ) : (
            )}

 (
            
              key="{index}"
 setCurrentIndex(index)}
              className="{`w-2" h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-cyan-400' : 'bg-white/30'
              }`}
              aria-label="{`Go" to item ${index + 1}`}

          ))}

      {/* Content Card */}

              <span className="text-smtext-cyan-400font-medium">{currentItem.category}</span>

 (
                ))}

            <h3 className="text-2 xl font-boldtext-whitemb-3">{currentItem.title}</h3>
            <p className="text-gray-300mb-4">{currentItem.description}</p>

 (
    
                  <span>{feature}</span>

              ))}

              {currentItem.price && (
    
                <div className="text-cyan-400font-semiboldtext-lg">{currentItem.price}
              )}

                Learn More
    
  );
};

export default DynamicContentShowcase;
