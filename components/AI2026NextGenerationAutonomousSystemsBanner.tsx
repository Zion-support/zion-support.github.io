import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Brain, Cpu, TrendingUp } from 'lucide-react';

const AI2026NextGenerationAutonomousSystemsBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">NEW BREAKTHROUGH</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI 2026: Next-Generation Autonomous Systems
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary breakthrough featuring <span className="text-yellow-400 font-semibold">99.99% autonomous operations</span>, 
            <span className="text-purple-400 font-semibold"> quantum consciousness integration</span>, and 
            <span className="text-pink-400 font-semibold"> infinite scalability</span> that transcends all limitations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Brain className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Neural Mesh Consciousness</h3>
              <p className="text-blue-100 text-sm">Advanced neural networks with emergent consciousness and distributed intelligence</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Cpu className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Quantum Decision Making</h3>
              <p className="text-blue-100 text-sm">Quantum-enhanced reasoning with infinite processing power and consciousness</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Infinite Scalability</h3>
              <p className="text-blue-100 text-sm">Systems that grow with your business without computational limitations</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-4xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Revolutionary Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.99%</div>
                <div className="text-blue-100">Operational Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">300%</div>
                <div className="text-blue-100">Productivity Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$2.5B</div>
                <div className="text-blue-100">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">∞</div>
                <div className="text-blue-100">Scalability</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/blog/ai-2026-next-generation-autonomous-systems"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
            >
              <span>Read Full Article</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/consultation"
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border border-white/30 hover:border-white/50 flex items-center space-x-2"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <p className="text-blue-200 text-sm mt-6 max-w-2xl mx-auto">
            Transform your enterprise with the most advanced AI technology ever created. 
            Join Fortune 500 companies already experiencing the autonomous revolution.
          </p>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default AI2026NextGenerationAutonomousSystemsBanner;