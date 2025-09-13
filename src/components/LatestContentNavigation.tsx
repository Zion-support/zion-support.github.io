import React from 'react';
import Link from 'next/link';
import { BookOpen, FileText, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

const LatestContentNavigation: React.FC = () => {
  const latestContent = [
    {
      type: 'blog',
      title: 'AI 2025: Autonomous Business Revolution',
      description: 'Complete guide to revolutionizing business operations with AI',
      href: '/blog/ai-2025-autonomous-business-revolution-complete-guide',
      icon: <BookOpen className="h-5 w-5" />,
      badge: 'New'
    },
    {
      type: 'case-study',
      title: 'Fortune 500: $10B ROI Success',
      description: 'How a Fortune 500 company achieved massive ROI with AI',
      href: '/case-studies/fortune-500-ai-transformation-2025-10-billion-roi',
      icon: <TrendingUp className="h-5 w-5" />,
      badge: 'Featured'
    },
    {
      type: 'resource',
      title: 'AI 2025 Implementation Guide',
      description: 'Step-by-step master guide to AI implementation',
      href: '/resources/ai-2025-implementation-guide',
      icon: <FileText className="h-5 w-5" />,
      badge: 'Popular'
    }
  ];

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

  return (
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Latest Content</h2>
            <Sparkles className="h-6 w-6 text-blue-600 ml-2" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our newest articles, case studies, and implementation guides for AI transformation in 2025
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {latestContent.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>
                  {item.icon}
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full border ${
                  item.badge === 'New' ? 'bg-red-100 text-red-800 border-red-200' :
                  item.badge === 'Featured' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                  'bg-purple-100 text-purple-800 border-purple-200'
                }`}>
                  {item.badge}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {item.description}
              </p>
              
              <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-medium">
                <span className="text-sm">Read More</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/resources"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <BookOpen className="h-5 w-5 mr-2" />
            Explore All Resources
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestContentNavigation;