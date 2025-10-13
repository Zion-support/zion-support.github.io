import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, TrendingUp, Shield, BarChart3, Target, Clock, CheckCircle, Star, ArrowRight, Zap, Brain, PieChart, Calculator, CreditCard, Building, Users, Calendar, AlertTriangle, Award } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIFinancialAdvisorPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Investment Analysis",
      description: "Advanced algorithms analyze market trends, risk factors, and investment opportunities in real-time"
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Portfolio Optimization",
      description: "Automatically rebalance and optimize your investment portfolio based on your risk tolerance and goals"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal-Based Planning",
      description: "Set financial goals and get personalized strategies to achieve them with AI-powered recommendations"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk Assessment",
      description: "Comprehensive risk analysis and protection strategies tailored to your financial situation"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Market Predictions",
      description: "AI-powered market forecasting and trend analysis to help you make informed investment decisions"
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Tax Optimization",
      description: "Smart tax planning strategies to minimize your tax burden and maximize after-tax returns"
    }
  ];

  const investmentTypes = [
    { name: "Stocks", icon: "📈", description: "Individual stock analysis and recommendations" },
    { name: "Bonds", icon: "🏛️", description: "Fixed-income securities and government bonds" },
    { name: "ETFs", icon: "📊", description: "Exchange-traded funds and index funds" },
    { name: "Crypto", icon: "₿", description: "Cryptocurrency analysis and portfolio management" },
    { name: "Real Estate", icon: "🏠", description: "REITs and real estate investment opportunities" },
    { name: "Commodities", icon: "🥇", description: "Gold, silver, and commodity investments" }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: 29,
      period: "month",
      description: "Perfect for beginners and small portfolios",
      features: [
        "Portfolio Analysis (Up to $50K)",
        "Basic AI Recommendations",
        "Monthly Market Reports",
        "Email Support",
        "Mobile App Access",
        "Basic Tax Optimization"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 79,
      period: "month",
      description: "Ideal for serious investors and growing portfolios",
      features: [
        "Portfolio Analysis (Up to $500K)",
        "Advanced AI Recommendations",
        "Weekly Market Reports",
        "Priority Support",
        "Advanced Analytics",
        "Tax Optimization",
        "Risk Assessment",
        "Goal Planning Tools"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 199,
      period: "month",
      description: "For high-net-worth individuals and institutions",
      features: [
        "Unlimited Portfolio Analysis",
        "Premium AI Recommendations",
        "Daily Market Reports",
        "24/7 Priority Support",
        "Custom Analytics Dashboard",
        "Advanced Tax Strategies",
        "Personal Financial Advisor",
        "White-label Options",
        "API Access"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Michael Thompson",
      company: "Investment Firm",
      role: "Portfolio Manager",
      content: "Zion AI Financial Advisor has revolutionized our investment strategy. The AI recommendations have consistently outperformed our traditional methods by 25%.",
      rating: 5,
      avatar: "MT"
    },
    {
      name: "Sarah Johnson",
      company: "Tech Startup",
      role: "CEO",
      content: "As a busy entrepreneur, I needed automated financial planning. This AI advisor has helped me grow my personal wealth by 40% in just one year.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Robert Chen",
      company: "Retirement Planning",
      role: "Financial Planner",
      content: "The risk assessment and portfolio optimization features are incredibly sophisticated. Our clients love the transparency and results.",
      rating: 5,
      avatar: "RC"
    }
  ];

  const stats = [
    { number: "25%", label: "Average Annual Returns", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "95%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "$2.5B", label: "Assets Under Management", icon: <DollarSign className="w-6 h-6" /> },
    { number: "50K+", label: "Active Users", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Financial Advisor - Zion Tech Group"
        description="Revolutionary AI-powered financial advisory platform with investment analysis, portfolio optimization, and personalized financial planning. Maximize your wealth with cutting-edge technology."
        keywords="AI financial advisor, investment analysis, portfolio optimization, financial planning, wealth management, robo-advisor, investment recommendations"
        canonical="/ai-financial-advisor"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Financial Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Financial Advisor
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Maximize your wealth with AI-powered investment analysis, portfolio optimization, and personalized financial planning. 
            Make smarter investment decisions with cutting-edge artificial intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center group"
            >
              Start Free Analysis
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group"
            >
              View Demo
              <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to optimize your financial future with data-driven insights and personalized recommendations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Investment Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI-powered analysis across all major investment categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {investmentTypes.map((type, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-4xl mb-3">{type.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{type.name}</h3>
                <p className="text-gray-300 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Financial Future
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the plan that matches your investment goals and portfolio size
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10'
                    : 'border-white/20 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">${plan.price}</span>
                    <span className="text-gray-300 ml-2">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Financial Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what financial experts say about our AI Financial Advisor
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your Financial Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of investors already using AI Financial Advisor to maximize their wealth. 
            Start your free analysis today and discover your investment potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center group"
            >
              Start Free Analysis
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group"
            >
              Schedule Consultation
              <Calendar className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIFinancialAdvisorPage;
