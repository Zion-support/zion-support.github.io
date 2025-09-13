import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';

const NewContent2025RevolutionaryBanner: React.FC = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Revolutionary Content 2025
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Discover the Future of
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Transformation
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary insights, breakthrough case studies, and comprehensive implementation guides 
            that will transform your enterprise in 2025 and beyond.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">300%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">$2.5B+</div>
              <div className="text-gray-300">Revenue Impact</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">95%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Blog Post Card */}
          <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Revolutionary Blog</h3>
                <p className="text-sm text-gray-300">AI 2025 Breakthrough</p>
              </div>
            </div>
            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
              AI 2025: The Revolutionary Enterprise Automation Breakthrough
            </h4>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Discover how quantum-enhanced AI is transforming enterprises with unprecedented efficiency, 
              cost reduction, and competitive advantage.
            </p>
            <Link 
              to="/blog/ai-2025-enterprise-automation-revolutionary-breakthrough" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-all"
            >
              Read Full Article
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Case Study Card */}
          <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Success Story</h3>
                <p className="text-sm text-gray-300">Real Results</p>
              </div>
            </div>
            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
              AI Automation Enterprise Success: 2025 Transformation Case Study
            </h4>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Learn how a global technology company achieved 300% ROI and $2.5B additional revenue 
              through comprehensive AI automation transformation.
            </p>
            <Link 
              to="/case-studies/ai-automation-enterprise-success-2025" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all"
            >
              View Case Study
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Resource Guide Card */}
          <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Complete Guide</h3>
                <p className="text-sm text-gray-300">Implementation</p>
              </div>
            </div>
            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
              AI 2025 Implementation: Complete Enterprise Guide
            </h4>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Your comprehensive roadmap to AI transformation success with strategic planning, 
              technology selection, and implementation best practices.
            </p>
            <Link 
              to="/resources/ai-2025-implementation-complete-guide" 
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium group-hover:translate-x-1 transition-all"
            >
              Get The Guide
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link 
              to="/content-showcase" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore All Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Get Implementation Help
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm mb-4">Trusted by industry leaders</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-white font-semibold">Fortune 500</div>
              <div className="text-white font-semibold">Global Enterprises</div>
              <div className="text-white font-semibold">Innovation Leaders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025RevolutionaryBanner;