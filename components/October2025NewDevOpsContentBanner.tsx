// import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025NewDevOpsContentBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-emerald-900 to-orange-900 text-white py-16 px-6">
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 JUST PUBLISHED: OCTOBER 2, 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-emerald-400 to-orange-400 bg-clip-text text-transparent">
            Revolutionary DevOps & Data Platform Breakthroughs
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover the cutting-edge technologies transforming enterprise operations: Autonomous Testing, 
            Intelligent Observability, and Data Mesh Architectures delivering unprecedented results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1: Autonomous Testing */}
          <Link 
            to="/blog/ai-2025-october-2-autonomous-testing-cicd-revolution"
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-3 text-purple-300">Autonomous Testing & CI/CD Revolution</h3>
            <p className="text-white/80 mb-4">
              Self-healing pipelines that never break. Achieve 99.9% reliability, 95% faster deployments, 
              and zero-downtime releases.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-purple-300 font-bold">99.9%</div>
                <div className="text-white/70">Reliability</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-pink-300 font-bold">95%</div>
                <div className="text-white/70">Faster Deploy</div>
              </div>
            </div>
            <div className="mt-4 text-purple-400 font-semibold flex items-center">
              Read Full Article
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Card 2: Intelligent Observability */}
          <Link 
            to="/blog/ai-2025-october-2-intelligent-observability-unified-platform"
            className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm border border-emerald-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/50"
          >
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-3 text-emerald-300">Intelligent Observability Platform</h3>
            <p className="text-white/80 mb-4">
              AI-powered platform that predicts failures before they happen. 92% MTTR reduction and 
              99.99% uptime guaranteed.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-emerald-300 font-bold">92%</div>
                <div className="text-white/70">MTTR Reduction</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-teal-300 font-bold">$25M+</div>
                <div className="text-white/70">Annual Savings</div>
              </div>
            </div>
            <div className="mt-4 text-emerald-400 font-semibold flex items-center">
              Read Full Article
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Card 3: Data Mesh */}
          <Link 
            to="/blog/ai-2025-october-2-enterprise-data-mesh-architecture-implementation"
            className="bg-gradient-to-br from-orange-600/20 to-amber-600/20 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50"
          >
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-2xl font-bold mb-3 text-orange-300">Enterprise Data Mesh Architecture</h3>
            <p className="text-white/80 mb-4">
              Decentralized data platform enabling domain-driven ownership. 10x faster insights and 
              85% better data quality.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-orange-300 font-bold">10x</div>
                <div className="text-white/70">Faster Insights</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-amber-300 font-bold">$40M+</div>
                <div className="text-white/70">Annual Value</div>
              </div>
            </div>
            <div className="mt-4 text-orange-400 font-semibold flex items-center">
              Read Full Article
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-4">Transform Your Enterprise Operations Today</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Our experts have helped Fortune 500 companies implement these cutting-edge solutions. 
            Ready to achieve similar results? Let's talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="inline-block bg-gradient-to-r from-purple-500 via-emerald-500 to-orange-500 text-white font-bold py-4 px-8 rounded-xl hover:from-purple-600 hover:via-emerald-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/blog"
              className="inline-block bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold py-4 px-8 rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              Explore All Articles
            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-3xl font-bold text-purple-400">99.9%</div>
            <div className="text-sm text-white/70">System Reliability</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-3xl font-bold text-emerald-400">92%</div>
            <div className="text-sm text-white/70">Faster Resolution</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-3xl font-bold text-orange-400">10x</div>
            <div className="text-sm text-white/70">Insight Speed</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-3xl font-bold text-pink-400">$83M+</div>
            <div className="text-sm text-white/70">Combined Value</div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
    </div>
  );
}
