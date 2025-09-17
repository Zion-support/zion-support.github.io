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
  Target
  BarChart3
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Globe
} from 'lucide-react';

const BusinessTransformationShowcase2025 = () => {
  const [activeMetricsetActiveMetric] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const metrics = [
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      value: '+340%',
      description: 'Average revenue increase',
      color: 'from-green-500 to-emerald-600',
      details: [
        'AI-powered sales optimization',
        'Predictive customer analytics',
        'Dynamic pricing strategies',
        'Market expansion automation'
      ]
    },
    {
      icon: Users,
      title: 'Customer Acquisition',
      value: '+280%',
      description: 'New customer growth',
      color: 'from-blue-500 to-cyan-600',
      details: [
        'Intelligent lead scoring',
        'Automated marketing campaigns',
        'Personalized customer journeys',
        'Social media optimization'
      ]
    },
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      value: '-65%',
      description: 'Operational cost savings',
      color: 'from-purple-500 to-pink-600',
      details: [
        'Process automation',
        'Resource optimization',
        'Predictive maintenance',
        'Energy efficiency improvements'
      ]
    },
    {
      icon: Target,
      title: 'Efficiency Gain',
      value: '+420%',
      description: 'Overall productivity boost',
      color: 'from-orange-500 to-red-600',
      details: [
        'Workflow automation',
        'AI-assisted decision making',
        'Real-time performance monitoring',
        'Intelligent task prioritization'
      ]
    }
  ];

  const successStories = [
    {
      company: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'Manual processes causing delays',
      solution: 'AI-powered automation platform',
      results: '85% faster operations60% cost reduction',
      logo: '🏢'
    },
    {
      company: 'Global Manufacturing Inc',
      industry: 'Manufacturing',
      challenge: 'Supply chain inefficiencies',
      solution: 'Predictive analytics & optimization',
      results: '40% inventory reduction95% on-time delivery',
      logo: '🏭'
    },
    {
      company: 'FinanceFirst Group',
      industry: 'Financial Services',
      challenge: 'Manual risk assessment',
      solution: 'AI-driven risk analysis system',
      results: '70% faster decisions90% accuracy improvement',
      logo: '🏦'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const BusinessTransformationShowcase2025: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">BusinessTransformationShowcase2025</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default BusinessTransformationShowcase2025;