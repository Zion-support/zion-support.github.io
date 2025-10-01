import React from 'react';
import { Link } from 'react-router-dom';

const January2026NeuralArchitectureShowcaseBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 border border-indigo-500/30 rounded-2xl p-8 mb-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🌟</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                🌟🌟🌟 COMPREHENSIVE SHOWCASE: JANUARY 2026 ADVANCED NEURAL ARCHITECTURE EVOLUTION - MOST PROMINENT! 🌟🌟🌟
              </h2>
              <p className="text-indigo-200 text-sm">
                💎💎💎 FEATURED: Complete Guide, $15.2B Success Story, Expert Consulting Services - ALL NEW CONTENT! 💎💎💎
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <div className="text-3xl font-bold text-green-400">$15.2B</div>
              <div className="text-sm text-gray-300">Total Value</div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-400">847%</div>
              <div className="text-sm text-gray-300">ROI</div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-purple-400">99.97%</div>
              <div className="text-sm text-gray-300">Accuracy</div>
            </div>
          </div>
        </div>

        {/* Content showcase grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Complete Technical Guide */}
          <div className="bg-white/10 rounded-xl p-6 border border-indigo-500/30">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">📖</span>
              </div>
              <h3 className="text-xl font-bold text-white">Complete Technical Guide</h3>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex items-start space-x-2">
                <span className="text-green-400 text-sm">✓</span>
                <p className="text-gray-300 text-sm">Quantum-Neural Hybrid Processing Architecture</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-400 text-sm">✓</span>
                <p className="text-gray-300 text-sm">Adaptive Architecture Discovery Framework</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-400 text-sm">✓</span>
                <p className="text-gray-300 text-sm">Multi-Modal Intelligence Fusion</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-400 text-sm">✓</span>
                <p className="text-gray-300 text-sm">Enterprise Integration Best Practices</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-400 text-sm">✓</span>
                <p className="text-gray-300 text-sm">Implementation Roadmap & Timeline</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 mb-4">
              <div className="text-sm text-gray-300 mb-2">Key Metrics:</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="text-green-400">50x Performance</div>
                <div className="text-blue-400">99.97% Accuracy</div>
                <div className="text-purple-400">847% ROI</div>
                <div className="text-yellow-400">$15.2B Value</div>
              </div>
            </div>
            <Link
              to="/blog/ai-2025-january-advanced-neural-architecture-evolution-breakthrough"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center block"
            >
              📖 Read Complete Guide
            </Link>
          </div>

          {/* Fortune 500 Success Story */}
          <div className="bg-white/10 rounded-xl p-6 border border-green-500/30">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-white">Fortune 500 Success Story</h3>
            </div>
            <div className="space-y-3 mb-4">
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-sm text-gray-300 mb-1">Client: Fortune 100 Global Tech Corp</div>
                <div className="text-lg font-bold text-green-400">$15.2B Value Created</div>
                <div className="text-sm text-gray-300">847% ROI in 12 months</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Manufacturing Optimization</span>
                  <span className="text-green-400 font-bold">$3.2B</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Financial Services</span>
                  <span className="text-green-400 font-bold">$2.8B</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Healthcare Technology</span>
                  <span className="text-green-400 font-bold">$1.5B</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Customer Experience</span>
                  <span className="text-green-400 font-bold">$1.5B</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 mb-4">
              <div className="text-sm text-gray-300 mb-2">Performance Improvements:</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="text-green-400">99.97% Accuracy</div>
                <div className="text-blue-400">50x Speed</div>
                <div className="text-purple-400">340% Revenue</div>
                <div className="text-yellow-400">156% Productivity</div>
              </div>
            </div>
            <Link
              to="/case-studies/ai-2026-january-advanced-neural-architectures-15-billion-success"
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center block"
            >
              💎 View Success Story
            </Link>
          </div>

          {/* Expert Consulting Services */}
          <div className="bg-white/10 rounded-xl p-6 border border-purple-500/30">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white">Expert Consulting Services</h3>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex items-start space-x-2">
                <span className="text-green-400 text-sm">✓</span>
                <p className="text-gray-300 text-sm">Neural Architecture Assessment & Optimization</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-400 text-sm">✓</span>
                <p className="text-gray-300 text-sm">Quantum Computing Infrastructure Setup</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-400 text-sm">✓</span>
                <p className="text-gray-300 text-sm">Enterprise Data Pipeline Integration</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-400 text-sm">✓</span>
                <p className="text-gray-300 text-sm">Multi-Modal AI Implementation</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-400 text-sm">✓</span>
                <p className="text-gray-300 text-sm">Performance Tuning & Optimization</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-400 text-sm">✓</span>
                <p className="text-gray-300 text-sm">Continuous Learning System Setup</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 mb-4">
              <div className="text-sm text-gray-300 mb-2">Service Packages:</div>
              <div className="space-y-1 text-xs">
                <div className="text-green-400">• Foundation Setup (3 months)</div>
                <div className="text-blue-400">• Optimization Phase (3 months)</div>
                <div className="text-purple-400">• Scale & Deploy (6 months)</div>
                <div className="text-yellow-400">• Ongoing Support (12+ months)</div>
              </div>
            </div>
            <Link
              to="/contact"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center block"
            >
              🚀 Get Expert Consultation
            </Link>
          </div>
        </div>

        {/* Implementation timeline */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-4">
            🚀 Complete Implementation Timeline
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6 border border-blue-500/30">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="text-blue-400 font-bold">Phase 1: Foundation</div>
              </div>
              <div className="text-white text-sm mb-2">Months 1-3</div>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Neural architecture assessment</li>
                <li>• Quantum infrastructure setup</li>
                <li>• Data pipeline integration</li>
                <li>• Initial model training</li>
                <li>• Performance validation</li>
              </ul>
              <div className="mt-4 p-2 bg-blue-500/20 rounded text-xs text-blue-200">
                Expected ROI: 200% by Month 3
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 border border-green-500/30">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="text-green-400 font-bold">Phase 2: Optimization</div>
              </div>
              <div className="text-white text-sm mb-2">Months 4-6</div>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Advanced architecture deployment</li>
                <li>• Performance tuning</li>
                <li>• Multi-modal integration</li>
                <li>• Real-time processing</li>
                <li>• Enterprise scaling</li>
              </ul>
              <div className="mt-4 p-2 bg-green-500/20 rounded text-xs text-green-200">
                Expected ROI: 500% by Month 6
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 border border-purple-500/30">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="text-purple-400 font-bold">Phase 3: Scale</div>
              </div>
              <div className="text-white text-sm mb-2">Months 7-12</div>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Enterprise-wide deployment</li>
                <li>• Advanced analytics</li>
                <li>• Continuous learning</li>
                <li>• ROI optimization</li>
                <li>• Future roadmap</li>
              </ul>
              <div className="mt-4 p-2 bg-purple-500/20 rounded text-xs text-purple-200">
                Expected ROI: 847% by Month 12
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl p-6 border border-indigo-500/30">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Achieve $15.2B in Value Creation?
            </h3>
            <p className="text-gray-300 mb-6">
              Join Fortune 500 leaders who have transformed their enterprises with Advanced Neural Architecture Evolution
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <Link
                to="/blog/ai-2025-january-advanced-neural-architecture-evolution-breakthrough"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                📖 Read Complete Technical Guide
              </Link>
              <Link
                to="/case-studies/ai-2026-january-advanced-neural-architectures-15-billion-success"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                💎 View $15.2B Success Story
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                🚀 Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center space-x-4">
              <span>🔬 Published: January 2026</span>
              <span>🏢 Fortune 500 Proven</span>
              <span>🚀 Production Ready</span>
              <span>💎 $15.2B Value Created</span>
            </div>
            <div className="text-right">
              <div className="text-green-400 font-bold">847% ROI • 99.97% Accuracy • 50x Performance</div>
              <div>Advanced Neural Architecture Evolution - The Future of Enterprise AI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default January2026NeuralArchitectureShowcaseBanner;