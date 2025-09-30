import React from 'react';
import Link from 'next/link';

export default function January2025InnovationShowcaseBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20">
      {/* Dynamic Background Animation */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-7xl mx-auto">
          {/* Innovation Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8 animate-pulse">
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
              🌟 BREAKTHROUGH: January 2025 AI Innovation Showcase
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Innovations Transforming Enterprise Operations
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-16 font-semibold max-w-5xl mx-auto">
            Discover the latest breakthroughs in multimodal AI, edge computing, and industrial automation that are reshaping the future of business operations and driving unprecedented ROI.
          </p>

          {/* Innovation Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Multimodal AI Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-indigo-500/50 transition-all duration-300 group transform hover:scale-105">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-2">Multimodal AI Revolution</h3>
                <p className="text-indigo-400 font-semibold">Enterprise Transformation</p>
              </div>
              <p className="text-gray-300 mb-6 text-center">
                Combining text, images, audio, and video processing for unprecedented business insights and automation capabilities.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Processing Speed</span>
                  <span className="text-sm font-bold text-indigo-400">1000x Faster</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Accuracy Improvement</span>
                  <span className="text-sm font-bold text-purple-400">94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Cost Reduction</span>
                  <span className="text-sm font-bold text-green-400">67%</span>
                </div>
              </div>
              <Link 
                href="/blog/ai-2025-multimodal-ai-enterprise-revolution"
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 inline-block text-center"
              >
                Explore Innovation →
              </Link>
            </div>

            {/* Edge AI Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300 group transform hover:scale-105">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-2">Edge AI Industrial</h3>
                <p className="text-purple-400 font-semibold">Real-Time Intelligence</p>
              </div>
              <p className="text-gray-300 mb-6 text-center">
                Bringing real-time AI processing to industrial environments for instant decision-making and optimization.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Latency Reduction</span>
                  <span className="text-sm font-bold text-purple-400">99.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Downtime Reduction</span>
                  <span className="text-sm font-bold text-blue-400">78%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Energy Savings</span>
                  <span className="text-sm font-bold text-green-400">45%</span>
                </div>
              </div>
              <Link 
                href="/blog/ai-2025-edge-ai-industrial-transformation"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 inline-block text-center"
              >
                Discover Technology →
              </Link>
            </div>

            {/* Success Story Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-500/50 transition-all duration-300 group transform hover:scale-105">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-white mb-2">$15.2B Success</h3>
                <p className="text-green-400 font-semibold">Manufacturing Case Study</p>
              </div>
              <p className="text-gray-300 mb-6 text-center">
                Real-world results from a Fortune 100 manufacturer achieving unprecedented savings with AI-powered predictive maintenance.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Total Savings</span>
                  <span className="text-sm font-bold text-green-400">$15.2B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">ROI</span>
                  <span className="text-sm font-bold text-cyan-400">624%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Payback Period</span>
                  <span className="text-sm font-bold text-blue-400">8 Months</span>
                </div>
              </div>
              <Link 
                href="/case-studies/ai-2025-manufacturing-predictive-maintenance-15-billion-savings"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 inline-block text-center"
              >
                Read Case Study →
              </Link>
            </div>
          </div>

          {/* Industry Impact Statistics */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Industry Impact Statistics</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-indigo-400 mb-2">200+</div>
                <div className="text-sm text-gray-300">Manufacturing Facilities</div>
                <div className="text-xs text-indigo-300">Transformed Globally</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-purple-400 mb-2">2.5M</div>
                <div className="text-sm text-gray-300">IoT Sensors</div>
                <div className="text-xs text-purple-300">Deployed Worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-green-400 mb-2">50K+</div>
                <div className="text-sm text-gray-300">Equipment Units</div>
                <div className="text-xs text-green-300">Monitored in Real-Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-cyan-400 mb-2">45</div>
                <div className="text-sm text-gray-300">Countries</div>
                <div className="text-xs text-cyan-300">Global Implementation</div>
              </div>
            </div>
          </div>

          {/* Technology Stack Preview */}
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-8 border border-blue-500/30 mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Advanced Technology Stack</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🧠</div>
                <h4 className="text-lg font-bold text-white mb-2">Machine Learning</h4>
                <p className="text-sm text-gray-300">Advanced ensemble algorithms for predictive analytics</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📊</div>
                <h4 className="text-lg font-bold text-white mb-2">Real-Time Analytics</h4>
                <p className="text-sm text-gray-300">Stream processing with Apache Kafka integration</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">☁️</div>
                <h4 className="text-lg font-bold text-white mb-2">Cloud Infrastructure</h4>
                <p className="text-sm text-gray-300">Multi-cloud strategy with edge computing</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🔒</div>
                <h4 className="text-lg font-bold text-white mb-2">Security & Compliance</h4>
                <p className="text-sm text-gray-300">Enterprise-grade security with end-to-end encryption</p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Operations?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join leading enterprises worldwide in leveraging these breakthrough AI technologies to achieve unprecedented operational excellence and business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
              >
                Get Expert Consultation
              </Link>
              <Link 
                href="/services" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Explore Our Solutions
              </Link>
              <Link 
                href="/blog" 
                className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Read More Insights
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}