import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Zap, TrendingUp, ArrowRight, Cpu, Shield } from 'lucide-react';

const October2025DigitalTransformationPlatformBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* NEW Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 shadow-lg animate-pulse">
            <Rocket className="w-5 h-5 mr-2" />
            🚀 JUST LAUNCHED: October 1, 2025 - Revolutionary Platform Service! 🚀
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Message */}
          <div>
            <h2 className="text-5xl font-extrabold mb-6 leading-tight">
              AI-Powered Digital Transformation Platform
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mt-2">
                Transform in 90-180 Days
              </span>
            </h2>

            <p className="text-xl text-gray-200 mb-6 leading-relaxed">
              The complete enterprise transformation solution delivering <span className="font-bold text-cyan-400">$47.2B cumulative value</span> across 180+ Fortune 500 implementations with <span className="font-bold text-cyan-400">1,840% ROI</span> in 24 months.
            </p>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center mb-2">
                  <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-sm font-semibold text-gray-300">ROI</span>
                </div>
                <div className="text-3xl font-bold text-white">1,840%</div>
                <div className="text-xs text-gray-400 mt-1">First 24 Months</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center mb-2">
                  <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-sm font-semibold text-gray-300">Value Created</span>
                </div>
                <div className="text-3xl font-bold text-white">$47.2B</div>
                <div className="text-xs text-gray-400 mt-1">Cumulative Impact</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center mb-2">
                  <Cpu className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-sm font-semibold text-gray-300">Implementations</span>
                </div>
                <div className="text-3xl font-bold text-white">180+</div>
                <div className="text-xs text-gray-400 mt-1">Fortune 500</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center mb-2">
                  <Shield className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="text-sm font-semibold text-gray-300">Uptime</span>
                </div>
                <div className="text-3xl font-bold text-white">99.99%</div>
                <div className="text-xs text-gray-400 mt-1">SLA Guarantee</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services/ai-2025-october-digital-transformation-platform-services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-900 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105"
              >
                Explore Platform
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                to="/case-studies/ai-2025-oct-fortune-500-digital-transformation-8-4-billion-success"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/50"
              >
                View Success Story
                <TrendingUp className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Column - Feature Highlights */}
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Cpu className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Intelligent Process Automation</h3>
                  <p className="text-gray-300">
                    12,000+ pre-built templates, 87% cost reduction, 99.8% accuracy, 24/7 autonomous operations
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Zap className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Enterprise Data Intelligence</h3>
                  <p className="text-gray-300">
                    Process 50M+ events/second, 99.9% accuracy, &lt;5ms query latency, 500+ data sources
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Advanced Security Framework</h3>
                  <p className="text-gray-300">
                    Zero-trust architecture, AI threat detection in &lt;2s, 180+ regulatory frameworks, quantum-safe encryption
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400">340%</div>
              <div className="text-sm text-gray-300 mt-1">Productivity Gain</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">87%</div>
              <div className="text-sm text-gray-300 mt-1">Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">94%</div>
              <div className="text-sm text-gray-300 mt-1">Error Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">12.4x</div>
              <div className="text-sm text-gray-300 mt-1">Faster Execution</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025DigitalTransformationPlatformBanner;
