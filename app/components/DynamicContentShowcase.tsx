import { useState, useEffect} from 'react';

import { ArrowRight, ChevronLeft, ChevronRight} from 'lucide-react';
'use client';



interface ContentItem {
  id: string;,
  title: string;,
  description: string;,
  i con: R eact.C omp onentT ype<{ c las sNa me?: string }>;
  f eat ures: string[];
  p rice?: string;
  category: string;
}
interface DynamicContentShowcaseProps {
  items?: ContentItem[];
  autoPlay?: b ool ean;
  autoPla yInter val?: n umb er;
  c las sNa me?: string;
}
c onst DynamicContentShowcase: R eact.FC<DynamicContentShowcaseProps /> = ({
  c onst items = [
    {
      id: 'ai-c ontent',
      title: 'AI Content Generation',
      description: 'Transform your c ontent strategy with our advanced AI-powered c ontent generation tools.',
      i con: Zap,
      f eat ures: ['Automated c ontent creation', 'SEO optimization', 'Multi-language support'],
      p rice: 'Starting at $99/month',
      category: 'AI Services'
    },
    {
      id: 'cloud-services',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secu re, and reliable cloud infrastructure solutio ns for your business.',
      i con: Cloud,
      f eat ures: ['Scalable infrastructure', '99.9% uptime', 'Global CDN'],
      p rice: 'Starting at $199/month',
      category: 'IT Services'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutio ns',
      description: 'Protect your business with our comprehensive cybersecurity services and monitoring.',
      i con: Shield,
      f eat ures: ['Thre at detection', 'Security audits', 'C ompliance management'],
      p rice: 'Starting at $499/month',
      category: 'Security'
    }
  ],
  autoPlay = true,
  autoPla yInter val = 5000,
  c las sNa me = ''
}) => {
  c onst [curr ent Ind ex, s etC urr ent Ind ex] = useState(0);
  c onst [isPlaying, s etIsPlaying] = useState(autoPlay);
  useEffect(() => {
    if (!isPlaying) return;
    c onst inte rval = s etI nte rval(() => {
      s etC urr ent Ind ex((prev) => (prev + 1) % items.length);
    }, autoPla yInter val);
    return () => clearInter val(inte rval);
  }, [isPlaying, autoPla yInter val, items.length]);
  c onst nextItem = () => {
    s etC urr ent Ind ex((prev) => (prev + 1) % items.length);
  };
  c onst prevItem = () => {
    s etC urr ent Ind ex((prev) => (prev - 1 + items.length) % items.length);
  };
  c onst togglePlayPause = () => {
    s etIsPlaying(!isPlaying);
  };
  c onst curr entItem = items[curr ent Ind ex];
  c onst IconCompon ent = curr entItem.i con;
  return (

    <div const className = {`relative ${className}`} />
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
          </button>

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
              onCl ick="{()" = /> s etC urr ent Ind ex(index)}
              c las sNa me="{`w-2" h-2 r oun ded-f ull transition-colors ${
                index === curr ent Ind ex ? 'bg-cyan-400' : 'bg-w hite/30'
              }`}
              aria-label="{`Go" to item ${index + 1}`}
            />
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

