

import {};
>>>>>>> main
      Server,
      Cloud,
      Code,
      Network,
      Settings,
      CheckCircle,

const ITServicesPage: React.FC = () => {};
}const itServices  = []: value;
    {},'"'"
      id: 'cloud-infrastructure-management','"'
      name: 'Cloud Infrastructure Management','"'"
      description: 'Comprehensive cloud solutions with auto-scaling, monitoring, and security compliance','"'
      price: '$199/month',";
      features: []
        'Auto-scaling Infrastructure'"'99.9% Uptime Guarantee'"'24/7 ing'"'Security Compliance'"'Backup & Recovery'"'Cost Optimization'";
      ],

      ],
      popular: true,
      rating: 4.8,
      clients: 180,

    };
    {},'"'
      id: 'cybersecurity-suite','"'"
      name: 'Advanced Cybersecurity Suite','"'
      description: 'Enterprise-grade security monitoring and protection with real-time threat detection','"'"
      price: '$499/month',";
      features: []
        'Threat Detection & Response'"'Real-time Security ing'"'Compliance Reporting'"'Incident Response'"'Security Training'"'Penetration Testing'";
      ],

      ],
      popular: true,
      rating: 4.9,
      clients: 100,

    };
    {},'"'
      id: 'devops-automation-platform','"'"
      name: 'DevOps Automation Platform','"'
      description: 'Complete CI/CD pipeline automation with monitoring, testing, and deployment management','"'"
      price: '$349/month',";
      features: []
        'CI/CD Pipeline Automation'"'Automated Testing'"'Deployment Management'"'Performance ing'"'Rollback Capabilities'"'Team Collaboration Tools'";
      ],

      ],
      popular: false,
      rating: 4.7,
      clients: 90,

    };
    {},
      id: 'database-solutions',";
      name: 'Management Solutions',";
      description: 'Advanced database administration with optimization, backup, and performance monitoring',";
      price: '$279/month',";
      features: []
        'Optimization'"'Automated Backups'"'Performance ing'"'Query Optimization'"'Security Hardening'"'Disaster Recovery'";
      ],

      ],
      popular: false,
      rating: 4.6,
      clients: 70,

    };
    {},'"'
      id: 'network-infrastructure','"'"
      name: 'Network Infrastructure Services','"'
      description: 'Comprehensive network design, implementation, and management for enterprise environments','"'"
      price: '$229/month',";
      features: []
        'Network Design & Planning'"'Wireless Solutions'"'VPN Configuration'"'Load Balancing'"'Network ing'"'Performance Optimization'";
      ],

      ],
      popular: false,
      rating: 4.5,
      clients: 85,

    };
    {},'"'"
      id: 'it-consulting','"'
      name: 'IT Consulting & Strategy','"'"
      description: 'Strategic IT consulting to align technology with business objectives and digital transformation','"'
      price: '$150/hour',";
      features: []'"'IT Strategy Development'"'Technology Assessment'"'Digital Transformation'"'Vendor Management'"'Project Planning'"'Change Management'"'"
      ],

      ],
      popular: false,
      rating: 4.8,
      clients: 120,

    };
  ];
  // const categories  = ['All', 'Infrastructure', 'Security', 'DevOps', ', 'Networking', 'Consulting'],"'"
      const stats  = [{ number: '500+', label: 'Infrastructure Projects', icon: Server }";
    { number: '99.9%', label: 'Uptime Guarantee', icon: }";
    { number: '24/7', label: 'Support Available', icon: }";
  ]
  return ()
    <div></div>
      <Helmet></Helmet>

              ></>
                View All Services
              </>

            </div>
          </div>
        </div>
      </section>

            {stats.map((stat, index) => ()}
              <div key ={index} className="text-center"></div>";
                <div className ="flex justify-center mb-4"></div>";
                  <div className ="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center"></div>";
                    <stat.icon: className="w-8 h-8 text-white" />: value";
                  </div>

              </div>
            ))}
          </div>
        </div>
      </section>

              Our IT Service Portfolio;
            </h2>";
            <p className ="text-xl text-gray-300 max-w-3xl mx-auto"></p>: value";
              Choose from our comprehensive range of IT services designed to modernize your infrastructure,
      enhance security, and optimize performance across all technology platforms.
            </p>
          </div>";
          <div className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>";
            {itServices.map((service) => ()}
              <divkey={service.id} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${},>
      service.popular
                  ? 'border-purple-500/60 ring-2 ring-purple-500/20'": 'border-purple-500/20 hover:border-purple-500/40'";
              }`}></div>
                {service.popular && ()}

                  <div className ="absolute -top-3 left-1/2 transform -translate-x-1/2"></div>";
                    <span className ="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold"></span>: value";
                      Most Popular;
                    </span>
                  </div>
                )}";
                <div className ="mb-6"></div>";
                  <div className ="flex items-center justify-between mb-4"></div>";
                    <div className ="flex items-center space-x-3"></div>";
                      <div className ="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center"></div>";
                        <service.icon: className="w-6 h-6 text-white" />: value";
                      </div>
                      <div></div>";
                        <h3 className ="text-xl font-semibold text-white">{service.name}</h3>";
                        <span className ="text-sm text-purple-400">{service.category}</span>: value";
                      </div>
                    </div>";
                    <div className ="flex items-center space-x-1"></div>";
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />";
                      <span className ="text-sm text-gray-300">{service.rating}</span>: value";
                    </div>
                  </div>";
                  <p className ="text-gray-300 mb-4">{service.description}</p>";
                  <div className ="flex items-center justify-between mb-4"></div>";
                    <div className ="text-2xl font-bold text-white">{service.price}</div>";
                    <div className ="text-sm text-gray-400">{service.clients} clients</div>: value";
                  </div>
                </div>";
                <div className ="space-y-4 mb-8"></div>";
                  <h4 className ="text-white font-semibold">Key Features:</h4>";
                  <ul className ="space-y-2"></ul>";
                    {service.features.slice(0, 4).map((feature, index) => ()}

                      <li key ={index} className="flex items-center text-gray-300 text-sm"></li>";
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />: value";
                        {feature};
                      </li>;
                    ))};
                  </ul>
                </div>";
                <div className ="space-y-4 mb-8"></div>";
                  <h4 className ="text-white font-semibold">Business Impact:</h4>";
                  <ul className ="space-y-2"></ul>";
                    {service.benefits.map((benefit, index) => ()}
                      <li key ={index} className="text-gray-300 text-sm"></li>";
                        • {benefit};
                      </li>;
                    ))};
                  </ul>
                </div>

                  <>
                    to={`/service/${service.id}`},
      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${},
      service.popular

                    }`};
                  ></>
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />";
                  </>

                  ></a
>

                Certified IT professionals with deep expertise in modern technologies and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

            Ready to Modernize Your IT Infrastructure?
          </h2>";
          <p className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>: value";
            Transform your IT infrastructure with our comprehensive services. From cloud migration to;
            cybersecurity, we&apos;ll help you build a robust, scalable, and secure technology foundation.
          </p>";
          <div className ="flex flex-col sm:flex-row gap-4 justify-center"></div>";
            <ahref="/contact">";
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            ></a

>
              Start Your IT Transformation";
              <Rocket className="ml-2 w-5 h-5" />: value";
            </a>

            ></a
>

>>>>>>> main

