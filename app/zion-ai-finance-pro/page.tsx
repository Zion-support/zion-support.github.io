import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  DollarSign, 
  Brain, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Award, 
  Clock, 
  Shield, 
  BarChart3,
  Mail,
  Phone,
  Globe,
  Sparkles,
  Zap,
  FileText,
  Calendar,
  UserCheck,
  Search,
  Filter,
  Database,
  Cpu,
  Network,
  Lock,
  Eye,
  MessageSquare,
  Video,
  Headphones,
  Settings,
  CreditCard,
  PieChart,
  Calculator,
  Target,
  AlertTriangle,
  TrendingDown
} from "lucide-react";

export default function ZionAIFinancePro() {
  const features = [
    {
      title: "AI Financial Forecasting",
      description: "Advanced AI algorithms analyze financial data to provide accurate forecasts, budget planning, and investment recommendations.",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: ["95% forecast accuracy", "Automated budget planning", "Investment optimization"]
    },
    {
      title: "Intelligent Risk Assessment",
      description: "AI-powered risk analysis with real-time monitoring, fraud detection, and compliance checking for financial security.",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["99.9% fraud detection", "Real-time risk monitoring", "Compliance automation"]
    },
    {
      title: "Automated Financial Reporting",
      description: "AI-generated financial reports with automated data collection, analysis, and presentation for stakeholders.",
      icon: <FileText className="w-8 h-8" />,
      benefits: ["90% faster reporting", "Automated data collection", "Real-time insights"]
    },
    {
      title: "Smart Investment Management",
      description: "AI-powered portfolio management with automated rebalancing, performance tracking, and investment recommendations.",
      icon: <PieChart className="w-8 h-8" />,
      benefits: ["Automated portfolio management", "Performance optimization", "Risk-adjusted returns"]
    }
  ];

  const pricingPlans = [
    {
      name: "Personal Finance",
      price: "$49/month",
      description: "Perfect for individuals",
      features: [
        "Up to 5 accounts",
        "Basic AI forecasting",
        "Budget planning",
        "Email support",
        "Standard integrations"
      ],
      popular: false
    },
    {
      name: "Small Business",
      price: "$199/month",
      description: "Ideal for small businesses",
      features: [
        "Up to 25 accounts",
        "Advanced AI forecasting",
        "Full risk assessment",
        "Automated reporting",
        "Priority support",
        "Advanced analytics",
        "Custom workflows"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$499/month",
      description: "For large organizations",
      features: [
        "Unlimited accounts",
        "AI-powered finance suite",
        "Custom AI model training",
        "White-label solutions",
        "Dedicated account manager",
        "Advanced reporting",
        "API access",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "95%", label: "Forecast Accuracy", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "99.9%", label: "Fraud Detection", icon: <Shield className="w-6 h-6" /> },
    { number: "90%", label: "Faster Reporting", icon: <Clock className="w-6 h-6" /> },
    { number: "$1M+", label: "Assets Managed", icon: <DollarSign className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Finance Pro - AI-Powered Financial Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform finance with Zion AI Finance Pro. AI-powered forecasting, risk assessment, automated reporting, and smart investment management."
        />
        <meta
          name="keywords"
          content="AI finance, financial forecasting, risk assessment, automated reporting, investment management, financial technology, fintech"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-finance-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">#1 AI Finance Platform 2024</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Zion AI Finance Pro
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Revolutionize finance with AI-powered solutions. 
                Achieve 95% forecast accuracy, detect fraud with 99.9% precision, and optimize financial performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Watch Demo
                  <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
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
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  AI-Powered Finance Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to optimize financial operations and maximize returns.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-cyan-400">
                            <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your financial needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-cyan-500/25' 
                      : 'border-white/20 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    <p className="text-gray-400 text-sm">per month</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
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

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Finance?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading financial institutions using AI to optimize operations and maximize returns.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}