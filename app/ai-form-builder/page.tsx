import React from 'react';
import SEOHead from '../components/SEOHead';

const AIFormBuilderPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Form Builder Pro - Zion Tech Group"
        description="Create smart forms with AI assistance. Smart field suggestions, conditional logic, and automated responses for better user experience and higher conversion rates."
        keywords="AI form builder, smart forms, form automation, conditional logic, form optimization, lead generation"
        canonicalUrl="https://ziontechgroup.com/ai-form-builder"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
                📝 AI-Powered Forms
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                AI Form Builder
                <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Pro
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Create intelligent forms with AI assistance. Smart field suggestions, conditional logic, and automated responses for better user experience and higher conversion rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#pricing" className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 text-center font-semibold shadow-lg hover:shadow-xl">
                  Start Free Trial
                </a>
                <a href="#demo" className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-all duration-300 text-center font-semibold">
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Intelligent Form Features</h2>
              <p className="text-xl text-gray-600">Build forms that think and adapt to your users</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Field Suggestions</h3>
                <p className="text-gray-600">AI analyzes your form purpose and suggests optimal fields and layouts for maximum conversions.</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Conditional Logic</h3>
                <p className="text-gray-600">Create dynamic forms that show/hide fields based on user responses for better user experience.</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Auto-validation</h3>
                <p className="text-gray-600">Real-time validation with smart error messages and suggestions to improve form completion rates.</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border border-orange-100 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics & Reports</h3>
                <p className="text-gray-600">Track form performance with detailed analytics, conversion rates, and user behavior insights.</p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-100 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Integration</h3>
                <p className="text-gray-600">Seamlessly integrate with Stripe, PayPal, and other payment processors for secure transactions.</p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl border border-teal-100 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Optimization</h3>
                <p className="text-gray-600">Forms automatically adapt to mobile devices with touch-friendly interfaces and responsive design.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect For Every Business</h2>
              <p className="text-xl text-gray-600">From lead generation to customer feedback</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Lead Generation</h3>
                <p className="text-gray-600">Create high-converting lead capture forms with smart field suggestions and conditional logic.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Forms</h3>
                <p className="text-gray-600">Professional contact forms with automated responses and CRM integration.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Survey Creation</h3>
                <p className="text-gray-600">Build engaging surveys with branching logic and real-time analytics.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Registration Forms</h3>
                <p className="text-gray-600">Event registration and user signup forms with validation and confirmation emails.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Feedback Collection</h3>
                <p className="text-gray-600">Gather customer feedback with intelligent forms that adapt to user responses.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Order Forms</h3>
                <p className="text-gray-600">E-commerce order forms with payment integration and inventory management.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-600">Choose the plan that fits your needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                  <div className="text-4xl font-bold text-green-600 mb-4">$19<span className="text-lg text-gray-500">/month</span></div>
                  <p className="text-gray-600 mb-6">Perfect for small businesses</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Up to 5 forms</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 1,000 submissions/month</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic analytics</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Email support</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Mobile responsive</li>
                </ul>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Start Free Trial
                </button>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-2xl border-2 border-green-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                  <div className="text-4xl font-bold text-green-600 mb-4">$59<span className="text-lg text-gray-500">/month</span></div>
                  <p className="text-gray-600 mb-6">Ideal for growing businesses</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Up to 25 forms</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 10,000 submissions/month</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced analytics</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Priority support</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Payment integration</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> API access</li>
                </ul>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Start Free Trial
                </button>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-green-600 mb-4">$199<span className="text-lg text-gray-500">/month</span></div>
                  <p className="text-gray-600 mb-6">For large organizations</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited forms</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited submissions</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom analytics</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 24/7 phone support</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom integrations</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Dedicated account manager</li>
                </ul>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Build Smart Forms?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using our AI-powered form builder to increase conversions and improve user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Call: +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-green-600 transition-colors font-semibold">
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-green-100">
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIFormBuilderPage;