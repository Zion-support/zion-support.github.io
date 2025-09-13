import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI 2025 Trends & Predictions: The Future of Artificial Intelligence',
  description: 'Discover the most important AI trends and predictions for 2025. From quantum computing breakthroughs to neural interfaces, explore what the future holds for artificial intelligence.',
  keywords: ['AI 2025', 'AI trends', 'AI predictions', 'artificial intelligence', 'quantum computing', 'neural interfaces', 'machine learning'],
};

export default function AI2025TrendsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🔮 BREAKTHROUGH PREDICTIONS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI 2025 Trends & Predictions
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              The most comprehensive analysis of AI trends and predictions for 2025. 
              Discover breakthrough technologies, market insights, and implementation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#trends"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                Explore Trends
              </Link>
              <Link
                href="#predictions"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
              >
                View Predictions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Trends Section */}
      <section id="trends" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Top AI Trends for 2025
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These revolutionary trends will shape the AI landscape in 2025 and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Trend 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Neural Interface Revolution</h3>
              <p className="text-gray-600 mb-4">
                Direct brain-computer interfaces will enable seamless human-AI collaboration, 
                achieving 95% accuracy in thought-to-action translation.
              </p>
              <div className="flex items-center text-sm text-blue-600 font-semibold">
                <span>Expected Impact: 15,000% ROI</span>
              </div>
            </div>

            {/* Trend 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quantum-AI Fusion</h3>
              <p className="text-gray-600 mb-4">
                Quantum computing will accelerate AI training by 10,000x, enabling 
                real-time processing of complex neural networks.
              </p>
              <div className="flex items-center text-sm text-purple-600 font-semibold">
                <span>Breakthrough Technology</span>
              </div>
            </div>

            {/* Trend 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Autonomous AI Agents</h3>
              <p className="text-gray-600 mb-4">
                Self-managing AI systems will handle complex business processes 
                with 99.9% accuracy and minimal human intervention.
              </p>
              <div className="flex items-center text-sm text-green-600 font-semibold">
                <span>Market Size: $2.4T</span>
              </div>
            </div>

            {/* Trend 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Edge AI Computing</h3>
              <p className="text-gray-600 mb-4">
                Distributed AI processing will reduce latency by 90% and enable 
                real-time decision making at the edge.
              </p>
              <div className="flex items-center text-sm text-orange-600 font-semibold">
                <span>Performance Boost: 90%</span>
              </div>
            </div>

            {/* Trend 5 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Drug Discovery</h3>
              <p className="text-gray-600 mb-4">
                AI will accelerate drug discovery by 50x, reducing development 
                time from 10 years to 6 months.
              </p>
              <div className="flex items-center text-sm text-red-600 font-semibold">
                <span>Time Reduction: 50x</span>
              </div>
            </div>

            {/* Trend 6 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Space AI Technology</h3>
              <p className="text-gray-600 mb-4">
                AI-powered space exploration will enable autonomous Mars missions 
                and deep space colonization.
              </p>
              <div className="flex items-center text-sm text-indigo-600 font-semibold">
                <span>Mission Success: 95%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Predictions Section */}
      <section id="predictions" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI 2025 Predictions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert predictions and market forecasts for the AI industry in 2025
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Market Predictions */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Predictions</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Global AI Market Size</span>
                  <span className="text-2xl font-bold text-blue-600">$1.8T</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Enterprise AI Adoption</span>
                  <span className="text-2xl font-bold text-green-600">85%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">AI Job Creation</span>
                  <span className="text-2xl font-bold text-purple-600">2.3M</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">AI ROI Average</span>
                  <span className="text-2xl font-bold text-orange-600">340%</span>
                </div>
              </div>
            </div>

            {/* Technology Predictions */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology Predictions</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Quantum AI Breakthrough</span>
                  <span className="text-2xl font-bold text-indigo-600">Q2 2025</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">AGI Achievement</span>
                  <span className="text-2xl font-bold text-red-600">Q4 2025</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Neural Interface Launch</span>
                  <span className="text-2xl font-bold text-cyan-600">Q3 2025</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Edge AI Dominance</span>
                  <span className="text-2xl font-bold text-teal-600">Q1 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Guide Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Implement AI in 2025?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get started with our comprehensive implementation guides and resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/resources/ai-2025-implementation-guide" className="group">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold mb-4">Implementation Guide</h3>
                <p className="text-blue-100 mb-4">
                  Step-by-step guide to implementing AI in your organization
                </p>
                <div className="flex items-center text-sm font-semibold">
                  <span>Download Free</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/tools/ai-roi-calculator" className="group">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">🧮</div>
                <h3 className="text-xl font-bold mb-4">ROI Calculator</h3>
                <p className="text-green-100 mb-4">
                  Calculate the potential ROI of your AI investments
                </p>
                <div className="flex items-center text-sm font-semibold">
                  <span>Try Now</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/webinars/ai-2025-trends" className="group">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">🎥</div>
                <h3 className="text-xl font-bold mb-4">Expert Webinar</h3>
                <p className="text-orange-100 mb-4">
                  Join our experts for an in-depth discussion on AI trends
                </p>
                <div className="flex items-center text-sm font-semibold">
                  <span>Register Free</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Ahead of AI Trends
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Get the latest AI insights, trends, and predictions delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/newsletter"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Subscribe to Newsletter
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              Contact Our Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}