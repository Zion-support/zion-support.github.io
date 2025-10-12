import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, CheckCircle, Users, BarChart, Globe, Shield, MessageCircle } from 'lucide-react';

const AiChatbotBuilderPage: React.FC = () => {
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Zap, Shield, Brain, BarChart, MessageCircle, Target, ShoppingCart, Globe, Clock } from 'lucide-react';

const AiChatbotBuilderPage: React.FC = () => {
  // const [isVisible] = useState(true);

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, Zap, Brain, CheckCircle, Users, BarChart, MessageCircle, Target, Workflow, Globe} from 'lucide-react';
'use client';
  const features = [
    {
      title: 'No-Code Builder',
      description: 'Create sophisticated chatbots without any programming knowledge using our visual interface',
      icon: <Zap className="w-8h-8text-cyan-400" />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Multi-Language Support',
      description: 'Deploy chatbots in 50+ languages with automatic translation and localization',
      icon: <Globe className="w-8h-8text-green-400" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Advanced Analytics',
      description: 'Track performance with detailed analytics, conversation insights, and user behavior data',
      icon: <BarChart className="w-8h-8text-blue-400" />,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance, and data protection built-in',
      icon: <Shield className="w-8h-8text-purple-400" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Omnichannel Support',
      description: 'Deploy across web, mobile, social media, and messaging platforms seamlessly',
      icon: <MessageCircle className="w-8h-8text-orange-400" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'AI Training',
      description: 'Train your chatbot with your own data and knowledge base for personalized responses',
      icon: Brain,
      color: 'from-yellow-500to-orange-500'
    }
  ];
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

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with chatbots',
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
        'Advanced AI with custom training',
        'Priority support',
        'Advanced integrations',
        'Detailed analytics & reporting',
        'Multi-language support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI models',
        'Dedicated support',
        'Custom development',
        'Advanced security',
        'White-label options',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: '24/7 automated customer service with intelligent ticket routing and resolution',
      icon: <Users className="w-6h-6text-blue-400" />
    },
    {
      title: 'Lead Generation',
      description: 'Qualify and nurture leads with intelligent conversation flows and data collection',
      icon: <Target className="w-6h-6text-green-400" />
    },
    {
      title: 'E-commerce Assistant',
      description: 'Help customers find products, answer questions, and complete purchases',
      icon: <ShoppingCart className="w-6h-6text-purple-400" />
    },
    {
      title: 'Internal Support',
      description: 'Streamline internal processes with HR, IT, and administrative chatbots',
      icon: <Settings className="w-6h-6text-orange-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-brfrom-gray-900 via-blue-900 to-purple-900">
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group | No-Code Chatbot Platform</title>
        <meta name="description" content="Build intelligent chatbots without coding. Our no-code platform offers advanced AI, multi-language support, and enterprise-grade security." />
        <meta name="keywords" content="chatbot builder, no-code chatbot, AI chatbot, conversational AI, customer service automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20px-4sm:px-6lg:px-8" />
        <div className="max-w-7xl mx-auto text-center" />
          <h1 className="text-5xlmd:text-6xlfont-bold text-whitemb-6" />
            AI <span className="text-transparentbg-clip-text bg-gradient-to-rfrom-cyan-400 to-purple-400"  >Chatbot Builder</span>
          </h1>
          <p className="text-xltext-gray-300 mb-8 max-w-3xl mx-auto">
            Create intelligent, conversational chatbots without coding. Our no-code platform makes it easy to build, deploy, and manage chatbots that engage your customers 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4justify-center" />
            <Link
              to="/contact"
              className="bg-gradient-to-rfrom-cyan-600 to-purple-600 text-whitepx-8py-3rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
            >
              Start Building <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/ai-services"
              className="border border-white text-whitepx-8py-3rounded-lg font-semibold hover:bg-whitehover:text-gray-900 transition-all duration-300"
            >
              View All AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16px-4sm:px-6lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-centermb-16">
            <h2 className="text-3xlfont-bold text-whitemb-4">Powerful Features</h2>
            <p className="text-gray-300 text-lgmax-w-2xl mx-auto">
              Everything you need to build, deploy, and manage intelligent chatbots.
            </p>
          </div>
          <div className="grid md:grid-cols-2lg:grid-cols-3gap-8" />
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xlfont-semibold text-whitemb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16px-4sm:px-6lg:px-8bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-centermb-16">
            <h2 className="text-3xlfont-bold text-whitemb-4">Use Cases</h2>
            <p className="text-gray-300 text-lgmax-w-2xl mx-auto">
              Discover how chatbots can transform your business operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2lg:grid-cols-4gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-3mb-4">
                  {useCase.icon}
                  <h3 className="text-lg font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16px-4sm:px-6lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-centermb-16">
            <h2 className="text-3xlfont-bold text-whitemb-4">Simple Pricing</h2>
            <p className="text-gray-300 text-lgmax-w-2xl mx-auto">
              Choose the plan that fits your business needs. No hidden fees, cancel anytime.
            </p>
          </div>
          <div className="grid md:grid-cols-3gap-8" />
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-cyan-500/50 bg-gradient-to-bfrom-cyan-600/10 to-purple-600/10' 
                  : 'border-white/10 hover:bg-white/10'
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-rfrom-cyan-600 to-purple-600 text-whitetext-sm font-semibold px-3py-1rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xlfont-semibold text-whitemb-2">{plan.name}</h3>
                <p className="text-gray-300 text-smmb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-3xlfont-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3px-4rounded-lg font-semibold text-centertransition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-rfrom-cyan-600 to-purple-600 text-whitehover:from-cyan-700 hover:to-purple-700'
                      : 'border border-white text-whitehover:bg-whitehover:text-gray-900'
                  }`}
                >
                  {plan.name=== 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20px-4sm:px-6lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xlfont-bold text-whitemb-6">
            Ready to Build Your First Chatbot?
          </h2>
          <p className="text-gray-300 text-lgmb-8">
            Join thousands of businesses using our platform to create intelligent, engaging chatbots that drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4justify-center" />
            <Link
              to="/contact"
              className="bg-gradient-to-rfrom-cyan-600 to-purple-600 text-whitepx-8py-3rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start Building Today <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="border border-white text-whitepx-8py-3rounded-lg font-semibold hover:bg-whitehover:text-gray-900 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiChatbotBuilderPage;