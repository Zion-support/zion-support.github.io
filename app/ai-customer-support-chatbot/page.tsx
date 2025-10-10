'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Calendar, FileText, GitBranch, AlertCircle, CheckSquare, Timer, DollarSign, PieChart, Activity, Bot, Headphones, Languages, Smartphone, Monitor, Laptop } from 'lucide-react';

const AICustomerSupportChatbotPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for understanding customer intent and providing accurate responses',
      benefits: ['95% accuracy in understanding queries', 'Multi-language support', 'Context awareness', 'Sentiment analysis']
    },
    {
      icon: MessageSquare,
      title: '24/7 Availability',
      description: 'Round-the-clock customer support with instant responses and escalation to human agents',
      benefits: ['Instant response time', 'No waiting queues', 'Consistent service quality', 'Reduced support costs']
    },
    {
      icon: Users,
      title: 'Multi-Channel Support',
      description: 'Deploy across websites, mobile apps, social media, and messaging platforms',
      benefits: ['Website chat widget', 'Mobile app integration', 'Social media support', 'WhatsApp integration']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with customer insights and performance metrics',
      benefits: ['Real-time analytics', 'Customer satisfaction tracking', 'Response time metrics', 'Conversion tracking']
    },
    {
      icon: Bot,
      title: 'Smart Escalation',
      description: 'Intelligent routing to human agents when complex issues require human intervention',
      benefits: ['Seamless handoff', 'Context preservation', 'Priority queuing', 'Agent workload balancing']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with data encryption and compliance with industry standards',
      benefits: ['End-to-end encryption', 'GDPR compliance', 'SOC 2 certified', 'Data privacy protection']
    }
  ];

  const useCases = [
    {
      name: 'E-commerce Support',
      description: 'Handle product inquiries, order tracking, and returns',
      icon: ShoppingCart,
      benefits: ['Order status updates', 'Product recommendations', 'Return processing', 'Shipping inquiries']
    },
    {
      name: 'Technical Support',
      description: 'Provide technical assistance and troubleshooting',
      icon: Settings,
      benefits: ['Troubleshooting guides', 'FAQ responses', 'Ticket creation', 'Escalation to specialists']
    },
    {
      name: 'Lead Qualification',
      description: 'Qualify leads and schedule demos or consultations',
      icon: Target,
      benefits: ['Lead scoring', 'Appointment scheduling', 'Qualification questions', 'CRM integration']
    },
    {
      name: 'FAQ Automation',
      description: 'Answer frequently asked questions instantly',
      icon: HelpCircle,
      benefits: ['Instant responses', 'Knowledge base integration', 'Self-service options', 'Reduced ticket volume']
    },
    {
      name: 'Appointment Booking',
      description: 'Schedule appointments and manage calendars',
      icon: Calendar,
      benefits: ['Calendar integration', 'Availability checking', 'Confirmation emails', 'Reminder notifications']
    },
    {
      name: 'Complaint Handling',
      description: 'Process complaints and escalate when necessary',
      icon: AlertTriangle,
      benefits: ['Issue categorization', 'Priority assessment', 'Resolution tracking', 'Follow-up automation']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI features',
        'Website integration',
        'Email support',
        'Basic analytics',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI features',
        'Multi-channel support',
        'Priority support',
        'Advanced analytics',
        'Custom branding',
        'API access',
        'Integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited conversations',
        'Custom AI models',
        'White-label options',
        'Dedicated support',
        'Advanced security',
        'Custom integrations',
        'SLA guarantee',
        'Training & onboarding'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Lee',
      role: 'Customer Success Manager',
      company: 'Retail Plus',
      content: 'AI Customer Support Chatbot reduced our support tickets by 60% and improved customer satisfaction by 40%. Amazing results!',
      rating: 5
    },
    {
      name: 'Robert Martinez',
      role: 'Operations Director',
      company: 'Tech Solutions',
      content: 'The chatbot handles 80% of our customer inquiries automatically. Our support team can now focus on complex issues.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Customer Experience',
      company: 'E-commerce Giant',
      content: 'Best customer support solution we\'ve implemented. The AI understanding and response quality is exceptional.',
      rating: 5
    }
  ];

  const stats = [
    { icon: MessageSquare, value: '5,000+', label: 'Active Chatbots' },
    { icon: Users, value: '1M+', label: 'Conversations Handled' },
    { icon: TrendingUp, value: '60%', label: 'Ticket Reduction' },
    { icon: Clock, value: '24/7', label: 'Availability' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Customer Support Chatbot - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered customer support chatbot with 24/7 availability, multi-channel support, and advanced analytics. Reduce support costs by 60%. Starting at $99/month." />
        <meta name="keywords" content="ai chatbot, customer support, virtual assistant, customer service automation, chatbot development" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Customer Support
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Customer Support Chatbot
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your customer support with AI-powered chatbots that provide instant, accurate responses 24/7. 
            Reduce support costs by 60% while improving customer satisfaction.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <stat.icon className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-400 mb-1">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Customer Support Chatbot Demo"
              className="border-2 border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
            >
              Get Free Demo
            </a>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <useCase.icon className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{useCase.name}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Advanced AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-green-400 mb-4" />
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
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-green-400 scale-105' : ''} cyber-card`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
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
                  href={`mailto:kleber@ziontechgroup.com?subject=AI Customer Support Chatbot - ${plan.name} Plan`}
                  className={`w-full block text-center py-3 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
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
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Customer Support?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of businesses already using AI Customer Support Chatbot to improve their customer experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerSupportChatbotPage;