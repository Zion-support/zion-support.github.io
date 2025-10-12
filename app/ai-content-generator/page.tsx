import React from 'react';
import { CheckCircle, Zap, Brain, FileText, Users, DollarSign, Clock, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIContentGenerator: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'AI-Powered Content Creation',
      description: 'Generate high-quality, engaging content using advanced AI models trained on millions of articles, blogs, and marketing materials.',
      benefits: ['GPT-4 Integration', 'Context-Aware Writing', 'Multiple Content Types', 'SEO Optimization']
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      title: 'Lightning-Fast Generation',
      description: 'Create professional content in seconds, not hours. Our AI processes your requirements and delivers ready-to-publish content instantly.',
      benefits: ['Sub-10 Second Generation', 'Batch Processing', 'Real-time Editing', 'Instant Publishing']
    },
    {
      icon: <FileText className="w-8 h-8 text-green-400" />,
      title: 'Multiple Content Formats',
      description: 'Generate blogs, articles, social media posts, product descriptions, emails, and more with consistent quality and brand voice.',
      benefits: ['Blog Posts', 'Social Media', 'Product Descriptions', 'Email Campaigns', 'Press Releases']
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: 'Team Collaboration',
      description: 'Work seamlessly with your team using shared workspaces, version control, and collaborative editing features.',
      benefits: ['Team Workspaces', 'Version Control', 'Comment System', 'Approval Workflows']
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
      title: 'Cost-Effective Solution',
      description: 'Reduce content creation costs by up to 80% while maintaining high quality. No need for expensive copywriters or agencies.',
      benefits: ['80% Cost Reduction', 'No Writer Fees', 'Unlimited Content', 'ROI Tracking']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, GDPR compliance, and secure data handling for enterprise clients.',
      benefits: ['End-to-End Encryption', 'GDPR Compliant', 'SOC 2 Certified', 'Data Residency Options']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        '10,000 words per month',
        '5 content templates',
        'Basic AI models',
        'Email support',
        'Standard quality'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '50,000 words per month',
        '20 content templates',
        'Advanced AI models',
        'Priority support',
        'High quality content',
        'Team collaboration (5 users)',
        'Brand voice training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited words',
        'All content templates',
        'Premium AI models',
        '24/7 phone support',
        'Highest quality content',
        'Unlimited team members',
        'Custom brand voice',
        'API access',
        'White-label options'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Blog Content',
      description: 'Generate engaging blog posts that drive traffic and engagement',
      example: 'Create 10 high-quality blog posts in under 30 minutes'
    },
    {
      title: 'Social Media',
      description: 'Craft compelling social media posts for all platforms',
      example: 'Generate 50 social media posts with hashtags and CTAs'
    },
    {
      title: 'E-commerce',
      description: 'Write product descriptions that convert visitors to customers',
      example: 'Create 100 product descriptions with SEO optimization'
    },
    {
      title: 'Email Marketing',
      description: 'Design email campaigns that increase open and click rates',
      example: 'Generate complete email sequences for lead nurturing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Content Generator - Zion Tech Group</title>
        <meta name="description" content="Generate high-quality content with AI. Create blogs, social media posts, product descriptions, and more in seconds. Starting at $29/month." />
        <meta name="keywords" content="AI content generator, content creation, blog writing, social media content, copywriting, AI writing tool" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Content Generator
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Create high-quality, engaging content in seconds with our advanced AI. 
              Generate blogs, social media posts, product descriptions, and more with just a few clicks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Demo
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Powerful Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-3">{useCase.description}</p>
                  <p className="text-sm text-purple-300 italic">{useCase.example}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Simple Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${plan.popular ? 'border-purple-400 ring-2 ring-purple-400' : 'border-white/20'} relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700' 
                      : 'border-2 border-white text-white hover:bg-white/10'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Content Creation?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our AI Content Generator to create better content faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Sales
                </button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIContentGenerator;