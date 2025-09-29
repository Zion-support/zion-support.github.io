import React from 'react';
import Link from 'next/link';

export function AICostOptimizationBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                💰 ADVANCED 2026
              </span>
              <span className="text-sm opacity-90">Cost Optimization</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              AI Cost Optimization Advanced: 70% Cost Reduction & $10M+ Savings
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Master advanced AI cost optimization strategies that deliver 70% cost reduction and $10M+ savings 
              through intelligent resource allocation, model optimization, and infrastructure efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-cost-optimization-advanced-2026"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Complete Guide
              </Link>
              <Link
                href="/case-studies/ai-cost-optimization-success-2026"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-center"
              >
                View $12M Success Story
              </Link>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-6">Optimization Results</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">70%</div>
                <div className="text-sm opacity-90">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">$10M+</div>
                <div className="text-sm opacity-90">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">90%</div>
                <div className="text-sm opacity-90">Resource Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">8</div>
                <div className="text-sm opacity-90">Months to ROI</div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white border-opacity-20">
              <p className="text-sm opacity-90 text-center">
                "Advanced AI cost optimization transformed our AI operations completely. We reduced costs by 75% 
                while improving performance and scalability."
              </p>
              <p className="text-xs opacity-75 text-center mt-2">
                — Michael Rodriguez, VP of AI, TechCorp Global
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AICostOptimizationShowcase() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI Cost Optimization Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how companies are achieving massive cost savings with advanced AI optimization strategies
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Tech Company</h3>
                <p className="text-sm text-gray-500">Fortune 500</p>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              $12M Savings with 75% Cost Reduction
            </h4>
            <p className="text-gray-600 mb-4">
              TechCorp Global achieved $12M annual savings through advanced AI cost optimization, 
              reducing operational costs by 75% while improving performance.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">8 months</div>
              <Link
                href="/case-studies/ai-cost-optimization-success-2026"
                className="text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Read Case Study →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏦</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Financial Services</h3>
                <p className="text-sm text-gray-500">FinTech</p>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              $8M Savings with 80% Cost Reduction
            </h4>
            <p className="text-gray-600 mb-4">
              Leading FinTech company achieved $8M savings through intelligent model optimization 
              and dynamic resource scaling, reducing costs by 80%.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">6 months</div>
              <Link
                href="/case-studies/ai-fintech-cost-optimization-2026"
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Read Case Study →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🛒</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">E-commerce</h3>
                <p className="text-sm text-gray-500">Retail</p>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              $6M Savings with 65% Cost Reduction
            </h4>
            <p className="text-gray-600 mb-4">
              E-commerce leader achieved $6M savings through edge computing optimization 
              and model quantization, reducing costs by 65%.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">4 months</div>
              <Link
                href="/case-studies/ai-retail-cost-optimization-2026"
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
              >
                Read Case Study →
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/case-studies"
            className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            View All Cost Optimization Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
}