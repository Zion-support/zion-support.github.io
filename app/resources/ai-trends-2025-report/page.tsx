import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export default function AITrends2025Report() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Trends 2025 Report - Free Download | Zion Tech Group"
        description="Download our comprehensive AI Trends 2025 report covering the top 15 predictions, market analysis, and implementation strategies. Free 150+ page resource."
        keywords="AI trends 2025 report, AI predictions, artificial intelligence trends, AI market analysis, free AI report"
        url="/resources/ai-trends-2025-report"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Resources
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">Free Download</span>
            <span className="text-gray-400">•</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
              New
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Trends 2025 Report
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive analysis of the top 15 AI trends that will shape 2025. 
            Get insights, predictions, and actionable strategies from our research team.
          </p>
        </div>

        {/* Report Overview */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Pages of Analysis</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15</div>
              <div className="text-gray-600">Key Trends Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">$2.4T</div>
              <div className="text-gray-600">Market Opportunity</div>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What's Included in This Report</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">📊 Market Analysis</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Global AI market size and growth projections</li>
                <li>• Industry-specific adoption rates and trends</li>
                <li>• Investment patterns and funding analysis</li>
                <li>• Competitive landscape assessment</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🔮 Trend Predictions</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Top 15 AI trends for 2025</li>
                <li>• Technology maturity assessments</li>
                <li>• Implementation timelines and roadmaps</li>
                <li>• Risk and opportunity analysis</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">💼 Business Impact</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• ROI projections and business value</li>
                <li>• Industry transformation scenarios</li>
                <li>• Job market impact and skills requirements</li>
                <li>• Regulatory and compliance considerations</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🎯 Action Plans</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Strategic implementation frameworks</li>
                <li>• Technology selection guidelines</li>
                <li>• Change management strategies</li>
                <li>• Success metrics and KPIs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Report Highlights</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Autonomous AI Agents Revolution</h3>
                  <p className="text-gray-700">
                    By end of 2025, 60% of enterprises will deploy autonomous AI agents, 
                    leading to 40% operational cost reduction and 24/7 automated processes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🧠</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Multimodal AI Breakthrough</h3>
                  <p className="text-gray-700">
                    AI systems will achieve human-level performance in understanding text, 
                    images, audio, and video simultaneously, enabling breakthrough applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Green AI Standardization</h3>
                  <p className="text-gray-700">
                    80% of new AI deployments will include carbon footprint considerations, 
                    with 60% reduction in energy consumption through sustainable practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Form */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Download Your Free Report</h2>
            <p className="text-xl opacity-90 mb-8 text-center max-w-2xl mx-auto">
              Get instant access to our comprehensive AI Trends 2025 report. 
              No spam, no strings attached.
            </p>
            
            <form className="max-w-md mx-auto">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Download Free Report
                </button>
              </div>
              <p className="text-sm opacity-75 text-center mt-4">
                By downloading, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/resources/ai-implementation-master-guide-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600">AI Implementation Master Guide</h3>
                    <p className="text-gray-600">Complete implementation framework</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Step-by-step guide to implementing AI in your organization with proven methodologies and best practices.
                </p>
              </div>
            </Link>

            <Link href="/resources/ai-enterprise-readiness-assessment-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600">AI Readiness Assessment</h3>
                    <p className="text-gray-600">Free enterprise assessment</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Evaluate your organization's AI readiness across six critical dimensions and get personalized recommendations.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Implementing AI Trends?</h2>
          <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
            Our AI experts can help you implement these trends in your organization. 
            Get a free consultation and custom implementation roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View All Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}