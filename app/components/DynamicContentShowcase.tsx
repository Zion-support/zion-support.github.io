export default DynamicContentShowcase;
'use client';

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

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps /> = ({items},
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

    interval={setInterval(() =}> {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval, items.length]);

  nextItem={() =}> {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  prevItem={() =}> {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  togglePlayPause={() =}> {
    setIsPlaying(!isPlaying);
  };

  currentItem={items[currentIndex];
  IconComponent={currentItem.icon;
  return (
    <div  className={{`relative ${className}`} } /}}></div>
      {/* Controls */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <button;
            onClick="{prevItem}"
            className="p-2rou nded-full bg-white/10hover:bg-white/20 transition-colors"
            aria-label="Previous item" /></button>
            <ChevronLeft className="w-5h-5ml-2" /></ChevronLeft>
          </button>
          <button;
            onClick="{togglePlayPause}"
            className="p-2rou nded-full bg-white/10hover:bg-white/20 transition-colors"
            aria-label="{isPlaying" ? 'Pause' : 'Play'} /></button>
            {isPlaying ? (
              <Pause className="w-5h-5ml-2" /></Pause>
            ) : (
              <Play className="w-5h-5ml-2" /></Play>
            )}
          </button>
          <button;
            onClick="{nextItem}"
            className="p-2rou nded-full bg-white/10hover:bg-white/20 transition-colors"
            aria-label="Next item" /></button>
            <ChevronRight className="w-5h-5ml-2" /></ChevronRight>
          </button>
        </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <IconComponent className="w-5h-5ml-2" /></IconComponent>
            </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <span className="text-smtext-cyan-400font-medium"  >{currentItem.category}</span>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4h-4tex t-yellow-400fill-current"  /></Star>
                ))}
              </div>
            <h3 className="text-2 xl font-bold text-whitemb-3"  >{currentItem.title}</h3>
            <p className="text-gray-300 mb-4">{currentItem.description}</p>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {currentItem.features.map((feature, index) => (
                <div key={index} className="flex items-centertext-sm text-gray-300" /></div>
                  <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                  <span  >{feature}</span>
                </div>
              ))}
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {currentItem.price && (
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{currentItem.price}
                </div>
              )}

              <button className="w-5h-5ml-2" /></button>
                Learn More;
                <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
              </button>
            </div>
        </div>
    </div>
  );
};
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function DynamicContentShowcase() {
  return (
    <><Helmet>
        <title>Dynamic Content Showcase - Zion Tech Group</title>
        <meta name="description" content="Professional dynamic content showcase by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Dynamic Content Showcase</h1>
          <p className="text-lg text-gray-300 mb-8">Professional dynamic content showcase coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div></>
  );
}
