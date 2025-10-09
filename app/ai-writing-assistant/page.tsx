'use client';
import React from 'react';
import { Brain, Zap, CheckCircle, Star, ArrowRight, Users, Clock, DollarSign, Shield, Sparkles, PenTool, FileText, Target, TrendingUp } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const AIWritingAssistant: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Content Generation',
      description: 'Generate high-quality articles, blogs, emails, and marketing copy using advanced AI models',
      benefits: ['10x faster content creation', 'SEO-optimized output', 'Multiple writing styles']
    },
    {
      icon: PenTool,
      title: 'Smart Writing Tools',
      description: 'Grammar checking, tone adjustment, readability scoring, and style suggestions',
      benefits: ['Professional-grade editing', 'Real-time suggestions', 'Consistent brand voice']
    },
    {
      icon: Target,
      title: 'Content Optimization',
      description: 'Optimize content for specific audiences, platforms, and marketing goals',
      benefits: ['Higher engagement rates', 'Better conversion', 'Audience targeting']
    },
    {
      icon: FileText,
      title: 'Multi-Format Support',
      description: 'Create content for blogs, social media, emails, ads, and documentation',
      benefits: ['Versatile content types', 'Platform-specific formatting', 'Consistent messaging']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 29,
      period: 'month',
      description: 'Perfect for individual creators and small businesses',
      features: [
        '10,000 words per month',
        '5 AI writing templates',
        'Basic grammar checking',
        'Email support',
        'Standard content types'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 79,
      period: 'month',
      description: 'Ideal for content teams and growing businesses',
      features: [
        '50,000 words per month',
        '20+ AI writing templates',
        'Advanced grammar & style checking',
        'Priority support',
        'All content types',
        'Team collaboration',
        'Brand voice training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 199,
      period: 'month',
      description: 'For large organizations with high content needs',
      features: [
        'Unlimited words',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'API access',
        'Custom integrations',
        'Advanced analytics'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Marketing Manager',
      company: 'TechStart Inc.',
      content: 'AI Writing Assistant has revolutionized our content production. We\'re creating 3x more content with better quality.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Freelance Writer',
      company: 'Independent',
      content: 'The AI suggestions are incredibly helpful. It\'s like having a writing coach available 24/7.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'GrowthCorp',
      content: 'Our blog traffic increased by 150% after using the SEO optimization features. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Writing Assistant - Professional Content Creation Tool | Zion Tech Group"
        description="Create high-quality content 10x faster with our AI Writing Assistant. Features grammar checking, SEO optimization, and multiple writing styles. Starting at $29/month."
        keywords={['AI writing assistant', 'content creation', 'AI writing tool', 'content generation', 'writing automation', 'SEO content']}
        canonicalUrl="https://ziontechgroup.com/ai-writing-assistant"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Content Creation</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
                AI Writing Assistant
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Create professional-quality content 10x faster with our advanced AI writing assistant. 
                Perfect for blogs, emails, marketing copy, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">10x</div>
                <div className="text-gray-300">Faster Content Creation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">50K+</div>
                <div className="text-gray-300">Words Generated Daily</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-gray-300">User Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300">AI Assistant Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create professional content with AI assistance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your content creation needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600' 
                      : 'border border-gray-600 text-white hover:bg-gray-800'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">What Our Users Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of satisfied users who have transformed their content creation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="cyber-card p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Content Creation?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and experience the power of AI-assisted writing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <a 
                  href="tel:+13024640950" 
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIWritingAssistant;