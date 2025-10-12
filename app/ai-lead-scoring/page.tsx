import { Helmet } from 'react-helmet-async'
import { Target, TrendingUp, BarChart3, Zap, CheckCirc l e, ArrowRight, Star, Award, Brain, Shield, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react';
import { ArrowRight, Bot, RotateCcw, RotateCw, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';

const AILeadScoringPa g e: React.FC = () => {
  constfeatures= [
    {
      icon: <BrainclassName="w-5h-5ml-2" />,
      title: 'AI Lead Scoring',
      description: 'Advanced machine learning algorithms automatical l y score leads based on behavior, demographi c s, and engagement patterns.',
      benefits: ['Behavioral analysis', 'Demograph i c scoring', 'Engagement tracking', 'Predictive modeling']
    },
    {
      icon: <TargetclassName="w-5h-5ml-2" />,
      title: 'Intent Detection',
      description: 'AI identifies buying intent signals and purchase readiness to prioritize high-valueprospects.',
      benefits: ['Intent signals', 'Purchase readiness', 'Priority scoring', 'Conversion prediction']
    },
    {
      icon: <TrendingUpclassName="w-5h-5ml-2" />,
      title: 'Conversion Analytics',
      description: 'Comprehensi v e analytics with AI insights to optimize lead qualificati o n and improve conversion rates.',
      benefits: ['Conversion tracking', 'ROI analysis', 'Funnel optimizati o n', 'Performan c e metrics']
    },
    {
      icon: <ZapclassName="w-5h-5ml-2" />,
      title: 'Automated Workflows',
      description: 'AI-poweredleadnurturing workflows that automatical l y engage prospects based on their score and behavior.',
      benefits: ['Auto-nurturing', 'Behavioral triggers', 'Personaliz e d content', 'Multi-channelengagement']
    },
    {
      icon: <BarChart3className="w-5h-5ml-2" />,
      title: 'Sales Intelligen c e',
      description: 'AI provides sales teams with actionable insights and recommendatio n s for each lead.',
      benefits: ['Sales insights', 'Action recommendatio n s', 'Lead context', 'Next best actions']
    },
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: 'CRM Integrati o n',
      description: 'Seamlessly integrate with popular CRMs and marketing automation platforms for unified lead management.',
      benefits: ['CRM sync', 'Data consisten c y', 'Workflow automation', 'Real-timeupdates']
    }
  ]

  const pricingPlans= [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 leads/month',
        'Basic AI scoring',
        'Email integrati o n',
        'Standard reports',
        'Email support';
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses and sales teams',
      features: [
        'Up to 10,000 leads/month',
        'Advanced AI features',
        'CRM integrati o n',
        'Custom workflows',
        'Priority support',
        'API access';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizatio n s with high volume needs',
      features: [
        'Unlimited leads',
        'Full AI suite',
        'Custom integratio n s',
        'Dedicated support',
        'Advanced analytics',
        'White-labeloptions';
      ],
      popular: false;
    }
  ]

  const testimonials= [
    {
      name: 'Sarah Mitchell',
      company: 'Sales Director',
      content: 'AI Lead Scoring increased our conversion rate by 180%. We now focus on the right prospects at the right time.',
      rating: 5,
      avatar: 'SM';
    },
    {
      name: 'James Wilson',
      company: 'Marketing Manager',
      content: 'The intent detection feature helped us identify hot leads 3 x faster. Our sales team loves the insights.',
      rating: 5,
      avatar: 'JW';
    },
    {
      name: 'Lisa Chen',
      company: 'VP of Sales',
      content: 'ROI increased by 250% in just 3 months. The AI recommendatio n s are incredibly accurate.',
      rating: 5,
      avatar: 'LC';
    }
  ]

  conststats= [
    { number: '180%', label: 'Conversion Increase', icon: <TrendingUpclassName="w-5h-5ml-2" /> ,},
    { number: '250%', label: 'ROI Improveme n t', icon: <DollarSignclassName="w-5h-5ml-2" /> ,},
    { number: '3 x', label: 'Faster Lead Identificati o n', icon: <TargetclassName="w-5h-5ml-2" /> ,},
    { number: '95%', label: 'Scoring Accuracy', icon: <AwardclassName="w-5h-5ml-2" /> ,}
  ]

return (
    <>
      <Helmet></Helmet>
        <title />AI Lead Scoring - Smart Sales Intelligen c e | Zion Tech Group</title>
        <meta name="description" content="Revolutiona r y AI-poweredleadscoring with intent detection, conversion analytics, and automated workflows. Increase conversion rates by 180% and ROI by 250%." />
        <meta name="keywords" content="AI lead scoring, sales intelligen c e, lead qualificati o n, conversion optimizati o n, sales automation, CRM integrati o n" />
        <meta name="robots" content="index, follow" />
        <linkrel="canonical" href="https://ziontechgro u p.com/ai-lead-scoring"  />
      </Helmet>

      {/* Hero Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <TargetclassName="w-5h-5ml-2" />
            <span />AI-PoweredSalesIntelligen c e</span>
          </div>
          
          <h1 className="w-5h-5ml-2" />
            AI Lead;
            <br />
            <span className="w-5h-5ml-2" />Scoring Pro;
            </span>
          </h1>
          
          <p className="w-5h-5ml-2">Transform your sales process with AI-poweredleadscoring, 
            intent detection, and conversion analytics that increase conversion rates by 180%.;
          </p>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <Linkto="/contact" className="groupbg-gradient-to-rfrom-teal-500to-cyan-600text-whitepx-10py-4rounded-xlfont-semiboldhover:from-teal-600hover:to-cyan-700transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lgshadow-teal-500/25hover:shadow-teal-500/40transformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
            <Linkto="#demo" className="groupborder-2border-teal-400text-teal-400px-10py-4rounded-xlfont-semiboldhover:bg-teal-400hover:text-gray-900transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
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
            <p className="w-5h-5ml-2">Our AI-poweredleadscoring platform uses machine learning to identify, 
              score, and prioritize leads that are most likely to convert.;
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
              Flexible <span className="w-5h-5ml-2" />Pricing</span>
            </h2>
            <p className="w-5h-5ml-2">Choose the perfect plan for your lead scoring needs. All plans include our core AI features;
              with scalable options for businesses of all sizes.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {pricingPla n s.map((plan, index) => ())
              <divkey="{index}" className="{`relative" bg-white/10 backdrop-blur-lgrounded-2xl p-8bordertransition-allduration-300hover:scale-105 ${>
                plan.popular;
                  ? 'border-teal-400/50 shadow-2xlshadow-teal-500/20';
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
                      ? 'bg-gradient-to-rfrom-teal-500to-cyan-600text-whitehover:from-teal-600hover:to-cyan-700shadow-lgshadow-teal-500/25';
                      : 'border-2border-teal-400text-teal-400hover: bg-teal-400hover:text-gray-900';
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
              Trusted by <span className="w-5h-5ml-2" />Sales Teams</span>
            </h2>
            <p className="w-5h-5ml-2">See how AI Lead Scoring is transformi n g sales processes for businesses worldwide.;
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
            Ready to Transform Your;
            <br />
            <span className="w-5h-5ml-2" />Sales Process?;
            </span>
          </h2>
          <p className="w-5h-5ml-2">Join thousands of sales teams already increasing conversion rates and ROI with AI Lead Scoring.;
            Start your free trial today - no credit card required.;
          </p>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <Linkto="/contact" className="groupbg-whitetext-teal-600px-10py-4rounded-xlfont-boldtext-lghover:bg-gray-100transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lghover:shadow-xltransformhover:scale-105" />
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

export default AILeadScoringPa g e;