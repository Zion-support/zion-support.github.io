import React from 'react';
import Link from 'next/link';
import { TrendingUp, ArrowRight, Zap, Brain, Target } from 'lucide-react';

export default function AITrends2025Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            AI Trends 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Future of AI is Here
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the cutting-edge AI trends and technologies that are reshaping industries in 2025. 
            Stay ahead with our comprehensive AI insights and implementation strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Autonomous AI Systems</h3>
            </div>
            <p className="text-white/80 mb-4">
              Self-managing AI systems that can learn, adapt, and optimize without human intervention.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">95% Automation</span>
              <Link href="/blog/ai-autonomous-systems-2025" className="text-white hover:text-yellow-300 transition-colors">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Edge AI Computing</h3>
            </div>
            <p className="text-white/80 mb-4">
              Real-time AI processing at the edge with sub-50ms response times and offline capabilities.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">1000x Faster</span>
              <Link href="/blog/ai-edge-computing-2025" className="text-white hover:text-yellow-300 transition-colors">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">AI-Powered Automation</h3>
            </div>
            <p className="text-white/80 mb-4">
              Complete business process automation with intelligent decision-making and self-optimization.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">80% Efficiency</span>
              <Link href="/blog/ai-automation-2025" className="text-white hover:text-yellow-300 transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/blog/ai-trends-2025"
            className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            Explore All AI Trends 2025
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}