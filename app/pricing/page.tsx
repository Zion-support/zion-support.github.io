import { ArrowRight, CheckCircle, Star, Zap, Shield, Globe, Database, Code, Brain, Cloud, Lock, BarChart3, Users, Settings, Target, TrendingUp, Clock, DollarSign } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Pricing() {
  const microSaasPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5 data sources",
        "Basic dashboards",
        "Standard reports",
        "Email support",
        "1 user account"
      ],
      popular: false,
      category: "Analytics"
    },
    {
      name: "Professional",
      price: "$199",
      period: "month",
      description: "Ideal for growing companies",
      features: [
        "Up to 20 data sources",
        "Advanced dashboards",
        "Predictive analytics",
        "Priority support",
        "Up to 10 user accounts",
        "API access"
      ],
      popular: true,
      category: "Analytics"
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited data sources",
        "Custom dashboards",
        "Advanced ML models",
        "24/7 support",
        "Unlimited users",
        "White-label options",
        "Custom integrations"
      ],
      popular: false,
      category: "Analytics"
    }
  ];

  const aiServicePlans = [
    {
      name: "AI Starter",
      price: "$199",
      period: "month",
      description: "Basic AI capabilities",
      features: [
        "AI content generation",
        "Basic analytics",
        "Email support",
        "Standard models",
        "1 user account"
      ],
      popular: false,
      category: "AI Services"
    },
    {
      name: "AI Professional",
      price: "$399",
      period: "month",
      description: "Advanced AI features",
      features: [
        "Advanced AI models",
        "Custom training",
        "Priority support",
        "API access",
        "Up to 10 users",
        "Custom integrations"
      ],
      popular: true,
      category: "AI Services"
    },
    {
      name: "AI Enterprise",
      price: "$799",
      period: "month",
      description: "Full AI suite",
      features: [
        "Custom AI models",
        "Dedicated support",
        "White-label options",
        "Unlimited users",
        "Custom development",
        "24/7 support"
      ],
      popular: false,
      category: "AI Services"
    }
  ];

  const itServicePlans = [
    {
      name: "Basic IT",
      price: "$1,500",
      period: "month",
      description: "Essential IT services",
      features: [
        "Basic monitoring",
        "Email support",
        "Standard security",
        "Monthly reports",
        "8x5 support"
      ],
      popular: false,
      category: "IT Services"
    },
    {
      name: "Professional IT",
      price: "$3,500",
      period: "month",
      description: "Comprehensive IT solutions",
      features: [
        "Advanced monitoring",
        "Priority support",
        "Enhanced security",
        "Weekly reports",
        "24/7 support",
        "Custom solutions"
      ],
      popular: true,
      category: "IT Services"
    },
    {
      name: "Enterprise IT",
      price: "$7,500",
      period: "month",
      description: "Full enterprise support",
      features: [
        "Complete IT management",
        "Dedicated team",
        "Enterprise security",
        "Real-time reports",
        "24/7 support",
        "Custom development",
        "SLA guarantees"
      ],
      popular: false,
      category: "IT Services"
    }
  ];

  const addOns = [
    {
      name: "Additional User",
      price: "$25",
      period: "month",
      description: "Add extra users to your plan"
    },
    {
      name: "Priority Support",
      price: "$99",
      period: "month",
      description: "Get faster response times"
    },
    {
      name: "Custom Integration",
      price: "$500",
      period: "one-time",
      description: "Connect with your existing systems"
    },
    {
      name: "Training Session",
      price: "$200",
      period: "hour",
      description: "Get personalized training for your team"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Pricing Plans</title>
        <meta
          name="description"
          content="View our transparent pricing for AI services, IT solutions, and micro SAAS products. Choose the plan that fits your business needs."
        />
        <meta
          name="keywords"
          content="pricing, AI services pricing, IT services cost, micro SAAS pricing, business solutions cost"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include a 14-day free trial 
              and no setup fees.
            </p>
          </div>
        </section>

        {/* Micro SAAS Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use software solutions with transparent monthly pricing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {microSaasPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular ? 'border-cyan-400 ring-2 ring-cyan-400/20' : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI solutions with flexible pricing options.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiServicePlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular ? 'border-purple-400 ring-2 ring-purple-400/20' : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions with scalable pricing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {itServicePlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular ? 'border-green-400 ring-2 ring-green-400/20' : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Add-ons & Extras
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your plan with additional services and features.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{addon.name}</h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">
                    {addon.price}
                    <span className="text-gray-300 text-sm ml-1">/{addon.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Common questions about our pricing and services.
              </p>
            </div>
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Do you offer free trials?
                </h3>
                <p className="text-gray-300">
                  Yes! All our plans include a 14-day free trial with full access to features. 
                  No credit card required to start.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Can I change plans anytime?
                </h3>
                <p className="text-gray-300">
                  Absolutely! You can upgrade or downgrade your plan at any time. 
                  Changes take effect immediately and we'll prorate any billing differences.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-300">
                  We accept all major credit cards, PayPal, and bank transfers. 
                  Enterprise customers can also pay via invoice.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Is there a setup fee?
                </h3>
                <p className="text-gray-300">
                  No setup fees! All our plans include free setup and onboarding. 
                  We'll help you get started at no extra cost.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and find the perfect plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 Call us: +1 302 464 0950 | ✉️ Email: kleber@ziontechgroup.com</p>
              <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}