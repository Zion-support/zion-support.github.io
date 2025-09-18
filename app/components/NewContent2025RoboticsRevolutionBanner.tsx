'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, TrendingUp, Zap, Shield, ArrowRight } from 'lucide-react';

const NewContent2025RoboticsRevolutionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const roboticsContent = [
    {
      id: 'robotics-revolution-guide',
      title: 'AI 2025: The Advanced Robotics Revolution - Ultimate Enterprise Guide',
      type: 'Blog Post',
      url: '/blog/ai-2025-advanced-robotics-revolution-ultimate-guide',
      metrics: {
        roi: '800%',
        savings: '$5.2B',
        efficiency: '95%',
        quality: '99.7%'
      },
      description: 'Transform manufacturing, healthcare, and service industries with AI-powered robotics achieving 800% ROI',
      readingTime: '18 min read',
      tags: ['AI Robotics', 'Manufacturing', 'ROI', 'Enterprise']
    },
    {
      id: 'fortune-500-robotics-success',
      title: 'Fortune 500 Robotics Transformation: $5.2B Annual Savings with 800% ROI',
      type: 'Case Study',
      url: '/case-studies/fortune-500-robotics-transformation-800-roi-success',
      metrics: {
        roi: '800%',
        savings: '$5.2B',
        efficiency: '95%',
        quality: '99.7%'
      },
      description: 'How a global manufacturing giant revolutionized operations with AI-powered robotics',
      readingTime: '15 min read',
      tags: ['Case Study', 'Fortune 500', 'Manufacturing', 'Success Story']
    },
    {
      id: 'robotics-implementation-guide',
      title: 'AI Robotics Implementation Master Guide 2025: From Strategy to 800% ROI',
      type: 'Resource',
      url: '/resources/ai-robotics-implementation-master-guide-2025',
      metrics: {
        roi: '800%',
        success: '98%',
        timeline: '18 months',
        projects: '200+'
      },
      description: 'Complete framework for transforming your business with AI-powered robotics',
      readingTime: '35 min read',
      tags: ['Implementation Guide', 'Strategy', 'ROI', 'Framework']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % roboticsContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('robotics-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('robotics-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = roboticsContent[currentSlide];

const NewContent2025RoboticsRevolutionBanner: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">NewContent2025RoboticsRevolutionBanner</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default NewContent2025RoboticsRevolutionBanner;
