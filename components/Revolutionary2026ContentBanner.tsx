import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Cpu, Zap, TrendingUp } from 'lucide-react';

export default function Revolutionary2026ContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold mb-6">
            <span className="w-4 h-4 mr-2">🚀</span>
            REVOLUTIONARY 2026 CONTENT
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Breakthrough AI Innovations
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              That Change Everything
            </span>
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            Discover the latest AI breakthroughs that are revolutionizing industries and creating unprecedented value. 
            From autonomous AI systems to cognitive computing, explore the future of artificial intelligence.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Autonomous AI Systems */}
          <Link href="/blog/ai-autonomous-ai-systems-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    NEW 2026
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                AI Autonomous AI Systems 2026
              </h3>
              <p className="text-indigo-100 text-sm mb-4">
                Self-improving intelligence that evolves and adapts without human intervention. 95% efficiency gains and $15M+ savings.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-purple-300">95%</div>
                    <div className="text-xs text-indigo-200">Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-300">$15M+</div>
                    <div className="text-xs text-indigo-200">Savings</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Cognitive Computing */}
          <Link href="/blog/ai-cognitive-computing-breakthrough-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    BREAKTHROUGH
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                AI Cognitive Computing Breakthrough 2026
              </h3>
              <p className="text-indigo-100 text-sm mb-4">
                Human-level reasoning and decision-making capabilities. 98% accuracy and $25M+ value creation for enterprises.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-blue-300">98%</div>
                    <div className="text-xs text-indigo-200">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-300">$25M+</div>
                    <div className="text-xs text-indigo-200">Value</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Success Case Study */}
          <Link href="/case-studies/ai-cognitive-computing-success-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    SUCCESS STORY
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                AI Cognitive Computing Success 2026
              </h3>
              <p className="text-indigo-100 text-sm mb-4">
                Fortune 500 company achieves $25M value creation with human-level AI reasoning. 95% decision accuracy improvement.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-green-300">$25M</div>
                    <div className="text-xs text-indigo-200">Value</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-blue-300">95%</div>
                    <div className="text-xs text-indigo-200">Accuracy</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center">
                Explore All 2026 Content
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400">50+</div>
              <div className="text-indigo-200 text-sm">New Articles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">25+</div>
              <div className="text-indigo-200 text-sm">Case Studies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">$100M+</div>
              <div className="text-indigo-200 text-sm">Total ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">99%</div>
              <div className="text-indigo-200 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}