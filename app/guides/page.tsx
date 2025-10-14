import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Code, Database, Cloud, Shield, Zap, Brain } from 'lucide-react';

const GuidesPage: React.FC = () => {
  const guides = [
    {
      title: 'AI 2026 Implementation Roadmap',
      description: 'Comprehensive guide to implementing AI solutions in your enterprise for 2026',
      url: '/guides/ai-2026-implementation-roadmap',
      category: 'AI Implementation',
      icon: Brain,
      difficulty: 'Intermediate',
      duration: '45 min read'
    },
    {
      title: 'AI 2027 Implementation Roadmap',
      description: 'Advanced roadmap for AI implementation strategies in 2027',
      url: '/guides/ai-2027-implementation-roadmap',
      category: 'AI Implementation',
      icon: Brain,
      difficulty: 'Advanced',
      duration: '60 min read'
    },
    {
      title: 'Autonomous Business Processes Implementation Guide 2026',
      description: 'Step-by-step guide to implementing autonomous business processes',
      url: '/guides/autonomous-business-processes-implementation-guide-2026',
      category: 'Process Automation',
      icon: Zap,
      difficulty: 'Expert',
      duration: '90 min read'
    }
  ];

  const categories = [
    { name: 'AI Implementation', icon: Brain, color: 'text-purple-400' },
    { name: 'Process Automation', icon: Zap, color: 'text-blue-400' },
    { name: 'Security', icon: Shield, color: 'text-red-400' },
    { name: 'Cloud Infrastructure', icon: Cloud, color: 'text-cyan-400' },
    { name: 'Data Management', icon: Database, color: 'text-green-400' },
    { name: 'Development', icon: Code, color: 'text-orange-400' }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced': return 'text-orange-400 bg-orange-400/20';
      case 'Expert': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

const Page = () => {
  return (
    <>
      <Helmet>
        <title> - Zion Tech Group</title>
        <meta name="description" content=" - Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8"></h1>
            <p className="text-gray-300 text-lg">This page is under construction. Please check back later.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
