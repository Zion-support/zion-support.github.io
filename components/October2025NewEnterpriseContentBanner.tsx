import { ArrowRight, TrendingUp, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const October2025NewEnterpriseContentBanner = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 border-b border-white/20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/30 animate-pulse">
                🚀 BREAKING: OCTOBER 1, 2025 — 3 REVOLUTIONARY ENTERPRISE AI GUIDES JUST PUBLISHED!
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-3 leading-tight">
              Transform Operations with AI: Supply Chain, Code Quality & Incident Response Revolution
            </h2>
            <p className="text-lg text-white/90 mb-4 leading-relaxed">
              🎯 <strong>NEWEST CONTENT:</strong> Master AI-driven supply chain optimization (94% forecast accuracy, $2.4B savings), 
              autonomous code review systems (97% bug detection, 85% faster reviews), and intelligent incident response 
              (4.2 min MTTR, 96% auto-resolution). Complete implementation frameworks included!
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-indigo-300" />
                  <h3 className="font-bold text-white text-sm">AI Supply Chain Intelligence</h3>
                </div>
                <p className="text-white/80 text-xs mb-2">
                  94% forecast accuracy • 78% inventory reduction • $2.4B annual savings
                </p>
                <Link
                  to="/blog/ai-2025-oct-supply-chain-intelligence-revolution"
                  className="text-indigo-200 hover:text-white text-xs font-semibold flex items-center gap-1 group"
                >
                  Read Full Guide
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-purple-300" />
                  <h3 className="font-bold text-white text-sm">Autonomous Code Review</h3>
                </div>
                <p className="text-white/80 text-xs mb-2">
                  97% bug detection • 85% faster reviews • 10x quality improvement
                </p>
                <Link
                  to="/blog/ai-2025-oct-autonomous-code-review-systems"
                  className="text-purple-200 hover:text-white text-xs font-semibold flex items-center gap-1 group"
                >
                  Discover How
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-pink-300" />
                  <h3 className="font-bold text-white text-sm">Intelligent Incident Response</h3>
                </div>
                <p className="text-white/80 text-xs mb-2">
                  4.2 min MTTR • 96% auto-resolution • $87M downtime prevented
                </p>
                <Link
                  to="/blog/ai-2025-oct-intelligent-incident-response-revolution"
                  className="text-pink-200 hover:text-white text-xs font-semibold flex items-center gap-1 group"
                >
                  Explore System
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              to="/blog"
              className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-2xl text-center whitespace-nowrap"
            >
              View All Latest Guides →
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all border-2 border-white/30 text-center whitespace-nowrap"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025NewEnterpriseContentBanner;
