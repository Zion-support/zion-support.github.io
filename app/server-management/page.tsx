<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
import React from 'react';
import { Helmet } from 'react-helmet-async'
import { Server, Shield, Zap, BarChart3, CheckCircle, ArrowRight, Clock, Users, Database } from 'lucide-react'
import { Link } from 'react-router-dom'
export default ServerManagementPage;
const ServerManagementPage: React.FC = () => {
  const features = [
    {
      icon: <Server className="w-5h-5ml-2" />,
      title: '24/7 Server Monitoring',
      description: 'Continuous monitoring of server performance, uptime, and health with instant alerts.'
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'Advanced Security',
      description: 'Comprehensive security measures including firewalls, intrusion detection, and threat prevention.'
    },
    {
      icon: <Zap className="w-5h-5ml-2" />,
      title: 'Performance Optimization',
      description: 'Automatic optimization of server resources for maximum performance and efficiency.'
    },
    {
      icon: <BarChart3 className="w-5h-5ml-2" />,
      title: 'Analytics & Reporting',
      description: 'Detailed analytics and reports on server performance, usage patterns, and trends.'
    },
    {
      icon: <Clock className="w-5h-5ml-2" />,
      title: 'Automated Backups',
      description: 'Regular automated backups with point-in-time recovery and disaster recovery planning.'
    },
    {
      icon: <Users className="w-5h-5ml-2" />,
      title: 'Expert Support',
      description: '24/7 expert support from certified server administrators and engineers.'
    }
  ]
  const services = [
    {
      icon: <Server className="w-5h-5ml-2" />,
      title: 'Server Setup & Configuration',
      description: 'Complete server setup, configuration, and optimization for your specific needs.',
      features: ['OS installation', 'Software configuration', 'Security hardening', 'Performance tuning']
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'Security Management',
      description: 'Comprehensive security management including firewalls, antivirus, and threat monitoring.',
      features: ['Firewall configuration', 'Antivirus setup', 'Intrusion detection', 'Security audits']
    },
    {
      icon: <Zap className="w-5h-5ml-2" />,
      title: 'Performance Monitoring',
      description: 'Real-time monitoring and optimization of server performance and resource usage.',
      features: ['CPU monitoring', 'Memory tracking', 'Disk usage', 'Network analysis']
    },
    {
      icon: <Database className="w-5h-5ml-2" />,
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
      ],;
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
    {
      name: 'Enterprise',
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
    <div>Content</div>
  );
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function ServerManagementPage() {
  return (
    <div>Content</div>
  );
    <div>Component content</div>
  );
}
  return (
    <div>Content</div>
  );
    <>
      <Helmet >
        <title>Server Management - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Professional server management services by Zion Tech Group. Transform your business with our expert solutions." />
=======
        <meta name = "description" content="Professional server management by Zion Tech Group. Transform your business with our expert solutions." />
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Server Management</h1>
<<<<<<< HEAD
          <p className="text-lg text-gray-300 mb-8">Professional server management services coming soon.</p>
          <Link
=======
          <p className="text-lg text-gray-300 mb-8">Professional server management coming soon.</p>
          <Link >
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>;
  );
}
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
    <></>
      <Helmet></Helmet>
        <title />Server Management - Professional Server Administration | Zion Tech Group</title>
        <meta name = "description" content="Professional server management services including monitoring, security, optimization, and 24/7 support. Keep your servers running at peak performance." /></meta>
        <meta name="keywords" content="server management, server administration, server monitoring, server security, IT infrastructure, server optimization" /></meta>
        <link rel="canonical" href="https://ziontechgroup.com/server-management"  /></link>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        {/* Hero Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <Server className="w-5h-5ml-2" /></Server>
              <span />Server Management</span>
            </div>
            <h1 className="w-5h-5ml-2" /></h1>
              Professional <span className="w-5h-5ml-2" />Server Management</span>
            </h1>
            <p className="w-5h-5ml-2">Keep your servers running at peak performance with our comprehensive management services. 
              Monitoring, security, optimization, and 24/7 expert support.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" /></Link>
                <span />Get Started</span>
                <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
              </Link>
              <Link to="/demo" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" /></Link>
                <span />View Demo</span>
                <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
              </Link>
            </div>
        </section>
        {/* Features Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2" /></h2>
                Comprehensive <span className="w-5h-5ml-2" />Server Management</span>
              </h2>
              <p className="w-5h-5ml-2">Everything you need to keep your servers secure, optimized, and running smoothly.
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" /></div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{feature.icon}
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
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2" /></h2>
                Our <span className="w-5h-5ml-2" />Services</span>
              </h2>
              <p className="w-5h-5ml-2">Professional server management services tailored to your business needs.
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {services.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300hover:scale-105" /></div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{service.icon}
                    </div>
                    <h3 className="w-5h-5ml-2" />{service.title}
                    </h3>
                  </div>
                  <p className="w-5h-5ml-2">{service.description}
                  </p>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2text-gray-400text-sm" /></div>
                        <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                        <span />{feature}</span>
                      </div>
                    ))}
                  </div>
              ))}
            </div>
        </section>
        {/* Pricing Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2" /></h2>
                Flexible <span className="w-5h-5ml-2" />Pricing</span>
              </h2>
              <p className="w-5h-5ml-2">Choose the plan that fits your server infrastructure needs. All plans include 24/7 support.
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {pricingPlans.map((plan, index) => (
                <div key={index} className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${                }`} /></div>;
                  plan.popular;
                    ? 'border-cyan-400/50 shadow-2 xl shadow-cyan-500/20' 
                    : 'border-white/20 hover: border-cyan-400/30'
                  {plan.popular && (
                    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>;
                      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Most Popular;
                      </div>
                  )}
                  <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                    <p className="w-5h-5ml-2">{plan.description}</p>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <span className="w-5h-5ml-2" />{plan.price}</span>
                      <span className="w-5h-5ml-2" />{plan.period}</span>
                    </div>
                  <ul className="w-5h-5ml-2" /></ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-centerspace-x-3" /></li>
                        <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                        <span className="w-5h-5ml-2" />{feature}</span>
                      </li>
                    ))}
                  </ul>;
                  <Link;</Link></Link>
                    to = "/contact" 
                    className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${;
                      plan.popular;
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                    }`}
                    />Get Started;
                  </Link>
                </div>
              ))}
            </div>
        </section>
        {/* CTA Section */}
        <section className = "w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2" /></h2>
                Ready to Optimize Your <span className="w-5h-5ml-2" />Server Infrastructure?</span>
              </h2>
              <p className="w-5h-5ml-2">Let our expert team manage your servers so you can focus on your business. 
                Get started with our professional server management services today.
              </p>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" /></Link>
                  <span />Get Started</span>
                  <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
                </Link>
                <Link to="/pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" /></Link>
                  <span />View Pricing</span>
                  <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
                </Link>
              </div>
          </div>
        </section>
      </div>
    </>
  )
};
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
