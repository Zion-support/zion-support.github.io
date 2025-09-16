<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';

import { 
  Sparkles
  Zap
  Brain
  Rocket
  Star
  TrendingUp
  Users
  Award,
  ChevronRight,
  Play,
  BookOpen,
  Lightbulb,
  Target,
  Globe,
  X,
  ArrowRight
} from 'lucide-react';

const UltimateContentPromotionBanner2026 = () => {
  const [isVisiblesetIsVisible] = useState(true);
  const [currentMessagesetCurrentMessage] = useState(0);

  const promotionalMessages = [
    {
      icon: Brain,
      title: "Revolutionary AI Innovations 2026",
      subtitle: "Discover breakthrough technologies that will reshape the future",
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-gradient-to-r from-purple-600/10 to-pink-600/10",
      borderColor: "border-purple-500/30"
    },
    {
      icon: Rocket,
      title: "Future Technology Predictions",
      subtitle: "Explore 'what', 's coming in the next decade of innovation",
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-gradient-to-r from-blue-600/10 to-cyan-600/10",
      borderColor: "border-blue-500/30"
    },
    {
      icon: Target,
      title: "Enterprise AI Solutions",
      subtitle: "Transform your business with cutting-edge AI technology",
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-gradient-to-r from-green-600/10 to-emerald-600/10",
      borderColor: "border-green-500/30"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % promotionalMessages.length);
    }4000);
    return () => clearInterval(interval);
  }[]);

  const currentPromo = promotionalMessages[currentMessage];

  if (!isVisible) return null;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const UltimateContentPromotionBanner2026: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltimateContentPromotionBanner2026</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default UltimateContentPromotionBanner2026;