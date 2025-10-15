
      icon: <>
      benefits: ["Auto-start/stop", "Idle detection", "Manual entry", "Time rounding"]""    }
    {},
      title: "Project & Task Management",""      description: "Organize time tracking by projects, tasks, and clients for better productivity insights",""      icon: <Target: className ="w-8 h-8" />,""      benefits: ["Project tracking", "Task breakdown", "Client billing", "Budget monitoring"]""    }
    {},
      title: "Team Management",""      description: "Manage team members, assign projects, and track team productivity",""      icon: <Users: className ="w-8 h-8" />,""      benefits: ["Team dashboard", "Member management", "Role permissions", "monitoring"]""    }
    {},
      title: "Reporting & Analytics",""      description: "Comprehensive reports and analytics to track productivity and billable hours",""      icon: <className="w-8 h-8" />,""      benefits: ["Time reports", "Productivity metrics", "Billable hours", "Custom dashboards"]""    }
    {},
      title: "Mobile App",""      description: "Track time on the go with our mobile app for iOS and Android",""      icon: <className="w-8 h-8" />,""      benefits: ["Mobile tracking", "Offline mode", "GPS location", "Push notifications"]""    }
    {},
      title: "Integration Hub",""      description: "Connect with your favorite tools for seamless workflow integration",""      icon: <className="w-8 h-8" />,""      benefits: ["API access", "Webhook support", "Third-party apps", "Custom integrations"]""    }
  ],
      const  pricing = [
    {},
      name: "Starter",""      price: "$19",""      period= "per month",""      description: "Perfect for small teams and freelancers",""      features: ["Up to 5 team members",""        "Basic time tracking",""        "Simple reports",""        "Email support",""        "Mobile app access"""      ],
      popular: false
    }
    {},
      name: "Professional",""      price: "$49",""      period= "per month",""      description: "Ideal for growing teams and businesses",""      features: ["Up to 25 team members",""        "Advanced analytics",""        "Project management",""        "API access",""        "Priority support",""        "Custom fields"""      ],
      popular: true
    }
    {},
      name: "Enterprise",""      price: "$99",""      period= "per month",""      description: "For large organizations with advanced needs",""      features: ["Unlimited team members",""        "Advanced reporting",""        "Custom integrations",""        "Dedicated support",""        "Advanced security",""        "Custom development"""      ],
      popular: false
    }
  ],
      const  benefits = [
    {},
      title: "Increase Productivity",""      description: "Boost team productivity by up to 25% with better time management",""      icon: <className="w-6 h-6" />""    }
    {},
      title: "Accurate Billing",""      description: "Ensure accurate client billing with detailed time tracking",""      icon: <Target: className ="w-6 h-6" />""    }
    {},
      title: "Better Insights",""      description: "Gain insights into team performance and project profitability",""      icon: <className="w-6 h-6" />""    }
    {},
      title: "Easy to Use",""      description: "Simple interface that teams love to use every day",""      icon: <className="w-6 h-6" />""    }
  ],
      return ()
    <div  className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>""      <EnhancedSEO>
        title="Employee Time Tracker - Zion Tech Group | Time Tracking & Productivity Software"""        description="Advanced employee time tracking software with automatic tracking, project management, team analytics, and mobile app. Boost productivity and accurate billing."""        keywords="employee time tracker, time tracking software, productivity tracking, project time tracking, team management, billable hours"""        canonical="https://ziontechgroup.com/employee-time-tracker"""      />

      {/* Hero Section */}
      <section: className ="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section>""        <ResponsiveContainer: className ="text-center"></ResponsiveContainer>""          <h1  className ="text-4xl md=text-6xl font-bold text-white mb-6"></h1>""            <span  className ="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></span>""              Employee Time Tracker
            </span>
          </h1>
          <p  className ="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"></p>""            Track time effortlessly and boost team productivity with our comprehensive time tracking solution. 
            Automatic tracking, project management, and detailed analytics all in one place.
          </p>
          <div  className ="flex flex-col sm:flex-row gap-4 justify-center"></div>""            <FuturisticButton>
              href="/contact"""              variant="primary"""              size="lg"""              icon={<ArrowRight: className ="w-5 h-5" />};""            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton>
              href="/demo"""              variant="outline"""              size="lg"""              icon={<Globe: className ="w-5 h-5" />};""            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section: className ="py-20 px-4 sm:px-6 lg:px-8"></section>""        <ResponsiveContainer></ResponsiveContainer>
          <div  className ="text-center mb-16"></div>""            <h2  className ="text-3xl md=text-4xl font-bold text-white mb-6"></h2>""              Powerful Time Tracking Features
            </h2>
            <p  className ="text-xl text-gray-300 max-w-4xl mx-auto"></p>""              Everything you need to track time effectively and manage team productivity.
            </p>
          </div>
          <div  className ="grid grid-cols-1 md=grid-cols-2 lg:grid-cols-3 gap-8"></div>""            {features.map(feature) => ()}
              <FuturisticCard= key ={index} className="h-full"></FuturisticCard>""                <div  className ="text-center mb-6">""        <div  className ="text-center mb-6">""          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>""          <p  className ="text-gray-300">This page is under development...</p>""        </div>
      </div>
                    {feature.icon}
                  </div>
                  <h3  className ="text-xl font-semibold text-white mb-3">{feature.title}</h3>""                  <p  className ="text-gray-300 mb-4">{feature.description}</p>""                </div>
                <ul: className ="space-y-2"></ul>""                  {feature.benefits.map(benefit, benefitIndex) => ()}

                      {benefit};

                    </li>
                  )}
                </ul>
              </FuturisticCard>

          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section: className ="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50"></section>""        <ResponsiveContainer></ResponsiveContainer>
          <div  className ="text-center mb-16"></div>""            <h2  className ="text-3xl md=text-4xl font-bold text-white mb-6"></h2>""              Simple, Transparent Pricing
            </h2>
            <p  className ="text-xl text-gray-300 max-w-4xl mx-auto"></p>""              Choose the plan that fits your team size and tracking needs. No hidden fees, no surprises.
            </p>
          </div>
          <div  className ="grid grid-cols-1 md=grid-cols-3 gap-8"></div>""            {pricing.map(plan) => ()}
              <FuturisticCard= key ={index} className={`h-full ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}></FuturisticCard>""                {plan.popular && ()}'                  <div  className ="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>""                    <span  className ="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold"></span>""                      Most Popular
                    </span>
                  </div>
                )}
                <div  className ="text-center mb-6"></div>""                  <h3  className ="text-2xl font-bold text-white mb-2">{plan.name}</h3>""                  <div  className ="text-4xl font-bold text-cyan-400 mb-2"></div>""                    {plan.price}
                    <span  className ="text-lg text-gray-400">{plan.period}</span>""                  </div>
                  <p  className ="text-gray-300 text-sm">{plan.description}</p>""                </div>
                <ul: className ="space-y-3 mb-8"></ul>""                  {plan.features.map(feature, featureIndex) => ()}
                    <li: key ={featureIndex} className="flex items-center text-sm text-gray-300"></li>""                      <CheckCircle: className ="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />""                      {feature}
                    </li>
                  )}
                </ul>
                <FuturisticButton>
                  href="/contact"""                  variant={plan.popular ? "primary" : "outline"},""      size="sm"""                  className="w-full"""                ></FuturisticButton>
>
                  Get Started
                </FuturisticButton>
              </FuturisticCard>

          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section: className ="py-20 px-4 sm:px-6 lg:px-8"></section>""        <ResponsiveContainer></ResponsiveContainer>
          <div  className ="text-center mb-16"></div>""            <h2  className ="text-3xl md=text-4xl font-bold text-white mb-6"></h2>""              Why Choose Our Time Tracker?
            </h2>
            <p  className ="text-xl text-gray-300 max-w-4xl mx-auto"></p>""              Join thousands of teams who have improved their productivity with our time tracking solution.
            </p>
          </div>
          <div  className ="grid grid-cols-1 md=grid-cols-2 lg:grid-cols-4 gap-8"></div>""            {benefits.map(benefit) => ()}
              <div  key ={index} className="text-center">""        <div  key ={index} className="text-center">""          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>""          <p  className ="text-gray-300">This page is under development...</p>""        </div>
      </div>
                  {benefit.icon}
                </div>
                <h3  className ="text-lg font-semibold text-white mb-2">{benefit.title}</h3>""                <p  className ="text-gray-300 text-sm">{benefit.description}</p>""              </div>
            )}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section: className ="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30"></section>""        <ResponsiveContainer: className ="text-center"></ResponsiveContainer>""          <h2  className ="text-3xl md=text-4xl font-bold text-white mb-6"></h2>""            Ready to Track Time Better?
          </h2>
          <p  className ="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"></p>""            Start your free trial today and see how our time tracker can boost your team's productivity.'""          </p>'          <div  className ="flex flex-col sm:flex-row gap-4 justify-center"></div>""            <FuturisticButton>
              href="/contact"""              variant="primary"""              size="lg"""              icon={<ArrowRight: className ="w-5 h-5" />};""            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton>

            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>

