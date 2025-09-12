import React from 'react';
import Link from 'next/link';

interface RecommendationItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource';
  category: string;
  readTime?: string;
  pages?: string;
  icon: string;
  href: string;
  reason: string;
  priority: 'high' | 'medium' | 'low';
}

interface ContentRecommendationWidgetProps {
  currentContentType?: 'blog' | 'case-study' | 'resource';
  currentCategory?: string;
  maxItems?: number;
}

const allRecommendations: RecommendationItem[] = [
  {
    id: 'ai-2025-predictions',
    title: 'AI 2025: Year Ahead Predictions',
    description: 'Comprehensive predictions for breakthrough technologies and market trends',
    type: 'blog',
    category: 'AI Predictions',
    readTime: '25 min read',
    icon: '🔮',
    href: '/blog/ai-2025-year-ahead-predictions',
    reason: 'Trending this week',
    priority: 'high'
  },
  {
    id: 'ai-workforce-transformation',
    title: 'AI Workforce Transformation 2025',
    description: 'Complete reskilling strategies and workforce development guide',
    type: 'blog',
    category: 'Workforce Development',
    readTime: '18 min read',
    icon: '👥',
    href: '/blog/ai-workforce-transformation-2025',
    reason: 'Most downloaded',
    priority: 'high'
  },
  {
    id: 'ai-sustainability-case-study',
    title: 'AI Sustainability Transformation',
    description: '60% energy reduction and carbon neutrality case study',
    type: 'case-study',
    category: 'Sustainability',
    icon: '🌱',
    href: '/case-studies/ai-sustainability-transformation-2025',
    reason: 'High impact results',
    priority: 'high'
  },
  {
    id: 'ai-workforce-playbook',
    title: 'AI Workforce Transformation Playbook',
    description: '150+ page complete implementation guide with templates',
    type: 'resource',
    category: 'Free Download',
    pages: '150+ pages',
    icon: '📚',
    href: '/resources/ai-workforce-transformation-playbook-2025',
    reason: 'Editor\'s choice',
    priority: 'high'
  },
  {
    id: 'ai-innovation-trends',
    title: 'AI Innovation Trends 2025',
    description: 'Quantum AI, neuromorphic computing, and breakthrough technologies',
    type: 'blog',
    category: 'AI Innovation',
    readTime: '25 min read',
    icon: '🚀',
    href: '/blog/ai-innovation-trends-2025',
    reason: 'Popular this month',
    priority: 'medium'
  },
  {
    id: 'ai-cybersecurity-2025',
    title: 'AI Cybersecurity Trends 2025',
    description: 'Protect your digital assets with cutting-edge AI security strategies',
    type: 'blog',
    category: 'Cybersecurity',
    readTime: '28 min read',
    icon: '🛡️',
    href: '/blog/ai-cybersecurity-2025',
    reason: 'Critical for security',
    priority: 'medium'
  },
  {
    id: 'ai-multimodal-applications',
    title: 'AI Multimodal Applications 2025',
    description: 'Beyond text to vision, audio, and beyond - the future of AI',
    type: 'blog',
    category: 'AI Technology',
    readTime: '15 min read',
    icon: '🎭',
    href: '/blog/ai-multimodal-applications-2025',
    reason: 'Cutting-edge technology',
    priority: 'medium'
  },
  {
    id: 'ai-implementation-master-guide',
    title: 'AI Implementation Master Guide',
    description: '150-page complete blueprint for AI success in your organization',
    type: 'resource',
    category: 'Free Download',
    pages: '150+ pages',
    icon: '📋',
    href: '/resources/ai-implementation-master-guide-2025',
    reason: 'Comprehensive guide',
    priority: 'high'
  },
  {
    id: 'ai-automation-manufacturing',
    title: 'AI Automation in Manufacturing',
    description: '40% cost reduction and 60% faster processing times',
    type: 'case-study',
    category: 'Manufacturing',
    icon: '🏭',
    href: '/case-studies/ai-automation-manufacturing-2025',
    reason: 'Proven results',
    priority: 'medium'
  },
  {
    id: 'green-ai-implementation-guide',
    title: 'Green AI Implementation Guide',
    description: 'Build sustainable AI systems with 60% energy reduction',
    type: 'resource',
    category: 'Sustainability',
    pages: '120+ pages',
    icon: '🌱',
    href: '/resources/green-ai-implementation-guide-2025',
    reason: 'Environmental impact',
    priority: 'medium'
  }
];

export default function ContentRecommendationWidget({ 
  currentContentType, 
  currentCategory, 
  maxItems = 6 
}: ContentRecommendationWidgetProps) {
  // Filter recommendations based on current content
  const getFilteredRecommendations = () => {
    let filtered = allRecommendations;

    // If we have a current content type, prioritize different types
    if (currentContentType) {
      filtered = filtered.sort((a, b) => {
        if (a.type !== currentContentType && b.type === currentContentType) return 1;
        if (a.type === currentContentType && b.type !== currentContentType) return -1;
        return 0;
      });
    }

    // If we have a current category, show related content
    if (currentCategory) {
      filtered = filtered.filter(item => 
        item.category.toLowerCase().includes(currentCategory.toLowerCase()) ||
        item.title.toLowerCase().includes(currentCategory.toLowerCase())
      );
    }

    // Sort by priority and return limited results
    return filtered
      .sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      })
      .slice(0, maxItems);
  };

  const recommendations = getFilteredRecommendations();

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'resource':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog':
        return 'Article';
      case 'case-study':
        return 'Case Study';
      case 'resource':
        return 'Resource';
      default:
        return 'Content';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return '🔥';
      case 'medium':
        return '⭐';
      case 'low':
        return '💡';
      default:
        return '📌';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">AI</span>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">Recommended for You</h3>
          <p className="text-sm text-gray-600">Based on your interests and trending content</p>
        </div>
      </div>

      <div className="space-y-4">
        {recommendations.map((item, index) => (
          <Link
            key={item.id}
            href={item.href}
            className="group block p-4 rounded-lg border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start gap-4">
              <div className="text-2xl flex-shrink-0">{item.icon}</div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
                    {getTypeLabel(item.type)}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    {getPriorityIcon(item.priority)}
                    {item.reason}
                  </span>
                </div>
                
                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1 line-clamp-2">
                  {item.title}
                </h4>
                
                <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                  {item.description}
                </p>
                
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  {item.readTime && <span>{item.readTime}</span>}
                  {item.pages && <span>{item.pages}</span>}
                  <span>{item.category}</span>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/blog"
            className="flex-1 text-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
          >
            View All Articles
          </Link>
          <Link
            href="/case-studies"
            className="flex-1 text-center px-4 py-2 text-sm font-medium text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
          >
            Browse Case Studies
          </Link>
          <Link
            href="/resources"
            className="flex-1 text-center px-4 py-2 text-sm font-medium text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors"
          >
            Download Resources
          </Link>
        </div>
      </div>
    </div>
  );
}