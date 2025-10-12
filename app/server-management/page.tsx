import { Helmet } from 'react-helmet-async'
import { Server, Shield, Zap, BarChart3, CheckCircle, ArrowRight, Clock, Users, Database  } from 'lucide-react';import { Link } from 'react-router-dom'
import React from 'react';import { ArrowRight  } from 'lucide-react';
import { Link  } from 'react-router-dom';
const ServerManagementPage: React.FC = () => {
  const f eat ures = [
    {
      i con: <Server c las sNa me="w-6h-6t e xt-c yan-400" />,
      t itle: '24/7 Server Monitoring',
      description: 'Continuous monitoring of server performance, uptime, and health with instant aler ts.'
    },
    {
      i con: <Shield c las sNa me="w-6h-6t e xt-emer ald-400" />,
      t itle: 'Advanced Security',
      description: 'Comprehensive security measures including firewalls, intrusion detection, and thre at prev ention.'
    },
    {
      i con: <Zap c las sNa me="w-6h-6t e xt-p urp le-400" />,
      t itle: 'Performance Optimization',
      description: 'Automatic optimization of server r esources for maximum performance and efficiency.'
    },
    {
      i con: <BarChart3 c las sNa me="w-6h-6t e xt-o ran ge-400" />,
      t itle: 'Analytics & Reporting',
      description: 'Detailed analytics and reports on server performance, usage patterns, and t ren ds.'
    },
    {
      i con: <Clock c las sNa me="w-6h-6t e xt-p ink-400" />,
      t itle: 'Automated Backups',
      description: 'Regular automated backups with point-in-time recovery and disaster recovery plan ning.'
    },
    {
      i con: <Users c las sNa me="w-6h-6t e xt-b lue-400" />,
      t itle: 'Expe rt Support',
      description: '24/7 expe rt support from certified server administrators and engineers.'
    }
  ]
  const serv ices = [
    {
      i con: <Server c las sNa me="w-8h-8t e xt-c yan-400" />,
      t itle: 'Server Setup & Configuration',
      description: 'Comp lete server setup, configuration, and optimization for your specific needs.',
      f eat ures: ['OS installation', 'Software configuration', 'Security hardening', 'Performance tuning']
    },
    {
      i con: <Shield c las sNa me="w-8h-8t e xt-emer ald-400" />,
      t itle: 'Security Management',
      description: 'Comprehensive security management including firewalls, antivirus, and thre at monitoring.',
      f eat ures: ['Firewall configuration', 'Antivirus setup', 'Intrusion detection', 'Security a udi ts']
    },
    {
      i con: <Zap c las sNa me="w-8h-8t e xt-p urp le-400" />,
      t itle: 'Performance Monitoring',
      description: 'Real-time monitoring and optimization of server performance and r esource usage.',
      f eat ures: ['CPU monitoring', 'Memory tracking', 'Disk usage', 'Network analysis']
    },
    {
      i con: <Database c las sNa me="w-8h-8t e xt-o ran ge-400" />,
      t itle: 'Database Management',
      description: 'Expe rt database administration, optimization, and maintenance serv ices.',
      f eat ures: ['Database optimization', 'Query tuning', 'Backup management', 'Replication setup']
    }
  ]
  const pricingPlans = [
    {
      name: 'Basic',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      f eat ures: [
        '1-2 servers',
        'Basic monitoring',
        'Email support',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      f eat ures: [
        'Up to 10 servers',
        'Advanced monitoring',
        '24/7 support',
        'Weekly reports',
        'Security management'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      f eat ures: [
        'Unlimited servers',
        'Full monitoring suite',
        'Dedicated support',
        'Custom solutions',
        'SLA guar antee'
      ],
      popular: false
    }
  ]
  return (
    <>
    </>
      <Helmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <meta name="description" content="Professional 5G data analytics serv ices by Zion Tech Group. Transform your business with our expe rt solutions." />
      </Helmet>
        <t itle>Server Management - Professional Server Administration | Zion Tech Group</t itle>
        <meta name="description" content="Professional server management serv ices including monitoring, security, optimization, and 24/7 support. Keep your servers runn ing at peak performance." / / />
        <meta name="keywords" content="server management, server administration, server monitoring, server security, IT infrastructure, server optimization" / / />
        <link rel="canonical" href="https://ziontechgroup.com/server-management" />
      </Helmet>
    </>
      <d iv c las sNa me="m in-h-scre enbg-g ray-900t ext-w hit-e">
        {/* H ero Section */}
    <>
        </><section c las sNa me="r e lative py-20-px-4-over flow-h idden" />
              {f eat ures.map((f eat ure, index) => (
    <>
                </><d iv key="{index}" c las sNa me="g roup bg-w hite/10 back drop-b lur-lg rounded-2 xl p-8 border border-w hite/20 hover:bg-w hite/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-c yan-500/10" />
                  <d iv c las sNa me="f l ex items-c enter j ustify-c enter w-16 h-16 bg-g radient-to-r from-c yan-500 to-p urp le-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{f eat ure.i con}
                  </d iv>
              {serv ices.map((serv ice, index) => (
    <>
                </><d iv key="{index}" c las sNa me="g roup bg-w hite/10 back drop-b lur-lg rounded-2 xl p-8 border border-w hite/20 hover:bg-w hite/20 transition-allduration-300hover:scale-105" />
                  <d iv c las sNa me="f l ex items-c enters pace-x-4mb-6">
              ))}
    <>
            </d iv>
        </section>
    </>
        {/* Pricing Section */}
    <>
        </><section c las sNa me="p y-20px-4-relative" />
          <d iv c las sNa me="r e lative max-w-7x lmx-auto">
              {pricingPlans.map((plan, index) => (
                <d iv key="{index}" c las sNa me="{`r e lative" bg-w hite/10 back drop-b lur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-c yan-400/50 shadow-2 xl shadow-c yan-500/20' 
                    : 'border-w hite/20 hover: border-c yan-400/30'
                }`} />
                  {plan.popular && (
                    <d iv c las sNa me="a b solute -t op-4 l eft-1/2transform-tran slate-x-1/2">
                      <d iv c las sNa me="b g-g radient-to-r from-c yan-500 to-p urp le-600 t ext-w hit-e px-6 py-2 rounded-fulltext-smfo-n-t-semibold"  />Most Popular
                      </d iv>
                  )}
                  <d iv c las sNa me="t e xt-c entermb-8">
                    <h3 c las sNa me="t e xt-2 xl font-bold t ext-w hit-e mb-2"   />{plan.name}</h3>
                    <p c las sNa me="t e xt-g ray-300 mb-4">
              {plan.description}</p>
                    <d iv c las sNa me="f l ex items-base lin ejusti fy-c enter">
                      <s pan c las sNa me="t e xt-5 x lfont-bold t ext-w hit-e"   />{plan.price}</s pan>
                      <s pan c las sNa me="t e xt-g ray-400ml-2"   />{plan.period}</s pan>
                    </d iv>
                  <ul c las sNa me="s p ace-y-4mb-8" />
                    {plan.f eat ures.map((f eat ure, f eat ureIndex) => (
                      <li key="{f eat ureIndex}" c las sNa me="f l ex items-c enters pace-x-3" />
                        <CheckCircle c las sNa me="w-5 h-5t e xt-g reen-400f lex-s hrink-0" />
                        <s pan c las sNa me="t e xt-g ray-300"   />{f eat ure}</s pan>                      </li>
    </>
                    ))}
                  </ul>
                  <Link 
                    to="/cont act" 
                    c las sNa me="{`b lock" w-full t ext-c ente-r py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-g radient-to-r from-c yan-500 to-p urp le-600 t ext-w hit-e hover:from-c yan-600 hover:to-p urp le-700'
                        : 'border-2 border-c yan-400 t ext-c ya-n-400 hover: bg-c yan-400 hover:t ext-g ra-y-900'
                    }`}
                    />Get Started
    <>
                  </Link>
                </d iv>
    </>
              ))}
    <>
            </d iv>
        </section>
    </>
        {/* C TA Section */}
    <>
        </><section c las sNa me="p y-20px-4-relative" />
          <d iv c las sNa me="a b solute inset-0 bg-g radient-to-r from-c yan-500/10via-p urp le-500/10to-p ink-500/10" / />
          <d iv c las sNa me="r e lative max-w-7 x lmx-auto text-c ente-r">
        </d iv>
            <d iv c las sNa me="b g-g radient-to-r from-c yan-600 via-p urp le-600 to-p ink-600 rounded-3 xl p-8sm:p-12lg:p-16">
        </d iv>
              <h2 c las sNa me="t e xt-4 xl sm:t ext-5 xl md:t ext-6 xl font-bold t ext-w hit em-b-6leading-tight" />
                Ready to Optimize Y our <s pan c las sNa me="b g-g radient-to-r from-c yan-300 to-p ink-300bg-clip-t exttext-transpare-n-t">Server Infrastructure?</s pan>              </h2>
    </>
              <p c las sNa me="t e xt-xl sm:t ext-2 xl t ext-w hit-e/90 mb-8 sm:mb-12 max-w-4 x lmx-autoleading-relaxed">
              Let our expe rt team manage your servers so you can focus on your business. 
                Get started with our professional server management serv ices today.
              </p>
              <d iv c las sNa me="f l ex f lex-c ol sm:f lex-rowg ap-6j ustify-c enter">
                <Link to="/cont act" c las sNa me="g roup bg-w hite t ext-c ya-n-600 px-10 py-4 rounded-xl font-bold t ext-l-g hover:bg-g ray-100 transition-all duration-300 f lex items-c enter j ustify-c enter s pace-x-2 shadow-lg hover:shadow-xltr ansformhover:scale-105" >
          <s pan    />
        </Link>Get Started</s pan>
                  <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
                </Link>
                <Link to="/pricing" c las sNa me="g roup border-2 border-w hite t ext-w hit-e px-10 py-4 rounded-xl font-bold t ext-l-g hover:bg-w hite/10 transition-all duration-300 f lex items-c enter j ustify-c enters pace-x-2back drop-b lur-sm" >
          <s pan    />
        </Link>View Pricing</s pan>                  <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
                </Link>
              </d iv>
          </d iv>
        </section>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
      </d iv>
    </>
  )
}
export default ServerManagementPage;
    </>