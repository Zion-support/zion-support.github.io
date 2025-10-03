// import React from 'react';
import { Globe, Users, Shield, TrendingUp } from 'lucide-react';

export default function October2025DistributedAIEcosystemBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-violet-900 via-fuchsia-900 to-pink-900 py-16 px-4 sm:px-6 lg:px-8 border-y-4 border-fuchsia-400">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated Globe Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-white rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Globe className="w-12 h-12 text-fuchsia-300 animate-pulse" />
            <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-pink-300">
              🌐 OCTOBER 2025 MEGA LAUNCH 🌐
            </span>
            <Users className="w-12 h-12 text-pink-300 animate-pulse" />
          </div>
          
          <h2 className="text-6xl font-extrabold text-white mb-4 drop-shadow-2xl leading-tight">
            Distributed AI Ecosystem Platform
          </h2>
          
          <div className="inline-flex items-center gap-2 bg-pink-500/20 border-2 border-pink-400 rounded-full px-6 py-3 mb-6">
            <Shield className="w-6 h-6 text-pink-300" />
            <span className="text-2xl font-bold text-pink-300">GLOBAL INFRASTRUCTURE READY</span>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-violet-800/50 to-fuchsia-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-violet-400 hover:scale-105 transition-all duration-300 shadow-2xl">
            <div className="bg-violet-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Globe className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4 text-center">Global Scale</h3>
            <div className="space-y-3 text-violet-100 text-lg">
              <p>🌍 <strong className="text-yellow-300">250,000+</strong> distributed nodes worldwide</p>
              <p>⚡ <strong className="text-green-300">&lt;5ms</strong> global latency</p>
              <p>🔄 <strong className="text-blue-300">99.999%</strong> uptime SLA</p>
              <p>📡 <strong className="text-pink-300">Real-time</strong> synchronization</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-fuchsia-800/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-fuchsia-400 hover:scale-105 transition-all duration-300 shadow-2xl">
            <div className="bg-fuchsia-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Users className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4 text-center">Collaborative AI</h3>
            <div className="space-y-3 text-fuchsia-100 text-lg">
              <p>🤝 <strong className="text-yellow-300">Multi-agent</strong> cooperation</p>
              <p>🧠 <strong className="text-green-300">Collective</strong> intelligence</p>
              <p>🔐 <strong className="text-blue-300">Zero-trust</strong> security</p>
              <p>🎯 <strong className="text-pink-300">Autonomous</strong> decision-making</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-800/50 to-rose-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-pink-400 hover:scale-105 transition-all duration-300 shadow-2xl">
            <div className="bg-pink-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4 text-center">Enterprise Value</h3>
            <div className="space-y-3 text-pink-100 text-lg">
              <p>💰 <strong className="text-yellow-300">$18.7B</strong> proven ROI</p>
              <p>📈 <strong className="text-green-300">5,840%</strong> growth rate</p>
              <p>🏢 <strong className="text-blue-300">2,400+</strong> enterprises</p>
              <p>🌟 <strong className="text-pink-300">Zero</strong> deployment failures</p>
            </div>
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-gradient-to-r from-violet-800/30 to-pink-800/30 backdrop-blur-lg rounded-2xl p-10 border-2 border-fuchsia-400 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-16 h-16 text-green-400" />
            <div>
              <h3 className="text-4xl font-black text-white">Fortune 10 Success Story</h3>
              <p className="text-fuchsia-200 text-xl">Global Technology Leader</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-5xl font-black text-green-400 mb-2">$18.7B</p>
              <p className="text-white text-lg">Annual Value Created</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-5xl font-black text-blue-400 mb-2">94%</p>
              <p className="text-white text-lg">Cost Reduction</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-5xl font-black text-yellow-400 mb-2">10x</p>
              <p className="text-white text-lg">Performance Boost</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-5xl font-black text-pink-400 mb-2">24/7</p>
              <p className="text-white text-lg">Autonomous Operations</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a 
              href="/services/distributed-ai-ecosystem" 
              className="group relative bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-bold text-xl px-12 py-5 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white/30"
            >
              <span className="relative z-10">🚀 Launch Your Ecosystem</span>
            </a>
            <a 
              href="/case-studies/distributed-ai-platform" 
              className="group relative bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-bold text-xl px-12 py-5 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white/30"
            >
              <span className="relative z-10">💎 $18.7B Success Story</span>
            </a>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-400 rounded-2xl p-6 inline-block">
            <p className="text-2xl font-black text-yellow-300 mb-2">🎁 EXCLUSIVE LAUNCH OFFER</p>
            <p className="text-xl text-white font-semibold">Free 6-Month Enterprise License + $100K Implementation Credit</p>
            <p className="text-lg text-yellow-200 mt-2">⏰ Limited to First 50 Companies - 12 Spots Remaining</p>
          </div>
        </div>
      </div>
    </div>
  );
}
