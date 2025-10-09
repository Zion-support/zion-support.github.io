import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Mail, Target, BarChart, Users, Zap, Clock, Shield, TrendingUp, Brain } from 'lucide-react';

const AIEmailMarketingPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Content Generation',
      description: 'Generate compelling email content 10x faster with our advanced AI that understands your brand voice and audience preferences.',
      benefits: ['10x faster content creation', 'Brand voice consistency', 'A/B testing automation', 'Personalized messaging']
    },
    {
      icon: Target,
      title: 'Intelligent Audience Segmentation',
      description: 'Automatically segment your audience based on behavior, preferences, and engagement patterns using machine learning algorithms.',
      benefits: ['Behavioral segmentation', 'Predictive analytics', 'Dynamic lists', 'Engagement scoring']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics & Optimization',
      description: 'Get deep insights into email performance with AI-driven recommendations for subject lines, send times, and content optimization.',
      benefits: ['Real-time analytics', 'Predictive insights', 'Automated optimization', 'ROI tracking']
    },
    {
      icon: Zap,
      title: 'Automated Campaign Management',
      description: 'Set up complex email sequences and automation workflows that adapt based on recipient behavior and engagement.',
      benefits: ['Drip campaigns', 'Behavioral triggers', 'Smart scheduling', 'Cross-channel integration']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI email marketing',
      features: [
        'Up to 10,000 contacts',
        'AI content generation (50 emails/month)',
        'Basic segmentation',
        'Email templates library',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses with advanced automation needs',
      features: [
        'Up to 50,000 contacts',
        'Unlimited AI content generation',
        'Advanced segmentation & personalization',
        'A/B testing automation',
        'Advanced analytics & reporting',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'Complete solution for large organizations with complex requirements',
      features: [
        'Unlimited contacts',
        'Custom AI model training',
        'White-label solution',
        'Advanced integrations',
        'Dedicated account manager',
        'Custom reporting',
        '24/7 phone support',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Personalization',
      description: 'Send personalized product recommendations and abandoned cart emails that convert 40% better than generic campaigns.',
      icon: '🛒',
      results: '40% higher conversion rates'
    },
    {
      title: 'Lead Nurturing Automation',
      description: 'Automatically nurture leads through complex sales funnels with AI-optimized content and timing.',
      icon: '🎯',
      results: '60% more qualified leads'
    },
    {
      title: 'Customer Retention',
      description: 'Predict and prevent churn with AI-powered retention campaigns that identify at-risk customers.',
      icon: '💝',
      results: '35% reduction in churn'
    },
    {
      title: 'Event Marketing',
      description: 'Promote events and webinars with AI-generated content that adapts to each recipient\'s interests.',
      icon: '📅',
      results: '50% higher attendance rates'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechCorp Solutions',
      content: 'Zion Tech Group\'s AI email marketing platform increased our open rates by 65% and reduced our content creation time by 80%. The ROI was evident within the first month.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'E-commerce Plus',
      content: 'The AI-powered segmentation and personalization features have transformed our email marketing. We\'re seeing 3x better engagement and significantly higher conversion rates.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Marketing',
      company: 'GrowthStart Inc',
      content: 'The automated campaign management saves us 20+ hours per week while delivering better results. The AI recommendations are spot-on and constantly improving.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Star className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">AI-Powered Email Marketing</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Email Marketing Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Transform your email marketing with AI that generates content, segments audiences, and optimizes campaigns automatically
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
              >
                📞 Call: (302) 464-0950
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

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to create, send, and optimize high-converting email campaigns
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
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
              Real-World Results
            </h2>
            <p className="text-xl text-gray-600">
              See how businesses are using our AI email marketing platform to drive growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{useCase.description}</p>
                <div className="text-purple-600 font-bold text-lg">{useCase.results}</div>
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
              Choose the plan that fits your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
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
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
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

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Join hundreds of businesses already using our AI email marketing platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Start your free trial today and see the power of AI-driven email marketing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-purple-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🕒 Mon-Fri: 9AM-6PM EST</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIEmailMarketingPage;