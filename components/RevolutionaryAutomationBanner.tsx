import React from 'react';
import Link from 'next/link';

export function RevolutionaryAutomationBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                🚀 NEW 2026
              </span>
              <span className="text-sm opacity-90">Revolutionary AI</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              AI Revolutionary Automation: 99% Process Automation & $15M+ ROI
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Discover how revolutionary AI automation achieves 99% process automation with $15M+ ROI 
              through intelligent, self-evolving systems that transform enterprise operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-revolutionary-automation-2026"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Complete Guide
              </Link>
              <Link
                href="/case-studies/ai-revolutionary-automation-success-2026"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
              >
                View $15M Success Story
              </Link>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-6">Key Results</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">99%</div>
                <div className="text-sm opacity-90">Process Automation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">$15M+</div>
                <div className="text-sm opacity-90">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">85%</div>
                <div className="text-sm opacity-90">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">12</div>
                <div className="text-sm opacity-90">Months to ROI</div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white border-opacity-20">
              <p className="text-sm opacity-90 text-center">
                "The revolutionary AI automation transformed our operations completely. We achieved 99% automation 
                across our supply chain and reduced costs by 85% while improving quality and speed."
              </p>
              <p className="text-xs opacity-75 text-center mt-2">
                — Sarah Chen, CTO, Global Manufacturing Corp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AIRevolutionaryAutomationBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
            ✨ BREAKTHROUGH 2026
          </span>
        </div>
        <h2 className="text-3xl font-bold mb-4">
          Revolutionary AI Automation: 99% Process Automation & $15M+ ROI
        </h2>
        <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
          Transform your enterprise with revolutionary AI automation that achieves 99% process automation 
          and delivers $15M+ ROI through intelligent, self-evolving systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog/ai-revolutionary-automation-2026"
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Read Implementation Guide
          </Link>
          <Link
            href="/case-studies/ai-revolutionary-automation-success-2026"
            className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
          >
            View Success Story
          </Link>
        </div>
      </div>
    </section>
  );
}

export function RevolutionaryAutomationShowcase() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Automation Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how companies are achieving unprecedented results with revolutionary AI automation
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏭</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Manufacturing</h3>
                <p className="text-sm text-gray-500">Fortune 500</p>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              $15M ROI with 99% Automation
            </h4>
            <p className="text-gray-600 mb-4">
              Global Manufacturing Corp achieved 99% process automation across their entire supply chain, 
              reducing costs by 85% and generating $15M annual ROI.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">12 months</div>
              <Link
                href="/case-studies/ai-revolutionary-automation-success-2026"
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
              >
                Read Case Study →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏪</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Retail</h3>
                <p className="text-sm text-gray-500">E-commerce</p>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              $8M ROI with 98% Automation
            </h4>
            <p className="text-gray-600 mb-4">
              Leading e-commerce company achieved 98% automation in inventory management and customer service, 
              resulting in $8M annual ROI and 300% productivity gains.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">10 months</div>
              <Link
                href="/case-studies/ai-retail-automation-2026"
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
              $5M ROI with 95% Automation
            </h4>
            <p className="text-gray-600 mb-4">
              FinTech leader achieved 95% automation in financial processes, reducing operational costs by 70% 
              and generating $5M annual ROI through intelligent automation.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">8 months</div>
              <Link
                href="/case-studies/ai-fintech-transformation-2026"
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Read Case Study →
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/case-studies"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            View All Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
}