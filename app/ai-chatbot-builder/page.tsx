import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Zap, Shield, Brain, BarChart, MessageCircle, Target, ShoppingCart, Globe, Clock } from 'lucide-react';

const AiChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      title: 'No-Code Builder',
      description: 'Create sophisticated chatbots without any programming knowledge using our visual interface',
      icon: <Zap className="w-8h-8text-cyan-400" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI-Powered Responses',
      description: 'Natural language processing and machine learning for intelligent, contextual conversations',
      icon: <Brain className="w-8h-8text-purple-400" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Multi-Channel Deployment',
      description: 'Deploy your chatbot across websites, mobile apps, social media, and messaging platforms',
      icon: <Globe className="w-8h-8text-green-400" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Advanced Analytics',
      description: 'Track performance, user engagement, and conversation insights with detailed analytics',
      icon: <BarChart className="w-8h-8text-indigo-400" />,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Custom Integrations',
      description: 'Connect with CRM, helpdesk, payment systems, and other business tools seamlessly',
      icon: <Shield className="w-8h-8text-red-400" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Real-time Monitoring',
      description: 'Monitor conversations in real-time and intervene when human assistance is needed',
      icon: <MessageCircle className="w-8h-8text-teal-400" />,
      color: 'from-teal-500 to-cyan-500'

  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: '24/7 automated customer support with instant responses and issue resolution',
      icon: <Users className="w-6h-6text-blue-500" />,
      benefits: ['Reduce support tickets by 60%', 'Instant response time', 'Multilingual support']
    },
    {
      title: 'Lead Generation',
      description: 'Qualify and nurture leads automatically with intelligent conversation flows',
      icon: <Target className="w-6h-6text-green-500" />,
      benefits: ['Increase lead conversion by 40%', 'Automated follow-ups', 'Lead scoring']
    },
    {
      title: 'E-commerce Assistant',
      description: 'Help customers find products, process orders, and handle returns seamlessly',
      icon: <ShoppingCart className="w-6h-6text-purple-500" />,
      benefits: ['Boost sales by 25%', 'Reduce cart abandonment', 'Personalized recommendations']
    },
    {
      title: 'Internal Operations',
      description: 'Streamline internal processes with HR, IT support, and knowledge management bots',
      icon: <Clock className="w-6h-6text-orange-500" />,
      benefits: ['Improve efficiency by 50%', 'Reduce response time', 'Standardized processes']

  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started with chatbots',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI responses',
        'Website integration',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI with custom training',
        'Multi-channel deployment',
        'CRM integrations',
        'Advanced analytics',
        'Priority support',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Full-scale solution for large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI models',
        'White-label solution',
        'Advanced integrations',
        'Real-time monitoring',
        'Dedicated support',
        'Custom development'
      ],
      popular: false

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots without coding. Deploy across multiple channels with advanced AI capabilities." />
        <meta name="keywords" content="AI chatbot builder, no-code chatbot, conversational AI, customer support automation" />
      </Helmet>

      {/* Hero Section */}

      <section className="relativepy-20px-4" />
        <div className="max-w-7xlmx-autotext-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" />
            AI Chatbot
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent" />
              {' '}Builder

            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8max-w-3xlmx-auto">
              Create intelligent, conversational chatbots without any coding. Deploy across multiple channels
            and scale your customer engagement with advanced AI capabilities.

          </p>
          <div className="flex flex-col sm:flex-rowgap-4justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-centerjustify-center" >
          Start Building Now

          <ArrowRight className="ml-2w-5h-5"  />
        </Link>
            <Link to="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900transition-allduration-300" />
              View Demo

            </Link>
          </div>
      </section>

      {/* Features Section */}

      <section className="py-20px-4" />
        <div className="max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4xl font-bold text-white mb-4" />
              Powerful Features for Every Need

            </h2>
            <p className="text-xl text-gray-300max-w-3xlmx-auto">
              Everything you need to build, deploy, and manage intelligent chatbots that deliver exceptional user experiences.

            </p>
          </div>

          <div className="grid md:grid-cols-2lg:grid-cols-3gap-8">
            {features.map((feature, index) => (

              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50transition-allduration-300" />
                <div className="{`w-16" h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`} />
                  {feature.icon}

                </div>
                <h3 className="text-xl font-semiboldtext-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}

          </div>
      </section>

      {/* Use Cases Section */}

      <section className="py-20px-4bg-slate-800/30" />
        <div className="max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4xl font-bold text-white mb-4" />
              Perfect for Every Business

            </h2>
            <p className="text-xl text-gray-300max-w-3xlmx-auto">
              From customer support to lead generation, our chatbot builder adapts to your specific business needs.

            </p>
          </div>

          <div className="grid md:grid-cols-2lg:grid-cols-4gap-8">
            {useCases.map((useCase, index) => (

              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6borderborder-slate-700" />
                <div className="flex items-centermb-4">
                  {useCase.icon}

                  <h3 className="text-xl font-semiboldtext-whiteml-3">{useCase.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2" />
                  {useCase.benefits.map((benefit, idx) => (

                    <li key={idx} className="flex items-centertext-smtext-gray-400" />
                      <CheckCircle className="w-4 h-4 text-green-400mr-2flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}

                </ul>
              </div>
            ))}

          </div>
      </section>

      {/* Pricing Section */}

      <section className="py-20px-4" />
        <div className="max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4xl font-bold text-white mb-4" />
              Simple, Transparent Pricing

            </h2>
            <p className="text-xl text-gray-300max-w-3xlmx-auto">
              Choose the plan that fits your business needs. No hidden fees, no surprises.

            </p>
          </div>

          <div className="gridmd:grid-cols-3gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="{`bg-slate-800/50" backdrop-blur-sm rounded-xl p-8 border ${
                plan.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-slate-700'
              } relative`} />
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2transform-translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-fulltext-smfont-semibold" />
                      Most Popular

                    </span>
                  </div>
                )}
                <div className="text-centermb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baselinejustify-center">
                    <span className="text-4xlfont-bold text-white">{plan.price}</span>
                    <span className="text-gray-400ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3mb-8" />
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300" />
                      <CheckCircle className="w-5 h-5 text-green-400mr-3flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="{`w-full" py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`} />
                  Get Started

                </Link>
              </div>
            ))}

          </div>
      </section>

      {/* CTA Section */}

      <section className="py-20px-4" />
        <div className="max-w-4xlmx-autotext-center">
          <h2 className="text-4xl font-bold text-white mb-6" />
            Ready to Build Your First Chatbot?

          </h2>
          <p className="text-xltext-gray-300 mb-8">
              Join thousands of businesses already using our platform to create amazing customer experiences.
          </p>
          <div className="flex flex-col sm:flex-rowgap-4justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-centerjustify-center" >
          Start Your Free Trial

          <ArrowRight className="ml-2w-5h-5"  />
        </Link>
            <Link to="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900transition-allduration-300" />
              Schedule Demo

            </Link>
          </div>
      </section>
    </div>
  );
};

export default AiChatbotBuilderPage;
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
