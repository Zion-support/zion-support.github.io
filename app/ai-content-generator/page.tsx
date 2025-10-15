'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import {
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  ChartBarIcon,
  CogIcon,
  ShieldCheckIcon,
  StarIcon,
  PlayIcon,
  PauseIcon,
  StopIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  ShareIcon,
  DownloadIcon,
  PlusIcon,
  MinusIcon,
  XMarkIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  FunnelIcon,
  AdjustmentsHorizontalIcon,
  LightBulbIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  FireIcon,
  HeartIcon,
  TrophyIcon,
  GiftIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  BanknotesIcon,
  CalculatorIcon,
  ClipboardDocumentListIcon,
  CalendarDaysIcon,
  UserIcon,
  LockClosedIcon,
  KeyIcon,
  FingerPrintIcon,
  ShieldExclamationIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  XCircleIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';

const AIContentGeneratorPage: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [contentType, setContentType] = useState('blog');
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('professional');
  const [length, setLength] = useState('medium');

  const features = [
    {
      icon: SparklesIcon,
      title: 'AI-Powered Generation',
      description: 'Advanced GPT-4 technology for high-quality content creation',
      color: 'text-cyan-400'
    },
    {
      icon: GlobeAltIcon,
      title: 'Multi-Language Support',
      description: 'Generate content in 50+ languages with native fluency',
      color: 'text-blue-400'
    },
    {
      icon: ChartBarIcon,
      title: 'SEO Optimization',
      description: 'Built-in SEO tools and keyword optimization for better rankings',
      color: 'text-green-400'
    },
    {
      icon: CogIcon,
      title: 'Brand Voice Customization',
      description: 'Train AI to match your unique brand voice and tone',
      color: 'text-purple-400'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Plagiarism Detection',
      description: 'Built-in plagiarism checker ensures 100% original content',
      color: 'text-red-400'
    },
    {
      icon: ClockIcon,
      title: 'Content Scheduling',
      description: 'Schedule and publish content across multiple platforms',
      color: 'text-orange-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: [
        '10,000 words/month',
        '5 content types',
        'Basic SEO tools',
        'Email support',
        '1 brand voice',
        'Standard templates'
      ],
      popular: false,
      gradient: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and content teams',
      features: [
        '50,000 words/month',
        'Unlimited content types',
        'Advanced SEO tools',
        'Priority support',
        '5 brand voices',
        'Custom templates',
        'Team collaboration',
        'Analytics dashboard'
      ],
      popular: true,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations with advanced needs',
      features: [
        'Unlimited words',
        'All content types',
        'Premium SEO tools',
        '24/7 phone support',
        'Unlimited brand voices',
        'API access',
        'White-label solution',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false,
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  const contentTypes = [
    { value: 'blog', label: 'Blog Post', icon: DocumentTextIcon },
    { value: 'social', label: 'Social Media', icon: ShareIcon },
    { value: 'email', label: 'Email Marketing', icon: EnvelopeIcon },
    { value: 'ad', label: 'Ad Copy', icon: MegaphoneIcon },
    { value: 'product', label: 'Product Description', icon: ShoppingCartIcon },
    { value: 'landing', label: 'Landing Page', icon: GlobeAltIcon }
  ];

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedContent(`# ${topic || 'Sample Blog Post'}

## Introduction
This is a professionally generated blog post about ${topic || 'your chosen topic'}. The content has been crafted using advanced AI technology to ensure high quality, engaging, and SEO-optimized content.

## Key Points
- **Point 1**: Detailed explanation of the first key point
- **Point 2**: Comprehensive coverage of the second important aspect
- **Point 3**: In-depth analysis of the third critical element

## Conclusion
This AI-generated content demonstrates the power of modern content creation technology, providing you with high-quality, engaging content that resonates with your audience and drives results.

---
*Generated by Zion Tech Group AI Content Generator Pro*`);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <>
      <SEOHead 
        title="AI Content Generator Pro - Zion Tech Group"
        description="Advanced AI-powered content creation tool for blogs, social media, and marketing materials. Generate high-quality, SEO-optimized content in minutes."
        keywords="AI content generator, content creation, blog writing, social media content, marketing copy, SEO content, automated writing"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-slate-900 to-blue-900/30"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <SparklesIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                AI Content Generator Pro
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Generate high-quality, SEO-optimized content for blogs, social media, and marketing materials 
                using advanced AI technology. Create engaging content in minutes, not hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="relative group bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center">
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Generating...
                      </>
                    ) : (
                      <>
                        <PlayIcon className="w-5 h-5 mr-2" />
                        Try Free Demo
                      </>
                    )}
                  </span>
                </button>
                <Link to="/contact"
                  className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25"
                >
                  Get Started
                </Link>
              </div>
              
              {/* Demo Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-400">10M+</div>
                  <div className="text-sm text-gray-300">Words Generated</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-400">50+</div>
                  <div className="text-sm text-gray-300">Languages</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-400">99.9%</div>
                  <div className="text-sm text-gray-300">Uptime</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-400">24/7</div>
                  <div className="text-sm text-gray-300">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Generator Demo */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Try Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AI Generator</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI content generation with our interactive demo
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Content Type</label>
                    <select
                      value={contentType}
                      onChange={(e) => setContentType(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      {contentTypes.map((type) => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Topic</label>
                    <input
                      type="text"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      placeholder="Enter your topic..."
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Tone</label>
                    <select
                      value={tone}
                      onChange={(e) => setTone(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="professional">Professional</option>
                      <option value="casual">Casual</option>
                      <option value="friendly">Friendly</option>
                      <option value="authoritative">Authoritative</option>
                      <option value="conversational">Conversational</option>
                    </select>
                  </div>
                </div>
                
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Generating Content...
                    </div>
                  ) : (
                    'Generate Content'
                  )}
                </button>
                
                {generatedContent && (
                  <div className="mt-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">Generated Content</h3>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded text-sm transition-colors">
                          <PencilIcon className="w-4 h-4" />
                        </button>
                        <button className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded text-sm transition-colors">
                          <DownloadIcon className="w-4 h-4" />
                        </button>
                        <button className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded text-sm transition-colors">
                          <ShareIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-6 max-h-96 overflow-y-auto">
                      <pre className="text-gray-300 whitespace-pre-wrap text-sm">{generatedContent}</pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Everything you need to create professional, engaging content at scale
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Simple <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your content creation needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 rounded-xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' : 'border-slate-700'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-400 mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-cyan-900/40 via-slate-900 to-blue-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Join thousands of businesses already using AI Content Generator Pro to create 
              engaging, high-quality content at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="relative group bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link to="/pricing"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-white/25"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIContentGeneratorPage;
