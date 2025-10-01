"use client";

import React from 'react';
import Link from 'next/link';

export default function ProductionAgenticAIBanner() {
  return (
    <section className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-4 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-3 justify-between">
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
            <span className="text-3xl animate-bounce">🤖</span>
            <span className="font-bold text-lg uppercase tracking-wide">NEW PRACTICAL GUIDE:</span>
            <Link 
              href="/blog/ai-2025-oct-practical-agentic-ai-systems-production" 
              className="underline hover:text-yellow-200 font-bold text-lg decoration-2 underline-offset-4"
            >
              Production-Ready Agentic AI Systems
            </Link>
            <span className="hidden md:inline text-yellow-300">•</span>
            <span className="font-semibold text-yellow-100">70% Faster Development • $2.4M Savings • 95% Reliability</span>
          </div>
          <Link
            href="/blog/ai-2025-oct-practical-agentic-ai-systems-production"
            className="bg-white text-emerald-700 hover:bg-yellow-400 hover:text-emerald-900 px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Read Guide →
          </Link>
        </div>
      </div>
    </section>
  );
}

export const AgenticAIShowcaseBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold mb-4 shadow-lg">
            <span className="text-2xl mr-2">🚀</span>
            JUST RELEASED: Production Agentic AI Implementation
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Build Production-Ready Agentic AI Systems
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Complete implementation guide with real-world examples, architecture patterns, and proven strategies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-emerald-500 hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Guide</h3>
            <p className="text-gray-600 mb-4">
              Step-by-step implementation from MVP to production. Complete with code examples and best practices.
            </p>
            <Link 
              href="/blog/ai-2025-oct-practical-agentic-ai-systems-production"
              className="text-emerald-600 font-semibold hover:text-emerald-800 flex items-center"
            >
              Read Guide <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-teal-500 hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-3">💼</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">$47M Success Story</h3>
            <p className="text-gray-600 mb-4">
              See how a global FinTech achieved 92% automation and 94% customer satisfaction with agentic AI.
            </p>
            <Link 
              href="/case-studies/ai-2025-oct-global-fintech-agentic-ai-customer-service-success"
              className="text-teal-600 font-semibold hover:text-teal-800 flex items-center"
            >
              View Case Study <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-cyan-500 hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-3">🛠️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Implementation Services</h3>
            <p className="text-gray-600 mb-4">
              Get expert help deploying production-ready agentic AI. From architecture to ongoing optimization.
            </p>
            <Link 
              href="/services/production-agentic-ai-implementation-services"
              className="text-cyan-600 font-semibold hover:text-cyan-800 flex items-center"
            >
              Get Started <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-xl shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to Build Your Agentic AI System?</h3>
              <p className="text-emerald-100">
                Average ROI: 580% | Payback: 2-3 months | 95%+ reliability
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-white text-emerald-700 hover:bg-yellow-400 hover:text-emerald-900 px-8 py-3 rounded-full font-bold whitespace-nowrap transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
