import React from 'react';
import Link from 'next/link';
import { DollarSign, TrendingDown, Calculator, ArrowRight, CheckCircle } from 'lucide-react';

export default function AICostOptimizationBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                💰 COST OPTIMIZATION 2026
              </span>
              <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                BREAKTHROUGH
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Reduce AI Costs by 90% While Improving Performance
            </h2>
            <p className="text-xl opacity-90 mb-6">
              Discover the advanced optimization strategies that leading enterprises are using to 
              achieve massive cost savings while dramatically improving AI performance and reliability.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-300">90%</div>
                <div className="text-sm opacity-80">Cost Reduction</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-300">300%</div>
                <div className="text-sm opacity-80">Performance Gain</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-cost-optimization-2026-advanced"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <Calculator className="w-5 h-5" />
                Read Optimization Guide
              </Link>
              <Link
                href="/case-studies/ai-cost-optimization-success-2026"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <TrendingDown className="w-5 h-5" />
                View $50M Success Story
              </Link>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4">Key Optimization Strategies</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-300 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-lg">Quantum-Enhanced Optimization</h4>
                  <p className="text-sm opacity-80">60-80% reduction in resource waste through quantum algorithms</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-300 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-lg">Edge Computing Implementation</h4>
                  <p className="text-sm opacity-80">40-60% cost reduction by processing at the edge</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-300 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-lg">Advanced Model Compression</h4>
                  <p className="text-sm opacity-80">75% reduction in model size with 95% accuracy maintained</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-300 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-lg">Real-time Cost Monitoring</h4>
                  <p className="text-sm opacity-80">30% reduction in cost overruns through automated controls</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white border-opacity-20">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-yellow-300">$43.5M</div>
                  <div className="text-sm opacity-80">Average Annual Savings</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-300">4 months</div>
                  <div className="text-sm opacity-80">ROI Timeline</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}