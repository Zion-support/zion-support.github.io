import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, TrendingUp } from 'lucide-react';

const BlogPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 border border-white/30 mb-6">
            <BookOpen className="w-5 h-5" />
            <span className="font-medium">Latest Blog Posts</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with AI Insights
          </h2>
          
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            Discover the latest trends, breakthroughs, and expert insights in artificial intelligence and technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Explore All Articles
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Trending Topics
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPromotionBanner;