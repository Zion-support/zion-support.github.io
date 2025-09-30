import React from 'react';
import Link from 'next/link';

export default function AITransformationShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold">FEATURED SERVICE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI Transformation Services
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with our comprehensive AI transformation services. Achieve 300% ROI, 85% efficiency gains, and industry-leading AI capabilities.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">300%</div>
                <div className="text-gray-400 text-sm">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">85%</div>
                <div className="text-gray-400 text-sm">Efficiency Gain</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">500+</div>
                <div className="text-gray-400 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">$50M</div>
                <div className="text-gray-400 text-sm">Revenue Growth</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services/ai-transformation"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/case-studies/ai-transformation-mega-success-2026"
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-bold mb-2">AI Strategy & Planning</h3>
                <p className="text-gray-300 text-sm">
                  Comprehensive AI strategies aligned with your business objectives
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Infrastructure Setup</h3>
                <p className="text-gray-300 text-sm">
                  Robust, scalable AI infrastructure for current and future needs
                </p>
              </div>
            </div>

            <div className="space-y-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Model Development</h3>
                <p className="text-gray-300 text-sm">
                  Custom AI models tailored to your specific business needs
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Process Automation</h3>
                <p className="text-gray-300 text-sm">
                  AI-powered workflows that improve efficiency and reduce costs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}