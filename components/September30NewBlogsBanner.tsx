import React from 'react';
import { Link } from 'react-router-dom';

export default function September30NewBlogsBanner() {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 py-16 px-4 sm:px-6 lg:px-8 rounded-2xl my-12 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <span className="text-white font-semibold text-sm">🎉 JUST PUBLISHED - September 30, 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            3 Revolutionary AI Breakthroughs You Can't Miss
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover cutting-edge technologies that are transforming enterprise security, sustainability, and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Zero-Day Threat Detection */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all hover:scale-105">
            <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-3xl">🛡️</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 text-center">
              AI Zero-Day Threat Detection
            </h3>
            <p className="text-white/80 mb-4 text-center">
              Detect and neutralize cyber threats 99.7% faster with autonomous AI security systems
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">99.7%</div>
                <div className="text-xs text-white/70">Faster Detection</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">$45M</div>
                <div className="text-xs text-white/70">Cost Savings</div>
              </div>
            </div>
            <Link
              href="/blog/ai-zero-day-threat-detection-2025"
              className="block w-full bg-white text-red-600 font-semibold py-3 px-6 rounded-lg text-center hover:bg-gray-100 transition-colors"
            >
              Read Case Study →
            </Link>
          </div>

          {/* Sustainable AI */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all hover:scale-105">
            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-3xl">🌱</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 text-center">
              Sustainable AI & Green Computing
            </h3>
            <p className="text-white/80 mb-4 text-center">
              Achieve 85% carbon reduction and net-zero operations while saving $30M+ annually
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">85%</div>
                <div className="text-xs text-white/70">Carbon Reduction</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">$30M+</div>
                <div className="text-xs text-white/70">Annual Savings</div>
              </div>
            </div>
            <Link
              href="/blog/sustainable-ai-green-computing-2025"
              className="block w-full bg-white text-green-600 font-semibold py-3 px-6 rounded-lg text-center hover:bg-gray-100 transition-colors"
            >
              Explore Green AI →
            </Link>
          </div>

          {/* Innovation Labs */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all hover:scale-105">
            <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-3xl">💡</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 text-center">
              AI Innovation Labs
            </h3>
            <p className="text-white/80 mb-4 text-center">
              Accelerate product development 10x faster with 95% success rates and $200M in value creation
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">10x</div>
                <div className="text-xs text-white/70">Faster Development</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">$200M</div>
                <div className="text-xs text-white/70">Value Created</div>
              </div>
            </div>
            <Link
              href="/blog/ai-innovation-labs-product-development-2025"
              className="block w-full bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg text-center hover:bg-gray-100 transition-colors"
            >
              Discover Innovation →
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/ai-trustworthy-agents-2026"
              className="inline-block bg-white text-purple-700 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              New: Trustworthy Agents 2026 →
            </Link>
            <Link
              href="/blog/ai-agent-security-blueprint-2026"
              className="inline-block bg-white text-teal-700 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              New: Agent Security Blueprint →
            </Link>
            <Link
              href="/blog"
              className="inline-block bg-white/90 text-indigo-700 font-semibold py-4 px-8 rounded-lg hover:bg-white transition-colors text-lg"
            >
              View All Latest Articles →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}