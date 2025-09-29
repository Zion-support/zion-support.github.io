import React from 'react';
import Link from 'next/link';
import { Rocket, Satellite, Globe, Zap } from 'lucide-react';

export default function RevolutionarySpaceAIBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500 rounded-full opacity-25 animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-cyan-500 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🚀 NEW 2026 BREAKTHROUGH
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              SPACE AI REVOLUTION
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Space Technology
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              {' '}2026
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the groundbreaking AI space technologies that are transforming space exploration, 
            satellite operations, and interplanetary missions with unprecedented success rates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/blog/ai-space-tech-revolution-2026"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Space AI Revolution →
            </Link>
            <Link
              href="/case-studies/ai-space-mission-success-2026"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-blue-900 transition-all"
            >
              View $100M Success Story
            </Link>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Autonomous Missions</h3>
            <p className="text-blue-100 text-sm mb-3">99.9% success rate with fully autonomous space operations</p>
            <div className="text-2xl font-bold text-cyan-400">100%</div>
            <div className="text-xs text-blue-200">Mission Success</div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Satellite className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Satellite Intelligence</h3>
            <p className="text-blue-100 text-sm mb-3">Real-time processing of 10TB+ data per second</p>
            <div className="text-2xl font-bold text-purple-400">10TB/s</div>
            <div className="text-xs text-blue-200">Data Processing</div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Mars Colonization</h3>
            <p className="text-blue-100 text-sm mb-3">AI-powered support for Mars settlement missions</p>
            <div className="text-2xl font-bold text-green-400">$100M</div>
            <div className="text-xs text-blue-200">Cost Savings</div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Deep Space AI</h3>
            <p className="text-blue-100 text-sm mb-3">Sub-second decision making for interplanetary missions</p>
            <div className="text-2xl font-bold text-orange-400">0.1s</div>
            <div className="text-xs text-blue-200">Response Time</div>
          </div>
        </div>

        {/* Featured Content Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/blog/ai-space-tech-revolution-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-cyan-400/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    AI Space Technology Revolution 2026
                  </h3>
                  <p className="text-blue-100 text-sm">Next-Generation Space Intelligence</p>
                </div>
              </div>
              <p className="text-blue-100 mb-4">
                Explore the revolutionary AI space technologies that are transforming space exploration, 
                satellite operations, and interplanetary missions with unprecedented success rates.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-blue-200">28 min read</div>
                <div className="flex items-center text-cyan-400 font-semibold text-sm group-hover:text-cyan-300 transition-colors">
                  Read Complete Guide →
                </div>
              </div>
            </div>
          </Link>
          
          <Link href="/case-studies/ai-space-mission-success-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-green-400/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                    $100M Mars Mission Success
                  </h3>
                  <p className="text-blue-100 text-sm">Fortune 500 Case Study</p>
                </div>
              </div>
              <p className="text-blue-100 mb-4">
                See how a Fortune 500 aerospace company achieved $100M Mars mission success using 
                autonomous AI systems with 100% mission success rate.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-blue-200">22 min read</div>
                <div className="flex items-center text-green-400 font-semibold text-sm group-hover:text-green-300 transition-colors">
                  View Success Story →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-blue-100 mb-6 text-lg">
            Join the space AI revolution and transform your space operations with cutting-edge technology
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Rocket className="w-5 h-5 mr-2" />
            Start Your Space AI Journey
          </Link>
        </div>
      </div>
    </section>
  );
}