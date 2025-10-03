import React from 'react';
import Link from 'next/link';
import { Shield, Lock, Zap, TrendingUp } from 'lucide-react';

export default function FederatedLearningPrivacyBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-green-900 via-teal-900 to-blue-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zM30 30c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-400/30 rounded-full px-4 py-2 mb-4">
            <Shield className="w-5 h-5 text-green-300" />
            <span className="text-green-200 font-semibold text-sm">FEDERATED LEARNING PRIVACY REVOLUTION 2026</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-300 via-teal-300 to-blue-300 bg-clip-text text-transparent">
            🔒 Federated Learning
            <br />
            <span className="text-yellow-300">100% Privacy + 1000x Speed</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-teal-200 mb-6 max-w-4xl mx-auto">
            Revolutionary AI training that maintains complete data privacy while achieving unprecedented training speeds
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 border border-green-400/30 rounded-xl p-6 text-center backdrop-blur-sm">
            <Lock className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-green-300 mb-1">100%</div>
            <div className="text-green-200 text-sm">Data Privacy</div>
          </div>
          
          <div className="bg-gradient-to-br from-teal-600/20 to-teal-800/20 border border-teal-400/30 rounded-xl p-6 text-center backdrop-blur-sm">
            <Zap className="w-8 h-8 text-teal-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-teal-300 mb-1">1000x</div>
            <div className="text-teal-200 text-sm">Training Speed</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-400/30 rounded-xl p-6 text-center backdrop-blur-sm">
            <Shield className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-blue-300 mb-1">99.99%</div>
            <div className="text-blue-200 text-sm">Accuracy</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-400/30 rounded-xl p-6 text-center backdrop-blur-sm">
            <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-purple-300 mb-1">$500M</div>
            <div className="text-purple-200 text-sm">Annual Savings</div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="bg-gradient-to-r from-green-800/30 to-teal-800/30 border border-green-400/30 rounded-2xl p-8 mb-8 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-green-100">
            🚀 Just Published: Privacy-Preserving AI Content
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-700/40 to-green-900/40 border border-green-400/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-100 mb-3 flex items-center gap-2">
                <Lock className="w-6 h-6 text-green-300" />
                Federated Learning Privacy Guide
              </h3>
              <p className="text-green-200 mb-4">
                Complete guide to implementing federated learning with 100% data privacy and 1000x faster training speeds.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-semibold">100% Privacy</span>
                <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm font-semibold">1000x Speed</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">GDPR Compliant</span>
              </div>
              <Link 
                href="/blog/ai-2026-federated-learning-enterprise-privacy"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Read Full Guide
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-teal-700/40 to-teal-900/40 border border-teal-400/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-teal-100 mb-3 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-teal-300" />
                Banking Consortium Success
              </h3>
              <p className="text-teal-200 mb-4">
                How a global banking consortium achieved 100% privacy while training fraud detection models across multiple institutions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-semibold">$200M Savings</span>
                <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm font-semibold">Banking Industry</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">95% Accuracy</span>
              </div>
              <Link 
                href="/case-studies/federated-learning-banking-consortium-success"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View Case Study
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-400/30 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="text-2xl mb-2">🏦</div>
            <h3 className="text-lg font-bold text-blue-200 mb-2">Financial Services</h3>
            <p className="text-blue-300 text-sm">Train fraud detection models across banks without sharing transaction data</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-400/30 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="text-2xl mb-2">🏥</div>
            <h3 className="text-lg font-bold text-purple-200 mb-2">Healthcare</h3>
            <p className="text-purple-300 text-sm">Develop diagnostic AI while protecting patient privacy across hospitals</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 border border-orange-400/30 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="text-2xl mb-2">🏭</div>
            <h3 className="text-lg font-bold text-orange-200 mb-2">Manufacturing</h3>
            <p className="text-orange-300 text-sm">Optimize predictive maintenance without sharing proprietary data</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Link 
              href="/services/federated-learning-enterprise-services"
              className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🔒 Implement Privacy-Preserving AI
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-green-400 hover:bg-green-400/20 text-green-200 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
            >
              Schedule Privacy Consultation
            </Link>
          </div>
          
          <p className="text-green-300 mt-4 text-sm">
            Protect your data • Accelerate AI training • Maintain complete privacy • Achieve regulatory compliance
          </p>
        </div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-teal-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-500"></div>
      </div>
    </div>
  );
}