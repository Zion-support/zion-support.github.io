import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIFormBuilderPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Form Builder Pro",
    "description": "Intelligent form creation platform with smart field suggestions, conditional logic, and advanced analytics",
    "url": "https://ziontechgroup.com/ai-form-builder",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "offers": {
      "@type": "Offer",
      "price": "19",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "email": "kleber@ziontechgroup.com"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Zion AI Form Builder Pro - Intelligent Form Creation Platform</title>
        <meta name="description" content="Create smart forms with AI assistance. Smart field suggestions, conditional logic, advanced analytics, and multi-step forms for better conversions." />
        <meta name="keywords" content="AI form builder, smart forms, form creation, lead generation, form analytics, conditional logic" />
        <meta property="og:title" content="Zion AI Form Builder Pro - Intelligent Form Creation" />
        <meta property="og:description" content="Create smart forms with AI assistance featuring smart field suggestions, conditional logic, and advanced analytics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-form-builder" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6">
              <span className="text-3xl">📝</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Zion AI Form Builder Pro
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Create smart forms with AI assistance. Get intelligent field suggestions, conditional logic, advanced analytics, and multi-step forms that convert better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#pricing" className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Building Free
              </a>
              <a href="#demo" className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-all duration-300">
                Watch Demo
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Field Suggestions</h3>
              <p className="text-gray-600">AI analyzes your form purpose and suggests optimal fields, question types, and validation rules.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Conditional Logic</h3>
              <p className="text-gray-600">Create dynamic forms that show/hide fields based on user responses for better user experience.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Analytics</h3>
              <p className="text-gray-600">Track form performance, conversion rates, drop-off points, and user behavior with detailed insights.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-step Forms</h3>
              <p className="text-gray-600">Break complex forms into manageable steps to reduce abandonment and improve completion rates.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Integration</h3>
              <p className="text-gray-600">Accept payments directly through your forms with secure payment processing and multiple gateways.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Notifications</h3>
              <p className="text-gray-600">Automated email notifications for form submissions with customizable templates and recipient management.</p>
            </div>
          </div>

          {/* Use Cases */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect For Every Business</h2>
              <p className="text-lg text-gray-600">From lead generation to customer feedback, our forms adapt to your needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Lead Generation</h3>
                <p className="text-gray-600">Capture high-quality leads with intelligent forms that ask the right questions at the right time.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Feedback</h3>
                <p className="text-gray-600">Collect valuable customer insights with smart feedback forms that adapt to user responses.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Event Registration</h3>
                <p className="text-gray-600">Streamline event registration with multi-step forms and automated confirmation emails.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Survey Collection</h3>
                <p className="text-gray-600">Create engaging surveys with conditional logic and real-time analytics for better response rates.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛒</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Order Forms</h3>
                <p className="text-gray-600">Accept orders with integrated payment processing and automated order confirmations.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Forms</h3>
                <p className="text-gray-600">Professional contact forms with spam protection and automated response management.</p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div id="pricing" className="bg-white rounded-2xl shadow-2xl p-8 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-lg text-gray-600">Choose the plan that fits your form needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-green-500 transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                  <div className="text-4xl font-bold text-green-600 mb-4">$19<span className="text-lg text-gray-500">/month</span></div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Up to 5 forms</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 1,000 submissions/month</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic analytics</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Email notifications</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic templates</li>
                  </ul>
                  <a href="/contact" className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                    Get Started
                  </a>
                </div>
              </div>
              
              <div className="border-2 border-green-500 rounded-xl p-8 relative bg-gradient-to-b from-green-50 to-white">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                  <div className="text-4xl font-bold text-green-600 mb-4">$59<span className="text-lg text-gray-500">/month</span></div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Up to 25 forms</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 10,000 submissions/month</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced analytics</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Conditional logic</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Payment integration</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Multi-step forms</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom branding</li>
                  </ul>
                  <a href="/contact" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                    Get Started
                  </a>
                </div>
              </div>
              
              <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-green-500 transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-green-600 mb-4">$199<span className="text-lg text-gray-500">/month</span></div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited forms</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited submissions</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> AI-powered insights</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> API access</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> White-label solution</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Priority support</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom integrations</li>
                  </ul>
                  <a href="/contact" className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Smart Forms?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of businesses using our AI-powered form builder to increase conversions and collect better data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Start Free Trial
              </a>
              <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-green-600 transition-colors font-medium">
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm opacity-75">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIFormBuilderPage;