import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, PieChart, Target, DollarSign, BarChart3, ArrowRight, Star, CheckCircle, Clock, Users, Award, Calculator, Wallet, PiggyBank } from 'lucide-react';
import SEOOptimizer from '../../components/SEOOptimizer';

const ZionAiFinancialAdvisorPage = () => {
  const features = [
    {
      title: "AI-Powered Investment Analysis",
      description: "Advanced algorithms analyze market trends and provide personalized investment recommendations",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Risk Assessment & Management",
      description: "Comprehensive risk analysis with personalized strategies to protect your portfolio",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Portfolio Optimization",
      description: "AI-driven portfolio rebalancing and optimization for maximum returns",
      icon: <PieChart className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Goal-Based Planning",
      description: "Set financial goals and get AI-powered strategies to achieve them",
      icon: <Target className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-Time Market Monitoring",
      description: "24/7 market monitoring with instant alerts and recommendations",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Tax Optimization",
      description: "Smart tax strategies to minimize your tax burden legally",
      icon: <Calculator className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "month",
      description: "Perfect for individual investors starting their journey",
      features: [
        "Basic portfolio analysis",
        "Monthly investment recommendations",
        "Risk assessment",
        "Goal tracking",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "month",
      description: "Ideal for serious investors and small portfolios",
      features: [
        "Advanced AI analysis",
        "Weekly recommendations",
        "Real-time market alerts",
        "Tax optimization",
        "Priority support",
        "Advanced reporting",
        "Portfolio rebalancing"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "month",
      description: "For high-net-worth individuals and family offices",
      features: [
        "Everything in Professional",
        "Daily recommendations",
        "Personal financial advisor",
        "Custom strategies",
        "Family wealth planning",
        "Estate planning",
        "Dedicated support"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Robert Chen",
      company: "Tech Executive",
      role: "Portfolio Manager",
      content: "Zion AI Financial Advisor has increased my portfolio returns by 23% while reducing risk. The AI insights are incredibly accurate.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      company: "Small Business Owner",
      role: "Entrepreneur",
      content: "Finally, a financial advisor that understands my goals and provides actionable advice. My retirement planning is now on track.",
      rating: 5
    },
    {
      name: "David Kim",
      company: "Investment Firm",
      role: "Financial Analyst",
      content: "The AI-powered analysis is more thorough than most human advisors. It's like having a team of experts working 24/7.",
      rating: 5
    }
  ];

  const marketData = [
    { metric: "Average Return", value: "12.4%", description: "Annual portfolio returns" },
    { metric: "Risk Reduction", value: "35%", description: "Volatility reduction" },
    { metric: "Tax Savings", value: "$2,400", description: "Average annual savings" },
    { metric: "Client Satisfaction", value: "98%", description: "User satisfaction rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <SEOOptimizer
        title="Zion AI Financial Advisor - AI-Powered Investment Management | Zion Tech Group"
        description="Maximize your investments with AI-powered financial advice. Portfolio optimization, risk management, and personalized strategies. Start building wealth today."
        keywords="AI financial advisor, investment management, portfolio optimization, financial planning, wealth management, AI investing"
        canonical="https://ziontechgroup.com/zion-ai-financial-advisor"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
            <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">AI-Powered Financial Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Zion AI
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 animate-pulse">
              {" "}Financial Advisor
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Maximize your wealth with AI-powered investment management. 
            Get personalized financial advice, portfolio optimization, and risk management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
            >
              Start Free Analysis
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Demo
              <PieChart className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
          
          {/* Market Data */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {marketData.map((data, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{data.value}</div>
                <div className="text-gray-300 text-sm">{data.metric}</div>
                <div className="text-gray-400 text-xs mt-1">{data.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced AI Financial Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI analyzes millions of data points to provide personalized financial advice 
              that adapts to market conditions and your unique goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started with AI-powered financial advice in just three simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wallet className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">1. Connect Your Accounts</h3>
              <p className="text-gray-300">Securely link your investment accounts, bank accounts, and financial goals</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <PieChart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">2. AI Analysis</h3>
              <p className="text-gray-300">Our AI analyzes your portfolio and provides personalized recommendations</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">3. Optimize & Grow</h3>
              <p className="text-gray-300">Implement AI recommendations and watch your wealth grow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with our free analysis and upgrade as your needs grow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-green-500/50 shadow-2xl shadow-green-500/20'
                    : 'border-white/20 hover:border-green-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
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
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                      : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Investors Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about their financial success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Maximize Your Wealth?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of investors who trust AI to grow their wealth. 
            Start with a free portfolio analysis today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
            >
              Start Free Analysis
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Demo
              <PieChart className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAiFinancialAdvisorPage;