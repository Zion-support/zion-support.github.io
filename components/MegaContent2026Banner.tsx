import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Zap } from 'lucide-react';

export default function MegaContent2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
              🚀 MEGA CONTENT 2026
            </span>
            <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
              $50M+ ROI STORIES
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionary AI Content & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              {' '}Mega Success Stories
            </span>
          </h2>
          
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Discover the latest breakthroughs in AI technology, cognitive computing, space tech, and real-world 
            transformation stories delivering $50M+ ROI for Fortune 500 companies.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Cognitive Computing */}
          <Link href="/blog/ai-cognitive-computing-breakthrough-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🧠</span>
                </div>
                <div>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    NEW 2026
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Cognitive Computing Breakthrough 2026
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Revolutionary brain-inspired AI architectures achieving 99.9% accuracy and $15M+ ROI.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-purple-300">99.9%</div>
                    <div className="text-xs opacity-75">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-blue-300">$15M+</div>
                    <div className="text-xs opacity-75">ROI</div>
                  </div>
                </div>
                <div className="flex items-center text-yellow-300 font-semibold text-sm group-hover:text-white transition-colors">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </Link>

          {/* Space Technology */}
          <Link href="/blog/ai-space-tech-revolution-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    SPACE TECH
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Space Technology Revolution 2026
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Autonomous space operations and $50B+ market opportunities in space AI technology.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-blue-300">$50B+</div>
                    <div className="text-xs opacity-75">Market</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-300">99.9%</div>
                    <div className="text-xs opacity-75">Autonomous</div>
                  </div>
                </div>
                <div className="flex items-center text-yellow-300 font-semibold text-sm group-hover:text-white transition-colors">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </Link>

          {/* Mega Transformation Case Study */}
          <Link href="/case-studies/ai-mega-transformation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    $50M ROI
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Mega Transformation: $50M ROI Case Study
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Fortune 500 company achieves $50M ROI with 99.9% automation and complete business revolution.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-green-300">$50M</div>
                    <div className="text-xs opacity-75">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-orange-300">99.9%</div>
                    <div className="text-xs opacity-75">Automation</div>
                  </div>
                </div>
                <div className="flex items-center text-yellow-300 font-semibold text-sm group-hover:text-white transition-colors">
                  View Case Study <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-center mb-6">Content Performance Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">50+</div>
              <div className="text-sm opacity-90">New Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">25+</div>
              <div className="text-sm opacity-90">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300 mb-2">$100M+</div>
              <div className="text-sm opacity-90">Total ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">99.9%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <TrendingUp className="w-5 h-5" />
            Explore All AI Content
          </Link>
          <Link
            href="/case-studies"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center gap-2"
          >
            <Star className="w-5 h-5" />
            View Success Stories
          </Link>
        </div>

        {/* Latest Updates */}
        <div className="mt-12 text-center">
          <p className="text-sm opacity-75 mb-4">
            🔥 Latest updates: Cognitive computing breakthroughs, space AI revolution, and $50M transformation success stories
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs opacity-75">
            <span className="bg-white/20 px-3 py-1 rounded-full">#CognitiveComputing2026</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">#SpaceTechRevolution</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">#AIMegaTransformation</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">#50MillionROI</span>
          </div>
        </div>
      </div>
    </section>
  );
}