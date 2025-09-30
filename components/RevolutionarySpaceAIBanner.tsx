import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Rocket, Zap, Globe, Satellite } from 'lucide-react';

export default function RevolutionarySpaceAIBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl"></div>
        {/* Stars */}
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-20 right-1/3 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-32 left-1/2 w-1.5 h-1.5 bg-white rounded-full"></div>
        <div className="absolute bottom-32 right-1/4 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-white rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              🚀 SPACE AI REVOLUTION
            </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              $100M SUCCESS STORY
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Revolutionary Space AI
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              $100M Mission Success
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how AI is revolutionizing space operations. From autonomous missions to satellite 
            management, see how Fortune 500 companies are achieving unprecedented success in space.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/case-studies/ai-space-mission-success-2026"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <Rocket className="w-6 h-6" />
                View $100M Success Story
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
            <Link
              href="/blog/ai-space-tech-revolution-2026"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-900 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <Satellite className="w-6 h-6" />
                Read Space AI Guide
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">$100M+</div>
              <div className="text-gray-300">Mission Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.8%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">85%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">90%</div>
              <div className="text-gray-300">Faster Decisions</div>
            </div>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Main Case Study */}
          <Link href="/case-studies/ai-space-mission-success-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-black" />
                </div>
                <div>
                  <span className="bg-green-400 text-black px-3 py-1 rounded-full text-xs font-bold">CASE STUDY</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                AI Space Mission Success: $100M Autonomous Operations
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                See how a Fortune 500 aerospace company achieved $100M in value through AI-powered 
                autonomous space operations. 99.8% mission success rate and revolutionary space technology.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">$100M+</div>
                  <div className="text-xs text-gray-400">Value Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">99.8%</div>
                  <div className="text-xs text-gray-400">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">85%</div>
                  <div className="text-xs text-gray-400">Cost Reduction</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Fortune 500
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    18 min read
                  </div>
                </div>
                <div className="flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                  Read Case Study →
                </div>
              </div>
            </div>
          </Link>

          {/* Space AI Technologies */}
          <div className="space-y-6">
            <Link href="/blog/ai-space-tech-revolution-2026" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                    <Satellite className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="bg-purple-400 text-white px-2 py-1 rounded-full text-xs font-bold">GUIDE</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  AI Space Tech Revolution 2026
                </h4>
                <p className="text-gray-300 mb-4">
                  Complete guide to AI-powered space technologies transforming aerospace operations.
                </p>
                <div className="flex items-center text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                  Read Guide →
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-autonomous-space-operations-2026" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="bg-blue-400 text-white px-2 py-1 rounded-full text-xs font-bold">TECHNOLOGY</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  Autonomous Space Operations
                </h4>
                <p className="text-gray-300 mb-4">
                  Self-managing space systems with 99.9% uptime and zero-touch operations.
                </p>
                <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                  Learn More →
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-satellite-constellation-management-2026" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="bg-green-400 text-black px-2 py-1 rounded-full text-xs font-bold">CASE STUDY</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-green-400 transition-colors">
                  Satellite Constellation Management
                </h4>
                <p className="text-gray-300 mb-4">
                  AI-powered management of 1000+ satellite constellations with 99.9% efficiency.
                </p>
                <div className="flex items-center text-green-400 font-semibold group-hover:text-green-300 transition-colors">
                  View Case Study →
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Technology Showcase */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-white/10">
          <h2 className="text-3xl font-bold text-center mb-8">Space AI Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Autonomous Missions</h3>
              <p className="text-gray-300 text-sm">
                AI-powered mission planning and execution with real-time decision making and 99.8% success rate.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Satellite className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Satellite Management</h3>
              <p className="text-gray-300 text-sm">
                Intelligent satellite constellation management with predictive maintenance and optimization.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Space Manufacturing</h3>
              <p className="text-gray-300 text-sm">
                AI-driven space-based manufacturing and assembly with autonomous quality control.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Space AI Journey?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your aerospace operations with cutting-edge AI technologies. Get expert guidance 
              and achieve unprecedented success in space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-900 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}