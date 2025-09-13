import React from 'react';
import Link from 'next/link';

interface ContentRecommendationWidgetProps {
  title?: string;
  maxItems?: number;
  category?: 'all' | 'blog' | 'resources' | 'case-studies';
  className?: string;
}

const contentItems = [
  {
    id: 'ai-architecture-2025',
    title: 'Advanced AI Architecture 2025',
    description: 'Master scalable, resilient AI systems with microservices and edge computing',
    type: 'blog',
    url: '/blog/ai-2025-advanced-ai-architecture',
    icon: '🏗️',
    readTime: '15 min',
    category: 'Architecture',
    featured: true
  },
  {
    id: 'ai-automation-revolution',
    title: 'AI Automation Revolution',
    description: 'Discover how AI automation is transforming industries in 2025',
    type: 'blog',
    url: '/blog/ai-2025-automation-revolution',
    icon: '🤖',
    readTime: '12 min',
    category: 'Automation',
    featured: true
  },
  {
    id: 'manufacturing-case-study',
    title: 'Manufacturing AI Success',
    description: 'How a Fortune 500 company achieved 30% efficiency gains',
    type: 'case-studies',
    url: '/case-studies/ai-manufacturing-transformation-2025',
    icon: '🏭',
    readTime: '8 min',
    category: 'Case Study',
    featured: true
  },
  {
    id: 'implementation-guide-2026',
    title: 'AI Implementation Master Guide 2026',
    description: 'Complete blueprint for implementing AI systems in enterprise environments',
    type: 'resources',
    url: '/resources/ai-implementation-master-guide-2026',
    icon: '📚',
    readTime: '45 min',
    category: 'Guide',
    featured: true
  },
  {
    id: 'cybersecurity-ai-2025',
    title: 'AI Cybersecurity Revolution',
    description: 'Next-generation threat protection and security strategies',
    type: 'blog',
    url: '/blog/ai-2025-cybersecurity-revolution',
    icon: '🛡️',
    readTime: '10 min',
    category: 'Security',
    featured: false
  },
  {
    id: 'quantum-computing-ai',
    title: 'Quantum Computing Breakthroughs',
    description: 'Revolutionary quantum AI applications and future possibilities',
    type: 'blog',
    url: '/blog/ai-2025-quantum-computing-breakthrough',
    icon: '⚛️',
    readTime: '14 min',
    category: 'Quantum',
    featured: false
  },
  {
    id: 'edge-computing-ai',
    title: 'Edge Computing Revolution',
    description: 'How edge computing is transforming AI deployment and performance',
    type: 'blog',
    url: '/blog/ai-2025-edge-computing-revolution',
    icon: '⚡',
    readTime: '11 min',
    category: 'Edge Computing',
    featured: false
  },
  {
    id: 'mlops-best-practices',
    title: 'MLOps Best Practices 2025',
    description: 'Essential MLOps strategies for production AI systems',
    type: 'blog',
    url: '/blog/ai-2025-mlops-best-practices',
    icon: '🔄',
    readTime: '13 min',
    category: 'MLOps',
    featured: false
  }
];

export default function ContentRecommendationWidget({ 
  title = "Recommended Content",
  maxItems = 3,
  category = 'all',
  className = ""
}: ContentRecommendationWidgetProps) {
  const filteredItems = contentItems
    .filter(item => category === 'all' || item.type === category)
    .slice(0, maxItems);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Architecture': 'bg-blue-100 text-blue-800',
      'Automation': 'bg-green-100 text-green-800',
      'Case Study': 'bg-purple-100 text-purple-800',
      'Guide': 'bg-indigo-100 text-indigo-800',
      'Security': 'bg-red-100 text-red-800',
      'Quantum': 'bg-yellow-100 text-yellow-800',
      'Edge Computing': 'bg-cyan-100 text-cyan-800',
      'MLOps': 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  if (filteredItems.length === 0) {
    return null;
  }

  return (
    <div className={`bg-white border border-gray-200 rounded-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <Link 
          href="/content-showcase"
          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          View All →
        </Link>
      </div>
      
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <Link key={item.id} href={item.url} className="group block">
            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="text-2xl flex-shrink-0">{item.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 line-clamp-1">
                    {item.title}
                  </h4>
                  {item.featured && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                  {item.description}
                </p>
                <div className="flex items-center space-x-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500">{item.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <Link
          href="/content-showcase"
          className="w-full bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors text-center block"
        >
          Explore More Content
        </Link>
      </div>
    </div>
  );
}