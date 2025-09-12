import React from 'react';
import Link from 'next/link';

export default function Fortune500SuccessBanner2025() {
  return (
    <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 mb-6 lg:mb-0">
            <div className="flex items-center mb-3">
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold mr-4 animate-bounce">
                BREAKTHROUGH SUCCESS
              </span>
              <span className="text-sm font-semibold">Fortune 500 AI Transformation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              🏆 1200% ROI Achievement
            </h2>
            <p className="text-xl opacity-90 mb-4">
              Real-world case study: How a global manufacturing company achieved unprecedented results 
              through comprehensive AI transformation in just 18 months.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <div className="text-2xl font-bold text-yellow-300">1200%</div>
                <div className="text-sm">ROI</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <div className="text-2xl font-bold text-yellow-300">$2.4B</div>
                <div className="text-sm">Cost Savings</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <div className="text-2xl font-bold text-yellow-300">18</div>
                <div className="text-sm">Months</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <div className="text-2xl font-bold text-yellow-300">67%</div>
                <div className="text-sm">Efficiency</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors text-center shadow-lg"
            >
              Read Full Case Study
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-colors text-center"
            >
              Get Similar Results
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}