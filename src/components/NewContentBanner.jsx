import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, Zap } from 'lucide-react';
const NewContentBanner = () => {
  const featuredPosts = [
    {
      title: "AI 2026: Autonomous Code Generation Revolution",
      excerpt: "Revolutionary AI systems that can write, test, and deploy production-ready code autonomously",
      category: "AI Development",
      slug: "ai-2026-autonomous-code-generation-revolution",
      badge: "NEW",
      color: "bg-blue-500"
    },
    {
      title: "Quantum AI Optimization: Solving Impossible Problems",
      excerpt: "Breakthrough quantum AI algorithms that can solve NP-complete problems in polynomial time",
      category: "Quantum AI",
      slug: "quantum-ai-optimization-solving-impossible-problems",
      badge: "BREAKTHROUGH",
      color: "bg-purple-500"
    },
    {
      title: "AI-Powered Business Transformation: 500% ROI Case Studies",
      excerpt: "Real-world success stories of companies achieving unprecedented ROI through AI transformation",
      category: "Business AI",
      slug: "ai-powered-business-transformation-500-roi-case-studies",
      badge: "ROI FOCUSED",
      color: "bg-green-500"
    }
  ];
  return (
    <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 border border-gray-200 rounded-xl p-6 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Latest AI Breakthroughs 2026</h2>
        </div>
        <div className="ml-auto flex items-center gap-2 text-sm text-gray-600">
          <TrendingUp className="h-4 w-4" />
          <span>8 New Articles</span>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {featuredPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white ${post.color}`}>
                {post.badge}
              </span>
              <span className="text-xs text-gray-500 font-medium">{post.category}</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <Link 
              to={`/blog/${post.slug}`}
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
            >
              Read Article
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-yellow-500" />
              <span>8 Revolutionary Articles</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span>500% ROI Case Studies</span>
            </div>
          </div>
          <Link 
            to="/blog"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Explore All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );

};

export default NewContentBanner;
