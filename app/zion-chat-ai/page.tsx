'use client';
import { use State, use Effect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Brain, Bar Chart, Message Circle, Heart, Link as LinkIcon, Globe, Play } from 'lucide-react';

const Zion Chat Ai Page: React.F C = () => {

  use Effect(() => {
    set Is Visible(true);
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
      description: 'Understand customer emotions and respond appropriately with A I-powered sentiment detection',
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
      icon: Bar Chart,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Custom Training',
      description: 'Train the A I on your specific products, services, and company knowledge',
      icon: Brain,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Integration A PIs',
      description: 'Connect with your existing C RM, helpdesk, and business tools',
      icon: LinkIcon,
      color: 'from-cyan-500 to-blue-500'
    }
  ];
  const pricing Plans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic A I training',
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
        'Advanced A I training',
        'Priority support',
        'All integrations',
        'Advanced analytics',
        'Up to 5 chatbots',
        'Custom branding',
        'A PI access'
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
        'Custom A I training',
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

      <H elmet>
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>Zion Chat A I - Intelligent Customer Support Chatbot</t itle>
        <m eta const name = "description" content="Transform your customer support with Zion Chat A I - the most intelligent chatbot platform. Multi-language support, sentiment analysis, and seamless human handoff." / / />
        <m eta name="keywords" content="A I chatbot, customer support, conversational A I, chatbot platform, customer service automation, A I assistant" / / />
      </H elmet>

      <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900via-green-900to-slate-900">
        </d iv>
        {/* Hero Section */}

        <s ection class Name="r elative overflow-hiddenpt-20pb-16" />
          <d iv class Name="a bsoluteinset-0opacity-20" / />
          <d iv class Name="r elative max-w-7 xl mx-auto px-4sm:px-6lg:px-8">
        </d iv>
            <d iv class Name="g rid grid-cols-1 lg:grid-cols-2gap-12items-center">
        </d iv>
              <d iv />
                <d iv class Name="i nline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full text-white text-smfont-semiboldmb-6">
        </d iv>
                  <M essage Circle class Name="h-4w-4m r-2" / />

                  A I-Powered Chatbot

                </d iv>
                <h1 c lass Name="{`t ext-4" xl md: text-6 xl font-bold text-white mb-6 transition-all duration-1000 ${is Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />

                  Zion Chat

                  <s pan class Name="b lock bg-gradient-to-r from-green-400 to-teal-400bg-clip-texttext-transparent">A I
                  </s pan>
                </h1>
                <p c lass Name="{`t ext-xl" text-gray-300 mb-8 transition-all duration-1000 delay-300 ${is Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />

                  The most intelligent customer support chatbot platform. Provide 24/7 support, 
                  understand customer sentiment, and seamlessly hand off to human agents when needed.

                </p>
                <d iv class Name="{`f lex" flex-col sm: flex-row gap-4 transition-all duration-1000 delay-500 ${is Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                  <L ink to="/contact" class Name="i nline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl" />

                    Start Free Trial

                    <A rrow Right class Name="m l-2h-5w-5" />
                  </L ink>
                  <b utton class Name="i nline-flex items-center px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                    <P lay class Name="m r-2h-5w-5" / />

                    Watch Demo

                  </b utton>
                </d iv>
                <d iv class Name="m t-8 flexitems-centerspace-x-6">
        </d iv>
                  <d iv class Name="f lexitems-center" />
                    <d iv class Name="f lex" />

                      {[...Array(5)].map((_, i) => (
                        <S tar key="{i}" class Name="h-5 w-5t ext-yellow-400fill-current" />
                      ))}

                    </d iv>
                    <s pan class Name="m l-2text-gray-300">4.8/5 (89, reviews)</s pan>
                  </d iv>
              </d iv>
              <d iv class Name="{`t ransition-all" duration-1000 delay-700 ${is Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                <d iv class Name="r elative" />
                  <d iv class Name="b g-gray-800 rounded-2 xl p-8borderborder-gray-700">
        </d iv>
                    <d iv class Name="s pace-y-6">
        </d iv>
                      <d iv class Name="f lexitems-centerjustify-between" />
                        <h3 c lass Name="t ext-xlfont-semiboldtext-white">Live Chat</h3>
                        <d iv class Name="f lexitems-centertext-green-400">
        </d iv>
                          <d iv class Name="w-2 h-2 b g-green-400rounded-fullmr-2" / />

                          Online

                        </d iv>
                      <d iv class Name="s pace-y-4">
        </d iv>
                        <d iv class Name="f lexitems-startspace-x-3">
        </d iv>
                          <d iv class Name="w-8 h-8 b g-gradient-to-r from-green-500 to-teal-500 rounded-full flexitems-centerjustify-center">
        </d iv>
                            <M essage Circle class Name="h-4w-4t ext-white" / />
                          </d iv>
                          <d iv class Name="b g-gray-700 rounded-lgp-3max-w-xs">
        </d iv>
                            <p c lass Name="t ext-whitetext-sm">Hi! How can I help you today?</p>
                          </d iv>
                        <d iv class Name="f lex items-startspace-x-3justify-end">
        </d iv>
                          <d iv class Name="b g-gradient-to-r from-green-600 to-teal-600 rounded-lgp-3max-w-xs">
        </d iv>
                            <p c lass Name="t ext-whitetext-sm">I need help with my order</p>
                          </d iv>
                          <d iv class Name="w-8 h-8 b g-gray-600 rounded-full flexitems-centerjustify-center">
        </d iv>
                            <U sers class Name="h-4w-4t ext-white" / />
                          </d iv>
                        <d iv class Name="f lexitems-startspace-x-3">
        </d iv>
                          <d iv class Name="w-8 h-8 b g-gradient-to-r from-green-500 to-teal-500 rounded-full flexitems-centerjustify-center">
        </d iv>
                            <M essage Circle class Name="h-4w-4t ext-white" / />
                          </d iv>
                          <d iv class Name="b g-gray-700 rounded-lgp-3max-w-xs">
        </d iv>
                            <p c lass Name="t ext-whitetext-sm">I'd be happy to help! Can you provide your order number?</p>
                          </d iv>
                      </d iv>
                  </d iv>
              </d iv>
          </d iv>
        </s ection>

        {/* Features Section */}

        <s ection class Name="p y-20bg-gray-900/50" />
          <d iv class Name="m ax-w-7 xl mx-auto px-4sm:px-6lg:px-8">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-3 xl md:text-4 xl font-boldtext-whitemb-4">Intelligent Customer Support Features
              </h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-3xlmx-auto" />

                Everything you need to provide exceptional customer support with A I-powered automation.

              </p>
            </d iv>
            <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>

              {features.map((feature, index) => (

                <d iv key="{index}" class Name="g roup" />
                  <d iv class Name="b g-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105borderborder-gray-700">
        </d iv>
                    <d iv class Name="{`i nline-flex" items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`} />
                      <f eature.icon class Name="h-6w-6t ext-white" />
                    </d iv>
                    <h3 c lass Name="t ext-xl font-semiboldtext-whitemb-3">{feature.title}</h3>
                    <p c lass Name="t ext-gray-300">{feature.description}</p>
                  </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Pricing Section */}

        <s ection class Name="p y-20" />
          <d iv class Name="m ax-w-7 xl mx-auto px-4sm:px-6lg:px-8">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-3 xl md:text-4 xl font-boldtext-whitemb-4">Choose Your Plan
              </h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-3xlmx-auto" />

                Flexible pricing options to fit businesses of all sizes. Start with a free trial, no credit card required.

              </p>
            </d iv>
            <d iv class Name="g rid grid-cols-1md:grid-cols-3gap-8">
        </d iv>

              {pricing Plans.map((plan, index) => (
                <d iv
                  key="{index}"
                  class Name="{`r elative" bg-gray-800 rounded-xl p-8 ${
                    plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
                  }`} />
                  {plan.popular && (

                    <d iv class Name="a bsolute -top-4 left-1/2transform-translate-x-1/2">
        </d iv>
                      <s pan class Name="b g-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-1 rounded-fulltext-smfont-semibold">Most Popular
                      </s pan>
                    </d iv>

                  )}

                  <d iv class Name="t ext-centermb-8">
        </d iv>
                    <h3 c lass Name="t ext-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                    <p c lass Name="t ext-gray-400mb-4">{plan.description}</p>
                    <d iv class Name="f lexitems-baselinejustify-center" />
                      <s pan class Name="t ext-5 xlfont-boldtext-white">{plan.price}</s pan>
                      <s pan class Name="t ext-gray-400ml-1">{plan.period}</s pan>
                    </d iv>
                  <u l class Name="s pace-y-4mb-8" />

                    {plan.features.map((feature, idx) => (

                      <l i key="{idx}" class Name="f lexitems-centertext-gray-300" />
                        <C heck Circle class Name="h-5 w-5 t ext-green-400mr-3flex-shrink-0" / />
                        <s pan>{feature}</s pan>
                      </l i>

                    ))}
                  </u l>
                  <L ink to="/contact"
                    class Name="{`w-f ull" inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-700 hover:to-teal-700'
                        : 'border border-gray-600 text-gray-300 hover: bg-gray-700 hover:text-white'
                    }`} />
                    Get Started

                    <A rrow Right class Name="m l-2h-4w-4" />
                  </L ink>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* C TA Section */}

        <s ection class Name="p y-20 bg-gradient-to-brfrom-gray-900to-green-900" />
          <d iv class Name="m ax-w-7 xl mx-auto px-4 sm:px-6lg:px-8text-center">
        </d iv>
            <h2 c lass Name="t ext-3 xl md:text-4 xl font-boldtext-whitemb-4">Ready to Transform Your Customer Support?
            </h2>
            <p c lass Name="t ext-xl text-gray-300 mb-8 max-w-3xlmx-auto" />

              Start your free trial today and see how Zion Chat A I can revolutionize your customer support.

            </p>
            <d iv class Name="f lex flex-col sm:flex-rowgap-4justify-center">
        </d iv>
              <L ink to="/contact" class Name="i nline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl" />

                Start Free Trial

                <A rrow Right class Name="m l-2h-5w-5" />
              </L ink>

              <a
                h ref="tel:+13024640950"
                class Name="i nline-flex items-center px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                Call +1 302 464 0950

              </a>
            </d iv>
            <d iv class Name="m t-8text-gray-400">
        </d iv>
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St S TE 1008, Middletown D E 19709</p>
            </d iv>
        </s ection>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
      </d iv>

  );
};

export default Zion Chat Ai Page;
