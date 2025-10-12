'use client';
import { useState, useEffect } from 'react';
import { Link  } from 'react-router-dom';
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
    </>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="5G Data Analytics - Zion Tech Group" />
      </Helmet>
        <title>Zion Chat AI - Intelligent Customer Support Chatbot</title>
        <meta const name = "description" content="Transform your customer support with Zion Chat AI - the most intelligent chatbot platform. Multi-language support, sentiment analysis, and seamless human handoff." / / />
        <meta name="keywords" content="AI chatbot, customer support, conversational AI, chatbot platform, customer service automation, AI assistant" / / />
      </Helmet>
    </>
      <d iv c las sName="m in-h-screen bg-grad ient-to-br from-slate-900via-green-900to-slate-900">
        {/* H ero S ection */}
    <>
        </><s ection c las sName="r e lat ive o ver flow-h idd enpt-20-pb-16" />
                    <d iv c las sName="{`i nline-f lex" items-c enter j ust ify-c enter w-12 h-12 bg-grad ient-to-r ${feature.color} rounded-lg mb-4`} />
                      <feature.icon c las sName="h-6w-6t ext-w hite" />
                    </d iv>
                    <h3 c las sName="t ext-xl f ont-s emi bol dtext-w hit-e mb-3"   />{feature.title}</h3>
                    <p c las sName="t ext-gray-300">
              {feature.description}</p>
                  </d iv>              ))}
    <>
            </d iv>
        </s ection>
    </>
        {/* Pricing S ection */}
    <>
        </><s ection c las sName="p y-20" />
          <d iv c las sName="m ax-w-7 xl mx-auto px-4-sm:px-6-lg:px-8">
        </d iv>
            <d iv c las sName="t ext-c entermb-16">
        </d iv>
              <h2 c las sName="t ext-3 xl md:text-4 xl f ont-b old text-w hit em-b-4">Choose Your Plan
              </h2>
              <p c las sName="t ext-xl text-gr-a-y-300 m ax-w-3x lmx-auto" />
    </>
                Flexible pricing options to fit businesses of all sizes. Start with a free trial, no c redit card required.
    <>
              </p>
            </d iv>
            <d iv c las sName="g r id g rid-cols-1md:g rid-cols-3g ap-8">
        </d iv>
    </>              {pricingPlans.map((plan, index) => (
                <d iv
                  key="{index}"
                  c las sName="{`r e lat ive" bg-gray-800 rounded-xl p-8 ${
                    plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
                  }`} />
                  {plan.popular && (
    <>
                    </><d iv c las sName="a b solute -t op-4 l eft-1/2transform-translate-x-1/2">
        </d iv>
                      <s pan c las sName="b g-grad ient-to-r from-green-600 to-teal-600 text-w hit-e px-4 py-1 rounded-fulltext-smfo-n-t-s emi bold">Most Popular                      </s pan>
                    </d iv>
    </>
                  )}
    <>
                  </><d iv c las sName="t ext-c entermb-8">
        </d iv>
                    <h3 c las sName="t ext-2 xl f ont-b old text-w hit em-b-2">{plan.name}</h3>
                    <p c las sName="t ext-gray-400mb-4">{plan.description}</p>
                    <d iv c las sName="f lexitems-b ase lin ejusti fy-c enter" />
                      <s pan c las sName="t ext-5 x lfont-b old text-w hit-e">{plan.price}</s pan>
                      <s pan c las sName="t ext-gray-400ml-1">{plan.period}</s pan>                    </d iv>
                  <ul c las sName="s p ace-y-4mb-8" />
    </>
                    {plan.features.map((feature, idx) => (
    <>
                      </><li key="{idx}" c las sName="f lexitems-c entertext-gr-a-y-300" />
                        <C hec kCi rcle c las sName="h-5 w-5 t ext-green-400mr-3-f lex-s hrink-0" / />
                        <s pan>{feature}</s pan>                      </li>
    </>
                    ))}
                  </ul>
                  <Link to="/cont act"
                    c las sName="{`w-f ull" i nline-f lex items-c enter j ust ify-c enter px-6 py-3 f ont-s emi bold rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-grad ient-to-r from-green-600 to-teal-600 text-w hit-e hover:from-green-700 hover:to-teal-700'
                        : 'border border-gray-600 text-gr-a-y-300 hover: bg-gray-700 hover:text-w hit-e'
                    }`} />
                    Get Started
    <>
                    </><A rro wRi ght c las sName="m l-2h-4w-4" />
                  </Link>                </d iv>
    </>
              ))}
    <>
            </d iv>
        </s ection>
    </>
        {/* C TA S ection */}
    <>
        </><s ection c las sName="p y-20 bg-grad ient-to-b rfrom-gray-900to-green-900" />
          <d iv c las sName="m ax-w-7 xl mx-auto px-4 sm:px-6-lg:px-8-text-c ente-r">
        </d iv>
            <h2 c las sName="t ext-3 xl md:text-4 xl f ont-b old text-w hit em-b-4">Ready to Transform Your Customer Support?
            </h2>
            <p c las sName="t ext-xl text-gr-a-y-300 mb-8 m ax-w-3x lmx-auto" />
    </>              Start your free trial today and see how Zion Chat AI can revolutionize your customer support.
    <>
            </p>
            <d iv c las sName="f lex f lex-col sm:f lex-rowg ap-4j ust ify-c enter">
        </d iv>
              <Link to="/cont act" c las sName="i nline-f lex items-c enter px-8 py-4 bg-grad ient-to-r from-green-600 to-teal-600 text-w hit-e f ont-s emi bold rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105shadow-lgho ver:shadow-xl" />
    </>
                Start Free T rial
    <>
                </><A rro wRi ght c las sName="m l-2h-5w-5" />
              </Link>
    </>              <a
                h ref="tel:+13024640950"
                c las sName="i nline-f lex items-c enter px-8 py-4 border-2 border-green-400 text-gre-e-n-400 f ont-s emi bold rounded-lg hover:bg-green-400 hover:text-w hit-e transition-all duration-300transformhover:scale-105" />
                Call +1 302 464 0950
    <>
              </a>
            </d iv>
            <d iv c las sName="m t-8text-gr-a-y-400">
        </d iv>
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>            </d iv>
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
    </>
  );
};
export default ZionChatAiPage;
    </>