import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Users, TrendingUp, BarChart3, Target, Brain, Zap, Eye, MessageSquare, Star, ArrowRight, CheckCircle, PieChart, Activity, Shield } from 'lucide-react';

export default function ZionAICustomerInsightsPro() {
  const features = [
    {
      title: "AI-Powered Sentiment Analysis",
      description: "Analyze customer feedback, reviews, and interactions to understand emotions and satisfaction levels",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Predictive Customer Behavior",
      description: "Predict customer actions, churn risk, and lifetime value using advanced machine learning models",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Real-time Customer Journey",
      description: "Track and visualize customer interactions across all touchpoints in real-time",
      icon: <Activity className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Automated Insights & Recommendations",
      description: "Get actionable recommendations to improve customer experience and retention",
      icon: <Target className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const insights = [
    {
      title: "Customer Satisfaction Score",
      value: "94%",
      change: "+12%",
      icon: <Star className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Churn Risk Reduction",
      value: "67%",
      change: "-23%",
      icon: <Shield className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Customer Lifetime Value",
      value: "$2,450",
      change: "+34%",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Response Time",
      value: "2.3s",
      change: "-45%",
      icon: <Zap className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses getting started with customer insights",
      features: [
        "Up to 10,000 customer records",
        "Basic sentiment analysis",
        "Standard reporting",
        "Email support",
        "API access (1,000 calls/month)"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Advanced features for growing businesses",
      features: [
        "Up to 100,000 customer records",
        "Advanced AI insights",
        "Real-time dashboards",
        "Predictive analytics",
        "Priority support",
        "API access (10,000 calls/month)",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited customer records",
        "Everything in Professional",
        "Advanced machine learning models",
        "Custom reporting & analytics",
        "Dedicated account manager",
        "Unlimited API access",
        "White-label options",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Rachel Thompson",
      company: "E-commerce Giant",
      role: "Customer Experience Director",
      content: "Zion AI Customer Insights Pro has transformed how we understand our customers. We've reduced churn by 40% and increased satisfaction scores significantly.",
      rating: 5,
      avatar: "RT"
    },
    {
      name: "James Wilson",
      company: "SaaS Platform",
      role: "Head of Customer Success",
      content: "The predictive analytics are incredibly accurate. We can now proactively address customer issues before they become problems.",
      rating: 5,
      avatar: "JW"
    },
    {
      name: "Maria Garcia",
      company: "Retail Chain",
      role: "VP of Marketing",
      content: "The real-time insights help us make data-driven decisions instantly. Our customer retention has improved dramatically.",
      rating: 5,
      avatar: "MG"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Customer Insights Pro - Advanced Customer Analytics Platform | Zion Tech Group</title>
        <meta name="description" content="Transform customer data into actionable insights with Zion AI Customer Insights Pro. AI-powered sentiment analysis, predictive analytics, and real-time customer journey tracking. Starting at $199/month." />
        <meta name="keywords" content="AI customer insights, customer analytics, sentiment analysis, predictive analytics, customer journey mapping, customer experience, churn prediction" />
        <meta property="og:title" content="Zion AI Customer Insights Pro - Advanced Customer Analytics Platform" />
        <meta property="og:description" content="Transform customer data into actionable insights with AI-powered analytics and predictive modeling." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-customer-insights-pro" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-customer-insights-pro" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
              <Users className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">AI-Powered Customer Analytics</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion AI Customer Insights Pro
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform customer data into actionable insights with AI-powered analytics, predictive modeling, and real-time customer journey tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <Eye className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                View Demo
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">40%</div>
              <div className="text-gray-300">Churn Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">94%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">2.3s</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Advanced AI Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI to understand your customers like never before
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Dashboard Preview */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/30 to-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Real-Time Insights Dashboard
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor key customer metrics and get instant insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${insight.color}`}>
                    {insight.icon}
                  </div>
                  <span className="text-green-400 text-sm font-semibold">{insight.change}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{insight.value}</h3>
                <p className="text-gray-300 text-sm">{insight.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Choose Your Plan
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with our free trial and scale as your business grows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50'
                    : 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                      : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/30 to-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Trusted by Industry Leaders
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers are saying about Zion AI Customer Insights Pro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Understand Your Customers Better?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of companies using Zion AI Customer Insights Pro to make data-driven decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              <Eye className="w-5 h-5 mr-2" />
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}