import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const October1st2025EnterpriseTransformBanner = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 border-b border-indigo-500/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-indigo-400/30 mb-6 animate-pulse">
            <span className="text-2xl">🎯</span>
            <span className="text-indigo-300 font-bold text-sm">OCTOBER 1, 2025 — LATEST ENTERPRISE AI BREAKTHROUGH CONTENT</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            3 Game-Changing AI Systems Transforming Fortune 500 Operations
          </h1>

          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto">
            <strong className="text-indigo-300">Just Published:</strong> Comprehensive implementation guides for AI-powered 
            supply chain optimization, autonomous code review, and intelligent incident response. Real-world success stories 
            with <span className="text-green-400 font-bold">$2.4B+ savings</span>, <span className="text-purple-400 font-bold">97% accuracy</span>, 
            and <span className="text-pink-400 font-bold">96% automation</span> rates.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-indigo-400/30 hover:border-indigo-400/60 transition-all hover:transform hover:scale-105">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-xl font-bold text-indigo-300 mb-3">AI Supply Chain Intelligence</h3>
              <div className="space-y-2 text-sm text-white/80 mb-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>94% demand forecast accuracy</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>78% inventory cost reduction</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>$2.4B annual value creation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>6-week disruption warnings</span>
                </div>
              </div>
              <Link
                to="/blog/ai-2025-oct-supply-chain-intelligence-revolution"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold group"
              >
                Read Complete Guide
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30 hover:border-purple-400/60 transition-all hover:transform hover:scale-105">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-purple-300 mb-3">Autonomous Code Review</h3>
              <div className="space-y-2 text-sm text-white/80 mb-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>97% bug detection pre-production</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>85% faster review cycles (38 min avg)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>10x code quality improvement</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>$12.4M annual savings</span>
                </div>
              </div>
              <Link
                to="/blog/ai-2025-oct-autonomous-code-review-systems"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group"
              >
                Explore Implementation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-pink-400/30 hover:border-pink-400/60 transition-all hover:transform hover:scale-105">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="text-xl font-bold text-pink-300 mb-3">Intelligent Incident Response</h3>
              <div className="space-y-2 text-sm text-white/80 mb-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>4.2 minute MTTR (90% improvement)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>96% autonomous resolution rate</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>$87M downtime prevented/year</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>99.997% uptime achieved</span>
                </div>
              </div>
              <Link
                to="/blog/ai-2025-oct-intelligent-incident-response-revolution"
                className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-semibold group"
              >
                Discover Framework
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/blog"
              className="px-10 py-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-lg font-bold rounded-xl hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-2xl"
            >
              Explore All Latest Content →
            </Link>
            <Link
              to="/contact"
              className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white text-lg font-bold rounded-xl hover:bg-white/20 transition-all border-2 border-white/30"
            >
              Schedule Enterprise Consultation
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-white/60">
              <span className="text-green-400 font-bold">💰 Combined Value:</span> $2.51B+ in demonstrated savings and prevented losses | 
              <span className="text-purple-400 font-bold ml-2">📈 Real Results:</span> Fortune 500 implementations with proven ROI | 
              <span className="text-pink-400 font-bold ml-2">⚡ Implementation Ready:</span> Complete frameworks with step-by-step guides
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October1st2025EnterpriseTransformBanner;
