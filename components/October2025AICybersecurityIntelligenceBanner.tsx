import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025AICybersecurityIntelligenceBanner() {
  return (
    <div className="bg-gradient-to-br from-red-900/40 via-orange-900/40 to-yellow-900/40 border-2 border-red-500/50 rounded-xl p-10 my-16 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-red-400 text-sm font-bold uppercase tracking-wider mb-2">
            🔐 BREAKING: OCTOBER 2025 CYBERSECURITY AI REVOLUTION 🔐
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI-Powered Cybersecurity Intelligence Platform
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            <span className="text-green-400 font-bold">$427M Threat Prevention Value</span> •{' '}
            <span className="text-green-400 font-bold">99.94% Attack Detection</span> •{' '}
            <span className="text-green-400 font-bold">Real-Time AI Defense</span> •{' '}
            <span className="text-green-400 font-bold">Zero-Day Protection</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* AI Threat Detection */}
          <div className="bg-red-900/30 border border-red-500/40 rounded-lg p-6 hover:bg-red-900/40 transition-all">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Autonomous Threat Detection
            </h3>
            <p className="text-gray-400 mb-4">
              AI-powered threat intelligence that detects and neutralizes cyber threats in real-time with 99.94% accuracy.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Zero-day vulnerability detection</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Behavioral anomaly detection</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Automated threat response</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Sub-second incident resolution</span>
              </div>
            </div>
            <div className="bg-red-800/30 border border-red-600/40 rounded p-3 mb-4">
              <div className="text-sm font-semibold text-red-300 mb-1">Success Metrics:</div>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                <div>• 2.3M threats blocked</div>
                <div>• &lt;100ms response time</div>
                <div>• 99.94% accuracy</div>
                <div>• $427M saved</div>
              </div>
            </div>
            <Link 
              to="/blog/ai-powered-cybersecurity-intelligence-platform-2025"
              className="text-red-400 hover:text-red-300 font-semibold inline-flex items-center gap-1"
            >
              Read Full Guide <span>→</span>
            </Link>
          </div>

          {/* Predictive Security */}
          <div className="bg-orange-900/30 border border-orange-500/40 rounded-lg p-6 hover:bg-orange-900/40 transition-all">
            <div className="text-3xl mb-3">🔮</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Predictive Security Analytics
            </h3>
            <p className="text-gray-400 mb-4">
              Machine learning models that predict and prevent attacks before they happen, reducing breach risk by 96%.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Attack pattern prediction</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Risk scoring & prioritization</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Threat intelligence fusion</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Autonomous patch management</span>
              </div>
            </div>
            <div className="bg-orange-800/30 border border-orange-600/40 rounded p-3 mb-4">
              <div className="text-sm font-semibold text-orange-300 mb-1">Fortune 500 Results:</div>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                <div>• 96% breach reduction</div>
                <div>• 847% ROI achieved</div>
                <div>• 24/7 AI monitoring</div>
                <div>• 15-day deployment</div>
              </div>
            </div>
            <Link 
              to="/case-studies/fortune-500-ai-cybersecurity-success-2025"
              className="text-orange-400 hover:text-orange-300 font-semibold inline-flex items-center gap-1"
            >
              View Case Study <span>→</span>
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/services/ai-cybersecurity-intelligence"
            className="inline-block bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Get AI Cybersecurity Protection Now →
          </Link>
        </div>
      </div>
    </div>
  );
}
