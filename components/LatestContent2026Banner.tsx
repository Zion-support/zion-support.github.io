import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Rocket, Zap } from 'lucide-react';

export default function LatestContent2026Banner() {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-4">
            <span className="w-4 h-4 mr-2">🚀</span>
            NEW 2026 BREAKTHROUGHS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Content & Case Studies
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover cutting-edge AI technologies, autonomous systems, and breakthrough innovations that are transforming industries worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Autonomous AI Systems */}
          <Link href="/blog/ai-autonomous-ai-systems-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-purple-200" />
                </div>
                <div>
                  <div className="text-sm font-medium text-purple-200">NEW 2026</div>
                  <div className="text-xs text-purple-300">Breakthrough</div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-purple-200 transition-colors">
                AI Autonomous AI Systems 2026
              </h3>
              <p className="text-sm text-white/80 mb-4">
                Self-evolving intelligence architecture with 99.9% uptime, 60% cost reduction, and revolutionary self-healing capabilities.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-xs">
                  <div className="text-center">
                    <div className="font-bold text-purple-200">99.9%</div>
                    <div className="text-purple-300">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-purple-200">60%</div>
                    <div className="text-purple-300">Cost Savings</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Cognitive Computing */}
          <Link href="/blog/ai-cognitive-computing-breakthrough-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-orange-200" />
                </div>
                <div>
                  <div className="text-sm font-medium text-orange-200">NEW 2026</div>
                  <div className="text-xs text-orange-300">Revolutionary</div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-orange-200 transition-colors">
                AI Cognitive Computing Breakthrough 2026
              </h3>
              <p className="text-sm text-white/80 mb-4">
                Human-level reasoning systems with 95% accuracy, 50x faster processing, and breakthrough decision-making capabilities.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-xs">
                  <div className="text-center">
                    <div className="font-bold text-orange-200">95%</div>
                    <div className="text-orange-300">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-orange-200">50x</div>
                    <div className="text-orange-300">Faster</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Space Technology */}
          <Link href="/blog/ai-space-tech-revolution-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-blue-200" />
                </div>
                <div>
                  <div className="text-sm font-medium text-blue-200">NEW 2026</div>
                  <div className="text-xs text-blue-300">Revolutionary</div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-200 transition-colors">
                AI Space Tech Revolution 2026
              </h3>
              <p className="text-sm text-white/80 mb-4">
                Autonomous space operations and deep space intelligence with 99.9% reliability and $500M+ savings.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-xs">
                  <div className="text-center">
                    <div className="font-bold text-blue-200">99.9%</div>
                    <div className="text-blue-300">Reliability</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-blue-200">$500M+</div>
                    <div className="text-blue-300">Savings</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* Featured Case Study */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              FEATURED CASE STUDY
            </span>
            <span className="text-sm text-white/80">$50M Success Story</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">
                AI Cognitive Computing Success 2026
              </h3>
              <p className="text-white/90 mb-4">
                See how a leading research institution achieved $50M in value with cognitive computing, 
                generating breakthrough discoveries and 10x faster research capabilities.
              </p>
              <div className="flex gap-6 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300">$50M</div>
                  <div className="text-green-400">Value Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-300">95%</div>
                  <div className="text-blue-400">Discovery Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-300">10x</div>
                  <div className="text-purple-400">Faster Research</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/case-studies/ai-cognitive-computing-success-2026"
                className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors group"
              >
                View Success Story
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
          >
            <span className="w-5 h-5 mr-2">📚</span>
            Explore All Content
          </Link>
          <Link
            href="/case-studies"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors flex items-center justify-center"
          >
            <span className="w-5 h-5 mr-2">📊</span>
            View Case Studies
          </Link>
        </div>
      </div>
    </div>
  );
}