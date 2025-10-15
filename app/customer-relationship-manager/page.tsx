import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
      icon: <Users>
      benefits: ["Unified contact view", "Interaction tracking", "Custom fields", "Import/Export"]""

      title: "Sales Pipeline",""
      description: "Visual sales pipeline to track deals from lead to close",""
      icon: <Target: className ="w-8 h-8" />,""
      benefits: ["Deal tracking", "Stage management", "Forecasting", "Sales analytics"]""

      title: "Lead Management",""
      description: "Capture, qualify, and nurture leads with automated workflows",""
      icon: <className="w-8 h-8" />,""
      benefits: ["Lead scoring", "Automated follow-up", "Lead assignment", "Conversion tracking"]""

      title: "Communication Hub",""
      description: "Unified communication center for emails, calls, and meetings",""
      icon: <Phone: className ="w-8 h-8" />,""
      benefits: ["Email integration", "Call logging", "Meeting scheduler", "timeline"]""

      title: "Analytics & Reporting",""
      description: "Comprehensive analytics to track sales performance and customer insights",""
      icon: <className="w-8 h-8" />,""
      benefits: ["Sales reports", "Customer analytics", "Performance metrics", "Custom dashboards"]""

      title: "Task Management",""
      description: "Organize and track tasks, follow-ups, and appointments",""
      icon: <Calendar: className ="w-8 h-8" />,""
      benefits: ["Task automation", "Reminder system", "Team collaboration", "Progress tracking"]""

  ],
      const  pricing = [
      name: "Starter",""
      price: "$39",""
      period= "per month",""
      description: "Perfect for small businesses and startups",""
      features: ["Up to 1,000 contacts",""
        "Basic sales pipeline",""
        "Email integration",""
        "Mobile app access",""
        "Email support"""
      ],
      popular: false

      name: "Professional",""
      price: "$79",""
      period= "per month",""
      description: "Ideal for growing sales teams",""
      features: ["Up to 10,000 contacts",""
        "Advanced analytics",""
        "Lead scoring",""
        "API access",""
        "Priority support",""
        "Custom fields"""
      ],
      popular: true

      name: "Enterprise",""
      price: "$149",""
      period= "per month",""
      description: "For large organizations with complex needs",""
      features: ["Unlimited contacts",""
        "Advanced automation",""
        "Custom integrations",""
        "Dedicated support",""
        "Advanced security",""
        "Custom reporting"""
      ],
      popular: false

  ],
      const  benefits = [
      title: "Increase Sales",""
      description: "Boost sales productivity by up to 35% with better lead management",""
      icon: <Target: className ="w-6 h-6" />""

      title: "Better Customer Service",""
      description: "Provide personalized service with complete customer history",""
      icon: <Users: className ="w-6 h-6" />""

      title: "Data-Driven Decisions",""
      description: "Make informed decisions with comprehensive analytics and reporting",""
      icon: <className="w-6 h-6" />""

      title: "Team Collaboration",""
      description: "Improve team coordination with shared customer information",""
      icon: <Globe: className ="w-6 h-6" />""

  ],
      return ()
    <div  className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>""
      <EnhancedSEO>
        title="Customer Relationship Manager - Zion Tech Group | CRM Software for Sales Teams"""
        description="Powerful CRM software with contact management, sales pipeline, lead management, and analytics. Boost sales productivity and improve customer relationships."""
        keywords="CRM software, customer relationship management, sales pipeline, lead management, contact management, sales analytics"""
        canonical="https://ziontechgroup.com/customer-relationship-manager"""
      />

      {/* Hero Section */}
      <section: className ="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section>""
        <ResponsiveContainer: className ="text-center"></ResponsiveContainer>""
          <h1  className ="text-4xl md=text-6xl font-bold text-white mb-6"></h1>""
            <span  className ="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></span>""
              Customer Relationship Manager
            </span>
=======
const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced page solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Page <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive page solutions designed to transform your business
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-gray-300">Coming Soon - Page Solutions</p>
        </div>
      </div>
