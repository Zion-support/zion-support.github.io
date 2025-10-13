import { ArrowRight, BarChart3, TrendingUp, Database, Shield, Zap, CheckCircle, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiAnalyticsDashboardPro() {
  const features = [
    {
      title: "Real-time Data Processing",
      description: "Process millions of data points in real-time with our advanced AI algorithms",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends and patterns with 95% accuracy using machine learning models",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Custom Dashboards",
      description: "Create personalized dashboards tailored to your business needs and KPIs",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "API Integration",
      description: "Seamlessly integrate with 500+ business applications and data sources",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Advanced Security",
      description: "Enterprise-grade security with end-to-end encryption and compliance",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,500",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5 data sources",
        "Basic analytics dashboard",
        "Email support",
        "Standard security",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$4,500",
      period: "per month",
      description: "Ideal for growing companies",
      features: [
        "Up to 20 data sources",
        "Advanced analytics & AI insights",
        "Priority support",
        "Advanced security",
        "Real-time monitoring",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$8,500",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited data sources",
        "Full AI suite & custom models",
        "24/7 dedicated support",
        "Enterprise security",
        "Custom development",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const benefits = [
    "Reduce data analysis time by 80%",
    "Increase decision-making speed by 60%",
    "Improve forecast accuracy by 95%",
    "Save 40+ hours per week on reporting",
    "Real-time insights and alerts",
    "Custom AI model training",
    "Scalable infrastructure",
    "Dedicated account manager"
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard Pro - Zion Tech Group | Advanced Business Intelligence</title>
        <meta
          name="description"
          content="Transform your business with AI-powered analytics dashboard. Real-time insights, predictive analytics, and custom dashboards starting at $2,500/month."
        />
        <meta
          name="keywords"
          content="AI analytics, business intelligence, data dashboard, predictive analytics, real-time insights, AI dashboard"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Analytics Dashboard
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business data into actionable insights with our advanced AI-powered analytics platform. 
              Get real-time intelligence, predictive analytics, and custom dashboards that drive growth.
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
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Live Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to transform your data into actionable business intelligence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to fit your business needs and budget.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular 
                      ? 'border-cyan-400 ring-2 ring-cyan-400/50' 
                      : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
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
                Why Choose Our AI Analytics?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using our platform to drive growth and innovation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
                >
                  <BarChart3 className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <p className="text-white font-semibold">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our analytics experts to discuss your specific needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call: +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}