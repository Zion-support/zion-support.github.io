import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, BookOpen } from 'lucide-react';

const LatestContentBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-6 h-6 text-yellow-400" />
              <span className="text-sm font-medium bg-yellow-400 text-blue-900 px-3 py-1 rounded-full">
                NEW CONTENT
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              AI 2025: Enterprise Automation Mastery
            </h2>
            
            <p className="text-xl text-blue-100 mb-6">
              Discover the complete roadmap to enterprise AI automation mastery. Learn implementation strategies, 
              ROI optimization, and real-world success stories that delivered $2.3B in revenue growth.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-sm">340% ROI</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-300" />
                <span className="text-sm">Complete Guide</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">Featured Content</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/blog/ai-2025-enterprise-automation-mastery-complete-guide"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Read Full Guide
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/resources/ai-2025-implementation-checklist-comprehensive"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
              >
                Get Checklist
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Featured Success Story</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Fortune 500 Transformation</h4>
                    <p className="text-blue-100 text-sm">
                      $2.3B revenue increase in 18 months through comprehensive AI implementation
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Enterprise Automation</h4>
                    <p className="text-blue-100 text-sm">
                      95% reduction in manual processes with 99.7% accuracy improvement
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Implementation Guide</h4>
                    <p className="text-blue-100 text-sm">
                      Step-by-step checklist for successful AI transformation
                    </p>
                  </div>
                </div>
              </div>
              
              <Link
                to="/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story"
                className="inline-flex items-center gap-2 mt-6 text-yellow-300 hover:text-yellow-200 font-medium"
              >
                Read Case Study
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestContentBanner;