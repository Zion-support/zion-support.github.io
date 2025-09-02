import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { ArrowRight, CheckCircle, Star, Zap, FileText, Users, Clock, Target } from 'lucide-react';
import Link from 'next/link';

const AIContentGenerator: NextPage = () => {
  const features = [
    {
      icon: FileText,
      title: 'Multi-Format Content',
      description: 'Generate blog posts, articles, social media content, product descriptions, and more in various formats and styles.'
    },
    {
      icon: Zap,
      title: 'AI-Powered Writing',
      description: 'Advanced natural language processing creates high-quality, engaging content that matches your brand voice.'
    },
    {
      icon: Target,
      title: 'SEO Optimized',
      description: 'Automatically optimize content for search engines with keyword integration and meta descriptions.'
    },
    {
      icon: Users,
      title: 'Brand Consistency',
      description: 'Maintain consistent tone, style, and messaging across all your content with customizable brand guidelines.'
    }
  ];

  const useCases = [
    {
      title: 'Blog Content Creation',
      description: 'Generate engaging blog posts on any topic with proper structure and SEO optimization.',
      benefits: ['Save 80% writing time', 'Consistent quality', 'SEO-friendly content']
    },
    {
      title: 'Social Media Posts',
      description: 'Create compelling social media content for all platforms with appropriate tone and length.',
      benefits: ['Platform-specific formatting', 'Engaging captions', 'Hashtag suggestions']
    },
    {
      title: 'Product Descriptions',
      description: 'Generate detailed, persuasive product descriptions that drive conversions.',
      benefits: ['Compelling copy', 'Feature highlights', 'Call-to-action integration']
    },
    {
      title: 'Email Marketing',
      description: 'Create personalized email campaigns with subject lines and content that increase open rates.',
      benefits: ['Personalized content', 'A/B testing variants', 'High conversion rates']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and content creators',
      features: [
        '1,000 words per month',
        '5 content templates',
        'Basic SEO optimization',
        'Email support',
        'Standard quality'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and marketing teams',
      features: [
        '10,000 words per month',
        '20 content templates',
        'Advanced SEO optimization',
        'Priority support',
        'High quality content',
        'Brand voice training',
        'Content scheduling'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with high content needs',
      features: [
        'Unlimited words',
        'All content templates',
        'Custom AI training',
        'Dedicated support',
        'Premium quality',
        'Multi-user access',
        'API integration',
        'Custom workflows'
      ],
      popular: false
    }
  ];

  return (
    <MainLayout
      title="AI Content Generator - Zion Tech Group"
      description="Generate high-quality, SEO-optimized content with our AI-powered content generator. Save time and create engaging content for blogs, social media, and marketing campaigns."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Generator</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Transform your content creation process with our advanced AI-powered writing assistant. 
            Generate high-quality, SEO-optimized content in minutes, not hours.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Start Free Trial
            </Link>
            <Link href="#demo" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Watch Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">10M+</div>
              <div className="text-gray-300">Words Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">95%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400">50+</div>
              <div className="text-gray-300">Content Types</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful AI Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI content generator combines advanced natural language processing with industry best practices 
              to deliver exceptional content every time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect for Every Use Case</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a blogger, marketer, or business owner, our AI content generator adapts to your specific needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your content creation needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
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
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of content creators and businesses who are already saving time and improving quality with our AI content generator.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Start Free Trial
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AIContentGenerator;