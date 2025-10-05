import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Star } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 border border-white/30 mb-6">
            <BookOpen className="w-5 h-5" />
            <span className="font-medium">New Content Available</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Our Latest Insights
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Explore cutting-edge AI research, industry trends, and expert insights that will transform your business
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Read Latest Articles
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              <Star className="w-5 h-5 mr-2" />
              Explore Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;