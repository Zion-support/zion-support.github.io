import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, Shield, PieChart, Target, DollarSign, CheckCircle, ArrowRight, Star, BarChart3, Users } from 'lucide-react';

const AiFinancialAdvisorPage: React.FC = () => {
  const features = [
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Portfolio Management",
      description: "AI-powered portfolio optimization and rebalancing based on market conditions and risk tolerance",
      benefits: ["Automated rebalancing", "Risk assessment", "Diversification analysis", "Performance tracking"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Investment Analysis",
      description: "Advanced market analysis and investment recommendations using machine learning algorithms",
      benefits: ["Market predictions", "Stock analysis", "Sector insights", "Trend identification"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Assessment",
      description: "Comprehensive risk evaluation and mitigation strategies for your financial portfolio",
      benefits: ["Risk scoring", "Stress testing", "Scenario analysis", "Hedge recommendations"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal Planning",
      description: "Personalized financial goal setting and achievement tracking with AI-driven recommendations",
      benefits: ["Goal prioritization", "Savings optimization", "Timeline planning", "Progress monitoring"]
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$99",
      period: "per month",
      description: "Perfect for individual investors and small portfolios",
      features: [
        "Up to 5 portfolios",
        "Basic AI analysis",
        "Monthly rebalancing",
        "Email support",
        "Standard reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "per month",
      description: "Ideal for financial advisors and wealth managers",
      features: [
        "Up to 25 portfolios",
        "Advanced AI algorithms",
        "Real-time monitoring",
        "Custom strategies",
        "Priority support",
        "API integration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "per month",
      description: "Comprehensive solution for large financial institutions",
      features: [
        "Unlimited portfolios",
        "Full AI suite",
        "White-label options",
        "Custom models",
        "24/7 support",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Individual Investors",
      description: "Personalized investment advice and portfolio management for individual investors",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Financial Advisors",
      description: "AI-powered tools to enhance advisory services and client portfolio management",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Wealth Management",
      description: "Comprehensive wealth management solutions for high-net-worth individuals",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: "Institutional Trading",
      description: "Advanced trading algorithms and risk management for institutional clients",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const marketData = [
    { metric: "Average Return", value: "12.5%", description: "Annual portfolio returns" },
    { metric: "Risk Reduction", value: "35%", description: "Volatility reduction" },
    { metric: "Client Satisfaction", value: "98%", description: "User satisfaction rate" },
    { metric: "Assets Under Management", value: "$2.5B+", description: "Total AUM managed" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Financial Advisor - Zion Tech Group | Intelligent Investment Management</title>
        <meta name="description" content="Advanced AI financial advisor with portfolio management, investment analysis, and risk assessment. Maximize returns with intelligent financial planning." />
        <meta name="keywords" content="ai financial advisor, portfolio management, investment analysis, financial planning, wealth management, trading algorithms" />
        <meta property="og:title" content="AI Financial Advisor - Zion Tech Group" />
        <meta property="og:description" content="Intelligent financial planning and investment management" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Hero Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 relative">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Financial Advisor
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-lg opacity-75"></div>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Maximize your investment returns with our intelligent AI financial advisor. 
                Advanced portfolio management, risk assessment, and personalized investment strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Market Performance Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Proven Performance</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI financial advisor delivers consistent results across all market conditions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketData.map((data, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-cyan-500/30 rounded-xl p-6 text-center hover:border-cyan-400/60 transition-all duration-300 group">
                  <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {data.value}
                  </div>
                  <div className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {data.metric}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {data.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced AI Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive financial tools powered by cutting-edge artificial intelligence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden group">
                  <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm group-hover:text-gray-200 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white/5 relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Who Can Benefit</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI financial advisor serves diverse clients across the financial industry
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/40 rounded-xl p-6 text-center hover:bg-slate-700/40 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Flexible Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your financial advisory needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border rounded-2xl p-8 relative overflow-hidden group ${
                  plan.popular ? 'border-cyan-500/60 ring-2 ring-cyan-500/20' : 'border-cyan-500/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400 font-normal">/{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 hover:shadow-lg hover:shadow-cyan-500/25' 
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-12 text-center relative overflow-hidden backdrop-blur-sm border border-cyan-500/30">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 animate-pulse"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6 relative">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Ready to Optimize Your Investments?
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 blur-sm"></div>
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of investors who trust our AI financial advisor to maximize their returns and minimize risk.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 relative overflow-hidden group">
                    <span className="relative z-10">Start Free Trial</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 relative overflow-hidden group">
                    <span className="relative z-10">Contact Sales</span>
                    <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiFinancialAdvisorPage;