import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface PromotionBanner {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundColor: string;
  textColor: string;
  icon: string;
  stats?: {
    value: string;
    label: string;
  }[];
}

const ContentPromotionBanner: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const banners: PromotionBanner[] = [
    {
      id: 'ai-transformation',
      title: '🚀 AI Enterprise Transformation Guide',
      subtitle: 'Learn how Fortune 500 companies achieve $50M+ annual savings with our proven AI strategies',
      ctaText: 'Read the Guide',
      ctaLink: '/blog/ai-enterprise-transformation-2025',
      backgroundColor: 'from-indigo-600 to-purple-600',
      textColor: 'text-white',
      icon: '💰',
      stats: [
        { value: '$50M+', label: 'Annual Savings' },
        { value: '95%', label: 'Process Automation' },
        { value: '300%', label: 'ROI' }
      ]
    },
    {
      id: 'ai-trends-2026',
      title: '🌟 AI 2026 Mega Trends Breakthrough',
      subtitle: 'Discover the revolutionary AI trends that will transform enterprise operations in 2026',
      ctaText: 'Explore Trends',
      ctaLink: '/blog/ai-2025-2026-mega-trends-breakthrough',
      backgroundColor: 'from-green-600 to-blue-600',
      textColor: 'text-white',
      icon: '🚀',
      stats: [
        { value: '$100B+', label: 'Market Value' },
        { value: '95%', label: 'Process Automation' },
        { value: '10x', label: 'Efficiency Gains' }
      ]
    },
    {
      id: 'autonomous-architecture',
      title: '🏗️ Autonomous Enterprise Architecture',
      subtitle: 'Revolutionary self-healing systems and predictive infrastructure for 99.9% uptime',
      ctaText: 'Learn More',
      ctaLink: '/blog/ai-2026-autonomous-enterprise-architecture',
      backgroundColor: 'from-purple-600 to-pink-600',
      textColor: 'text-white',
      icon: '🏗️',
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '90%', label: 'Cost Reduction' },
        { value: 'Real-time', label: 'Optimization' }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 8000); // Change banner every 8 seconds

    return () => clearInterval(interval);
  }, [banners.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const banner = banners[currentBanner];

  
  );
}