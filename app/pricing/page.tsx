'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, Star, ArrowRight, Phone, Mail } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$1,500',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI consultation',
        'Up to 5 AI models',
        'Email support',
        'Monthly reporting',
        'Basic analytics dashboard',
        'Standard security features',
        'Basic AI integration',
        'Email support',
        'Standard analytics',
        'Up to 5 users',
        'Basic automation'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$3,500',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI consultation',
        'Up to 20 AI models',
        'Priority support',
        'Weekly reporting',
        'Advanced analytics dashboard',
        'Enhanced security features'
      ],
      popular: true,
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: '$7,500',
      period: '/month',
      description: 'Comprehensive solution for large organizations',
      features: [
        'Custom AI solutions',
        'Unlimited AI models',
        '24/7 dedicated support',
        'Real-time reporting',
        'Custom analytics dashboard',
        'Enterprise security features',
        'Custom integrations',
        'Dedicated team',
        'SLA guarantee',
        'On-site support',
        'Custom AI solutions',
        '24/7 dedicated support',
        'Custom analytics',
        'Unlimited users',
        'White-label options',
        'On-premise deployment',
        'Custom training'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]
  const addOnServices = [
    {
      name: 'AI Consulting',
      price: '$299/hour',
      description: 'Expert guidance on AI strategy and implementation'
    },
    {
      name: 'Cloud Migration',
      price: '$5,000/project',
      description: 'Seamless migration to cloud infrastructure'
    },
    {
      name: 'Security Audit',
      price: '$2,500/audit',
      description: 'Comprehensive security assessment and recommendations'
    },
    {
      name: 'Custom Development',
      price: '$150/hour',
      description: 'Bespoke software solutions for your specific needs'
    },
    {
      name: 'Data Analytics',
      price: '$200/hour',
      description: 'Advanced data analysis and visualization services'
    },
    {
      name: 'Training & Support',
      price: '$100/hour',
      description: 'Team training and ongoing technical support'
    }
  ]
  return (
    <>
      <Helmet> </Helmet><title>Pricing - Zion Tech Group | AI & IT Solutions</title>
        <meta> </meta><meta> </meta></Helmet>

      <Navigation> </Navigation><main>{/* Hero Section */}
        </main><section> </section><div> </div><div> </div><div> </div><h1>Simple, </h1><span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Transparent</span> Pricing
              </h1>
              <p>Choose the perfect plan for your business. All plans include our core AI and IT services 
                with flexible options to scale as you grow.
              </p></p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section> </section><div> </div><div>{pricingPlans.map((plan, index) => (
                </div><div>{plan.popular && (
                    </div><div> </div><span>Most Popular
                      </span></span>
                    </div>
                  )}
                  
                  <div> </div><h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div> </div><span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>

                  <ul>{plan.features.map((feature, featureIndex) => (
                      </ul><li> </li><CheckCircle> </CheckCircle><span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link>{plan.cta}
                  </Link></Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-on Services */}
        <section> </section><div> </div><div> </div><h2 className="text-4xl font-bold text-white mb-6">Add-on Services</h2>
              <p>Enhance your package with additional services tailored to your specific needs.
              </p></p>
            </div>

            <div>{addOnServices.map((service, index) => (
                </div><div> </div><h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</p>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section> </section><div> </div><div> </div><h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p>Common questions about our pricing and services.
              </p></p>
            </div>

            <div> </div><div> </div><h3 className="text-xl font-bold text-white mb-4">Can I change my plan anytime?</h3>
                <p>Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.
                </p></p>
              </div>

              <div> </div><h3 className="text-xl font-bold text-white mb-4">Do you offer custom pricing?</h3>
                <p>Yes, we offer custom pricing for enterprise clients with specific requirements. Contact us to discuss your needs.
                </p></p>
              </div>

              <div> </div><h3 className="text-xl font-bold text-white mb-4">What's included in support?</h3>
                <p>All plans include email support. Professional and Enterprise plans include priority support and dedicated account managers.
                </p></p>
              </div>

              <div> </div><h3 className="text-xl font-bold text-white mb-4">Is there a free trial?</h3>
                <p>We offer a 30-day free trial for all plans. No credit card required to get started.
                </p></p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section> </section><div> </div><h2>Ready to Get Started?
            </h2></h2>
            <p>Choose your plan and start transforming your business today.
            </p></p>
            <div> </div><Link> </Link><span className="relative z-10">Start Free Trial</span>
                <div> </div></Link>
              <Link> </Link><Phone> </Phone><span>Free Consultation</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer> </Footer></>
  )
}
export default PricingPage