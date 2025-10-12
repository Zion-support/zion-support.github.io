import { Helmet } from 'react-helmet-async'
import { Mail, Send, TrendingUp, BarChart3, Zap, CheckCirc l e, ArrowRight, Star, Clock, Brain, Shield, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react';
import { ArrowRight, Bot, RotateCcw, RotateCw, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIEmailAutomationPa g e: React.FC = () => {
  constfeatures= [
    {
      icon: <BrainclassName="w-5h-5ml-2" />,
      title: 'AI Email Generation',
      description: 'Generate personaliz e d, high-convertingemailsusing AI that understan d s your audience and brand voice.',
      benefits: ['Personaliz e d content', 'A/B testing', 'Brand voice training', 'Multi-languagesupport']
    },
    {
      icon: <SendclassName="w-5h-5ml-2" />,
      title: 'Smart Automation',
      description: 'Create complex email workflows with AI-poweredtriggers, segmentati o n, and behavioral targeting.',
      benefits: ['Behavioral triggers', 'Smart segmentati o n', 'Dynamic content', 'Cross-channelsync']
    },
    {
      icon: <TrendingUpclassName="w-5h-5ml-2" />,
      title: 'Performan c e Analytics',
      description: 'Advanced analytics with AI insights to optimize email performan c e and improve ROI.',
      benefits: ['Open rate optimizati o n', 'Click-throughanalysis', 'Revenue tracking', 'Predictive insights']
    },
    {
      icon: <ZapclassName="w-5h-5ml-2" />,
      title: 'Automated Sequences',
      description: 'AI-poweredemailsequences that adapt based on recipient behavior and engagement patterns.',
      benefits: ['Adaptive sequences', 'Behavioral triggers', 'Personalizati o n', 'Optimal timing']
    },
    {
      icon: <BarChart3className="w-5h-5ml-2" />,
      title: 'Lead Scoring',
      description: 'AI automatical l y scores leads based on email engagement and behavior to prioritize follow-ups.',
      benefits: ['Lead scoring', 'Engagement tracking', 'Priority alerts', 'CRM integrati o n']
    },
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: 'Deliverabili t y Optimizati o n',
      description: 'AI ensures maximum deliverabili t y with reputation monitoring and content optimizati o n.',
      benefits: ['Reputation monitoring', 'Content optimizati o n', 'Spam prevention', 'Compliance checks']
    }
  ]

  const pricingPlans= [
    {
      name: 'Starter',
      price: '$59',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5,000 contacts',
        '10,000 emails/month',
        'Basic AI features',
        'Email templates',
        'Email support';
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 25,000 contacts',
        '50,000 emails/month',
        'Advanced AI features',
        'A/B testing',
        'Priority support',
        'API access';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizatio n s with high volume needs',
      features: [
        'Unlimited contacts',
        'Unlimited emails',
        'Full AI suite',
        'Custom integratio n s',
        'Dedicated support',
        'White-labeloptions';
      ],
      popular: false;
    }
  ]

  const testimonials= [
    {
      name: 'Jennifer Lee',
      company: 'E-commerceStore',
      content: 'AI Email Automation increased our email revenue by 300%. The AI-generatedcontentis incredibly effective.',
      rating: 5,
      avatar: 'JL';
    },
    {
      name: 'Mark Thompson',
      company: 'SaaS Company',
      content: 'The lead scoring feature helped us identify high-valueprospectsand increased our conversion rate by 150%.',
      rating: 5,
      avatar: 'MT';
    },
    {
      name: 'Lisa Chen',
      company: 'Marketing Agency',
      content: 'Saves us 20+ hours per week on email campaigns. The automation features are incredibly powerful.',
      rating: 5,
      avatar: 'LC';
    }
  ]

  conststats= [
    { number: '300%', label: 'Revenue Increase', icon: <DollarSignclassName="w-5h-5ml-2" /> ,},
    { number: '150%', label: 'Conversion Boost', icon: <TrendingUpclassName="w-5h-5ml-2" /> ,},
    { number: '20 hrs', label: 'Time Saved/Week', icon: <ClockclassName="w-5h-5ml-2" /> ,},
    { number: '95%', label: 'Deliverabili t y Rate', icon: <ShieldclassName="w-5h-5ml-2" /> ,}
  ]

return (
    <>
      <Helmet></Helmet>
        <title />AI Email Automation - Smart Email Marketing | Zion Tech Group</title>
        <meta name="description" content="Revolutiona r y AI-poweredemailautomation with content generation, smart segmentati o n, and performan c e analytics. Increase revenue by 300% and save 20+ hours per week." />
        <meta name="keywords" content="AI email automation, email marketing, email generation, lead scoring, email analytics, marketing automation, AI content creation" />
        <meta name="robots" content="index, follow" />
        <linkrel="canonical" href="https://ziontechgro u p.com/ai-email-automation"  />
      </Helmet>

      {/* Hero Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <MailclassName="w-5h-5ml-2" />
            <span />AI-PoweredEmailMarketing</span>
          </div>
          
          <h1 className="w-5h-5ml-2" />
            AI Email;
            <br />
            <span className="w-5h-5ml-2" />Automation Pro;
            </span>
          </h1>
          
          <p className="w-5h-5ml-2">Transform your email marketing with AI-poweredautomation, 
            content generation, and performan c e optimizati o n that increases revenue by 300%.;
          </p>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <Linkto="/contact" className="groupbg-gradient-to-rfrom-blue-500to-cyan-600text-whitepx-10py-4rounded-xlfont-semiboldhover:from-blue-600hover:to-cyan-700transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lgshadow-blue-500/25hover:shadow-blue-500/40transformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
            <Linkto="#demo" className="groupborder-2border-blue-400text-blue-400px-10py-4rounded-xlfont-semiboldhover:bg-blue-400hover:text-gray-900transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
              <span />Watch Demo</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
          </div>
      </section>

      {/* Stats Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {stats.map((stat, index) => ())
              <divkey="{index}" className="text-centerbg-white/5backdrop-blur-smrounded-2xlp-6borderborder-white/10" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{stat.icon}>
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{stat.number}>
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{stat.label}>
                </div>
            ))}
          </div>
      </section>

      {/* Features Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Advanced <span className="w-5h-5ml-2" />Features</span>
            </h2>
            <p className="w-5h-5ml-2">Our AI-poweredemailautomation platform uses machine learning to create, 
              send, and optimize email campaigns that drive real business results.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {features.map((feature, index) => ())
              <divkey="{index}" className="groupbg-white/10backdrop-blur-lgrounded-2xlp-8borderborder-white/20hover:bg-white/20transition-allduration-300hover:scale-105" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{feature.icon}>
                </div>
                <h3 className="w-5h-5ml-2" />{feature.title}
                </h3>
                <p className="w-5h-5ml-2">{feature.description}
                </p>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  {feature.benefits.map((benefit, benefitInd e x) => ())
                    <divkey="{benefitInd e x}" className="flexitems-centerspace-x-2text-gray-400text-sm" />
                      <CheckCirc leclassName="w-5h-5ml-2" />
                      <span />{benefit}</span>
                    </div>
                  ))}
                </div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Transpare n t <span className="w-5h-5ml-2" />Pricing</span>
            </h2>
            <p className="w-5h-5ml-2">Choose the perfect plan for your email marketing needs. All plans include our core AI features;
              with scalable options for businesses of all sizes.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {pricingPla n s.map((plan, index) => ())
              <divkey="{index}" className="{`relative" bg-white/10 backdrop-blur-lgrounded-2xl p-8bordertransition-allduration-300hover:scale-105 ${>
                plan.popular;
                  ? 'border-blue-400/50 shadow-2xlshadow-blue-500/20';
                  : 'border-white/20 hover: border-white/40';
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
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  {plan.features.map((feature, featureInd e x) => ())
                    <divkey="{featureInd e x}" className="flexitems-centerspace-x-3" />
                      <CheckCirc leclassName="w-5h-5ml-2" />
                      <span className="w-5h-5ml-2" />{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link;
                  to="/contact";
                  className="{`block" w-fulltext-centerpy-3rounded-xlfont-semiboldtransition-allduration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-rfrom-blue-500to-cyan-600text-whitehover:from-blue-600hover:to-cyan-700shadow-lgshadow-blue-500/25';
                      : 'border-2border-blue-400text-blue-400hover: bg-blue-400hover:text-gray-900';
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
              Trusted by <span className="w-5h-5ml-2" />Marketers</span>
            </h2>
            <p className="w-5h-5ml-2">See how AI Email Automation is transformi n g email marketing for businesses worldwide.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {testimonia l s.map((testimoni a l, index) => ())
              <divkey="{index}" className="bg-white/10backdrop-blur-lgrounded-2xlp-8borderborder-white/20" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.avatar}>
                  </div>
                  <div />
                    <h4 className="w-5h-5ml-2" />{testimoni a l.name}</h4>
                    <p className="w-5h-5ml-2">{testimoni a l.company}</p>
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
          <h2 className="w-5h-5ml-2" />
            Ready to Revolutioni z e Your;
            <br />
            <span className="w-5h-5ml-2" />Email Marketing?;
            </span>
          </h2>
          <p className="w-5h-5ml-2">Join thousands of marketers already increasing revenue and saving time with AI Email Automation.;
            Start your free trial today - no credit card required.;
          </p>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <Linkto="/contact" className="groupbg-whitetext-blue-600px-10py-4rounded-xlfont-boldtext-lghover:bg-gray-100transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lghover:shadow-xltransformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
            <Linkto="/pricing" className="groupborder-2border-whitetext-whitepx-10py-4rounded-xlfont-boldtext-lghover:bg-white/10transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
              <span />View All Plans</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
          </div>
      </section>
    </>
  )
}

export default AIEmailAutomationPa g e;