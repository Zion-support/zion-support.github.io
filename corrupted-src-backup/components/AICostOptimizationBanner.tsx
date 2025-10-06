import React from 'react';
import { Link } from 'react-router-dom';

const AICostOptimizationBanner: React.FC = () => {
  const featuredPost = {
    id: 4,
    title: 'Enterprise AI FinOps: $50M+ Savings Guide',
    slug: 'enterprise-ai-finops-optimization-2026',
    excerpt: 'Complete guide to AI Financial Operations achieving $50M+ savings through intelligent resource allocation, usage optimization, and cost governance.',
    category: 'AI FinOps',
    date: '2026-01-30',
    readTime: '30 min',
    trending: true,
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">Featured: AI Cost Optimization</h2>
          <p className="text-blue-200">Learn how to achieve massive savings with AI Financial Operations</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {featuredPost.category}
            </span>
            <span className="text-blue-200 text-sm">{featuredPost.date}</span>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">{featuredPost.title}</h3>
          <p className="text-gray-200 mb-4">{featuredPost.excerpt}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-blue-200 text-sm">{featuredPost.readTime} read</span>
            <Link 
              to={`/blog/${featuredPost.slug}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICostOptimizationBanner;