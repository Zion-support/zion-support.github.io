'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Users, MessageCircle, Bot, Phone, Mail, Clock, CheckCircle, Star, TrendingUp, Shield, Zap, Target, BarChart, Settings, Headphones, Smartphone, Globe, Award } from 'lucide-react';

const AICustomerSupportPage: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'Intelligent Chatbots',
      description: 'AI-powered chatbots that understand context and provide accurate responses 24/7',
      benefits: ['Instant responses', 'Multi-language support', 'Context awareness', 'Learning capabilities']
    },
    {
      icon: MessageCircle,
      title: 'Smart Ticket Routing',
      description: 'Automatically categorize and route tickets to the right team member based on content analysis',
      benefits: ['95% accuracy', 'Faster resolution', 'Reduced workload', 'Better organization']
    },
    {
      icon: Users,
      title: 'Agent Assistance',
      description: 'AI tools that help support agents provide better, faster customer service',
      benefits: ['Response suggestions', 'Knowledge base search', 'Sentiment analysis', 'Escalation guidance']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to understand customer needs and optimize support processes',
      benefits: ['Performance metrics', 'Customer satisfaction', 'Trend analysis', 'ROI tracking']
    }
  ];

  const capabilities = [
    {
      title: 'Natural Language Processing',
      description: 'Understand customer intent and sentiment in multiple languages',
      icon: MessageCircle,
      metrics: ['99% accuracy', '50+ languages', 'Real-time processing']
    },
    {
      title: 'Automated Responses',
      description: 'Generate personalized responses based on customer history and preferences',
      icon: Bot,
      metrics: ['80% resolution rate', '2-second response time', '24/7 availability']
    },
    {
      title: 'Sentiment Analysis',
      description: 'Detect customer emotions and escalate urgent issues automatically',
      icon: TrendingUp,
      metrics: ['95% accuracy', 'Real-time alerts', 'Proactive intervention']
    },
    {
      title: 'Knowledge Management',
      description: 'Automatically update and maintain knowledge base from customer interactions',
      icon: Settings,
      metrics: ['Auto-updates', 'Smart categorization', 'Version control']
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Provide round-the-clock customer support without additional staffing costs'
    },
    {
      icon: TrendingUp,
      title: 'Improved Efficiency',
      description: 'Handle 3x more customer inquiries with the same team size'
    },
    {
      icon: Shield,
      title: 'Consistent Quality',
      description: 'Ensure every customer receives the same high-quality support experience'
    },
    {
      icon: BarChart,
      title: 'Data-Driven Insights',
      description: 'Make informed decisions based on comprehensive customer interaction analytics'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic chatbot functionality',
        'Email support',
        'Standard integrations',
        'Basic analytics'
      ]
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI capabilities',
        'Priority support',
        'Custom integrations',
        'Advanced analytics',
        'Multi-language support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI model training',
        '24/7 dedicated support',
        'On-premise deployment',
        'Advanced security',
        'SLA guarantee'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      text: 'Our customer satisfaction increased by 40% after implementing AI customer support. The system handles 80% of inquiries automatically.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Retail Plus',
      text: 'The AI chatbot is incredibly intelligent. It understands complex queries and provides accurate answers instantly.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Service Solutions',
      text: 'We reduced our support team workload by 60% while improving response times. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Customer Support - Zion Tech Group"
        description="Transform your customer service with AI-powered support solutions. Intelligent chatbots, automated ticket routing, and 24/7 customer assistance."
        keywords={['AI customer support', 'chatbot', 'customer service automation', 'AI support', 'customer experience']}
        canonicalUrl="https://ziontechgroup.com/ai-customer-support"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Customer Support
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Transform your customer service with intelligent AI solutions
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Provide exceptional customer support 24/7 with AI-powered chatbots, intelligent ticket routing, 
                and automated responses that learn and improve over time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Demo</span>
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              AI-Powered Support Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
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
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Capabilities Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Advanced AI Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="cyber-card p-8">
                  <div className="flex items-center mb-4">
                    <capability.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{capability.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{capability.description}</p>
                  <div className="space-y-2">
                    {capability.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm text-cyan-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Why Choose Our AI Support?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
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
                  <a
                    href={plan.name === 'Enterprise' ? 'mailto:kleber@ziontechgroup.com' : 'tel:+13024640950'}
                    className={`w-full text-center block py-3 px-6 rounded-lg font-medium transition-all ${
                      plan.popular
                        ? 'cyber-button'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="cyber-card p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your Customer Support?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our AI experts help you implement intelligent customer support solutions that delight your customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AICustomerSupportPage;
