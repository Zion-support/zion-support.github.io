<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React{ useState } from 'react';
import Link from 'next/link';

import { 
  TrendingUp
  Users
  DollarSign
  Clock
  ArrowRight,
  Star,
  Quote,
  Building,
  Zap,
  Shield,
  Globe,
  Brain
} from 'lucide-react';

const AISuccessStoriesShowcase = () => {
  const [activeStorysetActiveStory] = useState(0);

  const successStories = [
    {
      id: 'techcorp-ai-transformation',
      company: 'TechCorp Global',
      industry: 'Technology',
      challenge: 'Manual data processing causing 40% operational delays',
      solution: 'Implemented AI-powered data processing and automation systems',
      results: {
        efficiency: '95%',
        costReduction: '60%',
        timeSaved: '2000 hours/month',
        revenue: '+$2.5M'
      },
      testimonial: 'AI transformed our entire operation. We went from manual processes to fully automated systems in just 6 months.',
      author: 'Sarah Johnson',
      position: 'CEOTechCorp Global',
      icon: Building,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'financeai-automation',
      company: 'FinanceAI Solutions',
      industry: 'Financial Services',
      challenge: 'Fraud detection accuracy below 85% causing significant losses',
      solution: 'Deployed advanced AI fraud detection and prevention systems',
      results: {
        efficiency: '99.7%',
        costReduction: '45%',
        timeSaved: '1500 hours/month',
        revenue: '+$5.2M'
      },
      testimonial: 'Our fraud detection accuracy improved to 99.7%. We prevented millions in potential losses.',
      author: 'Michael Chen',
      position: 'CTOFinanceAI Solutions',
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'retailai-personalization',
      company: 'RetailAI Network',
      industry: 'E-commerce',
      challenge: 'Low customer engagement and conversion rates',
      solution: 'Implemented AI-powered personalization and recommendation engines',
      results: {
        efficiency: '88%',
        costReduction: '35%',
        timeSaved: '3000 hours/month',
        revenue: '+$8.7M'
      },
      testimonial: 'AI personalization increased our conversion rates by 300%. Customer satisfaction is at an all-time high.',
      author: 'Emily Rodriguez',
      position: 'VP MarketingRetailAI Network',
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'healthai-diagnostics',
      company: 'HealthAI Medical',
      industry: 'Healthcare',
      challenge: 'Diagnostic accuracy and speed limitations',
      solution: 'Deployed AI-powered diagnostic and treatment recommendation systems',
      results: {
        efficiency: '92%',
        costReduction: '50%',
        timeSaved: '4000 hours/month',
        revenue: '+$12.1M'
      },
      testimonial: 'AI diagnostics reduced diagnosis time by 80% while improving accuracy. We can help more patients faster.',
      author: 'Dr. James Wilson',
      position: 'Chief Medical OfficerHealthAI Medical',
      icon: Brain,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const metrics = [
    { label: 'Average Efficiency 'Gain', 'value: '93.5%'icon: TrendingUp },
    { label: 'Average Cost 'Reduction', 'value: '47.5%'icon: DollarSign },
    { label: 'Hours Saved 'Monthly', 'value: '2,625'icon: Clock },
    { label: 'Average Revenue 'Increase', 'value: '+$7.1'M', 'icon: Star }
  ];

  const currentStory = successStories[activeStory];
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const AISuccessStoriesShowcase: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">AISuccessStoriesShowcase</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default AISuccessStoriesShowcase;