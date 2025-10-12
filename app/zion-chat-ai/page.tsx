'use client';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart } from 'lucide-react';

const ZionChatAiPage: React.FC = () => {

  useEffect(() => {
    setIsVisible(true);
  }, []);

  features = [
    {
      title: 'Multi-Language Support',
      description: 'Support customers in 50+ languages with automatic translation and localization',
      icon: Globe,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Sentiment Analysis',
      description: 'Understand customer emotions and respond appropriately with AI-powered sentiment detection',
      icon: Heart,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Escalation Management',
      description: 'Seamlessly transfer complex queries to human agents with full context',
      icon: Users,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Performance Analytics',
      description: 'Track response times, satisfaction scores, and conversation outcomes',
      icon: BarChart,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Custom Training',
      description: 'Train the AI on your specific products, services, and company knowledge',
      icon: Brain,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Integration APIs',
      description: 'Connect with your existing CRM, helpdesk, and business tools',
      icon: LinkIcon,
      color: 'from-cyan-500 to-blue-500'
    }
  ];
  pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI training',
        'Email support',
        'Standard integrations',
        'Basic analytics',
        '1 chatbot'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI training',
        'Priority support',
        'All integrations',
        'Advanced analytics',
        'Up to 5 chatbots',
        'Custom branding',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI training',
        '24/7 phone support',
        'Custom integrations',
        'Enterprise analytics',
        'Unlimited chatbots',
        'White-label solution',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];
  return (
    <>
    <>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>Zion Chat AI - Intelligent Customer Support Chatbot</title>
        <meta name = "description" content="Transform your customer support with Zion Chat AI - the most intelligent chatbot platform. Multi-language support, sentiment analysis, and seamless human handoff." / / />
        <meta name="keywords" content="AI chatbot, customer support, conversational AI, chatbot platform, customer service automation, AI assistant" />
      </Helmet>
    </>

      <div className="mi n-h-screen bg-gradient-to-br from-slate-900via-green-900to-slate-900">
        </div>
        {/* Hero Section */}
    <>
        <section className="relativ e overflow-hiddenpt-20pb-16" />
          <div className="absoluteinse t-0opacity-20" />
          <div className="relativ e max-w-7xl mx-auto px-4sm:px-6lg:px-8">
            <div className="gri d grid-cols-1 lg:grid-cols-2gap-12items-center">
              <div />
                <div className="inlin e-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full text-white text-smfont-semiboldmb-6">
                  <MessageCircle className="h-4 w-4mr-2" />
                  AI-Powered Chatbot
    <>
                </div>
                <h1 className="{`tex t-4" xl md: text-6 xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
    </>
                  Zion Chat
    <>
                  <span className="bloc k bg-gradient-to-r from-green-400 to-teal-400bg-clip-texttext-transparent">AI
                  </span>
                </h1>
                <p className="{`tex t-xl" text-gray-300 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
    </>
                  The most intelligent customer support chatbot platform. Provide 24/7 support, 
                  understand customer sentiment, and seamlessly hand off to human agents when needed.
    <>
                </p>
                <div className="{`fle x" flex-col sm: flex-row gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                  <Link to="/contact" className="inlin e-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl" >
          Start Free Trial
                    
          <ArrowRight className="m l-2h-5w-5"  />
        </Link>
                  <button className="inlin e-flex items-center px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                    <Play className="m r-2h-5w-5" />
                    Watch Demo
    <>
                  </button>
                </div>
                <div className="m t-8 flex items-centerspace-x-6">
                  <div className="fle x items-center">
                    <div className="fle x">
                      {[...Array(5)].map((_, i) => (
                        <Star key="{i}" className="h-5 w-5tex t-yellow-400fill-current" />
                      ))}
    <>
                    </div>
                    <span className="m l-2text-gray-300">4.8/5 (89, reviews)</span>
                  </div>
              </div>
              <div className="{`transitio n-all" duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                <div className="relativ e">
                  <div className="b g-gray-800 rounded-2 xl p-8borderborder-gray-700">
                    <div className="spac e-y-6">
                      <div className="fle x items-centerjustify-between">
                        <h3 className="tex t-xlfont-semiboldtext-white"   />Live Chat</h3>
                        <div className="fle x items-centertext-green-400">
                          <div className="w-2 h-2 b g-green-400rounded-fullmr-2" />
                          Online
    <>
                        </div>
                      <div className="spac e-y-4">
                        <div className="fle x items-startspace-x-3">
                          <div className="w-8 h-8 b g-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-centerjustify-center">
                            <MessageCircle className="h-4 w-4text-white" />
                          </div>
                          <div className="b g-gray-700 rounded-lgp-3max-w-xs">
                            <p className="tex t-whitetext-sm">
              Hi! How can I help you today?</p>
                          </div>
                        <div className="fle x items-startspace-x-3justify-end">
                          <div className="b g-gradient-to-r from-green-600 to-teal-600 rounded-lgp-3max-w-xs">
                            <p className="tex t-whitetext-sm">
              I need help with my order</p>
                          </div>
                          <div className="w-8 h-8 b g-gray-600 rounded-full flex items-centerjustify-center">
                            <Users className="h-4 w-4text-white" />
                          </div>
                        <div className="fle x items-startspace-x-3">
                          <div className="w-8 h-8 b g-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-centerjustify-center">
                            <MessageCircle className="h-4 w-4text-white" />
                          </div>
                          <div className="b g-gray-700 rounded-lgp-3max-w-xs">
                            <p className="tex t-whitetext-sm">
              I'd be happy to help! Can you provide your order number?</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>
    </>

        {/* Features Section */}
    <>
        <section className="p y-20bg-gray-900/50" />
          <div className="ma x-w-7xl mx-auto px-4sm:px-6lg:px-8">
            <div className="tex t-centermb-16">
              <h2 className="tex t-3 xl md:text-4xl font-bold text-white mb-4"  />Intelligent Customer Support Features
              </h2>
              <p className="tex t-xl text-gray-300 max-w-3xlmx-auto">
              Everything you need to provide exceptional customer support with AI-powered automation.
              </p>
            </div>
            <div className="gri d grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
              {features.map((feature, index) => (
    <>
                <div key="{index}" className="grou p" />
                  <div className="b g-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105borderborder-gray-700">
        </div>
                    <div className="{`inlin e-flex" items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`} />
                      <feature.icon className="h-6 w-6text-white" />
                    </div>
                    <h3 className="tex t-xl font-semiboldtext-white mb-3"   />{feature.title}</h3>
                    <p className="tex t-gray-300">
              {feature.description}</p>
                  </div>
              ))}
    <>
            </div>
        </section>
    </>

        {/* Pricing Section */}
    <>
        <section className="p y-20" />
          <div className="ma x-w-7xl mx-auto px-4sm:px-6lg:px-8">
            <div className="tex t-centermb-16">
              <h2 className="tex t-3 xl md:text-4xl font-bold text-white mb-4"  />Choose Your Plan
              </h2>
              <p className="tex t-xl text-gray-300 max-w-3xlmx-auto">
              Flexible pricing options to fit businesses of all sizes. Start with a free trial, no credit card required.
              </p>
            </div>
            <div className="gri d grid-cols-1md:grid-cols-3gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key="{index}"
                  className="{`relativ e" bg-gray-800 rounded-xl p-8 ${
                    plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
                  }`} />
                  {plan.popular && (
                    <div className="absolut e -top-4 left-1/2transform-translate-x-1/2">
                      <span className="b g-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-1 rounded-fulltext-smfont-semibold"  />Most Popular
                      </span>
                    </div>
    </>
                  )}
                  <div className="tex t-centermb-8">
                    <h3 className="tex t-2 xl font-bold text-white mb-2"   />{plan.name}</h3>
                    <p className="tex t-gray-400mb-4">
              {plan.description}</p>
                    <div className="fle x items-baselinejustify-center">
                      <span className="tex t-5 xlfont-bold text-white"   />{plan.price}</span>
                      <span className="tex t-gray-400ml-1"   />{plan.period}</span>
                    </div>
                  <ul className="spac e-y-4mb-8" />
    </>
                    {plan.features.map((feature, idx) => (
                      <li key="{idx}" className="fle x items-center text-gray-300" />
                        <CheckCircle className="h-5 w-5 tex t-green-400mr-3flex-shrink-0" />
                        <span   />{feature}</span>
                      </li>
    </>
                    ))}
                  </ul>
                  <Link to="/contact"
                    className="{`w-ful l" inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-700 hover:to-teal-700'
                        : 'border border-gray-600 text-gray-300 hover: bg-gray-700 hover:text-white'
                    }`} >
          Get Started
                    
          <ArrowRight className="m l-2h-4w-4"  />
        </Link>
                </div>
    </>
              ))}
    <>
            </div>
        </section>
    </>

        {/* CTA Section */}
    <>
        <section className="p y-20 bg-gradient-to-brfrom-gray-900to-green-900" />
          <div className="ma x-w-7xl mx-auto px-4 sm:px-6lg:px-8text-center">
            <h2 className="tex t-3 xl md:text-4xl font-bold text-white mb-4"  />Ready to Transform Your Customer Support?
            </h2>
            <p className="tex t-xl text-gray-300 mb-8 max-w-3xlmx-auto">
              Start your free trial today and see how Zion Chat AI can revolutionize your customer support.
    <>
            </p>
            <div className="fle x flex-col sm:flex-rowgap-4justify-center">
              <Link to="/contact" className="inlin e-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl" >
          Start Free Trial
                
          <ArrowRight className="m l-2h-5w-5"  />
        </Link>
              <a
                href="tel:+13024640950"
                className="inlin e-flex items-center px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                Call +1 302 464 0950
    <>
              </a>
            </div>
            <div className="m t-8text-gray-400">
              <p />Email: kleber@ziontechgroup.com</p>
              <p />Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
        </section>
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
      </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ZionChatAiPage;
    </>