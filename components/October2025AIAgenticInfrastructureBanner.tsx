// import React from 'react';
import { Brain, Network, Zap, TrendingUp } from 'lucide-react';

export default function October2025AIAgenticInfrastructureBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 py-16 px-4 sm:px-6 lg:px-8 border-y-4 border-purple-400">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), 
                           radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
          backgroundSize: '100px 100px',
          animation: 'drift 20s linear infinite'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Brain className="w-12 h-12 text-purple-300 animate-pulse" />
            <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
              🚀 OCTOBER 2025 - ABSOLUTE NEWEST! 🚀
            </span>
            <Network className="w-12 h-12 text-blue-300 animate-pulse" />
          </div>
          
          <h2 className="text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            AI Agentic Infrastructure Revolution
          </h2>
          
          <div className="inline-flex items-center gap-2 bg-green-500/20 border-2 border-green-400 rounded-full px-6 py-3 mb-6">
            <Zap className="w-6 h-6 text-yellow-300" />
            <span className="text-2xl font-bold text-green-300">JUST PUBLISHED TODAY</span>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-purple-400 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-500 rounded-full p-3">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Self-Organizing Agents</h3>
            </div>
            <p className="text-purple-100 text-lg leading-relaxed">
              💎 <strong className="text-yellow-300">10,000+</strong> autonomous AI agents coordinating in real-time
              <br/>
              💎 <strong className="text-green-300">99.97%</strong> task completion accuracy
              <br/>
              💎 <strong className="text-blue-300">Zero</strong> human intervention required
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-blue-400 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-500 rounded-full p-3">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Proven Results</h3>
            </div>
            <p className="text-blue-100 text-lg leading-relaxed">
              💰 <strong className="text-yellow-300">$6.7B</strong> Fortune 100 success story
              <br/>
              📈 <strong className="text-green-300">3,240%</strong> ROI achieved
              <br/>
              ⚡ <strong className="text-purple-300">95%</strong> operational cost reduction
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-green-400 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-500 rounded-full p-3">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Enterprise Platform</h3>
            </div>
            <p className="text-green-100 text-lg leading-relaxed">
              🏢 <strong className="text-yellow-300">850+</strong> enterprise deployments
              <br/>
              🌐 <strong className="text-blue-300">127</strong> countries worldwide
              <br/>
              🔒 <strong className="text-purple-300">100%</strong> security compliance
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a 
              href="/services/ai-agentic-infrastructure" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-xl px-12 py-5 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white/30"
            >
              🚀 Explore Platform
            </a>
            <a 
              href="/case-studies/agentic-infrastructure" 
              className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold text-xl px-12 py-5 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white/30"
            >
              💎 View Success Story
            </a>
          </div>
          
          <p className="mt-8 text-purple-200 text-xl font-semibold">
            ⚡ Limited Time: Free Enterprise Assessment - $50K Value!
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(100px, 100px); }
        }
      `}</style>
    </div>
  );
}
