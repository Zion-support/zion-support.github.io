import { ArrowRight, CheckCircle, BarChart3, TrendingUp, Users, Clock, Shield, Zap, Star, DollarSign } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAnalyticsPro() {
  const features = [
    "Real-time dashboard with customizable widgets",
    "Predictive analytics with machine learning models",
    "Automated report generation and scheduling",
    "Custom KPI tracking and alerts",
    "Advanced data visualization tools",
    "Multi-source data integration",
    "White-label reporting capabilities",
    "API access for custom integrations",
    "Role-based access control",
    "Mobile-responsive design"
  ];

  const pricingPlans = [
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
      popular: false
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
      popular: true
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
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Increase Revenue",
      description: "Identify growth opportunities and optimize your business performance with data-driven insights."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save Time",
      description: "Automate reporting and get instant insights instead of spending hours on manual analysis."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with SOC 2 compliance and data encryption at rest and in transit."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Easy Integration",
      description: "Connect with 100+ popular business tools and databases in minutes, not hours."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Analytics Pro - Advanced Business Intelligence Platform</title>
        <meta
          name="description"
          content="Transform your business with Zion Analytics Pro - the most advanced business intelligence platform. Real-time dashboards, predictive analytics, and automated reporting."
        />
        <meta
          name="keywords"
          content="business intelligence, analytics platform, data visualization, predictive analytics, business dashboards, KPI tracking"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <BarChart3 className="w-12 h-12 text-cyan-400 mr-4" />
                  <span className="text-cyan-400 font-semibold">Zion Analytics Pro</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Advanced Business
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    {" "}Intelligence
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Transform your business with real-time analytics, predictive insights, and automated reporting. 
                  Make data-driven decisions that drive growth and profitability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    Watch Demo
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-4">
                      <div className="text-white text-sm font-medium">Revenue</div>
                      <div className="text-white text-2xl font-bold">$2.4M</div>
                      <div className="text-green-300 text-sm">+12.5%</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-4">
                      <div className="text-white text-sm font-medium">Users</div>
                      <div className="text-white text-2xl font-bold">15.2K</div>
                      <div className="text-green-300 text-sm">+8.3%</div>
                    </div>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-16 h-16 text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to turn your data into actionable insights and drive business growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Analytics Pro?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses that trust us to power their data-driven decisions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include a 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
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

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and see the power of data-driven decision making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
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