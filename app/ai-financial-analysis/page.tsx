import React from 'react';
import { Link } from 'react-router-dom';
import { 
  DollarSign, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Brain, 
  Clock,
  Shield,
  Settings,
  BarChart3,
  Globe,
  PieChart
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIFinancialAnalysisPage = () => {
  const features = [
    {
      title: "Predictive Financial Modeling",
      description: "Advanced AI models that forecast revenue, expenses, and cash flow with high accuracy",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: ["95% accuracy", "Real-time forecasting", "Risk assessment"]
    },
    {
      title: "Automated Financial Reporting",
      description: "Generate comprehensive financial reports and insights automatically",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Instant reports", "Custom dashboards", "Regulatory compliance"]
    },
    {
      title: "Fraud Detection & Prevention",
      description: "AI-powered fraud detection that identifies suspicious transactions in real-time",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Real-time detection", "99.9% accuracy", "Automated alerts"]
    },
    {
      title: "Investment Analysis",
      description: "Comprehensive investment analysis and portfolio optimization using AI",
      icon: <PieChart className="w-8 h-8" />,
      benefits: ["Portfolio optimization", "Risk analysis", "ROI prediction"]
    }
  ];

  const analysisTypes = [
    {
      type: "Revenue Analysis",
      description: "Comprehensive revenue forecasting and trend analysis",
      metrics: ["Revenue forecasting", "Growth analysis", "Seasonal patterns"]
    },
    {
      type: "Cost Optimization",
      description: "Identify cost-saving opportunities and optimize spending",
      metrics: ["Cost reduction", "Budget optimization", "Expense tracking"]
    },
    {
      type: "Cash Flow Management",
      description: "Predict and manage cash flow for better financial planning",
      metrics: ["Cash flow forecasting", "Liquidity analysis", "Working capital"]
    },
    {
      type: "Risk Assessment",
      description: "Evaluate financial risks and provide mitigation strategies",
      metrics: ["Credit risk", "Market risk", "Operational risk"]
    }
  ];

  const pricingTiers = [
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "For growing businesses",
      features: [
        "Up to 10 financial models",
        "Basic reporting",
        "Standard AI models",
        "Email support",
        "Basic integrations"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$1,499",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited models",
        "Advanced reporting",
        "Custom AI models",
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
        "Custom financial models",
        "Dedicated support",
        "On-premise deployment",
        "Training & consulting",
        "API access"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Financial Analysis - Zion Tech Group | Intelligent Financial Intelligence"
        description="Transform your financial data into actionable insights with AI-powered analysis. Predictive modeling, fraud detection, and automated reporting for better financial decisions."
        keywords="AI financial analysis, financial forecasting, fraud detection, investment analysis, financial modeling, fintech AI"
        canonical="https://ziontechgroup.com/ai-financial-analysis"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <DollarSign className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Financial Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Financial Analysis
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Unlock the power of your financial data with AI-driven analysis. Get predictive insights, automated reporting, and intelligent fraud detection.
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
              <DollarSign className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Financial Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI-powered financial analysis platform provides comprehensive insights and predictions.
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

      {/* Analysis Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Financial Analysis
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cover every aspect of your financial operations with specialized analysis modules.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analysisTypes.map((analysis, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{analysis.type}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{analysis.description}</p>
                <div className="space-y-3">
                  {analysis.metrics.map((metric, metricIndex) => (
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
              Choose Your Financial Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to match your financial analysis needs.
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
              Transform Your Financial Intelligence
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join thousands of businesses using our AI financial analysis platform to make smarter financial decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Financial Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule a Demo
                <DollarSign className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIFinancialAnalysisPage;