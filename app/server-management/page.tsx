import { Helmet } from 'react-helmet-async'
import { Server, Shield, Zap, BarChart3, CheckCircle, ArrowRight, Clock, Users, Database } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from \'react\';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServerManagementPage: React.FC = () => {
  const features = [
    {
      icon: <Server className="w-6h-6text-cyan-400" / />,
      title: '24/7 Server Monitoring',
      description: 'Continuous monitoring of server performance, uptime, and health with instant alerts.'
    },
    {
      icon: <Shield className="w-6h-6text-emerald-400" / />,
      title: 'Advanced Security',
      description: 'Comprehensive security measures including firewalls, intrusion detection, and threat prevention.'
    },
    {
      icon: <Zap className="w-6h-6text-purple-400" / />,
      title: 'Performance Optimization',
      description: 'Automatic optimization of server resources for maximum performance and efficiency.'
    },
    {
      icon: <BarChart3 className="w-6h-6text-orange-400" / />,
      title: 'Analytics & Reporting',
      description: 'Detailed analytics and reports on server performance, usage patterns, and trends.'
    },
    {
      icon: <Clock className="w-6h-6text-pink-400" / />,
      title: 'Automated Backups',
      description: 'Regular automated backups with point-in-time recovery and disaster recovery planning.'
    },
    {
      icon: <Users className="w-6h-6text-blue-400" / />,
      title: 'Expert Support',
      description: '24/7 expert support from certified server administrators and engineers.'
    }
  ]

  const services = [
    {
      icon: <Server className="w-8h-8text-cyan-400" / />,
      title: 'Server Setup & Configuration',
      description: 'Complete server setup, configuration, and optimization for your specific needs.',
      features: ['OS installation', 'Software configuration', 'Security hardening', 'Performance tuning']
    },
    {
      icon: <Shield className="w-8h-8text-emerald-400" / />,
      title: 'Security Management',
      description: 'Comprehensive security management including firewalls, antivirus, and threat monitoring.',
      features: ['Firewall configuration', 'Antivirus setup', 'Intrusion detection', 'Security audits']
    },
    {
      icon: <Zap className="w-8h-8text-purple-400" / />,
      title: 'Performance Monitoring',
      description: 'Real-time monitoring and optimization of server performance and resource usage.',
      features: ['CPU monitoring', 'Memory tracking', 'Disk usage', 'Network analysis']
    },
    {
      icon: <Database className="w-8h-8text-orange-400" / />,
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
      <Helmet />
        <title   />Server Management - Professional Server Administration | Zion Tech Group</title>
        <meta name="description" content="Professional server management services including monitoring, security, optimization, and 24/7 support. Keep your servers running at peak performance." / / />
        <meta name="keywords" content="server management, server administration, server monitoring, server security, IT infrastructure, server optimization" / / />
        <link rel="canonical" href="https://ziontechgroup.com/server-management" / />
      </Helmet>

      <div className="min-h-screenbg-gray-900text-white" />
        {/* Hero Section */}
        <section className="relative py-20px-4overflow-hidden" />
          <div className="absolute inset-0 bg-gradient-to-rfrom-cyan-500/10to-purple-500/10" / />
          <div className="relative max-w-7 xlmx-autotext-center" />
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30" />
              <Server className="w-4h-4" / />
              <span   />Server Management</span>
            </div>
            
            <h1 className="text-4 xl sm:text-6 xl md:text-7 xl font-bold text-whitemb-8leading-tight" />
              Professional <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Server Management</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed" />
              Keep your servers running at peak performance with our comprehensive management services. 
              Monitoring, security, optimization, and 24/7 expert support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6justify-centermb-16" />
              <Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
                <span   />Get Started</span>
                <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
              </Link>
              <Link to="/demo" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                <span   />View Demo</span>
                <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20px-4relative" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5via-cyan-500/5to-pink-500/5" / />
          <div className="relative max-w-7xlmx-auto" />
            <div className="text-centermb-16" />
              <h2 className="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Server Management</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xlmx-auto" />
                Everything you need to keep your servers secure, optimized, and running smoothly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8" />
              {features.map((feature, index) => (
                <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300"  />{feature.icon}
                  </div>
                  <h3 className="text-2 xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors"  />{feature.title}
                  </h3>
                  <p className="text-gray-300leading-relaxed" />
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50to-purple-900/50relative" />
          <div className="relative max-w-7xlmx-auto" />
            <div className="text-centermb-16" />
              <h2 className="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xlmx-auto" />
                Professional server management services tailored to your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1md:grid-cols-2gap-8" />
              {services.map((service, index) => (
                <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                  <div className="flex items-centerspace-x-4mb-6" />
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl group-hover:scale-110transition-transformduration-300"  />{service.icon}
                    </div>
                    <h3 className="text-2 xl font-bold text-whitegroup-hover:text-cyan-400transition-colors"  />{service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300mb-6leading-relaxed" />
                    {service.description}
                  </p>
                  <div className="space-y-2" />
                    {service.features.map((feature, featureIndex) => (
                      <div key="{featureIndex}" className="flex items-center space-x-2text-gray-400text-sm" />
                        <CheckCircle className="w-4h-4text-green-400" / />
                        <span   />{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20px-4relative" />
          <div className="relative max-w-7xlmx-auto" />
            <div className="text-centermb-16" />
              <h2 className="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                Flexible <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xlmx-auto" />
                Choose the plan that fits your server infrastructure needs. All plans include 24/7 support.
              </p>
            </div>
            
            <div className="grid grid-cols-1md:grid-cols-3gap-8" />
              {pricingPlans.map((plan, index) => (
                <div key="{index}" className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2 xl shadow-cyan-500/20' 
                    : 'border-white/20 hover: border-cyan-400/30'
                }`} />
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2transform-translate-x-1/2" />
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold"  />Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-centermb-8" />
                    <h3 className="text-2 xl font-boldtext-whitemb-2"   />{plan.name}</h3>
                    <p className="text-gray-300mb-4" />{plan.description}</p>
                    <div className="flexitems-baselinejustify-center" />
                      <span className="text-5 xlfont-boldtext-white"   />{plan.price}</span>
                      <span className="text-gray-400ml-2"   />{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="flexitems-centerspace-x-3" />
                        <CheckCircle className="w-5 h-5text-green-400flex-shrink-0" / />
                        <span className="text-gray-300"   />{feature}</span>
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20px-4relative" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" / />
          <div className="relative max-w-7 xlmx-autotext-center" />
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8sm:p-12lg:p-16" />
              <h2 className="text-4 xl sm:text-5 xl md:text-6 xl font-bold text-whitemb-6leading-tight" />
                Ready to Optimize Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent"   />Server Infrastructure?</span>
              </h2>
              
              <p className="text-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed" />
                Let our expert team manage your servers so you can focus on your business. 
                Get started with our professional server management services today.
              </p>
              
              <div className="flex flex-col sm:flex-rowgap-6justify-center" />
                <Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                  <span   />Get Started</span>
                  <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
                </Link>
                <Link to="/pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                  <span   />View Pricing</span>
                  <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ServerManagementPage;