'use client';

import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Star, Users, TrendingUp, Shield } from 'lucide-react';

interface BannerContent {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  type: 'promotion' | 'announcement' | 'feature';
  priority: number;
}

const ContentPromotionBanner: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState<BannerContent | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  const bannerContent: BannerContent[] = [
    {
      id: '1',
      title: '🚀 New AI Services Available!',
      description: 'Discover our latest AI-powered solutions for business automation and growth.',
      ctaText: 'Explore Now',
      ctaLink: '/ai-services',
      type: 'promotion',
      priority: 1
    },
    {
      id: '2',
      title: '⭐ Special Offer: 30% Off First Month',
      description: 'Get started with any of our micro SAAS solutions at a discounted rate.',
      ctaText: 'Claim Offer',
      ctaLink: '/pricing',
      type: 'promotion',
      priority: 2
    },
    {
      id: '3',
      title: '📢 Free Consultation Available',
      description: 'Schedule a free consultation with our technology experts to discuss your needs.',
      ctaText: 'Book Now',
      ctaLink: '/consultation',
      type: 'announcement',
      priority: 3
    }
  ];

  const stats = [
    { label: 'Happy Clients', value: '500+', icon: Users },
    { label: 'Projects Completed', value: '1000+', icon: TrendingUp },
    { label: 'Success Rate', value: '98%', icon: Star },
    { label: 'Security Score', value: 'A+', icon: Shield }
  ];

  useEffect(() => {
    // Select the highest priority banner
    const sortedBanners = bannerContent.sort((a, b) => a.priority - b.priority);
    setCurrentBanner(sortedBanners[0]);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCTAClick = () => {
    if (currentBanner) {
      // Track analytics event
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
        gtag('event', 'banner_cta_click', {
          event_category: 'engagement',
          event_label: currentBanner.id,
          banner_title: currentBanner.title
        });
      }
    }
  };

  if (!isVisible || !currentBanner) {
    return null;
  }

  return (
    <div className="relative bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">{currentBanner.title}</h3>
                <p className="text-sm opacity-90">{currentBanner.description}</p>
              </div>
              <a
                href={currentBanner.ctaLink}
                onClick={handleCTAClick}
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
              >
                {currentBanner.ctaText}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="ml-4 text-white/80 hover:text-white transition-colors duration-200"
            aria-label="Close banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;