import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025GreenAIBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-950 via-emerald-900 to-green-950 relative overflow-hidden border-t-4 border-b-4 border-green-500/40">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-8 animate-pulse">
            <span className="text-green-400 font-bold text-xl tracking-wider uppercase">
              🌱 NEW: OCTOBER 1, 2025 - GREEN AI REVOLUTION
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent leading-tight">
            Carbon-Neutral AI: The $470B Sustainability Revolution
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-5xl mx-auto">
            Achieve 95% Energy Reduction, Carbon-Neutral Operations, and Massive ROI Through Green AI Transformation
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">95%</div>
              <div className="text-xs text-green-300">Energy Reduction</div>
            </div>
            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/30">
              <div className="text-2xl font-extrabold text-emerald-400 mb-1">$470B</div>
              <div className="text-xs text-emerald-300">Value Created</div>
            </div>
            <div className="bg-gradient-to-r from-teal-500/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-4 border border-teal-500/30">
              <div className="text-2xl font-extrabold text-teal-400 mb-1">100%</div>
              <div className="text-xs text-teal-300">Carbon Neutral</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">42%</div>
              <div className="text-xs text-cyan-300">Performance Boost</div>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/blog/ai-2025-oct-01-green-ai-carbon-neutral-computing-revolution" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              Read Green AI Guide →
            </Link>
            <Link to="/case-studies/ai-2025-oct-01-fortune-100-green-ai-transformation-470-billion-success" 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
            >
              View $470B Success Story →
            </Link>
            <Link to="/services/green-ai-transformation-2025" 
              className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Green AI Services
            </Link>
          </div>
          
          {/* Featured Content Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-green-500/20 hover:border-green-500/40 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white">Green AI Revolution</h3>
                  <p className="text-sm text-gray-400">Complete sustainability guide</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-left">
                Transform AI operations to carbon-neutral while achieving 95% energy reduction, 42% performance improvement, and massive cost savings.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">14 min read</div>
                <Link to="/blog/ai-2025-oct-01-green-ai-carbon-neutral-computing-revolution"
                  className="text-green-400 font-semibold hover:text-green-300 transition-colors"
                >
                  Read Guide →
                </Link>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white">$470B Success Story</h3>
                  <p className="text-sm text-gray-400">Fortune 100 transformation</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-left">
                How a Fortune 100 tech giant achieved carbon neutrality, 95% energy reduction, and $470B in value through Green AI transformation.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">18 min read</div>
                <Link to="/case-studies/ai-2025-oct-01-fortune-100-green-ai-transformation-470-billion-success"
                  className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
                >
                  Read Case Study →
                </Link>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-teal-500/20 hover:border-teal-500/40 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white">Green AI Services</h3>
                  <p className="text-sm text-gray-400">End-to-end transformation</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-left">
                Comprehensive Green AI services: carbon assessment, model optimization, renewable infrastructure, and carbon-neutral certification.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">Free audit available</div>
                <Link to="/services/green-ai-transformation-2025"
                  className="text-teal-400 font-semibold hover:text-teal-300 transition-colors"
                >
                  Explore Services →
                </Link>
              </div>
            </div>
          </div>

          {/* Environmental Impact Statement */}
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 mb-8">
            <p className="text-green-300 text-lg font-semibold mb-2">
              🌍 JOIN THE CARBON-NEUTRAL AI MOVEMENT
            </p>
            <p className="text-gray-300">
              847+ enterprises have already achieved carbon neutrality with 95% energy reduction and improved performance. 
              Start your Green AI transformation today and lead the sustainability revolution.
            </p>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-green-500/20 text-green-200 border border-green-400/30 px-4 py-2 rounded-lg font-semibold hover:bg-green-500/30 transition-colors">
              Schedule Free Carbon Audit
              <span>→</span>
            </Link>
            <Link to="/blog" className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 px-4 py-2 rounded-lg font-semibold hover:bg-emerald-500/30 transition-colors">
              More Green AI Content
              <span>→</span>
            </Link>
            <Link to="/case-studies" className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-200 border border-teal-400/30 px-4 py-2 rounded-lg font-semibold hover:bg-teal-500/30 transition-colors">
              All Success Stories
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
