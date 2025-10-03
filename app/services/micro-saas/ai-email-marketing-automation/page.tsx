import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AIEmailMarketingAutomationPage() {
  return (
    <>
      <Helmet>
        <title>AI Email Marketing Automation | Zion Tech Group - Intelligent Campaign Management</title>
        <meta name="description" content="AI-powered email marketing automation platform with intelligent segmentation, personalization, and campaign optimization for maximum ROI." />
        <meta name="keywords" content="AI email marketing, email automation, campaign optimization, personalization, segmentation, email analytics" />
      </Helmet>
      
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Email Marketing Automation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Revolutionize your email marketing with AI-powered automation, intelligent segmentation, and personalized content that drives conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/case-studies" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Intelligent Segmentation</h3>
              <p className="text-gray-600 mb-4">AI automatically segments your audience based on behavior, preferences, and engagement patterns for targeted campaigns.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Behavioral segmentation</li>
                <li>• Demographic analysis</li>
                <li>• Engagement scoring</li>
                <li>• Dynamic lists</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Content Personalization</h3>
              <p className="text-gray-600 mb-4">Generate personalized email content that adapts to each recipient's interests, behavior, and preferences automatically.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Dynamic content blocks</li>
                <li>• Product recommendations</li>
                <li>• Personalized subject lines</li>
                <li>• A/B testing automation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Campaign Optimization</h3>
              <p className="text-gray-600 mb-4">AI continuously optimizes send times, frequency, and content to maximize open rates, clicks, and conversions.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Optimal send time prediction</li>
                <li>• Frequency optimization</li>
                <li>• Content performance analysis</li>
                <li>• Automated improvements</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Workflows</h3>
              <p className="text-gray-600 mb-4">Create sophisticated email sequences that trigger based on user actions, lifecycle stage, and engagement levels.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Welcome series automation</li>
                <li>• Abandoned cart recovery</li>
                <li>• Re-engagement campaigns</li>
                <li>• Lifecycle management</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Analytics</h3>
              <p className="text-gray-600 mb-4">Comprehensive analytics with AI insights to track performance, predict trends, and optimize your email strategy.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Real-time performance tracking</li>
                <li>• Predictive analytics</li>
                <li>• ROI measurement</li>
                <li>• Competitor benchmarking</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deliverability Optimization</h3>
              <p className="text-gray-600 mb-4">AI ensures your emails reach the inbox with advanced deliverability monitoring and optimization features.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Spam score monitoring</li>
                <li>• Reputation tracking</li>
                <li>• Bounce management</li>
                <li>• ISP compliance</li>
              </ul>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-center text-white mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Competitive Pricing Plans</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <div className="text-3xl font-bold mb-4">$49<span className="text-lg">/month</span></div>
                <ul className="space-y-2 text-left">
                  <li>• Up to 5,000 contacts</li>
                  <li>• 10,000 emails/month</li>
                  <li>• Basic AI features</li>
                  <li>• Email templates</li>
                  <li>• Standard support</li>
                </ul>
              </div>
              <div className="bg-white/20 rounded-lg p-6 border-2 border-white">
                <h3 className="text-xl font-bold mb-2">Professional</h3>
                <div className="text-3xl font-bold mb-4">$149<span className="text-lg">/month</span></div>
                <ul className="space-y-2 text-left">
                  <li>• Up to 25,000 contacts</li>
                  <li>• 50,000 emails/month</li>
                  <li>• Advanced AI automation</li>
                  <li>• Custom templates</li>
                  <li>• Priority support</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <div className="text-3xl font-bold mb-4">$399<span className="text-lg">/month</span></div>
                <ul className="space-y-2 text-left">
                  <li>• Unlimited contacts</li>
                  <li>• Unlimited emails</li>
                  <li>• Full AI suite</li>
                  <li>• White-label options</li>
                  <li>• Dedicated support</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-blue-100">* Market average: $75-300/month for enterprise email marketing platforms</p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Proven Results with AI Email Marketing</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">45% Higher Open Rates</h3>
                    <p className="text-gray-600">AI-optimized subject lines and send times significantly improve email open rates.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">60% Increase in Click-Through Rates</h3>
                    <p className="text-gray-600">Personalized content and intelligent segmentation drive higher engagement.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">300% ROI Improvement</h3>
                    <p className="text-gray-600">Automated workflows and AI optimization deliver exceptional return on investment.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Benchmarks</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-sm text-gray-600">"AI-powered email marketing increases revenue by 41% on average"</p>
                  <p className="text-xs text-gray-500 mt-1">- McKinsey Digital Marketing Report</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-sm text-gray-600">"Personalized emails generate 6x higher transaction rates"</p>
                  <p className="text-xs text-gray-500 mt-1">- Experian Email Marketing Study</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="text-sm text-gray-600">"Automated email campaigns see 119% higher click rates"</p>
                  <p className="text-xs text-gray-500 mt-1">- Epsilon Email Marketing Research</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-900 rounded-xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using AI to automate their email marketing and achieve unprecedented results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Your Free Trial
              </Link>
              <Link 
                to="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Compare Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}