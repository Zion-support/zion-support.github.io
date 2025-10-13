import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { ArrowRight, TrendingUp, Database, Brain, Zap, Shield, Users, Clock, Star, Mic, Mail, Smartphone, Globe } from 'lucide-react';

const AIDataAnalyticsPro: React.FC = () => {
  const features = [
    {
      title: "Advanced AI Models",
      description: "State-of-the-art machine learning algorithms for predictive analytics",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-time Processing",
      description: "Process massive datasets in real-time with sub-second response times",
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Automated Insights",
      description: "AI automatically identifies patterns and generates actionable insights",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption and compliance",
      icon: Shield,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "40% faster data processing",
    "99.9% accuracy in predictions",
    "Real-time dashboard updates",
    "Automated report generation",
    "Multi-source data integration",
    "Advanced visualization tools"
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      features: [
        "Up to 1M data points",
        "Basic AI models",
        "Standard support",
        "5 user accounts"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      features: [
        "Up to 10M data points",
        "Advanced AI models",
        "Priority support",
        "Unlimited users",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Unlimited data points",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solution",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const sampleData = [
    { name: 'Jan', revenue: 4000, users: 2400, conversion: 24 },
    { name: 'Feb', revenue: 3000, users: 1398, conversion: 18 },
    { name: 'Mar', revenue: 2000, users: 9800, conversion: 32 },
    { name: 'Apr', revenue: 2780, users: 3908, conversion: 28 },
    { name: 'May', revenue: 1890, users: 4800, conversion: 22 },
    { name: 'Jun', revenue: 2390, users: 3800, conversion: 26 }
  ];

  const pieData = [
    { name: 'Desktop', value: 45, color: '#8884d8' },
    { name: 'Mobile', value: 35, color: '#82ca9d' },
    { name: 'Tablet', value: 20, color: '#ffc658' }
  ];

  const FuturisticButton: React.FC<{ children: React.ReactNode; className?: string; onClick?: () => void }> = ({ children, className = "", onClick }) => (
    <button
      onClick={onClick}
      className={`relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 ${className}`}
    >
      {children}
      <ArrowRight className="w-5 h-5 ml-2 inline" />
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Data Analytics Pro - Advanced Business Intelligence | Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our advanced AI-powered analytics platform. Real-time processing, predictive modeling, and automated reporting." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI Data Analytics
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Pro
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your data into actionable insights with our advanced AI-powered analytics platform. 
            Get real-time processing, predictive modeling, and automated reporting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton>
              Start Free Trial
            </FuturisticButton>
            <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Powerful AI Analytics Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Preview */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Real-time Analytics Dashboard
          </h2>
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Revenue Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={sampleData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }} />
                    <Line type="monotone" dataKey="revenue" stroke="#06B6D4" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">User Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="text-center">
              <FuturisticButton>
                View Full Dashboard
              </FuturisticButton>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Why Choose AI Data Analytics Pro?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Choose Your Plan
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border ${tier.popular ? 'border-cyan-500/50' : 'border-slate-700/50'} hover:border-cyan-500/50 transition-all duration-300`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400">{tier.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <FuturisticButton className="w-full justify-center">
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using AI-powered analytics 
            to drive better decisions and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton>
              Start Free Trial
            </FuturisticButton>
            <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDataAnalyticsPro;