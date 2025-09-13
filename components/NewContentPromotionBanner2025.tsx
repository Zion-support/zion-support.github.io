import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, BookOpen, Play, Zap, Brain, TrendingUp, Users, Clock } from 'lucide-react';

export default function NewContentPromotionBanner2025() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 via-purple-900/50 to-blue-900/50"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full font-semibold text-sm mb-6">
            <Star className="h-4 w-4" />
            NEW CONTENT AVAILABLE
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Our Latest
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI Content & Resources
            </span>
          </h2>
          
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Explore cutting-edge AI technologies, comprehensive guides, interactive demos, 
            and expert insights to accelerate your AI transformation journey.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Interactive AI Demo Center */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-indigo-400/50 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                <Play className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Interactive AI Demo Center</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Experience cutting-edge AI technologies through hands-on demonstrations of quantum computing, 
              neural networks, and autonomous systems.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-gray-300 text-xs">
                <span className="flex items-center gap-1">
                  <Zap className="h-3 w-3" />
                  50+ Demos
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  Live Experience
                </span>
              </div>
              <Link 
                href="/ai-tools/interactive-ai-demo-center"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 text-sm inline-flex items-center gap-1"
              >
                Explore <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Ultimate AI Resource Library */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Ultimate AI Resource Library</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Access comprehensive whitepapers, case studies, implementation guides, 
              video tutorials, and cutting-edge research from AI experts.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-gray-300 text-xs">
                <span className="flex items-center gap-1">
                  <BookOpen className="h-3 w-3" />
                  715+ Resources
                </span>
                <span className="flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  500K+ Downloads
                </span>
              </div>
              <Link 
                href="/resources/ultimate-ai-resource-library"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-sm inline-flex items-center gap-1"
              >
                Access <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* AI Implementation Mastery Guide */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">AI Implementation Mastery</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Complete guide to enterprise AI transformation with proven strategies, 
              implementation phases, and best practices for successful adoption.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-gray-300 text-xs">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Complete Guide
                </span>
                <span className="flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  Expert Methods
                </span>
              </div>
              <Link 
                href="/guides/ai-implementation-mastery-2025"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 text-sm inline-flex items-center gap-1"
              >
                Learn <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Content Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link 
            href="/blog/ai-2025-next-generation-breakthrough"
            className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-indigo-400/30 transition-all duration-300 group"
          >
            <h4 className="text-white font-semibold mb-2 group-hover:text-indigo-300 transition-colors">
              AI 2025 Breakthroughs
            </h4>
            <p className="text-gray-300 text-sm">
              Revolutionary AI technologies reshaping the future
            </p>
          </Link>

          <Link 
            href="/case-studies/ai-2025-global-enterprise-transformation-ultimate-success"
            className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-purple-400/30 transition-all duration-300 group"
          >
            <h4 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors">
              Enterprise Success Story
            </h4>
            <p className="text-gray-300 text-sm">
              $2.5B revenue increase through AI transformation
            </p>
          </Link>

          <Link 
            href="/ai-tools"
            className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-blue-400/30 transition-all duration-300 group"
          >
            <h4 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors">
              AI Tools & Solutions
            </h4>
            <p className="text-gray-300 text-sm">
              Comprehensive suite of AI tools and technologies
            </p>
          </Link>

          <Link 
            href="/resources"
            className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-green-400/30 transition-all duration-300 group"
          >
            <h4 className="text-white font-semibold mb-2 group-hover:text-green-300 transition-colors">
              All Resources
            </h4>
            <p className="text-gray-300 text-sm">
              Complete library of AI resources and materials
            </p>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-md rounded-2xl p-8 border border-indigo-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Accelerate Your AI Journey?
            </h3>
            <p className="text-indigo-200 mb-6">
              Join thousands of professionals who are already transforming their businesses with our 
              comprehensive AI resources, tools, and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                Get Started Today <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                href="/resources"
                className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-2"
              >
                Explore Resources <BookOpen className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* New Content Revolution 2025 Section */}
        <div className="bg-gradient-to-r from-cyan-900/80 to-blue-900/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              🚀 New Content Revolution 2025
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our latest breakthrough content showcasing the future of AI, quantum computing, and neural interfaces.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              href="/ai-2025-enterprise-automation-revolution" 
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                AI 2025 Enterprise Automation Revolution
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Transform your enterprise with revolutionary AI automation solutions delivering 99.9% accuracy and 2,500% ROI.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-emerald-600 px-3 py-1 rounded-full text-xs text-white font-semibold">
                  99.9% Accuracy
                </span>
                <span className="bg-gradient-to-r from-blue-500 to-cyan-600 px-3 py-1 rounded-full text-xs text-white font-semibold">
                  10,000x Faster
                </span>
              </div>
              <div className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                Explore Now →
              </div>
            </Link>
            
            <Link 
              href="/quantum-computing-breakthrough-2025" 
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚛️</div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                Quantum Computing Breakthrough 2025
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Experience quantum supremacy with error-corrected quantum computers achieving impossible computational feats.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1 rounded-full text-xs text-white font-semibold">
                  Quantum Supremacy
                </span>
                <span className="bg-gradient-to-r from-purple-500 to-pink-600 px-3 py-1 rounded-full text-xs text-white font-semibold">
                  Error-Corrected
                </span>
              </div>
              <div className="text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                Explore Now →
              </div>
            </Link>
            
            <Link 
              href="/ai-2026-neural-interface-revolution" 
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-indigo-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🧠</div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                AI 2026 Neural Interface Revolution
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Breakthrough neural interfaces enabling direct human-AI consciousness communication and collaboration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-600 px-3 py-1 rounded-full text-xs text-white font-semibold">
                  Neural Networks
                </span>
                <span className="bg-gradient-to-r from-indigo-500 to-purple-600 px-3 py-1 rounded-full text-xs text-white font-semibold">
                  Consciousness Integration
                </span>
              </div>
              <div className="text-indigo-400 font-semibold group-hover:text-indigo-300 transition-colors">
                Explore Now →
              </div>
            </Link>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/content-showcase-2025" 
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View All New Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}