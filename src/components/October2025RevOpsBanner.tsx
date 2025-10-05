import { TrendingUp } from 'lucide-react';
import { Link } from "react-router-dom";


;

const October2025RevOpsBanner = () => {
  return (
    <div className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 border-y border-emerald-500/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breaking News Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white font-bold text-sm shadow-lg animate-bounce">
            <TrendingUp className="w-4 h-4 mr-2" />
            JUST PUBLISHED - OCTOBER 1, 2025
            <TrendingUp className="w-4 h-4 ml-2" />
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 mb-3">
            🚀 Autonomous Revenue Operations Revolution
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-emerald-100 mb-4">
            Transform Your Revenue Engine with AI-Powered Intelligence
          </p>
          <p className="text-lg text-emerald-200 max-w-4xl mx-auto">
            Discover how leading enterprises are achieving <span className="font-bold text-white">127% ROI</span>, 
            <span className="font-bold text-white"> 89% forecast accuracy</span>, and 
            <span className="font-bold text-white"> 3.2x pipeline velocity</span> through autonomous revenue operations
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-emerald-400/30 hover:border-emerald-400/60 transition-all hover:scale-105">

            <div className="text-3xl font-black text-white mb-1">127%</div>
            <div className="text-sm text-emerald-200">Average ROI</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-teal-400/30 hover:border-teal-400/60 transition-all hover:scale-105">

            <div className="text-3xl font-black text-white mb-1">89%</div>
            <div className="text-sm text-teal-200">Forecast Accuracy</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-cyan-400/30 hover:border-cyan-400/60 transition-all hover:scale-105">

            <div className="text-3xl font-black text-white mb-1">3.2x</div>
            <div className="text-sm text-cyan-200">Pipeline Velocity</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-emerald-400/30 hover:border-emerald-400/60 transition-all hover:scale-105">

            <div className="text-3xl font-black text-white mb-1">$127M</div>
            <div className="text-sm text-emerald-200">Revenue Impact</div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-emerald-400/30 mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Blog Post */}
            <div className="bg-gradient-to-br from-emerald-800/50 to-teal-800/50 rounded-lg p-5 border border-emerald-400/40">
              <div className="text-emerald-300 font-bold mb-2 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                NEW COMPREHENSIVE GUIDE
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Autonomous RevOps Revolution: Complete Implementation Guide
              </h3>
              <p className="text-emerald-100 text-sm mb-4">
                Master autonomous revenue operations with AI-powered forecasting, intelligent pipeline management, 
                and automated deal acceleration. Learn proven strategies delivering 127% ROI and 89% forecast accuracy.
              </p>
              <Link
                to="/blog/ai-2025-oct-01-autonomous-revenue-operations-revolution"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Read the Guide

              </Link>
            </div>

            {/* Case Study */}
            <div className="bg-gradient-to-br from-blue-800/50 to-indigo-800/50 rounded-lg p-5 border border-blue-400/40">
              <div className="text-blue-300 font-bold mb-2 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                NEW CASE STUDY
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Fortune 500 SaaS: $127M Revenue Gain in 12 Months
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                Real-world transformation: How a $2.8B enterprise SaaS company achieved $127M incremental revenue, 
                89% forecast accuracy, and 3.2x pipeline velocity through autonomous revenue operations.
              </p>
              <Link
                to="/case-studies/ai-2025-oct-01-global-saas-autonomous-revops-127-million-success"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Read Case Study

              </Link>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-emerald-400/30 mb-6">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            What You'll Discover in These New Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-emerald-100">
            <div className="flex items-start">
              <div className="bg-emerald-500 rounded-full p-1 mr-3 mt-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-white">Intelligent Pipeline Management</div>
                <div className="text-sm">AI-powered deal scoring with 94% predictive accuracy</div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-emerald-500 rounded-full p-1 mr-3 mt-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-white">Autonomous Forecasting</div>
                <div className="text-sm">89% accuracy vs 52% with traditional methods</div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-emerald-500 rounded-full p-1 mr-3 mt-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-white">Revenue Intelligence Platform</div>
                <div className="text-sm">Analyze 100% of customer interactions automatically</div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-emerald-500 rounded-full p-1 mr-3 mt-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-white">Automated Workflows</div>
                <div className="text-sm">85% reduction in manual revenue operations tasks</div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-emerald-500 rounded-full p-1 mr-3 mt-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-white">Cross-Functional Alignment</div>
                <div className="text-sm">67% improvement in team collaboration scores</div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-emerald-500 rounded-full p-1 mr-3 mt-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-white">90-Day Implementation</div>
                <div className="text-sm">Fast time-to-value with proven methodology</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-3">
            Ready to Transform Your Revenue Operations?
          </h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Schedule a Revenue Operations Assessment with Zion Tech Group and discover how autonomous AI 
            can deliver 127% ROI for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-bold rounded-lg hover:bg-emerald-50 transition-all shadow-xl hover:shadow-2xl"
            >
              Schedule Assessment

            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center px-8 py-4 bg-emerald-800 text-white font-bold rounded-lg hover:bg-emerald-900 transition-all shadow-xl"
            >
              Explore All Content

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025RevOpsBanner;
