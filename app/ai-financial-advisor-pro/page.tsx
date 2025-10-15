import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  DollarSign, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  Star,
  ArrowRight,
  Clock,
  Target,
  Shield,
  PieChart,
  Calculator,
  FileText,
  AlertTriangle,
  Database
} from 'lucide-react';

const AiFinancialAdvisorProPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI Investment Analysis",
      description: "Advanced algorithms analyze market trends, risk factors, and investment opportunities in real-time"
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Portfolio Optimization",
      description: "Intelligent portfolio rebalancing and diversification recommendations based on your risk profile"
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Tax Optimization",
      description: "AI-powered tax planning strategies to minimize liabilities and maximize after-tax returns"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal Planning",
      description: "Personalized financial goal setting with AI-driven strategies for retirement, education, and major purchases"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk Assessment",
      description: "Comprehensive risk analysis and insurance recommendations tailored to your financial situation"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Market Insights",
      description: "Real-time market analysis, economic indicators, and investment opportunities with AI predictions"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$49",
      period: "/month",
      description: "Perfect for individuals starting their financial journey",
      features: [
        "Basic Portfolio Analysis",
        "Monthly Reports",
        "Email Support",
        "Standard Templates",
        "Basic Tax Planning",
        "Mobile App"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for serious investors and small business owners",
      features: [
        "Advanced AI Analysis",
        "Real-time Alerts",
        "Priority Support",
        "Custom Strategies",
        "Advanced Tax Optimization",
        "API Access",
        "Family Planning Tools"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For financial advisors and wealth management firms",
      features: [
        "White-label Platform",
        "Client Management",
        "24/7 Phone Support",
        "Custom Integrations",
        "Advanced Security",
        "Compliance Tools",
        "Dedicated Account Manager"
      ],
      popular: false
    }
  ];

  const investmentTypes = [
    {
      title: "Stocks & ETFs",
      description: "AI-powered stock analysis and ETF selection with risk-adjusted returns",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Real Estate",
      description: "Property investment analysis with market trends and rental yield optimization",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Cryptocurrency",
      description: "Digital asset portfolio management with volatility analysis and DeFi opportunities",
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: "Bonds & Fixed Income",
      description: "Fixed income analysis with yield curve optimization and credit risk assessment",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const securityFeatures = [
    { name: "Bank-Level Encryption", icon: <Shield className="w-6 h-6" />, color: "text-green-600" },
    { name: "SOC 2 Compliance", icon: <CheckCircle className="w-6 h-6" />, color: "text-blue-600" },
    { name: "Multi-Factor Auth", icon: <Target className="w-6 h-6" />, color: "text-purple-600" },
    { name: "Regular Audits", icon: <FileText className="w-6 h-6" />, color: "text-orange-600" },
    { name: "Data Privacy", icon: <Database className="w-6 h-6" />, color: "text-cyan-600" },
    { name: "24/7 Monitoring", icon: <Clock className="w-6 h-6" />, color: "text-red-600" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Financial Advisor Pro - Zion Tech Group | Intelligent Financial Planning</title>
        <meta name="description" content="Revolutionary AI-powered financial advisory platform. Get personalized investment advice, portfolio optimization, and tax planning. Increase returns by 25% with intelligent financial management." />
        <meta name="keywords" content="AI financial advisor, investment analysis, portfolio optimization, financial planning, wealth management, tax optimization" />
        <meta property="og:title" content="AI Financial Advisor Pro - Zion Tech Group" />
        <meta property="og:description" content="Transform your financial future with AI-powered investment advice and planning." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-financial-advisor-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                #1 AI Financial Advisory Platform
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Financial Advisor
                </span>
                <br />
                <span className="text-white">Pro</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your financial future with AI-powered investment advice, portfolio optimization, 
                and tax planning. Increase your returns by 25% while reducing risk with intelligent 
                financial management.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">25%</div>
                  <div className="text-gray-400 text-sm">Higher Returns</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">30%</div>
                  <div className="text-gray-400 text-sm">Lower Risk</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">10K+</div>
                  <div className="text-gray-400 text-sm">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">$2B+</div>
                  <div className="text-gray-400 text-sm">Assets Managed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to make informed financial decisions with AI-powered insights
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Investment Coverage</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI analyzes all major investment types to provide comprehensive financial advice
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {investmentTypes.map((investment, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{investment.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{investment.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{investment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Bank-Level Security</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your financial data is protected with enterprise-grade security measures
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {securityFeatures.map((security, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className={`w-12 h-12 mx-auto mb-3 ${security.color} group-hover:scale-110 transition-transform duration-300`}>
                    {security.icon}
                  </div>
                  <h3 className="text-white font-semibold text-sm">{security.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your financial planning needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-lg shadow-cyan-500/10' 
                    : 'border-cyan-500/20'
                } hover:border-cyan-400/40 transition-all duration-300 group`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Financial Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of investors already using AI to optimize their portfolios and maximize returns. 
                Start your free trial today - no credit card required!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiFinancialAdvisorProPage;