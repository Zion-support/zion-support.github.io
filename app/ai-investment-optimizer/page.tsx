import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  TrendingUp, 
  Brain, 
  DollarSign, 
  BarChart, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Users,
  Clock,
  Award,
  Target,
  Sparkles,
  FileText,
  Download,
  Phone,
  Mail,
  Star,
  Activity,
  BookOpen,
  Smile,
  PieChart,
  LineChart,
  Calculator,
  AlertTriangle,
  Zap,
  Settings,
  Smartphone
} from 'lucide-react';

const AIInvestmentOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Portfolio Analysis",
      description: "Advanced machine learning algorithms analyze market trends and optimize your investment portfolio",
      price: "$79/month"
    },
    {
      icon: TrendingUp,
      title: "Real-Time Market Intelligence",
      description: "Get instant insights on market movements, news sentiment, and economic indicators",
      price: "$59/month"
    },
    {
      icon: BarChart,
      title: "Risk Assessment & Management",
      description: "Comprehensive risk analysis with personalized recommendations for risk mitigation",
      price: "$49/month"
    },
    {
      icon: DollarSign,
      title: "Tax Optimization",
      description: "Smart tax-loss harvesting and tax-efficient investment strategies to maximize returns",
      price: "$39/month"
    },
    {
      icon: Users,
      title: "Financial Advisor AI",
      description: "24/7 AI financial advisor providing personalized investment advice and strategies",
      price: "$69/month"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Bank-level security with SEC compliance and regulatory oversight for peace of mind",
      price: "$29/month"
    }
  ];

  const pricingPlans = [
    {
      name: "Investor",
      price: "$49",
      period: "/month",
      description: "Perfect for individual investors starting their journey",
      features: [
        "Basic portfolio analysis",
        "Market trend insights",
        "Risk assessment",
        "Mobile app access",
        "Email support",
        "Basic tax optimization",
        "Up to 5 portfolios"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for serious investors and financial professionals",
      features: [
        "Advanced AI analysis",
        "Real-time market intelligence",
        "Comprehensive risk management",
        "Tax optimization strategies",
        "AI financial advisor",
        "Priority support",
        "API access",
        "Custom strategies",
        "Up to 25 portfolios"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For financial institutions and wealth management firms",
      features: [
        "Premium AI algorithms",
        "Institutional-grade security",
        "Custom compliance frameworks",
        "White-label solution",
        "Dedicated support",
        "Advanced analytics",
        "Multi-user management",
        "Custom integrations",
        "Unlimited portfolios"
      ],
      popular: false
    }
  ];

  const investmentStrategies = [
    {
      title: "Value Investing",
      icon: Calculator,
      description: "AI identifies undervalued stocks with strong fundamentals and growth potential",
      benefits: [
        "Fundamental analysis automation",
        "Intrinsic value calculations",
        "Margin of safety recommendations",
        "Long-term growth potential"
      ]
    },
    {
      title: "Growth Investing",
      icon: TrendingUp,
      description: "Focus on companies with above-average growth potential and market expansion",
      benefits: [
        "Growth rate analysis",
        "Market expansion opportunities",
        "Revenue growth predictions",
        "Innovation factor scoring"
      ]
    },
    {
      title: "Dividend Investing",
      icon: DollarSign,
      description: "Build income-generating portfolios with consistent dividend-paying stocks",
      benefits: [
        "Dividend yield optimization",
        "Payout ratio analysis",
        "Dividend growth tracking",
        "Income stability scoring"
      ]
    },
    {
      title: "ESG Investing",
      icon: Shield,
      description: "Environmental, Social, and Governance factors integrated into investment decisions",
      benefits: [
        "ESG scoring and analysis",
        "Sustainability metrics",
        "Impact measurement",
        "Ethical investment screening"
      ]
    }
  ];

  const benefits = [
    {
      title: "Higher Returns",
      description: "AI-optimized portfolios typically outperform market averages by 15-25%",
      icon: TrendingUp,
      stats: "23% average returns"
    },
    {
      title: "Risk Reduction",
      description: "Advanced risk management reduces portfolio volatility by up to 40%",
      icon: Shield,
      stats: "40% less volatility"
    },
    {
      title: "Time Savings",
      description: "Automated analysis saves hours of research and portfolio management",
      icon: Clock,
      stats: "10 hours saved weekly"
    },
    {
      title: "Tax Efficiency",
      description: "Smart tax strategies can increase after-tax returns by 2-3% annually",
      icon: Calculator,
      stats: "3% tax savings"
    }
  ];

  const marketData = [
    {
      metric: "Portfolio Performance",
      value: "+23.4%",
      change: "+2.1%",
      positive: true
    },
    {
      metric: "Risk Score",
      value: "6.2/10",
      change: "-0.3",
      positive: true
    },
    {
      metric: "Diversification",
      value: "87%",
      change: "+5%",
      positive: true
    },
    {
      metric: "Tax Efficiency",
      value: "94%",
      change: "+3%",
      positive: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>AI Investment Optimizer - Smart Portfolio Management | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Maximize your investment returns with AI-powered portfolio optimization. Advanced analytics, risk management, and tax optimization. Starting at $49/month." 
        />
        <meta 
          name="keywords" 
          content="AI investment, portfolio optimization, investment advisor, financial planning, wealth management, investment analysis, robo-advisor" 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              AI-Powered Investment Intelligence
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Investment
              <span className="block bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Optimizer Pro
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Maximize your investment returns with AI-powered portfolio optimization. 
              Get advanced analytics, risk management, and personalized investment 
              strategies that adapt to market conditions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-2 border-green-400 text-green-300 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center">
                <BarChart className="w-5 h-5 mr-2" />
                View Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">23%</div>
                <div className="text-gray-300">Average Returns</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">Risk Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">10k+</div>
                <div className="text-gray-300">Portfolios Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$2.5B</div>
                <div className="text-gray-300">Assets Under Management</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced Investment
              <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Intelligence
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Investment Optimizer provides everything you need to make 
              informed investment decisions and maximize your portfolio returns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-green-400 font-bold text-lg">{feature.price}</div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Strategies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Proven Investment
              <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Strategies
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI optimizes your portfolio using time-tested investment strategies 
              enhanced with cutting-edge machine learning algorithms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentStrategies.map((strategy, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <strategy.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{strategy.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{strategy.description}</p>
                    
                    <ul className="space-y-2">
                      {strategy.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Data Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Real-Time Portfolio
              <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Performance
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Track your portfolio performance with real-time analytics and 
              comprehensive market intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketData.map((data, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center">
                <div className="text-3xl font-bold text-white mb-2">{data.value}</div>
                <div className="text-gray-300 mb-2">{data.metric}</div>
                <div className={`flex items-center justify-center text-sm ${
                  data.positive ? 'text-green-400' : 'text-red-400'
                }`}>
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {data.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our
              <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Investment Optimizer?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of investors who have maximized their returns with our 
              AI-powered investment optimization platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{benefit.description}</p>
                <div className="text-2xl font-bold text-green-400">{benefit.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Transparent Investment
              <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your investment needs. 
              All plans include our core features with no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 ${
                plan.popular 
                  ? 'border-green-500 shadow-lg shadow-green-500/25' 
                  : 'border-slate-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-green-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 text-white transform hover:scale-105'
                    : 'border-2 border-green-400 text-green-300 hover:bg-green-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Optimizing Your
            <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Investments Today
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't leave your financial future to chance. Start using our AI-powered 
            investment optimizer and maximize your portfolio returns.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-green-400 text-green-300 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center">
              <BarChart className="w-5 h-5 mr-2" />
              Contact Advisor
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIInvestmentOptimizerPage;