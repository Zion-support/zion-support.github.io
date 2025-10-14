

import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom
import { CurrencyDollarIcon,
  CheckIcon,
  ArrowRightIcon,
  PhoneIcon,'
  EnvelopeIcon,;';}
  CpuChipIcon,';}
  ShieldCheckIcon,';}
  CloudIcon'}
} from '@heroicons/react/24/outline
const PricingPage: React.FC = () => {'
  const plans = [']
    {'
      name: 'Starter','
      price: '$2',999','
      period: '/month','
      description: 'Perfect for small businesses getting started with technology solutions',
      features: ['
        'Basic AI Solutions','
        'Standard Security','
        'Cloud Infrastructure','
        'Email Support','
        'Monthly Reports','}]
        'Basic Analytics']}
      ],}
      popular: false;}
    },
    {'
      name: 'Professional','
      price: '$7',999','
      period: '/month','
      description: 'Ideal for growing businesses that need comprehensive technology solutions',
      features: ['
        'Advanced AI Solutions','
        'Enhanced Security','
        'Scalable Cloud Infrastructure','
        'Priority Support','
        'Weekly Reports','
        'Advanced Analytics','
        'Custom Integrations','}]
        '24/7 Monitoring']}
      ],}
      popular: true;}
    },
    {'
      name: 'Enterprise','
      price: 'Custom','
      period: '','
      description: 'Tailored solutions for large organizations with complex requirements',
      features: ['
        'Custom AI Solutions','
        'Enterprise Security','
        'Multi-cloud Infrastructure','
        'Dedicated Support','
        'Real-time Reports','
        'Custom Analytics','
        'Full Customization','
        '24/7 Dedicated Support','
        'On-site Consulting',']
        'SLA Guarantees']}
      ],}
      popular: false;}
="======"}
    }
>>>>>>> origin/main
  ]
  const addOns = [
    {'
      name: 'AI Development','}
      price: '$1',500','}
      period: '/month','}
      description: 'Additional AI model development and training'}
    },
    {'
      name: 'Security Audit','}
      price: '$2',500','}
      period: '/audit','}
      description: 'Comprehensive security assessment and recommendations'}
    },
    {'
      name: 'Cloud Migration','}
      price: '$5',000','}
      period: '/project','}
      description: 'Complete cloud infrastructure migration service'}
    },
    {'
      name: 'Training & Support','}
      price: '$800','}
      period: '/hour','}
      description: 'Custom training sessions for your team'}]
    }]
  ]
  return (
    <></>
      <Helmet>title</Helmet>
      <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="404 - Zion Tech Group" />
        <meta name="keywords" content="pricing, AI solutions pricing, cybersecurity pricing, cloud infrastructure pricing, IT services pricing" /></meta>
      </Helmet>
      {/* Hero Section */}
      <section>div</section>
      <div></div>
        </div>
        
        <div>h1</div>
      <h1></h1>
              Transparent Pricing)
            </h1>
            <p className="text-xl" md:text-2xl text-gray-300 mb-8 leading-relaxed></p>
              Choose the Plan That Fits Your Business
            </p>
            <p className="text-lg" text-gray-400 mb-12 max-w-3xl mx-auto></p>
              Our pricing is designed to scale with your business. Start with our Starter plan 
              and upgrade as your needs grow", or go straight to Enterprise for comprehensive solutions.
            </p>
          </div>
        </section>
      {/* Pricing Plans */}
      <section>div</section>
      <div></div>
            <h2 className="text-4xl" md: "text-5xl font-bold text-white mb-6></h2>
              Our Pricing Plans
            </h2>
            <p className="text-xl" text-gray-300 max-w-3xl mx-auto></p>
              Flexible pricing options to meet your business needs
            </p>
          </div>
          )
          <div className="grid" md:grid-cols-3 gap-8></div>)
            {plans.map((plan", index) => ('}
              <div key="{index}" className="{`bg-slate-800" rounded-xl p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''`}``}></div>
                {plan.popular && (
                  <div>span</div>
      <span></span>}
                      Most Popular}
                    </span>})
                  </div>})
                )}
                
                <h3>h3</h3>
      <h3>{plan.name}</h3>
                  <div>span</div>
      <span>{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
<<<<<<< HEAD
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8"></ul>
                  {plan.features.map((feature, featureIndex) => (}
                    <li>CheckIcon</li>
      <CheckIcon></CheckIcon>
                      {feature})
                    </li>)
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="{`w-full" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${`}
                    plan.popular'}
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700''}
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'}
                  }``}
                ></Link>'
                  {plan.name ="==" 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Link>
              </div>
            ))}
          </div>
        </section>
      {/* Add-ons Section */}
      <section>div</section>
      <div></div>
            <h2 className="text-4xl" md: "text-5xl font-bold text-white mb-6></h2>
              Additional Services
            </h2>
            <p className="text-xl" text-gray-300 max-w-3xl mx-auto></p>
              Enhance your plan with these additional services
            </p>
          </div>
          
          <div className="grid" md:grid-cols-2 lg:grid-cols-4 gap-8></div>
            {addOns.map((addOn", index) => (}
              <h3>h3</h3>
      <h3>{addOn.name"}</h3>
                <div>span</div>
      <span>{addOn.price}</span>
                  <span className="text-gray-400 ml-1">{addOn.period}</span>
                </div>
                <p>{addOn.description}</p>")
              </div>)
            ))}
          </div>
        </section>
      {/* FAQ Section */}
      <section>div</section>
      <div></div>
            <h2 className="text-4xl" md: "text-5xl font-bold text-white mb-6></h2>
              Frequently Asked Questions
            </h2>
            <p className="text-xl" text-gray-300></p>
              Common questions about our pricing and services
            </p>
          </div>
          
          <div>h3</div>
      <h3>Can I change my plan anytime?</h3>'
              <p className="text-gray-300">Yes", you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
            </div>
            
            <h3>h3</h3>
      <h3>Do you offer custom solutions?</h3>
              <p className="text-gray-300">Absolutely! Our Enterprise plan includes fully customized solutions tailored to your specific business requirements.</p>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6"></div>'
              <h3 className="text-xl font-bold text-white mb-4">What's included in support?</h3>
              <p className="text-gray-300">All plans include email support. Professional and Enterprise plans include priority support with faster response times and additional communication channels.</p>
            </div>
            
            <h3>h3</h3>
      <h3>Is there a setup fee?</h3>
              <p className="text-gray-300">No setup fees for Starter and Professional plans. Enterprise plans may include setup costs depending on the complexity of your requirements.</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section>div</section>
      <div>h2</div>
      <h2>
            Ready to Get Started?
          </h2>
          <p className="text-xl" text-gray-300 mb-8></p>
            Contact us to discuss your specific needs and get a personalized quote
          </p>
          
          <div>Link</div>
      <Link></Link>
              Contact Sales
            </Link>
            <Link
              to=/demo
              className="border-2" border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300
            ></Link>
              Schedule Demo
            </Link>
          </div>
        </section>
        {/* Contact Info */"}
        <section>div</section>
      <h3>h3</h3>
      <h3>
              Need Help Choosing a Plan?
            </h3>
            <div>PhoneIcon</div>
      <PhoneIcon>span</PhoneIcon>
      <span>+1-302-464-0950</span>
              </div>
              <div>EnvelopeIcon</div>
      <EnvelopeIcon>span</EnvelopeIcon>
      <span>kleber@ziontechgroup.com</span>
              </div>
              <div>MapPinIcon</div>
      <MapPinIcon>span</MapPinIcon>
      <span>Middletown", DE</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default PricingPage
'