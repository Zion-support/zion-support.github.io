import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  XMarkIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "Basic AI consultation",
        "Email support",
        "Standard response time",
        "Basic analytics",
        "Up to 5 users",
        "Monthly reports"
      ],
      limitations: [
        "Limited AI models",
        "Basic customization",
        "Standard security"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for growing businesses with advanced AI needs",
      features: [
        "Advanced AI consultation",
        "Priority support",
        "Fast response time",
        "Advanced analytics",
        "Up to 25 users",
        "Weekly reports",
        "Custom AI models",
        "API access",
        "Advanced security"
      ],
      limitations: [
        "Limited custom development",
        "Standard integration support"
      ],
      popular: true,
      color: "from-purple-500 to-cyan-500"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "Complete AI and IT solutions for large organizations",
      features: [
        "Dedicated AI consultant",
        "24/7 premium support",
        "Instant response time",
        "Real-time analytics",
        "Unlimited users",
        "Custom reporting",
        "Full custom development",
        "Full API access",
        "Enterprise security",
        "On-site support",
        "Custom integrations",
        "Dedicated account manager"
      ],
      limitations: [],
      popular: false,
      color: "from-orange-500 to-red-500"
    }
  ];

  const addOns = [
    {
      name: "AI Model Training",
      price: "$500",
      description: "Custom AI model training for your specific use case"
    },
    {
      name: "Data Migration",
      price: "$200",
      description: "Professional data migration and system integration"
    },
    {
      name: "Training & Support",
      price: "$150/hour",
      description: "Team training and ongoing technical support"
    },
    {
      name: "Custom Development",
      price: "$200/hour",
      description: "Custom feature development and integration"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI and IT solutions. Choose the plan that fits your business needs and budget." />
        <meta name="keywords" content="pricing, AI solutions pricing, IT services pricing, business plans, enterprise solutions" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI and IT solutions 
              with no hidden fees or surprise charges.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800 rounded-lg p-8 border-2 ${
                  plan.popular ? 'border-purple-500' : 'border-slate-700'
                } hover:bg-slate-700 transition-all duration-300 transform hover:scale-105`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.limitations.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-white mb-4">Limitations:</h4>
                      <ul className="space-y-3">
                        {plan.limitations.map((limitation, limitationIndex) => (
                          <li key={limitationIndex} className="flex items-center text-gray-400">
                            <XMarkIcon className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                            <span className="text-sm">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link 
                    to="/contact"
                    className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center`}
                  >
                    Get Started <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Additional Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {addOns.map((addOn, index) => (
                <div key={index} className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-2">{addOn.name}</h3>
                  <p className="text-2xl font-bold text-purple-400 mb-3">{addOn.price}</p>
                  <p className="text-gray-300 text-sm">{addOn.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Can I change my plan anytime?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Is there a free trial available?</h3>
                <p className="text-gray-300">Yes, we offer a 14-day free trial for all our plans. No credit card required to get started.</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can also pay via invoice.</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Do you offer custom pricing?</h3>
                <p className="text-gray-300">Yes, we offer custom pricing for enterprise customers with specific requirements. Contact us to discuss your needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose your plan and start transforming your business with AI and IT solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300 mt-12">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;
