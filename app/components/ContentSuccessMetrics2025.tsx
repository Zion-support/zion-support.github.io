'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  Users, 
  DollarSign, 
  Star,
  CheckCircle,
  Zap,
  Target,
  Award,
  BookOpen,
  FileText,
  BarChart3,
  Rocket,
  Eye,
  ThumbsUp,
  Share2
} from 'lucide-react';

const ContentSuccessMetrics2025 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      quote: "The AI implementation guide was exactly what we needed. We achieved 340% ROI in just 4 months.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp",
      company: "Fortune 500"
    },
    {
      quote: "The case studies provided real-world insights that helped us avoid common pitfalls and accelerate our AI journey.",
      author: "Michael Chen",
      role: "VP of Operations",
      company: "Global Manufacturing"
    },
    {
      quote: "Zion Tech Group's content is not just informative—it's actionable. We implemented their strategies and saw immediate results.",
      author: "Emily Rodriguez",
      role: "Digital Transformation Lead",
      company: "Financial Services"
    }
  ];

  const contentStats = [
    {
      icon: BookOpen,
      value: '9',
      label: 'New Articles',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100'
    },
    {
      icon: FileText,
      value: '3',
      label: 'Case Studies',
      color: 'text-green-500',
      bgColor: 'bg-green-100'
    },
    {
      icon: BarChart3,
      value: '2',
      label: 'Master Guides',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Users,
      value: '15K+',
      label: 'Words of Content',
      color: 'text-orange-500',
      bgColor: 'bg-orange-100'
    }
  ];

  const roiMetrics = [
    { value: '500%', label: 'Average ROI', trend: '+25%' },
    { value: '$2.8B+', label: 'Total Savings', trend: '+$500M' },
    { value: '98%', label: 'Success Rate', trend: '+5%' },
    { value: '60 Days', label: 'Time to Value', trend: '-20 days' }
  ];

  const featuredContent = [
    {
      title: 'AI 2025: Enterprise Automation Revolution',
      description: '500% ROI in 60 Days',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-revolution',
      metrics: { roi: '500%', timeframe: '60 days', word_count: '8,500' },
      featured: true
    },
    {
      title: 'AI Transformation: $50M Annual Savings',
      description: 'Fortune 500 Success Story',
      type: 'case-study',
      url: '/case-studies/ai-transformation-2025-ultimate-success',
      metrics: { savings: '$50M', roi: '1,200%', timeframe: '6 months' },
      featured: true
    },
    {
      title: 'AI Implementation Master Guide 2025',
      description: 'From Strategy to 500% ROI',
      type: 'resource',
      url: '/resources/ai-implementation-master-guide-2025',
      metrics: { roi: '500%', word_count: '15,000', reading_time: '20 min' },
      featured: true
    }
  ];

  if (!isVisible) return null;

const ContentSuccessMetrics2025: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ContentSuccessMetrics2025</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default ContentSuccessMetrics2025;
