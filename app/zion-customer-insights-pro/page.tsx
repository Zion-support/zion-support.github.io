import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  TrendingUp, 
  BarChart3, 
  Users, 
  Star, 
  ArrowRight, 
  Zap,
  Brain,
  Shield,
  Target,
  PieChart,
  FileText,
  Mail,
  Phone,
  Globe,
  CheckCircle,
  AlertTriangle,
  ThumbsUp,
  ThumbsDown,
  Heart,
  Smile,
  Frown
} from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const ZionCustomerInsightsPro = () => {
  const features = [
    {
      title: "Multi-Channel Analysis",
      description: "Analyze feedback from emails, surveys, social media, reviews, and support tickets",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Sentiment Analysis",
      description: "AI-powered emotion detection with 95% accuracy across 50+ languages",
      icon: <Heart className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Trend Detection",
      description: "Identify emerging patterns and predict customer behavior changes",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Actionable Insights",
      description: "Get specific recommendations to improve customer satisfaction",
      icon: <Target className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Real-time Alerts",
      description: "Instant notifications for negative sentiment spikes or urgent issues",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Custom Dashboards",
      description: "Build personalized views for different teams and stakeholders",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 feedback entries/month",
        "Basic sentiment analysis",
        "Email & social media integration",
        "Standard dashboards",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Most popular for growing companies",
      features: [
        "Up to 10,000 feedback entries/month",
        "Advanced AI analysis",
        "All channel integrations",
        "Custom dashboards",
        "Real-time alerts",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited feedback entries",
        "Advanced AI & ML models",
        "Custom integrations",
        "White-label options",
        "Dedicated support",
        "API access"
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: "Zendesk", icon: <MessageSquare className="w-8 h-8" />, color: "text-blue-400" },
    { name: "Intercom", icon: <Mail className="w-8 h-8" />, color: "text-purple-400" },
    { name: "Salesforce", icon: <Users className="w-8 h-8" />, color: "text-cyan-400" },
    { name: "HubSpot", icon: <Target className="w-8 h-8" />, color: "text-orange-400" },
    { name: "Google Reviews", icon: <Star className="w-8 h-8" />, color: "text-yellow-400" },
    { name: "Facebook", icon: <Globe className="w-8 h-8" />, color: "text-blue-500" },
    { name: "Twitter", icon: <MessageSquare className="w-8 h-8" />, color: "text-sky-400" },
    { name: "SurveyMonkey", icon: <FileText className="w-8 h-8" />, color: "text-green-400" }
  ];

  const benefits = [
    {
      title: "Increase Customer Satisfaction",
      description: "Identify and address issues before they escalate",
      metric: "35% improvement",
      icon: <ThumbsUp className="w-8 h-8" />
    },
    {
      title: "Reduce Churn Rate",
      description: "Predict and prevent customer cancellations",
      metric: "28% reduction",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Boost Revenue",
      description: "Turn feedback into actionable growth strategies",
      metric: "42% increase",
      icon: <BarChart3 className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Customer Insights Pro - AI-Powered Feedback Analysis | Zion Tech Group</title>
        <meta name="description" content="Transform customer feedback into actionable insights with AI. Boost satisfaction by 35% and reduce churn by 28% with our intelligent analysis platform." />
        <meta name="keywords" content="customer feedback analysis, sentiment analysis, customer insights, feedback management, customer satisfaction, AI analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-customer-insights-pro" />
      </Helmet>
      <SEOOptimizer />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Brain className="w-5 h-5 mr-2 text-cyan-400" />
                <span className="text-cyan-400 font-medium">AI-Powered Customer Insights</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Customer Insights Pro
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform customer feedback into actionable insights with AI-powered analysis. 
                Boost satisfaction by 35% and reduce churn by 28% with intelligent sentiment tracking.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link
                  to="/demo"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 flex items-center"
                >
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="group border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Schedule Demo
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-gray-300">4.8/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">5,000+ Companies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">35% Satisfaction Boost</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Powerful Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to understand and act on customer feedback
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Proven Results
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the measurable impact on your business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{benefit.description}</p>
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 text-green-400 font-medium text-lg">
                    {benefit.metric}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Seamless Integrations
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your existing tools and platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
                >
                  <div className={`${integration.color} mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center`}>
                    {integration.icon}
                  </div>
                  <h3 className="text-sm font-medium text-white">{integration.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Simple Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 ${
                    plan.popular 
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                      : 'border-slate-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
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
                    className={`w-full block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                        : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Understand Your Customers Better?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies using Zion Customer Insights Pro to boost satisfaction and reduce churn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionCustomerInsightsPro;