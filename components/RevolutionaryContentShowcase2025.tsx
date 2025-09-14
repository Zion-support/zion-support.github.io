import React from 'react';
import Link from 'next/link';

export default function RevolutionaryContentShowcase2025() {
  return (
    <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🌟 REVOLUTIONARY CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary Content Showcase 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most cutting-edge content and insights that are revolutionizing 
            how businesses approach AItechnologyand digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/ai-2025-ultimate-innovation-showcase"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              View Showcase →
            </Link>
            <Link
              href="/ai-2026-future-predictions-revolutionary"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all"
            >
              Future Predictions
            </Link>
          </div>
          
          {/* Content Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-left">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-bold mb-2">AI Innovation Hub</h3>
              <p className="text-sm opacity-90 mb-4">Comprehensive showcase of the latest AI breakthroughs and their real-world applications.</p>
              <Link href="/ai-2025-ultimate-innovation-showcase" className="text-cyan-300 hover:text-white text-sm font-semibold">
                Explore →
              </Link>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-left">
              <div className="text-3xl mb-3">🔮</div>
              <h3 className="text-lg font-bold mb-2">Future Vision</h3>
              <p className="text-sm opacity-90 mb-4">Detailed predictions and forecasts for the next generation of AI technology.</p>
              <Link href="/ai-2026-future-predictions-revolutionary" className="text-cyan-300 hover:text-white text-sm font-semibold">
                Discover →
              </Link>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-left">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="text-lg font-bold mb-2">Success Stories</h3>
              <p className="text-sm opacity-90 mb-4">Real-world case studies and success metrics from our AI implementations.</p>
              <Link href="/case-studies" className="text-cyan-300 hover:text-white text-sm font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}