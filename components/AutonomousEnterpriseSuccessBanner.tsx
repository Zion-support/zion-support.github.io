import React from 'react';
import Link from 'next/link';

export default function AutonomousEnterpriseSuccessBanner() {
  return (
    <section className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
              🏆 SUCCESS STORY
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              Fortune 500 Case Study
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            AI Autonomous Enterprise Transformation
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
            See how GlobalTech Corp achieved 300% ROI and 90% operational efficiency with our 
            AI autonomous enterprise transformation solution in just 6 months.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl font-bold mb-2">300%</div>
            <div className="text-lg font-semibold mb-2">ROI Achieved</div>
            <div className="text-sm opacity-90">In just 6 months</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl font-bold mb-2">90%</div>
            <div className="text-lg font-semibold mb-2">Efficiency Gain</div>
            <div className="text-sm opacity-90">Operational improvement</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl font-bold mb-2">$15M</div>
            <div className="text-lg font-semibold mb-2">Annual Savings</div>
            <div className="text-sm opacity-90">Cost reduction</div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Key Results Achieved</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-green-900 font-bold text-sm">✓</span>
                </div>
                <span>85% reduction in manual processes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-green-900 font-bold text-sm">✓</span>
                </div>
                <span>95% customer satisfaction rate</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-green-900 font-bold text-sm">✓</span>
                </div>
                <span>24/7 autonomous operations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-green-900 font-bold text-sm">✓</span>
                </div>
                <span>60% reduction in employee turnover</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <blockquote className="text-lg italic mb-4">
              "Zion Tech Group's AI transformation solution exceeded our wildest expectations. 
              The 300% ROI we achieved in just 6 months has completely transformed our business operations."
            </blockquote>
            <div className="flex items-center">
              <div>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm opacity-90">CEO, GlobalTech Corp</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/case-studies/ai-autonomous-enterprise-transformation-2026"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Read Full Case Study
            </Link>
            <Link
              href="/services/ai-autonomous-enterprise-solutions"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Get Your Transformation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}