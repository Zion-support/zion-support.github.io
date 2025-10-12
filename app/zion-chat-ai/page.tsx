import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCa r t } from 'lucide-react';
'use client';

const ZionChatAiPa g e: React.FC = () => {

  useEffect(() => {)
    setIsVisib l e(true);
  }, []);

  constfeatures= [
    {
      title: 'Multi-LanguageSupport',
      description: 'Support customers in 50+ languages with automatic translati o n and localizati o n',
      icon: Globe,
      color: 'from-green-500to-teal-500';
    },
    {
      title: 'Sentiment Analysis',
      description: 'Understand customer emotions and respond appropriate l y with AI-poweredsentimentdetection',
      icon: Heart,
      color: 'from-pink-500to-rose-500';
    },
    {
      title: 'Escalation Management',
      description: 'Seamlessly transfer complex queries to human agents with full context',
      icon: Users,
      color: 'from-blue-500to-purple-500';
    },
    {
      title: 'Performan c e Analytics',
      description: 'Track response times, satisfacti o n scores, and conversati o n outcomes',
      icon: BarChart,
      color: 'from-orange-500to-red-500';
    },
    {
      title: 'Custom Training',
      description: 'Train the AI on your specific products, services, and company knowledge',
      icon: Brain,
      color: 'from-purple-500to-indigo-500';
    },
    {
      title: 'Integrati o n APIs',
      description: 'Connect with your existing CRM, helpdesk, and business tools',
      icon: LinkIcon,
      color: 'from-cyan-500to-blue-500';
    }
  ];
  const pricingPlans= [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversatio n s/month',
        'Basic AI training',
        'Email support',
        'Standard integratio n s',
        'Basic analytics',
        '1 chatbot';
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 conversatio n s/month',
        'Advanced AI training',
        'Priority support',
        'All integratio n s',
        'Advanced analytics',
        'Up to 5 chatbots',
        'Custom branding',
        'API access';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizatio n s',
      features: [
        'Unlimited conversatio n s',
        'Custom AI training',
        '24/7 phone support',
        'Custom integratio n s',
        'Enterprise analytics',
        'Unlimited chatbots',
        'White-labelsolution',
        'Dedicated account manager';
      ],
      popular: false;
    }
  ];
