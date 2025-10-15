import React from 'react';
import { Helmet } from 'react-helmet-async';

const PricingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for our AI and IT solutions. Choose the perfect plan for your business needs." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core features with no hidden fees.
            </p>
          </div>

          {/* AI Services Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">AI Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* AI Content Generator */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Content Generator Pro</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">$49</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Unlimited content generation
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Multi-language support
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      SEO optimization
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Brand voice customization
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>

              {/* AI Customer Support */}
              <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Customer Support Pro</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">$99</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      24/7 AI support
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Multi-channel integration
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Sentiment analysis
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Real-time analytics
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>

              {/* AI Sales Predictor */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Sales Predictor</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">$79</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Sales forecasting
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Lead scoring
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Conversion prediction
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Revenue optimization
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Micro SaaS Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Micro SaaS Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Smart Expense Tracker */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Expense Tracker</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">$19</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Receipt scanning
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Auto categorization
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Budget management
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Tax preparation
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Workflow Automator Pro */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Workflow Automator Pro</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">$39</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Visual workflow builder
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      API integrations
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Conditional logic
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Scheduled automation
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Inventory Optimizer Pro */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Inventory Optimizer Pro</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">$59</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Demand forecasting
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Stock optimization
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Reorder alerts
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Cost analysis
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* IT Solutions Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">IT Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Web Development */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Development</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">$2,500</span>
                    <span className="text-gray-600">/project</span>
                  </div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Responsive design
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      SEO optimization
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Performance optimization
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      6 months support
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                    Get Quote
                  </button>
                </div>
              </div>

              {/* Mobile Development */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Development</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">$5,000</span>
                    <span className="text-gray-600">/project</span>
                  </div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      iOS & Android
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Cross-platform
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      App store optimization
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      12 months support
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                    Get Quote
                  </button>
                </div>
              </div>

              {/* Cloud Infrastructure */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Infrastructure</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">$1,000</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Cloud migration
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Auto-scaling
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      24/7 monitoring
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Security & compliance
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-blue-600 rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact us for a personalized quote tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;