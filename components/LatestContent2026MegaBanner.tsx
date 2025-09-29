import React from 'react';
import Link from 'next/link';

export default function LatestContent2026MegaBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            🚀 BREAKTHROUGH 2026 CONTENT
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the latest AI innovations, success stories, and cutting-edge technologies 
            that are transforming industries worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Featured Blog Posts */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              📚 Latest Blog Posts
              <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-semibold">NEW</span>
            </h3>
            <div className="space-y-3">
              <Link 
                href="/blog/ai-neural-architecture-search-2026" 
                className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="font-semibold text-sm">🧠 Neural Architecture Search 2026</div>
                <div className="text-xs opacity-80">Revolutionary AutoML breakthroughs delivering 10x faster optimization</div>
              </Link>
              <Link 
                href="/blog/ai-synthetic-data-2026" 
                className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="font-semibold text-sm">🔒 Synthetic Data Revolution</div>
                <div className="text-xs opacity-80">Privacy-preserving AI development with 99.9% data similarity</div>
              </Link>
              <Link 
                href="/blog/ai-space-tech-revolution-2026" 
                className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="font-semibold text-sm">🚀 Space Tech Revolution</div>
                <div className="text-xs opacity-80">AI transforming space exploration and Mars colonization</div>
              </Link>
            </div>
          </div>

          {/* Featured Case Studies */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              🏆 Success Stories
              <span className="bg-green-400 text-black px-2 py-1 rounded-full text-xs font-semibold">FEATURED</span>
            </h3>
            <div className="space-y-3">
              <Link 
                href="/case-studies/ai-neural-architecture-success-2026" 
                className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="font-semibold text-sm">🏭 $25M Manufacturing Success</div>
                <div className="text-xs opacity-80">45% accuracy improvement with Neural Architecture Search</div>
              </Link>
              <Link 
                href="/case-studies/ai-synthetic-data-success-2026" 
                className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="font-semibold text-sm">🏥 $18M Healthcare Transformation</div>
                <div className="text-xs opacity-80">38% diagnostic accuracy improvement with privacy-preserving AI</div>
              </Link>
              <Link 
                href="/case-studies/ai-space-mission-success-2026" 
                className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="font-semibold text-sm">🌌 Space Mission Breakthrough</div>
                <div className="text-xs opacity-80">Autonomous spacecraft achieving 99.7% mission success rate</div>
              </Link>
            </div>
          </div>

          {/* Key Statistics */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              📊 Impact Metrics
              <span className="bg-blue-400 text-black px-2 py-1 rounded-full text-xs font-semibold">LIVE</span>
            </h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">$50M+</div>
                <div className="text-sm opacity-80">Total Client Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">95%+</div>
                <div className="text-sm opacity-80">Average Accuracy Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">150+</div>
                <div className="text-sm opacity-80">Successful Deployments</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              📚 Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-colors shadow-lg"
            >
              🏆 View Success Stories
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              💬 Start Your Project
            </Link>
          </div>
        </div>

        {/* Latest Updates Strip */}
        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-green-400 text-black px-2 py-1 rounded-full text-xs font-semibold">LATEST</span>
              <span>New content added weekly • 15+ new articles this month • 5+ new case studies</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/blog/ai-neural-architecture-search-2026" className="hover:text-yellow-200 transition-colors">
                Neural Architecture Search →
              </Link>
              <Link href="/case-studies/ai-synthetic-data-success-2026" className="hover:text-yellow-200 transition-colors">
                Healthcare Success →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}