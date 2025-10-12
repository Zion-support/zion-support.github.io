import { Helmet } from 'react-helmet-async'
import { FileText, Clock, Shield, Users, CheckCirc l e, ArrowRight, BarChart3, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContractManagerPa g e: React.FC = () => {
  constfeatures= [
    {
      icon: <FileTextclassName="w-5h-5ml-2" />,
      title: 'Smart Contract Templates',
      description: 'Pre-builtcontracttemplates for common business agreements with AI-poweredcustomizatio n.';
    },
    {
      icon: <ClockclassName="w-5h-5ml-2" />,
      title: 'Automated Renewals',
      description: 'Never miss a contract renewal with intellige n t tracking and automated notificatio n s.';
    },
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: 'Compliance Monitoring',
      description: 'Ensure all contracts meet legal requiremen t s with built-incompliancechecks.';
    },
    {
      icon: <UsersclassName="w-5h-5ml-2" />,
      title: 'Team Collaborati o n',
      description: 'Collabora t e on contract reviews with real-timeeditingand commenting features.';
    },
    {
      icon: <BarChart3className="w-5h-5ml-2" />,
      title: 'Analytics Dashboard',
      description: 'Track contract performan c e, renewal rates, and key metrics in real-time.';
    },
    {
      icon: <CalendarclassName="w-5h-5ml-2" />,
      title: 'Deadline Management',
      description: 'Never miss important contract deadlines with smart calendar integrati o n.';
    }
  ]

  const pricingPlans= [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 50 contracts',
        'Basic templates',
        'Email notificatio n s',
        'Standard support';
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 500 contracts',
        'Advanced templates',
        'Team collaborati o n',
        'Analytics dashboard',
        'Priority support';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizatio n s',
      features: [
        'Unlimited contracts',
        'Custom templates',
        'Advanced analytics',
        'API integrati o n',
        'Dedicated support';
      ],
      popular: false;
    }
  ]

return (
    <>
      <Helmet></Helmet>
        <title />AI Contract Manager - Smart Contract Management | Zion Tech Group</title>
        <meta name="description" content="Streamline contract management with AI-poweredautomation, smart templates, and compliance monitoring. Perfect for businesses of all sizes." />
        <meta name="keywords" content="contract management, AI contracts, legal automation, contract templates, compliance monitoring" />
        <linkrel="canonical" href="https://ziontechgro u p.com/micro-saas/contract-manager"  />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <FileTextclassName="w-5h-5ml-2" />
              <span />AI Contract Management</span>
            </div>
            
            <h1 className="w-5h-5ml-2" />
              Smart <span className="w-5h-5ml-2" />Contract Manager</span>
            </h1>
            
            <p className="w-5h-5ml-2">Automate contract management with AI-poweredinsights, smart templates, 
              and intellige n t compliance monitoring. Never miss a deadline again.;
            </p>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <Linkto="/contact" className="groupbg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-10py-4rounded-xlfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lgshadow-cyan-500/25hover:shadow-cyan-500/40transformhover:scale-105" />
                <span />Start Free Trial</span>
                <ArrowRight className="w-5h-5ml-2" />
              </Link>
              <Linkto="/demo" className="groupborder-2border-cyan-400text-cyan-400px-10py-4rounded-xlfont-semiboldhover:bg-cyan-400hover:text-gray-900transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
                <span />Watch Demo</span>
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
                Powerful <span className="w-5h-5ml-2" />Features</span>
              </h2>
              <p className="w-5h-5ml-2">Everything you need to manage contracts efficient l y and stay compliant.;
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
              <p className="w-5h-5ml-2">Choose the plan that fits your business needs. All plans include a 14-dayfreetrial.;
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
                Ready to Streamline Your <span className="w-5h-5ml-2" />Contract Management?</span>
              </h2>
              
              <p className="w-5h-5ml-2">Join thousands of businesses already using our AI-poweredcontractmanagement solution.;
                Start your free trial today and experience the difference.;
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

export default ContractManagerPa g e;