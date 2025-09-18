<<<<<<< HEAD
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  FileText, 
  Users, 
  BarChart3, 
  TrendingUp, 
  Star,
  ArrowRight,
  Search,
  Filter,
  Clock,
  Award
} from 'lucide-react';

const EnhancedContentNavigation = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Content', icon: BookOpen, count: 25 },
    { id: 'blog', name: 'Blog Posts', icon: FileText, count: 12 },
    { id: 'case-studies', name: 'Case Studies', icon: Users, count: 8 },
    { id: 'resources', name: 'Resources', icon: BarChart3, count: 5 }
  ];

  const featuredContent = [
    {
      id: 'autonomous-business-revolution',
      title: 'AI 2025: The Autonomous Business Revolution - Ultimate Guide',
      description: 'Discover how Fortune 500 companies achieve 500% ROI through autonomous business systems.',
      category: 'blog',
      url: '/blog/ai-2025-autonomous-business-revolution-ultimate-guide',
      readingTime: '25 min read',
      featured: true,
      metrics: { roi: '500%', savings: '$180M' },
      tags: ['AI', 'Autonomous Systems', 'ROI', 'Fortune 500']
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 Autonomous Transformation: 500% ROI Success Story',
      description: 'Real case study of a $2.8B company achieving 500% ROI and $180M annual savings.',
      category: 'case-studies',
      url: '/case-studies/fortune-500-autonomous-transformation-500-percent-roi',
      readingTime: '15 min read',
      featured: true,
      metrics: { roi: '500%', timeline: '12 months' },
      tags: ['Case Study', 'Fortune 500', 'ROI', 'Success Story']
    },
    {
      id: 'autonomous-implementation-guide',
      title: 'AI Autonomous Implementation Guide 2025: From Strategy to 500% ROI',
      description: 'Complete step-by-step guide to implementing autonomous business systems.',
      category: 'resources',
      url: '/resources/ai-autonomous-implementation-guide-2025',
      readingTime: '30 min read',
      featured: true,
      metrics: { roi: '500%', timeline: '18 months' },
      tags: ['Implementation', 'Guide', 'Strategy', 'ROI']
    },
    {
      id: 'quantum-ai-business-revolution',
      title: 'AI 2026: The Quantum AI Business Revolution',
      description: 'Explore the $100B market transformation with quantum AI technologies.',
      category: 'blog',
      url: '/blog/ai-2026-quantum-ai-business-revolution',
      readingTime: '20 min read',
      featured: false,
      metrics: { roi: '400-600%', market: '$100B' },
      tags: ['Quantum AI', 'Business Revolution', '2026']
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation: 450% ROI Success Story',
      description: 'How a healthcare system achieved 450% ROI with AI implementation.',
      category: 'case-studies',
      url: '/case-studies/ai-healthcare-transformation-2025-success-story',
      readingTime: '12 min read',
      featured: false,
      metrics: { roi: '450%', savings: '$12M' },
      tags: ['Healthcare', 'AI Transformation', 'ROI']
    },
    {
      id: 'implementation-roadmap',
      title: 'AI 2025 Implementation Roadmap: Complete Guide to Success',
      description: 'Comprehensive roadmap for AI implementation with proven strategies.',
      category: 'resources',
      url: '/resources/ai-2025-implementation-roadmap-complete-guide',
      readingTime: '20 min read',
      featured: false,
      metrics: { roi: '67%', efficiency: '45%' },
      tags: ['Roadmap', 'Implementation', 'Strategy']
    }
  ];

  const filteredContent = featuredContent.filter(content => {
    const matchesCategory = activeCategory === 'all' || content.category === activeCategory;
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'blog': return FileText;
      case 'case-studies': return Users;
      case 'resources': return BarChart3;
      default: return BookOpen;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'blog': return 'text-blue-600 bg-blue-100';
      case 'case-studies': return 'text-green-600 bg-green-100';
      case 'resources': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const EnhancedContentNavigation: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnhancedContentNavigation</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default EnhancedContentNavigation;
