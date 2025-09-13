import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI 2025 Global Enterprise Transformation: 2,500% ROI Breakthrough',
  description: 'Discover how a Fortune 500 company achieved 2,500% ROI through revolutionary AI transformation. Complete case study with implementation details and results.',
  keywords: ['AI case study', 'enterprise transformation', 'ROI', 'Fortune 500', 'AI implementation', 'business transformation'],
  openGraph: {
    title: 'AI 2025 Global Enterprise Transformation: 2,500% ROI',
    description: 'Revolutionary AI transformation case study with proven results',
    type: 'article',
  },
};

export default function AI2025GlobalTransformationCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            🏆 SUCCESS STORY
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI 2025 Global Enterprise Transformation
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            How a Fortune 500 company achieved 2,500% ROI through revolutionary AI transformation. 
            Complete implementation details, challenges overcome, and measurable results.
          </p>
          <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 max-w-2xl mx-auto mb-8">
            <div className="text-4xl font-bold text-green-400 mb-2">2,500% ROI</div>
            <div className="text-white text-lg">Achieved in 18 months</div>
          </div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Client Overview</h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                  <span className="font-semibold text-white">Industry:</span> Global Manufacturing
                </p>
                <p className="text-lg">
                  <span className="font-semibold text-white">Company Size:</span> Fortune 500 (50,000+ employees)
                </p>
                <p className="text-lg">
                  <span className="font-semibold text-white">Revenue:</span> $15+ billion annually
                </p>
                <p className="text-lg">
                  <span className="font-semibold text-white">Challenge:</span> Legacy systems, manual processes, declining efficiency
                </p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Key Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Initial Investment</span>
                  <span className="text-white font-semibold">$2.5M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Total Savings (18 months)</span>
                  <span className="text-green-400 font-semibold">$62.5M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">ROI</span>
                  <span className="text-green-400 font-bold text-2xl">2,500%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Payback Period</span>
                  <span className="text-blue-400 font-semibold">3.2 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            The Challenge
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-500/20 backdrop-blur-sm p-6 rounded-xl border border-red-500/50">
              <div className="text-4xl mb-4">📉</div>
              <h3 className="text-xl font-semibold text-white mb-4">Declining Efficiency</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• 40% manual processes</li>
                <li>• 60% data silos</li>
                <li>• 25% error rate</li>
                <li>• 3-day response times</li>
              </ul>
            </div>
            <div className="bg-orange-500/20 backdrop-blur-sm p-6 rounded-xl border border-orange-500/50">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-white mb-4">Rising Costs</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• $50M annual operational costs</li>
                <li>• 15% year-over-year increase</li>
                <li>• $2M monthly waste</li>
                <li>• 30% overstaffing</li>
              </ul>
            </div>
            <div className="bg-yellow-500/20 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/50">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold text-white mb-4">Time Delays</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• 72-hour decision cycles</li>
                <li>• 2-week report generation</li>
                <li>• 30-day implementation</li>
                <li>• 6-month planning cycles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Solution
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">AI-Powered Transformation</h3>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="text-2xl mb-3">🤖</div>
                  <h4 className="text-lg font-semibold text-white mb-2">Intelligent Process Automation</h4>
                  <p className="text-gray-300">
                    Deployed AI agents to automate 85% of manual processes, reducing errors by 95% 
                    and processing time by 90%.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="text-2xl mb-3">📊</div>
                  <h4 className="text-lg font-semibold text-white mb-2">Predictive Analytics</h4>
                  <p className="text-gray-300">
                    Implemented real-time analytics to predict demand, optimize inventory, 
                    and prevent equipment failures before they occur.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="text-2xl mb-3">⚡</div>
                  <h4 className="text-lg font-semibold text-white mb-2">Real-Time Decision Making</h4>
                  <p className="text-gray-300">
                    Created AI-powered dashboards that provide instant insights and 
                    recommendations for optimal business decisions.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Implementation Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">1</div>
                  <div>
                    <div className="text-white font-semibold">Month 1-2: Assessment & Planning</div>
                    <div className="text-gray-300 text-sm">System analysis and AI strategy development</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">2</div>
                  <div>
                    <div className="text-white font-semibold">Month 3-6: Core Implementation</div>
                    <div className="text-gray-300 text-sm">AI system deployment and integration</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">3</div>
                  <div>
                    <div className="text-white font-semibold">Month 7-12: Optimization</div>
                    <div className="text-gray-300 text-sm">Performance tuning and advanced features</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">4</div>
                  <div>
                    <div className="text-white font-semibold">Month 13-18: Scale & Expand</div>
                    <div className="text-gray-300 text-sm">Global rollout and continuous improvement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Measurable Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-green-500/20 backdrop-blur-sm p-6 rounded-xl border border-green-500/50 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">2,500%</div>
              <div className="text-white font-semibold mb-2">ROI</div>
              <div className="text-gray-300 text-sm">18-month return</div>
            </div>
            <div className="bg-blue-500/20 backdrop-blur-sm p-6 rounded-xl border border-blue-500/50 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-white font-semibold mb-2">Error Reduction</div>
              <div className="text-gray-300 text-sm">Process accuracy</div>
            </div>
            <div className="bg-purple-500/20 backdrop-blur-sm p-6 rounded-xl border border-purple-500/50 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">90%</div>
              <div className="text-white font-semibold mb-2">Time Savings</div>
              <div className="text-gray-300 text-sm">Process automation</div>
            </div>
            <div className="bg-orange-500/20 backdrop-blur-sm p-6 rounded-xl border border-orange-500/50 text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">$62.5M</div>
              <div className="text-white font-semibold mb-2">Cost Savings</div>
              <div className="text-gray-300 text-sm">Annual savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">💬</div>
          <blockquote className="text-2xl md:text-3xl text-white font-semibold mb-8 leading-relaxed">
            "Zion Tech Group's AI transformation exceeded our wildest expectations. 
            The 2,500% ROI speaks for itself, but the real value is in the operational 
            efficiency and competitive advantage we've gained."
          </blockquote>
          <div className="text-white text-lg">
            <div className="font-semibold">Sarah Johnson</div>
            <div className="text-green-100">Chief Technology Officer, Global Manufacturing Corp.</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free consultation and discover how AI can transform your business 
            with similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 text-lg shadow-lg"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 text-lg"
            >
              Download Implementation Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}