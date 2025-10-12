export default ZionChatAiPage;
'use client';

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
      popular: false;
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
      popular: true;
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
      popular: false;
    }
  ];
  return (
    <></>
      <Helmet></Helmet>
        <title />Zion Chat AI - Intelligent Customer Support Chatbot</title>
        <meta const name = "description" content="Transform your customer support with Zion Chat AI - the most intelligent chatbot platform. Multi-language support, sentiment analysis, and seamless human handoff." /  /></meta>
        <meta name="keywords" content="AI chatbot, customer support, conversational AI, chatbot platform, customer service automation, AI assistant" /></meta>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        {/* Hero Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <div /></div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <MessageCircle className="w-5h-5ml-2" /></MessageCircle>
                  AI-Powered Chatbot;
                </div>
                <h1 className="{`text-4" xl md: text-6 xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} /></h1>
                  Zion Chat;
                  <span className="w-5h-5ml-2" />AI;
                  </span>
                </h1>
                <p className="{`text-xl" text-gray-300 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} /></p>
                  The most intelligent customer support chatbot platform. Provide 24/7 support, 
                  understand customer sentiment, and seamlessly hand off to human agents when needed.
                </p>
                <div className="{`flex" flex-col sm: flex-row gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} /></div>
                  <Link;</Link></Link>
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl"
        ></Link>
          Start Free Trial;
          <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
        </Link>
                  <button className="w-5h-5ml-2" /></button>
                    <Play className="w-5h-5ml-2" /></Play>
                    Watch Demo;
                  </button>
                </div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5w-5tex t-yellow-400fill-current"  /></Star>
                      ))}
                    </div>
                    <span className="w-5h-5ml-2" />4.8/5 (89, reviews)</span>
                  </div>
              </div>
              <div className="{`transition-all" duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} /></div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                        <h3 className="w-5h-5ml-2" />Live Chat</h3>
                        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                          Online;
                        </div>
                      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                            <MessageCircle className="w-5h-5ml-2" /></MessageCircle>
                          </div>
                          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                            <p className="w-5h-5ml-2">Hi! How can I help you today?</p>
                          </div>
                        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                            <p className="w-5h-5ml-2">I need help with my order</p>
                          </div>
                          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                            <Users className="w-5h-5ml-2" /></Users>
                          </div>
                        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                            <MessageCircle className="w-5h-5ml-2" /></MessageCircle>
                          </div>
                          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                            <p className="w-5h-5ml-2">I'd be happy to help! Can you provide your order number?</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2" />Intelligent Customer Support Features;
              </h2>
              <p className="w-5h-5ml-2">Everything you need to provide exceptional customer support with AI-powered automation.
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {features.map((feature, index) => (
                <div key={index} className="group" /></div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <div className="{`inline- flex" items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`} /></div>
                      <feature.icon className="h-6w-6text-white"  /></feature>
                    </div>
                    <h3 className="w-5h-5ml-2" />{feature.title}</h3>
                    <p className="w-5h-5ml-2">{feature.description}</p>
                  </div>
              ))}
            </div>
        </section>
        {/* Pricing Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2" />Choose Your Plan;
              </h2>
              <p className="w-5h-5ml-2">Flexible pricing options to fit businesses of all sizes. Start with a free trial, no credit card required.
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {pricingPlans.map((plan, index) => (
                <div;
                  key="{index}"
                  className="{`relative" bg-gray-800 rounded-xl p-8 ${
                    plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
                  }`} /></div>
                  {plan.popular && (
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <span className="w-5h-5ml-2" />Most Popular;
                      </span>
                    </div>
                  )}
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                    <p className="w-5h-5ml-2">{plan.description}</p>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <span className="w-5h-5ml-2" />{plan.price}</span>
                      <span className="w-5h-5ml-2" />{plan.period}</span>
                    </div>
                  <ul className="w-5h-5ml-2" /></ul>
                    {plan.features.map((feature, idx) => (
                      <li key="{idx}" className="flex items-center text-gray-300" /></li>
                        <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                        <span />{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link;</Link></Link>
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      plan.popular;
                        ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-700 hover:to-teal-700'
                        : 'border border-gray-600 text-gray-300 hover: bg-gray-700 hover:text-white'
                    }`} /></Link>
                    Get Started;
                    <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
                  </Link>
                </div>
              ))}
            </div>
        </section>
        {/* CTA Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="w-5h-5ml-2" />Ready to Transform Your Customer Support?
            </h2>
            <p className="w-5h-5ml-2">Start your free trial today and see how Zion Chat AI can revolutionize your customer support.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <Link;</Link></Link>
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl"
        ></Link>
          Start Free Trial;
          <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
        </Link>
              <a;
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300transformhover:scale-105" /></a>
                Call +1 302 464 0950;
              </a>
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <p />Email: kleber@ziontechgroup.com</p>
              <p />Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
        </section>
      </div>
    </>
  );
};
