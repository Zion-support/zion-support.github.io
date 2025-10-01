import React from "react";
import { Link } from "react-router-dom";
import { Brain, Database, Shield, ArrowRight, Sparkles } from "lucide-react";

export default function October2025LatestTechBreakthroughsBanner() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-full mb-6 animate-bounce">
            <Sparkles className="w-5 h-5" />
            <span className="font-bold text-lg">🚀 JUST PUBLISHED - OCTOBER 2025</span>
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Latest AI Technology Breakthroughs
          </h2>
          <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Three revolutionary innovations transforming enterprise technology: Multimodal RAG, Autonomous Databases, and Real-Time Cyber Defense
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Multimodal RAG */}
          <Link
            to="/blog/ai-2025-october-multimodal-rag-enterprise-breakthrough"
            className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
          >
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors">
              Multimodal RAG Revolution
            </h3>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Next-generation retrieval systems combining text, images, and video for unprecedented enterprise intelligence with 96% accuracy.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs bg-blue-500/30 px-3 py-1 rounded-full">96% Accuracy</span>
              <span className="text-xs bg-purple-500/30 px-3 py-1 rounded-full">$42M ROI</span>
              <span className="text-xs bg-pink-500/30 px-3 py-1 rounded-full">15,000x Faster</span>
            </div>
            <div className="flex items-center text-blue-400 group-hover:text-blue-300 font-semibold">
              <span>Discover More</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

          {/* Card 2: Autonomous Database */}
          <Link
            to="/blog/ai-2025-october-autonomous-database-optimization"
            className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
              Autonomous Database Optimization
            </h3>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Self-healing, self-tuning databases that optimize performance, reduce costs by 94%, and eliminate manual tuning completely.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs bg-purple-500/30 px-3 py-1 rounded-full">94% Cost Reduction</span>
              <span className="text-xs bg-pink-500/30 px-3 py-1 rounded-full">$38M ROI</span>
              <span className="text-xs bg-blue-500/30 px-3 py-1 rounded-full">99.999% Uptime</span>
            </div>
            <div className="flex items-center text-purple-400 group-hover:text-purple-300 font-semibold">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

          {/* Card 3: Real-Time Cyber Defense */}
          <Link
            to="/blog/ai-2025-october-real-time-cyber-defense"
            className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-red-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50"
          >
            <div className="bg-gradient-to-br from-red-500 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-red-300 transition-colors">
              Real-Time AI Cyber Defense
            </h3>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Autonomous security systems detecting and neutralizing threats in sub-millisecond time with 99.97% accuracy and zero-trust architecture.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs bg-red-500/30 px-3 py-1 rounded-full">99.97% Detection</span>
              <span className="text-xs bg-orange-500/30 px-3 py-1 rounded-full">&lt;1ms Response</span>
              <span className="text-xs bg-yellow-500/30 px-3 py-1 rounded-full">$127B Protected</span>
            </div>
            <div className="flex items-center text-red-400 group-hover:text-red-300 font-semibold">
              <span>Explore Security</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              to="/blog"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              View All Articles
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Schedule Consultation
            </Link>
          </div>
          <p className="mt-6 text-blue-300 text-sm">
            ✨ Join 500+ Fortune 500 companies transforming with our AI solutions
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
    </section>
  );
}
