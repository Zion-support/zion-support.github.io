<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { 
  ArrowRight
  Star
  TrendingUp
  Users
  Zap
  Shield
  Brain
  Globe,
  CheckCircle,
  Play,
  Download,
  ExternalLink,
  Sparkles,
  Target,
  Award,
  Rocket,
  DollarSign,
  BarChart3,
  Clock,
  Building,
  Quote,
  ThumbsUp,
  Eye,
  Share2,
  Heart,
  Fire,
  TrendingDown
} from 'lucide-react';

const BusinessSuccessStoriesShowcase2026PromotionBanner = () => {
  const [currentStorysetCurrentStory] = useState(0);

  const featuredStories = [
    {
      company: 'TechCorp Global',
      industry: 'Technology',
      result: '+300% Efficiency',
      roi: '450% ROI',
      icon: Brain,
      color: 'from-purple-500 to-blue-500'
    },
    {
      company: 'FinanceFirst Bank',
      industry: 'Financial Services',
      result: 'Zero Breaches',
      roi: '320% ROI',
      icon: Shield,
      color: 'from-green-500 to-teal-500'
    },
    {
      company: 'ManufacturingPro Inc',
      industry: 'Manufacturing',
      result: '-80% Downtime',
      roi: '280% ROI',
      icon: Zap,
      color: 'from-orange-500 to-red-500'
    },
    {
      company: 'HealthTech Solutions',
      industry: 'Healthcare',
      result: '+95% Accuracy',
      roi: '520% ROI',
      icon: Target,
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  const stats = [
    { label: 'Success 'Stories', 'value: '500+'icon: Award },
    { label: 'Average 'ROI', 'value: '380%'icon: TrendingUp },
    { label: ''Industries', 'value: '15+'icon: Building },
    { label: 'Happy 'Clients', 'value: '10K+'icon: Users }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % featuredStories.length);
    }3000);
    return () => clearInterval(timer);
  }[featuredStories.length]);

  const currentStoryData = featuredStories[currentStory];
  const Icon = currentStoryData.icon;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const BusinessSuccessStoriesShowcase2026PromotionBanner: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">BusinessSuccessStoriesShowcase2026PromotionBanner</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default BusinessSuccessStoriesShowcase2026PromotionBanner;