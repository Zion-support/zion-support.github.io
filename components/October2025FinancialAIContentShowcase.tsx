// import React from 'react';
import { Sparkles, BookOpen, Trophy, ArrowRight } from 'lucide-react';

export default function October2025FinancialAIContentShowcase() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-950 py-16 px-6">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-teal-400 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/20 border border-emerald-400 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-emerald-300" />
            <span className="text-emerald-100 font-bold text-sm uppercase tracking-wider">
              New Content Published - October 1, 2025
            </span>
          </div>
          
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-100 mb-4">
            Autonomous Financial Intelligence
          </h2>
          <p className="text-2xl text-emerald-100 font-semibold">
            Comprehensive Resources for the $15.8B Revolution
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Complete Guide Card */}
          <div className="group bg-gradient-to-br from-emerald-900/60 to-teal-900/60 backdrop-blur-md border-2 border-emerald-400/50 rounded-3xl p-8 hover:border-emerald-300 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center border-2 border-emerald-400">
                <BookOpen className="w-8 h-8 text-emerald-300" />
              </div>
              <div>
                <div className="text-sm text-emerald-300 font-semibold uppercase tracking-wide">New Guide</div>
                <div className="text-2xl font-black text-emerald-100">Complete Implementation Guide</div>
              </div>
            </div>

            <p className="text-emerald-100 text-lg mb-6 leading-relaxed">
              The definitive 18-minute guide to implementing autonomous financial intelligence systems. 
              Learn the architecture, technology stack, and methodologies behind the $15.8B transformation.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-emerald-950/40 rounded-xl p-4 border border-emerald-500/30">
                <div className="text-3xl font-black text-emerald-200">99.8%</div>
                <div className="text-sm text-teal-200">AI Accuracy</div>
              </div>
              <div className="bg-emerald-950/40 rounded-xl p-4 border border-emerald-500/30">
                <div className="text-3xl font-black text-teal-200"><50ms</div>
                <div className="text-sm text-emerald-200">Latency</div>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2 text-emerald-100">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Real-time risk management & fraud detection</span>
              </div>
              <div className="flex items-center gap-2 text-teal-100">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span>Autonomous trading with <10μs execution</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-100">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Global compliance across 127 jurisdictions</span>
              </div>
              <div className="flex items-center gap-2 text-teal-100">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span>Complete technology stack & architecture</span>
              </div>
            </div>

            <a
              href="/content/blog/ai-2025-oct-autonomous-financial-intelligence-revolution"
              className="group/btn flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-xl hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 shadow-lg hover:shadow-emerald-500/50"
            >
              Read Complete Guide
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
            </a>
          </div>

          {/* Success Story Card */}
          <div className="group bg-gradient-to-br from-teal-900/60 to-cyan-900/60 backdrop-blur-md border-2 border-teal-400/50 rounded-3xl p-8 hover:border-teal-300 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-teal-500/20 flex items-center justify-center border-2 border-teal-400">
                <Trophy className="w-8 h-8 text-teal-300" />
              </div>
              <div>
                <div className="text-sm text-teal-300 font-semibold uppercase tracking-wide">Case Study</div>
                <div className="text-2xl font-black text-teal-100">Fortune 100 Success Story</div>
              </div>
            </div>

            <p className="text-teal-100 text-lg mb-6 leading-relaxed">
              Exclusive inside look at how a Fortune 100 financial institution achieved $15.8B in value 
              creation, 15,847% ROI, and transformed operations across 127 countries in just 10 months.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-teal-950/40 rounded-xl p-4 border border-teal-500/30">
                <div className="text-3xl font-black text-teal-200">$15.8B</div>
                <div className="text-sm text-cyan-200">Value Created</div>
              </div>
              <div className="bg-teal-950/40 rounded-xl p-4 border border-teal-500/30">
                <div className="text-3xl font-black text-cyan-200">15,847%</div>
                <div className="text-sm text-teal-200">ROI</div>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2 text-teal-100">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span>Detailed implementation journey & timeline</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-100">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Comprehensive business impact analysis</span>
              </div>
              <div className="flex items-center gap-2 text-teal-100">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span>Technology stack & architecture details</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-100">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Lessons learned & best practices</span>
              </div>
            </div>

            <a
              href="/content/case-studies/ai-2025-oct-global-bank-autonomous-financial-intelligence-15-8-billion-success"
              className="group/btn flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-lg rounded-xl hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:shadow-teal-500/50"
            >
              View Success Story
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 bg-gradient-to-r from-emerald-900/40 to-cyan-900/40 backdrop-blur-sm border border-emerald-400/30 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <div className="text-3xl font-black text-emerald-200">127</div>
              <div className="text-sm text-teal-200">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-black text-teal-200">2,847</div>
              <div className="text-sm text-cyan-200">AI Models</div>
            </div>
            <div>
              <div className="text-3xl font-black text-cyan-200">87%</div>
              <div className="text-sm text-emerald-200">Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-black text-emerald-200">Zero</div>
              <div className="text-sm text-teal-200">Violations</div>
            </div>
            <div>
              <div className="text-3xl font-black text-teal-200">10 Months</div>
              <div className="text-sm text-cyan-200">Implementation</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-emerald-200 text-lg font-semibold mb-4">
            Ready to transform your financial institution?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg rounded-xl hover:from-amber-400 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/50"
          >
            <Sparkles className="w-5 h-5" />
            Schedule Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
