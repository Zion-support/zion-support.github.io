import React from 'react';
import { Link } from 'react-router-dom';

export default function QuantumNeuralSuperintelligenceBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 animate-pulse">
            <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
              ⚛️ QUANTUM NEURAL SUPERINTELLIGENCE
            </span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            The Next Evolution in AI
          </h2>
          
          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            10,000x Processing Power • 99.9% Accuracy • $8.5B+ Proven ROI
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-3xl font-extrabold text-blue-400 mb-1">10,000x</div>
              <div className="text-sm text-blue-300">Processing Power</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-3xl font-extrabold text-indigo-400 mb-1">99.9%</div>
              <div className="text-sm text-indigo-300">Accuracy Rate</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-3xl font-extrabold text-purple-400 mb-1">$8.5B+</div>
              <div className="text-sm text-purple-300">Proven ROI</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-3xl font-extrabold text-green-400 mb-1">99.8%</div>
              <div className="text-sm text-green-300">Automation</div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-white mb-3">Quantum Processing</h3>
              <p className="text-gray-300 text-sm">Leveraging quantum computing principles for parallel processing, entanglement, and superposition to achieve unprecedented computational power.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Neural Superintelligence</h3>
              <p className="text-gray-300 text-sm">Advanced neural networks with meta-learning capabilities, universal domain mastery, and creative problem-solving abilities.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-bold text-white mb-3">Predictive Mastery</h3>
              <p className="text-gray-300 text-sm">99.9% accuracy in complex scenario prediction, strategic planning, and long-term optimization across all business domains.</p>
            </div>
          </div>

          {/* Success Stories Preview */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Proven Success Across Industries</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">$8.5B</div>
                <div className="text-sm text-gray-300">Financial Services ROI</div>
                <div className="text-xs text-gray-400 mt-1">Investment Banking</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$2.3B</div>
                <div className="text-sm text-gray-300">Healthcare Savings</div>
                <div className="text-xs text-gray-400 mt-1">Medical Diagnosis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$3.2B</div>
                <div className="text-sm text-gray-300">Manufacturing Efficiency</div>
                <div className="text-xs text-gray-400 mt-1">Production Optimization</div>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/blog/ai-2026-quantum-neural-superintelligence-breakthrough" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Explore Quantum AI Technology →
            </Link>
            <Link to="/case-studies/ai-2026-quantum-neural-superintelligence-8-billion-success" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              View $8.5B Success Story →
            </Link>
            <Link to="/contact" 
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>

          {/* Technology Indicators */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-blue-500/20 px-4 py-2 rounded-full text-blue-300 border border-blue-400/30">
              ⚛️ Quantum Computing
            </span>
            <span className="bg-indigo-500/20 px-4 py-2 rounded-full text-indigo-300 border border-indigo-400/30">
              🧠 Neural Networks
            </span>
            <span className="bg-purple-500/20 px-4 py-2 rounded-full text-purple-300 border border-purple-400/30">
              🚀 Superintelligence
            </span>
            <span className="bg-green-500/20 px-4 py-2 rounded-full text-green-300 border border-green-400/30">
              ✅ 99.9% Accuracy
            </span>
            <span className="bg-yellow-500/20 px-4 py-2 rounded-full text-yellow-300 border border-yellow-400/30">
              💰 $8.5B+ ROI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}