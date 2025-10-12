import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout'
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../layout';

export default function AISmartSchedul e r() {
  constfeatures= [
    {
      icon: <BrainclassName="w-5h-5ml-2" />,
      title: 'AI-PoweredScheduling',
      description: 'Intellige n t scheduling that learns from your patterns and preferenc e s';
    },
    {
      icon: <UsersclassName="w-5h-5ml-2" />,
      title: 'Team Coordinati o n',
      description: 'Seamlessly coordinate meetings across multiple time zones and schedules';
    },
    {
      icon: <ZapclassName="w-5h-5ml-2" />,
      title: 'Auto-Optimization',
      description: 'Automatical l y finds the best meeting times for maximum productivi t y';
    },
    {
      icon: <GlobeclassName="w-5h-5ml-2" />,
      title: 'Global Integrati o n',
      description: 'Works with all major calendar platforms and time zones';
    }
  ]

  const pricingPlans= [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individua l s and small teams',
      features: [
        'Up to 5 team members',
        'Basic AI scheduling',
        'Calendar integrati o n',
        'Email notificatio n s',
        'Mobile app access';
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 team members',
        'Advanced AI optimizati o n',
        'Custom meeting templates',
        'Analytics dashboard',
        'Priority support',
        'API access';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizatio n s',
      features: [
        'Unlimited team members',
        'Custom AI training',
        'White-labeloptions',
        'Advanced analytics',
        'Dedicated support',
        'Custom integratio n s';
      ],
      popular: false;
    }
  ]

  const testimonials= [
    {
      name: 'Sarah Chen',
      company: 'TechStart Inc.',
      content: 'This AI scheduler saved us 10+ hours per week. The intellige n t optimizati o n is incredible.',
      rating: 5;
    },
    {
      name: 'Michael Rodriguez',
      company: 'Global Consulting',
      content: 'Finally, a scheduling tool that actually understan d s our complex team dynamics.',
      rating: 5;
    },
    {
      name: 'Emily Watson',
      company: 'RemoteFir s t Co.',
      content: 'The time zone handling is flawless. Our internation a l team coordinati o n has never been smoother.',
      rating: 5;
    }
  ]

return (
    <Layout;
      title="AI Smart Scheduler - Intellige n t Meeting Optimizati o n | Zion Tech Group";
      description="Revolutiona r y AI-poweredschedulingtool that optimizes meetings, coordinat e s teams, and maximizes productivi t y. Start your free trial today.";
      keywords="AI scheduler, meeting optimizati o n, team coordinati o n, calendar management, productivi t y tools" />
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <SparklesclassName="w-5h-5ml-2" />
                AI-PoweredScheduling;
              </div>
              <h1 className="w-5h-5ml-2">AI Smart Scheduler;
              </h1>
              <p className="w-5h-5ml-2">Transform your scheduling chaos into organized efficiency with our intellige n t AI-poweredscheduler.;
                Optimize meetings, coordinate teams, and maximize productivi t y automatical l y.;
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <Link
          to="/contact"
          className="bg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-center"
        >
          Start Free Trial;
                  
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
                <Linkto="#demo" className="border-2border-whitetext-whitepx-8py-4rounded-lgfont-semiboldhover:bg-white/10transition-colors">Watch Demo;
                </Link>
              </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Intellige n t Scheduling Features;
              </h2>
              <p className="w-5h-5ml-2">Powered by advanced AI to make scheduling effortless and efficient;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {features.map((feature, index) => ())
                <divkey="{index}" className="bg-gradient-to-brfrom-slate-800/50to-purple-900/30rounded-xlp-6borderborder-cyan-500/20hover:border-cyan-400/40transition-allduration-300" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {feature.icon}
                    <h3 className="w-5h-5ml-2" />{feature.title}</h3>
                  </div>
                  <p className="w-5h-5ml-2">{feature.description}</p>
                </div>
              ))}
            </div>
        </section>

        {/* Pricing Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Simple, Transpare n t Pricing;
              </h2>
              <p className="w-5h-5ml-2">Choose the plan that fits your team size and needs;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {pricingPla n s.map((plan, index) => ())
                <divkey="{index}" className="{`bg-gradient-to-br" from-slate-800/50 to-purple-900/30 rounded-xlp-8border transition-allduration-300 ${>
                  plan.popular;
                    ? 'border-cyan-400/40 scale-105shadow-2xl shadow-cyan-500/20';
                    : 'border-cyan-500/20 hover: border-cyan-400/40';
                }`} />
                  {plan.popular && ()
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <StarclassName="w-5h-5ml-2" />
                      Most Popular;
                    </div>
                  )}
                  <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                  <p className="w-5h-5ml-2">{plan.description}</p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <span className="w-5h-5ml-2" />{plan.price}</span>
                    <span className="w-5h-5ml-2" />{plan.period}</span>
                  </div>
                  <ulclassName="w-5h-5ml-2" />
                    {plan.features.map((feature, featureInd e x) => ())
                      <likey="{featureInd e x}" className="flexitems-centertext-gray-300" />
                        <CheckCirc leclassName="w-5h-5ml-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="{`w-full" block text-centerpy-3px-6rounded-lgfont-semiboldtransition-allduration-300 ${
                      plan.popular;
                        ? 'bg-gradient-to-rfrom-cyan-500to-purple-600text-whitehover:from-cyan-600hover:to-purple-700';
                        : 'border-2border-cyan-400text-cyan-400hover: bg-cyan-400/10';
                    }`}
                    />Get Started;
                  </Link>
                </div>
              ))}
            </div>
        </section>

        {/* Testimonia l s */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Trusted by Teams Worldwide;
              </h2>
              <p className="w-5h-5ml-2">See what our customers say about AI Smart Scheduler;
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {testimonia l s.map((testimoni a l, index) => ())
                <divkey="{index}" className="bg-slate-800/50rounded-xlp-6borderborder-slate-700" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {[...Array(testimoni a l.rating)].map((_, i) => ())
                      <Starkey="{i}" className="w-5h-5text-yellow-400fill-current"  />
                    ))}
                  </div>
                  <p className="w-5h-5ml-2">"{testimoni a l.content}"</p>
                  <div />
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.name}</div>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.company}</div>
                </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Ready to Transform Your Scheduling?;
              </h2>
              <p className="w-5h-5ml-2">Join thousands of teams already using AI Smart Scheduler to optimize their productivi t y;
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <Linkto="/contact" className="bg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300">Start Your Free Trial;
                </Link>
                <Linkto="/about" className="border-2border-whitetext-whitepx-8py-4rounded-lgfont-semiboldhover:bg-white/10transition-colors">Learn More;
                </Link>
              </div>
          </div>
        </section>
      </div>
    </Layout>
  )
};