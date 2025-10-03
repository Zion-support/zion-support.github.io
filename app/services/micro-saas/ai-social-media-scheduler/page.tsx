import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AISocialMediaSchedulerPage() {
  return (
    <>
      <Helmet>
        <title>AI Social Media Scheduler | Zion Tech Group - Automated Content Management</title>
        <meta name="description" content="AI-powered social media scheduling platform with intelligent content optimization, hashtag suggestions, and cross-platform posting automation." />
        <meta name="keywords" content="AI social media scheduler, content automation, social media management, hashtag optimization, cross-platform posting" />
      </Helmet>
      
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Social Media Scheduler
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your social media presence with AI-powered scheduling, content optimization, and intelligent hashtag suggestions across all platforms.
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
                View Case Studies
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Content Optimization</h3>
              <p className="text-gray-600 mb-4">Automatically optimize post timing, hashtags, and content for maximum engagement across platforms.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Optimal posting time prediction</li>
                <li>• Hashtag performance analysis</li>
                <li>• Content format optimization</li>
                <li>• Engagement rate improvement</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Platform Management</h3>
              <p className="text-gray-600 mb-4">Schedule and manage content across Instagram, Facebook, Twitter, LinkedIn, and TikTok from one dashboard.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Cross-platform posting</li>
                <li>• Platform-specific optimization</li>
                <li>• Unified analytics dashboard</li>
                <li>• Bulk content upload</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Analytics</h3>
              <p className="text-gray-600 mb-4">Track performance with detailed analytics, ROI measurement, and AI-powered insights for better strategy.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Performance tracking</li>
                <li>• ROI measurement</li>
                <li>• Competitor analysis</li>
                <li>• Trend identification</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Scheduling</h3>
              <p className="text-gray-600 mb-4">AI determines the best times to post based on your audience's activity patterns and engagement history.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Audience behavior analysis</li>
                <li>• Optimal timing suggestions</li>
                <li>• Timezone management</li>
                <li>• Frequency optimization</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Content Automation</h3>
              <p className="text-gray-600 mb-4">Automate repetitive tasks with AI-powered content creation, repurposing, and campaign management.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Auto content generation</li>
                <li>• Post recycling</li>
                <li>• Campaign automation</li>
                <li>• Template management</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Brand Safety</h3>
              <p className="text-gray-600 mb-4">Ensure brand consistency and safety with AI-powered content moderation and brand guideline compliance.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Content moderation</li>
                <li>• Brand guideline compliance</li>
                <li>• Crisis management</li>
                <li>• Approval workflows</li>
              </ul>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-center text-white mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <div className="text-3xl font-bold mb-4">$29<span className="text-lg">/month</span></div>
                <ul className="space-y-2 text-left">
                  <li>• Up to 3 social accounts</li>
                  <li>• 100 posts per month</li>
                  <li>• Basic AI optimization</li>
                  <li>• Standard analytics</li>
                  <li>• Email support</li>
                </ul>
              </div>
              <div className="bg-white/20 rounded-lg p-6 border-2 border-white">
                <h3 className="text-xl font-bold mb-2">Professional</h3>
                <div className="text-3xl font-bold mb-4">$79<span className="text-lg">/month</span></div>
                <ul className="space-y-2 text-left">
                  <li>• Up to 10 social accounts</li>
                  <li>• 500 posts per month</li>
                  <li>• Advanced AI features</li>
                  <li>• Detailed analytics</li>
                  <li>• Priority support</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <div className="text-3xl font-bold mb-4">$199<span className="text-lg">/month</span></div>
                <ul className="space-y-2 text-left">
                  <li>• Unlimited accounts</li>
                  <li>• Unlimited posts</li>
                  <li>• Full AI suite</li>
                  <li>• Custom analytics</li>
                  <li>• Dedicated support</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-blue-100">* Average market price: $45-150/month for similar platforms</p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our AI Social Media Scheduler?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">300% Increase in Engagement</h3>
                    <p className="text-gray-600">Our AI optimization leads to significantly higher engagement rates compared to manual posting.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Save 10+ Hours Weekly</h3>
                    <p className="text-gray-600">Automate your social media management and focus on strategy instead of manual posting.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Data-Driven Insights</h3>
                    <p className="text-gray-600">Make informed decisions with comprehensive analytics and AI-powered recommendations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry References</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-sm text-gray-600">"AI-powered social media tools are expected to grow 25% annually through 2027"</p>
                  <p className="text-xs text-gray-500 mt-1">- Social Media Today Research</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-sm text-gray-600">"Companies using AI scheduling see 40% better engagement rates"</p>
                  <p className="text-xs text-gray-500 mt-1">- Hootsuite Digital Report 2024</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="text-sm text-gray-600">"Automated social media management reduces costs by 60%"</p>
                  <p className="text-xs text-gray-500 mt-1">- Buffer State of Social Media</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-900 rounded-xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Social Media?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using AI to optimize their social media presence and drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started Today
              </Link>
              <Link 
                to="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                View All Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}