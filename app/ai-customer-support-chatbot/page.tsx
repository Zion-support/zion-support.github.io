'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageCircle, Brain, BarChart3, Clock, Users, Zap, CheckCircle, Star, ArrowRight, Bot, Headphones, Shield } from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

export default function AICustomerSupportChatbotPage() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'Advanced AI Understanding',
      description: 'Natural language processing that understands context, intent, and sentiment for human-like conversations.'
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-green-400" />,
      title: 'Multi-Channel Support',
      description: 'Deploy across website, mobile app, WhatsApp, Facebook Messenger, and more with unified management.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: 'Real-Time Analytics',
      description: 'Comprehensive insights into customer satisfaction, response times, and conversation success rates.'
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      title: '24/7 Availability',
      description: 'Never miss a customer inquiry with round-the-clock AI support that never sleeps or takes breaks.'
    },
    {
      icon: <Users className="w-6 h-6 text-yellow-400" />,
      title: 'Human Handoff',
      description: 'Seamlessly transfer complex queries to human agents with full conversation context and history.'
    },
    {
      icon: <Zap className="w-6 h-6 text-red-400" />,
      title: 'Instant Setup',
      description: 'Get your chatbot live in minutes with our drag-and-drop builder and pre-built templates.'
    }
  ];

  const integrations = [
    { name: 'Website', icon: '🌐', color: 'text-blue-400' },
    { name: 'WhatsApp', icon: '💬', color: 'text-green-400' },
    { name: 'Facebook', icon: '📘', color: 'text-blue-600' },
    { name: 'Slack', icon: '💼', color: 'text-purple-400' },
    { name: 'Zendesk', icon: '🎧', color: 'text-orange-400' },
    { name: 'Salesforce', icon: '☁️', color: 'text-cyan-400' },
    { name: 'Shopify', icon: '🛒', color: 'text-green-600' },
    { name: 'WordPress', icon: '📝', color: 'text-blue-500' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29.99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI responses',
        'Website integration',
        'Email support',
        'Basic analytics',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79.99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI with learning',
        'Multi-channel support',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        'Human handoff',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199.99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Maria Gonzalez',
      role: 'Customer Success Manager',
      company: 'E-commerce Platform',
      content: 'Our AI chatbot handles 80% of customer inquiries automatically. Customer satisfaction increased by 40%!',
      rating: 5,
      avatar: 'MG'
    },
    {
      name: 'James Wilson',
      role: 'Founder',
      company: 'SaaS Startup',
      content: 'The setup was incredibly easy. We went live in 30 minutes and immediately saw a reduction in support tickets.',
      rating: 5,
      avatar: 'JW'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Support',
      company: 'Tech Company',
      content: 'The AI understanding is remarkable. It handles complex queries better than some human agents.',
      rating: 5,
      avatar: 'SJ'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Support Chatbot - 24/7 Automated Support | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered customer support chatbot with natural language processing, multi-channel support, and 24/7 availability. Increase satisfaction by 40%." />
        <meta name="keywords" content="AI chatbot, customer support, automated support, natural language processing, multi-channel support, customer service automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-customer-support-chatbot" />
      </Helmet>

      <FuturisticBackground variant="hero">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Customer Support
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                AI Customer Support Chatbot
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Transform your customer support with AI-powered chatbots that provide instant, intelligent responses 24/7. 
                Join 15,000+ businesses who've increased satisfaction by 40%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton
                  variant="ghost"
                  size="lg"
                  onClick={() => window.open('#demo', '_blank')}
                >
                  Watch Demo
                </FuturisticButton>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">15,000+</div>
                <div className="text-gray-300">Active Businesses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                <div className="text-gray-300">Satisfaction Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">4.9/5</div>
                <div className="text-gray-300">User Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">
                Seamless Integrations
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Connect with your existing tools and platforms effortlessly
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {integrations.map((integration, index) => (
                <FuturisticCard
                  key={index}
                  variant="feature"
                  className="text-center"
                >
                  <div className="text-4xl mb-4">{integration.icon}</div>
                  <h3 className={`text-lg font-semibold ${integration.color}`}>{integration.name}</h3>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">
                Powerful Features
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Everything you need to provide exceptional customer support with AI
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <FuturisticCard
                  key={index}
                  variant="feature"
                  className="h-full"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Choose the plan that fits your support needs. All plans include 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard
                  key={index}
                  variant={plan.popular ? "service" : "feature"}
                  className={`h-full relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
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
                  <FuturisticButton
                    variant={plan.popular ? "primary" : "secondary"}
                    size="lg"
                    className="w-full"
                    onClick={() => window.open('/contact', '_blank')}
                  >
                    Get Started
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">
                What Our Users Say
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Join thousands of businesses who've transformed their customer support
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <FuturisticCard
                  key={index}
                  variant="testimonial"
                  className="h-full"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 italic">
                    "{testimonial.content}"
                  </blockquote>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <FuturisticCard variant="feature" className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">
                Ready to Transform Your Customer Support?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start your 14-day free trial today. No credit card required. Join 15,000+ businesses already using AI Customer Support Chatbot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton
                  variant="secondary"
                  size="lg"
                  onClick={() => window.open('tel:+13024640950', '_blank')}
                >
                  Call +1 (302) 464-0950
                </FuturisticButton>
              </div>
              <div className="mt-8 text-white/80 text-sm">
                <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
              </div>
            </FuturisticCard>
          </div>
        </section>
      </FuturisticBackground>
    </>
  );
}