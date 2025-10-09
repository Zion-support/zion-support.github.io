'use client';
import React from 'react';
import { MessageSquare, Bot, Zap, Users, CheckCircle, Star, ArrowRight, Brain, Shield, Clock, DollarSign, Award, Globe, Code, Settings, Smartphone, Mail, Phone, Calendar, FileText } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIChatbotBuilder: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'No-Code Builder',
      description: 'Create intelligent chatbots without any coding knowledge using our drag-and-drop interface',
      price: '$19/month',
      features: ['Visual flow builder', 'Pre-built templates', 'Easy customization', 'One-click deployment']
    },
    {
      icon: Brain,
      title: 'AI-Powered Responses',
      description: 'Advanced natural language processing for human-like conversations',
      price: '$39/month',
      features: ['Context understanding', 'Sentiment analysis', 'Multi-language support', 'Learning capabilities']
    },
    {
      icon: MessageSquare,
      title: 'Multi-Channel Support',
      description: 'Deploy your chatbot across websites, social media, and messaging platforms',
      price: '$29/month',
      features: ['Website integration', 'Facebook Messenger', 'WhatsApp Business', 'Slack integration']
    },
    {
      icon: Users,
      title: 'Live Handoff',
      description: 'Seamlessly transfer complex conversations to human agents when needed',
      price: '$24/month',
      features: ['Smart routing', 'Context preservation', 'Agent notifications', 'Escalation rules']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Track performance and optimize your chatbot with detailed analytics',
      price: '$19/month',
      features: ['Conversation analytics', 'User satisfaction scores', 'A/B testing', 'Performance reports']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for sensitive business data',
      price: 'Included',
      features: ['End-to-end encryption', 'GDPR compliance', 'SOC 2 certified', 'Data privacy controls']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for small businesses and personal projects',
      features: [
        '1 chatbot',
        '1,000 conversations/month',
        'Basic templates',
        'Email support',
        'Standard integrations',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '5 chatbots',
        '10,000 conversations/month',
        'Advanced AI features',
        'Priority support',
        'All integrations',
        'Advanced analytics',
        'Custom branding',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited chatbots',
        'Unlimited conversations',
        'Custom AI training',
        'Dedicated support',
        'White-label options',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const templates = [
    {
      name: 'Customer Support',
      icon: MessageSquare,
      description: 'Handle common customer inquiries and support tickets',
      price: 'Free',
      features: ['FAQ automation', 'Ticket creation', 'Knowledge base search', 'Escalation rules']
    },
    {
      name: 'Lead Generation',
      icon: Users,
      description: 'Capture and qualify leads with intelligent conversations',
      price: 'Free',
      features: ['Lead scoring', 'Contact forms', 'CRM integration', 'Follow-up automation']
    },
    {
      name: 'E-commerce Assistant',
      icon: ShoppingCart,
      description: 'Help customers with product recommendations and orders',
      price: 'Free',
      features: ['Product search', 'Order tracking', 'Payment processing', 'Inventory check']
    },
    {
      name: 'Appointment Booking',
      icon: Calendar,
      description: 'Schedule appointments and manage bookings automatically',
      price: 'Free',
      features: ['Calendar integration', 'Availability check', 'Reminder notifications', 'Rescheduling']
    },
    {
      name: 'HR Assistant',
      icon: Users,
      description: 'Handle employee inquiries and HR processes',
      price: 'Free',
      features: ['Policy questions', 'Leave requests', 'Benefits info', 'Onboarding help']
    },
    {
      name: 'Sales Qualifier',
      icon: Target,
      description: 'Qualify prospects and schedule sales meetings',
      price: 'Free',
      features: ['BANT qualification', 'Meeting scheduling', 'Lead scoring', 'CRM integration']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Customer Success Manager',
      company: 'TechStart Inc.',
      content: 'Our chatbot handles 80% of customer inquiries automatically. Response time improved from 2 hours to 30 seconds.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'E-commerce Plus',
      content: 'The lead generation chatbot has increased our qualified leads by 150%. The ROI is incredible.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Manager',
      company: 'Service Pro',
      content: 'Setting up our support chatbot was so easy. We went live in just 2 hours and customers love it.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Bot className="w-4 h-4" />
              <span>No-Code AI Chatbot Platform</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Chatbot Builder
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create intelligent, conversational chatbots in minutes without coding. 
              Engage your customers 24/7 with AI-powered conversations that feel human.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                Build Your Bot
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-colors">
                Try Demo
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50K+</div>
              <div className="text-gray-300">Chatbots Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">2M+</div>
              <div className="text-gray-300">Conversations Daily</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">5 min</div>
              <div className="text-gray-300">Average Setup Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Everything You Need to Build Amazing Chatbots</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful features designed to make chatbot creation simple and effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-colors">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{feature.price}</div>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Ready-to-Use Templates</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with professionally designed templates and customize them for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-colors">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <template.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{template.name}</h3>
                <p className="text-gray-300 mb-4">{template.description}</p>
                <div className="text-lg font-bold text-green-400 mb-4">{template.price}</div>
                <ul className="space-y-2">
                  {template.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your chatbot needs. All plans include our core features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-slate-800/50 rounded-xl p-8 ${
                tier.popular ? 'ring-2 ring-green-500 scale-105' : ''
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">{tier.price}</span>
                    <span className="text-gray-400 ml-2">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  tier.popular 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Loved by Businesses Worldwide</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how companies are using AI Chatbot Builder to improve customer experience and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Build Your First Chatbot?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start building your intelligent chatbot today. No coding required, just drag and drop.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
              Start Building
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-colors">
              Watch Tutorial
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Free trial • No credit card required • Setup in 5 minutes
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIChatbotBuilder;