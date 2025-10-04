import React from 'react';
import { Link } from 'react-router-dom';

export default function ExplainableAIBanner() {
  return (
    <section className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="text-3xl animate-pulse">🔍</span>
            <span className="font-bold text-xl">NEW: Explainable AI Revolution</span>
            <div className="flex flex-wrap gap-4 items-center">
              <Link to="/blog/ai-2025-oct-explainable-ai-enterprise-transparency-revolution" 
                className="underline hover:text-yellow-200 font-bold flex items-center gap-2"
              >
                📘 Complete XAI Guide
                <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold animate-pulse">NEW</span>
              </Link>
              <Link to="/case-studies/ai-2025-oct-global-bank-xai-compliance-success" 
                className="underline hover:text-yellow-200 font-bold flex items-center gap-2"
              >
                💰 $420M Bank Success
                <span className="bg-green-400 text-black px-2 py-1 rounded-full text-xs font-bold animate-pulse">100% COMPLIANCE</span>
              </Link>
              <Link to="/services/explainable-ai-enterprise-platform-2025" 
                className="underline hover:text-yellow-200 font-bold"
              >
                🚀 Get XAI Platform
              </Link>
            </div>
          </div>
          <Link to="/services/explainable-ai-enterprise-platform-2025"
            className="bg-white text-indigo-700 hover:bg-yellow-400 hover:text-indigo-900 px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all"
          >
            Start Your XAI Journey →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function XAIShowcaseBanner() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🔍 Explainable AI: Build Trust & Compliance
          </h2>
          <p className="text-xl text-gray-600">
            Achieve 95%+ regulatory compliance and $420M+ value through AI transparency
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border-2 border-indigo-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
                📘 Implementation Guide
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Explainable AI Revolution
            </h3>
            <p className="text-gray-600 mb-4">
              Complete guide to XAI: SHAP, LIME, counterfactuals, and enterprise implementation strategies for AI transparency.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                95% Compliance
              </span>
              <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                87% Trust Improvement
              </span>
              <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                16 min read
              </span>
            </div>
            <Link to="/blog/ai-2025-oct-explainable-ai-enterprise-transparency-revolution"
              className="text-indigo-600 font-bold hover:text-indigo-700 text-lg"
            >
              Read Complete Guide →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                💰 $420M Success
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Global Bank: 100% AI Compliance
            </h3>
            <p className="text-gray-600 mb-4">
              Fortune 100 bank achieves perfect regulatory compliance, $420M annual value, and zero audit findings with comprehensive XAI.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                100% Compliance
              </span>
              <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                127 Models
              </span>
              <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                14 Months
              </span>
            </div>
            <Link to="/case-studies/ai-2025-oct-global-bank-xai-compliance-success"
              className="text-green-600 font-bold hover:text-green-700 text-lg"
            >
              Read Success Story →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                🚀 Enterprise Platform
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              XAI Platform Services
            </h3>
            <p className="text-gray-600 mb-4">
              Build trustworthy, compliant AI systems with our enterprise XAI platform. Achieve regulatory compliance and stakeholder trust.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                Full Implementation
              </span>
              <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                Managed Services
              </span>
              <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                500-2000% ROI
              </span>
            </div>
            <Link to="/services/explainable-ai-enterprise-platform-2025"
              className="text-purple-600 font-bold hover:text-purple-700 text-lg"
            >
              Explore Platform →
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/contact"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-700 transition-colors"
          >
            Get Your Free XAI Assessment →
          </Link>
        </div>
      </div>
    </section>
  );
}
