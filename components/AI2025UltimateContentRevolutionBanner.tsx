import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Brain, Zap, Target } from 'lucide-react';

export default function AI2025UltimateContentRevolutionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border border-purple-500/30 rounded-2xl p-8 mb-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 mb-6 lg:mb-0">
            <div className="flex items-center mb-4">
              <Sparkles className="h-8 w-8 text-yellow-400 mr-3 animate-pulse" />
              <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
                🚀 NEW CONTENT REVOLUTION
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              AI 2025 Ultimate Content Revolution
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 max-w-2xl">
              Discover the most comprehensive collection of AI insights, breakthrough technologies, 
              and revolutionary content that will transform your understanding of artificial intelligence.
            </p>

            {/* Feature Icons */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-blue-400">
                <Brain className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Revolutionary Breakthroughs</span>
              </div>
              <div className="flex items-center text-purple-400">
                <Zap className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Quantum Computing</span>
              </div>
              <div className="flex items-center text-green-400">
                <Target className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Neural Interfaces</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/ai-2025-ultimate-content-revolution"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Content Revolution
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              <Link 
                href="/blog/ai-2025-revolutionary-breakthroughs"
                className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Latest Breakthroughs
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex-shrink-0 lg:ml-8">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-yellow-400/40 to-pink-400/40 rounded-full flex items-center justify-center">
                    <Brain className="h-16 w-16 text-white animate-pulse" />
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-1">500+</div>
              <div className="text-sm text-gray-400">Content Articles</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-1">100+</div>
              <div className="text-sm text-gray-400">Case Studies</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400 mb-1">50+</div>
              <div className="text-sm text-gray-400">Guides & Tutorials</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-1">24/7</div>
              <div className="text-sm text-gray-400">Updated Content</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}