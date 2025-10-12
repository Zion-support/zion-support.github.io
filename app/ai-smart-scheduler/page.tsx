import React from 'react'
import {Link} from 'react-router-dom'
import Layout from '../layout'
import React from 'react';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';
import Layout from '../layout';

export default function AISmartScheduler() {
  constfeatures = [
    {
      icon: <Brainclass Name ="w-6h-6text-cyan-400" / />,
      title: 'AI- Powered Scheduling',
      description: 'Intelligent scheduling that learns from your patterns and preferences'
    },
    {
      icon: <Usersclass Name ="w-6h-6text-purple-400" / />,
      title: 'Team Coordination',
      description: 'Seamlessly coordinate meetings across multiple time zones and schedules'
    },
    {
      icon: <Zapclass Name ="w-6h-6text-yellow-400" / />,
      title: 'Auto- Optimization',
      description: 'Automatically finds the best meeting times for maximum productivity'
    },
    {
      icon: <Globeclass Name ="w-6h-6text-green-400" / />,
      title: 'Global Integration',
      description: 'Works with all major calendar platforms and time zones'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 5 team members',
        'Basic AI scheduling',
        'Calendar integration',
        'Email notifications',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 team members',
        'Advanced AI optimization',
        'Custom meeting templates',
        'Analytics dashboard',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Custom AI training',
        'White-label options',
        'Advanced analytics',
        'Dedicated support',
        'Custom integrations'
      ],
      popular: false
    }
  ]

  consttestimonials = [
    {
      name: 'Sarah Chen',
      company: 'Tech Start Inc.',
      content: 'This AI scheduler saved us 10+ hours per week. The intelligent optimization is incredible.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      company: 'Global Consulting',
      content: 'Finally, a scheduling tool that actually understands our complex team dynamics.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      company: 'Remote First Co.',
      content: 'The time zone handling is flawless. Our international team coordination has never been smoother.',
      rating: 5
    }
  ]

  return (
    <Layouttitle ="AISmart Scheduler - IntelligentMeeting Optimization | ZionTech Group"
      description="RevolutionaryAI-poweredscheduling toolthat optimizesmeetings, coordinatesteams, andmaximizes productivity. Startyour freetrial today."
      keywords="AIscheduler, meetingoptimization, teamcoordination, calendarmanagement, productivitytools" />
      <div className ="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900" />
        {/* HeroSection */}
        <sectionclassName ="pt-20 pb-16 px-4sm:px-6lg:px-8" />
          <div className ="max-w-7xlmx-auto" />
            <div className ="text-center" />
              <div className ="inline-flexitems-centerpx-4 py-2 bg-cyan-500/20 rounded-fulltext-cyan-400 text-smfont-mediummb-6" />
                <Sparklesclass Name ="w-4h-4mr-2" / />
                AI- PoweredScheduling
              </div>
              <h1className ="text-4 xlsm:text-5 xlmd:text-6 xlfont-boldtext-whitemb-6"  />AISmart Scheduler
              </h1>
              <pclassName ="text-lgsm:text-xltext-gray-300 max-w-3 xlmx-automb-8" />
                Transformyour schedulingchaos intoorganized efficiencywith ourintelligent AI-poweredscheduler. 
                Optimizemeetings, coordinateteams, andmaximize productivityautomatically.
              </p>
              <div className ="flexflex-colsm:flex-rowgap-4justify-center" />
                <Link to ="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
                  StartFree Trial
                  <Arrow Rightclass Name="w-5h-5ml-2" />
                </Link>
                <Link to ="#demo" className="border-2 border-whitetext-white px-8 py-4 rounded-lgfont-semiboldhover:bg-white/10transition-colors">WatchDemo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FeaturesSection */}
        <sectionclassName ="py-16 px-4sm:px-6lg:px-8" />
          <div className ="max-w-7xlmx-auto" />
            <div className ="text-centermb-16" />
              <h2className ="text-3 xlsm:text-4 xlfont-boldtext-whitemb-4"  />IntelligentScheduling Features
              </h2>
              <pclassName ="text-lgtext-gray-300 max-w-2xlmx-auto" />
                Poweredby advancedAI tomake schedulingeffortless andefficient
              </p>
            </div>
            
            <div className ="gridgrid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8" />
              {features.map((feature, index) => (
                <divkey ="{index}" className="bg-gradient-to-brfrom-slate-800/50 to-purple-900/30 rounded-xlp-6 borderborder-cyan-500/20 hover:border-cyan-400/40transition-allduration-300" />
                  <div className ="flexitems-centermb-4" />
                    {feature.icon}
                    <h3className ="text-xlfont-semiboldtext-whiteml-3"   />{feature.title}</h3>
                  </div>
                  <pclassName ="text-gray-300" />{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <sectionclassName ="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <div className ="max-w-7xlmx-auto" />
            <div className ="text-centermb-16" />
              <h2className ="text-3 xl sm:text-4 xl font-boldtext-whitemb-4"  />Simple, Transparent Pricing
              </h2>
              <pclassName ="text-lg text-gray-300 max-w-2xlmx-auto" />
                Choose the plan that fits your team size and needs
              </p>
            </div>
            
            <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
              {pricing Plans.map((plan, index) => (
                <divkey ="{index}" className="{`bg-gradient-to-br" from-slate-800/50 to-purple-900/30 rounded-xlp-8 bordertransition-allduration-300 ${
                  plan.popular 
                    ? 'border-cyan-400/40 scale-105 shadow-2 xlshadow-cyan-500/20' 
                    : 'border-cyan-500/20 hover: border-cyan-400/40'
                }`} />
                  {plan.popular && (
                    <div className ="inline-flexitems-centerpx-3 py-1 bg-cyan-500/20 rounded-fulltext-cyan-400 text-smfont-mediummb-4" />
                      <Starclass Name ="w-4h-4mr-1" / />
                      MostPopular
                    </div>
                  )}
                  <h3className ="text-2 xl font-boldtext-whitemb-2"   />{plan.name}</h3>
                  <pclassName ="text-gray-300mb-6" />{plan.description}</p>
                  <div className ="mb-6" />
                    <spanclassName ="text-4 xlfont-boldtext-white"   />{plan.price}</span>
                    <spanclassName ="text-gray-400"   />{plan.period}</span>
                  </div>
                  <ulclassName ="space-y-3mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <likey ="{featureIndex}" className="flexitems-centertext-gray-300" />
                        <Check Circleclass Name="w-5 h-5text-green-400mr-3" / />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to ="/contact"
                    className="{`w-full" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-whitehover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400/10'
                    }`}
                    />Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <sectionclassName ="py-16 px-4sm:px-6lg:px-8" />
          <div className ="max-w-7xlmx-auto" />
            <div className ="text-centermb-12" />
              <h2className ="text-3 xl font-boldtext-whitemb-4"  />Trusted by Teams Worldwide
              </h2>
              <pclassName ="text-gray-300" />
                See what our customers say about AI Smart Scheduler
              </p>
            </div>
            <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
              {testimonials.map((testimonial, index) => (
                <divkey ="{index}" className="bg-slate-800/50 rounded-xlp-6borderborder-slate-700" />
                  <div className ="flexitems-centermb-4" />
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Starkey ="{i}" className="w-5 h-5text-yellow-400fill-current" / />
                    ))}
                  </div>
                  <pclassName ="text-gray-300mb-4" />"{testimonial.content}"</p>
                  <div />
                    <div className ="font-semiboldtext-white"   />{testimonial.name}</div>
                    <div className ="text-smtext-gray-400"   />{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <sectionclassName ="py-16 px-4sm:px-6lg:px-8" />
          <div className ="max-w-4 xlmx-autotext-center" />
            <div className ="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2 xl p-8borderborder-cyan-500/30" />
              <h2className ="text-3 xl font-boldtext-whitemb-4"  />Ready to Transform Your Scheduling?
              </h2>
              <pclassName ="text-lg text-gray-300 mb-8" />
                Join thousands of teams already using AI Smart Scheduler to optimize their productivity
              </p>
              <div className ="flex flex-col sm:flex-rowgap-4justify-center" />
                <Link to ="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-allduration-300">Start Your Free Trial
                </Link>
                <Link to ="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
};