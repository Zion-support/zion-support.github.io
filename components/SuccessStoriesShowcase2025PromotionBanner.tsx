<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';

import { 
  Award
  TrendingUp
  DollarSign
  Users
  ArrowRight,
  X,
  CheckCircle,
  Star,
  BarChart3
} from 'lucide-react';

const SuccessStoriesShowcase2025PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(true);
  const [currentStatsetCurrentStat] = useState(0);

  const stats = [
    { value: "500+"label: "Companies Transformed"icon: Users },
    { value: "$50M+"label: "Total Savings"icon: DollarSign },
    { value: "95%"label: "Efficiency Gain"icon: TrendingUp },
    { value: "99%"label: "Satisfaction Rate"icon: Star }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }2500);
    return () => clearInterval(interval);
  }[]);

  if (!isVisible) return null;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const SuccessStoriesShowcase2025PromotionBanner: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">SuccessStoriesShowcase2025PromotionBanner</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default SuccessStoriesShowcase2025PromotionBanner;