import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  DollarSign, 
  TrendingUp, 
  BarChart3, 
  PieChart, 
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
  Clock,
  LineChart,
  Activity,
  AlertTriangle,
  CheckSquare,
  FileText,
  Target,
  Calendar,
  Image,
  Video,
  Link,
  Hashtag,
  AtSign,
  Award,
  ThumbsUp,
  MessageCircle,
  HelpCircle,
  Search,
  BookOpen,
  Lightbulb,
  Calculator,
  CreditCard,
  Banknote,
  Wallet,
  PiggyBank,
  TrendingDown,
  Percent,
  Graph
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
      description: "Advanced machine learning algorithms predict financial trends, cash flow, and market movements with unprecedented accuracy.",
      benefits: ["Cash flow prediction", "Market trend analysis", "Risk assessment", "Investment insights"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Financial Dashboards",
      description: "Comprehensive financial dashboards with live data, customizable KPIs, and interactive visualizations for better decision making.",
      benefits: ["Live data feeds", "Custom KPIs", "Interactive charts", "Mobile access"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Fraud Detection & Security",
      description: "AI-powered fraud detection, anomaly identification, and security monitoring to protect your financial assets and transactions.",
      benefits: ["Real-time fraud detection", "Anomaly alerts", "Security monitoring", "Compliance tracking"]
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Automated Financial Reporting",
      description: "Generate comprehensive financial reports, tax documents, and compliance reports automatically with AI-powered analysis.",
      benefits: ["Automated reporting", "Tax preparation", "Compliance reports", "Custom formats"]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Investment Optimization",
      description: "AI-driven investment recommendations, portfolio optimization, and risk management strategies for maximum returns.",
      benefits: ["Portfolio optimization", "Risk management", "Investment recommendations", "Performance tracking"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Automation",
      description: "Automate financial processes, bill payments, budget tracking, and expense management with intelligent workflows.",
      benefits: ["Process automation", "Bill automation", "Budget tracking", "Expense management"]
    }
  ];

  const financialMetrics = [
    { name: "Revenue Growth", icon: <TrendingUp className="w-8 h-8" />, color: "text-green-500" },
    { name: "Profit Margins", icon: <Percent className="w-8 h-8" />, color: "text-blue-500" },
    { name: "Cash Flow", icon: <DollarSign className="w-8 h-8" />, color: "text-cyan-500" },
    { name: "ROI Analysis", icon: <Graph className="w-8 h-8" />, color: "text-purple-500" },
    { name: "Budget Tracking", icon: <PiggyBank className="w-8 h-8" />, color: "text-orange-500" },
    { name: "Expense Analysis", icon: <CreditCard className="w-8 h-8" />, color: "text-red-500" },
    { name: "Tax Planning", icon: <Calculator className="w-8 h-8" />, color: "text-indigo-500" },
    { name: "Risk Assessment", icon: <Shield className="w-8 h-8" />, color: "text-yellow-500" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "month",
      description: "Perfect for small businesses and freelancers",
      features: [
        "Basic financial analytics",
        "Up to 5 bank accounts",
        "Standard reporting",
        "Email support",
        "5GB data storage",
        "Mobile app access",
        "Basic forecasting",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "month",
      description: "Ideal for growing companies and financial advisors",
      features: [
        "Advanced AI analytics",
        "Unlimited accounts",
        "Comprehensive reporting",
        "Priority support",
        "50GB data storage",
        "API access",
        "Advanced forecasting",
        "Real-time dashboards",
        "Fraud detection",
        "White-label options"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Full AI suite",
        "Custom integrations",
        "Custom development",
        "24/7 dedicated support",
        "Unlimited storage",
        "Advanced security",
        "On-premise deployment",
        "Custom AI training",
        "Compliance management",
        "Training & onboarding"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      company: "Investment Firm",
      role: "CFO",
      content: "AI Financial Analytics Pro has transformed our investment strategies. The AI predictions have increased our portfolio returns by 35% and reduced risk exposure by 40%. The fraud detection has saved us millions.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "Tech Startup",
      role: "Finance Director",
      content: "The automated reporting and forecasting features have been game-changers. We can now make data-driven decisions in real-time and our financial planning accuracy has improved by 80%.",
      rating: 5
    },
    {
      name: "David Rodriguez",
      company: "E-commerce Platform",
      role: "VP of Finance",
      content: "The AI-powered cash flow predictions and budget optimization have helped us scale efficiently. We've reduced financial waste by 25% and improved our profit margins significantly.",
      rating: 5
    }
  ];

  const metrics = [
    { number: "35%", label: "Higher Returns", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "40%", label: "Risk Reduction", icon: <Shield className="w-6 h-6" /> },
    { number: "80%", label: "Accuracy Improvement", icon: <Target className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Activity className="w-6 h-6" /> }
  ];

  const integrations = [
    { name: "QuickBooks", description: "Accounting software" },
    { name: "Xero", description: "Cloud accounting" },
    { name: "Sage", description: "Business management" },
    { name: "Stripe", description: "Payment processing" },
    { name: "PayPal", description: "Online payments" },
    { name: "Bank APIs", description: "Banking integration" },
    { name: "Excel", description: "Spreadsheet sync" },
    { name: "Google Sheets", description: "Collaboration" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Financial Analytics Pro - Intelligent Financial Management | Zion Tech Group</title>
        <meta name="description" content="Transform your financial management with AI-powered analytics, forecasting, and automation. Make smarter financial decisions with intelligent insights." />
        <meta name="keywords" content="AI financial analytics, financial forecasting, investment optimization, fraud detection, financial reporting, budget management, cash flow analysis" />
        <meta property="og:title" content="AI Financial Analytics Pro - Zion Tech Group" />
        <meta property="og:description" content="Intelligent financial analytics platform with AI-powered forecasting and automation" />
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
                  #1 AI Financial Analytics Platform
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI Financial Analytics Pro
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Revolutionize your financial management with AI-powered analytics, intelligent forecasting, 
                  and automated financial processes. Make smarter decisions with data-driven insights.
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

          {/* Financial Metrics Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Comprehensive Financial Metrics
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Track and analyze all your financial KPIs with AI-powered insights and predictions.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                {financialMetrics.map((metric, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    <div className={`${metric.color} mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center`}>
                      {metric.icon}
                    </div>
                    <div className="text-white font-semibold text-sm">{metric.name}</div>
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
                    AI-Powered Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to manage your finances intelligently with AI-driven insights and automation.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
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

          {/* Metrics Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Proven Results
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join thousands of businesses achieving remarkable financial improvements with our AI platform.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-cyan-400">{metric.icon}</div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{metric.number}</div>
                    <div className="text-gray-400 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Integrations Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Seamless Integrations
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Connect with your existing financial tools and platforms for a unified experience.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                {integrations.map((integration, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="text-cyan-400 font-bold text-lg mb-2">{integration.name}</div>
                    <div className="text-gray-300 text-sm">{integration.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Flexible Pricing
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your financial needs and business size. All plans include our core AI features.
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
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Success Stories
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how businesses are transforming their financial management with our AI platform.
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
                  Ready to Transform Your Financial Management?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Start your free trial today and experience the power of AI-driven financial analytics. 
                  No credit card required.
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
                    Get Free Consultation
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