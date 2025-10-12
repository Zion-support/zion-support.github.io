'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  FileText, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Target,
  Globe,
  BarChart3,
  Users,
  Clock,
  Shield,
  Sparkles,
  Mail
} from 'lucide-react';

export default function AIContentGenerationPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI-Powered Writing',
      description: 'Generate high-quality content using advanced AI models trained on millions of articles and documents.'
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: 'Multiple Content Types',
      description: 'Create blogs, articles, social media posts, product descriptions, and marketing copy effortlessly.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Lightning Fast',
      description: 'Generate thousands of words of content in seconds, not hours or days.'
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: 'SEO Optimized',
      description: 'Automatically optimize content for search engines with keyword integration and meta descriptions.'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Multi-Language Support',
      description: 'Generate content in 50+ languages with native-level quality and cultural adaptation.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-500" />,
      title: 'Performance Analytics',
      description: 'Track content performance, engagement metrics, and ROI with detailed analytics dashboard.'
    }
  ];

  const contentTypes = [
    {
      name: 'Blog Posts',
      description: 'Long-form articles and blog content optimized for engagement and SEO.',
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      price: '$0.05/word'
    },
    {
      name: 'Social Media',
      description: 'Captivating posts for Facebook, Twitter, Instagram, and LinkedIn.',
      icon: <Users className="w-6 h-6 text-green-500" />,
      price: '$0.10/post'
    },
    {
      name: 'Product Descriptions',
      description: 'Compelling product descriptions that drive conversions and sales.',
      icon: <Target className="w-6 h-6 text-purple-500" />,
      price: '$0.15/description'
    },
    {
      name: 'Email Marketing',
      description: 'High-converting email campaigns and newsletters.',
      icon: <Mail className="w-6 h-6 text-orange-500" />,
      price: '$0.20/email'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99/month',
      description: 'Perfect for small businesses and freelancers',
      features: [
        'Up to 50,000 words/month',
        'Basic AI models',
        '5 content types',
        'Email support',
        'Basic templates',
        'Standard quality'
      ]
    },
    {
      name: 'Professional',
      price: '$299/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 200,000 words/month',
        'Advanced AI models',
        'All content types',
        'Priority support',
        'Custom templates',
        'SEO optimization',
        'Analytics dashboard',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999/month',
      description: 'Built for large organizations',
      features: [
        'Unlimited words',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Advanced security',
        'Custom integrations',
        'SLA guarantee',
        'Team collaboration'
      ]
    }
  ];

  const benefits = [
    'Save 80% of content creation time',
    'Increase content output by 500%',
    'Improve SEO rankings by 200%',
    'Boost engagement rates by 150%',
    'Reduce content costs by 70%',
    'Scale content production instantly'
  ];

  const useCases = [
    {
      title: 'E-commerce Stores',
      description: 'Generate product descriptions, category pages, and marketing content at scale.',
      icon: <Target className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Content Agencies',
      description: 'Deliver high-quality content to multiple clients efficiently and cost-effectively.',
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Bloggers & Influencers',
      description: 'Create engaging blog posts and social media content to grow your audience.',
      icon: <FileText className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Marketing Teams',
      description: 'Generate campaign content, ad copy, and promotional materials quickly.',
      icon: <BarChart3 className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Content Generation - Zion Tech Group | Advanced AI Writing Solutions</title>
        <meta name="description" content="Transform your content strategy with AI Content Generation. Create high-quality blogs, social media posts, product descriptions, and marketing copy with advanced AI technology." />
        <meta name="keywords" content="AI content generation, automated writing, content creation, blog writing, social media content, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI Content Generation
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your content strategy with AI-powered writing. Generate high-quality blogs, 
              social media posts, product descriptions, and marketing copy in seconds, not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Writing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create compelling content at scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Content Types We Generate
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create any type of content your business needs with our AI-powered platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500/30 transition-all duration-300 text-center">
                <div className="mb-4 flex justify-center">{type.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{type.name}</h3>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <div className="text-cyan-400 font-semibold">{type.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect For Every Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From startups to enterprises, our AI content generation adapts to your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-green-500/30 transition-all duration-300">
                <div className="mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable impact of AI-powered content generation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your content creation needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-xl p-8 border ${plan.popular ? 'border-purple-500' : 'border-slate-700'} hover:border-cyan-500/30 transition-all duration-300 relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'border border-slate-600 text-white hover:bg-slate-700'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using AI Content Generation to create compelling content at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Free Trial
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}