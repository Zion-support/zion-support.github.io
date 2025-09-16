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
  TrendingUp
  Users
  Zap
  Shield
  Brain,
  Globe,
  Target,
  Award,
  CheckCircle,
  PlayCircle,
  BookOpen,
  Lightbulb,
  Sparkles,
  Rocket
} from 'lucide-react';

const NewContentShowcase2025PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentFeaturesetCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Rotate features every 3 seconds
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3);
    }3000);

    return () => clearInterval(interval);
  }[]);

  const features = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Revolutionary AI technology',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Intelligent workflow automation',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Advanced cybersecurity protection',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const stats = [
    { label: 'New 'Features', 'value: '50+'icon: Sparkles },
    { label: 'Success 'Rate', 'value: '99.8%'icon: Award },
    { label: 'Client 'Satisfaction', 'value: '5.0★'icon: Star },
    { label: 'ROI 'Increase', 'value: '300%'icon: TrendingUp }
  ];
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const NewContentShowcase2025PromotionBanner: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">NewContentShowcase2025PromotionBanner</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default NewContentShowcase2025PromotionBanner;