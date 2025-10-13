import { ArrowRight, CheckCircle, Brain, BarChart3, TrendingUp, Users, Clock, Shield, Zap, Star, DollarSign, Target, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AIBusinessIntelligencePro() {
  const features = [
    "Advanced machine learning algorithms for predictive analytics",
    "Real-time data processing and analysis",
    "Custom dashboard creation with drag-and-drop interface",
    "Natural language query interface",
    "Automated report generation and scheduling",
    "Multi-source data integration (100+ connectors)",
    "Advanced data visualization tools",
    "Anomaly detection and alerting",
    "Custom KPI tracking and monitoring",
    "White-label reporting capabilities",
    "API access for custom integrations",
    "Role-based access control and security"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10 data sources",
        "Basic ML models",
        "Standard dashboards",
        "Email support",
        "1 user account",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "month",
      description: "Ideal for growing companies",
      features: [
        "Up to 50 data sources",
        "Advanced ML models",
        "Custom dashboards",
        "Priority support",
        "Up to 10 user accounts",
        "Weekly reports",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited data sources",
        "Custom ML models",
        "Advanced analytics",
        "24/7 support",
        "Unlimited users",
        "Real-time reports",
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

  const useCases = [
    {
      title: "Sales Forecasting",
      description: "Predict future sales with 95% accuracy using advanced ML models",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Customer Analytics",
      description: "Understand customer behavior and preferences for better targeting",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Financial Planning",
      description: "Create accurate budgets and forecasts based on historical data",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: "Operational Efficiency",
      description: "Identify bottlenecks and optimize business processes",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Business Intelligence Pro - Advanced Analytics Platform</title>
        <meta
          name="description"
          content="Transform your business with AI Business Intelligence Pro - the most advanced analytics platform. Machine learning insights, predictive analytics, and automated reporting."
        />
        <meta
          name="keywords"
          content="AI business intelligence, machine learning analytics, predictive analytics, business dashboards, data visualization, KPI tracking"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Brain className="w-12 h-12 text-indigo-400 mr-4" />
                  <span className="text-indigo-400 font-semibold">AI Business Intelligence Pro</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Advanced AI-Powered
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    {" "}Business Intelligence
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Transform your business with machine learning insights, predictive analytics, and 
                  automated decision support. Make data-driven decisions that drive growth and profitability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300"
                  >
                    Watch Demo
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-4">
                      <div className="text-white text-sm font-medium">Revenue Growth</div>
                      <div className="text-white text-2xl font-bold">+25%</div>
                      <div className="text-green-300 text-sm">vs last year</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-4">
                      <div className="text-white text-sm font-medium">Prediction Accuracy</div>
                      <div className="text-white text-2xl font-bold">95%</div>
                      <div className="text-green-300 text-sm">ML models</div>
                    </div>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-16 h-16 text-indigo-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how AI Business Intelligence Pro can transform your business operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced AI Features
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI Business Intelligence Pro?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses that trust us to power their data-driven decisions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
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
                    plan.popular ? 'border-indigo-400 ring-2 ring-indigo-400/20' : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                        : 'border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900'
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
              Start your free trial today and see the power of AI-driven business intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300"
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