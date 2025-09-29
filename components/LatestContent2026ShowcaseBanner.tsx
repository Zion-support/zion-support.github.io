import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, TrendingUp, Rocket, Brain, Zap } from 'lucide-react';

export default function LatestContent2026ShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              🔥 BREAKTHROUGH 2026
            </span>
            <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              NEW CONTENT
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
              & Success Stories
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Discover the latest AI innovations, transformation guides, and real-world success stories 
            that are reshaping businesses and creating $100M+ opportunities in 2026
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* AI Mega Trends */}
          <Link href="/blog/ai-2026-mega-trends" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">NEW 2026</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                AI Mega Trends 2026
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Discover the 15 mega trends reshaping enterprise AI. From autonomous operations to quantum computing, 
                learn how to capitalize on $50B+ market opportunities.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">$50B+</div>
                    <div className="text-xs text-blue-200">Opportunity</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">15</div>
                    <div className="text-xs text-blue-200">Mega Trends</div>
                  </div>
                </div>
                <div className="flex items-center text-yellow-300 font-semibold group-hover:text-yellow-200 transition-colors">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </Link>

          {/* Space AI Revolution */}
          <Link href="/blog/ai-space-tech-revolution-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-green-400 text-black px-3 py-1 rounded-full text-xs font-bold">BREAKTHROUGH</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
                AI Space Tech Revolution
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Discover how AI is revolutionizing space technology with $100M+ mission success rates, 
                autonomous spacecraft, and Mars colonization systems.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">$100M+</div>
                    <div className="text-xs text-blue-200">Mission Value</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-400">99.7%</div>
                    <div className="text-xs text-blue-200">Success Rate</div>
                  </div>
                </div>
                <div className="flex items-center text-purple-300 font-semibold group-hover:text-purple-200 transition-colors">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </Link>

          {/* Autonomous Enterprise */}
          <Link href="/case-studies/ai-autonomous-enterprise-transformation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold">CASE STUDY</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-green-300 transition-colors">
                $15M ROI Success Story
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                See how Global Manufacturing Corp achieved 95% operational automation and $15M annual ROI 
                through comprehensive AI transformation.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">$15M</div>
                    <div className="text-xs text-blue-200">Annual ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">95%</div>
                    <div className="text-xs text-blue-200">Automated</div>
                  </div>
                </div>
                <div className="flex items-center text-green-300 font-semibold group-hover:text-green-200 transition-colors">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Content Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link href="/case-studies/ai-space-mission-success-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-semibold text-yellow-300">Space Mission</span>
              </div>
              <h4 className="font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                $100M Mission Success
              </h4>
              <p className="text-sm text-blue-200">
                99.7% success rate with AI-powered autonomous spacecraft
              </p>
            </div>
          </Link>

          <Link href="/blog/ai-cognitive-computing-breakthrough-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Brain className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-semibold text-purple-300">Cognitive AI</span>
              </div>
              <h4 className="font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                Cognitive Computing
              </h4>
              <p className="text-sm text-blue-200">
                Revolutionary brain-computer interfaces with 10x productivity
              </p>
            </div>
          </Link>

          <Link href="/blog/ai-quantum-computing-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Rocket className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-semibold text-cyan-300">Quantum AI</span>
              </div>
              <h4 className="font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                Quantum Computing
              </h4>
              <p className="text-sm text-blue-200">
                1000x faster optimization with quantum-enhanced AI
              </p>
            </div>
          </Link>

          <Link href="/blog/ai-sustainability-green-tech-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-sm font-semibold text-green-300">Sustainability</span>
              </div>
              <h4 className="font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                Green AI Tech
              </h4>
              <p className="text-sm text-blue-200">
                80% energy reduction with carbon-neutral AI operations
              </p>
            </div>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Clock className="w-5 h-5" />
              Explore All Content
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 flex items-center gap-2"
            >
              <TrendingUp className="w-5 h-5" />
              View Success Stories
            </Link>
          </div>
          <p className="text-blue-200 mt-4 text-sm">
            Join 10,000+ professionals discovering the future of AI
          </p>
        </div>
      </div>
    </section>
  );
}