'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Wrench, BarChart3, AlertTriangle, Zap, ArrowRight, Star, CheckSquare, Shield, Smartphone, Users, Target, Settings } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const AIPredictiveMaintenancePage: React.FC = () => {
  const features = [
    {
      icon: Wrench,
      title: 'Failure Prediction',
      description: 'Predict equipment failures before they happen with 95% accuracy using machine learning algorithms',
      benefits: ['95% prediction accuracy', 'Real-time monitoring', 'Failure pattern recognition', 'Risk assessment']
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics dashboard with insights into equipment performance and optimization opportunities',
      benefits: ['Performance metrics', 'Trend analysis', 'Efficiency optimization', 'Cost tracking']
    },
    {
      icon: AlertTriangle,
      title: 'Smart Alerts',
      description: 'Intelligent alert system that prioritizes maintenance tasks based on urgency and impact',
      benefits: ['Priority-based alerts', 'Custom thresholds', 'Multi-channel notifications', 'Escalation management']
    },
    {
      icon: Zap,
      title: 'Automated Scheduling',
      description: 'AI-powered maintenance scheduling that optimizes resources and minimizes downtime',
      benefits: ['Resource optimization', 'Downtime minimization', 'Workforce planning', 'Inventory management']
    }
  ]
  const industries = [
    {
      title: 'Manufacturing',
      description: 'Optimize production lines and reduce unplanned downtime',
      icon: Settings,
      benefits: ['Reduce downtime by 40%', 'Increase productivity by 25%', 'Lower maintenance costs by 30%', 'Improve safety by 60%']
    },
    {
      title: 'Energy & Utilities',
      description: 'Monitor power plants and grid infrastructure for optimal performance',
      icon: Zap,
      benefits: ['Prevent power outages', 'Optimize energy production', 'Reduce maintenance costs', 'Ensure grid stability']
    },
    {
      title: 'Transportation',
      description: 'Maintain fleets and infrastructure with predictive insights',
      icon: Target,
      benefits: ['Reduce vehicle breakdowns', 'Optimize routes', 'Lower fuel costs', 'Improve safety']
    },
    {
      title: 'Healthcare',
      description: 'Ensure medical equipment reliability and patient safety',
      icon: Users,
      benefits: ['Prevent equipment failures', 'Ensure patient safety', 'Reduce maintenance costs', 'Improve efficiency']
    }
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$599',
      period: '/month',
      description: 'Perfect for small facilities and equipment',
      features: [
        'Up to 50 assets',
        'Basic analytics',
        'Email alerts',
        'Standard support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for medium-sized operations',
      features: [
        'Up to 500 assets',
        'Advanced analytics',
        'Multi-channel alerts',
        'Priority support',
        'API access',
        'Custom dashboards'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited assets',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'On-premise deployment',
        'Advanced integrations'
      ],
      popular: false
    }
  ]
  const testimonials = [
    {
      name: 'James Mitchell',
      role: 'Plant Manager',
      company: 'Industrial Manufacturing Co.',
      content: 'We reduced unplanned downtime by 45% and saved $2M annually. The AI predictions are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO',
      company: 'PowerGrid Solutions',
      content: 'Our power plant efficiency increased by 20% while reducing maintenance costs by 35%. Game-changing technology.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Fleet Manager',
      company: 'Global Logistics',
      content: 'Vehicle breakdowns decreased by 60% and our maintenance costs dropped by 40%. The ROI was immediate.',
      rating: 5
    }
  ]
  return (
    <div> </div><Helmet> </Helmet><title>AI Predictive Maintenance - Zion Tech Group</title>
        <meta> </meta><meta> </meta></Helmet>
      
      <Navigation> </Navigation><main>{/* Hero Section */}
        </main><section> </section><div> </div><div> </div><Wrench>AI-Powered Predictive Maintenance
            </Wrench></div>
            <h1>AI Predictive Maintenance
            </h1></h1>
            <p>Prevent equipment failures before they happen with AI-powered predictive maintenance. 
              Achieve 95% accuracy, reduce downtime by 40%, and save millions in maintenance costs.
            </p></p>
            <div> </div><button>Start Free Trial
                </button><ArrowRight> </ArrowRight></button>
              <button>Watch Demo
              </button></button>
            </div>
            <div>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime
            </div></div>
          </div>
        </section>

        {/* Features Section */}
        <section> </section><div> </div><div> </div><h2>Advanced AI Features
              </h2></h2>
              <p>Leverage machine learning and IoT data to predict and prevent equipment failures.
              </p></p>
            </div>
            <div>{features.map((feature, index) => (
                </div><div> </div><div> </div><feature> </feature></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul>{feature.benefits.map((benefit, idx) => (
                      </ul><li> </li><CheckSquare>{benefit}
                      </CheckSquare></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section> </section><div> </div><div> </div><h2>Industry Applications
              </h2></h2>
              <p>Deploy predictive maintenance across various industries with proven results.
              </p></p>
            </div>
            <div>{industries.map((industry, index) => (
                </div><div> </div><div> </div><industry> </industry></div>
                  <h3 className="text-xl font-bold text-white mb-4">{industry.title}</h3>
                  <p className="text-gray-300 mb-6">{industry.description}</p>
                  <ul>{industry.benefits.map((benefit, idx) => (
                      </ul><li> </li><CheckSquare>{benefit}
                      </CheckSquare></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section> </section><div> </div><div> </div><h2>Simple, Transparent Pricing
              </h2></h2>
              <p>Choose the plan that fits your maintenance needs. All plans include our core AI features.
              </p></p>
            </div>
            <div>{pricingPlans.map((plan, index) => (
                </div><div>{plan.popular && (
                    </div><div>Most Popular
                    </div></div>
                  )}
                  <div> </div><h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div> </div><span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul>{plan.features.map((feature, idx) => (
                      </ul><li> </li><CheckSquare>{feature}
                      </CheckSquare></li>
                    ))}
                  </ul>
                  <button>{plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </button></button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section> </section><div> </div><div> </div><h2>What Our Customers Say
              </h2></h2>
              <p>Join thousands of organizations who have transformed their maintenance operations with AI.
              </p></p>
            </div>
            <div>{testimonials.map((testimonial, index) => (
                </div><div> </div><div>{[...Array(testimonial.rating)].map((_, i) => (
                      </div><Star>))}
                  </Star></div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div> </div><div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section> </section><div> </div><div> </div><h2>Ready to Transform Your Maintenance?
              </h2></h2>
              <p>Start your free trial today and experience the power of AI-driven predictive maintenance.
              </p></p>
              <div> </div><button>Start Free Trial
                  </button><ArrowRight> </ArrowRight></button>
                <button>Schedule Demo
                </button></button>
              </div>
              <div>Questions? Call us at </div><a href="tel:+13024640950" className="text-orange-400 hover:text-orange-300">(302) 464-0950</a> or email <a href="mailto:kleber@ziontechgroup.com" className="text-orange-400 hover:text-orange-300">kleber@ziontechgroup.com</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer> </Footer></div>
  )
}
export default AIPredictiveMaintenancePage