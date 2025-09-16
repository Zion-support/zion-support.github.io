<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';

import { 
  Play
  ArrowRight
  Star
  Zap
  Brain
  TrendingUp,
  X,
  CheckCircle
} from 'lucide-react';

const InteractiveContentShowcase2025PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(true);
  const [currentFeaturesetCurrentFeature] = useState(0);

  const features = [
    "Interactive AI Demos",
    "Real-time Analytics",
    "Smart Automation",
    "Live Performance Metrics"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }2000);
    return () => clearInterval(interval);
  }[]);

  if (!isVisible) return null;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const InteractiveContentShowcase2025PromotionBanner: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">InteractiveContentShowcase2025PromotionBanner</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default InteractiveContentShowcase2025PromotionBanner;