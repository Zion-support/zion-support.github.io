import { Helmet } from 'react-helmet-async'
import { Server, Shield, Zap, BarChart3, CheckCirc l e, ArrowRight, Clock, Users, Database } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServerManagementPa g e: React.FC = () => {
  constfeatures= [
    {
      icon: <ServerclassName="w-5h-5ml-2" />,
      title: '24/7 Server Monitoring',
      description: 'Continuous monitoring of server performan c e, uptime, and health with instant alerts.';
    },
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: 'Advanced Security',
      description: 'Comprehensi v e security measures including firewalls, intrusion detection, and threat prevention.';
    },
    {
      icon: <ZapclassName="w-5h-5ml-2" />,
      title: 'Performan c e Optimizati o n',
      description: 'Automatic optimizati o n of server resources for maximum performan c e and efficiency.';
    },
    {
      icon: <BarChart3className="w-5h-5ml-2" />,
      title: 'Analytics & Reporting',
      description: 'Detailed analytics and reports on server performan c e, usage patterns, and trends.';
    },
    {
      icon: <ClockclassName="w-5h-5ml-2" />,
      title: 'Automated Backups',
      description: 'Regular automated backups with point-in-timerecoveryand disaster recovery planning.';
    },
    {
      icon: <UsersclassName="w-5h-5ml-2" />,
      title: 'Expert Support',
      description: '24/7 expert support from certified server administrato r s and engineers.';
    }
  ]

  constservices= [
    {
      icon: <ServerclassName="w-5h-5ml-2" />,
      title: 'Server Setup & Configurati o n',
      description: 'Complete server setup, configurati o n, and optimizati o n for your specific needs.',
      features: ['OS installati o n', 'Software configurati o n', 'Security hardening', 'Performan c e tuning']
    },
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: 'Security Management',
      description: 'Comprehensi v e security management including firewalls, antivirus, and threat monitoring.',
      features: ['Firewall configurati o n', 'Antivirus setup', 'Intrusion detection', 'Security audits']
    },
    {
      icon: <ZapclassName="w-5h-5ml-2" />,
      title: 'Performan c e Monitoring',
      description: 'Real-timemonitoringand optimizati o n of server performan c e and resource usage.',
      features: ['CPU monitoring', 'Memory tracking', 'Disk usage', 'Network analysis']
    },
    {
      icon: <DatabaseclassName="w-5h-5ml-2" />,
      title: 'Database Management',
      description: 'Expert database administrati o n, optimizati o n, and maintenan c e services.',
      features: ['Database optimizati o n', 'Query tuning', 'Backup management', 'Replicati o n setup']
    }
  ]

  const pricingPlans= [
    {
      name: 'Basic',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '1-2servers',
        'Basic monitoring',
        'Email support',
        'Monthly reports';
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10 servers',
        'Advanced monitoring',
        '24/7 support',
        'Weekly reports',
        'Security management';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizatio n s',
      features: [
        'Unlimited servers',
        'Full monitoring suite',
        'Dedicated support',
        'Custom solutions',
        'SLA guarantee';
      ],
      popular: false;
    }
  ]

return (
    <>
      <Helmet></Helmet>
        <title />Server Management - Professional Server Administrati o n | Zion Tech Group</title>
        <meta name="description" content="Professional server management services including monitoring, security, optimizati o n, and 24/7 support. Keep your servers running at peak performan c e." />
        <meta name="keywords" content="server management, server administrati o n, server monitoring, server security, IT infrastructu r e, server optimizati o n" />
        <linkrel="canonical" href="https://ziontechgro u p.com/server-management"  />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <ServerclassName="w-5h-5ml-2" />
              <span />Server Management</span>
            </div>
            
            <h1 className="w-5h-5ml-2" />
              Professional <span className="w-5h-5ml-2" />Server Management</span>
            </h1>
            
            <p className="w-5h-5ml-2">Keep your servers running at peak performan c e with our comprehensi v e management services.;
              Monitoring, security, optimizati o n, and 24/7 expert support.;
            </p>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <Linkto="/contact" className="groupbg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-10py-4rounded-xlfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lgshadow-cyan-500/25hover:shadow-cyan-500/40transformhover:scale-105" />
                <span />Get Started</span>
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
                Comprehensi v e <span className="w-5h-5ml-2" />Server Management</span>
              </h2>
              <p className="w-5h-5ml-2">Everything you need to keep your servers secure, optimized, and running smoothly.;
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

        {/* Services Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Our <span className="w-5h-5ml-2" />Services</span>
              </h2>
              <p className="w-5h-5ml-2">Professional server management services tailored to your business needs.;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {services.map((service, index) => ())
                <divkey="{index}" className="groupbg-white/10backdrop-blur-lgrounded-2xlp-8borderborder-white/20hover:bg-white/20transition-allduration-300hover:scale-105" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{service.icon}>
                    </div>
                    <h3 className="w-5h-5ml-2" />{service.title}
                    </h3>
                  </div>
                  <p className="w-5h-5ml-2">{service.description}
                  </p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {service.features.map((feature, featureInd e x) => ())
                      <divkey="{featureInd e x}" className="flexitems-centerspace-x-2text-gray-400text-sm" />
                        <CheckCirc leclassName="w-5h-5ml-2" />
                        <span />{feature}</span>
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
              <p className="w-5h-5ml-2">Choose the plan that fits your server infrastructu r e needs. All plans include 24/7 support.;
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
                Ready to Optimize Your <span className="w-5h-5ml-2" />Server Infrastructu r e?</span>
              </h2>
              
              <p className="w-5h-5ml-2">Let our expert team manage your servers so you can focus on your business.;
                Get started with our profession a l server management services today.;
              </p>
              
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <Linkto="/contact" className="groupbg-whitetext-cyan-600px-10py-4rounded-xlfont-boldtext-lghover:bg-gray-100transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lghover:shadow-xltransformhover:scale-105" />
                  <span />Get Started</span>
                  <ArrowRight className="w-5h-5ml-2" />
                </Link>
                <Linkto="/pricing" className="groupborder-2border-whitetext-whitepx-10py-4rounded-xlfont-boldtext-lghover:bg-white/10transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
                  <span />View Pricing</span>
                  <ArrowRight className="w-5h-5ml-2" />
                </Link>
              </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ServerManagementPa g e;