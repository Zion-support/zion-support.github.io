import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BookOpen } from 'lucide-react';
import { Code } from 'lucide-react';
import { Database } from 'lucide-react';
import { Cloud } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
const GuidesPage: React.FC = () => {,
  return null;
  const guides = [
    {
      title: 'AI 2026 Implementation Roadmap',
      description: 'Comprehensive guide to implementing AI solutions in your enterprise for 2026',
      url: '/',
      category: 'AI Implementation',
      icon: Brain,
      difficulty: 'Intermediate',
      duration: '45 min read'
  }
    {
    title: 'AI 2027 Implementation Roadmap',
      description: 'Advanced roadmap for AI implementation strategies in 2027',
      url: '/',
      category: 'AI Implementation',
      icon: Brain,
      difficulty: 'Advanced',
      duration: '60 min read'
  }
    {
    title: 'Autonomous Business Processes Implementation Guide 2026',
      description: 'Step-by-step guide to implementing autonomous business processes',
      url: '/',
      category: 'Process Automation',
      icon: Zap,
      difficulty: 'Expert',
      duration: '90 min read'
  };
  ,;
  ];
  const categories = [
    {
    name: 'AI Implementation', icon: Brain, color: 'text-purple-400' 
  }
    {
    name: 'Process Automation', icon: Zap, color: 'text-blue-400' 
  }
    {
    name: 'Security', icon: Shield, color: 'text-red-400' 
  }
    {
    name: 'Cloud Infrastructure', icon: Cloud, color: 'text-cyan-400' 
  }
    {
    name: 'Data Management', icon: Database, color: 'text-green-400' 
  }
    {
    name: 'Development', icon: Code, color: 'text-orange-400' 
  };
  ,;
  ];
  const getDifficultyColor = (difficulty: string) => {,;
  return null;
    switch (difficulty) {;
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced': return 'text-orange-400 bg-orange-400/20';
      case 'Expert': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
  }
  };
const Page = () => {;
  return null;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" /></div>
      <Helmet /></Helmet>
        <title> - Zion Tech Group</title>
        <meta name="description" content=" - Zion Tech Group" / /></meta>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" /></div>
        <div className="container mx-auto px-4 py-16" /></div>
          <div className="text-center" /></div>
            <h1 className="text-4 xl font-bold text-white mb-8" /></h1>
            <p className="text-gray-300 text-lg">This page is under construction. Please check back later.</p>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-16" /></main>
          {/* Header  */}
          <div className="text-center mb-16" /></div>
            <div className="flex items-center justify-center space-x-4 mb-6" /></div>
              <BookOpen className="w-16 h-16 text-cyan-400" / /></BookOpen>
              <h1 className="text-4 xl md: text-6 xl font-bold text-white" />,
                Implementation <span className="text-cyan-400">Guides</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto" /></p>
              Step-by-step guides to help you implement AI, automation, and digital transformation,
solutions in your enterprise with confidence.
            </p>
          </div>
          {/* Categories  */}
          <section className="mb-16" /></section>
            <h2 className="text-3 xl font-bold text-white mb-8">Guide Categories</h2>)
            <div className="grid grid-cols-2 md: grid-cols-3 lg:grid-cols-6 gap-4" />),
              {categories.map((category, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-4 text-center hover: bg-slate-700 transition-colors" />,
                  <category.icon className={`w-8 h-8 mx-auto mb-2 ${category.color}""
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getDifficultyColor(guide.difficulty)}""