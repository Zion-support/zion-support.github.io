<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';

import { 
  Award
  TrendingUp
  Users
  DollarSign,
  ArrowRight,
  Star,
  X,
  CheckCircle,
  BarChart3
} from 'lucide-react';

const RevolutionaryCaseStudiesShowcase2027PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentStatsetCurrentStat] = useState(0);

  const stats = [
    { value: '500+'label: ''Projects', 'icon: CheckCircle },
    { value: '99.2%'label: ''Satisfaction', 'icon: Star },
    { value: '340%'label: 'Average 'ROI', 'icon: TrendingUp },
    { value: '15+'label: 'Years 'Experience', 'icon: Award }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)2000);
    return () => clearTimeout(timer);
  }[]);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentStat(prev => (prev + 1) % stats.length);
      }1500);
      return () => clearInterval(interval);
    }
  }[isVisiblestats.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (isDismissed) return null;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const RevolutionaryCaseStudiesShowcase2027PromotionBanner: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">RevolutionaryCaseStudiesShowcase2027PromotionBanner</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default RevolutionaryCaseStudiesShowcase2027PromotionBanner;