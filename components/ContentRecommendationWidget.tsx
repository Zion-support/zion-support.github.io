import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource';
  readTime: string;
  category: string;
  value?: string;
  trending?: boolean;
  new?: boolean;
  href: string;
  icon: string;
}

const ContentRecommendationWidget: React.FC = () => {
  const [recommendedContent, setRecommendedContent] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to get recommended content
    const fetchRecommendedContent = async () => {
      setIsLoading(true);
      
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const content: ContentItem[] = [
        {
          id: 'llm-optimization',
          title: 'LLM Optimization Masterclass',
          description: 'Master Large Language Model optimization with 10x performance improvements',
          type: 'blog',
          readTime: '25 min read',
          category: 'AI Optimization',
          trending: true,
          new: true,
          href: '/blog/ai-2025-llm-optimization-masterclass',
          icon: '🚀'
        },
        {
          id: 'edge-computing',
          title: 'Edge Computing Revolution',
          description: '10x performance with AI at the edge, ultra-low latency processing',
          type: 'blog',
          readTime: '22 min read',
          category: 'Edge AI',
          trending: true,
          href: '/blog/ai-2025-edge-computing-revolution',
          icon: '⚡'
        },
        {
          id: 'manufacturing-ai',
          title: 'Manufacturing AI Revolution',
          description: 'Fortune 100 transformation with $2.8B value creation',
          type: 'case-study',
          readTime: '20 min read',
          category: 'Success Stories',
          value: '$2.8B',
          href: '/case-studies/ai-2025-global-manufacturing-ai-revolution',
          icon: '🏆'
        },
        {
          id: 'enterprise-security',
          title: 'Enterprise Security Masterclass',
          description: 'Complete AI security framework for enterprise protection',
          type: 'blog',
          readTime: '30 min read',
          category: 'Security',
          new: true,
          href: '/blog/ai-2025-enterprise-security-masterclass',
          icon: '🔒'
        },
        {
          id: 'quantum-ai',
          title: 'Quantum AI Transformation',
          description: 'Fortune 500 quantum AI success with $3.2B value creation',
          type: 'case-study',
          readTime: '18 min read',
          category: 'Success Stories',
          value: '$3.2B',
          href: '/case-studies/ai-2025-fortune-500-quantum-transformation',
          icon: '⚛️'
        },
        {
          id: 'ai-agents',
          title: 'Advanced AI Agents Revolution',
          description: 'Autonomous intelligence systems with 300-500% efficiency gains',
          type: 'blog',
          readTime: '15 min read',
          category: 'AI Agents',
          trending: true,
          href: '/blog/ai-2025-advanced-ai-agents',
          icon: '🤖'
        }
      ];
      
      setRecommendedContent(content);
      setIsLoading(false);
    };

    fetchRecommendedContent();
  }, []);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-purple-100 text-purple-800';
      case 'resource':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Optimization':
        return 'text-blue-600';
      case 'Edge AI':
        return 'text-green-600';
      case 'Success Stories':
        return 'text-purple-600';
      case 'Security':
        return 'text-red-600';
      case 'AI Agents':
        return 'text-orange-600';
      default:
        return 'text-gray-600';
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Recommended for You</h3>
        <div className="flex items-center text-sm text-gray-500">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Live recommendations
        </div>
      </div>

      <div className="space-y-4">
        {recommendedContent.slice(0, 4).map((item) => (
          <Link key={item.id} href={item.href} className="block group">
            <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
              <div className="flex items-start space-x-3">
                <div className="text-2xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                      {item.type === 'case-study' ? 'Case Study' : 'Article'}
                    </span>
                    {item.new && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        NEW
                      </span>
                    )}
                    {item.trending && (
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                        TRENDING
                      </span>
                    )}
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                    {item.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <span className={getCategoryColor(item.category)}>
                        {item.category}
                      </span>
                      <span>•</span>
                      <span>{item.readTime}</span>
                      {item.value && (
                        <>
                          <span>•</span>
                          <span className="text-green-600 font-semibold">{item.value}</span>
                        </>
                      )}
                    </div>
                    <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
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
          className="flex items-center justify-center w-full py-2 px-4 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium"
        >
          View All Content
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ContentRecommendationWidget;