import { Helmet  } from "react-helmet-async";
import { Server, Shield, Zap, BarChart3, CheckCircle, ArrowRight, Clock, Users, Database  } from "lucide-react";
import { Link  } from "react-router-dom";
import React  from 'react';
import { ArrowRight  } from "lucide-react";
import { Link  } from "react-router-dom";
const ServerManagementPage: React.FC = () => {
  return (
  return (
  const features = [
    {
      icon: <><Server className="w-6h-6text-cyan-400" />,
      title: '24/7 Server Monitoring',
      description: 'Continuous monitoring of server performance, uptime, and health with instant alerts.'
    
  );

  );
},
    {
      icon: <Shield className="w-6h-6text-emerald-400" />,
      title: 'Advanced Security',
      description: 'Comprehensive security measures including firewalls, intrusion detection, and threat prevention.'
    },
    {
      icon: <Zap className="w-6h-6text-purple-400" />,
      title: 'Performance Optimization',
      description: 'Automatic optimization of server resources for maximum performance and efficiency.'
    },
    {
      icon: <BarChart3 className="w-6h-6text-orange-400" />,
      title: 'Analytics & Reporting',
      description: 'Detailed analytics and reports on server performance, usage patterns, and trends.'
    },
    {
      icon: <Clock className="w-6h-6text-pink-400" />,
      title: 'Automated Backups',
      description: 'Regular automated backups with point-in-time recovery and disaster recovery planning.'
    },
    {icon: <Users className="w-6h-6text-blue-400" />,
      title: 'Expert Support',
      description: '24/7 expert support from certified server administrators and engineers.'
    }
  ]

  const services = [
    {
      icon: <Server className="w-8h-8text-cyan-400" />,
      title: 'Server Setup & Configuration',
      description: 'Complete server setup, configuration, and optimization for your specific needs.',
      features: ['OS installation', 'Software configuration', 'Security hardening', 'Performance tuning']
    },
    {
      icon: <Shield className="w-8h-8text-emerald-400" />,
      title: 'Security Management',
      description: 'Comprehensive security management including firewalls, antivirus, and threat monitoring.',
      features: ['Firewall configuration', 'Antivirus setup', 'Intrusion detection', 'Security audits']
    },
    {
      icon: <Zap className="w-8h-8text-purple-400" />,
      title: 'Performance Monitoring',
      description: 'Real-time monitoring and optimization of server performance and resource usage.',
      features: ['CPU monitoring', 'Memory tracking', 'Disk usage', 'Network analysis']
    },
    {icon: <Database className="w-8h-8text-orange-400" />,
      title: 'Database Management',
      description: 'Expert database administration, optimization, and maintenance services.',
      features: ['Database optimization', 'Query tuning', 'Backup management', 'Replication setup']
    }
  ]

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '1-2 servers',
        'Basic monitoring',
        'Email support',
        'Monthly reports'
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
        'Security management'
      ],
      popular: true;
    },
    {name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited servers',
        'Full monitoring suite',
        'Dedicated support',
        'Custom solutions',
        'SLA guarantee'
      ],
      popular: false;
    }
  ]

  return (
    <>>
      <Helmet></Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." /></meta>
      </Helmet>
        <title>Server Management - Professional Server Administration | Zion Tech Group</title>
        <meta name="description" content="Professional server management services including monitoring, security, optimization, and 24/7 support. Keep your servers running at peak performance." / / /></meta>
        <meta name="keywords" content="server management, server administration, server monitoring, server security, IT infrastructure, server optimization" / / /></meta>
        <link rel="canonical" href="https://ziontechgroup.com/server-management" /></link>
      </Helmet></>

      <>div className="min-h-screenbg-gray-900text-white" ></div>
        {/* Hero Section */}
    <>section className="relative py-20px-4overflow-hidden" />

              {features.map((feature, index) => (
    <>div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300" >{feature.icon}
                  </div>

              {services.map((service, index) => (
    <>div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                  <div className="flex items-centerspace-x-4mb-6" ></div>
              ))}
    <>/div>
        </section></>

        {/* Pricing Section */}
    <>section className="py-20px-4relative" />
          <div className="relative max-w-7xlmx-auto" ></div>
              {pricingPlans.map((plan, index) => (
                <div key="{index}" className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular;
                    ? 'border-cyan-400/50 shadow-2 xl shadow-cyan-500/20' ></div>
                    : 'border-white/20 hover: border-cyan-400/30'></div>
                }`} />
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2transform-translate-x-1/2" ></div><div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold" />Most Popular;
                      </div></>
                  )}
                  <>div className="text-centermb-8" ></div>
                    <h3 className="text-2 xl font-bold text-white mb-2" />{plan.name}</h3>
                    <p className="text-gray-300 mb-4" ></p>
              {plan.description}</p>
                    <div className="flex items-baselinejustify-center" ></div>
                      <span className="text-5 xlfont-bold text-white" />{plan.price}</span>
                      <span className="text-gray-400ml-2" />{plan.period}</span>
                    </div>
                  
                  <ul className="space-y-4mb-8" /></ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="flex items-centerspace-x-3" /></li>
                        <CheckCircle className="w-5 h-5text-green-400flex-shrink-0" /></CheckCircle>
                        <span className="text-gray-300" />{feature}</span>
                      </li></>
                    ))}
                  </ul>
                  
                  <Link;
                    to="/contact" className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular;
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'></Link>
                    }`}></Link>
                    />Get Started;
    <>/Link>
                </div></>
              ))}
    <>/div>
        </section></>

        {/* CTA Section */}
    <>section className="py-20px-4relative" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" /></div><div className="relative max-w-7xlmx-autotext-center" ></div></>
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8sm:p-12lg:p-16" ></div>
              <h2 className="text-4xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6leading-tight" /></h2>
                Ready to Optimize Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent" />Server Infrastructure?</span>
              </h2></>
              
              <p className="text-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed" ></p>
              Let our expert team manage your servers so you can focus on your business. 
                Get started with our professional server management services today.
              </p>
              
              <div className="flex flex-col sm:flex-rowgap-6justify-center" ></div>
                <Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" ></Link>
          <span    /></span>
        </Link>Get Started</span>
                  <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" /></ArrowRight>
                </Link><Link to="/pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" ></Link></>
          <span    /></span>
        </Link>View Pricing</span>
                  <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" /></ArrowRight>
                </Link>
              </div>
          </div>
        </section>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div></>
  )
}

export default ServerManagementPage;
    </>
}))