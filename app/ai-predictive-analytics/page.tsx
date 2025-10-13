import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, Zap, Star, ArrowRight, CheckCircle, Users, Clock, Shield, Brain, BarChart3, Sparkles, Globe, Smartphone } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const AIPredictiveAnalytics = () => {
  const features = [
    {
      title: "Advanced Forecasting",
      description: "Predict future trends and outcomes with 95%+ accuracy using machine learning algorithms",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Real-time Insights",
      description: "Get instant predictions and recommendations as your data changes",
      icon: <Zap className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-Domain Support",
      description: "Works across sales, marketing, finance, operations, and customer behavior",
      icon: <Globe className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive reports and dashboards automatically",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "1,000 predictions per month",
        "Basic forecasting models",
        "Standard data sources",
        "Email support",
        "Basic dashboards"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "10,000 predictions per month",
        "Advanced ML models",
        "All data sources",
        "Priority support",
        "Custom dashboards",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited predictions",
        "Custom ML models",
        "Real-time data streaming",
        "Dedicated support",
        "White-label solution",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const applications = [
    {
      title: "Sales Forecasting",
      description: "Predict sales performance, identify opportunities, and optimize revenue",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Customer Churn",
      description: "Identify customers at risk of churning and take proactive retention actions",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Demand Planning",
      description: "Forecast product demand and optimize inventory management",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Risk Assessment",
      description: "Evaluate financial and operational risks with predictive models",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <SEOOptimizer
        title="AI Predictive Analytics - Advanced Forecasting & Machine Learning | Zion Tech Group"
        description="Transform your data into actionable insights with our AI predictive analytics platform. Forecast trends, predict outcomes, and optimize decisions. Starting from $99/month."
        keywords="AI predictive analytics, forecasting, machine learning, predictive modeling, data science, business intelligence, trend analysis"
      />
      
      <Helmet>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-predictive-analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-400 font-medium">AI Predictive Analytics Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Predictive Analytics
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our advanced AI predictive analytics platform. 
              Forecast trends, predict outcomes, and make data-driven decisions with 95%+ accuracy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border border-green-500 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                View Demo
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">95%+</div>
                <div className="text-gray-400">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-400">ML Models</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">Real-time</div>
                <div className="text-gray-400">Predictions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Predictive Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced machine learning algorithms for accurate predictions and insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Predictive Analytics Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Solve complex business challenges with accurate predictions and insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {app.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{app.title}</h3>
                <p className="text-gray-300">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Analytics Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Scale your predictive analytics as your data grows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                plan.popular ? 'border-green-500 scale-105' : 'border-gray-700'
              } hover:border-green-500/50 transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                    : 'border border-green-500 text-green-400 hover:bg-green-500/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Predict the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses who are already using our AI predictive analytics to make better decisions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-green-500 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <div className="font-semibold text-white mb-2">Phone</div>
              <a href="tel:+13024640950" className="hover:text-green-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div>
              <div className="font-semibold text-white mb-2">Email</div>
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-green-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div>
              <div className="font-semibold text-white mb-2">Address</div>
              <div>364 E Main St STE 1008<br />Middletown DE 19709</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPredictiveAnalytics;