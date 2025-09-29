import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Brain, Rocket, Atom } from 'lucide-react';

export default function UltimateContent2026Banner() {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
              🚀 ULTIMATE 2026 CONTENT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The Most Comprehensive AI Content Collection
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Ever Created
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Discover the complete collection of revolutionary AI content, case studies, and success stories 
            that are reshaping business in 2026. From quantum AI to neural interfaces, explore the future today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Blog Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Revolutionary Blog Posts</h3>
                <p className="text-white/80 text-sm">5 New Breakthrough Guides</p>
              </div>
            </div>
            <div className="space-y-3">
              <Link href="/blog/ai-2026-mega-breakthroughs" className="block group">
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <span className="text-sm font-medium">AI 2026 Mega Breakthroughs</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              <Link href="/blog/ai-enterprise-automation-2026" className="block group">
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <span className="text-sm font-medium">Enterprise Automation 2026</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              <Link href="/blog/ai-quantum-computing-2026" className="block group">
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <span className="text-sm font-medium">Quantum AI Computing</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              <Link href="/blog/ai-neural-interfaces-2026" className="block group">
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <span className="text-sm font-medium">Neural Interfaces 2026</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              <Link href="/blog/ai-space-tech-2026" className="block group">
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <span className="text-sm font-medium">Space AI Technology</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          {/* Case Studies */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-green-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Success Case Studies</h3>
                <p className="text-white/80 text-sm">3 New $100M+ Success Stories</p>
              </div>
            </div>
            <div className="space-y-3">
              <Link href="/case-studies/ai-2026-mega-transformation-success" className="block group">
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <span className="text-sm font-medium">$100M Mega Transformation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              <Link href="/case-studies/ai-quantum-optimization-success-2026" className="block group">
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <span className="text-sm font-medium">$50M Quantum Success</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              <Link href="/case-studies/ai-neural-interface-success-2026" className="block group">
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <span className="text-sm font-medium">300% Productivity Gain</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-purple-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Key Breakthroughs</h3>
                <p className="text-white/80 text-sm">Revolutionary Technologies</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                <Atom className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-medium">1000x Quantum Speed</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                <Brain className="w-5 h-5 text-pink-300" />
                <span className="text-sm font-medium">300% Neural Productivity</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                <Rocket className="w-5 h-5 text-blue-300" />
                <span className="text-sm font-medium">Space AI Technology</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                <Star className="w-5 h-5 text-green-300" />
                <span className="text-sm font-medium">$100M+ ROI Success</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore All Content →
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              View Success Stories
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-500 hover:to-orange-600 transition-colors shadow-lg"
            >
              Start Your AI Journey
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-300">5</div>
              <div className="text-sm text-white/80">New Blog Posts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-300">3</div>
              <div className="text-sm text-white/80">Success Stories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-300">$150M+</div>
              <div className="text-sm text-white/80">Total ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-300">1000x</div>
              <div className="text-sm text-white/80">Performance Gain</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}