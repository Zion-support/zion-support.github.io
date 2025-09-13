import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  image: string;
  href: string;
  tags: string[];
  popularity: number;
  relevance: number;
}

export default function ContentRecommendationWidget2026() {
  const [recommendations, setRecommendations] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-2026-trends',
      title: 'AI 2026: Revolutionary Trends That Will Transform Everything',
      description: 'Discover the groundbreaking AI trends for 2026 that will revolutionize industries, from quantum AI to neural interfaces.',
      category: 'Blog Post',
      readTime: '15 min read',
      image: '/images/ai-2026-trends-hero.jpg',
      href: '/blog/ai-2026-revolutionary-trends',
      tags: ['AI Trends', '2026 Predictions', 'Technology'],
      popularity: 95,
      relevance: 98
    },
    {
      id: 'retail-transformation',
      title: 'Global Retail Giant AI Transformation: $2.3B Revenue Increase',
      description: 'How a Fortune 500 retail company achieved unprecedented growth through comprehensive AI transformation.',
      category: 'Case Study',
      readTime: '12 min read',
      image: '/images/retail-ai-transformation.jpg',
      href: '/case-studies/ai-transformation-global-retail-giant-2026',
      tags: ['Retail', 'AI Transformation', 'ROI'],
      popularity: 92,
      relevance: 95
    },
    {
      id: 'implementation-guide',
      title: 'AI 2026 Implementation Master Guide: Complete Blueprint',
      description: 'The definitive guide to implementing AI in 2026. Complete blueprint with frameworks, checklists, and templates.',
      category: 'Resource',
      readTime: '45 min read',
      image: '/images/ai-implementation-guide.jpg',
      href: '/resources/ai-2026-implementation-master-guide',
      tags: ['Implementation', 'Guide', 'Framework'],
      popularity: 88,
      relevance: 92
    },
    {
      id: 'quantum-ai',
      title: 'Quantum AI Breakthrough: The Future of Machine Learning',
      description: 'Explore how quantum computing is revolutionizing machine learning algorithms and enabling solutions to impossible problems.',
      category: 'Blog Post',
      readTime: '18 min read',
      image: '/images/quantum-ai-breakthrough.jpg',
      href: '/blog/ai-2026-quantum-machine-learning-revolution',
      tags: ['Quantum AI', 'Machine Learning', 'Breakthrough'],
      popularity: 85,
      relevance: 90
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interface Revolution: Brain-Computer Interfaces in 2026',
      description: 'Discover the latest developments in brain-computer interface technology and how it\'s transforming healthcare.',
      category: 'Blog Post',
      readTime: '20 min read',
      image: '/images/neural-interface-revolution.jpg',
      href: '/blog/ai-2026-neural-interface-breakthrough',
      tags: ['Neural Interfaces', 'BCI', 'Healthcare'],
      popularity: 82,
      relevance: 88
    },
    {
      id: 'manufacturing-breakthrough',
      title: 'Fortune 500 Manufacturing AI Breakthrough: 60% Efficiency Gains',
      description: 'How a manufacturing giant achieved unprecedented efficiency gains through AI automation and predictive maintenance.',
      category: 'Case Study',
      readTime: '14 min read',
      image: '/images/manufacturing-ai-breakthrough.jpg',
      href: '/case-studies/ai-transformation-fortune-500-breakthrough-2025',
      tags: ['Manufacturing', 'Automation', 'Efficiency'],
      popularity: 80,
      relevance: 85
    }
  ];

  useEffect(() => {
    // Simulate API call for personalized recommendations
    const timer = setTimeout(() => {
      // Sort by combined popularity and relevance score
      const sortedContent = contentItems
        .sort((a, b) => (b.popularity + b.relevance) - (a.popularity + a.relevance))
        .slice(0, 4);
      
      setRecommendations(sortedContent);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended for You</h3>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="flex space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Recommended for You</h3>
        <div className="flex items-center text-sm text-gray-500">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          AI-Powered
        </div>
      </div>

      <div className="space-y-4">
        {recommendations.map((item, index) => (
          <Link
            key={item.id}
            href={item.href}
            className="block group hover:bg-gray-50 rounded-lg p-3 transition-colors"
          >
            <div className="flex space-x-4">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  #{index + 1}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500">{item.readTime}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {Math.round((item.popularity + item.relevance) / 2)}%
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <Link
          href="/content-showcase"
          className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
        >
          View All Content
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}