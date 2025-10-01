import React from 'react';
import { ArrowRight, BookOpen, TrendingUp, Zap, Target, Brain } from 'lucide-react';

const March2026NewContentShowcaseBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 border border-emerald-500/30 rounded-2xl p-8 mb-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-cyan-600/20 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            🌟🌟🌟 BREAKING: MARCH 2026 NEW CONTENT REVOLUTION - ABSOLUTE #1 TOP PRIORITY! 🌟🌟🌟
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent mb-4">
            March 2026 Content Revolution
          </h1>
          
          <p className="text-xl md:text-2xl text-emerald-200 font-semibold mb-6">
            💎💎💎 JUST PUBLISHED: Autonomous AI Ecosystem + Quantum AI Optimization + $21.1B Combined Value - REVOLUTIONARY BREAKTHROUGH! 💎💎💎
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Autonomous AI Ecosystem */}
          <div className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 backdrop-blur-sm border border-purple-400/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-white">Autonomous AI Ecosystem</h3>
            </div>
            <p className="text-purple-200 mb-4">Revolutionary self-managing AI systems delivering 99.99% operational autonomy</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-300">$4.7B</div>
                <div className="text-purple-200 text-xs">Value Creation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300">99.99%</div>
                <div className="text-purple-200 text-xs">Autonomy</div>
              </div>
            </div>
            <a
              href="/content/blog/ai-2026-february-autonomous-ai-ecosystem-revolution"
              className="group inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
            >
              <span>Read Full Guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Quantum AI Optimization */}
          <div className="bg-gradient-to-br from-cyan-800/30 to-purple-800/30 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-cyan-300" />
              </div>
              <h3 className="text-xl font-bold text-white">Quantum AI Optimization</h3>
            </div>
            <p className="text-cyan-200 mb-4">10,000x performance improvement with quantum processing power</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-300">$8.4B</div>
                <div className="text-cyan-200 text-xs">Value Creation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-300">10,000x</div>
                <div className="text-cyan-200 text-xs">Performance</div>
              </div>
            </div>
            <a
              href="/content/blog/ai-2026-march-quantum-ai-optimization-breakthrough"
              className="group inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
            >
              <span>Read Full Guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Combined Success Metrics */}
        <div className="bg-gradient-to-r from-emerald-800/30 to-teal-800/30 backdrop-blur-sm border border-emerald-400/30 rounded-xl p-6 mb-8">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">🚀 Combined March 2026 Content Impact</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-300">$21.1B</div>
              <div className="text-emerald-200 text-sm">Total Value Creation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-300">99.99%</div>
              <div className="text-emerald-200 text-sm">System Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-300">10,000x</div>
              <div className="text-emerald-200 text-sm">Performance Gains</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-300">4,094%</div>
              <div className="text-emerald-200 text-sm">Combined ROI</div>
            </div>
          </div>
        </div>

        {/* Case Study Highlight */}
        <div className="bg-gradient-to-r from-orange-800/30 to-red-800/30 backdrop-blur-sm border border-orange-400/30 rounded-xl p-6 mb-8">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">📈 Featured Success Story</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-bold text-orange-300 mb-2">Fortune 500 Autonomous AI Transformation</h4>
              <p className="text-orange-200 mb-4">Complete transformation case study showing $12.7B value creation through autonomous AI implementation</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-300">$12.7B</div>
                  <div className="text-orange-200 text-xs">Value Creation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-300">2,847%</div>
                  <div className="text-orange-200 text-xs">ROI</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="/case-studies/fortune-500-autonomous-ai-transformation-success"
                className="group inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                <span>View Complete Case Study</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="/content"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <span>Explore All March 2026 Content</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="/services/ai-transformation"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <span>Start Your AI Transformation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <p className="text-emerald-200 mt-4 text-sm">
            🌟 Join Fortune 500 companies achieving $21.1B+ value creation with revolutionary AI technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default March2026NewContentShowcaseBanner;