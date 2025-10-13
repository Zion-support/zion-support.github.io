import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckIcon,
  XMarkIcon,
  ArrowRightIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started with AI",
      price: {
        monthly: 299,
        yearly: 2990
      },
      features: [
        "Basic AI Analytics Dashboard",
        "Email Support",
        "Up to 5 Users",
        "10GB Data Storage",
        "Basic Security Features",
        "Monthly Reports"
      ],
      limitations: [
        "Limited API Calls",
        "Basic Customization",
        "Standard Response Time"
      ],
      color: "from-slate-600 to-slate-700",
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with advanced needs",
      price: {
        monthly: 799,
        yearly: 7990
      },
      features: [
        "Advanced AI Analytics Dashboard",
        "Priority Support",
        "Up to 25 Users",
        "100GB Data Storage",
        "Advanced Security Features",
        "Real-time Reports",
        "Custom Integrations",
        "API Access",
        "Training Sessions"
      ],
      limitations: [
        "Limited Custom Development"
      ],
      color: "from-purple-600 to-pink-600",
      popular: true
    },
    {
      name: "Enterprise",
      description: "Comprehensive solution for large organizations",
      price: {
        monthly: 1999,
        yearly: 19990
      },
      features: [
        "Full AI Suite Access",
        "24/7 Dedicated Support",
        "Unlimited Users",
        "Unlimited Data Storage",
        "Enterprise Security",
        "Custom Dashboards",
        "Full API Access",
        "Custom Development",
        "Dedicated Account Manager",
        "On-site Training",
        "SLA Guarantee"
      ],
      limitations: [],
      color: "from-cyan-600 to-blue-600",
      popular: false
    }
  ];

  const addOns = [
    {
      name: "Cybersecurity Suite",
      description: "Advanced security monitoring and threat detection",
      price: {
        monthly: 199,
        yearly: 1990
      },
      features: ["Real-time threat monitoring", "Automated incident response", "Security analytics"]
    },
    {
      name: "Cloud Infrastructure",
      description: "Scalable cloud solutions and management",
      price: {
        monthly: 299,
        yearly: 2990
      },
      features: ["Multi-cloud management", "Auto-scaling", "Cost optimization"]
    },
    {
      name: "Custom Development",
      description: "Tailored solutions for specific business needs",
      price: {
        monthly: 499,
        yearly: 4990
      },
      features: ["Custom applications", "API development", "Integration services"]
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and reflected in your next billing cycle."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and can accommodate enterprise payment terms for larger organizations."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial."
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "We'll notify you when you're approaching your limits and offer options to upgrade or purchase additional capacity."
    },
    {
      question: "Do you offer custom pricing for large organizations?",
      answer: "Yes, we offer custom enterprise pricing for organizations with specific requirements. Contact our sales team for more information."
    },
    {
      question: "What support is included with each plan?",
      answer: "Starter includes email support, Professional includes priority support, and Enterprise includes 24/7 dedicated support."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Choose the perfect plan for your business. Transparent pricing for AI and IT solutions with flexible options." />
        <meta name="keywords" content="pricing, plans, AI solutions pricing, IT services cost, enterprise pricing" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Choose the perfect plan for your business needs. No hidden fees, no surprises.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              All plans include our core AI and IT solutions with different levels of features, 
              support, and customization options.
            </p>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8 bg-slate-900 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-slate-800 rounded-lg p-1 flex">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  billingCycle === 'yearly'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Yearly
                <span className="ml-2 px-2 py-1 bg-green-600 text-white text-xs rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={plan.name}
                className={`relative bg-gradient-to-br ${plan.color} rounded-xl border-2 ${
                  plan.popular ? 'border-purple-500 scale-105' : 'border-slate-600'
                } p-8 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <StarIcon className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">
                      ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                    </span>
                    <span className="text-gray-300 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>

                  <Link 
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-white text-purple-600 hover:bg-gray-100'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4">What's included:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.limitations.length > 0 && (
                    <>
                      <h4 className="text-lg font-semibold text-white mb-4 mt-6">Limitations:</h4>
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <div key={limitationIndex} className="flex items-center gap-3">
                          <XMarkIcon className="w-5 h-5 text-red-400 flex-shrink-0" />
                          <span className="text-gray-300">{limitation}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Add-on Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your plan with additional services tailored to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {addOns.map((addOn, index) => (
              <div 
                key={addOn.name}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-8 hover:border-purple-500 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{addOn.name}</h3>
                <p className="text-gray-300 mb-6">{addOn.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">
                    ${billingCycle === 'monthly' ? addOn.price.monthly : addOn.price.yearly}
                  </span>
                  <span className="text-gray-300 ml-2">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  {addOn.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/contact"
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block"
                >
                  Add to Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Common questions about our pricing and plans
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Enterprise */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              For large organizations with specific requirements, we offer custom enterprise solutions 
              with tailored pricing and features.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PhoneIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone Consultation</h3>
                <p className="text-gray-300">+1-302-464-0950</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EnvelopeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">sales@ziontechgroup.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
                <p className="text-gray-300">Available 24/7</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Sales Team
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}