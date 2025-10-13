import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Brain, Shield, Zap, Globe } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAiEmailAnalyzerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Zion Ai Email Analyzer | Zion Tech Group"
        description="Discover our zion ai email analyzer solutions designed to transform your business with cutting-edge technology and AI-powered automation."
        keywords="zion, ai, email, analyzer, AI solutions, technology, business automation"
        canonical="https://ziontechgroup.com/zion-ai-email-analyzer"
      />

      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
            <Link to="/" className="hover:text-cyan-400 transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <span>/</span>
            <span className="text-cyan-400">Zion Ai Email Analyzer</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Zion Ai Email Analyzer
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our zion ai email analyzer solutions designed to transform your business with cutting-edge technology and AI-powered automation.
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-gray-300 mb-6">
                We're working hard to bring you this amazing zion ai email analyzer solution. 
                This page will be available soon with detailed information about our services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Notified
                  <Brain className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Link>
                <Link
                  to="/"
                  className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ZionAiEmailAnalyzerPage;
