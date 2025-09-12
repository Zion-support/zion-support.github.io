import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface RecommendedContent {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  category: string;
  readTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  relevanceScore: number;
  lastUpdated: string;
}

const ContentRecommendationWidget: React.FC = () => {
  const [recommendations, setRecommendations] = useState<RecommendedContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const allContent: RecommendedContent[] = [
    {
      id: 'quantum-ai-breakthrough',
      title: 'Quantum AI Breakthrough: Revolutionary Computing Meets AI',
      description: 'Explore the groundbreaking convergence of quantum computing and AI, unlocking unprecedented computational power.',
      type: 'blog',
      url: '/blog/ai-2025-quantum-ai-breakthrough',
      category: 'Quantum Technology',
      readTime: '8 min read',
      difficulty: 'Advanced',
      tags: ['quantum', 'ai', 'computing', 'breakthrough'],
      relevanceScore: 95,
      lastUpdated: '2025-01-17'
    },
    {
      id: 'advanced-ai-agents',
      title: 'Advanced AI Agents: The Future of Autonomous Operations',
      description: 'Discover how advanced AI agents are revolutionizing business operations with autonomous decision-making.',
      type: 'blog',
      url: '/blog/ai-2025-advanced-ai-agents',
      category: 'AI Technology',
      readTime: '10 min read',
      difficulty: 'Intermediate',
      tags: ['ai-agents', 'automation', 'business', 'operations'],
      relevanceScore: 92,
      lastUpdated: '2025-01-17'
    },
    {
      id: 'fintech-unicorn',
      title: 'Fintech Unicorn: $3.2B Valuation Through AI Innovation',
      description: 'How a fintech startup achieved unicorn status through strategic AI implementation.',
      type: 'case-study',
      url: '/case-studies/ai-2025-fintech-unicorn-transformation',
      category: 'Success Story',
      readTime: '12 min read',
      difficulty: 'Intermediate',
      tags: ['fintech', 'success', 'valuation', 'transformation'],
      relevanceScore: 88,
      lastUpdated: '2025-01-17'
    },
    {
      id: 'implementation-checklist',
      title: 'AI Implementation Master Checklist 2025',
      description: 'The definitive step-by-step checklist for successfully implementing AI solutions.',
      type: 'resource',
      url: '/resources/ai-2025-implementation-master-checklist',
      category: 'Implementation Guide',
      readTime: '15 min read',
      difficulty: 'Beginner',
      tags: ['implementation', 'checklist', 'guide', 'best-practices'],
      relevanceScore: 90,
      lastUpdated: '2025-01-17'
    },
    {
      id: 'ai-governance-guide',
      title: 'Enterprise AI Governance: Complete Implementation Guide',
      description: 'Master the art of AI governance with our comprehensive guide covering ethics and compliance.',
      type: 'resource',
      url: '/resources/ai-2025-enterprise-governance-guide',
      category: 'Governance',
      readTime: '18 min read',
      difficulty: 'Advanced',
      tags: ['governance', 'ethics', 'compliance', 'enterprise'],
      relevanceScore: 85,
      lastUpdated: '2025-01-16'
    },
    {
      id: 'multimodal-ai-revolution',
      title: 'Multimodal AI Revolution: 300% Accuracy Boost',
      description: 'Discover how multimodal AI is transforming industries with unprecedented accuracy improvements.',
      type: 'blog',
      url: '/blog/ai-2025-multimodal-revolution',
      category: 'AI Innovation',
      readTime: '9 min read',
      difficulty: 'Intermediate',
      tags: ['multimodal', 'ai', 'accuracy', 'innovation'],
      relevanceScore: 87,
      lastUpdated: '2025-01-16'
    },
    {
      id: 'ai-cybersecurity-guide',
      title: 'AI Cybersecurity: Advanced Threat Protection',
      description: 'Comprehensive guide to implementing AI-powered cybersecurity solutions for enterprise protection.',
      type: 'resource',
      url: '/resources/ai-2025-cybersecurity-guide',
      category: 'Cybersecurity',
      readTime: '14 min read',
      difficulty: 'Advanced',
      tags: ['cybersecurity', 'ai', 'threats', 'protection'],
      relevanceScore: 83,
      lastUpdated: '2025-01-15'
    },
    {
      id: 'ai-healthcare-transformation',
      title: 'AI Healthcare Transformation: Diagnosis Revolution',
      description: 'How AI is revolutionizing healthcare diagnosis and treatment with 99.7% accuracy rates.',
      type: 'case-study',
      url: '/case-studies/ai-2025-healthcare-transformation',
      category: 'Healthcare',
      readTime: '11 min read',
      difficulty: 'Intermediate',
      tags: ['healthcare', 'diagnosis', 'ai', 'transformation'],
      relevanceScore: 89,
      lastUpdated: '2025-01-15'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: allContent.length },
    { id: 'AI Technology', name: 'AI Technology', count: allContent.filter(c => c.category === 'AI Technology').length },
    { id: 'Quantum Technology', name: 'Quantum Technology', count: allContent.filter(c => c.category === 'Quantum Technology').length },
    { id: 'Success Story', name: 'Success Stories', count: allContent.filter(c => c.category === 'Success Story').length },
    { id: 'Implementation Guide', name: 'Implementation', count: allContent.filter(c => c.category === 'Implementation Guide').length },
    { id: 'Governance', name: 'Governance', count: allContent.filter(c => c.category === 'Governance').length },
    { id: 'Healthcare', name: 'Healthcare', count: allContent.filter(c => c.category === 'Healthcare').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allContent.filter(c => c.category === 'Cybersecurity').length }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      const filtered = selectedCategory === 'all' 
        ? allContent 
        : allContent.filter(content => content.category === selectedCategory);
      
      // Sort by relevance score
      const sorted = filtered.sort((a, b) => b.relevanceScore - a.relevanceScore);
      setRecommendations(sorted.slice(0, 6));
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📚';
      default:
        return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'border-blue-200 bg-blue-50 text-blue-800';
      case 'case-study':
        return 'border-green-200 bg-green-50 text-green-800';
      case 'resource':
        return 'border-purple-200 bg-purple-50 text-purple-800';
      default:
        return 'border-gray-200 bg-gray-50 text-gray-800';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">💡 Recommended for You</h3>
        <div className="text-sm text-gray-500">
          Based on your interests and trending topics
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((content) => (
          <div
            key={content.id}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${getTypeColor(content.type)}`}>
                <span className="mr-1">{getTypeIcon(content.type)}</span>
                {content.type.replace('-', ' ')}
              </div>
              <div className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(content.difficulty)}`}>
                {content.difficulty}
              </div>
            </div>

            <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
              {content.title}
            </h4>

            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {content.description}
            </p>

            <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
              <span>{content.readTime}</span>
              <span className="flex items-center">
                <span className="mr-1">⭐</span>
                {content.relevanceScore}% match
              </span>
            </div>

            <div className="flex flex-wrap gap-1 mb-4">
              {content.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <Link
              href={content.url}
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm"
            >
              Read More
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <Link
          href="/content-showcase"
          className="inline-flex items-center bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
        >
          View All Recommendations
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ContentRecommendationWidget;