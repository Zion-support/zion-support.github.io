import React from 'react';
import Link from 'next/link';

export default function UltimateContent2026Banner() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="font-semibold">Ultimate AI 2026 Content Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Discover the Future of AI
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
              Revolutionary Content Hub
            </span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive collection of AI insights, breakthrough articles, and success stories 
            that are reshaping the enterprise landscape in 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-4">Latest Articles</h3>
              <p className="text-lg opacity-90 mb-6">
                Revolutionary AI breakthroughs, quantum computing insights, and enterprise transformation guides
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>AI 2026 Revolutionary Breakthrough</span>
                  <span className="text-yellow-300">25 min</span>
                </div>
                <div className="flex justify-between">
                  <span>Quantum AI Breakthrough 2026</span>
                  <span className="text-yellow-300">25 min</span>
                </div>
                <div className="flex justify-between">
                  <span>AI Enterprise Transformation Guide</span>
                  <span className="text-yellow-300">30 min</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
              <p className="text-lg opacity-90 mb-6">
                Real-world case studies showcasing $50M+ savings and 95% efficiency improvements
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Global Manufacturing: $50M Savings</span>
                  <span className="text-green-300">Fortune 500</span>
                </div>
                <div className="flex justify-between">
                  <span>FinTech: 70% Risk Reduction</span>
                  <span className="text-green-300">$2.5M Savings</span>
                </div>
                <div className="flex justify-between">
                  <span>TechCorp: 90% Efficiency Gain</span>
                  <span className="text-green-300">$500K Savings</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">AI Tools & Resources</h3>
              <p className="text-lg opacity-90 mb-6">
                Interactive calculators, implementation guides, and cutting-edge AI solutions
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>AI ROI Calculator 2026</span>
                  <span className="text-blue-300">Interactive</span>
                </div>
                <div className="flex justify-between">
                  <span>Quantum AI Solutions</span>
                  <span className="text-blue-300">500x Faster</span>
                </div>
                <div className="flex justify-between">
                  <span>Autonomous AI Systems</span>
                  <span className="text-blue-300">300% ROI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/content-hub"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Content Hub
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Read Latest Articles
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-300">50+</div>
              <div className="text-sm opacity-90">Articles Published</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-300">25+</div>
              <div className="text-sm opacity-90">Success Stories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-300">10K+</div>
              <div className="text-sm opacity-90">Monthly Readers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-300">95%</div>
              <div className="text-sm opacity-90">Reader Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}