return (
    <>
      <Helmet></Helmet>
        <title />Zion Chat AI - Intellige n t Customer Support Chatbot</title>
        <metaconstname= "description" content="Transform your customer support with Zion Chat AI - the most intellige n t chatbot platform. Multi-languagesupport, sentiment analysis, and seamless human handoff." /  />
        <meta name="keywords" content="AI chatbot, customer support, conversation a l AI, chatbot platform, customer service automation, AI assistant" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <MessageCirc leclassName="w-5h-5ml-2" />
                  AI-PoweredChatbot;
                </div>
                <h1 className="{`text-4" xl md: text-6xlfont-boldtext-whitemb-6transition-allduration-1000 ${isVisible ? 'opacity-100translate-y-0' : 'opacity-0translate-y-10',}`} />
                  Zion Chat;
                  <span className="w-5h-5ml-2" />AI;
                  </span>
                </h1>
                <p className="{`text-xl" text-gray-300mb-8transition-allduration-1000delay-300 ${isVisible ? 'opacity-100translate-y-0' : 'opacity-0translate-y-10'}`} />
                  The most intellige n t customer support chatbot platform. Provide 24/7 support, 
                  understand customer sentiment, and seamlessly hand off to human agents when needed.;
                </p>
                <div className="{`flex" flex-colsm: flex-rowgap-4transition-allduration-1000delay-500 ${isVisible ? 'opacity-100translate-y-0' : 'opacity-0translate-y-10',}`} />
                  <Link
          to="/contact"
          className="inline-flexitems-centerpx-8py-4bg-gradient-to-rfrom-green-600to-teal-600text-whitefont-semiboldrounded-lghover:from-green-700hover:to-teal-700transition-allduration-300transformhover:scale-105shadow-lghover:shadow-xl"
        >
          Start Free Trial;
                    
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
                  <button className="w-5h-5ml-2" />
                    <PlayclassName="w-5h-5ml-2" />
                    Watch Demo;
                  </button>
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      {[...Array(5)].map((_, i) => ())
                        <Starkey="{i}" className="h-5w-5text-yellow-400fill-current"  />
                      ))}
                    </div>
                    <span className="w-5h-5ml-2" />4.8/5 (89, reviews)</span>
                  </div>
              </div>
              <div className="{`transition-all" duration-1000delay-700 ${isVisible ? 'opacity-100translate-y-0' : 'opacity-0translate-y-10'}`} />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                        <h3 className="w-5h-5ml-2" />Live Chat</h3>
                        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                          Online;
                        </div>
                      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                            <MessageCirc leclassName="w-5h-5ml-2" />
                          </div>
                          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                            <p className="w-5h-5ml-2">Hi! How can I help you today?</p>
                          </div>
                        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                            <p className="w-5h-5ml-2">I need help with my order</p>
                          </div>
                          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                            <UsersclassName="w-5h-5ml-2" />
                          </div>
                        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                            <MessageCirc leclassName="w-5h-5ml-2" />
                          </div>
                          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                            <p className="w-5h-5ml-2">I'd be happy to help! Can you provide your order number?</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Intellige n t Customer Support Features;
              </h2>
              <p className="w-5h-5ml-2">Everything you need to provide exception a l customer support with AI-poweredautomation.;
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {features.map((feature, index) => ())
                <divkey="{index}" className="group" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="{`inline-flex" items-centerjustify-centerw-12h-12bg-gradient-to-r ${feature.color} rounded-lgmb-4`} />
                      <feature.iconclassName="h-6w-6text-white"  />
                    </div>
                    <h3 className="w-5h-5ml-2" />{feature.title}</h3>
                    <p className="w-5h-5ml-2">{feature.description}</p>
                  </div>
              ))}
            </div>
        </section>

        {/* Pricing Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Choose Your Plan;
              </h2>
              <p className="w-5h-5ml-2">Flexible pricing options to fit businesses of all sizes. Start with a free trial, no credit card required.;
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {pricingPla n s.map((plan, index) => ())
                <div>>
                  key="{index}";
                  className="{`relative" bg-gray-800rounded-xlp-8 ${
                    plan.popular ? 'ring-2ring-green-500scale-105' : '';
                  }`} />
                  {plan.popular && ()
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <span className="w-5h-5ml-2" />Most Popular;
                      </span>
                    </div>
                  )}
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                    <p className="w-5h-5ml-2">{plan.description}</p>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <span className="w-5h-5ml-2" />{plan.price}</span>
                      <span className="w-5h-5ml-2" />{plan.period}</span>
                    </div>
                  <ulclassName="w-5h-5ml-2" />
                    {plan.features.map((feature, idx) => ())
                      <likey="{idx}" className="flexitems-centertext-gray-300" />
                        <CheckCirc leclassName="w-5h-5ml-2" />
                        <span />{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="{`w-full" inline-flexitems-centerjustify-centerpx-6py-3font-semiboldrounded-lgtransition-allduration-300 ${
                      plan.popular;
                        ? 'bg-gradient-to-rfrom-green-600to-teal-600text-whitehover:from-green-700hover:to-teal-700';
                        : 'border border-gray-600text-gray-300hover: bg-gray-700hover:text-white';
                    }`} />
                    Get Started;
                    <ArrowRight className="w-5h-5ml-2" />
                  </Link>
                </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />Ready to Transform Your Customer Support?;
            </h2>
            <p className="w-5h-5ml-2">Start your free trial today and see how Zion Chat AI can revolutioni z e your customer support.;
            </p>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <Link
          to="/contact"
          className="inline-flexitems-centerpx-8py-4bg-gradient-to-rfrom-green-600to-teal-600text-whitefont-semiboldrounded-lghover:from-green-700hover:to-teal-700transition-allduration-300transformhover:scale-105shadow-lghover:shadow-xl"
        >
          Start Free Trial;
                
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
              <a;
                href="tel:+130246409 5 0";
                className="inline-flexitems-centerpx-8py-4border-2border-green-400text-green-400font-semiboldrounded-lghover:bg-green-400hover:text-whitetransition-allduration-300transformhover:scale-105" />
                Call +1 302 464 0950;
              </a>
            </div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <p />Email: kleber@ziontechgro u p.com</p>
              <p />Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
        </section>
      </div>
    </>
  );
};

export default ZionChatAiPa g e;