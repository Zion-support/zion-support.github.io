import React, {useState} from 'react'
import {Helmet} from 'react-helmet-async';
import {Check, Star, ArrowRight, Zap, Shield, Users} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () =>

      icon: Shield} ]

  const addOns = [
    
      price: { monthl, y: 50, yearly: 500} },
    
      price: { monthl, y: 200, yearly: 2000} },
    
      price: { monthl, y: 1000, yearly: 10000} },
    
      price: { monthl, y: 500, yearly: 5000} }
  ]

  const addOns = [
    
      description: 'Intelligent customer support chatbot'} ,
    
      description: 'Advanced business intelligence dashboard'} ,
    
      description: 'Comprehensive security monitoring'} ,
    
      description: 'Tailored solutions for your business'} ]
  return (
    <>
</p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'} `}>
                Monthly
              </span>
              <button>
                onClick=
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}>
                />
              </button>
              <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'} `}>
                Yearly
              </span>
              
                  Save 20%}
                </span>
              )}
            </div>

      <Footer />
    </>
          </div>

      <Footer />
    </>
        </div>

      <Footer />
    </>
      </section>

                </div>

      <Footer />
    </>
        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the powerful features that make our solutions stand out.
              </p>
            </div>

      <Footer />
    </>
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Can I change my plan at any time?
                </h3>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                </p>
              </div>

      <Footer />
    </>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Do you offer custom pricing for large enterprises?
                </h3>
                <p className="text-gray-300">
                  Absolutely! We offer custom pricing and solutions for large enterprises with specific requirements. Contact us to discuss your needs.
                </p>
              </div>

      <Footer />
    </>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  What's included in the support?
                </h3>
                <p className="text-gray-300">
                  Support includes email support, documentation, and access to our knowledge base. Higher tiers include priority support and dedicated account managers.
                </p>
              </div>

      <Footer />
    </>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Is there a free trial available?
                </h3>
                <p className="text-gray-300">
                  Yes, we offer a 14-day free trial for all our plans. No credit card required to get started.
                </p>
              </div>

      <Footer />
    </>
            </div>

      <Footer />
    </>
          </div>

      <Footer />
    </>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the benefits of working with industry leaders.
              </p>

            <div className=">
    ,>
    d: grid-cols-2 l, g:grid-cols-3 gap-8">
              
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3">
                    <span className="text-lg font-medium text-gray-900">
                  </div>
              ))}
            </div>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Contact us today to learn how our solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Us>
              </button>
              <button className=">
    ,>
    r: bg-blue-600 hove, r:text-white transition-colors">
                Schedule Demo
              </button>
            </div>

      <Footer />
    </>
          </div>

      <Footer />
    </>
        </section>
      </div>

      <Footer />
    </>
      <Footer />
    </>
  )

  </Footer>
