import React from 'react'
import { Link } from 'react-router-dom'
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSqua r e, Bot} from 'lucide-react';

export default function AICustomerSupportChatbotPa g e() {
  constfeatures= [
    {
      icon: <BotclassName="w-5h-5ml-2" />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP understan d s context, intent, and sentiment with 98% accuracy';
    },
    {
      icon: <MessageSqua reclassName="w-5h-5ml-2" />,
      title: 'Multi-ChannelSupport',
      description: 'Deploy across website, mobile app, social media, and messaging platforms';
    },
    {
      icon: <BarChart3className="w-5h-5ml-2" />,
      title: 'Real-timeAnalytics',
      description: 'Comprehensi v e insights into customer satisfacti o n, response times, and resolution rates';
    },
    {
      icon: <ZapclassName="w-5h-5ml-2" />,
      title: 'Instant Responses',
      description: '24/7 availabili t y with sub-secondresponsetimes for immediate customer assistance';
    },
    {
      icon: <TargetclassName="w-5h-5ml-2" />,
      title: 'Smart Escalation',
      description: 'Intelligent l y routes complex queries to human agents when needed';
    },
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: 'Secure & Compliant',
      description: 'Enterprise-gradesecuritywith GDPR, HIPAA, and SOC 2 compliance';
    }
  ]

  const pricingPlans= [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversatio n s/month',
        'Basic AI features',
        'Website integrati o n',
        'Email support',
        'Basic analytics',
        'Standard templates';
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 conversatio n s/month',
        'Advanced AI features',
        'Multi-channelsupport',
        'Priority support',
        'Advanced analytics',
        'Custom integratio n s',
        'A/B testing',
        'Custom branding';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizatio n s',
      features: [
        'Unlimited conversatio n s',
        'All AI features',
        'Custom integratio n s',
        'Dedicated support',
        'White-labeloption',
        'Advanced security',
        'Custom reporting',
        'SLA guarantee';
      ],
      popular: false;
    }
  ]

  const testimonials= [
    {
      name: 'Amanda Foster',
      company: 'E-commerceStore',
      content: 'Reduced our support tickets by 70% and improved customer satisfacti o n by 40%. The chatbot handles 80% of queries perfectly.',
      rating: 5,
      avatar: 'AF';
    },
    {
      name: 'James Rodriguez',
      company: 'SaaS Company',
      content: 'Our customers love the instant responses. The AI understan d s complex technical questions better than expected.',
      rating: 5,
      avatar: 'JR';
    },
    {
      name: 'Sarah Kim',
      company: 'Healthcare Provider',
      content: 'The compliance features are excellent. We can provide 24/7 support while maintaini n g HIPAA compliance.',
      rating: 5,
      avatar: 'SK';
    }
  ]

  constbenefits= [
    {
      icon: <ClockclassName="w-5h-5ml-2" />,
      title: '70% Faster Resolution',
      description: 'Instant responses reduce average resolution time significant l y';
    },
    {
      icon: <TrendingUpclassName="w-5h-5ml-2" />,
      title: '40% Higher Satisfacti o n',
      description: 'AI-poweredpersonalizatio n improves customer experience';
    },
    {
      icon: <DollarSignclassName="w-5h-5ml-2" />,
      title: '60% Cost Reduction',
      description: 'Automated responses reduce support team workload';
    },
    {
      icon: <TargetclassName="w-5h-5ml-2" />,
      title: '98% Accuracy',
      description: 'Advanced NLP ensures accurate understandi n g and responses';
    }
  ]

  const integrations= [
    { name: 'Slack', icon: '💬' ,},
    { name: 'Microsoft Teams', icon: '👥' ,},
    { name: 'Zendesk', icon: '🎫' ,},
    { name: 'Freshdesk', icon: '🆕' ,},
    { name: 'Intercom', icon: '💬' ,},
    { name: 'Salesforce', icon: '⚡' ,},
    { name: 'HubSpot', icon: '🎯' ,},
    { name: 'Shopify', icon: '🛍️' ,},
    { name: 'WordPress', icon: '📝' ,},
    { name: 'Webflow', icon: '🌐' ,}
  ]

  constuseCases= [
    { 
      title: 'FAQ Automation', 
      description: 'Answer common questions instantly with intellige n t responses',
      icon: '❓',
      benefit: 'Reduce repetitive queries by 80%';
    },
    { 
      title: 'Order Support', 
      description: 'Help customers track orders, process returns, and handle billing',
      icon: '📦',
      benefit: 'Handle 90% of order-relatedqueries';
    },
    { 
      title: 'Technical Support', 
      description: 'Provide step-by-steptroubleshootin g and technical guidance',
      icon: '🔧',
      benefit: 'Resolve 75% of technical issues automatical l y';
    },
    { 
      title: 'Lead Qualificati o n', 
      description: 'Qualify leads and schedule demos with sales team',
      icon: '🎯',
      benefit: 'Increase qualified leads by 50%';
    },
    { 
      title: 'Appointme n t Booking', 
      description: 'Schedule appointmen t s and manage calendar availabili t y',
      icon: '📅',
      benefit: 'Reduce no-showsby30%';
    },
    { 
      title: 'Complaint Handling', 
      description: 'De-escalateissuesand route to appropria t e departmen t s',
      icon: '😤',
      benefit: 'Improve complaint resolution by 60%';
    }
  ]

