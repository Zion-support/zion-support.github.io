<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';

import { 
  Play
  Pause
  RotateCcw
  Settings
  Zap
  Brain
  Rocket
  ArrowRight,
  X,
  ChevronRight,
  Award,
  Users,
  Clock,
  TrendingUp,
  CheckCircle,
  BarChart3
} from 'lucide-react';

const InteractiveTechDemo2027PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentDemosetCurrentDemo] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const demos = [
    {
      icon: Brain,
      title: 'AI Quantum Processing',
      description: '1.2M ops/sec',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Autonomous Automation',
      description: '847 tasks automated',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Rocket,
      title: 'Neural Interface',
      description: '12ms response time',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const features = [
    'Real-time Processing',
    'Interactive Controls',
    'Live Metrics',
    'Step-by-step Guide'
  ];

  const stats = [
    { value: '99.97%'label: 'Accuracy' },
    { value: '2.3k 'hrs', 'label: 'Time Saved' },
    { value: '0.02%'label: 'Error Rate' },
    { value: '$1.2'M', 'label: 'Cost Saved' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length);
    }2500);
    return () => clearInterval(interval);
  }[]);

  if (isDismissed) return null;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const InteractiveTechDemo2027PromotionBanner: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">InteractiveTechDemo2027PromotionBanner</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default InteractiveTechDemo2027PromotionBanner;