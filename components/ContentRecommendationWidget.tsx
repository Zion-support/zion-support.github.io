import React from 'react';
import Link from 'next/link';

interface ContentRecommendationWidgetProps {
  title?: string;
  showTitle?: boolean;
  maxItems?: number;
  category?: 'all' | 'blog' | 'case-studies' | 'resources';
}

export default function ContentRecommendationWidget({ 
  title = "Recommended for You",
  showTitle = true,
  maxItems = 3,
  category = 'all'
}: ContentRecommendationWidgetProps) {
  const contentItems = [
    {
      id: 'advanced-robotics',
      title: 'Advanced Robotics & AI Integration',
      description: 'Humanoid robots and autonomous systems revolutionizing industries',
      url: '/blog/ai-2025-advanced-robotics',
      type: 'blog',
      readTime: '18 min read',
      icon: '🤖',
      badge: 'New',
      badgeColor: 'bg-green-500'
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interfaces & BCI',
      description: 'Direct brain-computer communication enabling human enhancement',
      url: '/blog/ai-2025-neural-interfaces',
      type: 'blog',
      readTime: '20 min read',
      icon: '🧠',
      badge: 'Hot',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 'space-technology',
      title: 'AI-Powered Space Technology',
      description: 'Revolutionary space exploration with autonomous spacecraft and mining',
      url: '/blog/ai-2025-space-technology',
      type: 'blog',
      readTime: '16 min read',
      icon: '🚀',
      badge: 'Trending',
      badgeColor: 'bg-purple-500'
    },
    {
      id: 'autonomous-vehicles',
      title: 'Autonomous Vehicles Success',
      description: '95% reduction in accidents, $2.3T market value created',
      url: '/case-studies/ai-2025-autonomous-vehicles-success',
      type: 'case-study',
      readTime: 'Case Study',
      icon: '🚗',
      badge: 'Featured',
      badgeColor: 'bg-orange-500'
    },
    {
      id: 'manufacturing-automation',
      title: 'Manufacturing Automation Success',
      description: '40% productivity increase with AI-powered robotic systems',
      url: '/case-studies/ai-2025-manufacturing-automation-success',
      type: 'case-study',
      readTime: 'Case Study',
      icon: '🏭',
      badge: 'Award Winner',
      badgeColor: 'bg-green-500'
    },
    {
      id: 'financial-transformation',
      title: 'Financial Services Transformation',
      description: 'Real-time fraud detection and personalized banking experiences',
      url: '/case-studies/ai-2025-financial-services-transformation-success',
      type: 'case-study',
      readTime: 'Case Study',
      icon: '💰',
      badge: 'Success Story',
      badgeColor: 'bg-blue-500'
    }
  ];

  // Filter content based on category
  const filteredItems = category === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === category);

  // Take only the requested number of items
  const displayItems = filteredItems.slice(0, maxItems);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      {showTitle && (
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      )}
      
      <div className="space-y-4">
        {displayItems.map((item) => (
          <Link key={item.id} href={item.url} className="group block">
            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="text-2xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                    {item.title}
                  </h4>
                  <span className={`${item.badgeColor} text-white text-xs px-2 py-1 rounded-full`}>
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>{item.readTime}</span>
                  <span className="mx-1">•</span>
                  <span className="capitalize">{item.type.replace('-', ' ')}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <Link 
          href="/content-showcase" 
          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          View All Content →
        </Link>
      </div>
    </div>
  );
}