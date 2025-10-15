import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, X, Star, ArrowRight } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      monthlyPrice: 29,
      annualPrice: 24,
      marketPrice: 49,
      features: [
        "Up to 5 team members",
        "Basic AI tools access",
        "Email support",
        "Standard security",
        "Basic analytics",
        "5GB storage",
        "1 AI service included",
        "Basic templates"
      ],
      limitations: [
        "Limited AI requests (100/month)",
        "Basic customization",
        "Standard templates only"
      ],
      popular: false,
      cta: "Start Free Trial",
      savings: "Save 50% vs market"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 99,
      annualPrice: 79,
      marketPrice: 199,
      features: [
        "Up to 25 team members",
        "Advanced AI tools",
        "Priority support",
        "Enhanced security",
        "Advanced analytics",
        "100GB storage",
        "API access",
        "Custom integrations",
        "3 AI services included",
        "Advanced customization"
      ],
      limitations: [
        "Monthly AI limits (1000/month)",
        "Standard SLA"
      ],
      popular: true,
      cta: "Start Free Trial",
      savings: "Save 60% vs market"
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      monthlyPrice: 299,
      annualPrice: 239,
      marketPrice: 599,
      features: [
        "Unlimited team members",
        "Full AI suite access",
        "24/7 dedicated support",
        "Enterprise security",
        "Custom analytics",
        "Unlimited storage",
        "Full API access",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
        "Custom training",
        "All AI services included",
        "Unlimited AI requests"
      ],
      limitations: [],
      popular: false,
      cta: "Contact Sales",
      savings: "Save 70% vs market"
    }
  ];

  const addOns = [
    {
      name: "Additional Storage",
      description: "Extra storage space for your projects",
      price: "$10/100GB/month"
    },
    {
      name: "Priority Support",
      description: "Faster response times and dedicated support",
      price: "$50/month"
    },
    {
      name: "Custom Development",
      description: "Tailored solutions for your specific needs",
      price: "Contact us"
    },
    {
      name: "Training & Onboarding",
      description: "Comprehensive training for your team",
      price: "$200/session"
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, all plans come with a 14-day free trial. No credit card required to start your trial."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
    },
    {
      question: "Do you offer custom pricing for large organizations?",
      answer: "Yes, we offer custom pricing and enterprise solutions for organizations with specific requirements. Contact our sales team for more information."
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "We'll notify you when you're approaching your limits. You can upgrade your plan or purchase additional resources as needed."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Pricing for AI & IT Solutions</title>
        <meta name="description" content="Choose the perfect plan for your business. Transparent pricing for our AI and IT services with flexible options for every organization size." />
        <meta name="keywords" content="pricing, plans, subscription, ai services, it services, enterprise, business" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for AI and IT solutions" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pricing</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Choose the perfect plan for your business. All plans include a 14-day free trial with no credit card required.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center mb-12">
                <span className={`text-lg font-semibold ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`mx-4 relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    isAnnual ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isAnnual ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-lg font-semibold ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
                  Annual <span className="text-cyan-400 text-sm">(Save 20%)</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-white">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-400 text-lg">/month</span>
                    </div>
                    {isAnnual && (
                      <p className="text-cyan-400 text-sm">Billed annually (${plan.annualPrice * 12}/year)</p>
                    )}
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
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
                            <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                            {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Add-ons & Extras</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your plan with additional services and features
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{addon.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{addon.description}</p>
                  <div className="text-cyan-400 font-semibold">{addon.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get answers to common questions about our pricing and services
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start your free trial today and experience the power of our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;