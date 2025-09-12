import React from 'react';
import Link from 'next/link';

export default function RevolutionaryContentShowcase2026() {
  const featuredContent = [
    {
      id: 1,
      title: "AI 2026 Enterprise Implementation Mastery",
      description: "The definitive guide to implementing AI at enterprise scale in 2026. Learn proven methodologies that have helped 200+ enterprises achieve 340% average ROI.",
      type: "Blog Post",
      category: "Implementation",
      readTime: "15 min read",
      difficulty: "Advanced",
      rating: 5,
      views: "12.5K",
      publishedDate: "2026-01-15",
      image: "/images/ai-implementation-guide-2026.jpg",
      url: "/blog/ai-2026-enterprise-implementation-mastery",
      tags: ["AI Implementation", "Enterprise", "Strategy", "ROI"],
      isNew: true,
      isFeatured: true
    },
    {
      id: 2,
      title: "Quantum AI Financial Optimization Breakthrough",
      description: "Revolutionary case study showing how a major financial institution achieved 500% ROI using quantum-enhanced AI for portfolio optimization and risk management.",
      type: "Case Study",
      category: "Quantum AI",
      readTime: "12 min read",
      difficulty: "Expert",
      rating: 5,
      views: "8.7K",
      publishedDate: "2026-01-20",
      image: "/images/quantum-ai-financial-2026.jpg",
      url: "/case-studies/quantum-ai-financial-optimization-breakthrough-2026",
      tags: ["Quantum AI", "Financial Services", "Portfolio Optimization", "Risk Management"],
      isNew: true,
      isFeatured: true
    },
    {
      id: 3,
      title: "AI 2026 Complete Implementation Master Guide",
      description: "The most comprehensive AI implementation resource available. Everything you need to successfully implement AI at enterprise scale with proven methodologies and tools.",
      type: "Resource",
      category: "Master Guide",
      readTime: "45 min read",
      difficulty: "All Levels",
      rating: 5,
      views: "15.2K",
      publishedDate: "2026-01-25",
      image: "/images/ai-master-guide-2026.jpg",
      url: "/resources/ai-2026-complete-implementation-master-guide",
      tags: ["Implementation Guide", "Templates", "Tools", "Best Practices"],
      isNew: true,
      isFeatured: true
    },
    {
      id: 4,
      title: "AI 2026 Future Predictions & Trends",
      description: "Comprehensive analysis of AI trends and predictions for 2026. Discover what's coming next in artificial intelligence and how to prepare your organization.",
      type: "Blog Post",
      category: "Trends",
      readTime: "18 min read",
      difficulty: "Intermediate",
      rating: 4.8,
      views: "9.3K",
      publishedDate: "2026-01-10",
      image: "/images/ai-trends-2026.jpg",
      url: "/blog/ai-2026-future-predictions",
      tags: ["AI Trends", "Predictions", "Future", "Strategy"],
      isNew: false,
      isFeatured: true
    },
    {
      id: 5,
      title: "Neural Interface Healthcare Breakthrough 2026",
      description: "Revolutionary case study showing how neural interface technology is transforming healthcare with AI-powered diagnosis and treatment systems.",
      type: "Case Study",
      category: "Healthcare AI",
      readTime: "14 min read",
      difficulty: "Expert",
      rating: 4.9,
      views: "6.8K",
      publishedDate: "2026-01-18",
      image: "/images/neural-interface-healthcare-2026.jpg",
      url: "/case-studies/ai-neural-interface-healthcare-breakthrough-2025",
      tags: ["Neural Interfaces", "Healthcare", "AI Diagnosis", "Medical AI"],
      isNew: true,
      isFeatured: false
    },
    {
      id: 6,
      title: "AI 2026 Implementation Toolkit",
      description: "Complete toolkit with templates, checklists, and tools to accelerate your AI implementation. Everything you need to get started with AI in 2026.",
      type: "Resource",
      category: "Toolkit",
      readTime: "30 min read",
      difficulty: "All Levels",
      rating: 4.7,
      views: "11.4K",
      publishedDate: "2026-01-22",
      image: "/images/ai-toolkit-2026.jpg",
      url: "/resources/ai-2026-implementation-toolkit",
      tags: ["Toolkit", "Templates", "Checklists", "Implementation"],
      isNew: true,
      isFeatured: false
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-orange-100 text-orange-800';
      case 'Expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Implementation': return 'bg-blue-100 text-blue-800';
      case 'Quantum AI': return 'bg-purple-100 text-purple-800';
      case 'Master Guide': return 'bg-green-100 text-green-800';
      case 'Trends': return 'bg-pink-100 text-pink-800';
      case 'Healthcare AI': return 'bg-red-100 text-red-800';
      case 'Toolkit': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4 text-sm font-medium">
            🚀 REVOLUTIONARY CONTENT - JANUARY 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Our Latest AI Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge AI content that's transforming industries and helping organizations 
            achieve unprecedented results with artificial intelligence.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content) => (
            <div key={content.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200">
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  {content.isNew && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                      NEW
                    </span>
                  )}
                  {content.isFeatured && (
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </span>
                  )}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white text-sm">
                    <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                      {content.type}
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                      {content.readTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category and Difficulty */}
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(content.category)}`}>
                    {content.category}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(content.difficulty)}`}>
                    {content.difficulty}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {content.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <span>⭐</span>
                      <span>{content.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>👁️</span>
                      <span>{content.views}</span>
                    </div>
                  </div>
                  <span>{new Date(content.publishedDate).toLocaleDateString()}</span>
                </div>

                {/* CTA Button */}
                <Link 
                  href={content.url}
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link 
            href="/content-showcase"
            className="inline-flex items-center bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 group"
          >
            <span>View All Content</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2">Content Impact</h3>
            <p className="text-blue-100">See how our content is transforming organizations worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Organizations Using Our Content</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">340%</div>
              <div className="text-blue-100">Average ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Monthly Content Views</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}