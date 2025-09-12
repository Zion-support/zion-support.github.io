import React from 'react';
import Link from 'next/link';

interface NewsletterSignupProps {
  variant?: 'default' | 'featured' | 'minimal';
  showContentPreview?: boolean;
}

const featuredContent = [
  {
    title: 'AI 2025: Year in Review',
    description: 'Major breakthroughs and industry impact analysis',
    type: 'Article',
    readTime: '18 min',
    icon: '🤖'
  },
  {
    title: 'AI Implementation Master Guide',
    description: '150-page comprehensive implementation blueprint',
    type: 'Resource',
    readTime: 'Download',
    icon: '📚'
  },
  {
    title: 'AI ROI Calculator 2025',
    description: 'Measure your business impact with our calculator',
    type: 'Tool',
    readTime: 'Interactive',
    icon: '💰'
  }
];

export default function EnhancedNewsletterSignup({ 
  variant = 'default', 
  showContentPreview = true 
}: NewsletterSignupProps) {
  return (
    <section className={`py-16 ${variant === 'minimal' ? 'bg-white' : 'bg-gradient-to-r from-blue-50 to-indigo-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Newsletter Signup */}
          <div>
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">📧 NEWSLETTER</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Stay Ahead with AI Insights
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Get weekly updates on AI trends, implementation guides, and exclusive content 
                delivered straight to your inbox. Join 10,000+ AI professionals.
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Your first name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry (Optional)
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select your industry</option>
                    <option value="technology">Technology</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="financial">Financial Services</option>
                    <option value="retail">Retail</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Subscribe to Newsletter
                </button>
                
                <p className="text-sm text-gray-500 text-center">
                  No spam. Unsubscribe anytime. We respect your privacy.
                </p>
              </form>
            </div>

            {/* Benefits */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-sm text-gray-700">Weekly AI insights</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-sm text-gray-700">Exclusive case studies</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-sm text-gray-700">Free resources</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-sm text-gray-700">Early access</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content Preview */}
          {showContentPreview && (
            <div>
              <div className="text-center lg:text-left mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  What You'll Get
                </h3>
                <p className="text-gray-600">
                  Exclusive access to our latest content, insights, and resources
                </p>
              </div>

              <div className="space-y-4">
                {featuredContent.map((content, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{content.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded-full">
                            {content.type}
                          </span>
                          <span className="text-xs text-gray-500">{content.readTime}</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {content.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {content.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Proof */}
              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">10,000+</div>
                  <div className="text-sm text-gray-600 mb-4">Subscribers</div>
                  <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                      <span>4.9/5 rating</span>
                    </div>
                    <span>•</span>
                    <span>98% open rate</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-gray-600 mb-6">
              Get personalized AI strategy consultation and implementation support from our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services/ai-services"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}