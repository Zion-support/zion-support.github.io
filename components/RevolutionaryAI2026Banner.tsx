import React from 'react';
import Link from 'next/link';

const RevolutionaryAI2026Banner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400/20 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400/20 rounded-full animate-ping"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">Revolutionary AI 2026</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            The Future of AI is
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {' '}Here Now
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most advanced AI solutions that are transforming enterprises worldwide. 
            Achieve 400% ROI, 85% cost reduction, and 95% efficiency gains with our revolutionary AI platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/services/ai-enterprise-transformation"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105"
            >
              🚀 Start Your AI Journey
            </Link>
            <Link
              href="/case-studies/ai-transformation-success"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              📊 View Success Stories
            </Link>
          </div>
        </div>
        
        {/* Feature highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-3">Neural Superintelligence</h3>
            <p className="text-blue-100">
              Advanced neural networks that learn and adapt in real-time, delivering unprecedented accuracy and performance.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Quantum Processing</h3>
            <p className="text-blue-100">
              Quantum-enhanced AI processing that delivers 1000x faster computation for complex enterprise tasks.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-3">Autonomous Systems</h3>
            <p className="text-blue-100">
              Self-managing AI systems that operate independently, making intelligent decisions without human intervention.
            </p>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-cyan-400 mb-2">400%</div>
            <div className="text-blue-200">Average ROI</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-400 mb-2">85%</div>
            <div className="text-blue-200">Cost Reduction</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-blue-200">Efficiency Gains</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-blue-200">Autonomous Operation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryAI2026Banner;