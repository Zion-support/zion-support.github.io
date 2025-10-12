import { Helmet } from 'react-helmet-async'
import { Mail, Palette, Users, Zap, CheckCirc l e, ArrowRight, BarChart3, Shield, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react';
import { Palette, ArrowRight} from 'lucide-react';
import { Link } from 'react-router-dom';

const EmailSignaturePa g e: React.FC = () => {
  constfeatures= [
    {
      icon: <PaletteclassName="w-5h-5ml-2" />,
      title: 'Custom Design Templates',
      description: 'Beautiful, profession a l email signature templates that match your brand identity.';
    },
    {
      icon: <UsersclassName="w-5h-5ml-2" />,
      title: 'Team Management',
      description: 'Manage signatures for your entire team with centraliz e d control and consisten c y.';
    },
    {
      icon: <ZapclassName="w-5h-5ml-2" />,
      title: 'One-ClickSetup',
      description: 'Deploy signatures across your organizati o n with just one click.';
    },
    {
      icon: <BarChart3className="w-5h-5ml-2" />,
      title: 'Analytics & Tracking',
      description: 'Track email engagement and signature performan c e with detailed analytics.';
    },
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: 'Security & Compliance',
      description: 'Ensure all signatures meet security standards and compliance requiremen t s.';
    },
    {
      icon: <ClockclassName="w-5h-5ml-2" />,
      title: 'Auto-Updates',
      description: 'Automatical l y update signatures when team members change roles or informati o n.';
    }
  ]

  const pricingPlans= [
    {
      name: 'Starter',
      price: '$9',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 10 signatures',
        'Basic templates',
        'Email support',
        'Standard analytics';
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 100 signatures',
        'Premium templates',
        'Team management',
        'Advanced analytics',
        'Priority support';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizatio n s',
      features: [
        'Unlimited signatures',
        'Custom templates',
        'API integrati o n',
        'White-labeloptions',
        'Dedicated support';
      ],
      popular: false;
    }
  ]

return (
    <>
      <Helmet></Helmet>
        <title />AI Email Signature Manager - Professional Email Signatures | Zion Tech Group</title>
        <meta name="description" content="Create and manage profession a l email signatures for your team. Beautiful templates, team management, and analytics included." />
        <meta name="keywords" content="email signature, email marketing, team management, profession a l signatures, email branding" />
        <linkrel="canonical" href="https://ziontechgro u p.com/micro-saas/email-signature"  />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <MailclassName="w-5h-5ml-2" />
              <span />Email Signature Management</span>
            </div>
            
            <h1 className="w-5h-5ml-2" />
              Professional <span className="w-5h-5ml-2" />Email Signatures</span>
            </h1>
            
            <p className="w-5h-5ml-2">Create beautiful, consistent email signatures for your entire team.;
              Boost your brand presence with profession a l email signatures that convert.;
            </p>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <Linkto="/contact" className="groupbg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-10py-4rounded-xlfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lgshadow-cyan-500/25hover:shadow-cyan-500/40transformhover:scale-105" />
                <span />Start Free Trial</span>
                <ArrowRight className="w-5h-5ml-2" />
              </Link>
              <Linkto="/demo" className="groupborder-2border-cyan-400text-cyan-400px-10py-4rounded-xlfont-semiboldhover:bg-cyan-400hover:text-gray-900transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
                <span />View Templates</span>
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
                Everything You Need for <span className="w-5h-5ml-2" />Email Signatures</span>
              </h2>
              <p className="w-5h-5ml-2">Professional email signatures that enhance your brand and drive engagement.;
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

        {/* Pricing Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Simple <span className="w-5h-5ml-2" />Pricing</span>
              </h2>
              <p className="w-5h-5ml-2">Choose the plan that fits your team size. All plans include a 14-dayfreetrial.;
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
                  
                  <Link
                    to="/contact"
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
                Ready to Elevate Your <span className="w-5h-5ml-2" />Email Branding?</span>
              </h2>
              
              <p className="w-5h-5ml-2">Join thousands of businesses using our email signature management platform.;
                Start your free trial today and see the difference profession a l signatures make.;
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

export default EmailSignaturePa g e;