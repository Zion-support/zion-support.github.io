import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  DollarSign, 
  Zap, 
  Shield, 
  Globe, 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Phone,
  Mail,
  MapPin,
  Download,
  Play,
  Pause,
  RefreshCw,
  Settings,
  Eye,
  Filter,
  Target,
  Users,
  Award,
  TrendingUp,
  Cpu,
  Database,
  BarChart3,
  Activity,
  Clock,
  FileText,
  Send,
  ThumbsUp,
  ThumbsDown,
  AlertCircle,
  CheckSquare,
  XCircle,
  PieChart,
  LineChart,
  TrendingDown,
  Calculator,
  CreditCard,
  Banknote,
  Wallet,
  Receipt,
  ChartBar,
  Percent,
  Coins,
  Building2,
  Briefcase,
  PiggyBank,
  HandCoins
} from 'lucide-react';

const AiFinancialAnalyticsProPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Forecasting",
      description: "Advanced machine learning algorithms that predict financial trends, cash flow, and market movements with 95% accuracy.",
      benefits: ["95% accuracy", "Real-time predictions", "Market analysis", "Risk assessment"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Comprehensive financial dashboards with real-time data visualization, KPI tracking, and performance monitoring.",
      benefits: ["Live dashboards", "KPI tracking", "Performance metrics", "Custom reports"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Fraud Detection",
      description: "Advanced AI algorithms that detect fraudulent transactions, unusual patterns, and potential security threats in real-time.",
      benefits: ["Real-time detection", "Pattern analysis", "Risk scoring", "Alert system"]
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Automated Accounting",
      description: "Intelligent automation that handles bookkeeping, expense categorization, and financial reporting with minimal human intervention.",
      benefits: ["Auto-categorization", "Expense tracking", "Tax preparation", "Compliance"]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Investment Analysis",
      description: "AI-driven investment recommendations, portfolio optimization, and market analysis to maximize returns and minimize risks.",
      benefits: ["Portfolio optimization", "Risk analysis", "Market insights", "ROI tracking"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Automation",
      description: "Intelligent workflows that automate financial processes, reduce errors, and ensure compliance with regulations.",
      benefits: ["Process automation", "Error reduction", "Compliance", "Efficiency"]
    }
  ];

  const pricingPlans = [
    {
      name: "Startup",
      price: "$199",
      period: "month",
      description: "Perfect for startups and small businesses",
      features: [
        "Basic financial analytics",
        "Up to 5 bank accounts",
        "Monthly reports",
        "Email support",
        "Standard security",
        "1 user"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "month",
      description: "Ideal for growing businesses with complex needs",
      features: [
        "Advanced AI analytics",
        "Up to 25 bank accounts",
        "Real-time reporting",
        "Priority support",
        "Enhanced security",
        "Up to 10 users",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Full AI suite",
        "Unlimited accounts",
        "Custom analytics",
        "24/7 dedicated support",
        "Bank-level security",
        "Unlimited users",
        "Custom development",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Robert Kim",
      company: "FinTech Solutions",
      role: "CFO",
      content: "AI Financial Analytics Pro has revolutionized our financial planning. The forecasting accuracy is incredible, and we've reduced financial errors by 90%.",
      rating: 5
    },
    {
      name: "Maria Santos",
      company: "Investment Group",
      role: "Portfolio Manager",
      content: "The investment analysis and portfolio optimization features have helped us achieve 25% better returns while reducing risk exposure significantly.",
      rating: 5
    },
    {
      name: "David Johnson",
      company: "Retail Chain",
      role: "Financial Director",
      content: "The fraud detection and automated accounting have saved us millions. The system caught fraudulent transactions that would have gone unnoticed.",
      rating: 5
    }
  ];

  const useCases = [
    {
      title: "Banking & Finance",
      description: "Comprehensive financial analysis for banks, credit unions, and financial institutions",
      icon: <Building2 className="w-8 h-8" />,
      benefits: ["Risk assessment", "Credit scoring", "Fraud detection", "Regulatory compliance"]
    },
    {
      title: "Investment Management",
      description: "Portfolio optimization and investment analysis for asset managers and advisors",
      icon: <Briefcase className="w-8 h-8" />,
      benefits: ["Portfolio optimization", "Market analysis", "Risk management", "Performance tracking"]
    },
    {
      title: "E-commerce",
      description: "Financial analytics for online retailers and marketplace businesses",
      icon: <CreditCard className="w-8 h-8" />,
      benefits: ["Revenue tracking", "Profit analysis", "Inventory management", "Payment processing"]
    },
    {
      title: "SaaS Companies",
      description: "Subscription analytics and revenue optimization for software companies",
      icon: <Cpu className="w-8 h-8" />,
      benefits: ["MRR tracking", "Churn analysis", "Lifetime value", "Growth metrics"]
    }
  ];

  const metrics = [
    { label: "95%", description: "Forecasting Accuracy" },
    { label: "90%", description: "Error Reduction" },
    { label: "60%", description: "Time Savings" },
    { label: "25%", description: "Better Returns" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Financial Analytics Pro - Intelligent Finance Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your financial management with AI-powered analytics, fraud detection, and automated accounting. Achieve 95% forecasting accuracy and reduce errors by 90%." />
        <meta name="keywords" content="AI financial analytics, fraud detection, automated accounting, investment analysis, financial forecasting, fintech" />
        <meta property="og:title" content="AI Financial Analytics Pro - Zion Tech Group" />
        <meta property="og:description" content="Intelligent financial analytics platform with AI-powered forecasting and fraud detection" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-financial-analytics-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  #1 AI Financial Platform
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI Financial Analytics Pro
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Revolutionize your financial management with AI-powered analytics, fraud detection, 
                  and automated accounting. Achieve 95% forecasting accuracy and reduce errors by 90%.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Metrics Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Proven Results
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI financial analytics platform delivers measurable results for businesses of all sizes.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {metrics.map((metric, index) => (
                  <div 
                    key={index} 
                    className="text-center group"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-3xl font-bold text-white">{metric.label}</div>
                    </div>
                    <div className="text-gray-300 font-semibold">{metric.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Advanced Financial Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to manage your finances intelligently with AI-powered automation and insights.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 neon-card"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Industry Solutions
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI financial analytics platform is designed for various industries and use cases.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {useCases.map((useCase, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                      <div className="text-white">{useCase.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                    <p className="text-gray-300 mb-6">{useCase.description}</p>
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Flexible Pricing
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your financial analytics needs and budget.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <div 
                    key={index} 
                    className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      plan.popular 
                        ? 'border-cyan-400/40 shadow-cyan-500/10' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-400 ml-2">/{plan.period}</span>
                      </div>
                    </div>
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <a
                      href="tel:+13024640950"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Financial Success Stories
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how companies are achieving better financial outcomes with AI Financial Analytics Pro.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400">{testimonial.role}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Finances?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of companies that have revolutionized their financial management with AI-powered analytics and automation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get Free Trial
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AiFinancialAnalyticsProPage;