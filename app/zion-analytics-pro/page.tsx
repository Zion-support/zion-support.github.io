import { ArrowRight, BarChart3, CheckCircle, Star, Users, Clock, Zap, Shield, TrendingUp, Database, Globe, Smartphone, FileText } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAnalyticsProZionTechGroup() {
  const features = [
    {
      title: "Real-time Dashboards",
      description: "Monitor your business metrics with live, interactive dashboards",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Custom Reports",
      description: "Generate detailed reports tailored to your business needs",
      icon: <FileText className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data Visualization",
      description: "Transform complex data into clear, actionable insights",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "API Integration",
      description: "Connect with 100+ popular business tools and platforms",
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Mobile Access",
      description: "Access your analytics anywhere with our mobile app",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Secure Data",
      description: "Enterprise-grade security for your sensitive business data",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-pink-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5 dashboards",
        "Basic reports",
        "Email support",
        "5GB data storage",
        "Standard integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Unlimited dashboards",
        "Advanced reports",
        "Priority support",
        "50GB data storage",
        "All integrations",
        "Custom branding"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Dedicated support",
        "Unlimited data storage",
        "Custom integrations",
        "White-label solution",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Analytics Pro - Advanced Business Analytics | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your business data into actionable insights with Zion Analytics Pro. Real-time dashboards, custom reports, and advanced data visualization. Starting at $99/month."
        />
        <meta
          name="keywords"
          content="business analytics, data visualization, business intelligence, dashboards, reports, data analysis"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Analytics
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business data into actionable insights with our advanced analytics platform. 
              Real-time dashboards, custom reports, and powerful data visualization tools designed for modern businesses.
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
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to make data-driven decisions and grow your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}
                  >
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

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Businesses Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using Zion Analytics Pro to drive growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">2,500+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">4.9/5</div>
                <div className="text-gray-300">User Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular ? 'border-cyan-400 bg-white/20' : 'border-white/20'
                  } relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-lg text-gray-300">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
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
              Ready to Transform Your Data into Insights?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using Zion Analytics Pro to make better decisions and drive growth.
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
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
