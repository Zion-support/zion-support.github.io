'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageCircle, Brain, Zap, Shield, Globe, Users, CheckCircle, ArrowRight, Star, Clock, Settings, BarChart, Smartphone, Monitor } from 'lucide-react';

const AiChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'No-Code Builder',
      description: 'Create intelligent chatbots without any programming knowledge using our visual builder'
    },
    {
      icon: MessageCircle,
      title: 'Multi-Channel Support',
      description: 'Deploy across websites, mobile apps, social media, and messaging platforms'
    },
    {
      icon: Zap,
      title: 'AI-Powered Responses',
      description: 'Advanced natural language processing for human-like conversations'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with GDPR, HIPAA, and SOC 2'
    },
    {
      icon: Globe,
      title: '50+ Languages',
      description: 'Support for multiple languages with automatic translation capabilities'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Multi-user access with role-based permissions and approval workflows'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '1 chatbot',
        '1,000 conversations/month',
        'Basic AI responses',
        'Email support',
        'Standard templates',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        '5 chatbots',
        '10,000 conversations/month',
        'Advanced AI training',
        'Priority support',
        'Custom integrations',
        'Advanced analytics',
        'API access',
        'Multi-language support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited chatbots',
        'Unlimited conversations',
        'Custom AI models',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'Custom deployment',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      icon: Users,
      title: 'Customer Support',
      description: '24/7 automated customer service with instant responses and escalation to human agents',
      benefits: ['90% faster response time', '24/7 availability', 'Consistent service quality']
    },
    {
      icon: BarChart,
      title: 'Lead Generation',
      description: 'Qualify and capture leads through intelligent conversations and data collection',
      benefits: ['300% more qualified leads', 'Automated follow-up', 'Lead scoring']
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Assistant',
      description: 'Help customers find products, process orders, and provide shopping assistance',
      benefits: ['Increased sales', 'Reduced cart abandonment', 'Personalized recommendations']
    },
    {
      icon: Settings,
      title: 'Internal Support',
      description: 'Streamline internal processes with HR, IT, and operational chatbots',
      benefits: ['Reduced support tickets', 'Faster issue resolution', 'Employee self-service']
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'RetailMax',
      role: 'Customer Experience Director',
      content: 'Our customer satisfaction increased by 85% after implementing Zion\'s chatbot. Response time went from hours to seconds.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      company: 'TechStart Inc.',
      role: 'Founder',
      content: 'The no-code builder was perfect for our startup. We had a professional chatbot running in just 2 hours.',
      rating: 5
    },
    {
      name: 'Robert Martinez',
      company: 'GlobalCorp',
      role: 'Head of Digital',
      content: 'The multi-language support helped us expand to 15 new markets. Our international customers love the experience.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group | No-Code Intelligent Chatbots</title>
        <meta name="description" content="Create intelligent chatbots without coding using our AI-powered platform. Multi-channel deployment, 50+ languages, enterprise security." />
        <meta name="keywords" content="AI chatbot, chatbot builder, no-code chatbot, customer service automation, conversational AI" />
        <meta property="og:title" content="AI Chatbot Builder - Zion Tech Group" />
        <meta property="og:description" content="Build intelligent chatbots that engage customers and drive business growth" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent neon-text-enhanced">
                AI Chatbot Builder
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Create intelligent chatbots that engage customers and drive business growth. 
                No coding required - build, deploy, and scale your conversational AI in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button-enhanced px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center"
                >
                  📞 Call: (302) 464-0950
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300"
                >
                  🤖 Start Building Free
                </a>
              </div>
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
                  className="cyber-card-enhanced holographic-card-enhanced p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12 neon-text-enhanced">
              Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="cyber-card-enhanced holographic-card-enhanced p-8 border border-white/10 hover:border-green-400/30 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                      <p className="text-gray-300 mb-4">{useCase.description}</p>
                      <ul className="space-y-2">
                        {useCase.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-green-400">
                            <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
                      ? 'border-green-400/50 shadow-2xl shadow-green-500/20' 
                      : 'border-white/10'
                  } hover:border-green-400/30 transition-all duration-300 relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-green-400">{plan.price}</span>
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
                  <a
                    href="tel:+13024640950"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-cyan-500 text-white hover:from-green-600 hover:to-cyan-600'
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-white'
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
                  className="cyber-card-enhanced holographic-card-enhanced p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-green-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card-enhanced holographic-card-enhanced p-8 border border-green-400/30">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text-enhanced">
                Ready to Build Your AI Chatbot?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses using our platform to create intelligent chatbots that drive engagement and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button-enhanced px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center"
                >
                  📞 Call: (302) 464-0950
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300"
                >
                  🤖 Start Building Now
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

export default AiChatbotBuilderPage;