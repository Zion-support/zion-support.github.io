'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, TrendingUp, Zap, Award, CheckCircle, Star } from 'lucide-react';

const AutonomousBusinessRevolutionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [animatedStats, setAnimatedStats] = useState({
    roi: 0,
    savings: 0,
    efficiency: 0,
    satisfaction: 0
  });

  const targetStats = {
    roi: 500,
    savings: 180,
    efficiency: 340,
    satisfaction: 98
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('autonomousRevolutionBannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }

    // Animate statistics
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedStats({
          roi: Math.floor(targetStats.roi * progress),
          savings: Math.floor(targetStats.savings * progress),
          efficiency: Math.floor(targetStats.efficiency * progress),
          satisfaction: Math.floor(targetStats.satisfaction * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedStats(targetStats);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('autonomousRevolutionBannerDismissed', 'true');
  };

  if (!isVisible) return null;

  const featuredContent = [
    {
      title: 'AI 2025: The Autonomous Business Revolution',
      description: 'Ultimate guide to achieving 500% ROI with autonomous systems',
      url: '/blog/ai-2025-autonomous-business-revolution-ultimate-guide',
      type: 'blog',
      readingTime: '25 min read'
    },
    {
      title: 'Fortune 500 Transformation Success',
      description: 'Real case study: $2.8B company achieves 500% ROI',
      url: '/case-studies/fortune-500-autonomous-transformation-500-percent-roi',
      type: 'case-study',
      readingTime: '15 min read'
    },
    {
      title: 'Implementation Guide 2025',
      description: 'Step-by-step roadmap from strategy to 500% ROI',
      url: '/resources/ai-autonomous-implementation-guide-2025',
      type: 'resource',
      readingTime: '30 min read'
    }
  ];

const AutonomousBusinessRevolutionBanner: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">AutonomousBusinessRevolutionBanner</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default AutonomousBusinessRevolutionBanner;
