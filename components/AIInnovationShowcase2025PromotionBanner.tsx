<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { 
  Sparkles
  ArrowRight
  Brain
  Zap
  TrendingUp
  X,
  Star,
  Rocket,
  Target
} from 'lucide-react';

const AIInnovationShowcase2025PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('ai-innovation-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }[]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ai-innovation-banner-'dismissed', 'true');
  };

  if (isDismissed || !isVisible) return null;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const AIInnovationShowcase2025PromotionBanner: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">AIInnovationShowcase2025PromotionBanner</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default AIInnovationShowcase2025PromotionBanner;