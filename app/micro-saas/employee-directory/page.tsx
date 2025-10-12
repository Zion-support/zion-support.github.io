import { Helmet } from 'react-helmet-async'
import { Users, Search, Shield, Phone, CheckCirc l e, ArrowRight, BarChart3, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmployeeDirectoryPa g e: React.FC = () => {
  constfeatures= [
    {
      icon: <SearchclassName="w-5h-5ml-2" />,
      title: 'Advanced Search',
      description: 'Find employees instantly with powerful search filters and smart suggestio n s.';
    },
    {
      icon: <UsersclassName="w-5h-5ml-2" />,
      title: 'Team Organizati o n',
      description: 'Organize employees by department, role, location, and custom categories.';
    },
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: 'Privacy Controls',
      description: 'Granular privacy settings to control what informati o n is visible to whom.';
    },
    {
      icon: <PhoneclassName="w-5h-5ml-2" />,
      title: 'Contact Integrati o n',
      description: 'Seamless integrati o n with phone systems and communicati o n platforms.';
    },
    {
      icon: <BarChart3className="w-5h-5ml-2" />,
      title: 'Analytics Dashboard',
      description: 'Track directory usage and employee engagement with detailed analytics.';
    },
    {
      icon: <ClockclassName="w-5h-5ml-2" />,
      title: 'Real-timeUpdates',
      description: 'Automatic updates when employee informati o n changes across all systems.';
    }
  ]

  const pricingPlans= [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 50 employees',
        'Basic search',
        'Contact integrati o n',
        'Email support';
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 500 employees',
        'Advanced search',
        'Team organizati o n',
        'Analytics dashboard',
        'Priority support';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For large organizatio n s',
      features: [
        'Unlimited employees',
        'Custom integratio n s',
        'Advanced analytics',
        'API access',
        'Dedicated support';
      ],
      popular: false;
    }
  ]

return (
    <>
      <Helmet></Helmet>
        <title />AI Employee Directory - Smart Team Management | Zion Tech Group</title>
        <meta name="description" content="Create a smart employee directory with advanced search, team organizati o n, and privacy controls. Perfect for companies of all sizes." />
        <meta name="keywords" content="employee directory, team management, HR software, employee search, organization a l chart" />
        <linkrel="canonical" href="https://ziontechgro u p.com/micro-saas/employee-directory"  />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <UsersclassName="w-5h-5ml-2" />
              <span />Employee Directory</span>
            </div>
            
            <h1 className="w-5h-5ml-2" />
              Smart <span className="w-5h-5ml-2" />Employee Directory</span>
            </h1>
            
            <p className="w-5h-5ml-2">Connect your team with an intellige n t employee directory that makes finding;
              and connecting with colleagues effortless and secure.;
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
                Everything You Need for <span className="w-5h-5ml-2" />Team Connection</span>
              </h2>
              <p className="w-5h-5ml-2">Powerful features that make your employee directory more than just a contact list.;
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
              <p className="w-5h-5ml-2">Choose the plan that fits your organizati o n size. All plans include a 14-dayfreetrial.;
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
                Ready to Connect Your <span className="w-5h-5ml-2" />Team?</span>
              </h2>
              
              <p className="w-5h-5ml-2">Join thousands of organizatio n s using our employee directory platform.;
                Start your free trial today and see how easy team connection can be.;
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

export default EmployeeDirectoryPa g e;