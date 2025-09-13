import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Users, Zap } from 'lucide-react';

const NewContentPromotionBanner2025: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🚀 New Content Just Dropped!
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover our latest AI insights, success stories, and revolutionary technology showcases. 
            Fresh content updated daily to keep you ahead of the curve.
          </p>

          {/* Content Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <TrendingUp className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">AI Insights & Trends</h3>
              <p className="text-blue-100 text-sm">
                Latest market insights, breakthrough discoveries, and emerging trends in AI technology
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Success Stories</h3>
              <p className="text-blue-100 text-sm">
                Real results from real companies achieving 2,500%+ ROI with our AI solutions
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <Zap className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Technology Showcase</h3>
              <p className="text-blue-100 text-sm">
                Revolutionary tech stack powering the future of AI and digital transformation
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-blue-200">New Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">25+</div>
              <div className="text-blue-200">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-blue-200">Tech Showcases</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">99%</div>
              <div className="text-blue-200">User Satisfaction</div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/ai-insights" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Explore AI Insights
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/success-stories" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              View Success Stories
              <Star className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/technologies" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              See Technologies
              <Zap className="w-5 h-5 ml-2" />
            </Link>
          </div>

          {/* Urgency Message */}
          <div className="mt-8 text-center">
            <p className="text-yellow-300 font-semibold">
              ⚡ Content updated daily - Don't miss out on the latest insights!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentPromotionBanner2025;