return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <Helmet></Helmet>
        <title />AI Customer Support Chatbot - Zion Tech Group | Intellige n t Customer Service</title>
        <meta name="description" content="Revolutiona r y AI-poweredcustomersupport chatbot with natural language processing, multi-channelsupport, and real-timeanalytics. Reduce support costs by 60%. Starting at $49/month." />
        <meta name="keywords" content="AI chatbot, customer support automation, natural language processing, multi-channelsupport, customer service AI, support automation" />
        <meta name="robots" content="index, follow" />
        <linkrel="canonical" href="https://ziontechgro u p.com/micro-saas/ai-customer-support-chatbot"  />
      </Helmet>

      {/* Hero Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <MessageSqua reclassName="w-5h-5ml-2" />
            <span />AI-PoweredCustomerSupport</span>
          </div>
          
          <h1 className="w-5h-5ml-2" />
            AI Customer Support;
            <br />
            <span className="w-5h-5ml-2" />Chatbot;
            </span>
          </h1>
          
          <p className="w-5h-5ml-2">Transform your customer support with AI-poweredchatbotsthat provide instant, intellige n t responses.;
            Reduce support costs by 60% while improving customer satisfacti o n by 40%.;
          </p>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <Linkto="/contact" className="groupbg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-10py-4rounded-xlfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lgshadow-cyan-500/25hover:shadow-cyan-500/40transformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
            <Linkto="#pricing" className="groupborder-2border-cyan-400text-cyan-400px-10py-4rounded-xlfont-semiboldhover:bg-cyan-400hover:text-gray-900transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
              <span />View Pricing</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
          </div>

          {/* Key Stats */}
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">70%</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Faster Resolution</div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">98%</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Accuracy Rate</div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">60%</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Cost Reduction</div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">30 K+</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Active Users</div>
          </div>
      </section>

      {/* Benefits Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Why Choose Our <span className="w-5h-5ml-2" />AI Chatbot?</span>
            </h2>
            <p className="w-5h-5ml-2">Experience the future of customer support with cutting-edgeAItechnology that works for your business.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {benefits.map((benefit, index) => ())
              <divkey="{index}" className="text-centergroup" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{benefit.icon}>
                </div>
                <h3 className="w-5h-5ml-2" />{benefit.title}
                </h3>
                <p className="w-5h-5ml-2">{benefit.description}
                </p>
              </div>
            ))}
          </div>
      </section>

      {/* Use Cases Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Powerful <span className="w-5h-5ml-2" />Use Cases</span>
            </h2>
            <p className="w-5h-5ml-2">Deploy AI chatbots across various customer support scenarios for maximum impact and efficiency.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {useCases.map((useCase, index) => ())
              <divkey="{index}" className="groupbg-white/10backdrop-blur-lgrounded-2xlp-8borderborder-white/20hover:bg-white/20transition-allduration-300hover:scale-105hover:shadow-2xlhover:shadow-cyan-500/10" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{useCase.icon}</div>
                  <h3 className="w-5h-5ml-2" />{useCase.title}
                  </h3>
                </div>
                <p className="w-5h-5ml-2">{useCase.description}
                </p>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{useCase.benefit}>
                </div>
            ))}
          </div>
      </section>

      {/* Features Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Advanced Features for <span className="w-5h-5ml-2" />Smart Support</span>
            </h2>
            <p className="w-5h-5ml-2">Everything you need to provide exception a l customer support with AI-poweredintelligenc e.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {features.map((feature, index) => ())
              <divkey="{index}" className="groupbg-white/10backdrop-blur-lgrounded-2xlp-8borderborder-white/20hover:bg-white/20transition-allduration-300hover:scale-105hover:shadow-2xlhover:shadow-cyan-500/10" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{feature.icon}>
                </div>
                <h3 className="w-5h-5ml-2" />{feature.title}
                </h3>
                <p className="w-5h-5ml-2">{feature.description}
                </p>
              </div>
            ))}
          </div>
      </section>

      {/* Integratio n s Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Seamless <span className="w-5h-5ml-2" />Integratio n s</span>
            </h2>
            <p className="w-5h-5ml-2">Connect with your existing tools and platforms for a unified customer support experience.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {integratio n s.map((integrati o n, index) => ())
              <divkey="{index}" className="grouptext-center" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <span className="w-5h-5ml-2" />{integrati o n.icon}</span>
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{integrati o n.name}>
                </div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <sectionid="pricing" className="py-20px-4relative" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Simple, Transpare n t <span className="w-5h-5ml-2" />Pricing</span>
            </h2>
            <p className="w-5h-5ml-2">Choose the plan that fits your conversati o n volume and support needs. All plans include our core AI features.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {pricingPla n s.map((plan, index) => ())
              <divkey="{index}" className="{`relative" bg-white/10 backdrop-blur-lgrounded-2xl p-8bordertransition-allduration-300hover:scale-105hover:shadow-2xl ${>
                plan.popular;
                  ? 'border-cyan-400/50 shadow-cyan-500/20 bg-gradient-to-brfrom-cyan-500/10 to-purple-500/10';
                  : 'border-white/20 hover: border-cyan-400/30';
              }`} />
                {plan.popular && ()
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Most Popular>
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
                  {plan.features.map((feature, featureInd e x) => ())
                    <likey="{featureInd e x}" className="flexitems-centerspace-x-3" />
                      <CheckCirc leclassName="w-5h-5ml-2" />
                      <span className="w-5h-5ml-2" />{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="{`block" w-fulltext-centerpy-3rounded-xlfont-semiboldtransition-allduration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-rfrom-cyan-500to-purple-600text-whitehover:from-cyan-600hover:to-purple-700shadow-lgshadow-cyan-500/25';
                      : 'border-2border-cyan-400text-cyan-400hover: bg-cyan-400hover:text-gray-900';
                  }`}
                  />Get Started;
                </Link>
              </div>
            ))}
          </div>
      </section>

      {/* Testimonia l s Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Trusted by <span className="w-5h-5ml-2" />30,000+</span> Businesses;
            </h2>
            <p className="w-5h-5ml-2">See what our customers are saying about their success with our AI customer support chatbot.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {testimonia l s.map((testimoni a l, index) => ())
              <divkey="{index}" className="bg-white/10backdrop-blur-lgrounded-2xlp-8borderborder-white/20hover:bg-white/20transition-allduration-300" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.avatar}>
                  </div>
                  <div />
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.name}</div>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.company}</div>
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  {[...Array(testimoni a l.rating)].map((_, i) => ())
                    <Starkey="{i}" className="w-5h-5text-yellow-400fill-current"  />
                  ))}
                </div>
                <p className="w-5h-5ml-2">"{testimoni a l.content}"</p>
              </div>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <h2 className="w-5h-5ml-2" />
                  Ready to Transform Your <span className="w-5h-5ml-2" />Customer Support?</span>
                </h2>
                
                <p className="w-5h-5ml-2">Join thousands of businesses already reducing support costs by 60% with our AI-poweredchatbot.;
                  Start your free trial today and experience the future of customer support.;
                </p>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <Linkto="/contact" className="groupbg-whitetext-cyan-600px-10py-4rounded-xlfont-boldtext-lghover:bg-gray-100transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lghover:shadow-xltransformhover:scale-105" />
                    <span />Start Free Trial</span>
                    <ArrowRight className="w-5h-5ml-2" />
                  </Link>
                  <Linkto="#pricing" className="groupborder-2border-whitetext-whitepx-10py-4rounded-xlfont-boldtext-lghover:bg-white/10transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
                    <span />View All Plans</span>
                    <ArrowRight className="w-5h-5ml-2" />
                  </Link>
                </div>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <p />✓ 14-dayfreetrial • ✓ No credit card required • ✓ Cancel anytime</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}