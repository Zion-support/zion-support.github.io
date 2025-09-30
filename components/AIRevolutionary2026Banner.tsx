import React from 'react';
import Link from 'next/link';

export default function AIRevolutionary2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-full px-6 py-2 mb-6 font-bold">
            <span className="animate-pulse">⚡</span>
            <span>REVOLUTIONARY AI 2026</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The AI Revolution is Here
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
              Transform Your Future Today
            </span>
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
            Join thousands of businesses already transforming with our revolutionary AI solutions. 
            Get 300% ROI, 90% efficiency improvement, and $50M+ savings with our proven framework.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-6">Why Choose Our AI Solutions?</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center font-bold text-black text-sm">✓</div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Proven Results</h4>
                  <p className="opacity-90">500+ successful implementations with measurable ROI</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center font-bold text-black text-sm">✓</div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Enterprise Grade</h4>
                  <p className="opacity-90">Fortune 500 tested and approved solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center font-bold text-black text-sm">✓</div>
                <div>
                  <h4 className="text-lg font-bold mb-2">24/7 Support</h4>
                  <p className="opacity-90">Round-the-clock expert support and monitoring</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center font-bold text-black text-sm">✓</div>
                <div>
                  <h4 className="text-lg font-bold mb-2">ROI Guarantee</h4>
                  <p className="opacity-90">We guarantee measurable results or work for free</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-center">Get Your Free AI Assessment</h3>
            <div className="space-y-4">
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-bold mb-2">AI Readiness Score</h4>
                <p className="text-sm opacity-90">Get your personalized AI transformation roadmap</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-bold mb-2">ROI Projection</h4>
                <p className="text-sm opacity-90">See potential savings and efficiency gains</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-bold mb-2">Implementation Plan</h4>
                <p className="text-sm opacity-90">Step-by-step guide to AI transformation</p>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/services/ai-enterprise-transformation"
                className="block w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-3 rounded-lg font-bold text-center hover:from-yellow-300 hover:to-orange-300 transition-all"
              >
                Get Free Assessment
              </Link>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-yellow-300 mb-2">300%</div>
            <div className="text-sm opacity-90">Average ROI</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-green-300 mb-2">90%</div>
            <div className="text-sm opacity-90">Efficiency Gain</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-blue-300 mb-2">$50M+</div>
            <div className="text-sm opacity-90">Average Savings</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-purple-300 mb-2">500+</div>
            <div className="text-sm opacity-90">Success Stories</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+13024640950"
              className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Call +1 302 464 0950
            </Link>
            <Link
              href="/case-studies/ai-enterprise-transformation-mega-success-2026"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-900 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}