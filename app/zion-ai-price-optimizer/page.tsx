import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
const ZionAIPriceOptimizerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Price Optimizer - Dynamic Pricing & Revenue Optimization | Zion Tech Group</title>
        <meta name="description" content="Maximize revenue with Zion AI Price Optimizer. Advanced dynamic pricing algorithms, competitor analysis, and demand forecasting to increase profits by 25%. Starting at $299/month." />
        <meta name="keywords" content="AI price optimization, dynamic pricing, revenue optimization, pricing strategy, competitor analysis, demand forecasting, pricing intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-price-optimizer" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
              <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Zion AI Price Optimizer
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Maximize your revenue with intelligent pricing strategies powered by advanced AI. Analyze market conditions, 
              competitor pricing, and demand patterns to optimize prices in real-time and increase profits by up to 25%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors text-center font-semibold">
                Start Free Trial
              </Link>
              <Link to="/pricing" className="border border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors text-center font-semibold">
                View Pricing
              </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Advanced Pricing Intelligence Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Dynamic Pricing</h3>
                <p className="text-gray-600">Automatically adjust prices based on demand, inventory levels, and market conditions in real-time.</div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Competitor Analysis</h3>
                <p className="text-gray-600">Monitor competitor pricing strategies and market positioning to stay competitive and identify opportunities.</div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Demand Forecasting</h3>
                <p className="text-gray-600">Predict demand patterns and seasonal trends to optimize pricing strategies and inventory management.</div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Optimization</h3>
                <p className="text-gray-600">Continuously optimize prices based on changing market conditions, customer behavior, and business goals.</div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">A/B Testing</h3>
                <p className="text-gray-600">Test different pricing strategies and measure their impact on sales, revenue, and customer satisfaction.</div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Revenue Analytics</h3>
                <p className="text-gray-600">Comprehensive analytics dashboard with revenue tracking, profit margins, and pricing performance metrics.</div>

          {/* Industry Applications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Perfect for Every Industry</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">E-commerce</h3>
                <p className="text-gray-600 text-sm">Dynamic pricing for products, flash sales, and inventory optimization</div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🏨</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Hospitality</h3>
                <p className="text-gray-600 text-sm">Room pricing, event pricing, and seasonal demand optimization</div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">✈️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Travel</h3>
                <p className="text-gray-600 text-sm">Flight pricing, hotel rates, and package deal optimization</div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">⛽</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Energy</h3>
                <p className="text-gray-600 text-sm">Utility pricing, demand response, and market optimization</div>

          {/* Benefits Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Proven Business Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">25% Revenue Increase</h3>
                <p className="text-gray-600">Optimize pricing strategies to maximize revenue and profit margins.</div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">15% Higher Margins</h3>
                <p className="text-gray-600">Identify optimal price points that maximize profit while maintaining competitiveness.</div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">95% Accuracy</h3>
                <p className="text-gray-600">Advanced ML algorithms ensure highly accurate pricing recommendations.</div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Updates</h3>
                <p className="text-gray-600">Automatically adjust prices based on changing market conditions.</div>

          {/* Pricing Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Flexible Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Starter</h3>
                <div className="text-3xl font-bold text-gray-900 mb-4">$299<span className="text-lg text-gray-500">/month</div>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Up to 1,000 products
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Basic pricing rules
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Competitor monitoring
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Email support
                  </ul>
                <Link to="/contact" className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors text-center block">
                  Start Free Trial
                </div>
              
              <div className="border-2 border-emerald-500 rounded-xl p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional</h3>
                <div className="text-3xl font-bold text-gray-900 mb-4">$799<span className="text-lg text-gray-500">/month</div>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Up to 10,000 products
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Advanced ML algorithms
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    A/B testing
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    API integration
                  </ul>
                <Link to="/contact" className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors text-center block">
                  Start Free Trial
                </div>
              
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-gray-900 mb-4">Custom<span className="text-lg text-gray-500">/month</div>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Unlimited products
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    All features included
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    White-label solution
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Dedicated support
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    SLA guarantee
                  </ul>
                <Link to="/contact" className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors text-center block">
                  Contact Sales
                </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Pricing?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join leading businesses already using Zion AI Price Optimizer to maximize their revenue. 
              Start your free 14-day trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
                Schedule Demo
              </div>
            <div className="mt-8 text-sm opacity-75">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
              <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</div>
      </>
  )
  }
export default ZionAIPriceOptimizerPage
                                                                                                                                                          </p>
                                                                                                                                                        </p>
                                                                                                                                                      </p>
                                                                                                                                                    </div>
                                                                                                                                                  </Link>
                                                                                                                                                </div>
                                                                                                                                              </Link>
                                                                                                                                            </path>
                                                                                                                                          </li>
                                                                                                                                        </path>
                                                                                                                                      </path>
                                                                                                                                    </path>
                                                                                                                                  </path>
                                                                                                                                </Link>
                                                                                                                              </path>
                                                                                                                            </li>
                                                                                                                          </path>
                                                                                                                        </path>
                                                                                                                      </path>
                                                                                                                    </path>
                                                                                                                  </span>
                                                                                                                </Link>
                                                                                                              </path>
                                                                                                            </li>
                                                                                                          </path>
                                                                                                        </path>
                                                                                                      </path>
                                                                                                    </div>
                                                                                                  </div>
                                                                                                </p>
                                                                                              </path>
                                                                                            </svg>
                                                                                          </p>
                                                                                        </path>
                                                                                      </svg>
                                                                                    </p>
                                                                                  </path>
                                                                                </svg>
                                                                              </p>
                                                                            </path>
                                                                          </svg>
                                                                        </div>
                                                                      </div>
                                                                    </p>
                                                                  </p>
                                                                </p>
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </p>
                                                      </path>
                                                    </svg>
                                                  </p>
                                                </path>
                                              </svg>
                                            </p>
                                          </path>
                                        </svg>
                                      </p>
                                    </path>
                                  </svg>
                                </p>
                              </path>
                            </svg>
                          </p>
                        </path>
                      </svg>
                    </div>
                  </div>
                </Link>
              </path>
            </svg>
          </div>
        </div>
      </div>
    </link>
  </meta>
</meta>