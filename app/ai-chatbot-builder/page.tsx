'use client';
import React, { use State } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Message Circle, Brain, Check Circle, Arrow Right, Star, Zap, Bar Chart, Clock, Link as Link Icon } from 'lucide-react';

const Ai Chatbot Builder Page: React.F C = () => {
  const features = [
    {
      title: 'No-Code Builder',
      description: 'Create sophisticated chatbots without any programming knowledge using our visual interface',
      icon: <Z apclass Name="w-8h-8t e xt-c y an-400" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'A I-Powered Responses',
      description: 'Natural language processing and machine learning for intelligent, contextual conversations',
      icon: <B rainclass Name="w-8h-8t e xt-p u rple-400" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Multi-Channel Deployment',
      description: 'Deploy your chatbot across websites, mobile apps, social media, and messaging platforms',
      icon: <G lobeclass Name="w-8h-8t e xt-g r een-400" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Advanced Analytics',
      description: 'Track performance, user engagement, and conversation insights with detailed analytics',
      icon: <B ar Chartclass Name="w-8h-8t e xt-i n digo-400" />,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Custom Integrations',
      description: 'Connect with C R M, helpdesk, payment systems, and other business tools seamlessly',
      icon: <S hieldclass Name="w-8h-8t e xt-r e d-400" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Real-time Monitoring',
      description: 'Monitor conversations in real-time and intervene when human assistance is needed',
      icon: <M essage Circleclass Name="w-8h-8t e xt-t e al-400" />,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const use Cases = [
    {
      title: 'Customer Support',
      description: '24/7 automated customer support with instant responses and issue resolution',
      icon: <U sersclass Name="w-6h-6t e xt-b l ue-500" />,
      benefits: ['Reduce support tickets by 60%', 'Instant response time', 'Multilingual support']
    },
    {
      title: 'Lead Generation',
      description: 'Qualify and nurture leads automatically with intelligent conversation flows',
      icon: <T argetclass Name="w-6h-6t e xt-g r een-500" />,
      benefits: ['Increase lead conversion by 40%', 'Automated follow-ups', 'Lead scoring']
    },
    {
      title: 'E-commerce Assistant',
      description: 'Help customers find products, process orders, and handle returns seamlessly',
      icon: <S hopping Cartclass Name="w-6h-6t e xt-p u rple-500" />,
      benefits: ['Boost sales by 25%', 'Reduce cart abandonment', 'Personalized recommendations']
    },
    {
      title: 'Internal Operations',
      description: 'Streamline internal processes with H R, I T support, and knowledge management bots',
      icon: <C lockclass Name="w-6h-6t e xt-o r ange-500" />,
      benefits: ['Improve efficiency by 50%', 'Reduce response time', 'Standardized processes']
    }
  ];

  const pricing Plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started with chatbots',
      features: [
        'Up to 1,000 conversations/month',
        'Basic A I responses',
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
        'Advanced A I with custom training',
        'Multi-channel deployment',
        'C R M integrations',
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
        'Custom A I models',
        'White-label solution',
        'Advanced integrations',
        'Real-time monitoring',
        'Dedicated support',
        'Custom development'
      ],
      popular: false
    }
  ];

  return (

    <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </d iv>
      <H elmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>A I Chatbot Builder - Zion Tech Group</t itle>
        <m eta name="description" content="Build intelligent chatbots without coding. Deploy across multiple channels with advanced A I capabilities." />
        <m eta name="keywords" content="A I chatbot builder, no-code chatbot, conversational A I, customer support automation" />
      </H elmet>

      {/* Hero Section */}

      <s ection class Name="r e l a tivepy-20px-4" />
        <d iv class Name="m ax-w-7x l mx-autotext-center">
        </d iv>
          <h1 c lass Name="t e xt-5xl md:t e xt-7xl font-boldtext-white mb-6" />
            A I Chatbot
            <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent" />
              {' '}Builder

            </s pan>
          </h1>
          <p c lass Name="t e xt-xl t e xt-gray-300 mb-8max-w-3xlmx-auto">
              Create intelligent, conversational chatbots without any coding. Deploy across multiple channels 
            and scale your customer engagement with advanced A I capabilities.

          </p>
          <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
            <L ink to="/contact" class Name="b g-g r a dient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
              Start Building Now

              <A rrow Rightclass Name="m l-2w-5h-5" />
            </L ink>
            <L ink to="/demo" class Name="b o r d er border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900transition-allduration-300" />
              View Demo

            </L ink>
          </d iv>
      </s ection>

      {/* Features Section */}

      <s ection class Name="p y-20p x-4" />
        <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e x t-4xl font-boldtext-whitemb-4" />
              Powerful Features for Every Need

            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300max-w-3xlmx-auto">
              Everything you need to build, deploy, and manage intelligent chatbots that deliver exceptional user experiences.

            </p>
          </d iv>
          
          <d iv class Name="g r id md:g r id-cols-2lg:grid-cols-3gap-8">
        </d iv>
            {features.map((feature, index) => (

              <d ivkey={index} class Name="b g-s l a te-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50transition-allduration-300" />
                <d iv class Name="{`w-16" h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`} />
                  {feature.icon}

                </d iv>
                <h3 c lass Name="t e xt-xl f o nt-semiboldtext-white mb-3">{feature.title}</h3>
                <p c lass Name="t e xt-g r ay-300">{feature.description}</p>
              </d iv>
            ))}

          </d iv>
      </s ection>

      {/* Use Cases Section */}

      <s ection class Name="p y-20p x-4bg-s l ate-800/30" />
        <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e x t-4xl font-boldtext-whitemb-4" />
              Perfect for Every Business

            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300max-w-3xlmx-auto">
              From customer support to lead generation, our chatbot builder adapts to your specific business needs.

            </p>
          </d iv>
          
          <d iv class Name="g r id md:g r id-cols-2lg:grid-cols-4gap-8">
        </d iv>
            {use Cases.map((use Case, index) => (

              <d ivkey={index} class Name="b g-s l a te-800/50 backdrop-blur-sm rounded-xl p-6borderborder-slate-700" />
                <d iv class Name="f l e x items-centermb-4">
        </d iv>
                  {use Case.icon}

                  <h3 c lass Name="t e xt-xl f o nt-semiboldtext-whiteml-3">{use Case.title}</h3>
                </d iv>
                <p c lass Name="t e xt-g r ay-300 mb-4">{use Case.description}</p>
                <u lclass Name="s p a c e-y-2" />
                  {use Case.benefits.map((benefit, idx) => (

                    <l ikey={idx} class Name="f l ex i t ems-centertext-smtext-gray-400" />
                      <C heck Circleclass Name="w-4 h-4 t e xt-g r een-400mr-2flex-shrink-0" />
                      {benefit}
                    </l i>
                  ))}

                </u l>
              </d iv>
            ))}

          </d iv>
      </s ection>

      {/* Pricing Section */}

      <s ection class Name="p y-20p x-4" />
        <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e x t-4xl font-boldtext-whitemb-4" />
              Simple, Transparent Pricing

            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300max-w-3xlmx-auto">
              Choose the plan that fits your business needs. No hidden fees, no surprises.

            </p>
          </d iv>
          
          <d iv class Name="g r i d md:grid-cols-3gap-8">
        </d iv>
            {pricing Plans.map((plan, index) => (
              <d ivkey={index} class Name="{`b g-s l a te-800/50" backdrop-blur-sm rounded-xl p-8 border ${
                plan.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-slate-700'
              } relative`} />
                {plan.popular && (

                  <d iv class Name="a b s o lute -top-4 left-1/2transform-translate-x-1/2">
        </d iv>
                    <s pan class Name="b g-g r a dient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-fulltext-smfont-semibold" />
                      Most Popular

                    </s pan>
                  </d iv>
                )}

                <d iv class Name="t e x t-centermb-6">
        </d iv>
                  <h3 c lass Name="t e xt-2xl f o nt-boldtext-whitemb-2">{plan.name}</h3>
                  <d iv class Name="f l e x items-baselinejustify-center" />
                    <s pan class Name="t e x t-4xlfont-boldtext-white">{plan.price}</s pan>
                    <s pan class Name="t e xt-g r ay-400ml-1">{plan.period}</s pan>
                  </d iv>
                  <p c lass Name="t e xt-g r ay-300mt-2">{plan.description}</p>
                </d iv>
                <u lclass Name="s p a c e-y-3mb-8" />
                  {plan.features.map((feature, idx) => (

                    <l ikey={idx} class Name="f l e x items-centertext-gray-300" />
                      <C heck Circleclass Name="w-5 h-5 t e xt-g r een-400mr-3flex-shrink-0" />
                      {feature}
                    </l i>
                  ))}
                </u l>
                <L ink
                  to="/contact"
                  class Name="{`w-f u ll" py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`} />
                  Get Started

                </L ink>
              </d iv>
            ))}

          </d iv>
      </s ection>

      {/* C T A Section */}

      <s ection class Name="p y-20p x-4" />
        <d iv class Name="m a x-w-4x l mx-autotext-center">
        </d iv>
          <h2 c lass Name="t e x t-4xl font-boldtext-white mb-6" />
            Ready to Build Your First Chatbot?

          </h2>
          <p c lass Name="t e xt-x l text-gray-300 mb-8" />
            Join thousands of businesses already using our platform to create amazing customer experiences.

          </p>
          <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
            <L ink to="/contact" class Name="b g-g r a dient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
              Start Your Free Trial

              <A rrow Rightclass Name="m l-2w-5h-5" />
            </L ink>
            <L ink to="/demo" class Name="b o r d er border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900transition-allduration-300" />
              Schedule Demo

            </L ink>
          </d iv>
      </s ection>
    </d iv>
  );
};

export default Ai Chatbot Builder Page;
