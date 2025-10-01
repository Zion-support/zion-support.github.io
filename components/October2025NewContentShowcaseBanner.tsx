import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Map, ArrowRight, Star, Sparkles, TrendingUp } from 'lucide-react';

export const October2025NewContentShowcaseBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl shadow-2xl my-8">
      {/* Animated stars background */}
      <div className="absolute inset-0">
        <div className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-pulse" style={{ top: '20%', left: '10%' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse" style={{ top: '40%', left: '30%', animationDelay: '0.5s' }}></div>
        <div className="absolute w-2 h-2 bg-white rounded-full opacity-80 animate-pulse" style={{ top: '60%', right: '20%', animationDelay: '1s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-pulse" style={{ bottom: '30%', right: '40%', animationDelay: '1.5s' }}></div>
        <div className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-70 animate-pulse" style={{ top: '15%', right: '15%', animationDelay: '2s' }}></div>
      </div>

      <div className="relative px-8 py-12 md:px-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm rounded-full border border-yellow-400/30 mb-4">
              <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
              <span className="text-sm font-semibold text-yellow-300">LATEST CONTENT - OCTOBER 2025</span>
              <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Our Newest
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
                AI & Business Intelligence Resources
              </span>
            </h2>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Deep-dive articles, proven case studies, and actionable implementation guides to accelerate your AI transformation journey
            </p>
          </div>

          {/* Content Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Blog Post Card */}
            <div className="bg-gradient-to-br from-indigo-600/40 to-purple-600/40 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-indigo-300 font-semibold">FEATURED ARTICLE</div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-300 fill-yellow-300" />
                    ))}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                Cognitive Business Intelligence Revolution
              </h3>
              
              <p className="text-white/80 text-sm mb-4 line-clamp-3">
                Discover how AI-powered analytics transforms enterprise decision-making with autonomous insights, natural language interfaces, and predictive intelligence.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-500/30 text-blue-200 text-xs rounded-full">AI Analytics</span>
                <span className="px-2 py-1 bg-purple-500/30 text-purple-200 text-xs rounded-full">Enterprise</span>
                <span className="px-2 py-1 bg-green-500/30 text-green-200 text-xs rounded-full">ROI: 340%</span>
              </div>
              
              <div className="pt-4 border-t border-white/10">
                <div className="text-white/70 text-sm mb-3">
                  <strong className="text-white">Key Insights:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• $42.7M average annual value</li>
                    <li>• 73% faster time-to-insight</li>
                    <li>• 89% user adoption rates</li>
                  </ul>
                </div>
                
                <Link
                  to="/blog/ai-2025-oct-01-cognitive-business-intelligence-transformation"
                  className="inline-flex items-center gap-2 text-blue-300 hover:text-white font-semibold transition-colors"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Case Study Card */}
            <div className="bg-gradient-to-br from-green-600/40 to-emerald-600/40 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-green-300 font-semibold">SUCCESS STORY</div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-yellow-300" />
                    <span className="text-yellow-300 text-xs font-bold">340% ROI</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                $340M Enterprise Transformation
              </h3>
              
              <p className="text-white/80 text-sm mb-4 line-clamp-3">
                Fortune 100 technology company achieves unprecedented results through Cognitive BI deployment across 50,000+ employees globally.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-emerald-500/30 text-emerald-200 text-xs rounded-full">Fortune 100</span>
                <span className="px-2 py-1 bg-yellow-500/30 text-yellow-200 text-xs rounded-full">$340M Value</span>
                <span className="px-2 py-1 bg-blue-500/30 text-blue-200 text-xs rounded-full">50K Users</span>
              </div>
              
              <div className="pt-4 border-t border-white/10">
                <div className="text-white/70 text-sm mb-3">
                  <strong className="text-white">Results:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Time-to-insight: 3 weeks → 4 min</li>
                    <li>• 200+ systems integrated</li>
                    <li>• 99.98% platform uptime</li>
                  </ul>
                </div>
                
                <Link
                  to="/case-studies/ai-2025-oct-01-global-tech-cognitive-bi-transformation-340-million-success"
                  className="inline-flex items-center gap-2 text-green-300 hover:text-white font-semibold transition-colors"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Implementation Guide Card */}
            <div className="bg-gradient-to-br from-purple-600/40 to-pink-600/40 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Map className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-purple-300 font-semibold">COMPLETE GUIDE</div>
                  <div className="text-xs text-white/70">Step-by-Step</div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                Cognitive BI Implementation Roadmap
              </h3>
              
              <p className="text-white/80 text-sm mb-4 line-clamp-3">
                Comprehensive implementation guide with proven frameworks, best practices, and actionable strategies for enterprise AI analytics deployment.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-500/30 text-purple-200 text-xs rounded-full">12-16 Weeks</span>
                <span className="px-2 py-1 bg-pink-500/30 text-pink-200 text-xs rounded-full">Best Practices</span>
                <span className="px-2 py-1 bg-indigo-500/30 text-indigo-200 text-xs rounded-full">Proven</span>
              </div>
              
              <div className="pt-4 border-t border-white/10">
                <div className="text-white/70 text-sm mb-3">
                  <strong className="text-white">Includes:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Assessment frameworks</li>
                    <li>• Architecture design patterns</li>
                    <li>• Change management strategies</li>
                  </ul>
                </div>
                
                <Link
                  to="/guides/cognitive-business-intelligence-implementation-guide-2025"
                  className="inline-flex items-center gap-2 text-purple-300 hover:text-white font-semibold transition-colors"
                >
                  Access Guide
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Transform Your Business Intelligence?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Join 340+ enterprises that have achieved measurable ROI with Zion Tech Group's Cognitive BI solutions
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-bold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Schedule Free Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent gradient */}
      <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </div>
  );
};

export default October2025NewContentShowcaseBanner;
