import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started with AI",
      monthlyPrice: 99,
      yearlyPrice: 990,
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Basic AI Analytics",
        "Email Support",
        "5 AI Models",
        "1GB Data Storage",
        "Basic Reporting",
        "Standard Templates"
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with advanced needs",
      monthlyPrice: 299,
      yearlyPrice: 2990,
      icon: <Shield className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Advanced AI Analytics",
        "Priority Support",
        "20 AI Models",
        "10GB Data Storage",
        "Advanced Reporting",
        "Custom Templates",
        "API Access",
        "Team Collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "Complete solution for large organizations",
      monthlyPrice: 999,
      yearlyPrice: 9990,
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "Unlimited AI Analytics",
        "24/7 Dedicated Support",
        "Unlimited AI Models",
        "Unlimited Data Storage",
        "Custom Reporting",
        "White-label Solutions",
        "Advanced API Access",
        "Enterprise Security",
        "Custom Integrations",
        "Dedicated Account Manager"
      ],
      popular: false
    }
  ];

  const microSaasPlans = [
    {
      name: "Zion Analytics Pro",
      price: 29,
      period: "per month",
      description: "AI-powered business intelligence platform",
      features: ["Real-time Analytics", "Custom Dashboards", "Data Visualization", "Export Reports"]
    },
    {
      name: "Zion Security Shield",
      price: 49,
      period: "per month",
      description: "Advanced cybersecurity protection",
      features: ["Threat Detection", "Real-time Monitoring", "Security Reports", "24/7 Alerts"]
    },
    {
      name: "Zion Cloud Vault",
      price: 9,
      period: "per month",
      description: "Secure cloud storage solution",
      features: ["100GB Storage", "File Encryption", "Backup & Sync", "Access Control"]
    }
  ];

  const addOns = [
    {
      name: "Custom AI Model Development",
      price: "From $5,000",
      description: "Bespoke AI models tailored to your specific business needs"
    },
    {
      name: "Data Migration Services",
      price: "From $2,000",
      description: "Seamless migration of your existing data to our platforms"
    },
    {
      name: "Training & Support",
      price: "From $500/day",
      description: "Comprehensive training for your team on our solutions"
    },
    {
      name: "Custom Integrations",
      price: "From $3,000",
      description: "Integration with your existing business systems and tools"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Pricing - AI Solutions & IT Services Plans | Zion Tech Group"
        description="Transparent pricing for AI solutions, IT services, and micro SAAS. Choose the perfect plan for your business needs with flexible options and no hidden fees."
        keywords="pricing, AI solutions pricing, IT services cost, micro SAAS pricing, business plans, technology pricing"
        canonical="https://ziontechgroup.com/pricing"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Simple, Transparent
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your business needs. All plans include our core features 
            with no hidden fees or surprise charges.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Save 20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                    <div className="text-white">
                      {plan.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use software solutions with transparent pricing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaasPlans.map((plan, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-cyan-400">${plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="w-full py-2 px-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center block"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your solution with our professional services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-white">{addon.name}</h3>
                  <span className="text-cyan-400 font-medium">{addon.price}</span>
                </div>
                <p className="text-gray-300">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-3">
                Can I change my plan at any time?
              </h3>
              <p className="text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated 
                and reflected in your next billing cycle.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-3">
                Is there a free trial available?
              </h3>
              <p className="text-gray-300">
                Yes, we offer a 14-day free trial for all our plans. No credit card required 
                to get started.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-300">
                We accept all major credit cards, PayPal, and bank transfers for enterprise plans.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-3">
                Do you offer custom pricing for large organizations?
              </h3>
              <p className="text-gray-300">
                Yes, we offer custom pricing and solutions for enterprise clients. 
                Contact us to discuss your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Choose your plan and start transforming your business today. 
            Need help deciding? Contact our team for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/consultation"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;