import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Zap, TrendingUp } from 'lucide-react';

const October2025QuantumCybersecurityMeshBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-16 px-6 my-8 rounded-2xl shadow-2xl">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-4 space-x-2">
          <Shield className="w-8 h-8 text-yellow-300 animate-bounce" />
          <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-bold text-sm">
            🛡️ JUST PUBLISHED - OCTOBER 1, 2025 🛡️
          </span>
          <Lock className="w-8 h-8 text-yellow-300 animate-bounce" />
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-white to-cyan-300">
            Quantum Cybersecurity Mesh Architecture
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-center mb-6 font-semibold text-blue-100">
          Revolutionary Zero-Trust Security with Quantum Encryption
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <div className="text-3xl font-bold text-yellow-300">$12.4B</div>
            <div className="text-sm text-blue-200">Breach Prevention</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <div className="text-3xl font-bold text-green-300">99.99%</div>
            <div className="text-sm text-blue-200">Threat Detection</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <div className="text-3xl font-bold text-cyan-300">0.3ms</div>
            <div className="text-sm text-blue-200">Response Time</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <div className="text-3xl font-bold text-purple-300">4,700%</div>
            <div className="text-sm text-blue-200">Security ROI</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-6 border border-white/20">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
            <Zap className="w-6 h-6 mr-2 text-yellow-300" />
            Revolutionary Security Capabilities
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start space-x-2">
              <span className="text-green-400 font-bold">✓</span>
              <span>Post-Quantum Cryptography protecting against quantum attacks</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-400 font-bold">✓</span>
              <span>AI-Driven Threat Intelligence analyzing 847B events daily</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-400 font-bold">✓</span>
              <span>Zero-Trust Architecture with continuous verification</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-400 font-bold">✓</span>
              <span>Distributed Security Mesh across all enterprise nodes</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-400 font-bold">✓</span>
              <span>Autonomous Response neutralizing threats in milliseconds</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-400 font-bold">✓</span>
              <span>Self-Healing Infrastructure with automatic patching</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 backdrop-blur-md rounded-xl p-6 mb-6 border border-green-400/30">
          <h3 className="text-xl font-bold mb-3 flex items-center">
            <TrendingUp className="w-6 h-6 mr-2 text-green-300" />
            Fortune 50 Success Story
          </h3>
          <p className="text-blue-100 mb-3">
            Global financial institution with $2.8 trillion in assets prevents <strong className="text-yellow-300">$12.4B in breaches</strong>, 
            achieves <strong className="text-green-300">99.99% threat detection</strong>, and reduces security operations costs by 
            <strong className="text-cyan-300"> $284M annually</strong> with quantum security mesh architecture.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-green-500/30 px-3 py-1 rounded-full border border-green-400">Zero Ransomware Attacks</span>
            <span className="bg-blue-500/30 px-3 py-1 rounded-full border border-blue-400">100% Compliance</span>
            <span className="bg-purple-500/30 px-3 py-1 rounded-full border border-purple-400">92% Reduced Workload</span>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/blog/ai-2025-october-quantum-cybersecurity-mesh-architecture"
            className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all transform hover:scale-105 shadow-lg"
          >
            <Shield className="w-6 h-6 mr-2" />
            Discover Quantum Security Architecture
            <span className="ml-2">→</span>
          </Link>
        </div>

        <p className="text-center text-blue-200 text-sm mt-4">
          Complete guide to quantum-enhanced cybersecurity mesh implementation • Zero-trust framework • AI threat intelligence
        </p>
      </div>
    </div>
  );
};

export default October2025QuantumCybersecurityMeshBanner;
