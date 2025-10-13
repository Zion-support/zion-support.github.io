import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Users, 
  BarChart3, 
  Target, 
  Sparkles, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  Brain,
  Eye,
  MessageSquare
} from 'lucide-react';

const ZionAICustomerInsightsPage = () => {
  const features = [
    {
      title: "AI-Powered Customer Analytics",
      description: "Deep insights into customer behavior, preferences, and buying patterns using advanced AI",
      icon: <Brain className="w-6 h-6" />,
      details: "Understand your customers like never before with machine learning algorithms"
    },
    {
      title: "Real-time Sentiment Analysis",
      description: "Monitor customer sentiment across all touchpoints and channels in real-time",
      icon: <MessageSquare className="w-6 h-6" />,
      details: "Track customer satisfaction and identify issues before they escalate"
    },
    {
      title: "Predictive Customer Behavior",
      description: "Forecast customer actions, churn risk, and lifetime value with 95% accuracy",
      icon: <TrendingUp className="w-6 h-6" />,
      details: "Anticipate customer needs and take proactive action"
    },
    {
      title: "Customer Journey Mapping",
      description: "Visualize complete customer journeys from awareness to advocacy",
      icon: <Eye className="w-6 h-6" />,
      details: "Identify optimization opportunities and improve customer experience"
    },
    {
      title: "Segmentation & Personalization",
      description: "Create dynamic customer segments and deliver personalized experiences",
      icon: <Target className="w-6 h-6" />,
      details: "Target the right customers with the right message at the right time"
    },
    {
      title: "Competitive Intelligence",
      description: "Monitor competitor activities and market trends affecting your customers",
      icon: <Shield className="w-6 h-6" />,
      details: "Stay ahead of the competition with market intelligence insights"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses getting started with customer insights",
      features: [
        "Up to 10,000 customers",
        "Basic analytics dashboard",
        "Email support",
        "Standard reports",
        "API access",
        "Mobile app"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing businesses with complex customer data",
      features: [
        "Up to 100,000 customers",
        "Advanced analytics",
        "Predictive modeling",
        "Priority support",
        "Custom dashboards",
        "Team collaboration (5 users)",
        "Advanced segmentation",
        "Real-time alerts"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large organizations with massive customer databases",
      features: [
        "Unlimited customers",
        "Full AI suite",
        "Custom models",
        "24/7 support",
        "White-label options",
        "Unlimited team members",
        "Advanced integrations",
        "Dedicated account manager",
        "Custom reporting"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "E-commerce",
      description: "Optimize product recommendations, reduce cart abandonment, and increase customer lifetime value",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "SaaS Companies",
      description: "Reduce churn, identify expansion opportunities, and improve product adoption",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Retail",
      description: "Personalize shopping experiences, optimize inventory, and increase customer loyalty",
      icon: <Target className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Financial Services",
      description: "Improve risk assessment, detect fraud, and enhance customer onboarding",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "25,000+", label: "Customers Analyzed", icon: <Users className="w-6 h-6" /> },
    { number: "95%", label: "Prediction Accuracy", icon: <Target className="w-6 h-6" /> },
    { number: "40%", label: "Churn Reduction", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "60%", label: "Revenue Increase", icon: <BarChart3 className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      title: "Increase Revenue",
      description: "Identify upsell and cross-sell opportunities to boost average order value",
      icon: <TrendingUp className="w-6 h-6" />,
      stat: "60% revenue boost"
    },
    {
      title: "Reduce Churn",
      description: "Predict and prevent customer churn with early warning systems",
      icon: <Shield className="w-6 h-6" />,
      stat: "40% churn reduction"
    },
    {
      title: "Improve Satisfaction",
      description: "Deliver personalized experiences that delight your customers",
      icon: <Users className="w-6 h-6" />,
      stat: "85% satisfaction rate"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Customer Insights - Advanced Customer Analytics Platform | Zion Tech Group</title>
        <meta name="description" content="Transform customer data into actionable insights with our AI-powered analytics platform. Predict behavior, reduce churn, and increase revenue. Starting at $199/month." />
        <meta name="keywords" content="customer insights, customer analytics, AI analytics, customer behavior, churn prediction, customer segmentation, business intelligence" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Customer Analytics</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Customer Insights
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Unlock the power of your customer data with our advanced AI analytics platform. 
            Predict behavior, reduce churn, and increase revenue with actionable customer insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
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

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Advanced Customer Intelligence Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-3">{feature.description}</p>
                <p className="text-sm text-cyan-400">{feature.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Perfect for Every Industry
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group text-center">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
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
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Understand Your Customers Better?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses who are already using Zion AI Customer Insights 
              to make data-driven decisions and grow their revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZionAICustomerInsightsPage;