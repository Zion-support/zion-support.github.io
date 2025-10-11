import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Check, Star, ArrowRight, Zap, Shield, Users } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const PricingPage: React.FC = () => {}
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [;
    {}
      name: 'Starter'
      description: 'Perfect for small businesses getting started with AI'
      price: { monthl,
      y: 999, yearly: 9999 }
      features: [
        'Monthly reports'
      ]
      popular: false
      ico,
      n: Zap
    },
    {}
      name: 'Professional'
      ]
      popular: true
      ico,
      n: Star
    },
    {}
      name: 'Enterprise'
      ]
      popular: false
      ico,
      n: Shield
    }
  ]

  const addOns = [;
    {}
      name: 'Additional Users'
      description: 'Add more team members to your plan'
      price: { monthl,
      y: 50, yearly: 500 }
    },
    {}
      name: 'Priority Support'
      description: 'Get faster response times and dedicated support'
      price: { monthl,
      y: 200, yearly: 2000 }
    },
    {}
      name: 'Custom Development'
      description: 'Bespoke solutions tailored to your needs'
      price: { monthl,
      y: 1000, yearly: 10000 }
    },
    {}
      name: 'Training & Onboarding'
      description: 'Comprehensive training for your team'
      price: { monthl,
      y: 500, yearly: 5000 }
    }
  ]

  const addOns = [;
    {}
      name: 'AI Chatbot'
      price: '$500/month'
      descriptio,
      n: 'Intelligent customer support chatbot'
    },
    {}
      name: 'Data Analytics Pro'
      price: '$800/month'
      descriptio,
      n: 'Advanced business intelligence dashboard'
    },
    {}
      name: 'Cybersecurity Suite'
      pric,
      e: '$1,200/month'
      description: 'Comprehensive security monitoring'
    },
    {}
      name: 'Custom Development'
      price: '$150/hour'
      descriptio,
      n: 'Tailored solutions for your business'
    }
  ];

  return ()
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12"></div>
              <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}></span>
                Monthly

              <button></button>
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="mx-4 relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focu,
      s:ring-offset-slate-900"
              >
                <span></span>
                  className={`${}
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />

              <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}></span>
                Yearly

              {billingCycle === 'yearly' && ()
                <span className="ml-2 bg-green-500 text-white text-sm px-2 py-1 rounded-full"></span>
                  Save 20%

              )},
    {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-4xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl m,
      d:text-4xl font-bold text-white mb-4"></h2>
                Frequently Asked Questions

              <p className="text-xl text-gray-300"></p>
                Everything you need to know about our pricing and services


            <div className="space-y-8"></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"></div>
                <h3 className="text-xl font-semibold text-white mb-3"></h3>
                  Can I change my plan at any time?

                <p className="text-gray-300"></p>
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.


              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"></div>
                <h3 className="text-xl font-semibold text-white mb-3"></h3>
                  Do you offer custom pricing for large enterprises?

                <p className="text-gray-300"></p>
                  Absolutely! We offer custom pricing and solutions for large enterprises with specific requirements. Contact us to discuss your needs.


              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"></div>
                <h3 className="text-xl font-semibold text-white mb-3"></h3>
                  What's included in the support?

                <p className="text-gray-300"></p>
                  Support includes email support, documentation, and access to our knowledge base. Higher tiers include priority support and dedicated account managers.


              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"></div>
                <h3 className="text-xl font-semibold text-white mb-3"></h3>
                  Is there a free trial available?

                <p className="text-gray-300"></p>
                  Yes, we offer a 14-day free trial for all our plans. No credit card required to get started.





        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Ready to Get Started?

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>
              Choose your plan and start transforming your business with our AI and IT solutions today.

            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"></button>
                Start Free Trial

              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hove,
      r:text-white transition-all duration-300"></button>
                Contact Sales





      <Footer /></Footer>
    </>
  )
}
