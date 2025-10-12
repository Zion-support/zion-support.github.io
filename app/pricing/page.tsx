<<<<<<< HEAD
'use client';
import React from 'react';

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Pricing</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Flexible pricing plans to meet your business needs.
          </p>
        </div>
      </div>
=======
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Check, Star, Zap } from 'lucide-react'

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Basic AI consultation',
        'Email support',
        'Monthly reports',
        'Basic analytics',
        '5 hours of support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI solutions',
        'Priority support',
        'Weekly reports',
        'Advanced analytics',
        '20 hours of support',
        'Custom integrations',
        'Training sessions'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Full AI suite',
        '24/7 support',
        'Real-time reports',
        'Custom analytics',
        'Unlimited support',
        'Custom development',
        'Dedicated account manager',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Additional AI Models',
      price: '$500',
      period: '/month',
      description: 'Add more AI models to your existing plan'
    },
    {
      name: 'Priority Support',
      price: '$1,000',
      period: '/month',
      description: 'Get priority support with faster response times'
    },
    {
      name: 'Custom Development',
      price: '$200',
      period: '/hour',
      description: 'Custom development work for specific needs'
    },
    {
      name: 'Training Sessions',
      price: '$1,500',
      period: '/session',
      description: 'One-on-one training sessions for your team'
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.'
    },
    {
      question: 'Do you offer custom pricing?',
      answer: 'Yes, we offer custom pricing for Enterprise plans and large-scale implementations. Contact us for a personalized quote.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for Enterprise clients.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'Setup fees are included in all plans. There are no hidden costs or additional setup charges.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all new customers. Contact us within 30 days for a full refund.'
    },
    {
      question: 'Can I get a demo before purchasing?',
      answer: 'Absolutely! We offer free demos and consultations. Contact us to schedule a personalized demonstration.'
    }
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <>
  </>
=======
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
>>>>>>> origin/main
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Custom solutions available. Get started today." />
        <meta name="keywords" content="AI pricing, IT services pricing, cloud solutions cost, enterprise AI pricing, custom development pricing" />
      </Helmet>
<<<<<<< HEAD
=======

<<<<<<< HEAD
  );
};
>>>>>>> origin/main

export default PricingPage;
=======
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pricing</span>
            </h1>
<<<<<<< HEAD
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include 
              our core AI and IT services with no hidden fees.
=======
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Choose the perfect plan for your business needs. All plans include our core AI and IT solutions with transparent, no-hidden-fees pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Custom Quote
              </Link>
              <Link
                to="#faq"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                    plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Additional Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addOn, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{addOn.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-2xl font-bold text-gray-900">{addOn.price}</span>
                    <span className="text-gray-600 ml-1">{addOn.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{addOn.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our team to discuss your specific needs and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
>>>>>>> origin/main
    </div>
  );
};

export default PricingPage;
=======
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI and IT services.
>>>>>>> origin/main
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
<<<<<<< HEAD
<<<<<<< HEAD
                className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? 'border-cyan-500 bg-cyan-500/10 scale-105'
                    : 'border-white/10 hover:bg-white/10'
=======
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-purple-400 scale-105' : ''
>>>>>>> origin/main
=======
                className={`relative cyber-card ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<<<<<<< HEAD
<<<<<<< HEAD
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
=======
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
=======
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
>>>>>>> origin/main
                    <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
<<<<<<< HEAD
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
=======
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
>>>>>>> origin/main
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

<<<<<<< HEAD
                <Link
                  to="/consultation"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">What's Included</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Free initial consultation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">30-day money-back guarantee</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">No setup fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Flexible payment options</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>
              <p className="text-gray-300 mb-4">
                Need something specific? We offer custom AI and IT solutions 
                tailored to your unique business requirements.
              </p>
              <Link
                to="/contact"
                className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center space-x-2"
              >
                <span>Contact us for a quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 text-center backdrop-blur-lg border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already achieving remarkable results with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Zap className="w-5 h-5" />
                <span>Start Free Trial</span>
              </Link>
              <Link
                to="/contact"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
=======
                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'cyber-button'
                      : 'cyber-button-secondary'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
>>>>>>> origin/main
        </div>
      </section>

<<<<<<< HEAD
export default PricingPage;
=======
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We understand that every business is unique. Contact us to discuss your specific requirements and get a tailored quote.
          </p>
          <button className="cyber-button">
            <Zap className="w-5 h-5 mr-2" />
            Contact Sales
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PricingPage
<<<<<<< HEAD
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
>>>>>>> origin/main
>>>>>>> origin/main
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
