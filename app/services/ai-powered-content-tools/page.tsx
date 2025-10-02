import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIPoweredContentToolsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI-Powered Content Tools | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI content generation and optimization tools. Create engaging content, headlines, and marketing materials with our advanced AI platform." />
        <meta name="keywords" content="AI content tools, content generation, marketing automation, AI writing, content optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-powered-content-tools" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Content Tools
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your content creation with our revolutionary AI platform. Generate engaging headlines, 
              optimize marketing materials, and create compelling content at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                📞 Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                ✉️ Get Quote
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Powerful AI Content Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-3">AI Content Generation</h3>
                <p className="text-gray-600">
                  Generate high-quality blog posts, articles, and marketing copy using advanced language models.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-semibold mb-3">Headline Optimizer</h3>
                <p className="text-gray-600">
                  Create compelling headlines that increase click-through rates and engagement.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Content Analysis</h3>
                <p className="text-gray-600">
                  Analyze content performance and optimize for SEO, readability, and engagement.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-3">Performance Tracking</h3>
                <p className="text-gray-600">
                  Track content performance across platforms with detailed analytics and insights.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold mb-3">Multi-Platform</h3>
                <p className="text-gray-600">
                  Create content optimized for social media, blogs, emails, and marketing campaigns.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Real-time Processing</h3>
                <p className="text-gray-600">
                  Generate and optimize content in real-time with lightning-fast AI processing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Transparent Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Starter</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">$99<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li>✓ 1,000 AI-generated content pieces</li>
                  <li>✓ Basic headline optimization</li>
                  <li>✓ Content analysis tools</li>
                  <li>✓ Email support</li>
                </ul>
                <a href="mailto:kleber@ziontechgroup.com" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-blue-700 transition-colors">
                  Get Started
                </a>
              </div>
              <div className="bg-blue-600 p-8 rounded-xl text-white relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-semibold mb-4">Professional</h3>
                <div className="text-4xl font-bold mb-6">$299<span className="text-lg opacity-80">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li>✓ 5,000 AI-generated content pieces</li>
                  <li>✓ Advanced headline optimization</li>
                  <li>✓ Full content analysis suite</li>
                  <li>✓ Performance tracking</li>
                  <li>✓ Priority support</li>
                </ul>
                <a href="mailto:kleber@ziontechgroup.com" className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold text-center block hover:bg-gray-100 transition-colors">
                  Get Started
                </a>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li>✓ Unlimited AI-generated content</li>
                  <li>✓ Custom AI model training</li>
                  <li>✓ White-label solution</li>
                  <li>✓ Dedicated support</li>
                  <li>✓ Custom integrations</li>
                </ul>
                <a href="tel:+13024640950" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-blue-700 transition-colors">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our AI Content Tools?
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Transform Your Content Strategy</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Increase content production by 10x while maintaining quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Reduce content creation costs by up to 80%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Improve engagement rates with AI-optimized headlines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Scale content across multiple platforms effortlessly</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl text-white">
                <h4 className="text-xl font-semibold mb-4">Average Results</h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold">300%</div>
                    <div className="text-sm opacity-80">Increase in content output</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">85%</div>
                    <div className="text-sm opacity-80">Reduction in creation time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">250%</div>
                    <div className="text-sm opacity-80">Improvement in engagement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Content?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn how our AI-powered content tools can revolutionize your marketing strategy.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">📞 Phone</h3>
                <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">
                  +1 302 464 0950
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">✉️ Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">📍 Address</h3>
                <div className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIPoweredContentToolsPage;