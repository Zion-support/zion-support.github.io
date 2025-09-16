<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';

import { 
  ArrowRight
  Star
  TrendingUp
  Users
  DollarSign
  Sparkles,
  X,
  Play,
  ExternalLink,
  CheckCircle,
  Award
} from 'lucide-react';

const BusinessSuccessStoriesShowcase2025PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)1500);
    return () => clearTimeout(timer);
  }[]);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (isDismissed) return null;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const BusinessSuccessStoriesShowcase2025PromotionBanner: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">BusinessSuccessStoriesShowcase2025PromotionBanner</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default BusinessSuccessStoriesShowcase2025PromotionBanner;