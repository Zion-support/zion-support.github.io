import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, BarChart3, PieChart, Target, CheckCircle, Star, Zap, Clock, Shield, Globe, DollarSign, CreditCard, PiggyBank, Calculator, FileText, Users, Settings, Bell, Eye, Search, Filter, Download, Upload, Share2, Edit, Trash2, Plus, Minus, X, Check, ArrowRight, Building, Home, Car, GraduationCap, Heart, Briefcase, Calendar, AlertTriangle, RefreshCw, ShoppingCart, Truck, Warehouse, MapPin, Package } from 'lucide-react';

const AiFinancialAdvisorPage: React.FC = () => {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Portfolio Optimization",
      description: "AI-powered portfolio analysis and optimization for maximum returns",
      benefits: ["Risk assessment", "Asset allocation", "Rebalancing alerts", "Performance tracking", "Tax optimization", "Diversification analysis"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Investment Analysis",
      description: "Comprehensive analysis of investment opportunities and market trends",
      benefits: ["Stock analysis", "Market research", "Trend identification", "Risk evaluation", "ROI calculations", "Competitive analysis"]
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Financial Planning",
      description: "Personalized financial planning and goal setting with AI recommendations",
      benefits: ["Goal setting", "Budget planning", "Retirement planning", "Tax planning", "Estate planning", "Insurance analysis"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal Tracking",
      description: "Track and monitor your financial goals with AI-powered insights",
      benefits: ["Goal monitoring", "Progress tracking", "Milestone alerts", "Achievement analysis", "Adjustment recommendations", "Success metrics"]
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Expense Management",
      description: "Intelligent expense tracking and categorization for better financial control",
      benefits: ["Expense tracking", "Categorization", "Budget alerts", "Spending analysis", "Savings recommendations", "Cost optimization"]
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Tax Optimization",
      description: "AI-powered tax planning and optimization strategies",
      benefits: ["Tax planning", "Deduction optimization", "Filing assistance", "Compliance monitoring", "Audit protection", "Tax forecasting"]
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$129/month",
      description: "Perfect for individuals and families",
      features: [
        "Personal portfolio management",
        "Basic financial planning",
        "Expense tracking",
        "Tax optimization",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$259/month",
      description: "Ideal for professionals and small business owners",
      features: [
        "Advanced portfolio analysis",
        "Comprehensive financial planning",
        "Investment research",
        "Tax planning & filing",
        "Priority support",
        "Advanced analytics",
        "Goal tracking",
        "Retirement planning"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$519/month",
      description: "For financial advisors and large families",
      features: [
        "Multi-portfolio management",
        "White-label solution",
        "Custom integrations",
        "Dedicated advisor",
        "24/7 phone support",
        "Custom reporting",
        "API access",
        "Advanced security"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Save 20+ Hours Monthly",
      description: "Automate financial planning and focus on growing your wealth"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Increase Returns by 15%",
      description: "AI-optimized portfolios and investment strategies"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Reduce Tax Burden",
      description: "Intelligent tax planning and optimization strategies"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Investment Access",
      description: "Access to international markets and investment opportunities"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Financial Advisor Pro - Zion Tech Group | Smart Financial Planning</title>
        <meta name="description" content="Transform your financial future with AI-powered portfolio optimization, investment analysis, and financial planning. Increase returns by 15% and save 20+ hours monthly." />
        <meta name="keywords" content="financial advisor, AI investment, portfolio optimization, financial planning, investment analysis, tax optimization" />
        <meta property="og:title" content="AI Financial Advisor Pro - Zion Tech Group" />
        <meta property="og:description" content="AI-powered financial planning and investment platform" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Financial <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Advisor Pro</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your financial future with AI-powered portfolio optimization, investment analysis, and financial planning. 
                Increase returns by 15% and save 20+ hours monthly.
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
              <h2 className="text-4xl font-bold text-white mb-6">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to optimize your financial future
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-6">
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
              <h2 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your financial needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                    <p className="text-gray-400">Billed monthly</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Platform?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of investors already using our AI-powered financial planning
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Optimize Your Finances?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start your free trial today and see the difference AI-powered financial planning can make.
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
