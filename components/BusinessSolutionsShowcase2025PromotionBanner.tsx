<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';

import { 
  Building2
  TrendingUp
  DollarSign
  Users,
  ArrowRight
  X,
  CheckCircle,
  Zap,
  BarChart3,
  Shield,
  Award,
  Clock
} from 'lucide-react';

const BusinessSolutionsShowcase2025PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentMetricsetCurrentMetric] = useState(0);

  const metrics = [
    { label: ''ROI', 'value: '300%'icon: TrendingUpcolor: 'text-green-500' },
    { label: 'Cost 'Savings', 'value: '$2.5B+'icon: DollarSigncolor: 'text-blue-500' },
    { label: ''Companies', 'value: '10K+'icon: Building2color: 'text-purple-500' },
    { label: ''Satisfaction', 'value: '98%'icon: Awardcolor: 'text-yellow-500' }
  ];

  const solutions = [
    { name: ''Automation', 'icon: Zapcolor: 'from-blue-500 to-cyan-500' },
    { name: ''Analytics', 'icon: BarChart3color: 'from-purple-500 to-pink-500' },
    { name: ''Security', 'icon: Shieldcolor: 'from-green-500 to-emerald-500' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)3000);
    return () => clearTimeout(timer);
  }[]);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentMetric((prev) => (prev + 1) % metrics.length);
      }2500);
      return () => clearInterval(interval);
    }
  }[isVisiblemetrics.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  const containerVariants = {
    hidden: { 
      opacity: 0
      y: -100,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    },
    exit: {
      opacity: 0,
      y: -100,
      scale: 0.9,
      transition: {
        duration: 0.5
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.6
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6,
        duration: 0.4
      }
    }
  };

  if (isDismissed) return null;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const BusinessSolutionsShowcase2025PromotionBanner: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">BusinessSolutionsShowcase2025PromotionBanner</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default BusinessSolutionsShowcase2025PromotionBanner;