import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, Zap } from 'lucide-react';

interface RevolutionaryContentBannerProps {
  className?: string;
  variant?: 'hero' | 'compact' | 'minimal';
}

const RevolutionaryContentBanner: React.FC<RevolutionaryContentBannerProps> = ({ 
  className = '',
  variant = 'hero'
}) => {
  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-4 ${className}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="font-semibold">🚀 BREAKTHROUGH 2025: AI Autonomous Infrastructure + Quantum-AI Hybrid Computing</span>
            </div>
            <Link 
              to="/services" 
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-medium transition-colors text-sm"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className={`bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 ${className}`}>
        <div className="container mx-auto px-6">
          <div className="text-center">
            <span className="font-medium">
              ✨ New: AI Autonomous Infrastructure, Privacy-First Feature Flags, SLO Guardrails
            </span>
            <Link to="/blog" className="ml-4 underline hover:no-underline">Read now →</Link>
          </div>
        </div>
      </div>
    );
  }

  // Hero variant (default)
  return (
    <div className={`bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            🚀 BREAKTHROUGH 2025: Revolutionary AI Solutions
            <Zap className="w-4 h-4 ml-2 animate-bounce" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Transform Your Business
            </span>
            <br />
            <span className="text-white">With Revolutionary AI</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed animate-fade-in">
            🎯 <strong>Just Released:</strong> AI Autonomous Infrastructure, Quantum-AI Hybrid Computing, 
            Zero Trust Security, and Multi-Modal AI Solutions that deliver unprecedented results.
          </p>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 animate-fade-in">
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">99.99% Uptime</h3>
              <p className="text-blue-100 text-sm">Self-healing AI infrastructure</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 animate-fade-in">
              <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">1000x Faster</h3>
              <p className="text-blue-100 text-sm">Quantum-AI hybrid computing</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 animate-fade-in">
              <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">85% Cost Reduction</h3>
              <p className="text-blue-100 text-sm">Intelligent automation</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link
              to="/services"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 shadow-xl"
            >
              Explore AI Solutions
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              View Success Stories
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-blue-200 text-sm animate-fade-in">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Trusted by 500+ companies
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              $50M+ in client savings
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              99.9% success rate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner;