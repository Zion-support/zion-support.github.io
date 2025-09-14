'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, TrendingUp, Users, Award, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const UltimateContent2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentHighlights = [
    {
      title: "AI 2025: Advanced Automation Revolution",
      description: "500% ROI with $2.8B annual savings",
      metrics: "99.9% uptime, 95% efficiency",
      type: "blog",
      readingTime: "22 min read",
      url: "/blog/ai-2025-advanced-automation-revolution-ultimate-guide"
    },
    {
      title: "Fortune 500 AI Transformation Success",
      description: "700% ROI and $3.2B annual savings",
      metrics: "18 months implementation",
      type: "case-study",
      readingTime: "25 min read",
      url: "/case-studies/fortune-500-ai-transformation-2025-ultimate-success"
    },
    {
      title: "AI Transformation Master Guide 2025",
      description: "Complete implementation framework",
      metrics: "Proven 700% ROI strategies",
      type: "resource",
      readingTime: "35 min read",
      url: "/resources/ai-transformation-master-guide-2025-ultimate-edition"
    }
  ];

  const stats = [
    { label: "Average ROI", value: "700%", icon: TrendingUp },
    { label: "Annual Savings", value: "$3.2B", icon: Award },
    { label: "Success Rate", value: "94%", icon: CheckCircle },
    { label: "Implementation Time", value: "18 months", icon: Clock }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentHighlights.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
