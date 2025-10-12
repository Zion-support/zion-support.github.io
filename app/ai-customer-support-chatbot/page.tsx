'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  MessageSquare, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Shield, 
  BarChart3, 
  Globe,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Settings,
  Bot,
  Headphones,
  MessageCircle,
  Smartphone,
  Monitor,
  Laptop
} from 'lucide-react';

export default function AICustomerSupportChatbotPage() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'Advanced NLP Processing',
      description: 'Natural language understanding with 99.2% accuracy for customer intent recognition and response generation.'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-green-400" />,
      title: 'Multi-Channel Support',
      description: 'Deploy across website chat, WhatsApp, Facebook Messenger, SMS, and email with unified conversation management.'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: 'Human Handoff',
      description: 'Seamless escalation to human agents when complex issues require personal attention and expertise.'
    },
    {
      icon: <Clock className="w-6 h-6 text-yellow-400" />,
      title: '24/7 Availability',
      description: 'Round-the-clock customer support with instant responses, reducing wait times by 85% on average.'
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with GDPR, HIPAA, and SOC 2 compliance for sensitive customer data protection.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
      title: 'Analytics Dashboard',
      description: 'Real-time insights into customer satisfaction, response times, and conversation analytics for continuous improvement.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI responses',
        'Email & website chat',
        'Standard analytics',
        'Email support',
        '99.5% uptime SLA'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI with custom training',
        'Multi-channel support (WhatsApp, SMS)',
        'Advanced analytics & reporting',
        'Priority support',
        '99.9% uptime SLA',
        'Custom integrations',
        'A/B testing capabilities'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI model training',
        'All channels + voice support',
        'Advanced analytics & AI insights',
        'Dedicated account manager',
        '99.99% uptime SLA',
        'Custom integrations & APIs',
        'White-label solution',
        'Advanced security features'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      description: 'Handle product inquiries, order tracking, returns, and recommendations with 24/7 availability.',
      benefits: ['40% reduction in support tickets', '60% faster response times', '25% increase in conversion rates']
    },
    {
      industry: 'SaaS',
      description: 'Provide instant technical support, account management, and feature explanations to users.',
      benefits: ['50% reduction in support costs', '80% faster issue resolution', '30% improvement in user satisfaction']
    },
    {
      industry: 'Healthcare',
      description: 'HIPAA-compliant patient support for appointment scheduling, insurance questions, and general inquiries.',
      benefits: ['90% of inquiries resolved instantly', 'Compliance guaranteed', '24/7 patient support']
    },
    {
      industry: 'Financial Services',
      description: 'Secure customer support for account inquiries, transaction help, and financial guidance.',
      benefits: ['Bank-level security', 'Instant fraud detection', 'Regulatory compliance']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'TechFlow Solutions',
      role: 'Customer Success Manager',
      content: 'Our AI chatbot reduced support tickets by 45% and improved customer satisfaction by 30%. The ROI was evident within the first month.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      company: 'HealthTech Innovations',
      role: 'VP of Operations',
      content: 'The HIPAA-compliant chatbot handles 80% of our patient inquiries automatically. It\'s been a game-changer for our support team.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emily Johnson',
      company: 'RetailMax',
      role: 'Head of Customer Experience',
      content: 'Customer response times went from 2 hours to 30 seconds. Our conversion rates increased by 25% thanks to instant product support.',
      rating: 5,
      avatar: 'EJ'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Support Chatbot - Zion Tech Group | 24/7 Automated Support Solutions</title>
        <meta name="description" content="Transform your customer support with our AI-powered chatbot. 99.2% accuracy, multi-channel support, 24/7 availability. Starting at $199/month. Free trial available." />
        <meta name="keywords" content="AI chatbot, customer support, automated support, NLP, multi-channel support, customer service AI, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-customer-support-chatbot" />
        
        <meta property="og:title" content="AI Customer Support Chatbot - Zion Tech Group" />
        <meta property="og:description" content="Transform your customer support with our AI-powered chatbot. 99.2% accuracy, multi-channel support, 24/7 availability." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-customer-support-chatbot" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Customer Support Chatbot - Zion Tech Group" />
        <meta name="twitter:description" content="Transform your customer support with our AI-powered chatbot. 99.2% accuracy, multi-channel support, 24/7 availability." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                AI Customer Support Chatbot
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your customer support with intelligent AI chatbots that provide instant, accurate responses 24/7. 
                Reduce support costs by 50% while improving customer satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.2%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">85%</div>
                <div className="text-gray-300">Faster Response</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Powerful AI Features</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced AI technology that understands context, learns from interactions, and provides human-like responses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Industry Applications</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Proven solutions across various industries with measurable results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-green-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your business needs. All plans include 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                    : 'border-white/20 hover:bg-white/15'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                      Most Popular
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
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Join hundreds of satisfied customers who have transformed their support operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Customer Support?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Start your free 14-day trial today. No credit card required. Set up in minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/contact" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Schedule Demo
                  </Link>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>✓ 14-day free trial • ✓ No setup fees • ✓ 24/7 support • ✓ Cancel anytime</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-8 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-6">Need Help Getting Started?</h3>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400 mr-2" />
                  <span>+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400 mr-2" />
                  <span>Middletown, DE</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}