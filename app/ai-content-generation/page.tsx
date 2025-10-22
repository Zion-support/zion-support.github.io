'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, FileText, Clock, Users, Shield } from 'lucide-react';

const AIContentGenerationPage: React.FC = () => {
  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'AI-Powered Content Creation',
      description: 'Generate high-quality, engaging content for blogs, articles, social media, and marketing materials using advanced AI algorithms.',
      benefits: ['SEO-optimized content', 'Multiple content types', 'Brand voice consistency', 'Plagiarism-free content']
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Rapid Content Production',
      description: 'Create content 10x faster than traditional methods while maintaining quality and relevance to your audience.',
      benefits: ['Instant generation', 'Bulk content creation', 'Template library', 'Quick iterations']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Audience Targeting',
      description: 'Generate content tailored to specific demographics, industries, and customer personas for maximum engagement.',
      benefits: ['Persona-based content', 'Industry-specific tone', 'Demographic targeting', 'Engagement optimization']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Quality Assurance',
      description: 'Built-in quality checks ensure your content meets professional standards and brand guidelines.',
      benefits: ['Grammar checking', 'Tone analysis', 'Brand compliance', 'Quality scoring']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and content creators',
      features: [
        '1,000 content pieces/month',
        'Basic AI templates',
        'Standard quality checks',
        'Email support',
        '5 team members',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and marketing teams',
      features: [
        '10,000 content pieces/month',
        'Advanced AI templates',
        'Premium quality checks',
        'Priority support',
        '25 team members',
        'Advanced analytics',
        'API access',
        'Custom templates'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations with complex content needs',
      features: [
        'Unlimited content pieces',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Unlimited team members',
        'Custom analytics',
        'Full API access',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Content Generation - Zion Tech Group</title>
        <meta name="description" content="Generate high-quality, engaging content with our advanced AI content generation platform. Create blogs, articles, social media posts, and more." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Content Generation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your content strategy with our advanced AI-powered content generation platform. 
            Create engaging, high-quality content at scale for blogs, social media, marketing materials, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center text-green-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>10x Faster Content Creation</span>
            </div>
            <div className="flex items-center text-green-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>SEO-Optimized Output</span>
            </div>
            <div className="flex items-center text-green-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Brand Voice Consistency</span>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-blue-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                plan.popular ? 'border-blue-400 ring-2 ring-blue-400' : 'border-white/20'
              } relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-blue-400 text-white hover:bg-blue-500'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-12 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our AI content generation platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 transition-colors">
              Start Free Trial
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIContentGenerationPage;