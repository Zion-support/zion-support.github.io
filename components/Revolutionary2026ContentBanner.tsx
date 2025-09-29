import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Brain, TrendingUp, DollarSign } from 'lucide-react';

export default function Revolutionary2026ContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold mb-6">
            <Zap className="w-4 h-4 mr-2" />
            REVOLUTIONARY 2026 CONTENT
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Breakthrough AI Content That
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
              {' '}Changes Everything
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the latest breakthroughs in AI technology with our revolutionary 2026 content. 
            From autonomous AI systems to cognitive computing, explore the future of artificial intelligence.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Autonomous AI Systems */}
          <Link href="/blog/ai-autonomous-ai-systems-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-yellow-400">NEW 2026</div>
                  <div className="text-sm text-gray-300">Autonomous AI</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                AI Autonomous AI Systems 2026
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Self-improving AI systems that evolve and optimize themselves, delivering 300% performance gains and $50M+ ROI.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-purple-400">300%</div>
                    <div className="text-xs text-gray-400">Performance</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-400">$50M+</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Cognitive Computing */}
          <Link href="/blog/ai-cognitive-computing-breakthrough-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-yellow-400">BREAKTHROUGH</div>
                  <div className="text-sm text-gray-300">Cognitive AI</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                AI Cognitive Computing Breakthrough 2026
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Human-level reasoning AI that achieves 500% performance gains and $100M+ ROI through advanced cognitive capabilities.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-blue-400">500%</div>
                    <div className="text-xs text-gray-400">Performance</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-400">$100M+</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Case Studies */}
          <Link href="/case-studies/ai-autonomous-ai-systems-success-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-yellow-400">CASE STUDY</div>
                  <div className="text-sm text-gray-300">Fortune 500</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                $50M ROI Success Story
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                See how a Fortune 500 company achieved $50M ROI with autonomous AI systems that self-improve and optimize operations.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-green-400">$50M</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-purple-400">95%</div>
                    <div className="text-xs text-gray-400">Automation</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Content Links */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Link href="/case-studies/ai-cognitive-computing-success-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                    $100M Cognitive AI Success
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Fortune 500 company achieves $100M ROI with human-level AI reasoning
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          <Link href="/blog" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                    Explore All 2026 Content
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Discover cutting-edge AI insights, case studies, and breakthrough technologies
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Get Expert Consultation
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300"
            >
              Explore All Content
            </Link>
          </div>
          
          <p className="text-gray-300 text-sm mt-6">
            Join 10,000+ professionals discovering the future of AI
          </p>
        </div>
      </div>
    </section>
  );
}