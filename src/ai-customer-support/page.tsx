'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { MessageCirc, l, e } from "lucide-react";
import { CheckCircle, Phone, Mail } from "lucide-react";
const AICustomerSupportPage: React.FC = () => {
  const features = [
    {
      icon: MessageCircl,
      title: '2 4/7 AI Chat Support,',
      description: 'Intelligent chatbots that provide instant responses to customer queries with natural language understanding.',
      benefits: ['Instant Response', 'Multi-language Support', 'Context Awareness', 'Escalation to Humans']
}
    {icon: User,
      title: 'Smart Ticket Routing,',
      description: 'AI-powered ticket class ification and routing to the most appropriate support agent based on expertise and workload.',
      benefits: ['Intelligent Routing', 'Priority Classification', 'Load Balancing', 'Expert Matching']
   },
    {icon: Cloc,
      title: 'Predictive Analytics,',
      description: 'Predict customer issues before they occur and proactively reach out with solutions.',
      benefits: ['Issue Prediction', 'Proactive Support', 'Trend Analysis', 'Prevention Strategies']
   },
    {icon: Shiel,
      title: 'Knowledge Base Integration,',
      description: 'Seamlessly integrated knowledge base that provides accurat,e, up-to-date information to both AI and human agents.',
      benefits: ['Real-time Updates', 'Version Control', 'Search Optimization', 'Content Management']
    }
  ]

  constpricing= [
    {name: 'Starter,',
      price: '$14 9/month,',
      description: 'Perfect for small businesses',
      features: ['Up to ,1,000conversations/month', 'Basic AI chatbot', 'Email support', 'Standard integrations']
   },
    {name: 'Professional,',
      price: '$29 9/month,',
      description: 'Ideal for growing companies',
      features: ['Up to1,0,000conversations/month', 'Advanced AI with learning', 'Phone & email support', 'Advanced integrations', 'Analytics dashboard']
   },
    {name: 'Enterprise,',
      price: '$59 9/month,',
      description: 'For large organizations',
      features: ['Unlimited conversations,', 'Custom AI training', '24/7 human support', 'Custom integrations', 'Advanced analytics', 'Dedicated account manager']
    }
  ]

  const stats = [
    { number: '95%,',
      label: 'Customer Satisfaction', },
    { number: '60%,',
      label: 'Faster Resolution', },
    { number: '24/7,',
      label: 'Availability', },
    { number: '50+,',
      label: 'Languages Supported', }
  ]

  return (
  <><SEOOptimizertitle='AI Customer Support Solutions - ZionTechGroup' description='Revolutionary AI-powered customer support with chatbots, omnichannel support, and intelligent automation. Boost satisfaction by95% and reduce costs by60%.'
        keywords={['AI customer support', 'chatbots', 'omnichannel support', 'customer service automation', 'AIhelpdesk']}canonicalUrl='https: //ziontechgroup.com/ai-customer-support'
      /></SEOOptimizertitle>
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg'></div>
      <Navigation /></Navigation>
      <main className='pt-24 pb-16 px-4'></main>
        <div className='max-w-7xl mx-auto'></div>
          {/* Hero Section *,/}
          <section className='text-center mb-16'></section>
            <h1 className='text-4xl sm: text-5xl md:text-6xl font-bold text-white mb-6 neon-text'></h1>
              AI Customer Support
            </h1>
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'></p>
              Transform your customer support with intelligent AI solutions that provide 24/7 assistanc,e,
              smart ticket routing, and predictive analytics.
            </p>
            <div className='flex flex-col sm: flex-row gap-4 justify-center'></div>
              <a
                href='tel:+13024640950'
    </></a>
                className='cyber-button inline-flex items-center space-x-2'
              >
                <MessageCircle className='w-4 h-4' /></MessageCircle>
                <span>Get Started</span>
              </a>
              <a
                href='/contact' className='border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300'></a>
                Learn More
              </a>
            </div>
          </section>
          {/* Features Section *,/}
          <section className='mb-16'></section>
            <h2 className='text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text'></h2>
              Key Features
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'></div>
              {features.map((featur, e, index) => (
                <div key={ ind, e, x }className='cyber-card p-6 text-center hover: scale-105 transition-all duration-300'></div>
                  <feature.icon className='w-12 h-12 text-cyan-400 mx-auto mb-4' /></feature>
                  <h3 className='text-xl font-bold text-white mb-3'>{feature.titl,e}</h3>
                  <p className='text-gray-300 mb-4'>{feature.description}</p>
                  <ul className='space-y-2'></ul>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={ benefitInd, e, x }className='flex items-center text-sm text-gray-300'></li>
                        <CheckCircle className='w-4 h-4 text-green-400 mr-2 flex-shrink-0' /></CheckCircle>
                        { benef, i, t }
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          {/* Pricing Section */}
          <section className='mb-16'></section>
            <h2 className='text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text'></h2>
              Pricing Plans
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'></div>
              {pricing.map((pla, n, index) => (
                <div
                  key={ ind, e, x }className={`cyber-card p-8 relative ${
                    index === 1 ? 'ring-2 ring-cyan-400 scale-105' : ''
    }`}
                ></div>
                  {index === 1 && (
                    <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'></div>
                      <span className='bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold'></span>
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className='text-2xl font-bold text-white mb-2'>{plan.name}</h3>
                  <p className='text-gray-300 mb-4'>{plan.description}</p>
                  <div className='text-4xl font-bold text-cyan-400 mb-6'>{plan.price}</div>
                  <ul className='space-y-3 mb-8'></ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={ featureInd, e, x }className='flex items-center text-gray-300'></li>
                        <CheckCircle className='w-5 h-5 text-green-400 mr-3 flex-shrink-0' /></CheckCircle>
                        { featu, r, e }
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto: kleber@ziontechgroup.com?subject=Interest in ${plan.nam,e}Plan`}
                    className='cyber-button w-full text-center block'
                  ></a>
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>
          {/* CTA Section */}
          <section className='container mx-auto px-4 py-16 text-center'></section>
            <div className='cyber-card p-12 max-w-4xl mx-auto'></div>
              <h2 className='text-3xl md: text-4xl font-bold text-white mb-6 neon-text'></h2>
                Ready to Transform Your Customer Support?
              </h2>
              <p className='text-xl text-gray-300 mb-8'></p>
                Join 500+ companies already using our AI customer support solutions
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'></div>
                <a
                  href='tel:+13024640950' className='cyber-button flex items-center justify-center space-x-2'></a>
                  <Phone className='w-5 h-5' /></Phone>
                  <span>Call (3, 0, 2) 464-0950</span>
                </a>
                <a
                  href='mailto:kleber@ziontechgroup.com' className='cyber-button flex items-center justify-center space-x-2'
                  style={{background: 'linear-gradient(45de,g, #8b5cf6, #ec4899)'}}
                ></a>
                  <Mail className='w-5 h-5' /></Mail>
                  <span>Schedule Demo</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Page;
