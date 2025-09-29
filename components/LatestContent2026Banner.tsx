import React from 'react';
import Link from 'next/link';
import { Brain, Rocket, Database, ArrowRight, Star, Clock } from 'lucide-react';

export default function LatestContent2026Banner() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
              🔥 LATEST 2026
            </span>
            <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              BREAKTHROUGH CONTENT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Revolutionary AI Content & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              {' '}Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the latest AI innovations, transformation guides, and real-world success stories 
            that are reshaping businesses and industries in 2026
          </p>
        </div>

        {/* Featured Content Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Neural Interfaces */}
          <Link href="/blog/ai-neural-interfaces-2026" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200 hover:border-purple-200 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI Neural Interfaces 2026</h3>
                  <p className="text-gray-500 text-sm">Brain-Computer Integration</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Revolutionary brain-computer interfaces delivering 99.9% accuracy and sub-100ms response times 
                for unprecedented human-AI collaboration.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">99.9%</div>
                    <div className="text-xs text-gray-500">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">&lt;100ms</div>
                    <div className="text-xs text-gray-500">Response</div>
                  </div>
                </div>
                <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                  Read More →
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>25 min read • NEW 2026</span>
              </div>
            </div>
          </Link>

          {/* Space Technology */}
          <Link href="/blog/ai-space-tech-2026" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200 hover:border-blue-200 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI Space Technology 2026</h3>
                  <p className="text-gray-500 text-sm">Autonomous Space Operations</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Revolutionary AI systems transforming space exploration with autonomous satellites, 
                Mars missions, and 99.9% mission success rates.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">99.9%</div>
                    <div className="text-xs text-gray-500">Success</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-xs text-gray-500">Satellites</div>
                  </div>
                </div>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  Read More →
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Rocket className="w-4 h-4" />
                <span>30 min read • SPACE TECH</span>
              </div>
            </div>
          </Link>

          {/* Synthetic Data Case Study */}
          <Link href="/case-studies/ai-synthetic-data-2026" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200 hover:border-green-200 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI Synthetic Data 2026</h3>
                  <p className="text-gray-500 text-sm">$15M ROI Case Study</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                See how a Fortune 500 company achieved $15M ROI with AI synthetic data generation, 
                95% privacy compliance, and 300% faster model training.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">$15M</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-xs text-gray-500">Privacy</div>
                  </div>
                </div>
                <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                  Read More →
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Star className="w-4 h-4" />
                <span>20 min read • CASE STUDY</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              Latest AI Innovations
            </h3>
            <div className="space-y-3">
              <Link href="/blog/ai-quantum-computing-2026" className="flex items-center justify-between text-gray-600 hover:text-purple-600 transition-colors group">
                <span>AI Quantum Computing 2026</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/blog/ai-autonomous-enterprise-2026" className="flex items-center justify-between text-gray-600 hover:text-purple-600 transition-colors group">
                <span>AI Autonomous Enterprise 2026</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/blog/ai-sustainability-green-tech-2026" className="flex items-center justify-between text-gray-600 hover:text-purple-600 transition-colors group">
                <span>AI Sustainability & Green Tech 2026</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/blog/ai-neural-interfaces-2026" className="flex items-center justify-between text-gray-600 hover:text-purple-600 transition-colors group">
                <span>AI Neural Interfaces 2026</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              Success Stories
            </h3>
            <div className="space-y-3">
              <Link href="/case-studies/ai-innovation-enterprise-success-2026" className="flex items-center justify-between text-gray-600 hover:text-green-600 transition-colors group">
                <span>$50M AI Innovation Success</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/case-studies/ai-autonomous-enterprise-success-2026" className="flex items-center justify-between text-gray-600 hover:text-green-600 transition-colors group">
                <span>$25M Autonomous Enterprise ROI</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/case-studies/ai-sustainability-transformation-2026" className="flex items-center justify-between text-gray-600 hover:text-green-600 transition-colors group">
                <span>$10M Sustainability Transformation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/case-studies/ai-synthetic-data-2026" className="flex items-center justify-between text-gray-600 hover:text-green-600 transition-colors group">
                <span>$15M Synthetic Data ROI</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Explore All Revolutionary 2026 Content
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Discover cutting-edge AI innovations, transformation guides, and real-world success stories 
              that are reshaping the future of business and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              >
                🚀 Explore All Articles
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all"
              >
                🏆 View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}