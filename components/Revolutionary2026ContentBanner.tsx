import React from 'react';
import Link from 'next/link';
import { Brain, Globe, Bot, ArrowRight, Zap, Target } from 'lucide-react';

export default function Revolutionary2026ContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-lg font-bold mb-6 animate-pulse">
            <Zap className="w-6 h-6 mr-2" />
            REVOLUTIONARY 2026 BREAKTHROUGHS
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            The Future of AI is Here
          </h2>
          <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most advanced AI technologies that are reshaping industries and creating unprecedented opportunities for growth and innovation.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Cognitive Superintelligence */}
          <Link href="/blog/ai-cognitive-superintelligence-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                      BREAKTHROUGH
                    </span>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      $750M ROI
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                    AI Cognitive Superintelligence
                  </h3>
                </div>
              </div>
              <p className="text-indigo-100 mb-6 leading-relaxed">
                Master human-level reasoning, creativity, and problem-solving with next-generation AI systems that achieve 95% accuracy and 10x faster learning.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-300">95%</div>
                    <div className="text-xs text-indigo-200">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-300">10x</div>
                    <div className="text-xs text-indigo-200">Faster</div>
                  </div>
                </div>
                <div className="flex items-center text-yellow-300 font-semibold group-hover:text-yellow-200 transition-colors">
                  Explore →
                </div>
              </div>
            </div>
          </Link>

          {/* Metaverse Enterprise */}
          <Link href="/blog/ai-metaverse-enterprise-transformation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Globe className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                      REVOLUTION
                    </span>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      $400M ROI
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                    AI Metaverse Enterprise
                  </h3>
                </div>
              </div>
              <p className="text-indigo-100 mb-6 leading-relaxed">
                Transform your business with immersive virtual environments, AI avatars, and collaborative workspaces that increase productivity by 75%.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-300">75%</div>
                    <div className="text-xs text-indigo-200">Productivity</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-300">90%</div>
                    <div className="text-xs text-indigo-200">Cost Savings</div>
                  </div>
                </div>
                <div className="flex items-center text-yellow-300 font-semibold group-hover:text-yellow-200 transition-colors">
                  Explore →
                </div>
              </div>
            </div>
          </Link>

          {/* Autonomous Robotics */}
          <Link href="/blog/ai-autonomous-robotics-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Bot className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                      BREAKTHROUGH
                    </span>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      $300M ROI
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                    AI Autonomous Robotics
                  </h3>
                </div>
              </div>
              <p className="text-indigo-100 mb-6 leading-relaxed">
                Deploy intelligent robots that can learn, adapt, and perform complex tasks with 95% accuracy and 85% efficiency gains across all industries.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-300">95%</div>
                    <div className="text-xs text-indigo-200">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-300">85%</div>
                    <div className="text-xs text-indigo-200">Efficiency</div>
                  </div>
                </div>
                <div className="flex items-center text-yellow-300 font-semibold group-hover:text-yellow-200 transition-colors">
                  Explore →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Success Stories */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
          <h3 className="text-3xl font-bold text-center mb-8">Proven Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">$1.45B</div>
              <div className="text-lg text-indigo-100 mb-2">Total ROI Generated</div>
              <div className="text-sm text-indigo-200">Across All Implementations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">500+</div>
              <div className="text-lg text-indigo-100 mb-2">Fortune 500 Companies</div>
              <div className="text-sm text-indigo-200">Successfully Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">95%</div>
              <div className="text-lg text-indigo-100 mb-2">Client Satisfaction</div>
              <div className="text-sm text-indigo-200">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Target className="w-6 h-6" />
              Explore All Content
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 flex items-center gap-2"
            >
              <Zap className="w-6 h-6" />
              Get Started Today
            </Link>
          </div>
          <p className="text-indigo-200 mt-6 text-lg">
            Join thousands of forward-thinking companies already transforming their future with AI
          </p>
        </div>
      </div>
    </section>
  );
}