<<<<<<< HEAD
                    {feature.icon}
                  </div>
                  <h3  className ="text-xl font-semibold text-white mb-3">{feature.title}</h3>""
                  <p  className ="text-gray-300 mb-4">{feature.description}</p>""
                </div>
                <ul: className ="space-y-2"></ul>""
                  {feature.benefits.map((benefit, benefitIndex) => ()}

                      {benefit};

                    </li>
                  ))}
                </ul>
              </FuturisticCard>

          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section: className ="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50"></section>""
        <ResponsiveContainer></ResponsiveContainer>
          <div  className ="text-center mb-16"></div>""
            <h2  className ="text-3xl md=text-4xl font-bold text-white mb-6"></h2>""
              Simple, Transparent Pricing
            </h2>
            <p  className ="text-xl text-gray-300 max-w-4xl mx-auto"></p>""
              Choose the plan that fits your team size and sales needs. No hidden fees, no surprises.
            </p>
          </div>
          <div  className ="grid grid-cols-1 md=grid-cols-3 gap-8"></div>""
            {pricing.map((plan, index) => ()}
              <FuturisticCard= key ={index} className={`h-full ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}></FuturisticCard>""
                {plan.popular && ()}
                  <div  className ="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>""
                    <span  className ="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold"></span>""
                      Most Popular
                    </span>
                  </div>
                )}
                <div  className ="text-center mb-6"></div>""
                  <h3  className ="text-2xl font-bold text-white mb-2">{plan.name}</h3>""
                  <div  className ="text-4xl font-bold text-cyan-400 mb-2"></div>""
                    {plan.price}
                    <span  className ="text-lg text-gray-400">{plan.period}</span>""
                  </div>
                  <p  className ="text-gray-300 text-sm">{plan.description}</p>""
                </div>
                <ul: className ="space-y-3 mb-8"></ul>""
                  {plan.features.map((feature, featureIndex) => ()}
                    <li: key ={featureIndex} className="flex items-center text-sm text-gray-300"></li>""
                      <CheckCircle: className ="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />""
                      {feature}
                    </li>
                  ))}
                </ul>
                <FuturisticButton>
                  href="/contact"""
                  variant={plan.popular ? "primary" : "outline"},""
      size="sm"""
                  className="w-full"""
                ></FuturisticButton

>
                  Get Started
                </FuturisticButton>
              </FuturisticCard>

          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section: className ="py-20 px-4 sm:px-6 lg:px-8"></section>""
        <ResponsiveContainer></ResponsiveContainer>
          <div  className ="text-center mb-16"></div>""
            <h2  className ="text-3xl md=text-4xl font-bold text-white mb-6"></h2>""
              Why Choose Our CRM?
            </h2>
            <p  className ="text-xl text-gray-300 max-w-4xl mx-auto"></p>""
              Join thousands of sales teams who have transformed their customer relationships with our CRM.
            </p>
          </div>
          <div  className ="grid grid-cols-1 md=grid-cols-2 lg:grid-cols-4 gap-8"></div>""
            {benefits.map((benefit, index) => ()}
              <div  key ={index} className="text-center">""
        <div  key ={index} className="text-center">""
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>""
          <p  className ="text-gray-300">This page is under development...</p>""
        </div>
      </div>
                  {benefit.icon}
                </div>
                <h3  className ="text-lg font-semibold text-white mb-2">{benefit.title}</h3>""
                <p  className ="text-gray-300 text-sm">{benefit.description}</p>""
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section: className ="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30"></section>""
        <ResponsiveContainer: className ="text-center"></ResponsiveContainer>""
          <h2  className ="text-3xl md=text-4xl font-bold text-white mb-6"></h2>""
            Ready to Transform Your Sales Process?
          </h2>
          <p  className ="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"></p>""
            Start your free trial today and see how our CRM can boost your sales productivity and customer relationships.
          </p>
          <div  className ="flex flex-col sm:flex-row gap-4 justify-center"></div>""
            <FuturisticButton>
              href="/contact"""
              variant="primary"""
              size="lg"""
              icon={<ArrowRight: className ="w-5 h-5" />};""
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



=======
    </div>
  );
};

export default Page;
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d
