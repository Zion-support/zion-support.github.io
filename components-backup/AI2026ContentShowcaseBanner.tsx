import React from 'react';
import Link from 'next/link';
import { BookOpen, FileText, TrendingUp, Target, Award, Lightbulb } from 'lucide-react';

export default function AI2026ContentShowcaseBanner() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full px-6 py-3 mb-6">
            <Award className="w-5 h-5 mr-2" />
            <span className="font-semibold">PREMIUM 2026 CONTENT</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Master Enterprise AI with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Expert Guidance
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive resources, proven strategies, and real-world success stories to accelerate your AI transformation journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Enterprise Automation Guide */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Enterprise Automation</h3>
                <span className="text-sm text-gray-500">Implementation Guide</span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              Learn how AI-driven autonomous operations can transform your business with proven strategies and real-world examples.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <BookOpen className="w-4 h-4 mr-2" />
                <span>12 min read</span>
              </div>
              <Link 
                href="/blog/ai-2026-enterprise-automation-breakthrough"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Read Now →
              </Link>
            </div>
          </div>

          {/* Quantum AI Revolution */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Quantum AI</h3>
                <span className="text-sm text-gray-500">Business Intelligence</span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              Discover how quantum computing is revolutionizing business intelligence with exponential processing power and advanced analytics.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <BookOpen className="w-4 h-4 mr-2" />
                <span>15 min read</span>
              </div>
              <Link 
                href="/blog/quantum-ai-2026-business-intelligence-revolution"
                className="text-purple-600 hover:text-purple-700 font-semibold"
              >
                Explore →
              </Link>
            </div>
          </div>

          {/* Fortune 500 Case Study */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Success Story</h3>
                <span className="text-sm text-gray-500">Fortune 500 Case</span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              Real transformation story: $52M+ savings, 156% ROI, and complete operational overhaul in 18 months.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <FileText className="w-4 h-4 mr-2" />
                <span>18 min read</span>
              </div>
              <Link 
                href="/case-studies/fortune-500-ai-transformation-success"
                className="text-orange-600 hover:text-orange-700 font-semibold"
              >
                View Case Study →
              </Link>
            </div>
          </div>
        </div>

        {/* Implementation Roadmap CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Enterprise?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get our comprehensive 24-month implementation roadmap with step-by-step guidance, best practices, and proven strategies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/guides/ai-2026-implementation-roadmap"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Implementation Roadmap
            </Link>
            <Link 
              href="/tools/ai-roi-calculator"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Calculate Your ROI
            </Link>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Proven ROI</h4>
            <p className="text-gray-600">156% average return on AI investments</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Real Results</h4>
            <p className="text-gray-600">$52M+ in documented cost savings</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Expert Guidance</h4>
            <p className="text-gray-600">Step-by-step implementation strategies</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-orange-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Future-Ready</h4>
            <p className="text-gray-600">Latest 2026 AI trends and technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
}