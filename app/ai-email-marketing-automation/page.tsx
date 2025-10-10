'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Mail, BarChart3, Users, Zap, Target, ArrowRight, Star, CheckSquare, Globe, Smartphone, Heart, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const AIEmailMarketingAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Mail,
      title: 'AI Email Generation',
      description: 'Create compelling email campaigns with AI-powered content generation and personalization',
      benefits: ['Subject line optimization', 'Content personalization', 'A/B testing automation', 'Send time optimization']
    },
    {
      icon: Users,
      title: 'Smart Segmentation',
      description: 'Automatically segment your audience based on behavior, preferences, and engagement patterns',
      benefits: ['Behavioral segmentation', 'Demographic targeting', 'Engagement scoring', 'Dynamic lists']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track performance with AI-driven insights and predictive analytics for better ROI',
      benefits: ['Open rate prediction', 'Click-through optimization', 'Revenue attribution', 'Performance forecasting']
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Create complex email workflows with triggers, conditions, and automated follow-ups',
      benefits: ['Trigger-based campaigns', 'Drip sequences', 'Abandoned cart recovery', 'Welcome series']
    }
  ]
  const automationWorkflows = [
    {
      name: 'Welcome Series',
      description: 'Automatically onboard new subscribers with a personalized email sequence',
      emails: 5,
      openRate: '68%',
      clickRate: '24%'
    },
    {
      name: 'Abandoned Cart',
      description: 'Recover lost sales with intelligent cart abandonment email campaigns',
      emails: 3,
      openRate: '45%',
      clickRate: '18%'
    },
    {
      name: 'Re-engagement',
      description: 'Win back inactive subscribers with targeted re-engagement campaigns',
      emails: 4,
      openRate: '52%',
      clickRate: '15%'
    },
    {
      name: 'Birthday Campaigns',
      description: 'Send personalized birthday offers and special promotions automatically',
      emails: 2,
      openRate: '78%',
      clickRate: '32%'
    }
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5,000 contacts',
        'Unlimited emails',
        'Basic automation',
        'Email templates',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$179',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 25,000 contacts',
        'Advanced automation',
        'AI content generation',
        'A/B testing',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited contacts',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Advanced reporting',
        'Custom integrations'
      ],
      popular: false
    }
  ]
  const testimonials = [
    {
      name: 'Sarah Thompson',
      role: 'Marketing Manager',
      company: 'E-commerce Plus',
      content: 'Our email open rates increased by 85% since implementing AI Email Marketing Automation. The AI content generation is incredible.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO',
      company: 'TechStartup',
      content: 'The automation workflows have saved us 20+ hours per week. Our revenue from email marketing increased by 300%.',
      rating: 5
    },
    {
      name: 'Emily Chen',
      role: 'Digital Marketing Director',
      company: 'Global Brands',
      content: 'The AI segmentation and personalization features are game-changers. Our customers love the personalized experience.',
      rating: 5
    }
  ]
  return (
    <div> </div><Helmet> </Helmet><title>AI Email Marketing Automation - Zion Tech Group</title>
        <meta> </meta><meta> </meta></Helmet>
      
      <Navigation> </Navigation><main>{/* Hero Section */}
        </main><section> </section><div> </div><div> </div><Mail>AI-Powered Email Marketing
            </Mail></div>
            <h1>AI Email Marketing Automation
            </h1></h1>
            <p>Transform your email marketing with AI-powered content generation, smart segmentation, and advanced automation. 
              Boost open rates by 85% and increase revenue by 300%.
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
              <p>Leverage artificial intelligence to create, send, and optimize your email marketing campaigns automatically.
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

        {/* Automation Workflows Section */}
        <section> </section><div> </div><div> </div><h2>Pre-Built Automation Workflows
              </h2></h2>
              <p>Get started quickly with our proven automation workflows that deliver results.
              </p></p>
            </div>
            <div>{automationWorkflows.map((workflow, index) => (
                </div><div> </div><div> </div><h3 className="text-xl font-bold text-white">{workflow.name}</h3>
                    <div>{workflow.emails} emails
                    </div></div>
                  </div>
                  <p className="text-gray-300 mb-6">{workflow.description}</p>
                  <div> </div><div> </div><div className="text-2xl font-bold text-green-400">{workflow.openRate}</div>
                      <div className="text-sm text-gray-400">Open Rate</div>
                    </div>
                    <div> </div><div className="text-2xl font-bold text-blue-400">{workflow.clickRate}</div>
                      <div className="text-sm text-gray-400">Click Rate</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section> </section><div> </div><div> </div><h2>Simple, Transparent Pricing
              </h2></h2>
              <p>Choose the plan that fits your email marketing needs. All plans include our core AI features.
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
              <p>Join thousands of businesses who have transformed their email marketing with AI.
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
        <section> </section><div> </div><div> </div><h2>Ready to Transform Your Email Marketing?
              </h2></h2>
              <p>Start your free trial today and experience the power of AI-driven email marketing automation.
              </p></p>
              <div> </div><button>Start Free Trial
                  </button><ArrowRight> </ArrowRight></button>
                <button>Schedule Demo
                </button></button>
              </div>
              <div>Questions? Call us at </div><a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">(302) 464-0950</a> or email <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">kleber@ziontechgroup.com</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer> </Footer></div>
  )
}
export default AIEmailMarketingAutomationPage