import React from 'react';
import { Link } from 'react-router-dom';

const October2025NewPremiumContentBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 py-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">

            <span>🚀 JUST PUBLISHED - OCTOBER 2025 PREMIUM CONTENT 🚀</span>

          </div>
          <h2 className="text-5xl font-extrabold text-white mb-4 leading-tight">
            Revolutionary AI Platforms
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Transform Your Enterprise Today
            </span>
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Three breakthrough platforms delivering unprecedented ROI, security, and competitive advantage
          </p>
        </div>

        {/* Content Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1: Autonomous DevOps */}
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                <Activity className="w-8 h-8 text-white"</div>
              <div className="px-3 py-1 bg-green-500/20 border border-green-400 rounded-full">
                
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
              Autonomous DevOps Platform
            </h3>
            
            <p className="text-cyan-100 mb-6 text-sm leading-relaxed">
              Self-healing infrastructure with AI-powered automation
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">

                <span className="text-white text-sm"><strong className="text-cyan-300">99.99% uptime</strong> with intelligent self-healing</span>
              </div>
              <div className="flex items-start gap-2">

                <span className="text-white text-sm"><strong className="text-cyan-300">92% faster</strong> incident response time</span>
              </div>
              <div className="flex items-start gap-2">

                <span className="text-white text-sm"><strong className="text-cyan-300">$340M+</strong> annual value creation</span>
              </div>
              <div className="flex items-start gap-2">

                <span className="text-white text-sm"><strong className="text-cyan-300">87% cost savings</strong> in operations</span>
              </div>
            </div>
            
            <Link 
              to="/blog/ai-autonomous-devops-platform-2025-october"
              className="flex items-center gap-2 text-cyan-300 hover:text-white font-semibold group-hover:gap-3 transition-all"
            >
              Read Full Article</Link>
          </div>

          {/* Card 2: Quantum-Safe Security */}
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                <Lock className="w-8 h-8 text-white"</div>
              <div className="px-3 py-1 bg-green-500/20 border border-green-400 rounded-full">
                
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
              Quantum-Safe AI Security
            </h3>
            
            <p className="text-purple-100 mb-6 text-sm leading-relaxed">
              Future-proof enterprise protection with post-quantum cryptography
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">

                <span className="text-white text-sm"><strong className="text-purple-300">99.99% threat prevention</strong> rate</span>
              </div>
              <div className="flex items-start gap-2">

                <span className="text-white text-sm"> cryptographic vulnerabilities</span>
              </div>
              <div className="flex items-start gap-2">

                <span className="text-white text-sm"><strong className="text-purple-300">$247M+</strong> in avoided breach costs</span>
              </div>
              <div className="flex items-start gap-2">

                <span className="text-white text-sm"><strong className="text-purple-300">94% faster</strong> threat response</span>
              </div>
            </div>
            
            <Link 
              to="/blog/quantum-safe-ai-security-framework-2025-october"
              className="flex items-center gap-2 text-purple-300 hover:text-white font-semibold group-hover:gap-3 transition-all"
            >
              Read Full Article</Link>
          </div>

          {/* Card 3: Cognitive Business Intelligence */}
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-green-500/30 hover:border-green-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-white"</div>
              <div className="px-3 py-1 bg-green-500/20 border border-green-400 rounded-full">
                
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
              Cognitive Business Intelligence
            </h3>
            
            <p className="text-green-100 mb-6 text-sm leading-relaxed">
              Real-time AI-driven decisions with predictive insights
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">

                <span className="text-white text-sm"><strong className="text-green-300">87% faster</strong> decision making</span>
              </div>
              <div className="flex items-start gap-2">

                <span className="text-white text-sm"><strong className="text-green-300">340% ROI</strong> in first year</span>
              </div>
              <div className="flex items-start gap-2">

                <span className="text-white text-sm"><strong className="text-green-300">$427M+</strong> incremental revenue</span>
              </div>
              <div className="flex items-start gap-2">

                <span className="text-white text-sm"><strong className="text-green-300">95%+</strong> prediction accuracy</span>
              </div>
            </div>
            
            <Link 
              to="/blog/real-time-cognitive-business-intelligence-2025-october"
              className="flex items-center gap-2 text-green-300 hover:text-white font-semibold group-hover:gap-3 transition-all"
            >
              Read Full Article</Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Enterprise?
          </h3>
          <p className="text-cyan-100 text-lg mb-6 max-w-2xl mx-auto">
            Join industry leaders leveraging these revolutionary platforms to achieve unprecedented results
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2"
            >
              Schedule Free Consultation</Link>
            <Link 
              to="/blog"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 border-2 border-cyan-400/50 hover:border-cyan-400 inline-flex items-center gap-2"
            >
              Explore All Articles</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025NewPremiumContentBanner;
