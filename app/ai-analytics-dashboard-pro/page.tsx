"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle, ArrowRight, TrendingUp, BarChart, Star, Users, Clock, DollarSign, Shield } from "lucide-react";

const AIAnalyticsDashboardProPage: React.FC = () => {
  const features = [
    "AI-powered data analysis and insights",
    "Real-time dashboard customization",
    "Predictive analytics and forecasting",
    "Automated report generation",
    "Multi-source data integration",
    "Advanced visualization tools",
    "Custom KPI tracking and alerts",
    "White-label dashboard options",
    "Mobile-responsive design"
  ];

  const integrations = [
    { name: "Google Analytics" },
    { name: "Salesforce" },
    { name: "HubSpot" },
    { name: "MySQL" },
    { name: "PostgreSQL" },
    { name: "MongoDB" }
  ];

  const benefits = [
    "Make data-driven decisions 3x faster",
    "Identify trends and opportunities automatically",
    "Reduce reporting time by 90%",
    "Improve business performance by 35%",
    "Save 20+ hours weekly on data analysis"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99/mo",
      originalPrice: "$129/mo",
      description: "Perfect for small businesses",
      features: [
        "Up to 5 data sources",
        "Basic AI analytics",
        "Standard dashboards",
        "Email support",
        "Basic visualizations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149/mo",
      originalPrice: "$249/mo",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 data sources",
        "Advanced AI analytics",
        "Custom dashboards",
        "Priority support",
        "Advanced visualizations",
        "Real-time reports",
        "Predictive analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299/mo",
      originalPrice: "$499/mo",
      description: "For large organizations",
      features: [
        "Unlimited data sources",
        "Full AI suite",
        "White-label options",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "E-commerce",
      description: "Track sales, customer behavior, and inventory analytics",
      results: "40% increase in conversion rates"
    },
    {
      title: "SaaS",
      description: "Monitor user engagement, churn, and product usage",
      results: "60% reduction in churn rate"
    },
    {
      title: "Marketing",
      description: "Analyze campaign performance and ROI across channels",
      results: "3x improvement in campaign ROI"
    },
    {
      title: "Finance",
      description: "Track financial metrics and cash flow analytics",
      results: "25% improvement in financial forecasting"
    }
  ];

  const stats = [
    { number: "3x", label: "Faster Decisions" },
    { number: "90%", label: "Less Reporting Time" },
    { number: "35%", label: "Better Performance" },
    { number: "20+", label: "Hours Saved Weekly" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics dashboard with real-time insights, predictive analytics, and automated reporting for data-driven decision making." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Analytics Dashboard Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered analytics dashboard with real-time insights, predictive analytics, and automated reporting for data-driven decision making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Watch Demo
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to transform your data into actionable insights
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                    <span className="text-white font-semibold">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Seamless Integrations</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite tools and data sources
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-blue-400 font-semibold">{integration.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Simple Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-white/20'
                }`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-blue-400 mb-2">{plan.price}</div>
                    <div className="text-gray-400 line-through">{plan.originalPrice}</div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Analytics?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using AI Analytics Dashboard Pro to make better decisions faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAnalyticsDashboardProPage;