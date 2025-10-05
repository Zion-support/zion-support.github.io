import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, ArrowRight, Network, Brain, Zap, Target, TrendingUp } from 'lucide-react';

const October2025FraudDetectionBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-red-900/20 via-purple-900/20 to-blue-900/20 border-y border-red-500/30 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full mb-4 animate-pulse">
            <Shield className="w-5 h-5 text-red-400" />
            <span className="text-red-300 font-semibold text-sm">🚨 BREAKING: OCTOBER 1, 2025 — ENTERPRISE FRAUD CRISIS SOLVED</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            AI-Powered Real-Time Fraud Detection
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-blue-400">
              $847B in Assets Protected | 99.7% Accuracy | Sub-50ms Detection
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Revolutionary AI system that detects and prevents fraud in real-time across all enterprise channels — 
            protecting $847 billion in assets with 99.7% accuracy and sub-50ms response times.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 border border-red-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-8 h-8 text-red-400" />
              <h3 className="text-xl font-bold text-white">Neural Pattern Recognition</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Advanced neural networks analyze behavioral patterns, transaction sequences, and user interactions 
              to identify fraudulent activities with 99.7% accuracy.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-purple-400" />
              <h3 className="text-xl font-bold text-white">Sub-50ms Response</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Lightning-fast processing ensures fraud detection happens in real-time, 
              preventing losses before they occur with sub-50ms response times.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-bold text-white">Multi-Channel Protection</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Comprehensive coverage across all enterprise channels — web, mobile, API, 
              and internal systems with unified fraud prevention.
            </p>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Advanced AI Technology Stack</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Deep Learning Models</div>
                  <div className="text-sm text-gray-300">
                    Multi-layered neural networks trained on 10+ billion transactions — 
                    continuously learning and adapting to new fraud patterns
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Real-Time Processing</div>
                  <div className="text-sm text-gray-300">
                    Stream processing architecture with microsecond latency — 
                    analyze and respond to threats in real-time
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
                  <Network className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Graph Intelligence</div>
                  <div className="text-sm text-gray-300">
                    Detect fraud rings and coordinated attacks across millions of entities — 
                    uncover hidden network patterns
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fortune 100 Success Story */}
        <div className="bg-gradient-to-r from-red-900/30 via-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-red-400" />
            <h3 className="text-2xl font-bold text-white">Fortune 100 Transformation</h3>
          </div>
          <div className="text-center mb-6">
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              "Zion Tech Group's AI fraud detection system reduced our fraud losses by 99.2% 
              and saved us $2.3 billion in the first year alone. The system's accuracy and 
              speed are unmatched in the industry."
            </p>
            <div className="mt-4 text-sm text-gray-400">
              — Chief Security Officer, Fortune 100 Financial Services Company
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400 mb-1">99.2%</div>
              <div className="text-sm text-gray-300">Fraud Reduction</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-400 mb-1">$2.3B</div>
              <div className="text-sm text-gray-300">Cost Savings</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-400 mb-1">45ms</div>
              <div className="text-sm text-gray-300">Average Response</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-2xl font-bold text-cyan-400 mb-1">99.7%</div>
              <div className="text-sm text-gray-300">Accuracy Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
            <div className="bg-slate-900 rounded-xl px-8 py-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Protect Your Enterprise Today
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join Fortune 500 companies already protecting billions in assets with our 
                AI-powered fraud detection system. Get a free security assessment and 
                discover how we can protect your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-500/50 flex items-center justify-center gap-2"
                >
                  <Shield className="w-5 h-5" />
                  <span>Get Free Security Assessment</span>
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>View All Security Services</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>ISO 27001 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>99.99% Uptime SLA</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>100% Regulatory Compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>90-Day Rapid Deployment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025FraudDetectionBanner;