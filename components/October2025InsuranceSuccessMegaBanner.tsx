// import React from 'react';
import { Shield, DollarSign, Users, CheckCircle, Trophy, Sparkles } from 'lucide-react';

const October2025InsuranceSuccessMegaBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-16 px-6 rounded-2xl shadow-2xl mb-8 border-4 border-blue-500 animate-pulse-slow">
      <div className="max-w-7xl mx-auto">
        {/* Header Badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide shadow-lg animate-bounce">
            🏆 New Case Study - October 1, 2025
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-center mb-6 leading-tight">
          <span className="bg-gradient-to-r from-yellow-300 via-blue-300 to-purple-300 text-transparent bg-clip-text">
            Fortune 50 Insurance
          </span>
          <br />
          <span className="text-white">$3.2 Billion Success!</span>
        </h1>

        {/* Subheadline */}
        <p className="text-2xl md:text-3xl text-center mb-8 text-blue-200 font-semibold">
          27,400 AI Agents • 94% Automation • 98.7% Customer Satisfaction
        </p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-yellow-400 transform hover:scale-105 transition-transform">
            <div className="flex justify-center mb-3">
              <DollarSign className="w-12 h-12 text-yellow-300" />
            </div>
            <div className="text-4xl font-black text-yellow-300 mb-2">$3.2B</div>
            <div className="text-sm text-blue-200 font-semibold">Annual Value</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-purple-400 transform hover:scale-105 transition-transform">
            <div className="flex justify-center mb-3">
              <Trophy className="w-12 h-12 text-purple-300" />
            </div>
            <div className="text-4xl font-black text-purple-300 mb-2">6,780%</div>
            <div className="text-sm text-blue-200 font-semibold">ROI Achieved</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-blue-400 transform hover:scale-105 transition-transform">
            <div className="flex justify-center mb-3">
              <Users className="w-12 h-12 text-blue-300" />
            </div>
            <div className="text-4xl font-black text-blue-300 mb-2">98.7%</div>
            <div className="text-sm text-blue-200 font-semibold">Customer Satisfaction</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-green-400 transform hover:scale-105 transition-transform">
            <div className="flex justify-center mb-3">
              <CheckCircle className="w-12 h-12 text-green-300" />
            </div>
            <div className="text-4xl font-black text-green-300 mb-2">94%</div>
            <div className="text-sm text-blue-200 font-semibold">Automation Rate</div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border-2 border-blue-400">
          <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-yellow-300" />
            <span>Transformation Highlights</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-yellow-300 font-bold mb-2">⚡ Claims Processing</div>
              <p className="text-blue-200 text-sm">87% faster settlement - 14 days to 1.8 days with 94% accuracy</p>
            </div>
            <div>
              <div className="text-purple-300 font-bold mb-2">🛡️ Fraud Detection</div>
              <p className="text-blue-200 text-sm">$427M prevented annually with 94% detection rate in 2.4 hours</p>
            </div>
            <div>
              <div className="text-blue-300 font-bold mb-2">🌍 Global Scale</div>
              <p className="text-blue-200 text-sm">147 countries transformed with 27,400 specialized AI agents</p>
            </div>
          </div>
        </div>

        {/* Impact Summary */}
        <div className="bg-gradient-to-r from-blue-800/50 to-purple-800/50 rounded-xl p-6 mb-8 border-2 border-blue-400">
          <h3 className="text-xl font-bold mb-4 text-center">💰 Business Impact</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-black text-yellow-300 mb-1">$847M</div>
              <div className="text-sm text-blue-200">Annual Cost Savings</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-black text-purple-300 mb-1">$2.4B</div>
              <div className="text-sm text-blue-200">Revenue Growth</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-black text-blue-300 mb-1">5.4 mo</div>
              <div className="text-sm text-blue-200">Payback Period</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="/case-studies/ai-2025-oct-01-global-insurance-multi-agent-transformation-3-2-billion-success"
            className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2"
          >
            <Trophy className="w-6 h-6" />
            Read Full Case Study
          </a>
          <a
            href="/services/ai-2025-october-multi-agent-orchestration-platform-services"
            className="bg-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-400 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2"
          >
            <Shield className="w-6 h-6" />
            Get Similar Results
          </a>
        </div>

        {/* Client Quote */}
        <div className="mt-8 bg-white/10 rounded-xl p-6 border-2 border-yellow-400">
          <p className="text-lg text-center italic text-blue-100 mb-3">
            "This transformation fundamentally changed our business. We're delivering a completely different customer experience with exceptional returns."
          </p>
          <p className="text-center text-yellow-300 font-bold">
            — CEO, Fortune 50 Global Insurance Corporation
          </p>
        </div>
      </div>
    </div>
  );
};

export default October2025InsuranceSuccessMegaBanner;
