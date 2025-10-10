'use client';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  PieChart, 
  Target, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Download, 
  Upload, 
  Settings, 
  Calendar,
  Clock,
  Shield,
  Smartphone,
  Globe,
  Users,
  Award,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Bot,
  Palette,
  Send,
  Eye,
  Edit,
  Trash2,
  Copy,
  Share2,
  Lock,
  Zap,
  Brain,
  FileText,
  Video,
  Image,
  Wand2,
  Calculator,
  CreditCard,
  Building,
  ChartLine,
  TrendingDown,
  Activity,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info
} from 'lucide-react';

const AIFinancialAnalyzerPro: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    document.title = 'AI Financial Analyzer Pro - Advanced Financial Intelligence | Zion Tech Group';
  }, []);

  const features = [
    {
      icon: BarChart3,
      title: "AI-Powered Financial Analysis",
      description: "Advanced machine learning algorithms analyze your financial data to provide actionable insights and predictions",
      benefits: ["Predictive analytics", "Risk assessment", "Trend analysis", "Performance metrics"]
    },
    {
      icon: Brain,
      title: "Intelligent Investment Recommendations",
      description: "AI-driven investment suggestions based on market analysis, risk tolerance, and financial goals",
      benefits: ["Portfolio optimization", "Risk management", "Market insights", "ROI predictions"]
    },
    {
      icon: TrendingUp,
      title: "Real-Time Market Monitoring",
      description: "Continuous monitoring of market conditions, news, and economic indicators affecting your investments",
      benefits: ["Real-time alerts", "Market sentiment", "News analysis", "Economic indicators"]
    },
    {
      icon: Shield,
      title: "Advanced Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies using AI-powered risk modeling",
      benefits: ["Risk scoring", "Diversification advice", "Stress testing", "Scenario analysis"]
    },
    {
      icon: Calculator,
      title: "Automated Financial Planning",
      description: "AI-generated financial plans tailored to your goals, income, and risk profile",
      benefits: ["Goal planning", "Budget optimization", "Retirement planning", "Tax optimization"]
    },
    {
      icon: Globe,
      title: "Global Market Coverage",
      description: "Access to worldwide financial markets with multi-currency support and international analysis",
      benefits: ["Global markets", "Multi-currency", "International data", "Cross-border insights"]
    }
  ];

  const pricingPlans = [
    {
      name: "Individual",
      price: "$199",
      period: "per month",
      description: "Perfect for individual investors and traders",
      features: [
        "Up to 5 portfolios",
        "Basic AI analysis",
        "Real-time monitoring",
        "Email alerts",
        "Mobile app",
        "Basic reporting",
        "Email support",
        "1-year data history"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$499",
      period: "per month",
      description: "Ideal for financial advisors and wealth managers",
      features: [
        "Unlimited portfolios",
        "Advanced AI analysis",
        "Real-time monitoring",
        "Custom alerts",
        "Mobile & desktop apps",
        "Advanced reporting",
        "Priority support",
        "5-year data history",
        "API access",
        "White-label options"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "per month",
      description: "For large financial institutions and hedge funds",
      features: [
        "Everything in Professional",
        "Custom AI models",
        "Dedicated infrastructure",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated support",
        "Unlimited data history",
        "SLA guarantee",
        "Training & onboarding",
        "Compliance reporting"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Robert Chen",
      role: "Portfolio Manager",
      company: "Capital Investments LLC",
      content: "AI Financial Analyzer Pro increased our portfolio performance by 23% in the first year. The AI insights are incredibly accurate.",
      rating: 5,
      avatar: "RC"
    },
    {
      name: "Sarah Williams",
      role: "Financial Advisor",
      company: "Wealth Management Group",
      content: "The risk management features saved our clients millions during market volatility. The AI predictions are spot-on.",
      rating: 5,
      avatar: "SW"
    },
    {
      name: "Michael Rodriguez",
      role: "Hedge Fund Manager",
      company: "Alpha Capital Partners",
      content: "The real-time market monitoring gives us a significant edge. We can react to market changes faster than our competitors.",
      rating: 5,
      avatar: "MR"
    }
  ];

  const stats = [
    { number: "500+", label: "Financial Institutions", icon: Building },
    { number: "23%", label: "Average ROI Improvement", icon: TrendingUp },
    { number: "99.7%", label: "Prediction Accuracy", icon: Award },
    { number: "4.9/5", label: "User Rating", icon: Star }
  ];

  const analysisFeatures = [
    {
      icon: ChartLine,
      title: "Technical Analysis",
      description: "Advanced charting and technical indicators powered by AI"
    },
    {
      icon: TrendingDown,
      title: "Fundamental Analysis",
      description: "Deep dive into company fundamentals and financial statements"
    },
    {
      icon: Activity,
      title: "Sentiment Analysis",
      description: "AI-powered analysis of market sentiment and news impact"
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "Comprehensive risk evaluation and mitigation strategies"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Financial Analyzer Pro - Advanced Financial Intelligence | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered financial analysis platform with predictive analytics, risk management, and investment recommendations. Increase ROI by 23% with intelligent financial insights. Starting at $199/month." />
        <meta name="keywords" content="AI financial analysis, investment AI, financial intelligence, portfolio management, risk analysis, financial planning, investment recommendations" />
        <meta property="og:title" content="AI Financial Analyzer Pro - Advanced Financial Intelligence" />
        <meta property="og:description" content="Revolutionary AI-powered financial analysis platform with predictive analytics, risk management, and investment recommendations." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-financial-analyzer-pro" />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Financial Analyzer Pro - Advanced Financial Intelligence" />
        <meta name="twitter:description" content="Revolutionary AI-powered financial analysis platform with predictive analytics, risk management, and investment recommendations." />
        <link rel="canonical" href="https://ziontechgroup.com/ai-financial-analyzer-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-8">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Financial Intelligence
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                AI Financial Analyzer
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Pro
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Revolutionize your financial decision-making with AI-powered analysis, 
                predictive insights, and intelligent investment recommendations. 
                Increase ROI by 23% with advanced financial intelligence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  View Demo
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-lg mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced AI Financial Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cutting-edge AI technology provides comprehensive financial analysis 
                that adapts to market conditions and your investment strategy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analysis Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Analysis Tools
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access a full suite of financial analysis tools powered by advanced AI 
                algorithms and machine learning models.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {analysisFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Professional Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your financial analysis needs. All plans include our core AI features 
                with a 14-day free trial and no setup fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${plan.popular ? 'border-cyan-400 scale-105' : 'border-slate-700'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white transform hover:scale-105' 
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Financial Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how AI Financial Analyzer Pro is transforming financial decision-making 
                for institutions and professionals worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                      <div className="text-sm text-cyan-400">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Financial Analysis?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of financial institutions already using AI Financial Analyzer Pro to make smarter investment decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </button>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center text-gray-300">
                  <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <Mail className="w-5 h-5 mr-2 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-2 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown, DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIFinancialAnalyzerPro;