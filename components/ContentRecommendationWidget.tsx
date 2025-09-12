import React from 'react';
import Link from 'next/link';

interface Recommendation {
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'tool';
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedValue: string;
  readTime: string;
}

const recommendations: Recommendation[] = [
  {
    title: "AI Trends 2025: Comprehensive Analysis",
    description: "Master the latest AI technologies transforming industries in 2025",
    href: "/blog/ai-2025-comprehensive-trends-analysis",
    type: "blog",
    category: "AI Strategy",
    difficulty: "intermediate",
    estimatedValue: "High",
    readTime: "15 min"
  },
  {
    title: "Manufacturing Giant $2.1B Transformation",
    description: "Learn from a Fortune 500's successful AI implementation journey",
    href: "/case-studies/ai-2025-manufacturing-giant-transformation",
    type: "case-study",
    category: "Implementation",
    difficulty: "advanced",
    estimatedValue: "Very High",
    readTime: "12 min"
  },
  {
    title: "AI ROI Calculator",
    description: "Calculate your potential AI investment returns instantly",
    href: "/tools/ai-roi-calculator",
    type: "tool",
    category: "Planning",
    difficulty: "beginner",
    estimatedValue: "High",
    readTime: "5 min"
  },
  {
    title: "LLM Optimization Masterclass",
    description: "Achieve 10x performance gains with large language models",
    href: "/blog/ai-2025-llm-optimization-masterclass",
    type: "blog",
    category: "Technical",
    difficulty: "advanced",
    estimatedValue: "Very High",
    readTime: "20 min"
  },
  {
    title: "$2.8B Tech Unicorn Success Story",
    description: "How AI transformed a startup into a global tech unicorn",
    href: "/case-studies/ai-2025-global-tech-unicorn-transformation",
    type: "case-study",
    category: "Success Stories",
    difficulty: "intermediate",
    estimatedValue: "High",
    readTime: "10 min"
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'beginner':
      return 'bg-green-100 text-green-800';
    case 'intermediate':
      return 'bg-yellow-100 text-yellow-800';
    case 'advanced':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getValueColor = (value: string) => {
  switch (value) {
    case 'Very High':
      return 'text-green-600';
    case 'High':
      return 'text-blue-600';
    case 'Medium':
      return 'text-yellow-600';
    default:
      return 'text-gray-600';
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'blog':
      return '📝';
    case 'case-study':
      return '📊';
    case 'tool':
      return '🧮';
    default:
      return '📄';
  }
};

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Recommended for You</h2>
        <div className="text-sm text-gray-500">Based on your interests</div>
      </div>

      <div className="space-y-4">
        {recommendations.slice(0, 3).map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="block group hover:bg-gray-50 rounded-xl p-4 transition-all hover:shadow-sm"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-xl">
                  {getTypeIcon(item.type)}
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                      {item.difficulty}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className="flex items-center space-x-1">
                      <span>📂</span>
                      <span>{item.category}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span>⏱️</span>
                      <span>{item.readTime}</span>
                    </span>
                    <span className={`font-medium ${getValueColor(item.estimatedValue)}`}>
                      💎 {item.estimatedValue} Value
                    </span>
                  </div>
                  
                  <div className="text-blue-600 text-sm font-medium group-hover:text-blue-700">
                    Read More →
                  </div>
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
        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/content-showcase"
            className="block text-center bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            View All Content
          </Link>
          <Link
            href="/contact"
            className="block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Get Personalized Recommendations
          </Link>
        </div>
      </div>
    </div>
  );
}