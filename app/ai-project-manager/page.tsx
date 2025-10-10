'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Calendar, Users, CheckSquare, BarChart3, Clock, Target, Zap, ArrowRight, Star, Shield, Globe, Smartphone } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const AIProjectManagerPage: React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI-powered project scheduling with automatic resource allocation and deadline optimization',
      benefits: ['Automatic task prioritization', 'Resource conflict detection', 'Deadline optimization', 'Team availability tracking']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enhanced team collaboration with AI-driven communication and workflow management',
      benefits: ['Smart notifications', 'Automated standups', 'Progress tracking', 'Team performance insights']
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Advanced analytics to predict project outcomes and identify potential risks',
      benefits: ['Risk prediction', 'Budget forecasting', 'Timeline estimation', 'Performance metrics']
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Automate repetitive tasks and streamline project workflows',
      benefits: ['Task automation', 'Report generation', 'Status updates', 'Integration management']
    }
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams and individual projects',
      features: [
        'Up to 5 projects',
        '10 team members',
        'Basic AI insights',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing teams and medium projects',
      features: [
        'Unlimited projects',
        '50 team members',
        'Advanced AI analytics',
        'Priority support',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited everything',
        'Custom AI models',
        'Dedicated support',
        'On-premise deployment',
        'Advanced security',
        'Custom training'
      ],
      popular: false
    }
  ]
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      company: 'TechCorp Inc.',
      content: 'AI Project Manager has revolutionized how we handle complex projects. The AI insights help us stay on track and deliver 40% faster.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'The predictive analytics feature is a game-changer. We can now anticipate issues before they become problems.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'Global Solutions',
      content: 'Our team productivity increased by 60% since implementing AI Project Manager. The automation features save us hours every week.',
      rating: 5
    }
  ]
  return (
    <div> </div><Helmet> </Helmet><title>AI Project Manager - Zion Tech Group</title>
        <meta> </meta><meta> </meta></Helmet>
      
      <Navigation> </Navigation><main>{/* Hero Section */}
        </main><section> </section><div> </div><div> </div><Zap>AI-Powered Project Management
            </Zap></div>
            <h1>AI Project Manager
            </h1></h1>
            <p>Transform your project management with AI-powered insights, smart scheduling, and predictive analytics. 
              Deliver projects 40% faster with intelligent automation and team collaboration tools.
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
        <section> </section><div> </div><div> </div><h2>Powerful AI Features
              </h2></h2>
              <p>Leverage artificial intelligence to optimize your project management workflow and achieve better results.
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

        {/* Pricing Section */}
        <section> </section><div> </div><div> </div><h2>Simple, Transparent Pricing
              </h2></h2>
              <p>Choose the plan that fits your team size and project needs. All plans include our core AI features.
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
              <p>Join thousands of teams who have transformed their project management with AI.
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
        <section> </section><div> </div><div> </div><h2>Ready to Transform Your Project Management?
              </h2></h2>
              <p>Start your free trial today and experience the power of AI-driven project management.
              </p></p>
              <div> </div><button>Start Free Trial
                  </button><ArrowRight> </ArrowRight></button>
                <button>Schedule Demo
                </button></button>
              </div>
              <div>Questions? Call us at </div><a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">(302) 464-0950</a> or email <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer> </Footer></div>
  )
}
export default AIProjectManagerPage