import React from 'react'
import { Helmet } from 'react-helmet-async'
import {}
  Server,
  Shield,
  Cloud,
  Database,
  Code,
  Network,
  Settings,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Rocket,
  Users,
  Clock
} from 'lucide-react'
const ITServicesPage: React.FC = () => {}
}const itServices = []
    {}
      id: 'cloud-infrastructure-management',
      name: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud solutions with auto-scaling, monitoring, and security compliance',
      price: '$199/month',
      features: []
        'Auto-scaling Infrastructure',
        '99.9% Uptime Guarantee',
        '24/7 Monitoring',
        'Security Compliance',
        'Backup & Recovery',
        'Cost Optimization'
      ],
      benefits: []
        'Reduce infrastructure costs by 30%',
        'Improve system reliability',
        'Scale automatically with demand'
      ],
      popular: true,
      rating: 4.8,
      clients: 180,
      icon: Cloud,
      category: 'Infrastructure'
    },
    {}
      id: 'cybersecurity-suite',
      name: 'Advanced Cybersecurity Suite',
      description: 'Enterprise-grade security monitoring and protection with real-time threat detection',
      price: '$499/month',
      features: []
        'Threat Detection & Response',
        'Real-time Security Monitoring',
        'Compliance Reporting',
        'Incident Response',
        'Security Training',
        'Penetration Testing'
      ],
      benefits: []
        'Prevent 99.9% of cyber attacks',
        'Meet compliance requirements',
        'Reduce security incidents by 95%'
      ],
      popular: true,
      rating: 4.9,
      clients: 100,
      icon: Shield,
      category: 'Security'
    },
    {}
      id: 'devops-automation-platform',
      name: 'DevOps Automation Platform',
      description: 'Complete CI/CD pipeline automation with monitoring, testing, and deployment management',
      price: '$349/month',
      features: []
        'CI/CD Pipeline Automation',
        'Automated Testing',
        'Deployment Management',
        'Performance Monitoring',
        'Rollback Capabilities',
        'Team Collaboration Tools'
      ],
      benefits: []
        'Deploy 10x faster',
        'Reduce deployment errors by 90%',
        'Improve team productivity by 60%'
      ],
      popular: false,
      rating: 4.7,
      clients: 90,
      icon: Code,
      category: 'DevOps'
    },
    {}
      id: 'database-solutions',
      name: 'Database Management Solutions',
      description: 'Advanced database administration with optimization, backup, and performance monitoring',
      price: '$279/month',
      features: []
        'Database Optimization',
        'Automated Backups',
        'Performance Monitoring',
        'Query Optimization',
        'Security Hardening',
        'Disaster Recovery'
      ],
      benefits: []
        'Improve query performance by 80%',
        'Ensure data integrity',
        'Reduce downtime by 95%'
      ],
      popular: false,
      rating: 4.6,
      clients: 70,
      icon: Database,
      category: 'Database'
    },
    {}
      id: 'network-infrastructure',
      name: 'Network Infrastructure Services',
      description: 'Comprehensive network design, implementation, and management for enterprise environments',
      price: '$229/month',
      features: []
        'Network Design & Planning',
        'Wireless Solutions',
        'VPN Configuration',
        'Load Balancing',
        'Network Monitoring',
        'Performance Optimization'
      ],
      benefits: []
        'Improve network performance by 50%',
        'Reduce connectivity issues',
        'Enhance security posture'
      ],
      popular: false,
      rating: 4.5,
      clients: 85,
      icon: Network,
      category: 'Networking'
    },
    {}
      id: 'it-consulting',
      name: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting to align technology with business objectives and digital transformation',
      price: '$150/hour',
      features: []
        'IT Strategy Development',
        'Technology Assessment',
        'Digital Transformation',
        'Vendor Management',
        'Project Planning',
        'Change Management'
      ],
      benefits: []
        'Align IT with business goals',
        'Reduce technology costs',
        'Accelerate digital transformation'
      ],
      popular: false,
      rating: 4.8,
      clients: 120,
      icon: Settings,
      category: 'Consulting'
    };
  ];

  // const categories = ['All', 'Infrastructure', 'Security', 'DevOps', 'Database', 'Networking', 'Consulting'];

  const stats = [
    { number: '500+', label: 'Infrastructure Projects', icon: Server },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '4.8/5', label: 'Client Rating', icon: Star }
  ]
  return ()
    <div</div>>
      <Helmet</Helmet>>
        <titl</titl>e>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, DevOps, and database management. Enterprise-grade solutions for modern businesses." /</meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, DevOps, and database management. Enterprise-grade solutions for modern businesses." />>
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, DevOps, database management, network services, IT consulting" /</meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, DevOps, database management, network services, IT consulting" />>
      </Helmet>
      {/* Hero Section */}
      <section className="py-20"</section className="py-20">>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"</div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">>
          <div className="text-center"</div className="text-center">>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"</h1 className="text-4xl md:text-6xl font-bold text-white mb-6">>
              IT Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"</span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">>
                Enterprise-Grade Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"</p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">>
              Comprehensive IT services designed to optimize your technology infrastructure, enhance security,
              and drive digital transformation. From cloud migration to cybersecurity, we&apos;ve got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"</div className="flex flex-col sm:flex-row gap-4 justify-center">>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              </Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >>
                Get IT Consultation
                <ArrowRight className="ml-2 w-5 h-5" /</ArrowRight className="ml-2 w-5 h-5" />>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              </Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >>
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50"</section className="py-16 bg-slate-800/50">>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"</div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"</div className="grid grid-cols-2 md:grid-cols-4 gap-8">>
            {stats.map((stat, index) => ()
              <div key={index} className="text-center"</div key={index} className="text-center">>
                <div className="flex justify-center mb-4"</div className="flex justify-center mb-4">>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center"</div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">>
                    <stat.icon className="w-8 h-8 text-white" /</stat.icon className="w-8 h-8 text-white" />>
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2"</div className="text-3xl font-bold text-white mb-2">>{stat.number}</div>
                <div className="text-gray-300"</div className="text-gray-300">>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* IT Services Grid */}
      <section className="py-20"</section className="py-20">>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"</div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">>
          <div className="text-center mb-16"</div className="text-center mb-16">>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"</h2 className="text-3xl md:text-4xl font-bold text-white mb-4">>
              Our IT Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"</p className="text-xl text-gray-300 max-w-3xl mx-auto">>
              Choose from our comprehensive range of IT services designed to modernize your infrastructure,
              enhance security, and optimize performance across all technology platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">>
            {itServices.map((service) => ()
              <div key={service.id} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${}
                service.popular
                  ? 'border-purple-500/60 ring-2 ring-purple-500/20'
                  : 'border-purple-500/20 hover:border-purple-500/40'
              }`}</div key={service.id} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${}
                service.popular
                  ? 'border-purple-500/60 ring-2 ring-purple-500/20'
                  : 'border-purple-500/20 hover:border-purple-500/40'
              }`}>>
                {service.popular && ()
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"</div className="absolute -top-3 left-1/2 transform -translate-x-1/2">>
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold"</span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">>
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6"</div className="mb-6">>
                  <div className="flex items-center justify-between mb-4"</div className="flex items-center justify-between mb-4">>
                    <div className="flex items-center space-x-3"</div className="flex items-center space-x-3">>
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center"</div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">>
                        <service.icon className="w-6 h-6 text-white" /</service.icon className="w-6 h-6 text-white" />>
                      </div>
                      <div</div>>
                        <h3 className="text-xl font-semibold text-white"</h3 className="text-xl font-semibold text-white">>{service.name}</h3>
                        <span className="text-sm text-purple-400"</span className="text-sm text-purple-400">>{service.category}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1"</div className="flex items-center space-x-1">>
                      <Star className="w-4 h-4 text-yellow-400 fill-current" /</Star className="w-4 h-4 text-yellow-400 fill-current" />>
                      <span className="text-sm text-gray-300"</span className="text-sm text-gray-300">>{service.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4"</p className="text-gray-300 mb-4">>{service.description}</p>
                  <div className="flex items-center justify-between mb-4"</div className="flex items-center justify-between mb-4">>
                    <div className="text-2xl font-bold text-white"</div className="text-2xl font-bold text-white">>{service.price}</div>
                    <div className="text-sm text-gray-400"</div className="text-sm text-gray-400">>{service.clients} clients</div>
                  </div>
                </div>
                <div className="space-y-4 mb-8"</div className="space-y-4 mb-8">>
                  <h4 className="text-white font-semibold"</h4 className="text-white font-semibold">>Key Features:</h4>
                  <ul className="space-y-2"</ul className="space-y-2">>
                    {service.features.slice(0, 4).map((feature, index) => ()
                      <li key={index} className="flex items-center text-gray-300 text-sm"</li key={index} className="flex items-center text-gray-300 text-sm">>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /</CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4 mb-8"</div className="space-y-4 mb-8">>
                  <h4 className="text-white font-semibold"</h4 className="text-white font-semibold">>Business Impact:</h4>
                  <ul className="space-y-2"</ul className="space-y-2">>
                    {service.benefits.map((benefit, index) => ()
                      <li key={index} className="text-gray-300 text-sm"</li key={index} className="text-gray-300 text-sm">>
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3"</div className="space-y-3">>
                  <Link
                    to={`/service/${service.id}`}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${}
                      service.popular
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600'
                        : 'border border-purple-500 text-purple-300 hover:bg-purple-500/10'
                    }`}
                  </Link
                    to={`/service/${service.id}`}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${}
                      service.popular
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600'
                        : 'border border-purple-500 text-purple-300 hover:bg-purple-500/10'
                    }`}
                  >>
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" /</ArrowRight className="ml-2 w-4 h-4" />>
                  </Link>
                  <a
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
                  </a
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
                  >>
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* IT Capabilities Section */}
      <section className="py-20 bg-slate-800/30"</section className="py-20 bg-slate-800/30">>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"</div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">>
          <div className="text-center mb-16"</div className="text-center mb-16">>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"</h2 className="text-3xl md:text-4xl font-bold text-white mb-4">>
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"</p className="text-xl text-gray-300 max-w-3xl mx-auto">>
              Our IT solutions are built on enterprise-grade technology and designed to deliver reliable,
              scalable, and secure infrastructure for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">>
            <div className="text-center"</div className="text-center">>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6"</div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">>
                <Server className="w-8 h-8 text-white" /</Server className="w-8 h-8 text-white" />>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4"</h3 className="text-xl font-semibold text-white mb-4">>Enterprise-Grade Infrastructure</h3>
              <p className="text-gray-300"</p className="text-gray-300">>
                Robust, scalable infrastructure solutions designed to handle enterprise workloads and growth.
              </p>
            </div>
            <div className="text-center"</div className="text-center">>
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"</div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">>
                <Shield className="w-8 h-8 text-white" /</Shield className="w-8 h-8 text-white" />>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4"</h3 className="text-xl font-semibold text-white mb-4">>Advanced Security</h3>
              <p className="text-gray-300"</p className="text-gray-300">>
                Multi-layered security approach with continuous monitoring and threat protection.
              </p>
            </div>
            <div className="text-center"</div className="text-center">>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"</div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">>
                <Zap className="w-8 h-8 text-white" /</Zap className="w-8 h-8 text-white" />>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4"</h3 className="text-xl font-semibold text-white mb-4">>24/7 Monitoring</h3>
              <p className="text-gray-300"</p className="text-gray-300">>
                Round-the-clock monitoring and support to ensure maximum uptime and performance.
              </p>
            </div>
            <div className="text-center"</div className="text-center">>
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"</div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">>
                <Users className="w-8 h-8 text-white" /</Users className="w-8 h-8 text-white" />>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4"</h3 className="text-xl font-semibold text-white mb-4">>Expert Team</h3>
              <p className="text-gray-300"</p className="text-gray-300">>
                Certified IT professionals with deep expertise in modern technologies and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/20 to-cyan-500/20"</section className="py-20 bg-gradient-to-r from-purple-500/20 to-cyan-500/20">>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"</div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"</h2 className="text-3xl md:text-4xl font-bold text-white mb-6">>
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">>
            Transform your IT infrastructure with our comprehensive services. From cloud migration to
            cybersecurity, we&apos;ll help you build a robust, scalable, and secure technology foundation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"</div className="flex flex-col sm:flex-row gap-4 justify-center">>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            </a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >>
              Start Your IT Transformation
              <Rocket className="ml-2 w-5 h-5" /</Rocket className="ml-2 w-5 h-5" />>
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
            </a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
            >>
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
</div>
  )
}
export default ITServicesPage""'"'