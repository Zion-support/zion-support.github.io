import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Content Generator | Zion Tech Group - Automated Content Creation',
  description: 'AI-powered content generation for blogs, social media, and marketing. GPT-4 powered systems with SEO optimization and multi-language support.',
  keywords: 'AI content generator, automated content creation, GPT-4, blog writing, social media content, SEO content',
};

export default function AIContentGeneratorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI Content Generator
          </h1>
          <p className="text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Transform your content strategy with GPT-4 powered AI that creates high-quality, 
            SEO-optimized content for blogs, social media, and marketing campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Content Generator Inquiry"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful AI Content Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI content generator uses advanced GPT-4 technology to create engaging, 
              SEO-optimized content that drives results for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Generation</h3>
              <p className="text-gray-600 mb-6">
                Create comprehensive blog posts with proper structure, SEO optimization, and engaging content that ranks well in search engines.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• SEO-optimized structure</li>
                <li>• Keyword integration</li>
                <li>• Engaging headlines</li>
                <li>• Call-to-action integration</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Media Content</h3>
              <p className="text-gray-600 mb-6">
                Generate engaging social media posts for all platforms with platform-specific optimization and trending hashtags.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Platform-specific formatting</li>
                <li>• Trending hashtag research</li>
                <li>• Engagement optimization</li>
                <li>• Multi-platform support</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Marketing Copy</h3>
              <p className="text-gray-600 mb-6">
                Create compelling marketing copy for ads, email campaigns, and landing pages that convert visitors into customers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Persuasive messaging</li>
                <li>• A/B testing variants</li>
                <li>• Conversion optimization</li>
                <li>• Brand voice consistency</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-language Support</h3>
              <p className="text-gray-600 mb-6">
                Generate content in multiple languages with cultural adaptation and local SEO optimization for global reach.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 50+ languages supported</li>
                <li>• Cultural adaptation</li>
                <li>• Local SEO optimization</li>
                <li>• Native speaker quality</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Optimization</h3>
              <p className="text-gray-600 mb-6">
                Built-in SEO optimization with keyword research, meta descriptions, and content structure that ranks well.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Keyword research integration</li>
                <li>• Meta description generation</li>
                <li>• Content structure optimization</li>
                <li>• SERP analysis</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Analytics</h3>
              <p className="text-gray-600 mb-6">
                Track content performance with detailed analytics, engagement metrics, and optimization recommendations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Performance tracking</li>
                <li>• Engagement metrics</li>
                <li>• Optimization suggestions</li>
                <li>• ROI measurement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI Content Generator Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your content needs. All plans include GPT-4 access and SEO optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$29</div>
                <p className="text-gray-600">per month</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  10,000 words/month
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Blog posts & social media
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  SEO optimization
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Email support
                </li>
              </ul>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Content Generator Basic Plan"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block">
                Get Started
              </a>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border-2 border-purple-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">$99</div>
                <p className="text-gray-600">per month</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  50,000 words/month
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  All content types
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Multi-language support
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Priority support
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Content analytics
                </li>
              </ul>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Content Generator Professional Plan"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block">
                Get Started
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border-2 border-green-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">$299</div>
                <p className="text-gray-600">per month</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited words
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom AI training
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  API access
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom integrations
                </li>
              </ul>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Content Generator Enterprise Plan"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block">
                Contact Sales
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">
              All plans include 30-day free trial and money-back guarantee.
            </p>
            <p className="text-sm text-gray-500">
              <strong>Market Average:</strong> $29-199/month for AI content generation services
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Scale Your Content Creation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start generating high-quality, SEO-optimized content that drives traffic and conversions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Content Generator Inquiry"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}