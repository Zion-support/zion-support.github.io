<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';

import { 
  Building2
  TrendingUp
  Users
  DollarSign
  Shield
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  BarChart3,
  Clock,
  Award,
  Lightbulb,
  Globe,
  Smartphone
} from 'lucide-react';

const BusinessSolutionsShowcase2025 = () => {
  const [activeCategorysetActiveCategory] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const categories = [
    {
      id: 'automation',
      title: 'Business Automation',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      solutions: [
        {
          title: 'Workflow Automation',
          description: 'Streamline your business processes with intelligent automation.',
          features: ['Process 'Optimization', 'Error 'Reduction', 'Time Savings'],
          roi: '300%',
          timeToValue: '30 days',
          image: '/api/placeholder/400/300'
        },
        {
          title: 'Document Processing',
          description: 'Automate document handling and data extraction.',
          features: ['OCR 'Technology', 'Smart 'Classification', 'Data Validation'],
          roi: '250%',
          timeToValue: '14 days',
          image: '/api/placeholder/400/300'
        },
        {
          title: 'Customer Service AI',
          description: 'Enhance customer support with AI-powered chatbots.',
          features: ['24/7 'Support', 'Natural 'Language', 'Multi-language'],
          roi: '400%',
          timeToValue: '21 days',
          image: '/api/placeholder/400/300'
        }
      ]
    },
    {
      id: 'analytics',
      title: 'Advanced Analytics',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500',
      solutions: [
        {
          title: 'Predictive Analytics',
          description: 'Forecast trends and make data-driven decisions.',
          features: ['Machine 'Learning', 'Real-time 'Insights', 'Custom Dashboards'],
          roi: '500%',
          timeToValue: '45 days',
          image: '/api/placeholder/400/300'
        },
        {
          title: 'Business Intelligence',
          description: 'Transform data into actionable business insights.',
          features: ['Data 'Visualization', 'KPI 'Tracking', 'Automated Reports'],
          roi: '350%',
          timeToValue: '28 days',
          image: '/api/placeholder/400/300'
        },
        {
          title: 'Customer Analytics',
          description: 'Understand customer behavior and preferences.',
          features: [', 'Segmentation', 'Churn 'Prediction', 'Personalization'],
          roi: '450%',
          timeToValue: '35 days',
          image: '/api/placeholder/400/300'
        }
      ]
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      solutions: [
        {
          title: 'Cybersecurity Suite',
          description: 'Protect your business from cyber threats.',
          features: ['Threat 'Detection', 'Real-time 'Monitoring', 'Incident Response'],
          roi: '200%',
          timeToValue: '7 days',
          image: '/api/placeholder/400/300'
        },
        {
          title: 'Compliance Management',
          description: 'Ensure regulatory compliance across all operations.',
          features: ['GDPR 'Compliance', 'Audit 'Trails', 'Risk Assessment'],
          roi: '180%',
          timeToValue: '14 days',
          image: '/api/placeholder/400/300'
        },
        {
          title: 'Data Protection',
          description: 'Secure sensitive data with advanced encryption.',
          features: ['End-to-End 'Encryption', 'Access 'Control', 'Data Backup'],
          roi: '220%',
          timeToValue: '10 days',
          image: '/api/placeholder/400/300'
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const currentCategory = categories[activeCategory];
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const BusinessSolutionsShowcase2025: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">BusinessSolutionsShowcase2025</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default BusinessSolutionsShowcase2025;