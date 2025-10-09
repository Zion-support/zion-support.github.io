import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, MessageCircle, Clock, Users, Zap, Shield, TrendingUp, Brain, Headphones, Bot } from 'lucide-react';

const AICustomerServicePage: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Chatbots',
      description: 'Deploy intelligent chatbots that understand context, handle complex queries, and provide instant responses 24/7.',
      benefits: ['24/7 availability', 'Multi-language support', 'Context awareness', 'Seamless handoff to humans']
    },
    {
      icon: Brain,
      title: 'Intelligent Ticket Routing',
      description: 'Automatically categorize and route support tickets to the right agent based on content analysis and priority.',
      benefits: ['Smart categorization', 'Priority detection', 'Agent matching', 'Reduced response time']
    },
    {
      icon: MessageCircle,
      title: 'Omnichannel Support',
      description: 'Provide consistent support across email, chat, phone, social media, and messaging platforms.',
      benefits: ['Unified inbox', 'Cross-channel history', 'Consistent experience', 'Centralized management']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Get deep insights into customer satisfaction, response times, and support team performance.',
      benefits: ['Real-time metrics', 'Customer satisfaction tracking', 'Performance analytics', 'Predictive insights']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses starting with AI customer service',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI chatbot',
        'Email & chat support',
        'Basic analytics',
        '1 admin user',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses with higher support volume',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI chatbot',
        'Omnichannel support',
        'Advanced analytics & reporting',
        'Up to 5 agent seats',
        'Priority support',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI model training',
        'White-label solution',
        'Advanced integrations',
        'Unlimited agent seats',
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
      title: 'E-commerce Support',
      description: 'Handle order inquiries, returns, and product questions with AI that understands your catalog and policies.',
      icon: '🛒',
      results: '90% faster response times'
    },
    {
      title: 'SaaS Technical Support',
      description: 'Provide instant technical support for software issues with AI that understands your product inside and out.',
      icon: '💻',
      results: '80% reduction in support tickets'
    },
    {
      title: 'Financial Services',
      description: 'Handle account inquiries, transaction questions, and compliance queries with secure, compliant AI responses.',
      icon: '💰',
      results: '95% customer satisfaction'
    },
    {
      title: 'Healthcare Support',
      description: 'Provide appointment scheduling, insurance questions, and general inquiries while maintaining HIPAA compliance.',
      icon: '🏥',
      results: '70% reduction in call volume'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      role: 'Customer Success Manager',
      company: 'RetailMax Inc',
      content: 'The AI chatbot handles 80% of our customer inquiries automatically, freeing up our team to focus on complex issues. Customer satisfaction increased by 40%.',
      rating: 5
    },
    {
      name: 'Robert Chen',
      role: 'Head of Support',
      company: 'CloudTech Solutions',
      content: 'The intelligent ticket routing has dramatically improved our response times. Tickets are now resolved 3x faster with better customer satisfaction.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'VP of Operations',
      company: 'FinanceFlow',
      content: 'The omnichannel support has unified our customer experience across all touchpoints. We can now provide consistent, high-quality support everywhere.',
      rating: 5
    }
  ];

  const integrations = [
    { name: 'Salesforce', icon: '☁️', description: 'Seamless CRM integration' },
    { name: 'Zendesk', icon: '🎫', description: 'Ticket management sync' },
    { name: 'Slack', icon: '💬', description: 'Team collaboration' },
    { name: 'Microsoft Teams', icon: '👥', description: 'Enterprise communication' },
    { name: 'WhatsApp', icon: '📱', description: 'Messaging platform' },
    { name: 'Facebook Messenger', icon: '📘', description: 'Social media support' },
    { name: 'Intercom', icon: '💬', description: 'Customer messaging' },
    { name: 'Freshdesk', icon: '🎫', description: 'Help desk integration' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Star className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">AI Customer Service</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Customer Service Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Provide exceptional customer support 24/7 with AI-powered chatbots, intelligent routing, and omnichannel management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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
              Everything you need to provide world-class customer service with AI automation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
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

      {/* Integrations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Connect with your existing tools and workflows
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{integration.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{integration.name}</h3>
                <p className="text-sm text-gray-600">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Results
            </h2>
            <p className="text-xl text-gray-600">
              See how businesses are using our AI customer service to improve support
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{useCase.description}</p>
                <div className="text-blue-600 font-bold text-lg">{useCase.results}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your customer service needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
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
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Join hundreds of businesses already using our AI customer service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg">
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Customer Service?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Start your free trial today and see the power of AI-driven customer service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🕒 Mon-Fri: 9AM-6PM EST</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerServicePage;