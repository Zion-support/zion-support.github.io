
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: { monthl,
    y: 99, yearly: 990 },
      features: ['
        'Basic AI Consultation',
        'Cloud Migration Assessment',
        'Security Audit Report',
        'Email Support',
        'Basic Analytics Dashboard',
        'Up to 5 Team Members'
      ],
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },

        'Full Cloud Migration',
        'Cybersecurity Implementation',
        'Priority Support',
        'Advanced Analytics',
        'Up to 25 Team Members',
        'Custom Integrations',
        'Performance Monitoring',
        'Compliance Reporting'
      ],
      icon: Shield,
      color: 'from-purple-500 to-pink-500',
      popular: true
    },

        'Multi-Cloud Strategy',
        'Advanced Security Framework',
        '24/7 Dedicated Support',
        'Custom AI Models',
        'Unlimited Team Members',
        'White-label Solutions',
        'Advanced Analytics & ML',
        'Compliance & Governance',
        'Custom Development',
        'Training & Certification',
        'Strategic Consulting'
      ],
      icon: Building,
      color: 'from-orange-500 to-red-500',
      popular: false
    }
  ];


      description: 'Custom AI model development and training',
      price: { monthl,
    y: 199, yearly: 1990 },
      icon: Brain
    },

      description: 'Advanced cloud cost optimization and management',
      price: { monthl,
    y: 149, yearly: 1490 },
      icon: Cloud
    },

      description: 'Advanced security features and compliance',
      price: { monthl,
    y: 179, yearly: 1790 },
      icon: Shield
    },


import { Link } from 'react-router-dom';

export default function ComprehensivePricing2025() {""
  const [billingCycle, setBillingCycle] = useState('monthly');""
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const plans = [

        'Strategic Consulting' ], icon: Building","
      color: 'from-orange-500 to-red-500', popular: false }
  ];

  const addOns = [


      description: 'End-to-end business transformation consulting',
      price: { monthly: 299, yearly: 2990 },
      icon: Rocket }
  ];
""
  const savings = billingCycle === 'yearly' ? 20 : 0;

  return (""
    <div className="min-h-screen bg-zion-blue-dark">

            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">
              Transparent Pricing
            </h1>""
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">

              Choose the perfect plan for your business needs. All plans include our core services 
              with flexible options to scale as you grow.
            </p>
            


                  <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                    Save {savings}%
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
      </section>



                    <div className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>


                    }`}
                  >`
                    {selectedPlan === plan.id ? 'Current Plan' : 'Choose Plan'}
                  </button>
                </div>


                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Enhance your plan with specialized services tailored to your specific needs
            </p>
          </div>

                  <div className="text-2xl font-bold text-white mb-2">
                    ${addon.price[billingCycle]}
                  </div>""
                  <span className="text-zion-slate-light text-sm">""

                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Get answers to common questions about our pricing and services
            </p>
          </div>

}
            ].map((faq, index) => (""
              <div key={index} className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6">""
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>""


                <p className="text-zion-slate-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>

