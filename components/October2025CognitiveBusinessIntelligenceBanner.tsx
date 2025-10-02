import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, TrendingUp, Zap, ArrowRight, Sparkles, BarChart3 } from 'lucide-react';

export const October2025CognitiveBusinessIntelligenceBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl shadow-2xl my-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative px-8 py-12 md:px-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-semibold text-white">NEW: October 2025</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Cognitive Business Intelligence
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
                  Transforms Enterprises
                </span>
              </h2>
              
              <p className="text-xl text-white/90 mb-6">
                Discover how AI-powered analytics delivers <span className="font-bold text-yellow-300">$42.7M average annual value</span> with 340% ROI in just 12 months.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-300" />
                  </div>
                  <div className="text-3xl font-bold text-white">340%</div>
                  <div className="text-sm text-white/80">ROI Year 1</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-yellow-300" />
                  </div>
                  <div className="text-3xl font-bold text-white">73%</div>
                  <div className="text-sm text-white/80">Faster Insights</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-5 h-5 text-blue-300" />
                  </div>
                  <div className="text-3xl font-bold text-white">89%</div>
                  <div className="text-sm text-white/80">Adoption Rate</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/blog/ai-2025-oct-01-cognitive-business-intelligence-transformation"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-900 rounded-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
                >
                  <Brain className="w-5 h-5" />
                  Read Full Article
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link
                  to="/case-studies/ai-2025-oct-01-global-tech-cognitive-bi-transformation-340-million-success"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600/50 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-purple-600 transition-all border border-white/30"
                >
                  $340M Success Story
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link
                  to="/guides/cognitive-business-intelligence-implementation-guide-2025"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600/50 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-indigo-600 transition-all border border-white/30"
                >
                  Implementation Guide
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Brain className="w-6 h-6 text-yellow-300" />
                  Transformation Highlights
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Autonomous Analytics</div>
                      <div className="text-white/70 text-sm">AI anticipates business needs before they arise</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Natural Language Interface</div>
                      <div className="text-white/70 text-sm">Ask questions in plain English, get instant insights</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Predictive Intelligence</div>
                      <div className="text-white/70 text-sm">97% accuracy across business functions</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Enterprise Scale</div>
                      <div className="text-white/70 text-sm">50,000+ users, 200+ data sources integrated</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Rapid ROI</div>
                      <div className="text-white/70 text-sm">Payback in 1.5 months, 340% ROI in year 1</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-yellow-500/20 to-pink-500/20 rounded-lg border border-yellow-300/30">
                  <div className="text-yellow-300 font-semibold mb-1">Fortune 100 Success</div>
                  <div className="text-white/90 text-sm italic">
                    "Time-to-insight reduced from 3 weeks to 4 minutes. This wasn't just a technology implementation—it was a business transformation."
                  </div>
                  <div className="text-white/70 text-xs mt-2">— Chief Data Officer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
    </div>
  );
};

export default October2025CognitiveBusinessIntelligenceBanner;
