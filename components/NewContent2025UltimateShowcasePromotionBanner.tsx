<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { 
  ArrowRight
  Star
  Zap
  Sparkles,
  TrendingUp,
  Users,
  Globe,
  X,
  Play,
  Download,
  ExternalLink
} from 'lucide-react';

const NewContent2025UltimateShowcasePromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentSlidesetCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-advance slides
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }4000);

    return () => clearInterval(interval);
  }[]);

  const slides = [
    {
      title: "Revolutionary AI Solutions",
      subtitle: "Transform your business with cutting-edge AI",
      description: "Discover our latest AI technologies that are reshaping industries",
      icon: Sparkles,
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/20 to-pink-900/20"
    },
    {
      title: "Quantum Computing Breakthrough",
      subtitle: "Next-generation quantum solutions",
      description: "Experience the power of quantum computing for complex problems",
      icon: Zap,
      color: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-900/20 to-cyan-900/20"
    },
    {
      title: "Neural Interface Technology",
      subtitle: "Brain-computer interface revolution",
      description: "Connect directly with technology through neural interfaces",
      icon: TrendingUp,
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-900/20 to-emerald-900/20"
    }
  ];

  const features = [
    "500+ Projects Completed",
    "99% Client Satisfaction",
    "50+ Countries Served",
    "$50M+ Cost Savings"
  ];

  const currentSlideData = slides[currentSlide];

  if (isDismissed) return null;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const NewContent2025UltimateShowcasePromotionBanner: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">NewContent2025UltimateShowcasePromotionBanner</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default NewContent2025UltimateShowcasePromotionBanner;