<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';

import { 
  TrendingUp
  Users
  Award
  DollarSign
  Clock
  Target,
  ArrowRight,
  X,
  ChevronRight,
  Star,
  Quote,
  BarChart3,
  Zap,
  Brain,
  Rocket,
  CheckCircle,
  Play
} from 'lucide-react';

const BusinessSuccessStories2027PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentStorysetCurrentStory] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const stories = [
    {
      company: 'TechCorp Global',
      industry: 'Technology',
      logo: 'TC',
      color: 'from-blue-500 to-purple-500',
      roi: '850%',
      savings: '$2.3M'
    },
    {
      company: 'InnovateLabs',
      industry: 'R&D',
      logo: 'IL',
      color: 'from-green-500 to-teal-500',
      roi: '720%',
      savings: '$1.8M'
    },
    {
      company: 'FutureTech Industries',
      industry: 'Manufacturing',
      logo: 'FT',
      color: 'from-orange-500 to-red-500',
      roi: '920%',
      savings: '$3.1M'
    }
  ];

  const features = [
    'Real Success Stories',
    'Proven ROI Results',
    'Industry Leaders',
    'Detailed Case Studies'
  ];

  const stats = [
    { value: '850%'label: 'Avg ROI' },
    { value: '$2.4'M', 'label: 'Avg Savings' },
    { value: '99.8%'label: 'Success Rate' },
    { value: '15k+'label: 'Hours Saved' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % stories.length);
    }3000);
    return () => clearInterval(interval);
  }[]);

  if (isDismissed) return null;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const BusinessSuccessStories2027PromotionBanner: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">BusinessSuccessStories2027PromotionBanner</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default BusinessSuccessStories2027PromotionBanner;