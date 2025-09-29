'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  excerpt: string;
  type: 'article' | 'case-study';
  readTime?: string;
  category: string;
  href: string;
  featured?: boolean;
  publishedDate: string;
  metrics?: Array<{ value: string; label: string }>;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-2026-ultimate-breakthrough',
    title: 'AI 2026 Ultimate Breakthrough: $100B Revolution Guide',
    excerpt: 'Master the complete AI 2026 breakthrough transformation. From cognitive superintelligence to quantum neural networks, discover strategies delivering $100M+ ROI for Fortune 100 companies.',
    type: 'article',
    readTime: '45 min read',
    category: 'Ultimate Breakthrough',
    href: '/blog/ai-2026-ultimate-breakthrough',
    featured: true,
    publishedDate: '2026-01-25',
    metrics: [
      { value: '$100B', label: 'Revolution Value' },
      { value: '$100M+', label: 'ROI Potential' },
      { value: '99.9%', label: 'Automation' },
      { value: '500%', label: 'Efficiency Gain' }
    ]
  },
  {
    id: 'ai-2026-ultimate-breakthrough-success',
    title: 'AI 2026 Ultimate Breakthrough Success: $100M ROI Case Study',
    excerpt: 'See how a Fortune 100 company achieved $100M ROI with ultimate AI breakthrough implementation. 99.9% automation, 500% efficiency gain, and complete autonomous operation.',
    type: 'case-study',
    readTime: '25 min read',
    category: 'Mega Success',
    href: '/case-studies/ai-2026-ultimate-breakthrough-success',
    featured: true,
    publishedDate: '2026-01-25',
    metrics: [
      { value: '$100M', label: 'Total ROI' },
      { value: '99.9%', label: 'Automation' },
      { value: '500%', label: 'Efficiency' },
      { value: '12 months', label: 'Implementation' }
    ]
  },
  {
    id: 'ai-cognitive-superintelligence-2026',
    title: 'AI Cognitive Superintelligence 2026: The Next Evolution',
    excerpt: 'Explore how cognitive superintelligence is revolutionizing decision-making with 99.9% accuracy and $750M+ ROI potential.',
    type: 'article',
    readTime: '30 min read',
    category: 'Cognitive AI',
    href: '/blog/ai-cognitive-superintelligence-2026',
    featured: true,
    publishedDate: '2026-01-24',
    metrics: [
      { value: '99.9%', label: 'Accuracy' },
      { value: '$750M+', label: 'ROI Potential' },
      { value: '1000x', label: 'Processing Speed' },
      { value: '95%', label: 'Decision Quality' }
    ]
  },
  {
    id: 'ai-agent-orchestration-2026',
    title: 'AI Agent Orchestration 2026: Multi-Agent Systems Mastery',
    excerpt: 'Master multi-agent AI systems with 95% automation efficiency and $5M+ ROI through advanced orchestration patterns and enterprise-grade coordination.',
    type: 'article',
    readTime: '22 min read',
    category: 'Agent Systems',
    href: '/blog/ai-agent-orchestration-2026',
    featured: false,
    publishedDate: '2026-01-23',
    metrics: [
      { value: '95%', label: 'Automation' },
      { value: '$5M+', label: 'ROI' },
      { value: '300%', label: 'Efficiency' },
      { value: '99.8%', label: 'Reliability' }
    ]
  },
  {
    id: 'ai-quantum-computing-2026',
    title: 'AI Quantum Computing 2026: Revolutionary Breakthrough',
    excerpt: 'Discover quantum-AI hybrid computing achieving 1000x faster optimization, 95% accuracy improvements, and breakthrough capabilities.',
    type: 'article',
    readTime: '32 min read',
    category: 'Quantum AI',
    href: '/blog/ai-quantum-computing-2026',
    featured: true,
    publishedDate: '2026-01-22',
    metrics: [
      { value: '1000x', label: 'Faster Optimization' },
      { value: '95%', label: 'Accuracy Improvement' },
      { value: '$50M+', label: 'ROI Potential' },
      { value: '99.9%', label: 'Quantum Advantage' }
    ]
  },
  {
    id: 'ai-transformation-mega-success-2026',
    title: 'AI Transformation Mega Success 2026: $25M ROI Case Study',
    excerpt: 'See how a Fortune 500 company achieved $25M ROI with comprehensive AI transformation. 99% automation, 90% cost reduction, and complete business revolution.',
    type: 'case-study',
    readTime: '35 min read',
    category: 'Enterprise Transformation',
    href: '/case-studies/ai-transformation-mega-success-2026',
    featured: true,
    publishedDate: '2026-01-21',
    metrics: [
      { value: '$25M', label: 'Total ROI' },
      { value: '99%', label: 'Automation' },
      { value: '90%', label: 'Cost Reduction' },
      { value: '18 months', label: 'Implementation' }
    ]
  }
];

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    'Ultimate Breakthrough': 'from-blue-500 to-purple-500',
    'Mega Success': 'from-green-500 to-teal-500',
    'Cognitive AI': 'from-purple-500 to-pink-500',
    'Agent Systems': 'from-orange-500 to-red-500',
    'Quantum AI': 'from-indigo-500 to-blue-500',
    'Enterprise Transformation': 'from-green-500 to-blue-500'
  };
  return colors[category] || 'from-gray-500 to-gray-600';
};

const getCategoryBgColor = (category: string) => {
  const colors: { [key: string]: string } = {
    'Ultimate Breakthrough': 'from-blue-50 to-purple-50',
    'Mega Success': 'from-green-50 to-teal-50',
    'Cognitive AI': 'from-purple-50 to-pink-50',
    'Agent Systems': 'from-orange-50 to-red-50',
    'Quantum AI': 'from-indigo-50 to-blue-50',
    'Enterprise Transformation': 'from-green-50 to-blue-50'
  };
  return colors[category] || 'from-gray-50 to-gray-100';
};

export default function ContentShowcase() {
  const [featuredItems, setFeaturedItems] = useState<ContentItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const featured = contentItems.filter(item => item.featured);
    setFeaturedItems(featured);
  }, []);

  useEffect(() => {
    if (featuredItems.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [featuredItems.length]);

  if (featuredItems.length === 0) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Content</h2>
        <p className="text-lg text-gray-600">Discover our most impactful AI breakthroughs and success stories</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredItems.map((item, index) => (
          <Link key={item.id} href={item.href} className="group">
            <div className={`bg-gradient-to-br ${getCategoryBgColor(item.category)} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 h-full`}>
              <div className="flex items-center gap-3 mb-4">
                <span className={`bg-gradient-to-r ${getCategoryColor(item.category)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {item.category.toUpperCase()}
                </span>
                {item.type === 'case-study' && (
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                    CASE STUDY
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                {item.title}
              </h3>
              
              <p className="text-gray-600 mb-6 line-clamp-3">
                {item.excerpt}
              </p>
              
              {item.metrics && (
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {item.metrics.slice(0, 4).map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                      <div className="text-xs text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">{item.readTime}</div>
                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                  {item.type === 'case-study' ? 'View Case Study →' : 'Read Article →'}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/content-hub"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
        >
          Explore All Content
        </Link>
      </div>
    </div>
  );
}