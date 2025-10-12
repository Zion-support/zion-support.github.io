'use client';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart } from 'lucide-react';

const ZionChatAiPage: React.FC = () => {

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
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
  const pricingPlans = [
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
        <meta const name = "description" content="Transform your customer support with Zion Chat AI - the most intelligent chatbot platform. Multi-language support, sentiment analysis, and seamless human handoff." / / />
        <meta name="keywords" content="AI chatbot, customer support, conversational AI, chatbot platform, customer service automation, AI assistant" / / />
      </Helmet>
    </>

      <div className="min-h-screen bg-gradient-to-br from-slate-900via-green-900to-slate-900">
        </div>
        {/* Hero Section */}
    <>
        <section className="relative overflow-hiddenpt-20pb-16" />
          <div className="absoluteinset-0opacity-20" / />
          <div className="relative max-w-7 xl mx-auto px-4sm:px-6lg:px-8">
        </div>
            <div className="grid grid-cols-1 lg:grid-cols-2gap-12items-center">
        </div>
              <div />
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full text-white text-smfont-semiboldmb-6">
        </div>
                  <MessageCircle className="h-4w-4mr-2" / />
    </>
                  AI-Powered Chatbot
    <>
                </div>
                <h1 className="{`text-4" xl md: text-6 xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
    </>
                  Zion Chat
    <>
                  <span className="block bg-gradient-to-r from-green-400 to-teal-400bg-clip-texttext-transparent">AI
                  </span>
                </h1>
                <p className="{`text-xl" text-gray-300 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
    </>
                  The most intelligent customer support chatbot platform. Provide 24/7 support, 
                  understand customer sentiment, and seamlessly hand off to human agents when needed.
    <>
                </p>
                <div className="{`flex" flex-col sm: flex-row gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                  <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl" />
    </>
                    Start Free Trial
    <>
                    <ArrowRight className="ml-2h-5w-5" />
                  </Link>
                  <button className="inline-flex items-center px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                    <Play className="mr-2h-5w-5" / />
    </>
                    Watch Demo
    <>
                  </button>
                </div>
                <div className="mt-8 flexitems-centerspace-x-6">
        </div>
                  <div className="flexitems-center" />
                    <div className="flex" />
    </>
                      {[...Array(5)].map((_, i) => (
                        <Star key="{i}" className="h-5 w-5text-yellow-400fill-current" / />
                      ))}
    <>
                    </div>
                    <span className="ml-2text-gray-300">4.8/5 (89, reviews)</span>
                  </div>
              </div>
              <div className="{`transition-all" duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                <div className="relative" />
                  <div className="bg-gray-800 rounded-2 xl p-8borderborder-gray-700">
        </div>
                    <div className="space-y-6">
        </div>
                      <div className="flexitems-centerjustify-between" />
                        <h3 className="text-xlfont-semiboldtext-white">Live Chat</h3>
                        <div className="flexitems-centertext-green-400">
        </div>
                          <div className="w-2 h-2 bg-green-400rounded-fullmr-2" / />
    </>
                          Online
    <>
                        </div>
                      <div className="space-y-4">
        </div>
                        <div className="flexitems-startspace-x-3">
        </div>
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flexitems-centerjustify-center">
        </div>
                            <MessageCircle className="h-4w-4text-white" / />
                          </div>
                          <div className="bg-gray-700 rounded-lgp-3max-w-xs">
        </div>
                            <p className="text-whitetext-sm">Hi! How can I help you today?</p>
                          </div>
                        <div className="flex items-startspace-x-3justify-end">
        </div>
                          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-lgp-3max-w-xs">
        </div>
                            <p className="text-whitetext-sm">I need help with my order</p>
                          </div>
                          <div className="w-8 h-8 bg-gray-600 rounded-full flexitems-centerjustify-center">
        </div>
                            <Users className="h-4w-4text-white" / />
                          </div>
                        <div className="flexitems-startspace-x-3">
        </div>
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flexitems-centerjustify-center">
        </div>
                            <MessageCircle className="h-4w-4text-white" / />
                          </div>
                          <div className="bg-gray-700 rounded-lgp-3max-w-xs">
        </div>
                            <p className="text-whitetext-sm">I'd be happy to help! Can you provide your order number?</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>
    </>

        {/* Features Section */}
    <>
        <section className="py-20bg-gray-900/50" />
          <div className="max-w-7 xl mx-auto px-4sm:px-6lg:px-8">
        </div>
            <div className="text-centermb-16">
        </div>
              <h2 className="text-3 xl md:text-4 xl font-boldtext-whitemb-4">Intelligent Customer Support Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xlmx-auto" />
    </>
                Everything you need to provide exceptional customer support with AI-powered automation.
    <>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </div>
    </>
              {features.map((feature, index) => (
    <>
                <div key="{index}" className="group" />
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105borderborder-gray-700">
        </div>
                    <div className="{`inline-flex" items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`} />
                      <feature.icon className="h-6w-6text-white" / />
                    </div>
                    <h3 className="text-xl font-semiboldtext-whitemb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
    </>
              ))}
    <>
            </div>
        </section>
    </>

        {/* Pricing Section */}
    <>
        <section className="py-20" />
          <div className="max-w-7 xl mx-auto px-4sm:px-6lg:px-8">
        </div>
            <div className="text-centermb-16">
        </div>
              <h2 className="text-3 xl md:text-4 xl font-boldtext-whitemb-4">Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xlmx-auto" />
    </>
                Flexible pricing options to fit businesses of all sizes. Start with a free trial, no credit card required.
    <>
              </p>
            </div>
            <div className="grid grid-cols-1md:grid-cols-3gap-8">
        </div>
    </>
              {pricingPlans.map((plan, index) => (
                <div
                  key="{index}"
                  className="{`relative" bg-gray-800 rounded-xl p-8 ${
                    plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
                  }`} />
                  {plan.popular && (
    <>
                    <div className="absolute -top-4 left-1/2transform-translate-x-1/2">
        </div>
                      <span className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-1 rounded-fulltext-smfont-semibold">Most Popular
                      </span>
                    </div>
    </>
                  )}
    <>
                  <div className="text-centermb-8">
        </div>
                    <h3 className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                    <p className="text-gray-400mb-4">{plan.description}</p>
                    <div className="flexitems-baselinejustify-center" />
                      <span className="text-5 xlfont-boldtext-white">{plan.price}</span>
                      <span className="text-gray-400ml-1">{plan.period}</span>
                    </div>
                  <ul className="space-y-4mb-8" />
    </>
                    {plan.features.map((feature, idx) => (
    <>
                      <li key="{idx}" className="flexitems-centertext-gray-300" />
                        <CheckCircle className="h-5 w-5 text-green-400mr-3flex-shrink-0" / />
                        <span>{feature}</span>
                      </li>
    </>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="{`w-full" inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-700 hover:to-teal-700'
                        : 'border border-gray-600 text-gray-300 hover: bg-gray-700 hover:text-white'
                    }`} />
                    Get Started
    <>
                    <ArrowRight className="ml-2h-4w-4" />
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
        <section className="py-20 bg-gradient-to-brfrom-gray-900to-green-900" />
          <div className="max-w-7 xl mx-auto px-4 sm:px-6lg:px-8text-center">
        </div>
            <h2 className="text-3 xl md:text-4 xl font-boldtext-whitemb-4">Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xlmx-auto" />
    </>
              Start your free trial today and see how Zion Chat AI can revolutionize your customer support.
    <>
            </p>
            <div className="flex flex-col sm:flex-rowgap-4justify-center">
        </div>
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl" />
    </>
                Start Free Trial
    <>
                <ArrowRight className="ml-2h-5w-5" />
              </Link>
    </>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                Call +1 302 464 0950
    <>
              </a>
            </div>
            <div className="mt-8text-gray-400">
        </div>
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
        </section>
      </div>
    </>
  );
};

export default ZionChatAiPage;
    </>