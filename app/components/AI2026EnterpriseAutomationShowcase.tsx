import React from 'react';
import Link from 'next/link';

const AI2026EnterpriseAutomationShowcase = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🎯 AI 2026 ENTERPRISE AUTOMATION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Achieve <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">1000%+ ROI</span>
            <br />
            with AI Automation
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join Fortune 500 companies achieving unprecedented results through strategic AI automation implementation. 
            Complete implementation roadmap and proven methodologies included.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">2500%</div>
            <div className="text-gray-600 font-medium">Maximum ROI Achieved</div>
            <div className="text-sm text-gray-500 mt-2">Within 12 months</div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">$300M</div>
            <div className="text-gray-600 font-medium">Annual Savings</div>
            <div className="text-sm text-gray-500 mt-2">For Fortune 500 companies</div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-600 font-medium">Process Automation</div>
            <div className="text-sm text-gray-500 mt-2">Average automation rate</div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">99.2%</div>
            <div className="text-gray-600 font-medium">Error Reduction</div>
            <div className="text-sm text-gray-500 mt-2">Decrease in manual errors</div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Ultimate Guide */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">AI 2026 Enterprise Automation Mastery</h3>
              <p className="text-purple-100">The Ultimate Guide to 1000% ROI</p>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-6">
                Discover how Fortune 500 companies are achieving unprecedented ROI through advanced AI automation strategies. 
                Complete implementation roadmap with real-world case studies and proven methodologies.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Complete implementation roadmap</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Real-world case studies</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Technology stack recommendations</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">ROI optimization strategies</span>
                </div>
              </div>
              <Link
                href="/content/blog/ai-2026-enterprise-ai-automation-mastery-ultimate-guide"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                Read Complete Guide
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Case Study */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">2500% ROI Success Story</h3>
              <p className="text-green-100">Fortune 500 Manufacturing Case Study</p>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-6">
                Learn how Global Manufacturing Corp achieved unprecedented 2,500% ROI within just 12 months 
                through strategic AI automation implementation. Complete transformation journey with detailed results.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">$300M annual savings achieved</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">95% process automation rate</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">400% improvement in efficiency</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Complete implementation roadmap</span>
                </div>
              </div>
              <Link
                href="/content/case-studies/ai-2026-enterprise-automation-2500-roi-success-story"
                className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300"
              >
                Read Case Study
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Implementation Phases */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Implementation Roadmap</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Foundation (Months 1-2)</h4>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• AI readiness assessment</li>
                <li>• Pilot program selection</li>
                <li>• Technology infrastructure setup</li>
                <li>• Team training and preparation</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Implementation (Months 3-9)</h4>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• RPA deployment</li>
                <li>• AI integration</li>
                <li>• Advanced automation</li>
                <li>• Performance monitoring</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Optimization (Months 10-12)</h4>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Continuous improvement</li>
                <li>• Scale and expansion</li>
                <li>• Advanced AI capabilities</li>
                <li>• ROI maximization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Achieve 1000%+ ROI?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join Fortune 500 companies transforming their operations with AI automation. 
            Get your free assessment and custom implementation roadmap today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Assessment
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2026EnterpriseAutomationShowcase;