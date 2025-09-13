import React from 'react';
import Link from 'next/link';

export default function AI2025GlobalTransformation15000ROIPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 mb-6">
            <span className="text-green-300 font-semibold text-sm animate-pulse">🏆 SUCCESS STORY</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent">
            AI 2025 Global Transformation Breakthrough
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Real-world case study: How a Fortune 500 company achieved 15,000% ROI through revolutionary AI implementation across all business units.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">15,000%</div>
              <div className="text-sm text-gray-300">ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">$2.3B</div>
              <div className="text-sm text-gray-300">Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Accuracy Rate</div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-white">Key Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Initial Investment:</span>
                <span className="text-white font-semibold">$15M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Revenue Increase (Year 1):</span>
                <span className="text-green-400 font-semibold">$2.3B</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Cost Savings (Year 1):</span>
                <span className="text-green-400 font-semibold">$800M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Net Profit Increase:</span>
                <span className="text-green-400 font-semibold">$3.1B</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Read Full Case Study
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              Schedule Consultation
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            Learn the exact strategies and technologies that delivered these extraordinary results
          </div>
        </div>
      </div>
    </div>
  );
}