import React from 'react';
import { Link } from 'react-router-dom';

export default function LatestAIInnovations2026Banner() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">LATEST: AI Innovations 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Revolutionary AI Innovations
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Transforming Enterprise Operations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the latest breakthroughs in AI technology that are revolutionizing how businesses operate, 
            from autonomous systems to quantum computing and everything in between.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">🤖</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Autonomous AI</h3>
                <p className="text-xs text-gray-500">Self-Managing Systems</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              90% efficiency gains with self-managing infrastructure and autonomous decision-making.
            </p>
            <div className="text-xs text-purple-600 font-semibold">
              Learn More →
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">⚛️</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Quantum AI</h3>
                <p className="text-xs text-gray-500">1000x Faster Processing</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Revolutionary quantum computing breakthrough solving complex problems exponentially faster.
            </p>
            <div className="text-xs text-indigo-600 font-semibold">
              Learn More →
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">📈</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">$50M Success</h3>
                <p className="text-xs text-gray-500">Fortune 500 Results</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Real-world case study showing $50M revenue increase and 400% ROI through AI transformation.
            </p>
            <div className="text-xs text-green-600 font-semibold">
              Learn More →
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">🔮</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Future Tech</h3>
                <p className="text-xs text-gray-500">2026 Predictions</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Explore what's coming next in AI technology and how it will transform your industry.
            </p>
            <div className="text-xs text-orange-600 font-semibold">
              Learn More →
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join the AI revolution and discover how our cutting-edge solutions can help you achieve 
              similar results to our Fortune 500 clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">90%</div>
              <div className="text-sm opacity-80">Efficiency Gains</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">400%</div>
              <div className="text-sm opacity-80">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">$50M+</div>
              <div className="text-sm opacity-80">Revenue Increase</div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Explore Our Services
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <p className="text-sm mt-4 opacity-75">
              Free consultation • No commitment • Immediate results
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}