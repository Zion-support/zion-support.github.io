// import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Brain, Zap } from 'lucide-react';

export default function NewContent2026BreakthroughBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">NEW 2026 BREAKTHROUGH CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionary AI Breakthroughs
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Now Available
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover the latest AI breakthroughs that are transforming industries. 
            From autonomous enterprise systems to cognitive computing revolutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Autonomous Systems */}
          <Link to="/blog/ai-autonomous-enterprise-systems-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">NEW</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Autonomous Enterprise Systems 2026
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                Self-improving intelligence that evolves without human intervention. 
                Achieve 95% efficiency and $15M+ savings.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">95%</div>
                  <div className="text-xs text-blue-200">Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">$15M+</div>
                  <div className="text-xs text-blue-200">Savings</div>
                </div>
              </div>
              <div className="flex items-center text-yellow-300 font-semibold group-hover:text-white transition-colors">
                Read Article <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>

          {/* Cognitive Computing */}
          <Link to="/blog/ai-cognitive-computing-breakthrough-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">BREAKTHROUGH</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Cognitive Computing Breakthrough 2026
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                Human-level reasoning and decision-making capabilities. 
                Achieve 98% accuracy and $25M+ value creation.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">98%</div>
                  <div className="text-xs text-blue-200">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">$25M+</div>
                  <div className="text-xs text-blue-200">Value</div>
                </div>
              </div>
              <div className="flex items-center text-yellow-300 font-semibold group-hover:text-white transition-colors">
                Read Article <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>

          {/* Success Case Study */}
          <Link to="/case-studies/ai-cognitive-computing-success-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">FEATURED</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Cognitive Computing Success Case Study
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                Fortune 500 company achieves $25M value creation with 
                AI cognitive computing systems.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">$25M</div>
                  <div className="text-xs text-blue-200">Value</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">98%</div>
                  <div className="text-xs text-blue-200">Accuracy</div>
                </div>
              </div>
              <div className="flex items-center text-yellow-300 font-semibold group-hover:text-white transition-colors">
                View Case Study <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link to="/blog"
            className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Explore All 2026 Breakthroughs
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}