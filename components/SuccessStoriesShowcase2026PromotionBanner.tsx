import React from 'react';
import Link from 'next/link';
ArrowRightStarTrendingUpUsersCheckCircle

const SuccessStoriesShowcase2026PromotionBanner = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Star className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-yellow-400 font-semibold text-lg">SUCCESS STORIES</span>
            <Star className="h-8 w-8 text-yellow-400 ml-3" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real ResultsReal Businesses
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover how companies across industries achieved 300%+ ROI with our AI solutions. 
            Read verified success stories and see the transformation for yourself.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center text-white">
              <TrendingUp className="h-6 w-6 text-green-300 mr-2" />
              <span className="font-semibold">340% Avg ROI</span>
            </div>
            <div className="flex items-center text-white">
              <Users className="h-6 w-6 text-blue-300 mr-2" />
              <span className="font-semibold">500+ Companies</span>
            </div>
            <div className="flex items-center text-white">
              <CheckCircle className="h-6 w-6 text-purple-300 mr-2" />
              <span className="font-semibold">Verified Results</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/success-stories-2026" 
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Read Success Stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Start Your Success Story
            </Link>
          </div>
          
          <div className="mt-8 text-blue-100">
            <p className="text-sm">
              🏆 Featured in Fortune 500 • 98% Client Satisfaction • 100% Verified Results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesShowcase2026PromotionBanner;