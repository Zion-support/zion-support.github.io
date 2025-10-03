import React from 'react';
// Metadata handled by React Helmet
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'AI Content Generation Tool | Zion Tech Group - Automated Content Creation',
  description: 'Revolutionary AI-powered content generation platform for blogs, social media, and marketing materials. Save time with intelligent content creation.',
  keywords: 'AI content generation, automated content creation, blog writing, social media content, marketing automation',
};

export default function AIContentGenerationToolPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <span className="text-3xl">✍️</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Content Generation Tool
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your content creation process with our revolutionary AI-powered platform. 
            Generate high-quality, SEO-optimized content for blogs, social media, and marketing materials in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link 
              href="#demo" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Watch Demo
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Smart Templates</h3>
            <p className="text-gray-600">Pre-built templates for blogs, social media posts, product descriptions, and marketing copy tailored to your industry.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">SEO Optimization</h3>
            <p className="text-gray-600">Built-in SEO suggestions, keyword optimization, and readability scoring to ensure your content ranks well.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Plagiarism Detection</h3>
            <p className="text-gray-600">Advanced plagiarism detection ensures all generated content is original and unique to your brand.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Brand Voice Matching</h3>
            <p className="text-gray-600">AI learns your brand voice and tone to maintain consistency across all content pieces.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Performance Analytics</h3>
            <p className="text-gray-600">Track content performance with detailed analytics on engagement, reach, and conversion rates.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Multi-Platform Publishing</h3>
            <p className="text-gray-600">Publish directly to WordPress, social media platforms, and email marketing tools with one click.</p>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Starter</h3>
              <div className="text-3xl font-bold mb-4">$50<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 1,000 words/month</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 5 templates</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic SEO optimization</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Email support</li>
              </ul>
              <Link href="/contact" className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold text-center block hover:bg-gray-200 transition-colors">
                Get Started
              </Link>
            </div>

            <div className="border-2 border-blue-500 rounded-xl p-6 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Professional</h3>
              <div className="text-3xl font-bold mb-4">$150<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 10,000 words/month</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited templates</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced SEO optimization</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Brand voice training</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Priority support</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Multi-platform publishing</li>
              </ul>
              <Link href="/contact" className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold text-center block hover:bg-blue-600 transition-colors">
                Start Free Trial
              </Link>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-purple-500 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
              <div className="text-3xl font-bold mb-4">$500<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited words</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom templates</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> API access</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> White-label options</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Dedicated account manager</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom integrations</li>
              </ul>
              <Link href="/contact" className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold text-center block hover:bg-purple-600 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Our AI Content Tool?</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Save 80% of Content Creation Time</h3>
                  <p className="text-gray-600">Generate high-quality content in minutes instead of hours, allowing your team to focus on strategy and creativity.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Consistent Brand Voice</h3>
                  <p className="text-gray-600">AI learns your brand's unique voice and tone, ensuring all content maintains consistency across platforms.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">SEO-Optimized Content</h3>
                  <p className="text-gray-600">Built-in SEO optimization ensures your content ranks well in search engines and drives organic traffic.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Content Strategy?</h3>
            <p className="mb-6">Join thousands of businesses already using our AI content generation tool to create engaging, high-quality content at scale.</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-green-300 mr-3">✓</span>
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-3">✓</span>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-3">✓</span>
                <span>Cancel anytime</span>
              </div>
            </div>
            <Link href="/contact" className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold inline-block hover:bg-gray-100 transition-colors">
              Start Your Free Trial
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">Contact our team to learn more about our AI Content Generation Tool</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Call: +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              Email: kleber@ziontechgroup.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}