import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react';

export default function Revolutionary2027ContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400 to-blue-400 transform rotate-12 scale-150"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            REVOLUTIONARY 2027 CONTENT
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The Future of AI is
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              {' '}Here Today
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover groundbreaking AI innovations that are reshaping industries and creating unprecedented opportunities for growth and transformation.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-cognitive-computing-breakthrough-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    BREAKTHROUGH
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Cognitive Computing Breakthrough 2026
              </h3>
              <p className="text-purple-100 text-sm mb-4">
                95% accuracy in complex reasoning tasks with $50M+ enterprise value generation.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">95%</div>
                    <div className="text-xs text-purple-200">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">$50M+</div>
                    <div className="text-xs text-purple-200">Value</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-autonomous-business-systems-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    REVOLUTIONARY
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Autonomous Business Systems 2026
              </h3>
              <p className="text-purple-100 text-sm mb-4">
                Complete business automation with 95% process efficiency and $15M+ ROI achievement.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">95%</div>
                    <div className="text-xs text-purple-200">Automation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">$15M+</div>
                    <div className="text-xs text-purple-200">ROI</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-sustainability-transformation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    FEATURED
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Sustainability Transformation 2026
              </h3>
              <p className="text-purple-100 text-sm mb-4">
                $10M ROI case study achieving carbon neutrality and 80% energy reduction.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">$10M</div>
                    <div className="text-xs text-purple-200">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">100%</div>
                    <div className="text-xs text-purple-200">Carbon Neutral</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Future?</h3>
            <p className="text-lg text-purple-100 mb-6">
              Join thousands of forward-thinking organizations already leveraging these revolutionary AI technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Explore All Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}