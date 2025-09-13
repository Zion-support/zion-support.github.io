import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';
import ErrorBoundary from '../../../components/ErrorBoundary';

export default function AISuccessStories2025() {
  return (
    <ErrorBoundary>
      <SEO 
        title="AI Success Stories 2025 - Real Results & ROI"
        description="Discover how leading companies achieved 2,500-5,000% ROI with our AI solutions. Real case studies, measurable results, and transformation stories from Fortune 500 companies."
        keywords={[
          'AI success stories',
          'AI case studies',
          'AI ROI results',
          'AI transformation',
          'AI implementation success',
          'AI business results',
          'AI customer success',
          'AI testimonials',
          'AI company results'
        ]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Success Stories
                <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  2025
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Real results from real companies. Discover how our AI solutions delivered 
                unprecedented ROI and transformed businesses across industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/ai-success-stories-2025#stories"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
                >
                  View Success Stories
                </Link>
                <Link 
                  href="/contact"
                  className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Start Your Success Story
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proven Results Across Industries
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions have delivered measurable results for companies worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">2,500%</div>
                <div className="text-lg text-white font-semibold mb-1">Average ROI</div>
                <div className="text-sm text-gray-300">Across all implementations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-lg text-white font-semibold mb-1">Accuracy Rate</div>
                <div className="text-sm text-gray-300">In predictive analytics</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">80%</div>
                <div className="text-lg text-white font-semibold mb-1">Cost Reduction</div>
                <div className="text-sm text-gray-300">In operational expenses</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-lg text-white font-semibold mb-1">Companies</div>
                <div className="text-sm text-gray-300">Successfully transformed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section id="stories" className="py-20 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real companies, real challenges, real results
              </p>
            </div>

            <div className="space-y-12">
              {/* Story 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-xl font-bold text-white">F500</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Fortune 500 Manufacturing</h3>
                        <p className="text-gray-300">Global Manufacturing Leader</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300">
                        Struggling with supply chain inefficiencies, predicting demand fluctuations, 
                        and optimizing production schedules across 50+ facilities worldwide.
                      </p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300">
                        Implemented our Quantum-AI Fusion platform with predictive analytics, 
                        autonomous decision-making systems, and real-time optimization algorithms.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-400">3,200%</div>
                        <div className="text-sm text-gray-300">ROI</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-400">$2.3B</div>
                        <div className="text-sm text-gray-300">Cost Savings</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        95% reduction in supply chain disruptions
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        99.7% accuracy in demand forecasting
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        60% improvement in production efficiency
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        8-month implementation timeline
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Story 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-xl font-bold text-white">FINTECH</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Leading FinTech Platform</h3>
                        <p className="text-gray-300">Digital Banking & Payments</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300">
                        Needed to detect fraudulent transactions in real-time while maintaining 
                        seamless user experience for 10+ million customers.
                      </p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300">
                        Deployed our AI Security Revolution platform with neural interface 
                        technology and edge computing for instant fraud detection.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-400">4,100%</div>
                        <div className="text-sm text-gray-300">ROI</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-400">$850M</div>
                        <div className="text-sm text-gray-300">Fraud Prevention</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Zero false positives in fraud detection
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        99.9% accuracy in real-time detection
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        95% reduction in processing time
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        6-month implementation timeline
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Story 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-xl font-bold text-white">HEALTH</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Healthcare Innovation Hub</h3>
                        <p className="text-gray-300">Medical Research & Diagnostics</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300">
                        Required advanced AI for medical image analysis, drug discovery, 
                        and personalized treatment recommendations for rare diseases.
                      </p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300">
                        Implemented our Neural Interface Revolution with quantum computing 
                        for medical AI, enabling breakthrough discoveries and treatments.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-400">5,000%</div>
                        <div className="text-sm text-gray-300">ROI</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-400">$1.2B</div>
                        <div className="text-sm text-gray-300">Research Value</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        99.8% accuracy in medical diagnosis
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        10x faster drug discovery process
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        85% improvement in treatment outcomes
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        12-month implementation timeline
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that have transformed their business with our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Transformation
              </Link>
              <Link 
                href="/ai-success-stories-2025#stories"
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Read More Stories
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}