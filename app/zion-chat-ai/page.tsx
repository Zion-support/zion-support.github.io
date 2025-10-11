'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageCircle, Zap, CheckCircle, ArrowRight, Brain, Users, Shield, Clock, Globe, Target, Star, Bot } from 'lucide-react';

const ZionChatAiPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Chat AI - Intelligent Customer Support | Zion Tech Group</title>
        <meta name="description" content="Deploy AI-powered chatbots for customer support, sales, and engagement. Natural conversations, 24/7 availability, and seamless integration." />
        <meta name="keywords" content="AI chatbot, customer support, conversational AI, chatbot builder, AI assistant, customer service automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <MessageCircle className="w-4 h-4 mr-2" />
                Micro SAAS Solution
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Chat AI
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                The ultimate AI-powered chatbot platform. Create intelligent conversations, 
                automate customer support, and engage your audience 24/7 with natural language processing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
                >
                  Try Free Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#features" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Intelligent Chat <span className="text-cyan-400">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create, deploy, and manage AI-powered chatbots for any use case.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'Natural Conversations',
                  description: 'Create human-like conversations with advanced NLP and machine learning.',
                  features: ['Context Awareness', 'Intent Recognition', 'Sentiment Analysis', 'Multi-turn Dialogues']
                },
                {
                  icon: Zap,
                  title: 'Easy Setup',
                  description: 'Deploy chatbots in minutes with our drag-and-drop builder and templates.',
                  features: ['Visual Builder', 'Pre-built Templates', 'Quick Deploy', 'No Coding Required']
                },
                {
                  icon: Users,
                  title: 'Multi-Channel Support',
                  description: 'Deploy across websites, mobile apps, social media, and messaging platforms.',
                  features: ['Website Integration', 'Mobile Apps', 'Social Media', 'Messaging Platforms']
                },
                {
                  icon: Shield,
                  title: 'Enterprise Security',
                  description: 'Bank-level security with data encryption and compliance features.',
                  features: ['Data Encryption', 'GDPR Compliance', 'Secure APIs', 'Audit Logs']
                },
                {
                  icon: Target,
                  title: 'Smart Routing',
                  description: 'Intelligently route conversations to human agents when needed.',
                  features: ['Escalation Rules', 'Agent Handoff', 'Queue Management', 'Performance Tracking']
                },
                {
                  icon: Clock,
                  title: '24/7 Availability',
                  description: 'Always-on customer support with instant responses and availability.',
                  features: ['Instant Responses', 'Always Available', 'Scalable Infrastructure', 'Global Deployment']
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect for Every <span className="text-cyan-400">Business</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From customer support to sales automation, Zion Chat AI adapts to your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Customer Support',
                  description: 'Provide instant, accurate answers to customer questions 24/7.',
                  icon: '🎧',
                  benefits: ['FAQ Automation', 'Ticket Routing', 'Issue Resolution', 'Customer Satisfaction']
                },
                {
                  title: 'Sales Assistant',
                  description: 'Qualify leads, answer product questions, and guide customers through the sales process.',
                  icon: '💼',
                  benefits: ['Lead Qualification', 'Product Information', 'Sales Guidance', 'Conversion Tracking']
                },
                {
                  title: 'E-commerce Support',
                  description: 'Help customers with orders, returns, and product recommendations.',
                  icon: '🛒',
                  benefits: ['Order Tracking', 'Return Processing', 'Product Recommendations', 'Payment Support']
                },
                {
                  title: 'Lead Generation',
                  description: 'Capture and qualify leads through engaging conversations and forms.',
                  icon: '📈',
                  benefits: ['Lead Capture', 'Qualification', 'Contact Collection', 'CRM Integration']
                },
                {
                  title: 'Booking & Scheduling',
                  description: 'Handle appointments, reservations, and scheduling automatically.',
                  icon: '📅',
                  benefits: ['Appointment Booking', 'Calendar Integration', 'Reminders', 'Rescheduling']
                },
                {
                  title: 'Internal Support',
                  description: 'Provide HR support, IT helpdesk, and internal knowledge sharing.',
                  icon: '🏢',
                  benefits: ['HR Support', 'IT Helpdesk', 'Knowledge Base', 'Internal Communication']
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
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
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple <span className="text-cyan-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your chatbot needs. Start free, scale as you grow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Starter',
                  price: '$29',
                  period: '/month',
                  description: 'Perfect for small businesses and startups',
                  features: [
                    'Up to 1,000 conversations/month',
                    'Basic chatbot builder',
                    'Website integration',
                    'Email support',
                    'Standard templates'
                  ],
                  popular: false
                },
                {
                  name: 'Professional',
                  price: '$99',
                  period: '/month',
                  description: 'Ideal for growing businesses and teams',
                  features: [
                    'Up to 10,000 conversations/month',
                    'Advanced AI features',
                    'Multi-channel deployment',
                    'Priority support',
                    'Custom integrations',
                    'Analytics dashboard'
                  ],
                  popular: true
                },
                {
                  name: 'Enterprise',
                  price: '$299',
                  period: '/month',
                  description: 'For large organizations and enterprises',
                  features: [
                    'Unlimited conversations',
                    'Custom AI training',
                    'White-label options',
                    'Dedicated support',
                    'Advanced analytics',
                    'SLA guarantees'
                  ],
                  popular: false
                }
              ].map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-white/10 hover:border-cyan-400/30'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
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
                    href="/contact" 
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600' 
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-slate-800/50 to-purple-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your AI Chatbot Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your customer experience with AI-powered conversations. 
              Start your free trial today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
              >
                Try Free Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionChatAiPage;