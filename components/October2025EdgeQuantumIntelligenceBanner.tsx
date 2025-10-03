// import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Zap, TrendingUp, Activity } from 'lucide-react';

const October2025EdgeQuantumIntelligenceBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 text-white py-16 px-6 my-8 rounded-2xl shadow-2xl">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-4 space-x-2">
          <Cpu className="w-8 h-8 text-yellow-300 animate-bounce" />
          <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-bold text-sm">
            ⚡ BREAKTHROUGH - OCTOBER 1, 2025 ⚡
          </span>
          <Activity className="w-8 h-8 text-yellow-300 animate-bounce" />
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-white to-pink-300">
            Edge-Native Quantum Intelligence
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-center mb-6 font-semibold text-purple-100">
          Revolutionary Distributed Quantum AI at the Edge
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <div className="text-3xl font-bold text-yellow-300">$8.9B</div>
            <div className="text-sm text-purple-200">Value Creation</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <div className="text-3xl font-bold text-green-300">&lt;1ms</div>
            <div className="text-sm text-purple-200">Decision Latency</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <div className="text-3xl font-bold text-cyan-300">99.99%</div>
            <div className="text-sm text-purple-200">System Uptime</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <div className="text-3xl font-bold text-pink-300">5,200%</div>
            <div className="text-sm text-purple-200">Performance Gain</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-6 border border-white/20">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
            <Zap className="w-6 h-6 mr-2 text-yellow-300" />
            Quantum Edge Breakthrough Capabilities
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start space-x-2">
              <span className="text-green-400 font-bold">✓</span>
              <span>Quantum Edge Processors delivering 10,000x performance</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-400 font-bold">✓</span>
              <span>Distributed Quantum Mesh for collaborative computation</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-400 font-bold">✓</span>
              <span>Sub-Millisecond AI inference at massive scale</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-400 font-bold">✓</span>
              <span>Federated Quantum Learning across edge nodes</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-400 font-bold">✓</span>
              <span>847 Billion daily inferences at the edge</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-400 font-bold">✓</span>
              <span>95% reduction in cloud computing costs</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-900/50 to-purple-900/50 backdrop-blur-md rounded-xl p-6 mb-6 border border-green-400/30">
          <h3 className="text-xl font-bold mb-3 flex items-center">
            <TrendingUp className="w-6 h-6 mr-2 text-green-300" />
            Fortune 100 Manufacturing Success
          </h3>
          <p className="text-purple-100 mb-3">
            Global manufacturer with 2,847 smart factories achieves <strong className="text-yellow-300">$8.9B in value creation</strong>, 
            processes <strong className="text-green-300">847 billion AI inferences daily</strong>, and reduces decision latency by 
            <strong className="text-cyan-300"> 1,210x</strong> with edge-native quantum intelligence.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-green-500/30 px-3 py-1 rounded-full border border-green-400">0.7ms Latency</span>
            <span className="bg-blue-500/30 px-3 py-1 rounded-full border border-blue-400">99.8% Accuracy</span>
            <span className="bg-purple-500/30 px-3 py-1 rounded-full border border-purple-400">84% OEE Improvement</span>
          </div>
        </div>

        <div className="bg-pink-900/30 backdrop-blur-md rounded-xl p-6 mb-6 border border-pink-400/30">
          <h3 className="text-xl font-bold mb-3 text-center">🌐 Industry Applications</h3>
          <div className="grid md:grid-cols-3 gap-3 text-sm">
            <div className="text-center">
              <div className="font-bold text-cyan-300">Autonomous Vehicles</div>
              <div className="text-purple-200">99.9% accuracy, &lt;0.1ms latency</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-green-300">Smart Manufacturing</div>
              <div className="text-purple-200">97% defect reduction</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-yellow-300">Smart Cities</div>
              <div className="text-purple-200">47% traffic reduction</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/blog/ai-2025-october-edge-native-quantum-intelligence"
            className="inline-flex items-center bg-gradient-to-r from-pink-400 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-pink-300 hover:to-purple-400 transition-all transform hover:scale-105 shadow-lg"
          >
            <Cpu className="w-6 h-6 mr-2" />
            Explore Edge Quantum Intelligence
            <span className="ml-2">→</span>
          </Link>
        </div>

        <p className="text-center text-purple-200 text-sm mt-4">
          Complete guide to edge-native quantum computing • Real-time AI inference • Distributed quantum mesh architecture
        </p>
      </div>
    </div>
  );
};

export default October2025EdgeQuantumIntelligenceBanner;
