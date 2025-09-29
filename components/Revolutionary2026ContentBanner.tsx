import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Rocket, Zap, Star } from 'lucide-react';

export default function Revolutionary2026ContentBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              🔥 REVOLUTIONARY 2026
            </span>
            <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              BREAKTHROUGH CONTENT
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              & Space Technology 2026
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most advanced AI innovations, cognitive architectures, and space technology 
            breakthroughs that are reshaping the future of technology and business.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Cognitive Architecture */}
          <Link href="/blog/ai-cognitive-architecture-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                    AI Cognitive Architecture
                  </h3>
                  <p className="text-blue-200 text-sm">Next-Gen Intelligence</p>
                </div>
              </div>
              
              <p className="text-blue-100 mb-6 leading-relaxed">
                Build self-evolving AI systems with 99.9% accuracy and 10x performance gains using 
                revolutionary cognitive architecture patterns.
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">99.9%</div>
                    <div className="text-xs text-blue-200">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">10x</div>
                    <div className="text-xs text-blue-200">Performance</div>
                  </div>
                </div>
                <div className="flex items-center text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors">
                  Read More →
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-blue-200">
                <Star className="w-4 h-4" />
                <span>28 min read • Featured Article</span>
              </div>
            </div>
          </Link>

          {/* Space Technology */}
          <Link href="/blog/ai-space-tech-revolution-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                    AI Space Tech Revolution
                  </h3>
                  <p className="text-blue-200 text-sm">Autonomous Space Ops</p>
                </div>
              </div>
              
              <p className="text-blue-100 mb-6 leading-relaxed">
                Discover how AI is revolutionizing space technology with autonomous satellites, 
                space mining, and interplanetary AI systems.
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">$50B+</div>
                    <div className="text-xs text-blue-200">Market Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">99.9%</div>
                    <div className="text-xs text-blue-200">Reliability</div>
                  </div>
                </div>
                <div className="flex items-center text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors">
                  Read More →
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-blue-200">
                <Star className="w-4 h-4" />
                <span>32 min read • Revolutionary</span>
              </div>
            </div>
          </Link>

          {/* AI Mega Trends */}
          <Link href="/blog/ai-2026-mega-trends" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                    AI Mega Trends 2026
                  </h3>
                  <p className="text-blue-200 text-sm">$50B+ Opportunities</p>
                </div>
              </div>
              
              <p className="text-blue-100 mb-6 leading-relaxed">
                Explore the 15 mega trends reshaping enterprise AI. From autonomous operations 
                to quantum computing, learn how to capitalize on massive opportunities.
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">15</div>
                    <div className="text-xs text-blue-200">Mega Trends</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">$50B+</div>
                    <div className="text-xs text-blue-200">Opportunity</div>
                  </div>
                </div>
                <div className="flex items-center text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors">
                  Read More →
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-blue-200">
                <Star className="w-4 h-4" />
                <span>45 min read • Mega Guide</span>
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with Revolutionary AI?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get expert consultation on implementing cutting-edge AI solutions and space technology 
              innovations that are reshaping industries in 2026.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/blog"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300"
              >
                Explore All Content
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-blue-200">
              <p>Join 10,000+ professionals transforming their businesses with AI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}