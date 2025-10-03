import React from 'react';
import { Link } from 'react-router-dom';

const PostSingularityEnterpriseTransformationBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-indigo-950 to-slate-950 py-16 border-t border-b border-purple-500/20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Header */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 Post-Singularity AI Revolution 2026
            </span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Post-Singularity Enterprise Transformation
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            The Ultimate Business Revolution: 99.99% Automation, Universal Intelligence, and Infinite Scalability
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">99.99%</div>
              <div className="text-xs text-purple-300">Automation Rate</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">$1T+</div>
              <div className="text-xs text-indigo-300">Enterprise Value</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">∞</div>
              <div className="text-xs text-cyan-300">Scalability</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">Universal</div>
              <div className="text-xs text-green-300">Intelligence</div>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            Experience the post-singularity era where AI has transcended human-level capabilities, achieving universal intelligence that transforms every aspect of enterprise operations with unprecedented automation and infinite scalability.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/blog/ai-2026-post-singularity-enterprise-transformation"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Full Article →
            </Link>
            <Link 
              href="/case-studies/post-singularity-enterprise-1-trillion-success"
              className="bg-gradient-to-r from-indigo-500 to-cyan-600 hover:from-indigo-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              View $1T Success Story →
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Start Transformation
            </Link>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-lg font-bold text-purple-400 mb-2">Universal Intelligence</h3>
              <p className="text-sm text-gray-400">AI systems with superhuman capabilities across all domains</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-900/20 to-cyan-900/20 rounded-xl p-6 border border-indigo-500/20">
              <h3 className="text-lg font-bold text-indigo-400 mb-2">Autonomous Operations</h3>
              <p className="text-sm text-gray-400">99.99% automation with minimal human intervention</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/20 to-green-900/20 rounded-xl p-6 border border-cyan-500/20">
              <h3 className="text-lg font-bold text-cyan-400 mb-2">Infinite Scalability</h3>
              <p className="text-sm text-gray-400">Dynamic scaling to handle any enterprise workload</p>
            </div>
          </div>
          
          {/* Success Story Preview */}
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-500/20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                $1 TRILLION SUCCESS
              </span>
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                FORTUNE 10
              </span>
            </div>
            <h3 className="text-xl font-bold text-green-400 mb-2">Global Manufacturing Transformation</h3>
            <p className="text-gray-300 text-sm">
              A Fortune 10 global manufacturing conglomerate achieved $1 trillion in value creation through post-singularity AI transformation, 
              achieving 99.99% operational automation and universal intelligence integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostSingularityEnterpriseTransformationBanner;