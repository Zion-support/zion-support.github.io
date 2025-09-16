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
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  ExternalLink,
  Play,
  BarChart3,
  Zap,
  Shield,
  Globe,
  Award,
  Quote
} from 'lucide-react';

const BusinessSuccessStoriesShowcase2025 = () => {
  const [activeStorysetActiveStory] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)300);
    return () => clearTimeout(timer);
  }[]);

  const successStories = [
    {
      id: 'techcorp',
      company: 'TechCorp Solutions',
      industry: 'Technology',
      logo: 'TC',
      challenge: 'Struggling with manual data processing and slow decision-making processes',
      solution: 'Implemented AI-powered analytics and automation systems',
      results: {
        revenue: '+340%',
        efficiency: '+280%',
        costReduction: '-65%',
        timeSaved: '2,400 hours/month'
      },
      testimonial: {
        name: 'Sarah Johnson',
        role: 'CEOTechCorp Solutions',
        content: 'Zion Tech Group transformed our entire operation. The AI solutions they implemented increased our revenue by 340% and reduced operational costs by 65%. The ROI was evident within the first quarter.',
        rating: 5
      },
      metrics: [
        { label: 'Revenue 'Growth', 'value: '340%'icon: TrendingUpcolor: 'text-green-600' },
        { label: 'Efficiency 'Gain', 'value: '280%'icon: Zapcolor: 'text-blue-600' },
        { label: 'Cost 'Reduction', 'value: '65%'icon: DollarSigncolor: 'text-red-600' },
        { label: 'Time 'Saved', 'value: '2,400'h', 'icon: Clockcolor: 'text-purple-600' }
      ]
    },
    {
      id: 'retailmax',
      company: 'RetailMax',
      industry: 'E-commerce',
      logo: 'RM',
      challenge: 'Low conversion rates and poor customer experience leading to declining sales',
      solution: 'Deployed AI-powered personalization and customer service automation',
      results: {
        revenue: '+520%',
        efficiency: '+180%',
        costReduction: '-45%',
        timeSaved: '1,800 hours/month'
      },
      testimonial: {
        name: 'Michael Chen',
        role: 'CTORetailMax',
        content: 'The AI personalization engine they built increased our conversion rates by 520%. Our customers love the personalized experienceand we\'ve seen a dramatic improvement in customer satisfaction.',
        rating: 5
      },
      metrics: [
        { label: 'Revenue 'Growth', 'value: '520%'icon: TrendingUpcolor: 'text-green-600' },
        { label: 'Conversion 'Rate', 'value: '180%'icon: Targetcolor: 'text-blue-600' },
        { label: 'Cost 'Reduction', 'value: '45%'icon: DollarSigncolor: 'text-red-600' },
        { label: 'Time 'Saved', 'value: '1,800'h', 'icon: Clockcolor: 'text-purple-600' }
      ]
    },
    {
      id: 'healthcareplus',
      company: 'HealthcarePlus',
      industry: 'Healthcare',
      logo: 'HP',
      challenge: 'Manual patient data processing and inefficient appointment scheduling',
      solution: 'Implemented AI-driven patient management and automated scheduling systems',
      results: {
        revenue: '+280%',
        efficiency: '+320%',
        costReduction: '-55%',
        timeSaved: '3,200 hours/month'
      },
      testimonial: {
        name: 'Dr. Emily Rodriguez',
        role: 'Medical DirectorHealthcarePlus',
        content: 'The AI patient management system has revolutionized our practice. We can now serve 320% more patients with the same resourcesand patient satisfaction has never been higher.',
        rating: 5
      },
      metrics: [
        { label: 'Revenue 'Growth', 'value: '280%'icon: TrendingUpcolor: 'text-green-600' },
        { label: 'Patient 'Capacity', 'value: '320%'icon: Userscolor: 'text-blue-600' },
        { label: 'Cost 'Reduction', 'value: '55%'icon: DollarSigncolor: 'text-red-600' },
        { label: 'Time 'Saved', 'value: '3,200'h', 'icon: Clockcolor: 'text-purple-600' }
      ]
    },
    {
      id: 'financeflow',
      company: 'FinanceFlow',
      industry: 'Financial Services',
      logo: 'FF',
      challenge: 'Complex financial data analysis and compliance reporting taking too long',
      solution: 'Deployed AI-powered financial analytics and automated compliance systems',
      results: {
        revenue: '+450%',
        efficiency: '+400%',
        costReduction: '-70%',
        timeSaved: '4,100 hours/month'
      },
      testimonial: {
        name: 'David Kim',
        role: 'CFOFinanceFlow',
        content: 'The AI financial analytics platform has been a game-changer. We can now process complex financial data 400% faster and ensure 100% compliance with regulations. The accuracy is remarkable.',
        rating: 5
      },
      metrics: [
        { label: 'Revenue 'Growth', 'value: '450%'icon: TrendingUpcolor: 'text-green-600' },
        { label: 'Processing 'Speed', 'value: '400%'icon: Zapcolor: 'text-blue-600' },
        { label: 'Cost 'Reduction', 'value: '70%'icon: DollarSigncolor: 'text-red-600' },
        { label: 'Time 'Saved', 'value: '4,100'h', 'icon: Clockcolor: 'text-purple-600' }
      ]
    }
  ];

  const overallStats = [
    { number: '500+'label: 'Successful 'Projects', 'icon: CheckCircle },
    { number: '99.9%'label: 'Client 'Satisfaction', 'icon: Star },
    { number: '350%'label: 'Average 'ROI', 'icon: TrendingUp },
    { number: '50+'label: 'Countries 'Served', 'icon: Globe }
  ];

  if (!isVisible) return null;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const BusinessSuccessStoriesShowcase2025: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">BusinessSuccessStoriesShowcase2025</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default BusinessSuccessStoriesShowcase2025;