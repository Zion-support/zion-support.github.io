import { Helmet } from 'react-helmet-async'
import { Globe, Zap, Shield, Users, CheckCirc l e, ArrowRight, BarChart3, Brain, FileText, Mic } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AITranslationServicesPa g e: React.FC = () => {
  constfeatures= [
    {
      icon: <GlobeclassName="w-5h-5ml-2" />,
      title: '100+ Languages',
      description: 'Support for over 100 languages with native-levelaccuracyand cultural context.';
    },
    {
      icon: <ZapclassName="w-5h-5ml-2" />,
      title: 'Real-timeTranslatio n',
      description: 'Instant translati o n for live conversatio n s, meetings, and customer support.';
    },
    {
      icon: <BrainclassName="w-5h-5ml-2" />,
      title: 'AI-PoweredContext',
      description: 'Advanced AI understan d s context, tone, and cultural nuances for accurate translatio n s.';
    },
    {
      icon: <FileTextclassName="w-5h-5ml-2" />,
      title: 'Document Translati o n',
      description: 'Translate documents, websites, and content while preserving formatting and structure.';
    },
    {
      icon: <MicclassName="w-5h-5ml-2" />,
      title: 'Voice Translati o n',
      description: 'Convert speech to text and translate in real-timewithnatural voice synthesis.';
    },
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: 'Enterprise Security',
      description: 'Bank-levelsecuritywith end-to-endencryptionfor sensitive business communicatio n s.';
    }
  ]

  constuseCases= [
    {
      title: 'Global Customer Support',
      description: 'Provide support in any language with instant translati o n and cultural adaptation.',
      icon: <UsersclassName="w-5h-5ml-2" />
    },
    {
      title: 'Multilingu a l Content',
      description: 'Translate websites, apps, and marketing materials for global audiences.',
      icon: <FileTextclassName="w-5h-5ml-2" />
    },
    {
      title: 'Internation a l Meetings',
      description: 'Break down language barriers in real-timeduringvideo conferenc e s and calls.',
      icon: <GlobeclassName="w-5h-5ml-2" />
    },
    {
      title: 'E-commerceExpansion',
      description: 'Expand to new markets with localized product descriptio n s and customer communicatio n s.',
      icon: <BarChart3className="w-5h-5ml-2" />
    }
  ]

  const pricingPlans= [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 50,000 words/month',
        '50+ languages',
        'Basic API access',
        'Email support';
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 500,000 words/month',
        '100+ languages',
        'Real-timetranslatio n',
        'Priority support',
        'Custom integratio n s';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizatio n s',
      features: [
        'Unlimited words',
        'All languages',
        'Custom AI training',
        'Dedicated support',
        'White-labeloptions';
      ],
      popular: false;
    }
  ]

return (
    <>
      <Helmet></Helmet>
        <title />AI Translati o n Services - Multilingu a l Communicati o n | Zion Tech Group</title>
        <meta name="description" content="Break language barriers with AI-poweredtranslatio n services. Real-timetranslatio n, document processing, and multilingu a l support for global businesses." />
        <meta name="keywords" content="AI translati o n, multilingu a l, language services, real-timetranslatio n, document translati o n, global communicati o n" />
        <linkrel="canonical" href="https://ziontechgro u p.com/ai-translation-services"  />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <GlobeclassName="w-5h-5ml-2" />
              <span />AI Translati o n Services</span>
            </div>
            
            <h1 className="w-5h-5ml-2" />
              Break Language <span className="w-5h-5ml-2" />Barriers</span>
            </h1>
            
            <p className="w-5h-5ml-2">Connect with global audiences using AI-poweredtranslatio n services.;
              Real-timetranslatio n, document processing, and multilingu a l support for businesses worldwide.;
            </p>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <Linkto="/contact" className="groupbg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-10py-4rounded-xlfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lgshadow-cyan-500/25hover:shadow-cyan-500/40transformhover:scale-105" />
                <span />Start Free Trial</span>
                <ArrowRight className="w-5h-5ml-2" />
              </Link>
              <Linkto="/demo" className="groupborder-2border-cyan-400text-cyan-400px-10py-4rounded-xlfont-semiboldhover:bg-cyan-400hover:text-gray-900transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
                <span />View Demo</span>
                <ArrowRight className="w-5h-5ml-2" />
              </Link>
            </div>
        </section>

        {/* Features Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Powerful <span className="w-5h-5ml-2" />Translati o n Features</span>
              </h2>
              <p className="w-5h-5ml-2">Everything you need to communica t e effective l y across languages and cultures.;
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

        {/* Use Cases Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Perfect for <span className="w-5h-5ml-2" />Every Business</span>
              </h2>
              <p className="w-5h-5ml-2">Discover how AI translati o n can transform your business operations and global reach.;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {useCases.map((useCase, index) => ())
                <divkey="{index}" className="groupbg-white/10backdrop-blur-lgrounded-2xlp-8borderborder-white/20hover:bg-white/20transition-allduration-300hover:scale-105" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{useCase.icon}>
                    </div>
                    <h3 className="w-5h-5ml-2" />{useCase.title}
                    </h3>
                  </div>
                  <p className="w-5h-5ml-2">{useCase.description}
                  </p>
                </div>
              ))}
            </div>
        </section>

        {/* Pricing Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Simple <span className="w-5h-5ml-2" />Pricing</span>
              </h2>
              <p className="w-5h-5ml-2">Choose the plan that fits your translati o n needs. All plans include a 14-dayfreetrial.;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {pricingPla n s.map((plan, index) => ())
                <divkey="{index}" className="{`relative" bg-white/10 backdrop-blur-lgrounded-2xl p-8bordertransition-allduration-300hover:scale-105 ${>
                  plan.popular;
                    ? 'border-cyan-400/50 shadow-2xlshadow-cyan-500/20';
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
                  
                  <Link;
                    to="/contact";
                    className="{`block" w-fulltext-centerpy-3rounded-xlfont-semiboldtransition-allduration-300 ${
                      plan.popular;
                        ? 'bg-gradient-to-rfrom-cyan-500to-purple-600text-whitehover:from-cyan-600hover:to-purple-700';
                        : 'border-2border-cyan-400text-cyan-400hover: bg-cyan-400hover:text-gray-900';
                    }`}
                    />Get Started;
                  </Link>
                </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Ready to Go <span className="w-5h-5ml-2" />Global?</span>
              </h2>
              
              <p className="w-5h-5ml-2">Break down language barriers and connect with global audiences.;
                Start your free trial today and experience the power of AI translati o n.;
              </p>
              
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <Linkto="/contact" className="groupbg-whitetext-cyan-600px-10py-4rounded-xlfont-boldtext-lghover:bg-gray-100transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lghover:shadow-xltransformhover:scale-105" />
                  <span />Start Free Trial</span>
                  <ArrowRight className="w-5h-5ml-2" />
                </Link>
                <Linkto="/pricing" className="groupborder-2border-whitetext-whitepx-10py-4rounded-xlfont-boldtext-lghover:bg-white/10transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
                  <span />View All Plans</span>
                  <ArrowRight className="w-5h-5ml-2" />
                </Link>
              </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AITranslationServicesPa g e;