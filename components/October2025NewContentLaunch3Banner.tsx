// import React from 'react';
import { Link } from 'react-router-dom';

const October2025NewContentLaunch3Banner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-900/40 via-purple-900/40 to-indigo-900/40 border-2 border-cyan-400/50 rounded-xl p-8 my-12 shadow-2xl">
      <div className="flex items-start gap-4">
        <div className="text-6xl">🚀</div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-indigo-300 mb-4">
            🎉 JUST PUBLISHED: 3 Revolutionary AI Breakthroughs - October 1, 2025
          </h2>
          <p className="text-xl text-gray-200 mb-6 leading-relaxed">
            Discover cutting-edge AI innovations transforming enterprise operations: 
            <span className="text-cyan-300 font-bold"> Autonomous Edge Intelligence</span> (99.9% uptime, &lt;5ms latency), 
            <span className="text-purple-300 font-bold"> Intelligent Automation Platform</span> (98% process automation, 76% cost reduction), and 
            <span className="text-indigo-300 font-bold"> Neural Search Revolution</span> (97% accuracy, 89% faster discovery).
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-cyan-950/60 border border-cyan-400/30 rounded-lg p-4">
              <h3 className="text-lg font-bold text-cyan-300 mb-2">⚡ Edge Intelligence</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>✓ 99.9% Uptime</li>
                <li>✓ &lt;5ms Latency</li>
                <li>✓ 94% Cost Reduction</li>
                <li>✓ $47M Annual Savings</li>
              </ul>
              <Link 
                to="/blog/ai-2025-oct-1-autonomous-edge-intelligence-revolution" 
                className="inline-block mt-3 text-cyan-300 hover:text-cyan-200 font-semibold text-sm"
              >
                Read Full Article →
              </Link>
            </div>

            <div className="bg-purple-950/60 border border-purple-400/30 rounded-lg p-4">
              <h3 className="text-lg font-bold text-purple-300 mb-2">🤖 Hyperautomation</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>✓ 98% Process Automation</li>
                <li>✓ 76% Cost Reduction</li>
                <li>✓ 99.5% Accuracy</li>
                <li>✓ $284M Savings</li>
              </ul>
              <Link 
                to="/blog/ai-2025-oct-1-intelligent-automation-platform-revolution" 
                className="inline-block mt-3 text-purple-300 hover:text-purple-200 font-semibold text-sm"
              >
                Read Full Article →
              </Link>
            </div>

            <div className="bg-indigo-950/60 border border-indigo-400/30 rounded-lg p-4">
              <h3 className="text-lg font-bold text-indigo-300 mb-2">🧠 Neural Search</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>✓ 97% Search Accuracy</li>
                <li>✓ 89% Faster Discovery</li>
                <li>✓ 94% Productivity Gain</li>
                <li>✓ $184M Value</li>
              </ul>
              <Link 
                to="/blog/ai-2025-oct-1-neural-search-enterprise-knowledge-revolution" 
                className="inline-block mt-3 text-indigo-300 hover:text-indigo-200 font-semibold text-sm"
              >
                Read Full Article →
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-400/30 rounded-lg p-4 mb-6">
            <h3 className="text-xl font-bold text-green-300 mb-2">💎 Combined Enterprise Value</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-300">$515M+</div>
                <div className="text-sm text-gray-300">Total Savings</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-300">98%</div>
                <div className="text-sm text-gray-300">Automation</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-300">99.9%</div>
                <div className="text-sm text-gray-300">Reliability</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-300">3,200%</div>
                <div className="text-sm text-gray-300">Avg ROI</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link 
              to="/blog" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold rounded-lg transition-all shadow-lg"
            >
              📚 Explore All Articles
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-lg transition-all shadow-lg"
            >
              🚀 Transform Your Enterprise
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025NewContentLaunch3Banner;
