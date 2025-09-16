<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';

import { 
  Search
  Grid
  List
  Bookmark
  Share2
  Download
  Eye,
  Clock,
  User,
  Tag,
  ArrowRight,
  Star,
  TrendingUp,
  Zap,
  Brain,
  Cpu,
  Database,
  Globe,
  Lock,
  CheckCircle,
  Play,
  FileText,
  Video,
  Image,
  Code,
  BarChart3,
  Lightbulb,
  Rocket,
  Shield,
  Award,
  Users,
  Calendar,
  MessageCircle,
  Heart,
  ThumbsUp,
  BookOpen,
  GraduationCap,
  Briefcase,
  X
} from 'lucide-react';

const UltimateContentHub2026PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [activePreviewsetActivePreview] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)2000);
    return () => clearTimeout(timer);
  }[]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePreview((prev) => (prev + 1) % 3);
    }3000);
    return () => clearInterval(interval);
  }[]);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  const contentPreviews = [
    {
      title: 'Revolutionary AI Breakthroughs 2026',
      type: 'article',
      author: 'Dr. Sarah Chen',
      views: '15.4K',
      likes: 892,
      tags: [', 'AI', 'Machine 'Learning', 'Innovation']
    },
    {
      title: 'Quantum Computing: The Future is Now',
      type: 'video',
      author: 'Prof. Michael Rodriguez',
      views: '8.9K',
      likes: 567,
      tags: ['Quantum 'Computing', 'Physics'Technology']
    },
    {
      title: 'Smart Automation Implementation Guide',
      type: 'tutorial',
      author: 'Alex Thompson',
      views: '6.8K',
      likes: 423,
      tags: [', 'Automation', 'Implementation'Guide']
    }
  ];

  const contentTypes = [
    { icon: FileTextlabel: ''Articles', 'count: '456'color: 'text-blue-400' },
    { icon: Videolabel: ''Videos', 'count: '234'color: 'text-red-400' },
    { icon: GraduationCaplabel: ''Tutorials', 'count: '189'color: 'text-green-400' },
    { icon: Briefcaselabel: 'Case 'Studies', 'count: '156'color: 'text-purple-400' },
    { icon: BookOpenlabel: ''Whitepapers', 'count: '98'color: 'text-orange-400' },
    { icon: Calendarlabel: ''Webinars', 'count: '67'color: 'text-pink-400' }
  ];

  const getTypeIcon = (type) => {
    const typeMap = {
      article: FileText,
      video: Video,
      tutorial: GraduationCap
    };
    return typeMap[type] || FileText;
  };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const UltimateContentHub2026PromotionBanner: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltimateContentHub2026PromotionBanner</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default UltimateContentHub2026PromotionBanner;