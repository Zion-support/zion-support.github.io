import React from 'react';
import Link from 'next/link';

export default function AITrends2026PredictionsBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">FEATURED: 2026 AI Predictions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI Trends 2026: Top 10 Predictions
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover the <span className="font-bold text-yellow-300">transformative AI technologies</span> that will 
            revolutionize business in 2026. From autonomous agents to quantum AI, stay ahead of the curve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content Preview */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Top AI Trends for 2026</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🤖</div>
                  <div className="text-sm font-semibold">Autonomous AI Agents</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="text-sm font-semibold">Edge AI Computing</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🎭</div>
                  <div className="text-sm font-semibold">Multimodal AI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">⚛️</div>
                  <div className="text-sm font-semibold">Quantum AI</div>
                </div>
              </div>
              <p className="text-sm opacity-90">
                Explore 10 breakthrough AI technologies that will transform industries and create 
                unprecedented opportunities for business growth and innovation.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-bold mb-3">Key Insights You'll Discover</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  85% of enterprises will adopt AI by 2026
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  $2.5T global AI market value expected
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  300% average ROI from AI investments
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Complete implementation roadmap included
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Stay Ahead of AI Trends</h3>
              <p className="text-lg mb-6 opacity-90">
                Get exclusive insights into the AI technologies that will shape 2026 and beyond
              </p>
              
              <div className="space-y-4">
                <Link
                  href="/blog/ai-trends-2026-predictions"
                  className="block w-full bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
                >
                  Read Full Predictions
                </Link>
                
                <Link
                  href="/blog/ai-enterprise-implementation-2026"
                  className="block w-full border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors text-center"
                >
                  View Implementation Guide
                </Link>
                
                <a
                  href="tel:+13024640950"
                  className="block w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-500 hover:to-orange-600 transition-colors text-center"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold mb-3">What's Inside</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• 10 breakthrough AI technologies</li>
                <li>• Real-world implementation examples</li>
                <li>• Business impact analysis</li>
                <li>• 2026 implementation roadmap</li>
                <li>• Industry-specific insights</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trend Highlights */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">Featured AI Trends</h3>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🤖</span>
              </div>
              <h4 className="font-semibold mb-2">Autonomous Agents</h4>
              <p className="text-xs opacity-75">Self-operating AI systems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold mb-2">Edge AI</h4>
              <p className="text-xs opacity-75">Real-time processing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎭</span>
              </div>
              <h4 className="font-semibold mb-2">Multimodal AI</h4>
              <p className="text-xs opacity-75">Multi-sensor processing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚛️</span>
              </div>
              <h4 className="font-semibold mb-2">Quantum AI</h4>
              <p className="text-xs opacity-75">Next-gen computing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚖️</span>
              </div>
              <h4 className="font-semibold mb-2">AI Governance</h4>
              <p className="text-xs opacity-75">Ethical frameworks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}