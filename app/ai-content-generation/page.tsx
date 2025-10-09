import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const AIContentGenerationPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Content Creation',
      description: 'Generate high-quality content 10x faster with advanced AI models trained on millions of articles.',
      icon: Brain,
      benefits: ['10x faster content creation', 'SEO-optimized output', 'Multiple content formats', 'Brand voice consistency']
    },
    {
      title: 'Multi-Language Support',
      description: 'Create content in 50+ languages with native-level quality and cultural context.',
      icon: Globe,
      benefits: ['50+ languages supported', 'Cultural context awareness', 'Native-level quality', 'Automatic translation']
    },
    {
      title: 'SEO Optimization',
      description: 'Automatically optimize content for search engines with keyword research and meta descriptions.',
      icon: Target,
      benefits: ['Keyword optimization', 'Meta descriptions', 'Content structure', 'Search rankings']
    },
    {
      title: 'Brand Voice Training',
      description: 'Train AI to match your brand voice and tone across all content types.',
      icon: MessageSquare,
      benefits: ['Brand consistency', 'Tone matching', 'Style adaptation', 'Voice training']
    },
    {
      title: 'Content Templates',
      description: 'Access 100+ pre-built templates for blogs, social media, emails, and marketing materials.',
      icon: Cpu,
      benefits: ['100+ templates', 'Industry-specific', 'Customizable', 'Ready to use']
    },
    {
      title: 'Analytics & Insights',
      description: 'Track content performance with detailed analytics and optimization recommendations.',
      icon: BarChart,
      benefits: ['Performance tracking', 'Engagement metrics', 'Optimization tips', 'ROI analysis']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and freelancers',
      features: [
        '10,000 words/month',
        '5 languages',
        'Basic templates',
        'Email support',
        'Standard quality'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '50,000 words/month',
        '25 languages',
        'Premium templates',
        'Priority support',
        'High quality',
        'Brand voice training',
        'SEO optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations with high content needs',
      features: [
        'Unlimited words',
        '50+ languages',
        'All templates',
        '24/7 support',
        'Premium quality',
        'Custom AI training',
        'Advanced analytics',
        'API access',
        'White-label options'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Blog Content',
      description: 'Create engaging blog posts that drive traffic and conversions.',
      icon: '📝',
      examples: ['How-to guides', 'Industry insights', 'Product reviews', 'Case studies']
    },
    {
      title: 'Social Media',
      description: 'Generate viral social media content across all platforms.',
      icon: '📱',
      examples: ['Instagram captions', 'Twitter threads', 'LinkedIn posts', 'Facebook content']
    },
    {
      title: 'Email Marketing',
      description: 'Write compelling email campaigns that convert subscribers.',
      icon: '📧',
      examples: ['Newsletters', 'Promotional emails', 'Welcome sequences', 'Abandoned cart']
    },
    {
      title: 'Website Copy',
      description: 'Create persuasive website copy that converts visitors.',
      icon: '🌐',
      examples: ['Landing pages', 'Product descriptions', 'About pages', 'Service pages']
    },
    {
      title: 'Marketing Materials',
      description: 'Generate professional marketing content for campaigns.',
      icon: '📊',
      examples: ['Ad copy', 'Sales letters', 'Brochures', 'Press releases']
    },
    {
      title: 'Technical Content',
      description: 'Create technical documentation and guides.',
      icon: '⚙️',
      examples: ['API docs', 'User manuals', 'Tutorials', 'Knowledge base']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Generation - Zion Tech Group</title>
        <meta name="description" content="Create high-quality content 10x faster with our advanced AI content generation platform. 50+ languages, SEO optimization, and brand voice training." />
        <meta name="keywords" content="AI content generation, content creation, blog writing, social media content, email marketing, SEO content" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Content Generation
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
                Create high-quality content 10x faster with our advanced AI platform. 
                Generate blogs, social media posts, emails, and marketing materials in 50+ languages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
                >
                  📞 +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  ✉️ Get Free Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Content Platform?
              </h2>
              <p className="text-xl text-gray-600">
                Advanced AI technology combined with industry expertise for maximum content impact
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Content Types We Generate
              </h2>
              <p className="text-xl text-gray-600">
                From blog posts to social media, we create all types of content your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600">
                Choose the plan that fits your content needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-purple-600">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 mt-2">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="tel:+13024640950"
                    className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors ${
                      plan.popular 
                        ? 'bg-purple-600 text-white hover:bg-purple-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Contact our AI content experts for a free consultation and custom solution design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-sm text-purple-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p className="mt-2">🌐 https://ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIContentGenerationPage;
