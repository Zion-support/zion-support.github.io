<<<<<<< HEAD
'use client';
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, CheckCircle, Users, BarChart, Globe, Shield, MessageCircle } from 'lucide-react';
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, Zap, Brain, CheckCircle, Users, BarChart, MessageCircle, Target, Workflow, Globe} from 'lucide-react';
'use client';
>>>>>>> cursor/fix-errors-and-merge-to-main-2a00

const AiChatbotBuilderPage: React.FC = () => {
=======
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Zap, Shield, Brain, BarChart, MessageCircle, Target, ShoppingCart, Globe, Clock } from 'lucide-react';

const AiChatbotBuilderPage: React.FC = () => {
  // const [isVisible] = useState(true);

>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
  const features = [
    {
      title: 'No-Code Builder',
      description: 'Create sophisticated chatbots without any programming knowledge using our visual interface',
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Multi-Language Support',
      description: 'Deploy chatbots in 50+ languages with automatic translation and localization',
      icon: <Globe className="w-8 h-8 text-green-400" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Advanced Analytics',
      description: 'Track performance with detailed analytics, conversation insights, and user behavior data',
      icon: <BarChart className="w-8 h-8 text-blue-400" />,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance, and data protection built-in',
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Omnichannel Support',
      description: 'Deploy across web, mobile, social media, and messaging platforms seamlessly',
      icon: <MessageCircle className="w-8 h-8 text-orange-400" />,
      color: 'from-orange-500 to-red-500'
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
      title: 'AI-Powered Responses',
      description: 'Natural language processing and machine learning for intelligent, contextual conversations',
      icon: <Brain className="w-8 h-8 text-yellow-400" />,
=======
      title: 'AI Training',
      description: 'Train your chatbot with your own data and knowledge base for personalized responses',
=======
      title: 'AI-Powered Responses',
      description: 'Natural language processing and machine learning for intelligent, contextual conversations',
>>>>>>> cursor/fix-errors-and-merge-to-main-2a00
      icon: Brain,
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
      color: 'from-yellow-500 to-orange-500'
    }
  ];
<<<<<<< HEAD

<<<<<<< HEAD
=======
  const useCases = [
    {
      title: 'Customer Support',
      description: '24/7 automated customer support with instant responses and issue resolution',
      icon: Users,
      benefits: ['Reduce support tickets by 60%', 'Instant response time', 'Multilingual support']
    },
    {
      title: 'Lead Generation',
      description: 'Qualify and nurture leads automatically with intelligent conversation flows',
      icon: Target,
      benefits: ['Increase lead conversion by 40%', 'Automated follow-ups', 'Lead scoring']
    },
    {
      title: 'E-commerce Assistant',
      description: 'Help customers find products, process orders, and handle returns seamlessly',
      icon: ShoppingCart,
      benefits: ['Boost sales by 25%', 'Reduce cart abandonment', 'Personalized recommendations']
    },
    {
      title: 'HR Assistant',
      description: 'Handle employee queries, schedule interviews, and provide company information',
      icon: Users,
      benefits: ['Reduce HR workload by 50%', 'Faster response times', 'Consistent information']
    }
  ];

>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
=======
  const useCases = [
    {
      title: 'Customer Support',
      description: '24/7 customer service with instant responses and intelligent ticket routing',
      icon: Users,
      benefits: ['Reduce response time by 90%', 'Handle 10 x more inquiries', 'Improve customer satisfaction']
    },
    {
      title: 'Lead Generation',
      description: 'Qualify leads automatically and nurture prospects through personalized conversations',
      icon: Target,
      benefits: ['Increase lead conversion by 40%', 'Qualify leads 24/7', 'Personalize interactions']
    },
    {
      title: 'E-commerce Assistant',
      description: 'Help customers find products, process orders, and provide shopping assistance',
      icon: ShoppingCart,
      benefits: ['Boost sales by 25%', 'Reduce cart abandonment', 'Improve user experience']
    },
    {
      title: 'Internal Support',
      description: 'Streamline internal processes with HR, IT, and administrative chatbots',
      icon: Workflow,
      benefits: ['Reduce internal tickets', 'Faster employee onboarding', 'Automate routine tasks']
    }
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-2a00
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
<<<<<<< HEAD
      description: 'Perfect for small businesses getting started with chatbots',
=======
      description: 'Perfect for small businesses',
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI responses',
        'Email support',
        'Standard integrations',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Up to 10,000 conversations/month',
<<<<<<< HEAD
        'Advanced AI with custom training',
        'Priority support',
        'Advanced integrations',
        'Detailed analytics & reporting',
        'Multi-language support'
=======
        'Advanced chatbot builder',
        'Priority support',
        'Custom integrations',
        'Advanced analytics',
        'Custom branding',
        'API access'
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
<<<<<<< HEAD
      description: 'Tailored solutions for large organizations',
=======
      description: 'For large organizations',
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
      features: [
        'Unlimited conversations',
        'Custom AI models',
        'Dedicated support',
        'Custom development',
        'Advanced security',
<<<<<<< HEAD
        'White-label options',
        'SLA guarantees'
=======
        'SLA guarantee'
>>>>>>> cursor/fix-errors-and-merge-to-main-2a00
      ],
      popular: false
    }
  ];
