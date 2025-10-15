import React from 'react';
import SEOHead from '../components/SEOHead';

const SmartInvoiceGeneratorProPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Smart Invoice Generator Pro - Zion Tech Group"
        description="AI-powered invoice generation with automated billing, payment tracking, and financial analytics. Streamline your invoicing process with intelligent automation."
        keywords="AI invoicing, automated billing, invoice generation, payment tracking, financial analytics, smart invoicing, billing automation"
        canonicalUrl="https://ziontechgroup.com/smart-invoice-generator-pro"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Smart Invoice Generator Pro</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                AI-powered invoice generation with automated billing, payment tracking, and financial analytics
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#features" 
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Features
                </a>
                <a 
                  href="/contact" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Intelligent Invoicing Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Automate your invoicing process with AI-powered intelligence and smart automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Invoice Generation</h3>
              <p className="text-gray-600 mb-4">
                Automatically generate professional invoices using AI that learns from your business patterns and preferences.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Smart template selection</li>
                <li>• Automatic data population</li>
                <li>• Brand consistency</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Automated Billing Cycles</h3>
              <p className="text-gray-600 mb-4">
                Set up recurring billing cycles that automatically generate and send invoices based on your schedule.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Recurring invoice automation</li>
                <li>• Flexible billing schedules</li>
                <li>• Automatic reminders</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Tracking</h3>
              <p className="text-gray-600 mb-4">
                Track payments in real-time with automated status updates and comprehensive payment analytics.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Real-time payment status</li>
                <li>• Payment analytics</li>
                <li>• Overdue tracking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Pricing Plans</h2>
              <p className="text-lg text-gray-600">
                Choose the plan that fits your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Basic</h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">$39<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 100 invoices/month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    AI invoice generation
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic payment tracking
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Email support
                  </li>
                </ul>
                <a href="/contact" className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Get Started
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pro</h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">$99<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 500 invoices/month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Advanced AI features
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Automated billing cycles
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Financial analytics
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Priority support
                  </li>
                </ul>
                <a href="/contact" className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Get Started
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">$299<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Unlimited invoices
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    All AI features
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    White-label solution
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    24/7 dedicated support
                  </li>
                </ul>
                <a href="/contact" className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-700 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Invoicing?</h2>
            <p className="text-xl mb-8">
              Start using AI-powered invoice generation today and save hours of manual work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartInvoiceGeneratorProPage;