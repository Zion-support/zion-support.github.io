import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  TrendingUp, 
  Brain, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Play,
  Settings,
  Activity,
  Users,
  Clock,
  FileText,
  Smartphone,
  Server,
  Database,
  PieChart,
  LineChart,
  Target,
  Award,
  Globe,
  Shield
} from 'lucide-react';

const AIAnalyticsDashboardPro = () => {
  const [isDemoMode, setIsDemoMode] = useState(false);

  const features = [
    {
      title: "AI-Powered Insights",
      description: "Advanced machine learning algorithms provide actionable business insights",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-time Analytics",
      description: "Monitor your business metrics in real-time with instant updates",
      icon: <Activity className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast future trends and make data-driven decisions",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Custom Dashboards",
      description: "Create personalized dashboards tailored to your business needs",
      icon: <BarChart3 className="w-8 h-8" />,
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
        "Up to 5 data sources",
        "Basic AI insights",
        "Standard dashboards",
        "Email support",
        "1 user account",
        "30-day data retention"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 25 data sources",
        "Advanced AI analytics",
        "Custom dashboards",
        "Priority support",
        "Up to 5 user accounts",
        "1-year data retention",
        "Predictive analytics",
        "API access"
      ],
      popular: true,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited data sources",
        "Full AI suite & ML models",
        "24/7 dedicated support",
        "Unlimited user accounts",
        "Unlimited data retention",
        "White-label solution",
        "Custom integrations",
        "SLA guarantee"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { label: "Data Sources", value: "50+", icon: <Database className="w-6 h-6" /> },
    { label: "AI Models", value: "25+", icon: <Brain className="w-6 h-6" /> },
    { label: "Uptime", value: "99.9%", icon: <Shield className="w-6 h-6" /> },
    { label: "Customer Satisfaction", value: "4.9/5", icon: <Star className="w-6 h-6" /> }
  ];

  const demoMetrics = [
    { name: "Revenue", value: "$124,567", change: "+12.5%", trend: "up", color: "text-green-400" },
    { name: "Users", value: "8,432", change: "+8.2%", trend: "up", color: "text-blue-400" },
    { name: "Conversion", value: "3.24%", change: "+0.5%", trend: "up", color: "text-purple-400" },
    { name: "Sessions", value: "45,678", change: "+15.3%", trend: "up", color: "text-orange-400" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard Pro - Advanced Business Intelligence | Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI Analytics Dashboard Pro - the most advanced AI-powered business intelligence platform. Real-time insights, predictive analytics, and custom dashboards. Starting at $99/month." />
        <meta name="keywords" content="AI analytics, business intelligence, data visualization, predictive analytics, AI insights, business dashboard, data analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-purple-400/30 mb-6">
                <Brain className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-400 font-semibold">AI-Powered Business Intelligence</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="holographic">AI Analytics Dashboard Pro</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with the most advanced AI-powered analytics platform. 
                Get real-time insights, predictive analytics, and custom dashboards.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button 
                  onClick={() => setIsDemoMode(!isDemoMode)}
                  className="neon-button neon-purple px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  {isDemoMode ? 'Exit Demo' : 'View Live Demo'}
                </button>
                <Link
                  to="/contact"
                  className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Get Started
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full glass flex items-center justify-center text-purple-400">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced AI-Powered Analytics
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to understand your data and make smarter decisions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="holographic-card p-8 hover:scale-105 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        {isDemoMode && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="glass rounded-2xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-white">AI Analytics Dashboard</h3>
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm">
                      Live
                    </button>
                    <button className="px-4 py-2 bg-gray-600 text-white rounded-lg text-sm">
                      <Settings className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {demoMetrics.map((metric, index) => (
                    <div key={index} className="glass p-6 rounded-xl">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-white">{metric.name}</h4>
                        <TrendingUp className="w-6 h-6 text-green-400" />
                      </div>
                      <div className={`text-3xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
                      <div className="text-sm text-gray-400">{metric.change} from last month</div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="glass p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-white mb-4">Revenue Trend (AI Predicted)</h4>
                    <div className="h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <LineChart className="w-16 h-16 text-white/50 mx-auto mb-4" />
                        <p className="text-white/70">AI-powered revenue forecasting</p>
                        <p className="text-green-400 text-sm mt-2">+15% predicted growth</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-white mb-4">Customer Segmentation (AI Analysis)</h4>
                    <div className="h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <PieChart className="w-16 h-16 text-white/50 mx-auto mb-4" />
                        <p className="text-white/70">AI-identified customer segments</p>
                        <p className="text-cyan-400 text-sm mt-2">5 distinct segments found</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 glass p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-white mb-4">AI Insights & Recommendations</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 bg-green-500/10 rounded-lg">
                      <Target className="w-5 h-5 text-green-400 mt-1" />
                      <div>
                        <p className="text-white font-medium">Revenue Optimization</p>
                        <p className="text-gray-300 text-sm">AI suggests focusing on high-value customer segment to increase revenue by 23%</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-4 bg-blue-500/10 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-blue-400 mt-1" />
                      <div>
                        <p className="text-white font-medium">Growth Opportunity</p>
                        <p className="text-gray-300 text-sm">Mobile traffic shows 40% higher conversion rate - consider mobile-first strategy</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-4 bg-purple-500/10 rounded-lg">
                      <Brain className="w-5 h-5 text-purple-400 mt-1" />
                      <div>
                        <p className="text-white font-medium">Predictive Alert</p>
                        <p className="text-gray-300 text-sm">Customer churn risk detected for 15 accounts - immediate action recommended</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI-Powered Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the AI analytics plan that matches your business intelligence needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative glass rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-purple-400/50 neon-glow' 
                    : 'border-white/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
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
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Analytics?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using AI Analytics Dashboard Pro to make smarter decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="neon-button neon-purple px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAnalyticsDashboardPro;
