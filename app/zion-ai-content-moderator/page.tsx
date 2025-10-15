import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function ZionaicontentmoderatorPage() {
  const [testText, setTestText] = useState('');
  const [moderationResult, setModerationResult] = useState(null);

  const handleModeration = () => {
    // Simulate AI content moderation
    const inappropriateWords = ['spam', 'scam', 'fake', 'hate', 'violence'];
    const foundIssues = inappropriateWords.filter(word => 
      testText.toLowerCase().includes(word)
    );
    
    setModerationResult({
      isAppropriate: foundIssues.length === 0,
      issues: foundIssues,
      confidence: foundIssues.length > 0 ? 95 : 98,
      suggestions: foundIssues.length > 0 ? ['Consider removing inappropriate language'] : ['Content appears appropriate']
    });
  };

  const features = [
    'Real-time content analysis and filtering',
    'Multi-language support (50+ languages)',
    'Image and video content moderation',
    'Custom moderation rules and policies',
    'API integration for seamless workflow',
    'Detailed analytics and reporting dashboard',
    'Machine learning model updates',
    '24/7 monitoring and alerts'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      features: ['10,000 content checks/month', 'Basic moderation rules', 'Email support', 'Standard API access'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      features: ['50,000 content checks/month', 'Custom moderation rules', 'Priority support', 'Advanced API access', 'Analytics dashboard'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      features: ['Unlimited content checks', 'Custom AI training', 'Dedicated support', 'White-label solution', 'Custom integrations'],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Moderator - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered content moderation solution with real-time analysis, multi-language support, and custom rules. Protect your platform from inappropriate content." />
        <meta name="keywords" content="content moderation, ai moderation, content filtering, text analysis, image moderation, video moderation" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Content Moderator
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Advanced AI-powered content moderation that automatically detects and filters inappropriate content across text, images, and videos with 99.5% accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Get Free Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Content Moderation Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-powered content moderation solution provides comprehensive protection for your platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Section */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Try Our Content Moderator</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Test our AI content moderation with your own text to see how it works.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter text to moderate:
                  </label>
                  <textarea
                    value={testText}
                    onChange={(e) => setTestText(e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={4}
                    placeholder="Enter some text to test our content moderation..."
                  />
                </div>
                
                <button
                  onClick={handleModeration}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Analyze Content
                </button>

                {moderationResult && (
                  <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Moderation Result:</h3>
                    <div className="flex items-center mb-4">
                      <div className={`w-4 h-4 rounded-full mr-3 ${moderationResult.isAppropriate ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      <span className={`font-semibold ${moderationResult.isAppropriate ? 'text-green-700' : 'text-red-700'}`}>
                        {moderationResult.isAppropriate ? 'Content is appropriate' : 'Content flagged for review'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Confidence: {moderationResult.confidence}%
                    </p>
                    {moderationResult.issues.length > 0 && (
                      <div className="mb-2">
                        <p className="text-sm font-medium text-gray-700">Issues found:</p>
                        <ul className="text-sm text-red-600">
                          {moderationResult.issues.map((issue, index) => (
                            <li key={index}>• {issue}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <p className="text-sm text-gray-600">
                      Suggestions: {moderationResult.suggestions.join(', ')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your content moderation needs. All plans include our core AI moderation features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Platform?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start moderating content with AI precision. Contact us today for a free consultation and demo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Email kleber@ziontechgroup.com
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">https://ziontechgroup.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
