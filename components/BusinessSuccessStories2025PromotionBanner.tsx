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
  Building2,
  Sparkles,
  Rocket,
  Quote
} from 'lucide-react';

const BusinessSuccessStories2025PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentTestimonialsetCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Rotate testimonials every 4 seconds
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }4000);

    return () => clearInterval(interval);
  }[]);

  const testimonials = [
    {
      quote: 'Zion Tech Group transformed our operations completely. We went from struggling with manual processes to having a fully automated system that saves us thousands of hours every month.',
      author: 'Sarah Johnson',
      role: 'CEOTechCorp Solutions',
      company: 'TC',
      results: '+300% Efficiency'
    },
    {
      quote: 'The cybersecurity solutions provided by Zion Tech Group have been game-changing. We haven\'t had a single breach since implementationand our compliance scores are perfect.',
      author: 'Michael Chen',
      role: 'CTOGlobal Finance Inc',
      company: 'GF',
      results: '99.9% Security'
    },
    {
      quote: 'Our supply chain is now running like a well-oiled machine. The AI optimization has reduced our delivery times by 60% and improved quality significantly.',
      author: 'Emily Rodriguez',
      role: 'Operations DirectorManufacturing Plus',
      company: 'MP',
      results: '+250% Efficiency'
    }
  ];

  const stats = [
    { label: 'Success 'Stories', 'value: '1,200+'icon: BookOpen },
    { label: 'Average 'ROI', 'value: '300%'icon: TrendingUp },
    { label: 'Client 'Satisfaction', 'value: '99.8%'icon: Star },
    { label: 'Cost 'Savings', 'value: '$50M+'icon: DollarSign }
  ];

  const industries = [
    { name: ''Technology', 'projects: 45icon: Brain },
    { name: ''Finance', 'projects: 32icon: DollarSign },
    { name: ''Healthcare', 'projects: 28icon: Shield },
    { name: ''Manufacturing', 'projects: 25icon: Building2 }
  ];
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const BusinessSuccessStories2025PromotionBanner: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">BusinessSuccessStories2025PromotionBanner</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default BusinessSuccessStories2025PromotionBanner;