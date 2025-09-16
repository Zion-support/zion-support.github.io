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
  Brain,
  Globe,
  Target,
  Award,
  CheckCircle,
  PlayCircle,
  BookOpen,
  Lightbulb,
  DollarSign,
  BarChart3,
  Clock,
  Building2
} from 'lucide-react';

const BusinessSuccessStories2025 = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [activeStorysetActiveStory] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const successStories = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      industry: 'Technology',
      logo: 'TC',
      challenge: 'Manual data processing causing 40% efficiency loss',
      solution: 'Implemented AI-powered automation suite',
      results: {
        efficiency: '+300%',
        costSavings: '$2.5M',
        timeSaved: '2000 hours/month',
        roi: '450%'
      },
      testimonial: 'Zion Tech Group transformed our operations completely. We went from struggling with manual processes to having a fully automated system that saves us thousands of hours every month.',
      author: 'Sarah Johnson',
      role: 'CEO',
      rating: 5,
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      company: 'Global Finance Inc',
      industry: 'Financial Services',
      logo: 'GF',
      challenge: 'Security breaches costing millions in damages',
      solution: 'Deployed advanced cybersecurity framework',
      results: {
        security: '99.9%',
        costSavings: '$5.2M',
        incidents: '0 breaches',
        compliance: '100%'
      },
      testimonial: 'The cybersecurity solutions provided by Zion Tech Group have been game-changing. We haven\'t had a single breach since implementationand our compliance scores are perfect.',
      author: 'Michael Chen',
      role: 'CTO',
      rating: 5,
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      company: 'Manufacturing Plus',
      industry: 'Manufacturing',
      logo: 'MP',
      challenge: 'Supply chain inefficiencies causing delays',
      solution: 'AI-driven supply chain optimization',
      results: {
        efficiency: '+250%',
        costSavings: '$3.8M',
        deliveryTime: '-60%',
        quality: '+95%'
      },
      testimonial: 'Our supply chain is now running like a well-oiled machine. The AI optimization has reduced our delivery times by 60% and improved quality significantly.',
      author: 'Emily Rodriguez',
      role: 'Operations Director',
      rating: 5,
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      company: 'HealthCare First',
      industry: 'Healthcare',
      logo: 'HF',
      challenge: 'Patient data management and compliance issues',
      solution: 'Comprehensive data management and compliance system',
      results: {
        efficiency: '+180%',
        costSavings: '$1.9M',
        compliance: '100%',
        patientSatisfaction: '+85%'
      },
      testimonial: 'The data management system has revolutionized our patient care. We\'re now fully compliant and our patients are much happier with our services.',
      author: 'Dr. James Wilson',
      role: 'Chief Medical Officer',
      rating: 5,
      image: '/api/placeholder/400/300'
    }
  ];

  const overallStats = [
    { label: 'Projects 'Completed', 'value: '1,200+'icon: Target },
    { label: 'Average 'ROI', 'value: '300%'icon: TrendingUp },
    { label: 'Client 'Satisfaction', 'value: '99.8%'icon: Star },
    { label: 'Cost 'Savings', 'value: '$50M+'icon: DollarSign }
  ];

  const industries = [
    { name: ''Technology', 'count: 45icon: Brain },
    { name: ''Finance', 'count: 32icon: DollarSign },
    { name: ''Healthcare', 'count: 28icon: Shield },
    { name: ''Manufacturing', 'count: 25icon: Building2 },
    { name: ''Retail', 'count: 20icon: Globe },
    { name: ''Education', 'count: 15icon: BookOpen }
  ];
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const BusinessSuccessStories2025: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">BusinessSuccessStories2025</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default BusinessSuccessStories2025;