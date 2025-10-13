import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Brain, 
  Clock,
  Shield,
  Settings,
  Database,
  Globe
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIDataAnalyticsProPage = () => {
  const features = [
    {
      title: "Advanced AI Models",
      description: "State-of-the-art machine learning algorithms for predictive analytics and insights",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["95% accuracy", "Real-time processing", "Self-learning algorithms"]
    },
    {
      title: "Interactive Dashboards",
      description: "Customizable dashboards with drag-and-drop functionality for comprehensive data visualization",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Real-time updates", "Custom widgets", "Mobile responsive"]
    },
    {
      title: "Predictive Analytics",
      description: "Forecast future trends and behaviors using advanced statistical models and AI",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: ["Future forecasting", "Risk assessment", "Trend analysis"]
    },
    {
      title: "Data Integration",
      description: "Seamlessly connect with 100+ data sources and APIs for comprehensive analysis",
      icon: <Database className="w-8 h-8" />,
      benefits: ["100+ connectors", "Real-time sync", "Data cleansing"]
    }
  ];

  const analyticsTypes = [
    {
      type: "Customer Analytics",
      description: "Understand customer behavior, preferences, and lifetime value",
      metrics: ["Customer segmentation", "Churn prediction", "Purchase patterns"]
    },
    {
      type: "Financial Analytics",
      description: "Comprehensive financial analysis and forecasting",
      metrics: ["Revenue forecasting", "Cost analysis", "Profit optimization"]
    },
    {
      type: "Operational Analytics",
      description: "Optimize business operations and processes",
      metrics: ["Efficiency metrics", "Resource utilization", "Performance KPIs"]
    },
    {
      type: "Marketing Analytics",
      description: "Measure and optimize marketing campaigns and ROI",
      metrics: ["Campaign performance", "ROI analysis", "Customer acquisition"]
    }
  ];

  const pricingTiers = [
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "For growing businesses",
      features: [
        "Up to 1M data points",
        "5 custom dashboards",
        "Standard AI models",
        "Email support",
        "Basic integrations"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited data points",
        "Unlimited dashboards",
        "Advanced AI models",
        "Priority support",
        "Custom integrations",
        "White-label options"
      ],
      popular: true
    },
    {
      name: "Custom",
      price: "Contact",
      period: "us",
      description: "Tailored solutions",
      features: [
        "Custom data sources",
        "Bespoke AI models",
        "Dedicated support",
        "On-premise deployment",
        "Training & consulting"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Data Analytics Pro - Zion Tech Group | Advanced Business Intelligence"
        description="Transform your data into actionable insights with our AI-powered analytics platform. Advanced machine learning, predictive analytics, and interactive dashboards for data-driven decisions."
        keywords="AI data analytics, business intelligence, predictive analytics, data visualization, machine learning, data insights"
        canonical="https://ziontechgroup.com/ai-data-analytics-pro"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <BarChart3 className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Advanced Analytics</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Data Analytics Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Unlock the power of your data with advanced AI-driven analytics. Get predictive insights, interactive dashboards, and automated reporting that drives business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
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
              View Demo
              <BarChart3 className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI-powered analytics platform combines cutting-edge machine learning with intuitive visualization tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Analytics Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Analytics Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cover every aspect of your business with specialized analytics modules.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analyticsTypes.map((analytics, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{analytics.type}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{analytics.description}</p>
                <div className="space-y-3">
                  {analytics.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-3">
                      <TrendingUp className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Analytics Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to match your data needs and business size.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  tier.popular 
                    ? 'border-cyan-400 shadow-cyan-500/25' 
                    : 'border-white/20 hover:border-cyan-400/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-300 ml-1">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transform Your Data Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join thousands of businesses using our AI analytics platform to make data-driven decisions and accelerate growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Analytics Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule a Demo
                <BarChart3 className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIDataAnalyticsProPage;