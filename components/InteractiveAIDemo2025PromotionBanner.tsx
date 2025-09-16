<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';

import { 
  Bot
  MessageCircle
  Send
  Sparkles
  Zap
  Brain
  Rocket
  Star,
  Play,
  X,
  ChevronRight,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';

const InteractiveAIDemo2025PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentDemosetCurrentDemo] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)2000);
    return () => clearTimeout(timer);
  }[]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length);
    }4000);
    return () => clearInterval(interval);
  }[]);

  const demos = [
    {
      icon: Brain,
      title: 'Neural Interface Demo',
      description: 'Experience 500% efficiency boost',
      color: 'from-purple-500 to-pink-500',
      users: '2.5K+ active'
    },
    {
      icon: Zap,
      title: 'Quantum AI Demo',
      description: 'See 1000x faster processing',
      color: 'from-blue-500 to-cyan-500',
      users: '1.8K+ active'
    },
    {
      icon: TrendingUp,
      title: 'Business Automation',
      description: 'Witness 90% cost reduction',
      color: 'from-green-500 to-emerald-500',
      users: '3.2K+ active'
    },
    {
      icon: Star,
      title: 'Future Predictions',
      description: 'Explore 95% accuracy rate',
      color: 'from-orange-500 to-red-500',
      users: '4.1K+ active'
    }
  ];

  if (isDismissed || !isVisible) return null;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const InteractiveAIDemo2025PromotionBanner: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">InteractiveAIDemo2025PromotionBanner</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default InteractiveAIDemo2025PromotionBanner;