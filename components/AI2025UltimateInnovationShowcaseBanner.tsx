import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Brain, Zap, Target, Globe, Shield, Rocket } from 'lucide-react';

export default function AI2025UltimateInnovationShowcaseBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-400/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-pink-400/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-yellow-400/10 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main heading with icon */}
          <div className="flex items-center justify-center mb-6">
            <Rocket className="w-10 h-10 text-cyan-400 mr-4 animate-bounce" />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI 2025 ULTIMATE INNOVATION SHOWCASE
            </h2>
            <Rocket className="w-10 h-10 text-cyan-400 ml-4 animate-bounce" />
          </div>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-5xl mx-auto">
            Experience the most revolutionary AI breakthroughs, cutting-edge technologies, and transformative solutions that will reshape the future of business and humanity.
          </p>

          {/* Innovation categories grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-800/40 to-blue-800/40 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:transform hover:scale-105">
              <Brain className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-cyan-300 mb-3">Neural Interface Revolution</h3>
              <p className="text-sm text-gray-400 mb-4">Direct brain-computer interfaces enabling seamless human-AI collaboration</p>
              <div className="flex justify-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-800/40 to-indigo-800/40 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:transform hover:scale-105">
              <Zap className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-purple-300 mb-3">Quantum AI Fusion</h3>
              <p className="text-sm text-gray-400 mb-4">Revolutionary quantum computing integration with AI systems</p>
              <div className="flex justify-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-800/40 to-teal-800/40 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 hover:border-green-400/60 transition-all duration-300 hover:transform hover:scale-105">
              <Target className="w-10 h-10 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-300 mb-3">Autonomous Business Systems</h3>
              <p className="text-sm text-gray-400 mb-4">Self-managing business operations with AI agents</p>
              <div className="flex justify-center">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-800/40 to-pink-800/40 backdrop-blur-sm rounded-xl p-6 border border-red-500/30 hover:border-red-400/60 transition-all duration-300 hover:transform hover:scale-105">
              <Sparkles className="w-10 h-10 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-red-300 mb-3">Synthetic Intelligence</h3>
              <p className="text-sm text-gray-400 mb-4">Next-generation AI with consciousness and creativity</p>
              <div className="flex justify-center">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-800/40 to-orange-800/40 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30 hover:border-yellow-400/60 transition-all duration-300 hover:transform hover:scale-105">
              <Globe className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-yellow-300 mb-3">Global Transformation</h3>
              <p className="text-sm text-gray-400 mb-4">AI-powered solutions transforming industries worldwide</p>
              <div className="flex justify-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-800/40 to-purple-800/40 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-300 hover:transform hover:scale-105">
              <Shield className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-indigo-300 mb-3">Enterprise Security</h3>
              <p className="text-sm text-gray-400 mb-4">Advanced AI-powered security systems</p>
              <div className="flex justify-center">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Success metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-sm text-gray-300">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">15,000%</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">AI Support</div>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-innovation-showcase" 
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-10 py-5 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Explore Innovation Showcase
              <ArrowRight className="inline-block ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/contact" 
              className="group border-2 border-pink-400 hover:bg-pink-400 hover:text-black px-10 py-5 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Transformation
              <Rocket className="inline-block ml-3 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>

          {/* Additional links */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/case-studies" className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center">
              <Target className="w-4 h-4 mr-2" />
              Success Stories
            </Link>
            <Link href="/blog" className="text-purple-400 hover:text-purple-300 transition-colors flex items-center">
              <Brain className="w-4 h-4 mr-2" />
              Latest Insights
            </Link>
            <Link href="/guides" className="text-pink-400 hover:text-pink-300 transition-colors flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Implementation Guides
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent"></div>
    </div>
  );
}