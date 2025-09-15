import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
ArrowRightTrendingUpAwardUsersZapTarget

const AI2025BreakthroughShowcase: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold mb-6">
            <Award className="w-4 h-4 mr-2" />
            BREAKTHROUGH CONTENT 2025
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Insights That Are
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Changing Everything</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access cutting-edge researchproven methodologiesand real-world success stories 
            that are defining the future of business transformation
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Blog Post */}
          <div className="group bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-purple-300">BLOG POST</span>
            </div>
            
            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
              AI 2025: Business Automation Revolution
            </h3>
            
            <p className="text-gray-300 mb-6 text-sm">
              Discover how Neural Process Automation and Quantum-Enhanced Analytics 
              are transforming industries with unprecedented efficiency gains.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-xs text-gray-400">
                <span className="flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  15 min read
                </span>
                <span>Published Jan 2025</span>
              </div>
              
              <a 
                href="/blog/ai-2025-business-automation-revolution"
                className="flex items-center text-purple-400 hover:text-purple-300 font-semibold text-sm group-hover:translate-x-1 transition-all"
              >
                Read More
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          {/* Case Study */}
          <div className="group bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-emerald-300">CASE STUDY</span>
            </div>
            
            <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-300 transition-colors">
              $500M ROI Transformation
            </h3>
            
            <p className="text-gray-300 mb-6 text-sm">
              Fortune 500 manufacturing company achieves staggering returns through 
              comprehensive AI implementation across 200+ facilities.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-xs text-gray-400">
                <span className="flex items-center">
                  <Award className="w-3 h-3 mr-1" />
                  25 min read
                </span>
                <span>Jan 2025</span>
              </div>
              
              <a 
                href="/case-studies/enterprise-ai-transformation-2025-500-million-roi"
                className="flex items-center text-emerald-400 hover:text-emerald-300 font-semibold text-sm group-hover:translate-x-1 transition-all"
              >
                View Study
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          {/* Implementation Guide */}
          <div className="group bg-gradient-to-br from-orange-900/50 to-red-900/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-orange-300">IMPLEMENTATION GUIDE</span>
            </div>
            
            <h3 className="text-xl font-bold mb-3 group-hover:text-orange-300 transition-colors">
              AI 2025 Implementation Master Guide
            </h3>
            
            <p className="text-gray-300 mb-6 text-sm">
              Complete roadmap for AI transformation with proven methodologies
              best practicesand step-by-step implementation strategies.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-xs text-gray-400">
                <span className="flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  35 min read
                </span>
                <span>Jan 2025</span>
              </div>
              
              <a 
                href="/resources/ai-2025-implementation-guide"
                className="flex items-center text-orange-400 hover:text-orange-300 font-semibold text-sm group-hover:translate-x-1 transition-all"
              >
                Get Guide
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              400-800%
            </div>
            <div className="text-gray-300 text-sm">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              30-60%
            </div>
            <div className="text-gray-300 text-sm">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              25-50%
            </div>
            <div className="text-gray-300 text-sm">Revenue Growth</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
              95%+
            </div>
            <div className="text-gray-300 text-sm">Success Rate</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of forward-thinking companies that are already experiencing 
            unprecedented growth through AI transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/resources/ai-2025-implementation-guide"
              className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="flex items-center justify-center">
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a 
              href="/contact"
              className="group bg-transparent border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              <span className="flex items-center justify-center">
                Speak with Expert
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025BreakthroughShowcase;