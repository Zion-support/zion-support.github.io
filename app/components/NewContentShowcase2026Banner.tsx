import React from 'react';
import Link from 'next/link';

export default function NewContentShowcase2026Banner() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-3 mb-8">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="font-semibold">NEW CONTENT SHOWCASE 2026</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Business with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Latest AI Innovations
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI strategies, real-world success stories, and proven frameworks 
            that are helping businesses achieve unprecedented growth and efficiency.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Featured Content */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">📊</span>
                </div>
                <div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    FEATURED GUIDE
                  </span>
                  <p className="text-gray-500 text-sm mt-1">Complete Implementation</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI Enterprise Adoption 2025: Complete Implementation Guide
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Master AI enterprise adoption with proven strategies, ROI frameworks, and step-by-step 
                implementation roadmaps. Achieve 300% ROI and transform your organization.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">300%</div>
                  <div className="text-xs text-gray-600">Average ROI</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">70%</div>
                  <div className="text-xs text-gray-600">Cost Reduction</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">90%</div>
                  <div className="text-xs text-gray-600">Efficiency Gain</div>
                </div>
              </div>
              
              <Link
                href="/blog/ai-enterprise-adoption-2025"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Read Complete Guide</span>
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🔮</span>
                </div>
                <div>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    TRENDS ANALYSIS
                  </span>
                  <p className="text-gray-500 text-sm mt-1">Industry Insights</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI Trends 2025: Top 10 Predictions & Industry Insights
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Discover the transformative AI technologies that will reshape industries in 2025. 
                From autonomous agents to quantum AI, explore what's driving innovation.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Autonomous Agents</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Edge AI</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">GenAI</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Quantum AI</span>
              </div>
              
              <Link
                href="/blog/ai-trends-2025-predictions"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Explore Trends</span>
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column - Success Stories */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🏭</span>
                </div>
                <div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    SUCCESS STORY
                  </span>
                  <p className="text-gray-500 text-sm mt-1">Manufacturing</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement 
                with AI supply chain optimization, saving $12M annually.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">$12M</div>
                  <div className="text-xs text-gray-600">Annual Savings</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">95%</div>
                  <div className="text-xs text-gray-600">On-Time Delivery</div>
                </div>
              </div>
              
              <Link
                href="/case-studies/ai-supply-chain-optimization-2025"
                className="inline-flex items-center bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>View Case Study</span>
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">More Success Stories</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-sm">💰</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">FinTech AI Risk Compliance</h4>
                    <p className="text-gray-600 text-sm">70% risk reduction & $2.5M savings</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 text-sm">🏪</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Retail AI Transformation</h4>
                    <p className="text-gray-600 text-sm">150% revenue growth</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-sm">🏥</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Healthcare AI</h4>
                    <p className="text-gray-600 text-sm">40% better diagnostics</p>
                  </div>
                </div>
              </div>
              
              <Link
                href="/case-studies"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors mt-4"
              >
                <span>View All Case Studies</span>
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already achieving 300% ROI with our proven AI strategies. 
            Get a personalized transformation roadmap for your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-center"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
            >
              Get Free Consultation
            </a>
          </div>
          
          <p className="text-white/70 text-sm mt-6">
            📧 Get instant access to our AI transformation playbook
          </p>
        </div>
      </div>
    </section>
  );
}