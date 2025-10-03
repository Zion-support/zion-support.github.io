// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Zap, Users, TrendingUp, DollarSign, Clock, Shield, BarChart3 } from 'lucide-react';

export default function AISocialMediaContentGenerator() {
  return (
    <>
      <Helmet>
        <title>AI Social Media Content Generator | Zion Tech Group</title>
        <meta name="description" content="Generate engaging social media content with AI. Create posts, captions, hashtags, and visual content for all platforms. Boost engagement and save time." />
        <meta name="keywords" content="AI social media, content generation, social media automation, AI posts, social media marketing" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-social-media-content-generator" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Social Media Content Generator
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your social media presence with AI-powered content generation. Create engaging posts, captions, hashtags, and visual content for all platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#pricing" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Pricing
                </a>
                <a href="/contact" className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300">Everything you need to create compelling social media content</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Zap className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Content Creation</h3>
                <p className="text-gray-300">Generate engaging posts, captions, and hashtags using advanced AI algorithms trained on viral content patterns.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Users className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Multi-Platform Support</h3>
                <p className="text-gray-300">Create optimized content for Instagram, Facebook, Twitter, LinkedIn, TikTok, and more platforms.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <TrendingUp className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Trend Analysis</h3>
                <p className="text-gray-300">Stay ahead with real-time trend analysis and hashtag suggestions based on current viral content.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <BarChart3 className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Performance Analytics</h3>
                <p className="text-gray-300">Track engagement metrics and optimize content strategy with detailed analytics and insights.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Clock className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Content Scheduling</h3>
                <p className="text-gray-300">Schedule posts across multiple platforms with optimal timing recommendations for maximum engagement.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Shield className="h-12 w-12 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Brand Safety</h3>
                <p className="text-gray-300">Ensure all generated content aligns with your brand voice and guidelines with built-in safety filters.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Content Generator?</h2>
              <p className="text-xl text-gray-300">Transform your social media strategy with intelligent automation</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Save 80% of Content Creation Time</h3>
                      <p className="text-gray-300">Generate weeks of content in minutes, not hours. Focus on strategy while AI handles creation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Increase Engagement by 300%</h3>
                      <p className="text-gray-300">AI-optimized content consistently outperforms manually created posts across all platforms.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Consistent Brand Voice</h3>
                      <p className="text-gray-300">Maintain consistent messaging and tone across all platforms with AI-trained brand guidelines.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">24/7 Content Production</h3>
                      <p className="text-gray-300">Never run out of content with continuous AI generation and automated scheduling.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">ROI Calculator</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-white">
                    <span>Time Saved per Month:</span>
                    <span className="font-semibold">40 hours</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Average Engagement Increase:</span>
                    <span className="font-semibold">300%</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Estimated Monthly Savings:</span>
                    <span className="font-semibold">$2,400</span>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between text-white text-lg font-bold">
                      <span>Net ROI:</span>
                      <span className="text-green-300">1,200%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300">Choose the plan that fits your content needs</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">$29</div>
                  <div className="text-gray-300">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    100 AI-generated posts per month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    3 social media platforms
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Basic analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Email support
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center">
                  Get Started
                </a>
              </div>
              
              {/* Professional Plan */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-lg border-2 border-blue-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                  <div className="text-4xl font-bold text-white mb-2">$79</div>
                  <div className="text-blue-100">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    500 AI-generated posts per month
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    All social media platforms
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    Advanced analytics & insights
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    Content scheduling
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    Priority support
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-white hover:bg-gray-100 text-blue-600 py-3 rounded-lg font-semibold transition-colors block text-center">
                  Get Started
                </a>
              </div>
              
              {/* Enterprise Plan */}
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">$199</div>
                  <div className="text-gray-300">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Unlimited AI-generated posts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    All platforms + custom integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Custom brand training
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    White-label options
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    24/7 dedicated support
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Social Media?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using AI to create engaging social media content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </a>
              <a href="tel:+13024640950" className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call: +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}