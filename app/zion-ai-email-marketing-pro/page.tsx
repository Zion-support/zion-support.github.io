import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionAIEmailMarketingProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Email Marketing Pro - Zion Tech Group</title>
        <meta name="description" content="Intelligent email marketing automation with AI-powered personalization, send time optimization, and advanced analytics for higher engagement rates." />
        <meta name="keywords" content="ai email marketing, email automation, personalized marketing, email optimization, marketing automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-yellow-600 to-orange-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Zion AI Email Marketing Pro</h1>
              <p className="text-xl text-yellow-100 max-w-3xl mx-auto mb-8">
                Intelligent email marketing automation with AI-powered personalization and optimization
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Email Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Boost your email marketing performance with intelligent automation and personalization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Personalization</h3>
              <p className="text-gray-600">Create highly personalized email content based on user behavior, preferences, and demographics.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Send Time Optimization</h3>
              <p className="text-gray-600">AI determines the optimal send time for each recipient to maximize open and click rates.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Subject Line Generation</h3>
              <p className="text-gray-600">AI generates compelling subject lines that increase open rates and engagement.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🧪</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">A/B Testing Automation</h3>
              <p className="text-gray-600">Automatically test different email variations and optimize based on performance data.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Segmentation Intelligence</h3>
              <p className="text-gray-600">AI automatically segments your audience based on behavior and engagement patterns.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Analytics</h3>
              <p className="text-gray-600">Comprehensive analytics and insights to track ROI and optimize your email campaigns.</p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Email Marketing Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your email marketing needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Basic</h3>
                <div className="text-4xl font-bold mb-6">$79<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>Up to 10,000 subscribers</li>
                  <li className="flex items-center"><span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>Basic AI personalization</li>
                  <li className="flex items-center"><span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>Email templates</li>
                  <li className="flex items-center"><span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>Email support</li>
                </ul>
                <a href="mailto:kleber@ziontechgroup.com?subject=Interest in Basic Plan" className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-yellow-700 transition-colors">
                  Get Started
                </a>
              </div>
              <div className="bg-yellow-600 p-8 rounded-xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <div className="text-4xl font-bold mb-6">$199<span className="text-lg text-yellow-200">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="w-4 h-4 bg-white rounded-full mr-3"></span>Up to 50,000 subscribers</li>
                  <li className="flex items-center"><span className="w-4 h-4 bg-white rounded-full mr-3"></span>Advanced AI features</li>
                  <li className="flex items-center"><span className="w-4 h-4 bg-white rounded-full mr-3"></span>Custom templates</li>
                  <li className="flex items-center"><span className="w-4 h-4 bg-white rounded-full mr-3"></span>Priority support</li>
                  <li className="flex items-center"><span className="w-4 h-4 bg-white rounded-full mr-3"></span>A/B testing</li>
                </ul>
                <a href="mailto:kleber@ziontechgroup.com?subject=Interest in Pro Plan" className="w-full bg-white text-yellow-600 py-3 rounded-lg font-semibold text-center block hover:bg-gray-100 transition-colors">
                  Get Started
                </a>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="text-4xl font-bold mb-6">$499<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>Unlimited subscribers</li>
                  <li className="flex items-center"><span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>Full AI capabilities</li>
                  <li className="flex items-center"><span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>Custom development</li>
                  <li className="flex items-center"><span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>24/7 support</li>
                  <li className="flex items-center"><span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>Advanced analytics</li>
                </ul>
                <a href="mailto:kleber@ziontechgroup.com?subject=Interest in Enterprise Plan" className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-yellow-700 transition-colors">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Boost Your Email Marketing?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Contact us today to learn more about Zion AI Email Marketing Pro and how it can transform your email campaigns.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                  <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAIEmailMarketingProPage;