import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Globe, Brain } from 'lucide-react';

const PricingPage = () => {
  const plans = [
    {
      name: "Starter",
      price: "$299",
      period: "per month",
      description: "Perfect for small businesses getting started with AI",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "AI Analytics Dashboard",
        "Basic AI Content Generation",
        "Email Support",
        "5 User Accounts",
        "10GB Storage",
        "Basic Security Features",
        "Monthly Reports",
        "API Access (Limited)"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "per month",
      description: "Ideal for growing businesses with advanced AI needs",
      icon: <Shield className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Everything in Starter",
        "Advanced AI Analytics Pro",
        "AI Cybersecurity Suite",
        "Priority Support",
        "25 User Accounts",
        "100GB Storage",
        "Advanced Security Features",
        "Real-time Monitoring",
        "Custom Integrations",
        "API Access (Full)",
        "Dedicated Account Manager",
        "Training & Onboarding"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "Tailored solutions for large organizations",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "Everything in Professional",
        "Custom AI Solutions",
        "White-label Options",
        "24/7 Premium Support",
        "Unlimited User Accounts",
        "Unlimited Storage",
        "Enterprise Security",
        "Custom Integrations",
        "Dedicated Infrastructure",
        "SLA Guarantees",
        "Custom Training",
        "On-site Support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const microSaasPlans = [
    {
      name: "Zion Analytics Pro",
      price: "$299",
      period: "per month",
      description: "AI-powered business intelligence platform",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reports", "API integration"]
    },
    {
      name: "Zion Security Shield",
      price: "$499",
      period: "per month",
      description: "Advanced cybersecurity protection",
      features: ["Threat detection", "Automated response", "Compliance monitoring", "24/7 monitoring"]
    },
    {
      name: "Zion Cloud Vault",
      price: "$99",
      period: "per month",
      description: "Secure cloud storage solution",
      features: ["End-to-end encryption", "Unlimited storage", "File sharing", "Version control"]
    },
    {
      name: "Zion AI CRM Pro",
      price: "$199",
      period: "per month",
      description: "AI-powered customer relationship management",
      features: ["Lead scoring", "Automation", "Analytics", "Integration"]
    }
  ];

  const addOns = [
    {
      name: "Additional Storage",
      price: "$50",
      period: "per 100GB/month",
      description: "Extra storage for your data and files"
    },
    {
      name: "Premium Support",
      price: "$200",
      period: "per month",
      description: "Priority support with faster response times"
    },
    {
      name: "Custom Development",
      price: "$150",
      period: "per hour",
      description: "Custom features and integrations"
    },
    {
      name: "Training Sessions",
      price: "$500",
      period: "per session",
      description: "Team training and onboarding sessions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group | AI Solutions & Micro SAAS Pricing</title>
        <meta name="description" content="Transparent pricing for our AI solutions and micro SAAS products. Choose the plan that fits your business needs. Free trials available." />
        <meta name="keywords" content="pricing, AI solutions pricing, micro SAAS pricing, business plans, enterprise solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Simple, Transparent Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your business. All plans include a 14-day free trial with no credit card required.
          </p>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-cyan-400 shadow-cyan-500/25 bg-white/15' 
                    : 'border-white/20 hover:border-cyan-400/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center text-white`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 group ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Micro SAAS Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Individual tools designed for specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {microSaasPlans.map((plan, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{plan.price}</span>
                  <span className="text-gray-300 text-sm ml-1">{plan.period}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Add-ons & Extras</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your plan with additional services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                <div className="mb-4">
                  <span className="text-xl font-bold text-cyan-400">{addon.price}</span>
                  <span className="text-gray-300 text-sm ml-1">{addon.period}</span>
                </div>
                <button className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              Common questions about our pricing and plans
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-3">Do you offer free trials?</h3>
              <p className="text-gray-300">Yes! All our plans come with a 14-day free trial. No credit card required to get started.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-3">Can I change plans anytime?</h3>
              <p className="text-gray-300">Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for enterprise plans.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-3">Is there a setup fee?</h3>
              <p className="text-gray-300">No setup fees for any of our plans. You only pay the monthly subscription fee.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-3">Do you offer custom pricing?</h3>
              <p className="text-gray-300">Yes! Contact our sales team for custom pricing based on your specific needs and requirements.</p>
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
            Join thousands of businesses already using our AI solutions to drive growth and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Demo
              <Star className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;