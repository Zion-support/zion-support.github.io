import React from 'react';
import Link from 'next/link';

export default function AIInnovationShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                🚀 Innovation Hub
              </span>
              <span className="text-violet-200 text-sm">Latest Breakthroughs</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              AI Innovation Showcase: Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-violet-100 mb-6 leading-relaxed">
              Explore the latest AI innovations and breakthrough technologies. From edge computing to autonomous systems, discover what's possible with next-generation AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/innovation/ai-breakthroughs-2025"
                className="bg-white text-violet-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Explore Innovations
              </Link>
              <Link
                href="/services/ai-innovation-consulting"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-violet-600 transition-colors text-center"
              >
                Partner with Us
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">Innovation Areas</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>Edge AI Computing</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🤖</span>
                <span>Autonomous Agents</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🧠</span>
                <span>Advanced Neural Networks</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔮</span>
                <span>Predictive Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}