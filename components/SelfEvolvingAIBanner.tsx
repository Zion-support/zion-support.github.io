import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

const SelfEvolvingAIBanner = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-600 text-white py-12 px-6 rounded-2xl shadow-2xl mb-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-3 animate-bounce">
            <Zap className="w-6 h-6" />
            <span className="font-bold text-lg">🚀 BREAKTHROUGH TECHNOLOGY - OCTOBER 2025 🚀</span>
            <Zap className="w-6 h-6" />
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-5xl font-black mb-4 tracking-tight">
            🧬 Self-Evolving AI Architectures 🧬
          </h2>
          <p className="text-2xl font-semibold mb-6 text-white/90">
            AI Systems That Redesign and Optimize Themselves
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl transform hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="w-8 h-8" />
                <span className="text-3xl font-bold">87%</span>
              </div>
              <p className="text-sm font-medium">Less Manual Maintenance</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl transform hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-8 h-8" />
                <span className="text-3xl font-bold">156%</span>
              </div>
              <p className="text-sm font-medium">Accuracy Improvement</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl transform hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-8 h-8" />
                <span className="text-3xl font-bold">$12.4M</span>
              </div>
              <p className="text-sm font-medium">Annual Cost Savings</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border-2 border-white/30 mb-8">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Brain className="w-8 h-8" />
            Revolutionary Capabilities
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="bg-green-400 text-black p-2 rounded-lg mt-1">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Neural Architecture Search</h4>
                <p className="text-white/80 text-sm">Real-time architecture optimization at runtime</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-400 text-black p-2 rounded-lg mt-1">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Meta-Learning Systems</h4>
                <p className="text-white/80 text-sm">Learning to learn faster with cross-domain knowledge</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-purple-400 text-black p-2 rounded-lg mt-1">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Evolutionary Algorithms</h4>
                <p className="text-white/80 text-sm">Population-based training for optimal solutions</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-yellow-400 text-black p-2 rounded-lg mt-1">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Continuous Improvement</h4>
                <p className="text-white/80 text-sm">Perpetual learning without retraining downtime</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Blog Article */}
          <Link 
            href="/blog/ai-2025-oct-01-self-evolving-ai-architectures-breakthrough"
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 border-2 border-white/30"
          >
            <div className="flex items-center gap-3 mb-3">
              <Brain className="w-6 h-6" />
              <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-xs font-bold">TECHNICAL DEEP DIVE</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Self-Evolving AI Architectures Explained</h3>
            <p className="text-white/80 text-sm mb-4">
              Complete guide to NAS, meta-learning, evolutionary algorithms, and implementation frameworks
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span>Read Full Article</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          {/* CTA */}
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-black p-6 rounded-xl">
            <h3 className="text-2xl font-black mb-3">Ready to Implement?</h3>
            <p className="mb-4 font-medium">
              Get expert consultation on deploying self-evolving AI architectures in your enterprise
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>90-day proof of concept</span>
              </li>
              <li className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                <span>Custom architecture assessment</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>End-to-end implementation support</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-900 transition-all"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="text-center">
          <p className="text-white/80 text-sm mb-4">
            Join leading enterprises leveraging self-evolving AI for competitive advantage
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
            <span className="bg-white/20 px-4 py-2 rounded-full">Financial Services</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Manufacturing</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Healthcare</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Retail</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Technology</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfEvolvingAIBanner;
