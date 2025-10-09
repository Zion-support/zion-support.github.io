'use client';
import React from 'react';
import { ArrowRight, CheckCircle, BarChart, TrendingUp, Target, Users, Zap, Brain, Shield, Clock, Globe, Database } from 'lucide-react';

const SmartAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart className="w-8 h-8 text-cyan-400" />,
      title: "Real-time Dashboards",
      description: "Monitor your business performance with interactive, real-time analytics dashboards."
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "AI-Powered Insights",
      description: "Get intelligent recommendations and predictions based on your data patterns."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: "Performance Tracking",
      description: "Track KPIs and metrics across all your business functions and departments."
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      title: "Goal Setting",
      description: "Set and track business goals with automated progress monitoring and alerts."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Team Collaboration",
      description: "Share insights and reports with your team for better decision-making."
    },
    {
      icon: <Zap className="w-8 h-8 text-red-400" />,
      title: "Automated Reports",
      description: "Generate and schedule automated reports for stakeholders and management."
    }
  ];

  const analyticsTypes = [
    {
      title: "Sales Analytics",
      description: "Track sales performance, pipeline health, and revenue trends.",
      icon: "💰",
      metrics: ["Revenue growth", "Conversion rates", "Sales velocity", "Customer acquisition"]
    },
    {
      title: "Marketing Analytics",
      description: "Measure marketing campaign effectiveness and ROI.",
      icon: "📈",
      metrics: ["Campaign ROI", "Lead generation", "Customer engagement", "Brand awareness"]
    },
    {
      title: "Customer Analytics",
      description: "Understand customer behavior and satisfaction.",
      icon: "👥",
      metrics: ["Customer satisfaction", "Retention rates", "Lifetime value", "Churn analysis"]
    },
    {
      title: "Financial Analytics",
      description: "Monitor financial health and profitability.",
      icon: "💼",
      metrics: ["Profit margins", "Cash flow", "Expense tracking", "Budget variance"]
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$49",
      period: "month",
      description: "Perfect for small businesses getting started with analytics",
      features: [
        "5 dashboards",
        "Basic reports",
        "Email support",
        "Standard integrations",
        "Monthly data retention"
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$149",
      period: "month",
      description: "Ideal for growing businesses with complex analytics needs",
      features: [
        "Unlimited dashboards",
        "Advanced reports",
        "Priority support",
        "100+ integrations",
        "1 year data retention",
        "Custom metrics"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "month",
      description: "Comprehensive analytics for large organizations",
      features: [
        "Everything in Professional",
        "Dedicated support",
        "Custom integrations",
        "Unlimited data retention",
        "White-label options",
        "API access"
      ],
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Lee",
      title: "Marketing Director, TechCorp",
      content: "Smart Analytics transformed how we track our marketing performance. The AI insights helped us increase ROI by 40%.",
      rating: 5
    },
    {
      name: "David Park",
      title: "CEO, StartupXYZ",
      content: "The real-time dashboards give us instant visibility into our business performance. It's like having a business intelligence team.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      title: "CFO, FinanceFirst",
      content: "The financial analytics module helped us identify cost savings opportunities worth $200K annually. Incredible ROI.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Smart <span className="text-cyan-400">Analytics</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your data into actionable insights with our AI-powered analytics platform. 
              Make better business decisions with real-time dashboards and intelligent recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                Start Free Trial
              </Link>
              <Link
                href="#demo"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300">Faster Decisions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">100+</div>
              <div className="text-gray-300">Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">Real-time</div>
              <div className="text-gray-300">Data Updates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">AI-Powered</div>
              <div className="text-gray-300">Insights</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our smart analytics platform combines advanced data processing with AI intelligence 
              to provide insights that drive business growth and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-700/50 p-8 rounded-lg hover:bg-slate-700/70 transition-colors duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Analytics for Every Business Function
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get comprehensive insights across all areas of your business 
              with specialized analytics modules designed for different departments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analyticsTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-lg text-center hover:bg-slate-800/70 transition-colors duration-300">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {type.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex}>• {metric}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Analytics Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with our free trial and scale as your analytics needs grow. 
              All plans include our core analytics capabilities and AI insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-700/50 p-8 rounded-lg ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="bg-cyan-400 text-slate-900 text-sm font-semibold px-4 py-2 rounded-full text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.cta === "Contact Sales" ? "/contact" : "/contact"}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    plan.popular
                      ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                      : 'bg-slate-600 hover:bg-slate-500 text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are using Smart Analytics to make better decisions 
              and achieve their growth objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start making data-driven decisions with Smart Analytics. 
            Join thousands of businesses already using our platform to grow and optimize their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartAnalyticsPage;