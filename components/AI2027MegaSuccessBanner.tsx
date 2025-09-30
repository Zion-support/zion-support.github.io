import React from 'react';
import Link from 'next/link';

export default function AI2027MegaSuccessBanner() {
  return (
    <div className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              SUCCESS STORY: $500M+ Savings Achieved
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI Mega Transformation Success
            </h2>
            <p className="text-xl opacity-90 mb-8">
              See how a Fortune 500 company achieved $500M+ annual savings, 99% process automation, 
              and 600% ROI through comprehensive AI transformation in just 18 months.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-300">$500M+</div>
                <div className="text-sm opacity-90">Annual Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-300">99%</div>
                <div className="text-sm opacity-90">Automation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-300">600%</div>
                <div className="text-sm opacity-90">ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-orange-300">18</div>
                <div className="text-sm opacity-90">Months</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/case-studies/ai-mega-transformation-success-2026"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-center"
              >
                View Full Case Study
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors text-center"
              >
                Start Your Transformation
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Key Achievements</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
                <div>
                  <h4 className="font-semibold">Manufacturing Excellence</h4>
                  <p className="text-sm opacity-90">95% reduction in defects, 60% efficiency increase</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
                <div>
                  <h4 className="font-semibold">Supply Chain Optimization</h4>
                  <p className="text-sm opacity-90">70% inventory waste reduction, 50% faster delivery</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
                <div>
                  <h4 className="font-semibold">Customer Service Revolution</h4>
                  <p className="text-sm opacity-90">95% faster response, 85% satisfaction improvement</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
                <div>
                  <h4 className="font-semibold">Autonomous Operations</h4>
                  <p className="text-sm opacity-90">99% process automation, 24/7 autonomous operation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}