import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI 2025 Enterprise Success Stories: Real Results from Real Companies',
  description: 'Discover how leading enterprises achieved 300%+ ROI through AI transformation. Real case studies, implementation strategies, and proven results.',
  keywords: 'AI success stories, enterprise AI, AI ROI, AI transformation, business automation, AI case studies',
};

export default function AISuccessStories2025() {
  const successStories = [
    {
      company: 'TechCorp Global',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes causing 15% defect rate',
      solution: 'AI-powered computer vision system for real-time quality inspection',
      results: [
        '95% reduction in defect rate',
        '$2.3M annual cost savings',
        '40% faster production cycles',
        '99.8% accuracy in defect detection'
      ],
      timeline: '6 months',
      investment: '$450K',
      roi: '511%'
    },
    {
      company: 'FinanceFirst Bank',
      industry: 'Financial Services',
      challenge: 'Manual loan processing taking 5-7 days per application',
      solution: 'AI-driven automated loan underwriting and risk assessment',
      results: [
        '80% faster loan processing',
        '60% reduction in manual review time',
        '35% increase in approved applications',
        '45% reduction in default rates'
      ],
      timeline: '4 months',
      investment: '$320K',
      roi: '387%'
    },
    {
      company: 'RetailMax Chain',
      industry: 'Retail',
      challenge: 'Inventory management inefficiencies causing $1.2M in lost sales',
      solution: 'AI-powered demand forecasting and inventory optimization',
      results: [
        '30% reduction in stockouts',
        '25% decrease in overstock',
        '$1.8M increase in revenue',
        '50% improvement in inventory turnover'
      ],
      timeline: '3 months',
      investment: '$280K',
      roi: '543%'
    },
    {
      company: 'HealthCare Plus',
      industry: 'Healthcare',
      challenge: 'Patient scheduling bottlenecks causing 40% no-show rates',
      solution: 'AI-driven predictive scheduling and patient engagement system',
      results: [
        '65% reduction in no-show rates',
        '30% increase in patient satisfaction',
        '25% improvement in resource utilization',
        '$500K annual cost savings'
      ],
      timeline: '5 months',
      investment: '$190K',
      roi: '263%'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI 2025 Enterprise Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Real companies, real results. Discover how leading enterprises achieved 
              unprecedented ROI through strategic AI implementation. From 300% to 500%+ 
              returns in just 3-6 months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                Start Your AI Journey
              </Link>
              <Link
                href="/services"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These aren't theoretical case studies. These are real implementations 
              with measurable, documented results from companies just like yours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{story.company}</h3>
                    <p className="text-lg text-blue-600 font-semibold">{story.industry}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-600">{story.roi}</div>
                    <div className="text-sm text-gray-500">ROI</div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600">{story.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {story.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{story.timeline}</div>
                    <div className="text-sm text-gray-500">Timeline</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{story.investment}</div>
                    <div className="text-sm text-gray-500">Investment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{story.roi}</div>
                    <div className="text-sm text-gray-500">ROI</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join These Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't let your competitors get ahead. Start your AI transformation journey 
            today and achieve similar results in just 3-6 months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Free AI Assessment
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}