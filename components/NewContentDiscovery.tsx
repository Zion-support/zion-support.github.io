'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TrendingUp, Clock, Star, ArrowRight } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'resource';
  readTime: string;
  publishDate: string;
  featured: boolean;
  trending: boolean;
  icon: string;
  category: string;
}

const NewContentDiscovery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const newContent: ContentItem[] = [
    {
      id: '1',
      title: 'Edge AI Agents 2025: Running Autonomous Agents in Production',
      description: 'Architectures, safety, and observability for deploying autonomous agents at the edge.',
      href: '/blog/ai-2025-edge-agents-in-production',
      type: 'blog',
      readTime: '21 min read',
      publishDate: '2025-01-28',
      featured: true,
      trending: true,
      icon: '🤖',
      category: 'AI Architecture'
    },
    {
      id: '2',
      title: 'Advanced AI Architecture Patterns for 2025',
      description: 'Master microservices, event-driven design, and distributed AI systems with real-world examples.',
      href: '/blog/ai-2025-advanced-ai-architecture',
      type: 'blog',
      readTime: '25 min read',
      publishDate: '2025-01-28',
      featured: true,
      trending: true,
      icon: '🏗️',
      category: 'AI Architecture'
    },
    {
      id: '3',
      title: 'AI Cybersecurity Revolution 2025',
      description: 'Advanced threat detection, automated response, and zero-trust AI architectures.',
      href: '/blog/ai-2025-cybersecurity-revolution',
      type: 'blog',
      readTime: '22 min read',
      publishDate: '2025-01-28',
      featured: true,
      trending: true,
      icon: '🛡️',
      category: 'Cybersecurity'
    },
    {
      id: '4',
      title: 'AI Healthcare Diagnosis Success: 95% Accuracy Case Study',
      description: 'Discover how a leading healthcare system achieved 95% diagnostic accuracy and 60% faster diagnosis times.',
      href: '/case-studies/ai-healthcare-diagnosis-success-2025',
      type: 'case-study',
      readTime: '15 min read',
      publishDate: '2025-01-10',
      featured: true,
      trending: false,
      icon: '🏥',
      category: 'Healthcare'
    },
    {
      id: '5',
      title: 'AI Implementation Master Guide 2026',
      description: '200+ pages of step-by-step instructions, templates, checklists, and best practices.',
      href: '/resources/ai-implementation-master-guide-2026',
      type: 'resource',
      readTime: '200+ pages',
      publishDate: '2025-01-28',
      featured: true,
      trending: true,
      icon: '📚',
      category: 'Resources'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newContent.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [newContent.length]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'from-blue-500 to-cyan-500';
      case 'case-study':
        return 'from-green-500 to-emerald-500';
      case 'resource':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog':
        return 'New Article';
      case 'case-study':
        return 'Case Study';
      case 'resource':
        return 'Free Resource';
      default:
        return 'Content';
    }
  };

  if (!isVisible) return null;

  const currentContent = newContent[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%253Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%253E%253Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%253E%253Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.1%22%253E%253Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')]"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1 pr-8">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">{currentContent.icon}</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  {getTypeLabel(currentContent.type)}
                </span>
                {currentContent.trending && (
                  <span className="bg-orange-500/20 px-2 py-1 rounded-full text-xs font-medium ml-2 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Trending
                  </span>
                )}
                {currentContent.featured && (
                  <span className="bg-yellow-500/20 px-2 py-1 rounded-full text-xs font-medium ml-2 flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {currentContent.title}
              </h3>
              <p className="text-lg text-indigo-100 mb-4">
                {currentContent.description}
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-sm opacity-75 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {currentContent.readTime}
                </span>
                <span className="text-sm opacity-75">
                  {currentContent.category}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Link 
                  href={currentContent.href}
                  className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                >
                  Read More
                </Link>
                <Link 
                  href="/content-showcase"
                  className="text-white hover:text-indigo-200 transition-colors flex items-center gap-2"
                >
                  View All Content
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex flex-col space-y-2">
              {newContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full">
            <div 
              className="h-full bg-white transition-all duration-6000 ease-linear"
              style={{ width: `${((currentIndex + 1) / newContent.length) * 100}%` }}
            />
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-white/75 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewContentDiscovery;