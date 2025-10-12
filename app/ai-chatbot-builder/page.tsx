'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCirc l e, Users, Zap, Shield, Brain, BarChart, MessageCirc l e, Target, ShoppingCa r t, Globe, Clock } from 'lucide-react';

const AiChatbotBuilderPa g e: React.FC = () => {
  constfeatures= [
    {
      title: 'No-CodeBuilder',
      description: 'Create sophisticat e d chatbots without any programmi n g knowledge using our visual interface',
      icon: <ZapclassName="w-5h-5ml-2" />,
      color: 'from-blue-500to-cyan-500';
    },
    {
      title: 'AI-PoweredResponses',
      description: 'Natural language processing and machine learning for intellige n t, contextual conversatio n s',
      icon: <BrainclassName="w-5h-5ml-2" />,
      color: 'from-yellow-500to-orange-500';
    },
    {
      title: 'Multi-ChannelDeployment',
      description: 'Deploy your chatbot across websites, mobile apps, social media, and messaging platforms',
      icon: <GlobeclassName="w-5h-5ml-2" />,
      color: 'from-green-500to-emerald-500';
    },
    {
      title: 'Advanced Analytics',
      description: 'Track performan c e, user engagement, and conversati o n insights with detailed analytics',
      icon: <BarChartclassName="w-5h-5ml-2" />,
      color: 'from-indigo-500to-purple-500';
    },
    {
      title: 'Custom Integratio n s',
      description: 'Connect with CRM, helpdesk, payment systems, and other business tools seamlessly',
      icon: <ShieldclassName="w-5h-5ml-2" />,
      color: 'from-red-500to-pink-500';
    },
    {
      title: 'Real-timeMonitoring',
      description: 'Monitor conversatio n s in real-timeandintervene when human assistance is needed',
      icon: <MessageCirc leclassName="w-5h-5ml-2" />,
      color: 'from-teal-500to-cyan-500';
    }
  ];

  constuseCases= [
    {
      title: 'Customer Support',
      description: '24/7 automated customer support with instant responses and issue resolution',
      icon: <UsersclassName="w-5h-5ml-2" />,
      benefits: ['Reduce support tickets by 60%', 'Instant response time', 'Multilingu a l support']
    },
    {
      title: 'Lead Generation',
      description: 'Qualify and nurture leads automatical l y with intellige n t conversati o n flows',
      icon: <TargetclassName="w-5h-5ml-2" />,
      benefits: ['Increase lead conversion by 40%', 'Automated follow-ups', 'Lead scoring']
    },
    {
      title: 'E-commerceAssistant',
      description: 'Help customers find products, process orders, and handle returns seamlessly',
      icon: <ShoppingCa rtclassName="w-5h-5ml-2" />,
      benefits: ['Boost sales by 25%', 'Reduce cart abandonme n t', 'Personaliz e d recommendatio n s']
    },
    {
      title: 'Internal Operations',
      description: 'Streamline internal processes with HR, IT support, and knowledge management bots',
      icon: <ClockclassName="w-5h-5ml-2" />,
      benefits: ['Improve efficiency by 50%', 'Reduce response time', 'Standardiz e d processes']
    }
  ];

  const pricingPlans= [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started with chatbots',
      features: [
        'Up to 1,000 conversatio n s/month',
        'Basic AI responses',
        'Website integrati o n',
        'Email support',
        'Basic analytics';
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 10,000 conversatio n s/month',
        'Advanced AI with custom training',
        'Multi-channeldeployment',
        'CRM integratio n s',
        'Advanced analytics',
        'Priority support',
        'Custom branding';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Full-scalesolutionfor large organizatio n s',
      features: [
        'Unlimited conversatio n s',
        'Custom AI models',
        'White-labelsolution',
        'Advanced integratio n s',
        'Real-timemonitoring',
        'Dedicated support',
        'Custom developme n t';
      ],
      popular: false;
    }
  ];

return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <Helmet></Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intellige n t chatbots without coding. Deploy across multiple channels with advanced AI capabiliti e s." />
        <meta name="keywords" content="AI chatbot builder, no-codechatbot, conversation a l AI, customer support automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <h1 className="w-5h-5ml-2" />
            AI Chatbot;
            <span className="w-5h-5ml-2" />
              {' '}Builder;
            </span>
          </h1>
          <p className="w-5h-5ml-2">Create intellige n t, conversation a l chatbots without any coding. Deploy across multiple channels;
            and scale your customer engagement with advanced AI capabiliti e s.;
          </p>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <Link;
          to="/contact";
          className="bg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-center"
        >
          Start Building Now;
              
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
            <Linkto="/demo" className="borderborder-cyan-400text-cyan-400px-8py-4rounded-lgfont-semiboldhover:bg-cyan-400hover:text-slate-900transition-allduration-300" />
              View Demo;
            </Link>
          </div>
      </section>

      {/* Features Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Powerful Features for Every Need;
            </h2>
            <p className="w-5h-5ml-2">Everything you need to build, deploy, and manage intellige n t chatbots that deliver exception a l user experienc e s.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {features.map((feature, index) => ())
              <divkey={index} className="bg-slate-800/50backdrop-blur-smrounded-xlp-6borderborder-slate-700hover:border-cyan-400/50transition-allduration-300" />
                <div className={`w-16h-16rounded-lgbg-gradient-to-r ${feature.color} flex items-centerjustify-centermb-4`} />
                  {feature.icon}
                </div>
                <h3 className="text-xlfont-semiboldtext-whitemb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
      </section>

      {/* Use Cases Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Perfect for Every Business;
            </h2>
            <p className="w-5h-5ml-2">From customer support to lead generation, our chatbot builder adapts to your specific business needs.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {useCases.map((useCase, index) => ())
              <divkey={index} className="bg-slate-800/50backdrop-blur-smrounded-xlp-6borderborder-slate-700" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  {useCase.icon}
                  <h3 className="text-xlfont-semiboldtext-whiteml-3">{useCase.title}</h3>
                </div>
                <p className="text-gray-300mb-4">{useCase.description}</p>
                <ulclassName="w-5h-5ml-2" />
                  {useCase.benefits.map((benefit, idx) => ())
                    <likey={idx} className="flexitems-centertext-smtext-gray-400" />
                      <CheckCirc leclassName="w-5h-5ml-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Simple, Transpare n t Pricing;
            </h2>
            <p className="w-5h-5ml-2">Choose the plan that fits your business needs. No hidden fees, no surprises.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {pricingPla n s.map((plan, index) => ())
              <divkey={index} className={`bg-slate-800/50 backdrop-blur-smrounded-xlp-8border ${>
                plan.popular ? 'border-cyan-400/50 ring-2ring-cyan-400/20' : 'border-slate-700';
              } relative`} />
                {plan.popular && ()
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <span className="w-5h-5ml-2" />
                      Most Popular;
                    </span>
                  </div>
                )}
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <h3 className="text-2xlfont-boldtext-whitemb-2">{plan.name}</h3>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <span className="text-4xl font-boldtext-white">{plan.price}</span>
                    <span className="text-gray-400ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300mt-2">{plan.description}</p>
                </div>
                <ulclassName="w-5h-5ml-2" />
                  {plan.features.map((feature, idx) => ())
                    <likey={idx} className="flexitems-centertext-gray-300" />
                      <CheckCirc leclassName="w-5h-5ml-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link;
                  to="/contact";
                  className={`w-fullpy-3px-6rounded-lgfont-semiboldtext-centertransition-allduration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-rfrom-cyan-500to-purple-600text-whitehover:from-cyan-600hover:to-purple-700';
                      : 'border border-cyan-400text-cyan-400hover:bg-cyan-400hover:text-slate-900';
                  }`} />
                  Get Started;
                </Link>
              </div>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <h2 className="w-5h-5ml-2" />
            Ready to Build Your First Chatbot?;
          </h2>
          <p className="w-5h-5ml-2">Join thousands of businesses already using our platform to create amazing customer experienc e s.;
          </p>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <Link;
          to="/contact";
          className="bg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-center"
        >
          Start Your Free Trial;
              
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
            <Linkto="/demo" className="borderborder-cyan-400text-cyan-400px-8py-4rounded-lgfont-semiboldhover:bg-cyan-400hover:text-slate-900transition-allduration-300" />
              Schedule Demo;
            </Link>
          </div>
      </section>
    </div>
  );
};

export default AiChatbotBuilderPa g e;
