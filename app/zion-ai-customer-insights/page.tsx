import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Users, 
  TrendingUp, 
  BarChart3, 
  ArrowRight, 
  Sparkles, 
  Star,
  Zap,
  Clock,
  Target,
  CheckCircle,
  Eye,
  MessageSquare,
  Heart,
  ThumbsUp,
  Globe,
  Smartphone,
  Monitor,
  Laptop,
  Mail,
  Bell,
  Shield,
  Database,
  PieChart,
  Activity
} from 'lucide-react';

const ZionAICustomerInsightsPage = () => {
  const features = [
    {
      title: "AI-Powered Sentiment Analysis",
      description: "Analyze customer feedback, reviews, and interactions to understand emotional responses",
      icon: <Heart className="w-6 h-6" />,
      details: "Real-time sentiment tracking across all customer touchpoints"
    },
    {
      title: "Behavioral Pattern Recognition",
      description: "Identify customer behavior patterns and predict future actions using machine learning",
      icon: <Activity className="w-6 h-6" />,
      details: "Advanced algorithms detect patterns humans might miss"
    },
    {
      title: "Customer Journey Mapping",
      description: "Visualize complete customer journeys from awareness to advocacy",
      icon: <Target className="w-6 h-6" />,
      details: "Interactive journey maps with conversion optimization insights"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast customer lifetime value, churn risk, and purchase likelihood",
      icon: <TrendingUp className="w-6 h-6" />,
      details: "AI models predict customer behavior with 85%+ accuracy"
    },
    {
      title: "Real-time Dashboards",
      description: "Monitor customer insights with live dashboards and automated alerts",
      icon: <Monitor className="w-6 h-6" />,
      details: "Customizable dashboards for different roles and departments"
    },
    {
      title: "Actionable Recommendations",
      description: "Get specific recommendations to improve customer experience and retention",
      icon: <Zap className="w-6 h-6" />,
      details: "AI-generated insights with clear next steps for your team"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses getting started with customer insights",
      features: [
        "Up to 10,000 customers",
        "Basic sentiment analysis",
        "Standard dashboards",
        "Email support",
        "Monthly reports",
        "1 user account"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses with complex customer data",
      features: [
        "Up to 100,000 customers",
        "Advanced AI analytics",
        "Custom dashboards",
        "Priority support",
        "Real-time insights",
        "5 user accounts",
        "API access",
        "Advanced segmentation",
        "Predictive analytics"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations with extensive customer data",
      features: [
        "Unlimited customers",
        "Full AI suite",
        "Custom analytics",
        "24/7 phone support",
        "Real-time + historical data",
        "Unlimited users",
        "White-label options",
        "Custom integrations",
        "Dedicated data scientist",
        "Advanced security"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const useCases = [
    {
      title: "E-commerce",
      description: "Understand customer preferences and optimize product recommendations",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "SaaS Companies",
      description: "Reduce churn and increase customer lifetime value",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Retail",
      description: "Personalize shopping experiences and improve customer satisfaction",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Financial Services",
      description: "Enhance customer experience and identify upsell opportunities",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      title: "Increase Retention",
      description: "Identify at-risk customers and take proactive retention actions",
      icon: <Heart className="w-6 h-6" />,
      stat: "25% higher retention"
    },
    {
      title: "Boost Revenue",
      description: "Discover upsell and cross-sell opportunities through customer insights",
      icon: <TrendingUp className="w-6 h-6" />,
      stat: "30% revenue increase"
    },
    {
      title: "Improve Satisfaction",
      description: "Address customer pain points before they become complaints",
      icon: <ThumbsUp className="w-6 h-6" />,
      stat: "40% higher NPS"
    }
  ];

  const stats = [
    { number: "500+", label: "Companies Using", icon: <Users className="w-6 h-6" /> },
    { number: "10M+", label: "Customers Analyzed", icon: <Database className="w-6 h-6" /> },
    { number: "85%", label: "Prediction Accuracy", icon: <Brain className="w-6 h-6" /> },
    { number: "24/7", label: "Real-time Insights", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Customer Insights - Advanced Customer Analytics & Behavior Intelligence | Zion Tech Group</title>
        <meta name="description" content="Unlock deep customer insights with AI-powered analytics. Understand behavior patterns, predict churn, and optimize customer experience with advanced machine learning." />
        <meta name="keywords" content="customer insights, AI analytics, customer behavior, predictive analytics, customer intelligence, churn prediction, customer experience" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Customer Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Customer Insights
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Unlock the power of your customer data with AI-powered insights. Understand behavior patterns, 
            predict churn, optimize experiences, and drive growth with advanced machine learning analytics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Eye className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Customer Understanding
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Make data-driven decisions that improve customer experience and drive business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 mb-3">{benefit.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive customer intelligence powered by cutting-edge AI technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  {feature.description}
                </p>
                <p className="text-sm text-cyan-400">
                  {feature.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect For Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From e-commerce to SaaS, our insights adapt to your business model
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your customer data needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105 relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={plan.cta === "Contact Sales" ? "/contact" : "/contact"}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  } hover:scale-105`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Unlock Customer Insights?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join industry leaders who trust Zion AI Customer Insights 
              to understand their customers and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Eye className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZionAICustomerInsightsPage;