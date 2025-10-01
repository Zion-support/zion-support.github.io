import React from 'react';
import { Code, Zap, TrendingUp, Shield, Sparkles } from 'lucide-react';

const October2025GenerativeAICodeGenerationBanner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 px-6 rounded-2xl shadow-2xl mb-8 border-4 border-purple-500 animate-pulse-slow">
      <div className="max-w-7xl mx-auto">
        {/* Header Badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-yellow-400 text-purple-900 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide shadow-lg animate-bounce">
            🚀 Just Published - October 1, 2025
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-center mb-6 leading-tight">
          <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 text-transparent bg-clip-text">
            Generative AI Code Generation
          </span>
          <br />
          <span className="text-white">Revolution Is Here!</span>
        </h1>

        {/* Subheadline */}
        <p className="text-2xl md:text-3xl text-center mb-8 text-purple-200 font-semibold">
          10x Developer Productivity • 85% Faster Time-to-Market • $47.3M Value Creation
        </p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-purple-400 transform hover:scale-105 transition-transform">
            <div className="flex justify-center mb-3">
              <Zap className="w-12 h-12 text-yellow-300" />
            </div>
            <div className="text-4xl font-black text-yellow-300 mb-2">10.2x</div>
            <div className="text-sm text-purple-200 font-semibold">Productivity Increase</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-pink-400 transform hover:scale-105 transition-transform">
            <div className="flex justify-center mb-3">
              <TrendingUp className="w-12 h-12 text-pink-300" />
            </div>
            <div className="text-4xl font-black text-pink-300 mb-2">85%</div>
            <div className="text-sm text-purple-200 font-semibold">Faster Delivery</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-blue-400 transform hover:scale-105 transition-transform">
            <div className="flex justify-center mb-3">
              <Shield className="w-12 h-12 text-blue-300" />
            </div>
            <div className="text-4xl font-black text-blue-300 mb-2">92%</div>
            <div className="text-sm text-purple-200 font-semibold">Bug Reduction</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-green-400 transform hover:scale-105 transition-transform">
            <div className="flex justify-center mb-3">
              <Code className="w-12 h-12 text-green-300" />
            </div>
            <div className="text-4xl font-black text-green-300 mb-2">$47.3M</div>
            <div className="text-sm text-purple-200 font-semibold">Annual Value</div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border-2 border-purple-400">
          <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-yellow-300" />
            <span>Revolutionary Capabilities</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-yellow-300 font-bold mb-2">✨ Intelligent Code Generation</div>
              <p className="text-purple-200 text-sm">Multi-language synthesis with 96% accuracy across 50+ languages</p>
            </div>
            <div>
              <div className="text-pink-300 font-bold mb-2">⚡ Automated Testing</div>
              <p className="text-purple-200 text-sm">Generate comprehensive test suites with 94% coverage automatically</p>
            </div>
            <div>
              <div className="text-blue-300 font-bold mb-2">🛡️ Quality Assurance</div>
              <p className="text-purple-200 text-sm">Real-time security scanning and best practice validation</p>
            </div>
          </div>
        </div>

        {/* Success Story Highlight */}
        <div className="bg-gradient-to-r from-yellow-500/20 to-pink-500/20 rounded-xl p-6 mb-8 border-2 border-yellow-400">
          <div className="text-center">
            <div className="text-xl font-bold text-yellow-300 mb-3">
              🏆 Fortune 500 Success Story
            </div>
            <p className="text-lg text-white mb-4">
              Fortune 500 Technology Company achieves <span className="font-black text-yellow-300">10.2x productivity increase</span> and 
              <span className="font-black text-pink-300"> $47.3M annual value</span> with 2,400+ developers
            </p>
            <div className="text-sm text-purple-200">
              Read the complete transformation story including implementation details and proven ROI
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a 
            href="/blog/ai-2025-oct-01-generative-ai-enterprise-code-generation-revolution"
            className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 px-8 py-4 rounded-full font-black text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            📖 Read Full Article →
          </a>
          <a 
            href="/case-studies/ai-2025-oct-01-global-tech-company-ai-code-generation-transformation-47-million-success"
            className="bg-pink-500 hover:bg-pink-400 text-white px-8 py-4 rounded-full font-black text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            📊 View Success Story →
          </a>
          <a 
            href="/services/ai-2025-october-generative-ai-code-generation-platform"
            className="bg-purple-500 hover:bg-purple-400 text-white px-8 py-4 rounded-full font-black text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            🚀 Explore Platform →
          </a>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center mt-8 text-purple-200">
          <p className="text-lg font-semibold">
            Transform your software development with AI • 98% Developer Satisfaction • Enterprise-Ready
          </p>
        </div>
      </div>
    </div>
  );
};

export default October2025GenerativeAICodeGenerationBanner;
