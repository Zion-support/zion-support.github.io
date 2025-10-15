import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, Shield, PieChart, Target, CheckCircle, ArrowRight, Star, DollarSign } from 'lucide-react';

const AiFinancialAdvisorPage: React.FC = () => {
  const features = [
    {
      title: "Portfolio Management",
      description: "AI-powered portfolio optimization and rebalancing",
      icon: <PieChart className="w-6 h-6" />,
      benefits: ["Automated rebalancing", "Risk assessment", "Performance tracking", "Diversification analysis"]
    },
    {
      title: "Risk Assessment",
      description: "Advanced risk analysis and investment recommendations",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Risk profiling", "Stress testing", "Scenario analysis", "Compliance monitoring"]
    },
    {
      title: "Investment Advice",
      description: "Personalized investment strategies based on goals and risk tolerance",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Goal-based planning", "Asset allocation", "Tax optimization", "Retirement planning"]
    },
    {
      title: "Market Analysis",
      description: "Real-time market insights and trend predictions",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["Market forecasting", "Trend analysis", "News sentiment", "Economic indicators"]
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$99",
      period: "/month",
      description: "Perfect for individual investors",
      features: [
        "Up to $100K portfolio",
        "Basic AI recommendations",
        "Email support",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Ideal for financial advisors",
      features: [
        "Up to $1M portfolio",
        "Advanced AI analytics",
        "Priority support",
        "Custom strategies",
        "Client management"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large financial institutions",
      features: [
        "Unlimited portfolios",
        "Full AI suite",
        "24/7 support",
        "White-label options",
        "API integration"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Financial Advisor - Zion Tech Group | Intelligent Investment Management</title>
        <meta name="description" content="Advanced AI-powered financial advisor for portfolio management, risk assessment, and investment optimization. Trusted by financial professionals worldwide." />
        <meta name="keywords" content="ai financial advisor, portfolio management, investment advice, risk assessment, financial planning, wealth management" />
        <meta property="og:title" content="AI Financial Advisor - Zion Tech Group" />
        <meta property="og:description" content="Intelligent financial advisory solutions powered by AI" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Financial Advisor</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Maximize your investment returns with our AI-powered financial advisor. 
                Get personalized portfolio management, risk assessment, and investment strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced Financial AI Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to optimize your financial strategy and maximize returns
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Choose Your Plan</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed for investors and financial professionals
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
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
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Optimize Your Investments?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of investors and financial professionals using our AI Financial Advisor to maximize returns and minimize risk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiFinancialAdvisorPage;