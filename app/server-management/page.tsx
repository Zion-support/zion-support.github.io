<<<<<<< HEAD
import { Helmet } from 'react-helmet-async'
import { Server, Shield, Zap, BarChart3, CheckCircle, ArrowRight, Clock, Users, Database } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react';
import { ArrowRight } from 'lucide-react';
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
const ServerManagementPage: React.FC = () => {
  const features = [
    {
      icon: <Server className="w-5 h-5ml-2" />,
      title: '24/7 Server Monitoring',
      description: 'Continuous monitoring of server performance, uptime, and health with instant alerts.'
    },
    {
      icon: <Shield className="w-5 h-5ml-2" />,
      title: 'Advanced Security',
      description: 'Comprehensive security measures including firewalls, intrusion detection, and threat prevention.'
    },
    {
      icon: <Zap className="w-5 h-5ml-2" />,
      title: 'Performance Optimization',
      description: 'Automatic optimization of server resources for maximum performance and efficiency.'
    },
    {
      icon: <BarChart3 className="w-5 h-5ml-2" />,
      title: 'Analytics & Reporting',
      description: 'Detailed analytics and reports on server performance, usage patterns, and trends.'
    },
    {
      icon: <Clock className="w-5 h-5ml-2" />,
      title: 'Automated Backups',
      description: 'Regular automated backups with point-in-time recovery and disaster recovery planning.'
    },
    {
      icon: <Users className="w-5 h-5ml-2" />,
      title: 'Expert Support',
      description: '24/7 expert support from certified server administrators and engineers.'
    }
  ]

  const services = [
    {
      icon: <Server className="w-5 h-5ml-2" />,
      title: 'Server Setup & Configuration',
      description: 'Complete server setup, configuration, and optimization for your specific needs.',
      features: ['OS installation', 'Software configuration', 'Security hardening', 'Performance tuning']
    },
    {
      icon: <Shield className="w-5 h-5ml-2" />,
      title: 'Security Management',
      description: 'Comprehensive security management including firewalls, antivirus, and threat monitoring.',
      features: ['Firewall configuration', 'Antivirus setup', 'Intrusion detection', 'Security audits']
    },
    {
      icon: <Zap className="w-5 h-5ml-2" />,
      title: 'Performance Monitoring',
      description: 'Real-time monitoring and optimization of server performance and resource usage.',
      features: ['CPU monitoring', 'Memory tracking', 'Disk usage', 'Network analysis']
    },
    {
      icon: <Database className="w-5 h-5ml-2" />,
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
      popular: false
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
      popular: true
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
      popular: false
    }
  ]

  return (
    <>
      <Helmet>
        <title />Server Management - Professional Server Administration | Zion Tech Group</title>
        <meta name="description" content="Professional server management services including monitoring, security, optimization, and 24/7 support. Keep your servers running at peak performance." />
        <meta name="keywords" content="server management, server administration, server monitoring, server security, IT infrastructure, server optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/server-management"  />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <Server className="w-5 h-5ml-2" />
              <span />Server Management</span>
            </div>
            
            <h1 className="w-5 h-5ml-2" />
              Professional <span className="w-5 h-5ml-2" />Server Management</span>
            </h1>
            
            <p className="w-5 h-5ml-2">Keep your servers running at peak performance with our comprehensive management services. 
              Monitoring, security, optimization, and 24/7 expert support.
            </p>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
                <span />Get Started</span>
                <ArrowRight className="w-5 h-5ml-2" />
              </Link>
              <Link to="/demo" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                <span />View Demo</span>
                <ArrowRight className="w-5 h-5ml-2" />
              </Link>
            </div>
        </section>

        {/* Features Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />
                Comprehensive <span className="w-5 h-5ml-2" />Server Management</span>
              </h2>
              <p className="w-5 h-5ml-2">Everything you need to keep your servers secure, optimized, and running smoothly.
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {features.map((feature, index) => (
                <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{feature.icon}
                  </div>
                  <h3 className="w-5 h-5ml-2" />{feature.title}
                  </h3>
                  <p className="w-5 h-5ml-2">{feature.description}
                  </p>
                </div>
              ))}
            </div>
        </section>

        {/* Services Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />
                Our <span className="w-5 h-5ml-2" />Services</span>
              </h2>
              <p className="w-5 h-5ml-2">Professional server management services tailored to your business needs.
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {services.map((service, index) => (
                <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{service.icon}
                    </div>
                    <h3 className="w-5 h-5ml-2" />{service.title}
                    </h3>
                  </div>
                  <p className="w-5 h-5ml-2">{service.description}
                  </p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    {service.features.map((feature, featureIndex) => (
                      <div key="{featureIndex}" className="flex items-center space-x-2text-gray-400text-sm" />
                        <CheckCircle className="w-5 h-5ml-2" />
                        <span />{feature}</span>
                      </div>
                    ))}
                  </div>
              ))}
            </div>
        </section>

        {/* Pricing Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />
                Flexible <span className="w-5 h-5ml-2" />Pricing</span>
              </h2>
              <p className="w-5 h-5ml-2">Choose the plan that fits your server infrastructure needs. All plans include 24/7 support.
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {pricingPlans.map((plan, index) => (
                <div key="{index}" className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2 xl shadow-cyan-500/20' 
                    : 'border-white/20 hover: border-cyan-400/30'
                }`} />
                  {plan.popular && (
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">Most Popular
                      </div>
                  )}
                  
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <h3 className="w-5 h-5ml-2" />{plan.name}</h3>
                    <p className="w-5 h-5ml-2">{plan.description}</p>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                      <span className="w-5 h-5ml-2" />{plan.price}</span>
                      <span className="w-5 h-5ml-2" />{plan.period}</span>
                    </div>
                  
                  <ul className="w-5 h-5ml-2" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="flex items-centerspace-x-3" />
                        <CheckCircle className="w-5 h-5ml-2" />
                        <span className="w-5 h-5ml-2" />{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                    }`}
                    />Get Started
                  </Link>
                </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />
                Ready to Optimize Your <span className="w-5 h-5ml-2" />Server Infrastructure?</span>
              </h2>
              
              <p className="w-5 h-5ml-2">Let our expert team manage your servers so you can focus on your business. 
                Get started with our professional server management services today.
              </p>
              
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                  <span />Get Started</span>
                  <ArrowRight className="w-5 h-5ml-2" />
                </Link>
                <Link to="/pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                  <span />View Pricing</span>
                  <ArrowRight className="w-5 h-5ml-2" />
                </Link>
              </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ServerManagementPage;
=======
export default function ServerManagement() {
  return (
    <>
      <Helmet>
        <title>ServerManagement - Zion Tech Group</title>
        <meta name="description" content="Professional servermanagement services by Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">ServerManagement</h1>
            <p className="text-lg text-gray-300 mb-8">Professional servermanagement services coming soon.</p>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
