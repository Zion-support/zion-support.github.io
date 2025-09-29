import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, TrendingUp, Star } from 'lucide-react';

export default function Revolutionary2026ContentBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            REVOLUTIONARY 2026 CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Transform Your Business with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Autonomous AI Systems
            </span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Discover the future of business automation with our latest 2026 content featuring $25M+ ROI case studies and cutting-edge AI innovations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-autonomous-business-systems-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">NEW 2026</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Autonomous Business Systems 2026
              </h3>
              <p className="opacity-90 mb-4 text-sm">
                Complete self-managing operations with 99% automation efficiency and $15M+ ROI potential.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold">99%</div>
                    <div className="text-xs opacity-75">Automation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">$15M+</div>
                    <div className="text-xs opacity-75">ROI</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-autonomous-enterprise-success-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">FEATURED</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                $25M ROI Success Story
              </h3>
              <p className="opacity-90 mb-4 text-sm">
                Fortune 500 manufacturing company achieves 98% automation and $25M annual savings.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold">$25M</div>
                    <div className="text-xs opacity-75">Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">98%</div>
                    <div className="text-xs opacity-75">Automation</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-quantum-computing-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">BREAKTHROUGH</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Quantum Computing 2026
              </h3>
              <p className="opacity-90 mb-4 text-sm">
                Next-generation intelligence with 1000x faster optimization and revolutionary capabilities.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold">1000x</div>
                    <div className="text-xs opacity-75">Faster</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">95%</div>
                    <div className="text-xs opacity-75">Accuracy</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            <span className="w-5 h-5 mr-2">🚀</span>
            Explore All 2026 Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}