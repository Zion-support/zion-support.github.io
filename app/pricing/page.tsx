import React from 'react';
import { Helmet , ArrowRight, CheckCircle, Brain, Zap, Globe  } from "react-helmet-async";
;
const PricingPage: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI Integration',
        'Cloud Infrastructure Setup',
        'Email Support',
        'Monthly Reports',
'Basic Analytics Dashboard',
        'Up to 5 users',
        'Standard SLA'
      ],
      popular: false,
      cta: 'Get Started',
      icon: Users;
    },
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing companies with advanced needs',
      features: [
        'Advanced AI Solutions',
        'Custom Development',
        'Priority Support',
        'Weekly Reports',
        'Advanced Analytics',
'Up to 25 users',
        '99.9% SLA',
        'Dedicated Account Manager',
        'Custom Integrations'
      ],
      popular: true,
      cta: 'Start Free Trial',
      icon: Building;
    },
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Full AI Suite',
        'White-label Solutions',
        '24/7 Premium Support',
        'Real-time Monitoring',
'Custom Analytics',
        'Unlimited users',
        '99.99% SLA',
        'Dedicated Team',
        'On-premise Deployment',
        'Custom Training',
      ],
      popular: false,
      cta: 'Contact Sales',
      icon: Shield;
    }
  ];
;
return (
    <React.Fragment>
      </Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
;
export default PricingPage;
            </div><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include ;
              our core AI and IT services with no hidden fees.
                className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular;
                    ? 'border-cyan-500 bg-cyan-500/10 scale-105'
                    : 'border-white/10 hover:bg-white/10'
                    </p><div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1" /><Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
                <div className="text-center mb-8" /><h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2" /><li key={featureIndex} className="flex items-center space-x-3" /><CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <Link;
                  to="/consultation"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}
                 /><span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" /><div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10" /><h3 className="text-2xl font-bold text-white mb-4">What's Included</h3>
              <ul className="space-y-3" /><li className="flex items-center space-x-3" /><CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Free initial consultation</span>
                </li>
                <li className="flex items-center space-x-3" /><CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">30-day money-back guarantee</span>
                </li>
                <li className="flex items-center space-x-3" /><CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">No setup fees</span>
                </li>
                <li className="flex items-center space-x-3" /><CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Flexible payment options</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-500" /><h3 className="text-xl font-semibold text-gray-900 mb-4">Professional</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">$299</p><span className="text-lg text-gray-600">/month</span></p>
              <ul className="space-y-2 text-gray-600" /><li>Advanced AI features</li>
                <li>Priority support</li>
                <li>Custom templates</li>
                <li>Analytics dashboard</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6" /><h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">$999</p><span className="text-lg text-gray-600">/month</span></p>
              <ul className="space-y-2 text-gray-600" /><li>Full AI suite</li>
                <li>24/7 dedicated support</li>
                <li>Custom development</li>
                <li>Advanced analytics</li>
                <li>White-label options</li>
              </ul>
            </div>
          </div>
{/* Hero Section */}
        <section className="relative py-20 px-4" /><div className="max-w-7xl mx-auto text-center" /><h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, </h1><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Transparent</span> Pricing;
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core AI and IT solutions with no hidden fees.</p>
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400" /><span className="flex items-center" /><CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                No Setup Fees;
              </span>
              <span className="flex items-center" /><CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Cancel Anytime;
              </span>
              <span className="flex items-center" /><CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                30-Day Free Trial;
              </span>
            </div>
          </div>
        </section>
        {/* Pricing Cards */}
        <section className="py-16 px-4" /><div className="max-w-7xl mx-auto" /><div className="grid gap-8 md:grid-cols-3">
              {plans.map((plan, index) => (
                </div><div;
                  key={plan.name}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                    plan.popular;
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-400/20 scale-105'
                      : 'border-slate-700 hover:border-slate-600'
                  } transition-all duration-300`}
                >
                  {plan.popular && (
                    </div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2" /><span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center" /><Star className="w-4 h-4 mr-1" />
                        Most Popular;
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8" /><div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4" /><plan.icon className="w-8 h-8 text-slate-900" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center" /><span className="text-5xl font-bold text-white">{plan.price}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
<Link;
                    to={plan.name === 'Enterprise' ? '/contact' : '/contact'}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular;
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 hover:from-cyan-300 hover:to-purple-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'
                    }`}
                  >
                    {plan.cta}
                    </Link><ArrowRight className="w-5 h-5 ml-2" />
                </div>
              ))}
            </div>
          </div>
        </section>
{/* Add-ons Section */}
        <section className="py-16 px-4 bg-slate-800/30" /><div className="max-w-7xl mx-auto" /><div className="text-center mb-12" /><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Additional Services</h2>
              </h2>
              <p className="text-xl text-gray-300">
                Enhance your solution with these optional add-ons</p>
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {addOns.map((addon, index) => (
                </div><div;
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-all duration-300"
                 /><h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                  <p className="text-2xl font-bold text-cyan-400 mb-3">{addon.price}</p>
                  <p className="text-gray-400 text-sm">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="py-16 px-4" /><div className="max-w-4xl mx-auto" /><h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Frequently Asked Questions</h2>
            </h2>
            <div className="space-y-6" /><div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6" /><h3 className="text-lg font-semibold text-white mb-2">
                  Can I change my plan later?</h3>
                </h3>
                <p className="text-gray-400">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.</p>
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6" /><h3 className="text-lg font-semibold text-white mb-2">
                  Is there a free trial available?</h3>
                </h3>
                <p className="text-gray-400">
                  Yes, we offer a 30-day free trial for all plans. No credit card required to get started.</p>
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6" /><h3 className="text-lg font-semibold text-white mb-2">
                  What support is included?</h3>
                </h3>
                <p className="text-gray-400">
                  All plans include email support. Professional and Enterprise plans include priority support and dedicated account managers.</p>
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6" /><h3 className="text-lg font-semibold text-white mb-2">
                  Do you offer custom solutions?</h3>
                </h3>
                <p className="text-gray-400">
                  Yes, our Enterprise plan includes custom development and white-label solutions tailored to your specific needs.</p>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 px-4" /><div className="max-w-4xl mx-auto text-center" /><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?</h2>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI and IT solutions.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /><Link;
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
              >
                Start Free Trial;
                </Link><Zap className="w-5 h-5 ml-2" />
              </Link>
              <Link;
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-white font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                Contact Sales;
                </Link><ArrowRight className="w-5 h-5 ml-2" />
            </div>
          </div>
        </section>
        {/* Custom Solutions */}
        <section className="py-16 px-4" /><div className="max-w-7xl mx-auto" /><div className="cyber-card hologram-card p-12 text-center" /><h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Need a Custom Solution?</h2>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We create tailored AI and IT solutions that perfectly fit your unique business requirements. 
                Get a personalized quote and dedicated support.</p>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8" /><div className="text-left" /><h3 className="text-xl font-bold text-white mb-4">What's Included:</h3>
                  <ul className="space-y-2 text-gray-300" /><li className="flex items-center" /><CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Custom AI Development;
                    </li>
                    <li className="flex items-center" /><CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Dedicated Project Manager;
                    </li>
                    <li className="flex items-center" /><CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      24/7 Technical Support;
                    </li>
                    <li className="flex items-center" /><CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Training & Documentation;
                    </li>
                  </ul>
                </div>
                <div className="text-left" /><h3 className="text-xl font-bold text-white mb-4">Contact Us:</h3>
                  <div className="space-y-4" /><a;
                      href="tel:+13024640950"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                     /><Phone className="w-5 h-5 mr-3" />
                      <span>(302) 464-0950</span>
                    </a>
                    <a;
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                     /><Mail className="w-5 h-5 mr-3" />
                      <span>kleber@ziontechgroup.com</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" /><Link;
                  to="/contact"
                  className="cyber-button text-center"
                >
                  Get Custom Quote;
                  </Link><ArrowRight className="w-4 h-4 inline ml-2" />
                </Link>
                <a;
                  href="tel:+13024640950"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 text-center"
                >
                  Call Now</a>
                </a>
              </div>
export default PricingPage;
  return (
    <>
      <Helmet /><title>Pricing - Zion Tech Group</title>
        </div>
      </div>
    </React.Fragment>
  )
}
export default PricingPage;
  );
};
;