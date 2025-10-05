import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, TrendingUp, Network, CheckCircle } from 'lucide-react';

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
            Revolutionary AI system stops $2.3M fraud attempts per hour across 15+ Fortune 500 companies. 
            Zero false positives. Zero breaches. 100% compliance.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gradient-to-r from-red-900/30 via-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <div className="font-semibold text-white mb-1">Real-Time Detection</div>
                <div className="text-sm text-gray-300">
                  Sub-50ms fraud detection with 99.7% accuracy — stop attacks before they happen
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-900/30 via-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <div className="font-semibold text-white mb-1">Behavioral Analytics</div>
                <div className="text-sm text-gray-300">
                  Continuous authentication via keystroke dynamics, mouse patterns, device fingerprinting — 99.4% user ID accuracy
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-900/30 via-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
                <Network className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="font-semibold text-white mb-1">Graph Intelligence</div>
                <div className="text-sm text-gray-300">
                  Detect fraud rings and coordinated attacks across millions of entities — uncover hidden network patterns
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
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-6">
              "Zion's AI fraud detection system saved us $47M in the first quarter alone. 
              We went from 12 fraud incidents per day to zero. The ROI was immediate."
            </p>
            <div className="text-sm text-gray-400">
              — Sarah Chen, CISO, Global Financial Services Corp
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
            <div className="bg-slate-900 rounded-xl px-12 py-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Protect Your Enterprise Today
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Join 15+ Fortune 500 companies already protected by our AI fraud detection system. 
                Get a personalized security assessment and see how much you could save.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-500/50 flex items-center justify-center gap-2"
                >
                  <Shield className="w-5 h-5" />
                  <span>Get Security Assessment</span>
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>View All Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators Footer */}
        <div className="mt-8 pt-6 border-t border-red-500/30">
          <div className="flex flex-wrap items-center justify-center gap-6 text-red-200 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span><strong>15+</strong> Fortune 500 Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span><strong>$20B+</strong> Total Value Created</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span><strong>99.97%</strong> Platform Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span><strong>0</strong> Security Breaches</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span><strong>SOC 2 Type II</strong> Certified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025FraudDetectionBanner;