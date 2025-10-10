'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Target, BarChart, Zap, Users, CheckCircle, ArrowRight, Star, Clock, Settings, TrendingUp, Smartphone, Globe, Shield } from 'lucide-react';

const AiEmailMarketingPage: React.FC = () => {
  const features = [
    {
      icon: Mail,
      title: 'AI-Powered Personalization',
      description: 'Automatically personalize every email with AI-driven content and product recommendations'
    },
    {
      icon: Target,
      title: 'Advanced Segmentation',
      description: 'Intelligent audience segmentation based on behavior, preferences, and engagement patterns'
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'AI-powered insights to predict customer behavior and optimize send times for maximum engagement'
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Create complex email sequences that adapt based on customer actions and preferences'
    },
    {
      icon: Users,
      title: 'A/B Testing AI',
      description: 'Automated A/B testing with AI optimization for subject lines, content, and send times'
    },
    {
      icon: Shield,
      title: 'Deliverability Optimization',
      description: 'AI-powered deliverability tools to ensure your emails reach the inbox, not spam'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 contacts',
        'Unlimited emails',
        'Basic AI personalization',
        'Email support',
        'Standard templates',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 50,000 contacts',
        'Advanced AI features',
        'Priority support',
        'Custom integrations',
        'Advanced analytics',
        'A/B testing',
        'API access',
        'Multi-user accounts'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited contacts',
        'Custom AI models',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'Custom deployment',
        'SLA guarantee',
        'Account manager'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '300% Higher Open Rates',
      description: 'AI-optimized subject lines and send times dramatically increase email engagement'
    },
    {
      icon: Target,
      title: '50% More Conversions',
      description: 'Personalized content and smart segmentation drive higher conversion rates'
    },
    {
      icon: Clock,
      title: '90% Time Savings',
      description: 'Automated workflows and AI content generation save hours of manual work'
    },
    {
      icon: BarChart,
      title: 'Real-time Insights',
      description: 'Advanced analytics and reporting help you make data-driven decisions'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      company: 'E-commerce Plus',
      role: 'Marketing Director',
      content: 'Our email open rates increased from 15% to 45% in just 3 months. The AI personalization is incredible.',
      rating: 5
    },
    {
      name: 'Mark Stevens',
      company: 'SaaS Solutions',
      role: 'Head of Growth',
      content: 'The automated workflows saved us 20 hours per week. Our team can focus on strategy instead of manual tasks.',
      rating: 5
    },
    {
      name: 'Amanda Chen',
      company: 'Retail Innovations',
      role: 'CEO',
      content: 'The predictive analytics helped us identify our best customers and increase lifetime value by 200%.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Email Marketing - Zion Tech Group | Automated Email Campaigns</title>
        <meta name="description" content="Revolutionize your email marketing with AI-powered personalization, automation, and analytics. Increase open rates by 300% and conversions by 50%." />
        <meta name="keywords" content="AI email marketing, email automation, personalized emails, email analytics, marketing automation" />
        <meta property="og:title" content="AI Email Marketing - Zion Tech Group" />
        <meta property="og:description" content="Transform your email marketing with AI-powered personalization and automation" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent neon-text-enhanced">
                AI Email Marketing
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your email marketing with AI-powered personalization, automation, and analytics. 
                Increase open rates by 300% and conversions by 50% with intelligent email campaigns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button-enhanced px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center"
                >
                  📞 Call: (302) 464-0950
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  📧 Start Free Trial
                </a>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12 neon-text-enhanced">
              Proven Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="cyber-card-enhanced holographic-card-enhanced p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12 neon-text-enhanced">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="cyber-card-enhanced holographic-card-enhanced p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12 neon-text-enhanced">
              Choose Your Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card-enhanced holographic-card-enhanced p-8 border ${
                    plan.popular 
                      ? 'border-purple-400/50 shadow-2xl shadow-purple-500/20' 
                      : 'border-white/10'
                  } hover:border-purple-400/30 transition-all duration-300 relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+13024640950"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12 neon-text-enhanced">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="cyber-card-enhanced holographic-card-enhanced p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-purple-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card-enhanced holographic-card-enhanced p-8 border border-purple-400/30">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text-enhanced">
                Ready to Transform Your Email Marketing?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses using AI to create more engaging and profitable email campaigns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button-enhanced px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center"
                >
                  📞 Call: (302) 464-0950
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  📧 Start Free Trial
                </a>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  📍 364 E Main St STE 1008, Middletown, DE 19709 | 
                  ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AiEmailMarketingPage;