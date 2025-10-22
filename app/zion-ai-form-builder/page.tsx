import React from 'react'
import { Helmet } from 'react-helmet-async'
const ZionAIFormBuilderPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Form Builder Pro - Zion Tech Group</title>
        <meta name="description" content="Create intelligent, dynamic forms with AI-powered features including smart validation, conditional logic, and automated responses. Perfect for surveys, applications, and data collection." />
        <meta name="keywords" content="ai form builder, form creation, smart forms, form validation, conditional logic, data collection, survey forms" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-form-builder" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Zion AI Form Builder Pro</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Create intelligent, dynamic forms with AI-powered features including smart validation, conditional logic, and automated responses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#features"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Features
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Features Section */}
        <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Intelligent Form Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Build forms that think, adapt, and optimize themselves for better user experience and higher conversion rates.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Drag & Drop Builder</h3>
              <p className="text-gray-600">Create beautiful forms with our intuitive drag-and-drop interface. No coding required.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Validation</h3>
              <p className="text-gray-600">Smart validation that learns from user behavior to provide better error messages and suggestions.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conditional Logic</h3>
              <p className="text-gray-600">Create dynamic forms that show/hide fields based on user responses for better user experience.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Field Suggestions</h3>
              <p className="text-gray-600">AI suggests the best field types and options based on your form's purpose and content.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Optimization</h3>
              <p className="text-gray-600">Forms automatically adapt to mobile devices with touch-friendly interfaces and responsive design.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Spam Protection</h3>
              <p className="text-gray-600">Advanced spam protection with CAPTCHA, honeypot fields, and AI-powered bot detection.</p>
            </div>
          </div>
        </div>
        {/* Pricing Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your form needs. All plans include our core AI features.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
                <div className="text-4xl font-bold text-green-600 mb-6">$19<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Up to 10 forms</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 1,000 submissions/month</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic AI validation</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Email support</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic analytics</li>
                </ul>
                <a href="/contact" className="w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors block">
                  Start Free Trial
                </a>
              </div>
              <div className="bg-green-600 text-white p-8 rounded-xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <div className="text-4xl font-bold mb-6">$49<span className="text-lg opacity-80">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-300 mr-2">✓</span> Up to 50 forms</li>
                  <li className="flex items-center"><span className="text-green-300 mr-2">✓</span> 10,000 submissions/month</li>
                  <li className="flex items-center"><span className="text-green-300 mr-2">✓</span> Advanced AI features</li>
                  <li className="flex items-center"><span className="text-green-300 mr-2">✓</span> Priority support</li>
                  <li className="flex items-center"><span className="text-green-300 mr-2">✓</span> Advanced analytics</li>
                  <li className="flex items-center"><span className="text-green-300 mr-2">✓</span> Payment integration</li>
                  <li className="flex items-center"><span className="text-green-300 mr-2">✓</span> Custom branding</li>
                </ul>
                <a href="/contact" className="w-full bg-white text-green-600 text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors block">
                  Start Free Trial
                </a>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-green-600 mb-6">$149<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited forms</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited submissions</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom AI training</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 24/7 dedicated support</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom analytics</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> White-label solution</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> API access</li>
                </ul>
                <a href="/contact" className="w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Smart Forms?</h2>
            <p className="text-xl mb-8">
              Start creating intelligent forms that convert better and provide superior user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
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
  )
}
export default ZionAIFormBuilderPage