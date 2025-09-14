import React from 'react';
import Link from 'next/link';
import { Brain, ArrowRight, Zap, Sparkles } from 'lucide-react';

const NeuralInterfaceRevolutionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-800">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-400/30 rounded-full px-4 py-2 mb-6">
            <Brain className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-purple-200 text-sm font-medium">🧠 Neural Interface Revolution</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Direct Brain-to-AI Communication
            </span>
            <br />
            <span className="text-white">Now Reality</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the future of human-computer interaction with neural interfaces that enable 
            direct thought-to-AI communication with 99.7% accuracy and unprecedented cognitive enhancement.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">150 WPM Thought-to-Text</h3>
              <p className="text-gray-300 text-sm">
                Convert thoughts directly to text at unprecedented speeds
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">95% Emotion Recognition</h3>
              <p className="text-gray-300 text-sm">
                AI systems that understand and respond to emotional context
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cognitive Enhancement</h3>
              <p className="text-gray-300 text-sm">
                Augment human intelligence with AI-powered neural pathways
              </p>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/blog/ai-2026-neural-interface-breakthrough"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
          >
            <Brain className="w-5 h-5" />
            Discover Neural Interfaces
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolutionBanner;