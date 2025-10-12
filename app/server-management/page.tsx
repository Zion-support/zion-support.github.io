import { Helmet } from 'react-helmet-async'
import { Server, Shield, Zap, Bar Chart3, CheckCircle, ArrowRight, Clock, Users, Database } from 'lucide-react';
import { Link } from 'react-router-dom'
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Server Management Page: React.F C = () => {
  const features = [
    {
      icon: <S erver class Name="w-6h-6t ext-cyan-400" />,
      title: '24/7 Server Monitoring',
      description: 'Continuous monitoring of server performance, uptime, and health with instant alerts.'
    },
    {
      icon: <S hield class Name="w-6h-6t ext-emerald-400" />,
      title: 'Advanced Security',
      description: 'Comprehensive security measures including firewalls, intrusion detection, and threat prevention.'
    },
    {
      icon: <Z ap class Name="w-6h-6t ext-purple-400" />,
      title: 'Performance Optimization',
      description: 'Automatic optimization of server resources for maximum performance and efficiency.'
    },
    {
      icon: <B ar Chart3 class Name="w-6h-6t ext-orange-400" />,
      title: 'Analytics & Reporting',
      description: 'Detailed analytics and reports on server performance, usage patterns, and trends.'
    },
    {
      icon: <C lock class Name="w-6h-6t ext-pink-400" />,
      title: 'Automated Backups',
      description: 'Regular automated backups with point-in-time recovery and disaster recovery planning.'
    },
    {
      icon: <U sers class Name="w-6h-6t ext-blue-400" />,
      title: 'Expert Support',
      description: '24/7 expert support from certified server administrators and engineers.'
    }
  ]

  const services = [
    {
      icon: <S erver class Name="w-8h-8t ext-cyan-400" />,
      title: 'Server Setup & Configuration',
      description: 'Complete server setup, configuration, and optimization for your specific needs.',
      features: ['O S installation', 'Software configuration', 'Security hardening', 'Performance tuning']
    },
    {
      icon: <S hield class Name="w-8h-8t ext-emerald-400" />,
      title: 'Security Management',
      description: 'Comprehensive security management including firewalls, antivirus, and threat monitoring.',
      features: ['Firewall configuration', 'Antivirus setup', 'Intrusion detection', 'Security audits']
    },
    {
      icon: <Z ap class Name="w-8h-8t ext-purple-400" />,
      title: 'PerformanceMonitoring',
      description: 'Real-time monitoring and optimization of server performance and resource usage.',
      features: ['C PU monitoring', 'Memory tracking', 'Disk usage', 'Network analysis']
    },
    {
      icon: <D atabase class Name="w-8h-8t ext-orange-400" />,
      title: 'Database Management',
      description: 'Expert database administration, optimization, and maintenance services.',
      features: ['Database optimization', 'Query tuning', 'Backup management', 'Replication setup']
    }
  ]

  const pricing Plans = [
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
        'S LA guarantee'
      ],
      popular: false
    }
  ]

  return (

      <H elmet>
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>Server Management - Professional Server Administration | Zion Tech Group</t itle>
        <m eta name="description" content="Professional server management services including monitoring, security, optimization, and 24/7 support. Keep your servers running at peak performance." / / />
        <m eta name="keywords" content="server management, server administration, server monitoring, server security, I T infrastructure, server optimization" / / />
        <l ink rel="canonical" href="https://ziontechgroup.com/server-management" />
      </H elmet>

      <d iv class Name="m in-h-screenbg-gray-900text-white">
        </d iv>
        {/* Hero Section */}

        <s ection class Name="r elative py-20px-4overflow-hidden" />
          <d iv class Name="a bsolute inset-0 bg-gradient-to-rfrom-cyan-500/10to-purple-500/10" / />
          <d iv class Name="r elative max-w-7 xlmx-autotext-center">
        </d iv>
            <d iv class Name="i nline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30">
        </d iv>
              <S erver class Name="w-4h-4" / />
              <s pan>Server Management</s pan>
            </d iv>

            <h1 c lass Name="t ext-4 xl sm:text-6 xl md:text-7 xl font-bold text-whitemb-8leading-tight" />
              Professional <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Server Management</s pan>
            </h1>

            <p c lass Name="t ext-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
              Keep your servers running at peak performance with our comprehensive management services. 
              Monitoring, security, optimization, and 24/7 expert support.
            </p>

            <d iv class Name="f lex flex-col sm:flex-row gap-6justify-centermb-16">
        </d iv>
              <L ink to="/contact" class Name="g roup bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
                <s pan>Get Started</s pan>
                <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
              </L ink>
              <L ink to="/demo" class Name="g roup border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                <s pan>View Demo</s pan>
                <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
              </L ink>
            </d iv>
        </s ection>

        {/* Features Section */}

        <s ection class Name="p y-20px-4relative" />
          <d iv class Name="a bsolute inset-0 bg-gradient-to-br from-purple-500/5via-cyan-500/5to-pink-500/5" / />
          <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                Comprehensive <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Server Management</s pan>
              </h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto" />

                Everything you need to keep your servers secure, optimized, and running smoothly.

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>
              {features.map((feature, index) => (

                <d iv key="{index}" class Name="g roup bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                  <d iv class Name="f lex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                  </d iv>
                  <h3 c lass Name="t ext-2 xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{feature.title}
                  </h3>
                  <p c lass Name="t ext-gray-300leading-relaxed" />

                    {feature.description}

                  </p>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Services Section */}

        <s ection class Name="p y-20 px-4 bg-gradient-to-br from-slate-800/50to-purple-900/50relative" />
          <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                Our <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Services</s pan>
              </h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto" />

                Professional server management services tailored to your business needs.

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1md:grid-cols-2gap-8">
        </d iv>
              {services.map((service, index) => (

                <d iv key="{index}" class Name="g roup bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                  <d iv class Name="f lex items-centerspace-x-4mb-6">
        </d iv>
                    <d iv class Name="f lex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl group-hover:scale-110transition-transformduration-300">{service.icon}
                    </d iv>
                    <h3 c lass Name="t ext-2 xl font-bold text-whitegroup-hover:text-cyan-400transition-colors">{service.title}
                    </h3>
                  </d iv>
                  <p c lass Name="t ext-gray-300mb-6leading-relaxed" />

                    {service.description}

                  </p>
                  <d iv class Name="s pace-y-2">
        </d iv>

                    {service.features.map((feature, feature Index) => (

                      <d iv key="{feature Index}" class Name="f lex items-center space-x-2text-gray-400text-sm" />
                        <C heck Circle class Name="w-4h-4t ext-green-400" / />
                        <s pan>{feature}</s pan>
                      </d iv>

                    ))}

                  </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Pricing Section */}

        <s ection class Name="p y-20px-4relative" />
          <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                Flexible <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Pricing</s pan>
              </h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-3xlmx-auto" />

                Choose the plan that fits your server infrastructure needs. All plans include 24/7 support.

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1md:grid-cols-3gap-8">
        </d iv>
              {pricing Plans.map((plan, index) => (
                <d iv key="{index}" class Name="{`r elative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2 xl shadow-cyan-500/20' 
                    : 'border-white/20 hover: border-cyan-400/30'
                }`} />
                  {plan.popular && (

                    <d iv class Name="a bsolute -top-4 left-1/2transform-translate-x-1/2">
        </d iv>
                      <d iv class Name="b g-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold">Most Popular
                      </d iv>

                  )}

                  <d iv class Name="t ext-centermb-8">
        </d iv>
                    <h3 c lass Name="t ext-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                    <p c lass Name="t ext-gray-300mb-4">{plan.description}</p>
                    <d iv class Name="f lexitems-baselinejustify-center" />
                      <s pan class Name="t ext-5 xlfont-boldtext-white">{plan.price}</s pan>
                      <s pan class Name="t ext-gray-400ml-2">{plan.period}</s pan>
                    </d iv>

                  <u l class Name="s pace-y-4mb-8" />
                    {plan.features.map((feature, feature Index) => (

                      <l i key="{feature Index}" class Name="f lexitems-centerspace-x-3" />
                        <C heck Circle class Name="w-5 h-5t ext-green-400flex-shrink-0" / />
                        <s pan class Name="t ext-gray-300">{feature}</s pan>
                      </l i>

                    ))}
                  </u l>
                  
                  <L ink 
                    to="/contact" 
                    class Name="{`b lock" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                    }`}
                    />Get Started

                  </L ink>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* C TA Section */}

        <s ection class Name="p y-20px-4relative" />
          <d iv class Name="a bsolute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" / />
          <d iv class Name="r elative max-w-7 xlmx-autotext-center">
        </d iv>
            <d iv class Name="b g-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8sm:p-12lg:p-16">
        </d iv>
              <h2 c lass Name="t ext-4 xl sm:text-5 xl md:text-6 xl font-bold text-whitemb-6leading-tight" />
                Ready to Optimize Your <s pan class Name="b g-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent">Server Infrastructure?</s pan>
              </h2>

              <p c lass Name="t ext-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">
                Let our expert team manage your servers so you can focus on your business. 
                Get started with our professional server management services today.
              </p>

              <d iv class Name="f lex flex-col sm:flex-rowgap-6justify-center">
        </d iv>
                <L ink to="/contact" class Name="g roup bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                  <s pan>Get Started</s pan>
                  <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
                </L ink>
                <L ink to="/pricing" class Name="g roup border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                  <s pan>View Pricing</s pan>
                  <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
                </L ink>
              </d iv>
          </d iv>
        </s ection>
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

  )
}

export default Server Management Page;
