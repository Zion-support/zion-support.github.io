import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Email Marketing Automation Platform - Zion Tech Group',
  description: 'Revolutionize your email marketing with AI-powered automation, personalization, and optimization. Increase open rates, click-through rates, and conversions.',
  keywords: 'email marketing automation, AI email personalization, email campaigns, marketing automation, email analytics',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AIEmailMarketingAutomation() {
  const features = [
    {
      title: 'AI-Powered Personalization',
      description: 'Create highly personalized email content using AI that adapts to each recipient\'s preferences and behavior.',
      icon: '🎯',
      benefits: ['45% higher open rates', '60% more clicks', 'Personalized subject lines']
    },
    {
      title: 'Smart Segmentation',
      description: 'Automatically segment your audience using AI to deliver the right message to the right person at the right time.',
      icon: '📊',
      benefits: ['Dynamic segmentation', 'Behavioral triggers', 'Predictive targeting']
    },
    {
      title: 'Automated Campaigns',
      description: 'Set up sophisticated email sequences that nurture leads and customers automatically with intelligent timing.',
      icon: '⚡',
      benefits: ['Drip campaigns', 'Welcome sequences', 'Re-engagement automation']
    },
    {
      title: 'A/B Testing AI',
      description: 'Let AI automatically test and optimize your email campaigns for maximum performance.',
      icon: '🧪',
      benefits: ['Auto-optimization', 'Continuous improvement', 'Performance insights']
    },
    {
      title: 'Predictive Analytics',
      description: 'Get AI-powered insights on customer behavior, churn risk, and optimal send times.',
      icon: '🔮',
      benefits: ['Churn prediction', 'Optimal timing', 'Customer lifetime value']
    },
    {
      title: 'Content Generation',
      description: 'Generate compelling email content, subject lines, and CTAs using advanced AI models.',
      icon: '✍️',
      benefits: ['Auto-generated content', 'Brand voice consistency', 'Multiple variations']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5,000 contacts',
        'Unlimited emails',
        'Basic AI personalization',
        'Email templates',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 25,000 contacts',
        'Advanced AI personalization',
        'Automated campaigns',
        'A/B testing',
        'Advanced analytics',
        'Priority support',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Unlimited contacts',
        'Full AI suite',
        'Custom AI models',
        'Dedicated account manager',
        'White-label options',
        'API access',
        'Custom reporting',
        'Advanced security'
      ],
      popular: false
    }
  ];

  const successMetrics = [
    { metric: '45%', description: 'Average increase in open rates' },
    { metric: '60%', description: 'Average increase in click-through rates' },
    { metric: '35%', description: 'Average increase in conversions' },
    { metric: '50%', description: 'Time saved on campaign creation' }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'E-commerce Brand',
      content: 'Our email open rates went from 18% to 32% in just one month. The AI personalization is incredibly accurate and our customers love the relevant content.',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'SaaS Startup',
      content: 'The automated campaigns have transformed our lead nurturing. We\'re converting 40% more leads to customers with minimal manual work.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      company: 'Marketing Agency',
      content: 'Our clients are seeing amazing results. The AI content generation saves us hours and produces better-performing emails than our manual efforts.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">AI Email Marketing Automation Platform</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Transform your email marketing with AI-powered automation, personalization, and optimization. 
            Drive higher engagement, better conversions, and measurable ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#pricing" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Pricing
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-lg text-gray-600">See the impact AI can have on your email marketing performance</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">{item.metric}</div>
                <div className="text-gray-700">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced AI Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to create, optimize, and automate your email marketing campaigns
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-green-600 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
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
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your email marketing needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white p-8 rounded-xl shadow-lg border-2 transition-all hover:shadow-xl ${
                plan.popular ? 'border-green-500 transform scale-105' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {plan.price}<span className="text-lg text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses are transforming their email marketing with AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Revolutionize Your Email Marketing?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using AI to transform their email marketing. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </Link>
            <Link href="tel:+13024640950" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Call +1 302 464 0950
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}