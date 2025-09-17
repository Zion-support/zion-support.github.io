<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';

import { 
  Award
  ArrowRight
  Star
  TrendingUp,
  X,
  CheckCircle,
  DollarSign,
  Users,
  Clock,
  Target,
  BarChart3,
  Zap,
  Shield,
  Globe
} from 'lucide-react';

const RevolutionaryCaseStudiesShowcase2026PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentStatsetCurrentStat] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)1000);
    return () => clearTimeout(timer);
  }[]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % 4);
    }2500);
    return () => clearInterval(interval);
  }[]);

  const caseStudies = [
    { 
      title: 'FinTech Revolution'
      roi: '500%'
      icon: DollarSign
      color: 'text-green-400',
      company: 'PayFlow Solutions'
    },
    { 
      title: 'Healthcare AI'
      roi: '400%'
      icon: Shield
      color: 'text-blue-400',
      company: 'MediTech Innovations'
    },
    { 
      title: 'E-commerce Automation'
      roi: '600%'
      icon: Globe
      color: 'text-purple-400',
      company: 'ShopGlobal'
    },
    { 
      title: 'Smart Manufacturing'
      roi: '350%'
      icon: Zap
      color: 'text-orange-400',
      company: 'AutoParts Pro'
    }
  ];

  const features = [
    'Real Success Stories',
    'Proven ROI Results',
    'Industry Expertise',
    'Client Testimonials'
  ];

  const stats = [
    { label: '200+'value: 'Projects' },
    { label: '450%'value: 'Avg ROI' },
    { label: '96%'value: 'Satisfaction' }
  ];

  if (!isVisible || isDismissed) return null;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const RevolutionaryCaseStudiesShowcase2026PromotionBanner: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">RevolutionaryCaseStudiesShowcase2026PromotionBanner</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default RevolutionaryCaseStudiesShowcase2026PromotionBanner;