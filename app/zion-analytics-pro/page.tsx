import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Zap, 
  Shield, 
  Globe, 
  ArrowRight,
  CheckCircle,
  Star,
  Download,
  Play,
  Settings,
  BarChart,
  PieChart,
  LineChart,
  Activity
} from 'lucide-react';

const ZionAnalyticsPro = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isDemoMode, setIsDemoMode] = useState(false);

  const features = [
    {
      title: "Real-time Analytics Dashboard",
      description: "Monitor your business metrics in real-time with customizable dashboards",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "AI-Powered Insights",
      description: "Get intelligent recommendations and predictions based on your data",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Multi-Platform Integration",
      description: "Connect with 50+ platforms including Google Analytics, Facebook, Shopify",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Advanced Security",
      description: "Enterprise-grade security with end-to-end encryption and compliance",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5 data sources",
        "Basic analytics dashboard",
        "Email support",
        "1 user account",
        "30-day data retention"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 25 data sources",
        "Advanced analytics & AI insights",
        "Priority support",
        "Up to 5 user accounts",
        "1-year data retention",
        "Custom reports",
        "API access"
      ],
      popular: true,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited data sources",
        "Full AI suite & predictions",
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
    { label: "Active Users", value: "10,000+", icon: <Users className="w-6 h-6" /> },
    { label: "Data Points Processed", value: "1B+", icon: <Activity className="w-6 h-6" /> },
    { label: "Uptime", value: "99.9%", icon: <Shield className="w-6 h-6" /> },
    { label: "Customer Satisfaction", value: "4.9/5", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Analytics Pro - Advanced Business Intelligence Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your business with Zion Analytics Pro - the most advanced AI-powered analytics platform. Real-time insights, predictive analytics, and seamless integrations. Starting at $29/month." />
        <meta name="keywords" content="business analytics, AI insights, data visualization, business intelligence, real-time analytics, predictive analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-cyan-400/30 mb-6">
                <Zap className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-semibold">AI-Powered Analytics Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="holographic">Zion Analytics Pro</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business data into actionable insights with our advanced AI-powered analytics platform. 
                Make smarter decisions, faster.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button 
                  onClick={() => setIsDemoMode(!isDemoMode)}
                  className="neon-button neon-cyan px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  {isDemoMode ? 'Exit Demo' : 'Try Live Demo'}
                </button>
                <Link
                  to="/contact"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Get Started
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full glass flex items-center justify-center text-cyan-400">
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
                Powerful Features for Modern Businesses
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to understand your data and drive growth
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
                  <h3 className="text-2xl font-bold text-white">Live Demo Dashboard</h3>
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
                  <div className="glass p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-white">Revenue</h4>
                      <BarChart className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="text-3xl font-bold text-green-400 mb-2">$124,567</div>
                    <div className="text-sm text-gray-400">+12.5% from last month</div>
                  </div>
                  
                  <div className="glass p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-white">Users</h4>
                      <Users className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">8,432</div>
                    <div className="text-sm text-gray-400">+8.2% from last month</div>
                  </div>
                  
                  <div className="glass p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-white">Conversion</h4>
                      <TrendingUp className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="text-3xl font-bold text-purple-400 mb-2">3.24%</div>
                    <div className="text-sm text-gray-400">+0.5% from last month</div>
                  </div>
                  
                  <div className="glass p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-white">Sessions</h4>
                      <Activity className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="text-3xl font-bold text-orange-400 mb-2">45,678</div>
                    <div className="text-sm text-gray-400">+15.3% from last month</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="glass p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-white mb-4">Revenue Trend</h4>
                    <div className="h-64 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                      <LineChart className="w-16 h-16 text-white/50" />
                    </div>
                  </div>
                  
                  <div className="glass p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-white mb-4">Traffic Sources</h4>
                    <div className="h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                      <PieChart className="w-16 h-16 text-white/50" />
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
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative glass rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 neon-glow' 
                    : 'border-white/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
                Join thousands of businesses already using Zion Analytics Pro to make data-driven decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="neon-button neon-cyan px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
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

export default ZionAnalyticsPro;