<<<<<<< HEAD

  const useCases = [
    {
      title: 'Customer Support',
      description: '24/7 automated customer service with intelligent ticket routing and resolution',
      icon: <Users className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Lead Generation',
      description: 'Qualify and nurture leads with intelligent conversation flows and data collection',
      icon: <Target className="w-6 h-6 text-green-400" />
    },
    {
      title: 'E-commerce Assistant',
      description: 'Help customers find products, answer questions, and complete purchases',
      icon: <ShoppingCart className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Internal Support',
      description: 'Streamline internal processes with HR, IT, and administrative chatbots',
      icon: <Settings className="w-6 h-6 text-orange-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group | No-Code Chatbot Platform</title>
        <meta name="description" content="Build intelligent chatbots without coding. Our no-code platform offers advanced AI, multi-language support, and enterprise-grade security." />
        <meta name="keywords" content="chatbot builder, no-code chatbot, AI chatbot, conversational AI, customer service automation" />
=======
  return (
    <div const className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />
      <Helmet />
        <title  >AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots without coding. Our AI chatbot builder offers no-code solutions, multi-language support, and enterprise-grade security." / / />
        <meta name="keywords" content="ai chatbot builder, no-code chatbot, conversational ai, chatbot platform, ai assistant" / / />
>>>>>>> cursor/fix-errors-and-merge-to-main-2a00
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" />
        <div className="max-w-7 xl mx-auto text-center" />
          <h1 className="text-5 xl md:text-6 xl font-bold text-white mb-6" />
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"  >Chatbot Builder</span>
          </h1>
<<<<<<< HEAD
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create intelligent, conversational chatbots without coding. Our no-code platform makes it easy to build, deploy, and manage chatbots that engage your customers 24/7.
=======
          <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">
            Create intelligent, conversational AI chatbots without any coding knowledge. 
            Deploy across multiple channels and scale your customer engagement.
>>>>>>> cursor/fix-errors-and-merge-to-main-2a00
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" />
            <Link
              to="/contact"
<<<<<<< HEAD
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
            >
              Start Building <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/ai-services"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View All AI Services
=======
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
             />
              Start Building <ArrowRight className="ml-2 w-5 h-5" / />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              />View Demo
>>>>>>> cursor/fix-errors-and-merge-to-main-2a00
            </Link>
          </div>
        </div>
      </section>

<<<<<<< HEAD
=======
      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" />
        <div className="max-w-7 xl mx-auto" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" />
            {stats.map((stat, index) => (
              <div key="{index}" className="text-center" />
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4" />
                  <stat.icon className="w-8 h-8 text-white" / />
                </div>
                <div className="text-3 xl font-bold text-white mb-2"  >{stat.number}</div>
                <div className="text-gray-300"  >{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Everything you need to build, deploy, and manage intelligent chatbots.
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8" />
        <div className="max-w-7 xl mx-auto" />
          <div className="text-center mb-16" />
            <h2 className="text-4 xl font-bold text-white mb-6"  >Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Everything you need to build, deploy, and manage intelligent chatbots
>>>>>>> cursor/fix-errors-and-merge-to-main-2a00
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" />
            {features.map((feature, index) => (
<<<<<<< HEAD
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
=======
              <div key="{index}" className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300" />
                <div className="{`inline-flex" items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`} />
                  <feature.icon className="w-6 h-6 text-white" / />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3"  >{feature.title}</h3>
>>>>>>> cursor/fix-errors-and-merge-to-main-2a00
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Use Cases</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover how chatbots can transform your business operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  {useCase.icon}
                  <h3 className="text-lg font-semibold text-white">{useCase.title}</h3>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-800/30" />
        <div className="max-w-7 xl mx-auto" />
          <div className="text-center mb-16" />
            <h2 className="text-4 xl font-bold text-white mb-6"  >Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Discover how AI chatbots can transform your business operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8" />
            {useCases.map((useCase, index) => (
              <div key="{index}" className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 rounded-xl p-8 backdrop-blur-sm border border-white/10" />
                <div className="flex items-start space-x-4" />
                  <div className="flex-shrink-0" />
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center" />
                      <useCase.icon className="w-6 h-6 text-white" / />
                    </div>
                  </div>
                  <div />
                    <h3 className="text-xl font-semibold text-white mb-3"  >{useCase.title}</h3>
                    <p className="text-gray-300 mb-4">{useCase.description}</p>
                    <ul className="space-y-2" />
                      {useCase.benefits.map((benefit, idx) => (
                        <li key="{idx}" className="flex items-center space-x-2" />
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" / />
                          <span className="text-gray-300 text-sm"  >{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2a00
                </div>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Simple Pricing</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Choose the plan that fits your business needs. No hidden fees, cancel anytime.
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8" />
        <div className="max-w-7 xl mx-auto" />
          <div className="text-center mb-16" />
            <h2 className="text-4 xl font-bold text-white mb-6"  >Simple Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Choose the plan that fits your business needs
>>>>>>> cursor/fix-errors-and-merge-to-main-2a00
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8" />
            {pricingPlans.map((plan, index) => (
<<<<<<< HEAD
              <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-cyan-500/50 bg-gradient-to-b from-cyan-600/10 to-purple-600/10' 
                  : 'border-white/10 hover:bg-white/10'
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
=======
              <div key="{index}" className="{`bg-gradient-to-r" from-slate-800/50 to-purple-800/50 rounded-xl p-8 backdrop-blur-sm border ${plan.popular ? 'border-cyan-400/50' : 'border-white/10'} relative`} />
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2" />
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold"  />Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8" />
                  <h3 className="text-2 xl font-bold text-white mb-2"  >{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center" />
                    <span className="text-4 xl font-bold text-white"  >{plan.price}</span>
                    <span className="text-gray-300 ml-1"  >{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8" />
                  {plan.features.map((feature, idx) => (
                    <li key="{idx}" className="flex items-center space-x-3" />
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" / />
                      <span className="text-gray-300"  >{feature}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-2a00
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
<<<<<<< HEAD
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                      : 'border border-white text-white hover:bg-white hover:text-gray-900'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
=======
                  className="{`w-full" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-white'
                  }`}
                  />Get Started
>>>>>>> cursor/fix-errors-and-merge-to-main-2a00
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Your First Chatbot?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join thousands of businesses using our platform to create intelligent, engaging chatbots that drive results.
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8" />
        <div className="max-w-4 xl mx-auto text-center" />
          <h2 className="text-4 xl font-bold text-white mb-6"  >Ready to Build Your AI Chatbot?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start creating intelligent conversations that engage your customers and drive business growth.
>>>>>>> cursor/fix-errors-and-merge-to-main-2a00
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" />
            <Link
              to="/contact"
<<<<<<< HEAD
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start Building Today <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More About Us
=======
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              />Start Building Now
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              />View Pricing
>>>>>>> cursor/fix-errors-and-merge-to-main-2a00
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiChatbotBuilderPage;