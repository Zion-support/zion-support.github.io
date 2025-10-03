// import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, BookOpen, TrendingUp, Sparkles } from 'lucide-react';

export default function October2025NewContentBanner() {
  return (
    <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white py-12 px-4 sm:px-6 lg:px-8 my-8 rounded-2xl shadow-xl overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-white/20 backdrop-blur-sm border border-white/30">
            <Calendar className="w-4 h-4 mr-2" />
            October 2025 Latest Content
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 leading-tight">
          Fresh AI Insights & Real-World Success Stories
        </h2>
        
        <p className="text-lg md:text-xl text-center text-emerald-100 mb-8 max-w-3xl mx-auto">
          Explore our latest deep dives into production AI systems and transformative case studies
        </p>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
          {/* MLOps Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Advanced MLOps Automation</h3>
                <p className="text-emerald-100 text-sm mb-3">
                  Production-ready ML at scale with automated deployment, monitoring, and retraining
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/blog/ai-2025-oct-02-advanced-mlops-automation-platform"
                    className="inline-flex items-center text-sm font-semibold hover:text-white transition-colors"
                  >
                    <BookOpen className="w-4 h-4 mr-1" />
                    Read Guide
                  </Link>
                  <Link to="/case-studies/ai-2025-oct-02-global-tech-mlops-transformation-340m-success"
                    className="inline-flex items-center text-sm font-semibold hover:text-white transition-colors"
                  >
                    <Sparkles className="w-4 h-4 mr-1" />
                    $340M Success Story
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Personalization Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Real-Time AI Personalization</h3>
                <p className="text-emerald-100 text-sm mb-3">
                  Next-gen customer experiences with sub-100ms AI decision making at massive scale
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/blog/ai-2025-oct-02-real-time-personalization-engines"
                    className="inline-flex items-center text-sm font-semibold hover:text-white transition-colors"
                  >
                    <BookOpen className="w-4 h-4 mr-1" />
                    Read Guide
                  </Link>
                  <Link to="/case-studies/ai-2025-oct-02-retail-personalization-12-4-billion-success"
                    className="inline-flex items-center text-sm font-semibold hover:text-white transition-colors"
                  >
                    <Sparkles className="w-4 h-4 mr-1" />
                    $12.4B Success Story
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl py-4 px-6 max-w-4xl mx-auto border border-white/20">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">$12.7B</div>
              <div className="text-xs text-emerald-100">Combined Value Created</div>
            </div>
            <div>
              <div className="text-2xl font-bold">500+</div>
              <div className="text-xs text-emerald-100">Models Deployed</div>
            </div>
            <div>
              <div className="text-2xl font-bold">500M</div>
              <div className="text-xs text-emerald-100">Customers Served</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Link to="/content-hub"
            className="inline-flex items-center px-6 py-3 bg-white text-emerald-700 font-bold rounded-lg hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Explore All Content
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// Compact version for sidebar or footer
export function October2025NewContentCompactBanner() {
  return (
    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-6 px-6 my-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <Calendar className="w-6 h-6" />
        <h3 className="text-xl font-bold">October 2025 Latest Content</h3>
      </div>
      
      <div className="space-y-3 mb-4">
        <Link to="/blog/ai-2025-oct-02-advanced-mlops-automation-platform" className="block">
          <div className="text-sm font-semibold hover:text-emerald-100 transition-colors">
            → Advanced MLOps Automation Platform
          </div>
        </Link>
        <Link to="/blog/ai-2025-oct-02-real-time-personalization-engines" className="block">
          <div className="text-sm font-semibold hover:text-emerald-100 transition-colors">
            → Real-Time AI Personalization Engines
          </div>
        </Link>
      </div>
      
      <Link to="/content-hub"
        className="inline-flex items-center text-sm font-semibold hover:text-emerald-100 transition-colors"
      >
        View All Content
        <ArrowRight className="ml-2 w-4 h-4" />
      </Link>
    </div>
  );
}
