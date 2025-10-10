'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Truck, BarChart3, Target, Zap, ArrowRight, Star, CheckSquare, Shield, Smartphone, Users, Globe, Settings } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const AISupplyChainOptimizationPage: React.FC = () => {
  const features = [
    {
      icon: Truck,
      title: 'Demand Forecasting',
      description: 'Predict demand patterns with 92% accuracy using advanced machine learning algorithms',
      benefits: ['92% forecast accuracy', 'Real-time demand signals', 'Seasonal pattern recognition', 'Market trend analysis']
    },
    {
      icon: BarChart3,
      title: 'Inventory Optimization',
      description: 'Optimize inventory levels across your entire supply chain to reduce costs and improve availability',
      benefits: ['Reduce inventory costs by 25%', 'Improve stock availability', 'Automated reorder points', 'Multi-location optimization']
    },
    {
      icon: Target,
      title: 'Route Planning',
      description: 'AI-powered route optimization for logistics and transportation to minimize costs and delivery times',
      benefits: ['Reduce transportation costs by 30%', 'Optimize delivery routes', 'Real-time traffic updates', 'Fuel efficiency optimization']
    },
    {
      icon: Zap,
      title: 'Risk Management',
      description: 'Identify and mitigate supply chain risks with predictive analytics and real-time monitoring',
      benefits: ['Risk prediction', 'Supplier monitoring', 'Disruption alerts', 'Contingency planning']
    }
  ]
  const industries = [
    {
      title: 'Manufacturing',
      description: 'Optimize production planning and raw material procurement',
      icon: Settings,
      benefits: ['Reduce production costs by 20%', 'Improve on-time delivery by 35%', 'Minimize waste by 40%', 'Optimize supplier relationships']
    },
    {
      title: 'Retail & E-commerce',
      description: 'Streamline inventory management and fulfillment operations',
      icon: Globe,
      benefits: ['Reduce stockouts by 60%', 'Improve customer satisfaction', 'Optimize warehouse operations', 'Enhance last-mile delivery']
    },
    {
      title: 'Healthcare',
      description: 'Ensure critical medical supplies and pharmaceutical availability',
      icon: Users,
      benefits: ['Ensure supply continuity', 'Reduce waste and expiration', 'Optimize cold chain logistics', 'Improve patient care']
    },
    {
      title: 'Food & Beverage',
      description: 'Manage perishable goods and optimize distribution networks',
      icon: Smartphone,
      benefits: ['Reduce food waste by 45%', 'Optimize freshness', 'Improve distribution efficiency', 'Enhance quality control']
    }
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$899',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 10 locations',
        'Basic forecasting',
        'Standard analytics',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,999',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Up to 100 locations',
        'Advanced AI features',
        'Real-time analytics',
        'Priority support',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'For large organizations with complex supply chains',
      features: [
        'Unlimited locations',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'On-premise deployment',
        'Advanced reporting'
      ],
      popular: false
    }
  ]
  const testimonials = [
    {
      name: 'David Chen',
      role: 'Supply Chain Director',
      company: 'Global Manufacturing Corp',
      content: 'We reduced inventory costs by 30% and improved on-time delivery to 98%. The AI insights are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Operations Manager',
      company: 'RetailMax',
      content: 'Our stockout rate dropped by 70% and customer satisfaction increased by 25%. The optimization is game-changing.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Logistics Director',
      company: 'PharmaSupply',
      content: 'We eliminated supply disruptions and reduced waste by 50%. The predictive capabilities are outstanding.',
      rating: 5
    }
  ]
  return (
    <div> </div><Helmet> </Helmet><title>AI Supply Chain Optimization - Zion Tech Group</title>
        <meta> </meta><meta> </meta></Helmet>
      
      <Navigation> </Navigation><main>{/* Hero Section */}
        </main><section> </section><div> </div><div> </div><Truck>AI-Powered Supply Chain Optimization
            </Truck></div>
            <h1>AI Supply Chain Optimization
            </h1></h1>
            <p>Optimize your supply chain operations with AI-driven demand forecasting, inventory management, and logistics planning. 
              Reduce costs by 30% and improve efficiency by 40%.
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
              <p>Leverage artificial intelligence to optimize every aspect of your supply chain operations.
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
              <p>Deploy supply chain optimization across various industries with proven results.
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
              <p>Choose the plan that fits your supply chain needs. All plans include our core AI features.
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
              <p>Join thousands of organizations who have transformed their supply chain with AI.
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
        <section> </section><div> </div><div> </div><h2>Ready to Optimize Your Supply Chain?
              </h2></h2>
              <p>Start your free trial today and experience the power of AI-driven supply chain optimization.
              </p></p>
              <div> </div><button>Start Free Trial
                  </button><ArrowRight> </ArrowRight></button>
                <button>Schedule Demo
                </button></button>
              </div>
              <div>Questions? Call us at </div><a href="tel:+13024640950" className="text-green-400 hover:text-green-300">(302) 464-0950</a> or email <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300">kleber@ziontechgroup.com</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer> </Footer></div>
  )
}
export default AISupplyChainOptimizationPage