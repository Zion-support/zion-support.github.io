import React from 'react';
import Link from 'next/link';

export default function AI2025EnterpriseTransformationBanner() {
  return (
    <section className="bg-gradient-to-r from-slate-800 via-purple-800 to-slate-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full px-6 py-2 mb-6 text-black">
            <span className="text-sm font-bold">🏢 ENTERPRISE AI TRANSFORMATION 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your Enterprise with AI 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Achieve 5000% ROIautomate complex operationsand gain massive competitive 
            advantages with our proven AI transformation strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/ai-2025-enterprise-transformation"
              className="bg-gradient-to-r from-yellow-400 to-pink-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-pink-400 transition-all transform hover:scale-105"
            >
              Start Transformation
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all"
            >
              Get Started
            </Link>
          </div>
          
          {/* ROI Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">5000%</div>
              <div className="text-sm font-semibold">Average ROI</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-pink-400 mb-2">$50M+</div>
              <div className="text-sm font-semibold">Cost Savings</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-sm font-semibold">Automation</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-blue-400 mb-2">300%</div>
              <div className="text-sm font-semibold">Productivity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}