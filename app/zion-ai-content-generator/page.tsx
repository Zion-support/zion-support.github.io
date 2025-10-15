import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ZionaicontentgeneratorPage() {
  const features = [
    'Multi-format content generation (blogs, articles, social posts)',
    'SEO optimization and keyword integration',
    'Brand voice customization',
    'Content templates and frameworks',
    'Plagiarism detection and originality scoring',
    'Multi-language support (50+ languages)',
    'Content scheduling and publishing',
    'Performance analytics and insights'
  ];

  const benefits = [
    '10x faster content creation',
    'Consistent brand voice across all content',
    'SEO-optimized content that ranks higher',
    'Reduced content creation costs by 70%',
    '24/7 content generation capability'
  ];

  const useCases = [
    'Blog and article writing',
    'Social media content creation',
    'Marketing copy and ad copy',
    'Product descriptions and e-commerce content',
    'Email marketing campaigns'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 29,
      period: 'month',
      features: [
        '10,000 words/month',
        'Basic templates',
        'Email support',
        'Standard quality',
        '5 content projects'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 79,
      period: 'month',
      features: [
        '50,000 words/month',
        'Advanced templates',
        'Priority support',
        'SEO optimization',
        'Unlimited projects',
        'Brand voice training'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: 199,
      period: 'month',
      features: [
        '200,000 words/month',
        'Custom templates',
        '24/7 support',
        'Team collaboration',
        'API access',
        'White-label options'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: 499,
      period: 'month',
      features: [
        'Unlimited words',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Content Generator - Advanced AI-Powered Content Creation | Zion Tech Group</title>
        <meta name="description" content="Generate high-quality, SEO-optimized content with our AI Content Generator. Create blogs, social media posts, marketing copy, and more with 10x faster content creation." />
        <meta name="keywords" content="AI content generator, content creation, SEO content, blog writing, social media content, marketing copy" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                Zion AI Content Generator
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Advanced AI-powered content creation platform that generates high-quality, SEO-optimized content for blogs, social media, marketing materials, and more.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="tel:+13024640950" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Call +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Get Free Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Powerful Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to create compelling, high-quality content at scale
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl mb-4">✍️</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.split(' - ')[0]}</h3>
                  <p className="text-gray-600 text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our AI Content Generator?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your content creation process with our advanced AI technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Perfect For</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ideal for businesses, marketers, and content creators who need high-quality content at scale
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-2xl mb-4">📝</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your content creation needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-lg p-6 ${plan.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-blue-600">${plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
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
        </div>

        {/* Contact Section */}
        <div className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Content Creation?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our AI Content Generator to create better content faster.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="tel:+13024640950" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Email kleber@ziontechgroup.com
              </a>
              <Link to="/contact" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Form
              </Link>
            </div>
            <div className="mt-8 text-blue-100">
              <p>Visit us at: <a href="https://ziontechgroup.com" className="underline hover:text-white">ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}