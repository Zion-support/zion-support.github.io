// import React from 'react';
import { Link } from 'react-router-dom';

const October2025LatestEnterpriseAIBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 px-6 my-8 rounded-2xl shadow-2xl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm mb-4 animate-pulse">
            🚀 OCTOBER 2025 - JUST PUBLISHED
          </div>
          <h2 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200">
            Revolutionary Enterprise AI Breakthroughs
          </h2>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto">
            3 Game-Changing Implementations Delivering $23.9B in Proven Value
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Agentic Supply Chain */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-2xl font-bold mb-3 text-yellow-300">Agentic Supply Chain Revolution</h3>
            <div className="space-y-2 mb-4 text-gray-200">
              <p className="flex items-center"><span className="text-green-400 mr-2">✓</span> $8.7B Value Creation</p>
              <p className="flex items-center"><span className="text-green-400 mr-2">✓</span> 99.4% Forecast Accuracy</p>
              <p className="flex items-center"><span className="text-green-400 mr-2">✓</span> 47% Cost Reduction</p>
              <p className="flex items-center"><span className="text-green-400 mr-2">✓</span> 340+ Implementations</p>
            </div>
            <Link 
              to="/blog/ai-2025-oct-agentic-supply-chain-revolution" 
              className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
            >
              Read Full Guide →
            </Link>
          </div>

          {/* Edge Intelligence Manufacturing */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-3 text-pink-300">Edge Intelligence Manufacturing</h3>
            <div className="space-y-2 mb-4 text-gray-200">
              <p className="flex items-center"><span className="text-green-400 mr-2">✓</span> $12.4B Proven Value</p>
              <p className="flex items-center"><span className="text-green-400 mr-2">✓</span> &lt;5ms Latency</p>
              <p className="flex items-center"><span className="text-green-400 mr-2">✓</span> 99.7% Quality Accuracy</p>
              <p className="flex items-center"><span className="text-green-400 mr-2">✓</span> 580+ Deployments</p>
            </div>
            <Link 
              to="/blog/ai-2025-oct-edge-intelligence-manufacturing-revolution" 
              className="inline-block bg-pink-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-pink-300 transition-colors"
            >
              Explore Platform →
            </Link>
          </div>

          {/* Responsible AI Governance */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold mb-3 text-purple-300">Responsible AI Governance</h3>
            <div className="space-y-2 mb-4 text-gray-200">
              <p className="flex items-center"><span className="text-green-400 mr-2">✓</span> $2.8B Risk Mitigation</p>
              <p className="flex items-center"><span className="text-green-400 mr-2">✓</span> 94% Bias Reduction</p>
              <p className="flex items-center"><span className="text-green-400 mr-2">✓</span> 99.2% Compliance</p>
              <p className="flex items-center"><span className="text-green-400 mr-2">✓</span> 240+ Frameworks</p>
            </div>
            <Link 
              to="/blog/ai-2025-oct-responsible-ai-governance-framework" 
              className="inline-block bg-purple-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-purple-300 transition-colors"
            >
              View Framework →
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center border-t border-white/20 pt-8">
          <p className="text-xl text-gray-200 mb-4">
            💎 <strong className="text-yellow-300">Combined Impact:</strong> $23.9 Billion in Enterprise Value | 1,160+ Successful Implementations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/services" 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all transform hover:scale-105 shadow-xl"
            >
              Start Your Transformation →
            </Link>
            <Link 
              to="/contact" 
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-all"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <span>⭐ 4.9/5.0 Client Rating</span>
            <span>🏆 340+ Fortune 500 Clients</span>
            <span>🌍 58 Countries Served</span>
            <span>💼 $187B+ Value Created</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025LatestEnterpriseAIBanner;
