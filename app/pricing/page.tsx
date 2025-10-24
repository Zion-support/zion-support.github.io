'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const PricingPage: React.FC = () => {}
  const plans = [
    {}
    name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI integration',
        'Email support',
        'Standard features',
        'Monthly reporting'
      ],
      popular: false
},
    {}
    name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'For growing businesses that need advanced AI capabilities',
      features: [
        'Advanced AI features',
        'Priority support',
        'Custom integrations',
        'Dedicated account manager',
        'Advanced analytics',
        'API access'
      ],
      popular: true
},
    {}
    name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex requirements',
      features: [
        'Custom AI solutions',
        '24/7 dedicated support',
        'White-label options',
        'Custom integrations',
        'SLA guarantees',
        'Dedicated infrastructure'
      ],
      popular: false
}
  ];

  return ()
    <>
      <Helmet></Helmet>
        <title>Pricing | Zion Tech Group</title>
        <meta name="description" content="Choose the perfect plan for your AI and IT needs. Flexible pricing options for businesses of all sizes." /></meta>
        <meta name="keywords" content="pricing, plans, AI solutions, IT services, subscription, Zion Tech Group" /></meta>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" /></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1>
              Simple
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"></span>
                Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Choose the perfect plan for your business. No hidden fees, no surprises.
            </p>
          </div>

        {/* Pricing Plans */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="grid md:grid-cols-3 gap-8"></div>
              {plans.map((plan, index) => ()
                <div key={index} className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${}
                  plan.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-700'
                } hover:border-blue-500 transition-all duration-300 relative`}></div>
                  {plan.popular && ()
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold"></span>
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8"></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center"></div>
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8"></ul>
                    {plan.features.map((feature, featureIndex) => ()
                      <li key={featureIndex} className="flex items-center text-gray-300"></li>
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${}
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                      : 'border border-gray-600 text-white hover: bg-gray-700'
}`}></button>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Need a Custom Solution?
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Our Enterprise plan offers completely customized AI and IT solutions tailored to your specific business requirements. Contact us for a personalized quote.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Flexible Scaling</h3>
                  <p className="text-gray-300">Scale your solutions up or down based on your business needs</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">No Hidden Fees</h3>
                  <p className="text-gray-300">Transparent pricing with no surprise charges or hidden costs</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
                  <p className="text-gray-300">Dedicated support from our team of AI and IT experts</p>
                </div>
              </div>

              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200"
                >
                  Contact Us for Custom Pricing
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto"></div>
            <h2 className="text-4xl font-bold text-white text-center mb-12"></h2>
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6"></div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700"></div>
                <h3 className="text-xl font-semibold text-white mb-3"></h3>
                  Can I change my plan anytime?
                </h3>
                <p className="text-gray-300"></p>
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700"></div>
                <h3 className="text-xl font-semibold text-white mb-3"></h3>
                  Is there a free trial available?
                </h3>
                <p className="text-gray-300"></p>
                  Yes, we offer a 14-day free trial for all plans. No credit card required.
                </p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700"></div>
                <h3 className="text-xl font-semibold text-white mb-3"></h3>
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-300"></p>
                  We accept all major credit cards, PayPal, and bank transfers for enterprise plans.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-6"></h2>
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8"></p>
              Join thousands of companies already using our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"></button>
                Start Free Trial
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"></button>
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default PricingPage;