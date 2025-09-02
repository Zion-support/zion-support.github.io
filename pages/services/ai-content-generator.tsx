import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { FileText, Zap, Target, Users, CheckCircle, ArrowRight, Brain, PenTool } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const AIContentGenerator: NextPage = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Writing',
      description: 'Advanced AI algorithms that understand context and generate high-quality, engaging content tailored to your brand voice.',
      benefits: ['Natural language generation', 'Context-aware content', 'Brand voice consistency', 'Multiple content formats']
    },
    {
      icon: Target,
      title: 'SEO Optimization',
      description: 'Automatically optimize content for search engines with keyword integration, meta descriptions, and structured data.',
      benefits: ['Keyword optimization', 'Meta tag generation', 'Content structure', 'Search ranking improvement']
    },
    {
      icon: Zap,
      title: 'Real-time Generation',
      description: 'Generate content instantly with our fast AI processing engine. No waiting, no delays, just immediate results.',
      benefits: ['Instant content creation', 'Batch processing', 'Real-time editing', 'Quick iterations']
    },
    {
      icon: Users,
      title: 'Multi-language Support',
      description: 'Create content in multiple languages with accurate translations and cultural adaptations for global audiences.',
      benefits: ['50+ languages', 'Cultural adaptation', 'Localized content', 'Translation accuracy']
    }
  ];

  const useCases = [
    {
      icon: FileText,
      title: 'Blog Posts',
      description: 'Generate engaging blog posts on any topic with proper structure, SEO optimization, and compelling headlines.'
    },
    {
      icon: PenTool,
      title: 'Marketing Copy',
      description: 'Create persuasive marketing copy for ads, emails, social media, and landing pages that convert.'
    },
    {
      icon: Target,
      title: 'Product Descriptions',
      description: 'Write compelling product descriptions that highlight features, benefits, and drive sales.'
    },
    {
      icon: Users,
      title: 'Social Media Content',
      description: 'Generate social media posts, captions, and content that engage your audience across all platforms.'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and content creators',
      features: [
        '1,000 AI-generated words/month',
        '5 content templates',
        'Basic SEO optimization',
        'Email support',
        'Standard quality output'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and marketing teams',
      features: [
        '10,000 AI-generated words/month',
        '25 content templates',
        'Advanced SEO optimization',
        'Priority support',
        'High-quality output',
        'Multi-language support',
        'Brand voice training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with high content needs',
      features: [
        'Unlimited AI-generated words',
        'Unlimited content templates',
        'Premium SEO optimization',
        'Dedicated account manager',
        'Premium quality output',
        'All languages supported',
        'Custom brand voice',
        'API access',
        'White-label options'
      ],
      popular: false
    }
  ];

  return (
    <MainLayout
      title="AI Content Generator - Zion Tech Group"
      description="Generate high-quality, SEO-optimized content with our AI-powered content generator. Create blog posts, marketing copy, and more in seconds."
      keywords="AI content generator, content creation, blog writing, marketing copy, SEO content, automated writing"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI Content
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Generator</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your content creation process with our advanced AI-powered content generator. 
            Create high-quality, SEO-optimized content in seconds, not hours.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg">
              Start Free Trial
            </Link>
            <Link href="#demo" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">
              Watch Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful AI Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI content generator combines cutting-edge technology with user-friendly design to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <feature.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Content Types We Generate</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From blog posts to marketing copy, our AI can create any type of content you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-purple-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your content creation needs. All plans include our core AI features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    plan.popular
                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Content Creation?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            Join thousands of businesses already using our AI content generator to create better content faster.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg">
              Start Free Trial
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AIContentGenerator;