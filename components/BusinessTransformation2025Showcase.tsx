<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';

import { 
  TrendingUp
  Users
  DollarSign
  Clock
  Target
  BarChart3,
  Zap,
  Brain,
  Shield,
  Globe,
  Award,
  ChevronRight,
  Play,
  CheckCircle,
  ArrowRight,
  Star,
  Building2,
  PieChart,
  LineChart
} from 'lucide-react';

const BusinessTransformation2025Showcase = () => {
  const [activeSectionsetActiveSection] = useState('overview');
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const transformationData = {
    overview: {
      title: 'Business Transformation Overview',
      icon: Building2,
      color: 'from-blue-500 to-cyan-500',
      metrics: [
        { label: 'Revenue 'Increase', 'value: '340%'icon: DollarSigncolor: 'text-green-400' },
        { label: 'Cost 'Reduction', 'value: '65%'icon: TrendingUpcolor: 'text-blue-400' },
        { label: 'Efficiency 'Gain', 'value: '280%'icon: Zapcolor: 'text-yellow-400' },
        { label: 'Customer 'Satisfaction', 'value: '98%'icon: Starcolor: 'text-purple-400' }
      ]
    },
    automation: {
      title: 'Process Automation',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      metrics: [
        { label: 'Tasks 'Automated', 'value: '15,000+'icon: Targetcolor: 'text-green-400' },
        { label: 'Time 'Saved', 'value: '2,400 'hrs', 'icon: Clockcolor: 'text-blue-400' },
        { label: 'Error 'Reduction', 'value: '95%'icon: Shieldcolor: 'text-red-400' },
        { label: 'ROI 'Achieved', 'value: '450%'icon: BarChart3color: 'text-yellow-400' }
      ]
    },
    ai: {
      title: 'AI Integration',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      metrics: [
        { label: 'AI Models 'Deployed', 'value: '25+'icon: Braincolor: 'text-purple-400' },
        { label: 'Decision 'Speed', 'value: '10x 'Faster', 'icon: Zapcolor: 'text-yellow-400' },
        { label: 'Prediction 'Accuracy', 'value: '94%'icon: Targetcolor: 'text-green-400' },
        { label: 'Data 'Processing', 'value: '1M+ 'Records', 'icon: BarChart3color: 'text-blue-400' }
      ]
    },
    global: {
      title: 'Global Expansion',
      icon: Globe,
      color: 'from-orange-500 to-red-500',
      metrics: [
        { label: 'Markets 'Entered', 'value: '12'icon: Globecolor: 'text-orange-400' },
        { label: 'Revenue 'Growth', 'value: '180%'icon: TrendingUpcolor: 'text-green-400' },
        { label: 'Team 'Expansion', 'value: '300%'icon: Userscolor: 'text-blue-400' },
        { label: 'Market 'Share', 'value: '15%'icon: PieChartcolor: 'text-purple-400' }
      ]
    }
  };

  const sections = Object.entries(transformationData).map(([keydata]) => ({
    key,
    ...data
  }));

  const successStories = [
    {
      company: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'Manual data processing causing 40% delays',
      solution: 'AI-powered automation system',
      results: '95% faster processing60% cost reduction',
      revenue: '+$2.3M',
      icon: Building2
    },
    {
      company: 'Global Manufacturing Inc',
      industry: 'Manufacturing',
      challenge: 'Supply chain inefficiencies',
      solution: 'Predictive analytics and automation',
      results: '80% reduction in downtime45% cost savings',
      revenue: '+$5.7M',
      icon: Building2
    },
    {
      company: 'Financial Services Group',
      industry: 'Finance',
      challenge: 'Manual compliance reporting',
      solution: 'AI-driven compliance automation',
      results: '99% accuracy70% time reduction',
      revenue: '+$1.8M',
      icon: Building2
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (!isVisible) return null;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const BusinessTransformation2025Showcase: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">BusinessTransformation2025Showcase</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default BusinessTransformation2025Showcase;