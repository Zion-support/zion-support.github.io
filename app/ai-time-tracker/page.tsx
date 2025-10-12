import { Helmet } from 'react-helmet-async'
import { Clock, Timer, TrendingUp, BarChart3, Zap, CheckCirc l e, ArrowRight, Star, Target, Brain, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react';
import { ArrowRight, Bot, RotateCcw, RotateCw, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';

const AITimeTrackerPa g e: React.FC = () => {
  constfeatures= [
    {
      icon: <BrainclassName="w-5h-5ml-2" />,
      title: 'AI Activity Recogniti o n',
      description: 'Automatical l y detect and categorize work activities using AI to eliminate manual time entry.',
      benefits: ['Auto-detection', 'Smart categorizati o n', 'Context awareness', 'Learning algorithms']
    },
    {
      icon: <TimerclassName="w-5h-5ml-2" />,
      title: 'Smart Time Tracking',
      description: 'AI-poweredtimetracking that learns your work patterns and suggests optimal time allocation.',
      benefits: ['Pattern learning', 'Optimal suggestio n s', 'Focus time detection', 'Break reminders']
    },
    {
      icon: <TrendingUpclassName="w-5h-5ml-2" />,
      title: 'Productivi t y Analytics',
      description: 'Comprehensi v e analytics with AI insights to improve productivi t y and work-lifebalance.',
      benefits: ['Productivi t y metrics', 'Efficiency analysis', 'Distracti o n tracking', 'Goal setting']
    },
    {
      icon: <ZapclassName="w-5h-5ml-2" />,
      title: 'Automated Reporting',
      description: 'Generate detailed time reports automatical l y with AI-poweredinsightsand recommendatio n s.',
      benefits: ['Auto reports', 'Client billing', 'Project insights', 'Team analytics']
    },
    {
      icon: <BarChart3className="w-5h-5ml-2" />,
      title: 'Project Management',
      description: 'AI-drivenprojecttime estimation and resource allocation for better project planning.',
      benefits: ['Time estimation', 'Resource planning', 'Deadline tracking', 'Budget monitoring']
    },
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: 'Privacy Protection',
      description: 'Advanced privacy controls with local processing to protect sensitive work data.',
      benefits: ['Local processing', 'Data encryption', 'Privacy controls', 'GDPR compliance']
    }
  ]

  const pricingPlans= [
    {
      name: 'Individual',
      price: '$19',
      period: '/month',
      description: 'Perfect for freelance r s and individual professiona l s',
      features: [
        'Unlimited time tracking',
        'Basic AI features',
        'Mobile app access',
        'Standard reports',
        'Email support';
      ],
      popular: false;
    },
    {
      name: 'Team',
      price: '$49',
      period: '/month',
      description: 'Ideal for small teams and growing businesses',
      features: [
        'Up to 10 team members',
        'Advanced AI features',
        'Team collaborati o n',
        'Project management',
        'Priority support',
        'API access';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For large organizatio n s with complex needs',
      features: [
        'Unlimited team members',
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
      name: 'Alex Johnson',
      company: 'Freelance Designer',
      content: 'AI Time Tracker increased my productivi t y by 40%. The auto-detectionfeatureis a game-changer.',
      rating: 5,
      avatar: 'AJ';
    },
    {
      name: 'Maria Rodriguez',
      company: 'Project Manager',
      content: 'The project time estimation feature helped us deliver projects 20% faster with better accuracy.',
      rating: 5,
      avatar: 'MR';
    },
    {
      name: 'David Kim',
      company: 'Software Developer',
      content: 'Finally, a time tracker that actually understan d s my work patterns. Highly recommend e d!',
      rating: 5,
      avatar: 'DK';
    }
  ]

  conststats= [
    { number: '40%', label: 'Productivi t y Increase', icon: <TrendingUpclassName="w-5h-5ml-2" /> ,},
    { number: '20%', label: 'Faster Delivery', icon: <TimerclassName="w-5h-5ml-2" /> ,},
    { number: '95%', label: 'Accuracy Rate', icon: <TargetclassName="w-5h-5ml-2" /> ,},
    { number: '50 K+', label: 'Hours Tracked', icon: <ClockclassName="w-5h-5ml-2" /> ,}
  ]

return (
    <>
      <Helmet></Helmet>
        <title />AI Time Tracker - Smart Productivi t y Management | Zion Tech Group</title>
        <meta name="description" content="Revolutiona r y AI-poweredtimetracking with activity recogniti o n, productivi t y analytics, and automated reporting. Increase productivi t y by 40% and deliver projects 20% faster." />
        <meta name="keywords" content="AI time tracking, productivi t y management, activity recogniti o n, time analytics, project management, work optimizati o n" />
        <meta name="robots" content="index, follow" />
        <linkrel="canonical" href="https://ziontechgro u p.com/ai-time-tracker"  />
      </Helmet>

      {/* Hero Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <ClockclassName="w-5h-5ml-2" />
            <span />AI-PoweredTimeManagement</span>
          </div>
          
          <h1 className="w-5h-5ml-2" />
            AI Time;
            <br />
            <span className="w-5h-5ml-2" />Tracker Pro;
            </span>
          </h1>
          
          <p className="w-5h-5ml-2">Transform your productivi t y with AI-poweredtimetracking, 
            activity recogniti o n, and intellige n t insights that increase efficiency by 40%.;
          </p>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <Linkto="/contact" className="groupbg-gradient-to-rfrom-indigo-500to-cyan-600text-whitepx-10py-4rounded-xlfont-semiboldhover:from-indigo-600hover:to-cyan-700transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lgshadow-indigo-500/25hover:shadow-indigo-500/40transformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
            <Linkto="#demo" className="groupborder-2border-indigo-400text-indigo-400px-10py-4rounded-xlfont-semiboldhover:bg-indigo-400hover:text-gray-900transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
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
              Intellige n t <span className="w-5h-5ml-2" />Features</span>
            </h2>
            <p className="w-5h-5ml-2">Our AI-poweredtimetracking platform uses machine learning to automatical l y;
              track activities, analyze productivi t y patterns, and provide actionable insights.;
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
              Simple <span className="w-5h-5ml-2" />Pricing</span>
            </h2>
            <p className="w-5h-5ml-2">Choose the perfect plan for your time tracking needs. All plans include our core AI features;
              with flexible options for individua l s and teams.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {pricingPla n s.map((plan, index) => ())
              <divkey="{index}" className="{`relative" bg-white/10 backdrop-blur-lgrounded-2xl p-8bordertransition-allduration-300hover:scale-105 ${>
                plan.popular;
                  ? 'border-indigo-400/50 shadow-2xlshadow-indigo-500/20';
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
                
                <Link
                  to="/contact"
                  className="{`block" w-fulltext-centerpy-3rounded-xlfont-semiboldtransition-allduration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-rfrom-indigo-500to-cyan-600text-whitehover:from-indigo-600hover:to-cyan-700shadow-lgshadow-indigo-500/25';
                      : 'border-2border-indigo-400text-indigo-400hover: bg-indigo-400hover:text-gray-900';
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
              Trusted by <span className="w-5h-5ml-2" />Professiona l s</span>
            </h2>
            <p className="w-5h-5ml-2">See how AI Time Tracker is transformi n g productivi t y for professiona l s and teams worldwide.;
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
            Ready to Boost Your;
            <br />
            <span className="w-5h-5ml-2" />Productivi t y?;
            </span>
          </h2>
          <p className="w-5h-5ml-2">Join thousands of professiona l s already increasing productivi t y and improving work-lifebalancewith AI Time Tracker.;
            Start your free trial today - no credit card required.;
          </p>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <Linkto="/contact" className="groupbg-whitetext-indigo-600px-10py-4rounded-xlfont-boldtext-lghover:bg-gray-100transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lghover:shadow-xltransformhover:scale-105" />
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

export default AITimeTrackerPa g e;