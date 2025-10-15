import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIContentGeneratorPage: React.FC = () => {
  const features = [
    {
      title: 'Blog Post Generation',
      description: 'Create engaging, SEO-optimized blog posts in minutes',
      icon: '📝',
      benefits: ['SEO optimization', 'Multiple formats', 'Research integration', 'Brand voice matching']
    },
    {
      title: 'Social Media Content',
      description: 'Generate platform-specific content for all social channels',
      icon: '📱',
      benefits: ['Platform optimization', 'Hashtag suggestions', 'Visual descriptions', 'Engagement optimization']
    },
    {
      title: 'Email Marketing Copy',
      description: 'Create compelling email campaigns that convert',
      icon: '📧',
      benefits: ['A/B testing variants', 'Personalization', 'Subject line optimization', 'Call-to-action optimization']
    },
    {
      title: 'SEO-Optimized Content',
      description: 'Content that ranks higher and drives organic traffic',
      icon: '🔍',
      benefits: ['Keyword integration', 'Meta descriptions', 'Title optimization', 'Content structure']
    },
    {
      title: 'Multi-language Support',
      description: 'Generate content in 50+ languages with cultural adaptation',
      icon: '🌍',
      benefits: ['Cultural context', 'Local SEO', 'Language accuracy', 'Regional preferences']
    },
    {
      title: 'Brand Voice Customization',
      description: 'Maintain consistent brand voice across all content',
      icon: '🎯',
      benefits: ['Tone matching', 'Style consistency', 'Brand guidelines', 'Voice training']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: 99,
      period: 'month',
      features: [
        'Up to 50 content pieces/month',
        'Basic templates',
        'Email support',
        'Standard quality',
        '1 brand voice',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: 299,
      period: 'month',
      features: [
        'Up to 200 content pieces/month',
        'Premium templates',
        'Priority support',
        'High quality',
        '3 brand voices',
        'Advanced analytics',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 799,
      period: 'month',
      features: [
        'Unlimited content pieces',
        'Custom templates',
        '24/7 support',
        'Premium quality',
        'Unlimited brand voices',
        'Custom analytics',
        'Full API access',
        'White-label options',
        'Custom training',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Content Marketing Agencies',
      description: 'Scale content production for multiple clients',
      results: '10x faster content creation, 40% cost reduction'
    },
    {
      title: 'E-commerce Businesses',
      description: 'Generate product descriptions and marketing copy',
      results: '3x more product listings, 25% higher conversion rates'
    },
    {
      title: 'SaaS Companies',
      description: 'Create blog content and documentation',
      results: '5x more blog posts, 60% increase in organic traffic'
    },
    {
      title: 'Social Media Managers',
      description: 'Generate platform-specific content at scale',
      results: '8x more social posts, 50% increase in engagement'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Generator Pro - Zion Tech Group | Automated Content Creation</title>
        <meta name="description" content="Generate high-quality content at scale with our AI Content Generator Pro. Blog posts, social media, email marketing, and more. Starting at $99/month. Call +1 302 464 0950." />
        <meta name="keywords" content="AI content generator, automated content creation, blog writing, social media content, email marketing, content marketing" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI Content Generator Pro
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Generate high-quality, SEO-optimized content at scale. Blog posts, social media, email marketing, and more - all powered by advanced AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="tel:+13024640950" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Call Now: +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Email: kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-sm text-blue-200">
                <p>14-day free trial • No credit card required • Cancel anytime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Everything you need to create compelling content that engages your audience and drives results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your content needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`relative bg-white p-8 rounded-2xl shadow-lg border-2 ${
                    plan.popular 
                      ? 'border-purple-500 transform scale-105' 
                      : 'border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-xl text-gray-600 ml-1">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-green-500 mr-3">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect For</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how different businesses are using AI Content Generator Pro to scale their content marketing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-800">Results:</p>
                    <p className="text-sm text-green-700">{useCase.results}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Content?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using AI Content Generator Pro to create better content faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call: +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Email: kleber@ziontechgroup.com
              </a>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Form
              </Link>
            </div>
            <div className="mt-8 text-sm text-blue-200">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Visit us at: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIContentGeneratorPage;