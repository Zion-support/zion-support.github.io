'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  DocumentTextIcon,
  SparklesIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  CogIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const AIContentGeneratorPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        '10,000 words per month',
        '20 content templates',
        'Basic SEO optimization',
        'Email support',
        'Standard quality output',
        '5 team members'
      ],
      limitations: [
        'Limited templates',
        'Basic analytics',
        'No API access'
      ]
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$29',
      period: '/month',
      description: 'Most popular for growing businesses',
      features: [
        'Unlimited content generation',
        '50+ content templates',
        'Advanced SEO optimization',
        'Multi-language support',
        'Brand voice customization',
        'Plagiarism detection',
        'Team collaboration tools',
        'Analytics dashboard',
        'Priority support',
        'Unlimited team members',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations with advanced needs',
      features: [
        'Everything in Pro',
        'Custom AI models',
        'White-label solution',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced analytics',
        '24/7 phone support',
        'SLA guarantee',
        'Custom training',
        'On-premise deployment'
      ]
    }
  ];

  const features = [
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Content Creation',
      description: 'Generate high-quality content using advanced AI models trained on millions of articles and documents.'
    },
    {
      icon: DocumentTextIcon,
      title: '50+ Content Templates',
      description: 'Choose from a wide variety of templates for blogs, social media, emails, and marketing materials.'
    },
    {
      icon: GlobeAltIcon,
      title: 'Multi-Language Support',
      description: 'Create content in over 25 languages with native-level quality and cultural adaptation.'
    },
    {
      icon: ChartBarIcon,
      title: 'SEO Optimization',
      description: 'Automatically optimize content for search engines with keyword suggestions and meta descriptions.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Plagiarism Detection',
      description: 'Ensure originality with built-in plagiarism detection and content uniqueness scoring.'
    },
    {
      icon: CogIcon,
      title: 'Brand Voice Customization',
      description: 'Train the AI to match your brand voice and tone for consistent messaging across all content.'
    }
  ];

  const useCases = [
    {
      title: 'Blog Content',
      description: 'Generate engaging blog posts on any topic with proper structure and SEO optimization.',
      examples: ['How-to guides', 'Industry insights', 'Product reviews', 'News articles']
    },
    {
      title: 'Social Media',
      description: 'Create compelling social media posts for all platforms with hashtag suggestions.',
      examples: ['Facebook posts', 'Twitter threads', 'LinkedIn articles', 'Instagram captions']
    },
    {
      title: 'Marketing Materials',
      description: 'Generate sales copy, email campaigns, and promotional content that converts.',
      examples: ['Sales emails', 'Ad copy', 'Product descriptions', 'Landing pages']
    },
    {
      title: 'Technical Documentation',
      description: 'Create clear and comprehensive technical documentation and user guides.',
      examples: ['API documentation', 'User manuals', 'Tutorials', 'FAQ sections']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechCorp Inc.',
      content: 'AI Content Generator Pro has revolutionized our content marketing. We\'ve increased our content output by 300% while maintaining quality.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Content Manager',
      company: 'StartupXYZ',
      content: 'The brand voice customization feature is incredible. It perfectly captures our company\'s tone and style.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'SEO Specialist',
      company: 'Digital Marketing Pro',
      content: 'The SEO optimization features have significantly improved our search rankings. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Generator Pro - Zion Tech Group</title>
        <meta name="description" content="Generate high-quality content with AI-powered tools. 50+ templates, SEO optimization, multi-language support, and brand voice customization." />
        <meta name="keywords" content="ai content generator, content creation, blog writing, social media content, seo optimization" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-cyan-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.1)_0%,transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    AI Content Generator Pro
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Create high-quality, engaging content at scale with our advanced AI-powered content generation platform. 
                  Perfect for blogs, social media, marketing materials, and more.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold text-lg group"
                  >
                    Start Free Trial
                    <ArrowRightIcon className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="#demo" 
                    className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg"
                  >
                    Watch Demo
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <CpuChipIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">AI Content Generator</h3>
                      <p className="text-gray-400">Powered by GPT-4</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-slate-700 rounded-lg p-4">
                      <p className="text-gray-300 text-sm mb-2">Content Type:</p>
                      <select className="w-full bg-slate-600 border border-slate-500 rounded-lg px-3 py-2 text-white">
                        <option>Blog Post</option>
                        <option>Social Media Post</option>
                        <option>Email Campaign</option>
                        <option>Product Description</option>
                      </select>
                    </div>
                    
                    <div className="bg-slate-700 rounded-lg p-4">
                      <p className="text-gray-300 text-sm mb-2">Topic:</p>
                      <input 
                        type="text" 
                        placeholder="Enter your topic..." 
                        className="w-full bg-slate-600 border border-slate-500 rounded-lg px-3 py-2 text-white placeholder-gray-400"
                      />
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold">
                      Generate Content
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Powerful Features for Content Creation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create, optimize, and manage content at scale
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-400 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Perfect for Every Content Need
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From blog posts to social media, create content that engages and converts
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.examples.map((example, idx) => (
                      <span key={idx} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to fit your content creation needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div 
                  key={plan.id}
                  className={`relative bg-slate-800 rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                      : 'border-slate-700 hover:border-purple-400'
                  } ${selectedPlan === plan.id ? 'ring-2 ring-purple-500' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {plan.limitations && plan.limitations.map((limitation, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-500">
                        <span className="w-4 h-4 mr-3 flex-shrink-0">✗</span>
                        {limitation}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                        : 'border border-slate-600 text-gray-300 hover:border-purple-400 hover:text-white'
                    }`}
                  >
                    {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of satisfied customers who trust our AI content generation platform
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-driven content generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold text-lg group"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Need Help Getting Started?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center justify-center space-x-4 text-gray-300">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <a href="tel:+13024640950" className="hover:text-white transition-colors">
                    +1-302-464-0950
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4 text-gray-300">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIContentGeneratorPage;