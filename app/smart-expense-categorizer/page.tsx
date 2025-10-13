import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Receipt, 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Clock, 
  Target,
  Smartphone,
  Globe,
  Database,
  FileText,
  AlertTriangle,
  Send,
  Filter,
  Search,
  Download,
  Settings,
  Eye,
  Lock,
  Cloud,
  Cpu,
  Network,
  Award,
  Sparkles,
  DollarSign,
  CreditCard,
  PieChart,
  LineChart,
  Calendar,
  RefreshCw,
  Bell,
  Shield,
  Calculator,
  TrendingDown,
  Wallet,
  Banknote,
  Coins,
  Activity,
  PieChart as PieChartIcon,
  FileSpreadsheet,
  Upload,
  Download as DownloadIcon,
  Save,
  Edit,
  Trash2,
  Plus,
  Minus,
  Equal
} from 'lucide-react';

const SmartExpenseCategorizerPage = () => {
  const features = [
    {
      title: "AI-Powered Auto-Categorization",
      description: "Advanced machine learning automatically categorizes expenses with 99% accuracy, learning from your patterns",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Expense Tracking",
      description: "Track expenses as they happen with mobile app integration and receipt scanning capabilities",
      icon: <Activity className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Smart Receipt Processing",
      description: "Upload receipts and let AI extract merchant names, amounts, and categories automatically",
      icon: <Receipt className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Budget Management",
      description: "Set budgets by category and get real-time alerts when approaching limits with smart recommendations",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive spending insights with trends, patterns, and predictive analytics for better financial decisions",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Multi-currency Support",
      description: "Handle expenses in multiple currencies with automatic conversion and exchange rate tracking",
      icon: <Globe className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$29",
      period: "per month",
      description: "Perfect for individuals and freelancers",
      features: [
        "Up to 1,000 transactions/month",
        "Basic AI categorization",
        "Receipt scanning",
        "Basic analytics",
        "Mobile app access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$79",
      period: "per month",
      description: "Ideal for small businesses and teams",
      features: [
        "Up to 10,000 transactions/month",
        "Advanced AI categorization",
        "Team collaboration",
        "Advanced analytics",
        "Budget management",
        "API integrations",
        "Priority support",
        "Custom categories"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited transactions",
        "Full AI suite capabilities",
        "Custom model training",
        "Advanced reporting",
        "White-label options",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "Advanced security"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      company: "Freelance Consultant",
      role: "Independent Professional",
      content: "Smart Expense Categorizer has saved me hours every week. The AI automatically categorizes everything perfectly, and the receipt scanning is incredibly accurate.",
      rating: 5,
      avatar: "AT"
    },
    {
      name: "Maria Garcia",
      company: "Small Business Solutions",
      role: "Finance Manager",
      content: "The budget management features help us stay on track. We've reduced overspending by 25% and improved our financial visibility significantly.",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "Robert Kim",
      company: "Tech Startup Inc.",
      role: "CFO",
      content: "The analytics dashboard gives us insights we never had before. We can now make data-driven decisions about our spending and identify cost-saving opportunities.",
      rating: 5,
      avatar: "RK"
    }
  ];

  const stats = [
    { number: "99%", label: "Categorization Accuracy", icon: <Target className="w-6 h-6" /> },
    { number: "75%", label: "Time Savings", icon: <Clock className="w-6 h-6" /> },
    { number: "25%", label: "Cost Reduction", icon: <DollarSign className="w-6 h-6" /> },
    { number: "5,000+", label: "Happy Users", icon: <Users className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      title: "Save Time",
      description: "Automatically categorize expenses and eliminate manual data entry",
      icon: <Clock className="w-6 h-6" />,
      color: "text-green-400"
    },
    {
      title: "Reduce Errors",
      description: "AI-powered categorization eliminates human errors and inconsistencies",
      icon: <Shield className="w-6 h-6" />,
      color: "text-blue-400"
    },
    {
      title: "Improve Visibility",
      description: "Get clear insights into spending patterns and trends",
      icon: <Eye className="w-6 h-6" />,
      color: "text-purple-400"
    },
    {
      title: "Control Costs",
      description: "Set budgets and get alerts to prevent overspending",
      icon: <Target className="w-6 h-6" />,
      color: "text-orange-400"
    }
  ];

  const categories = [
    { name: "Office Supplies", icon: <FileText className="w-6 h-6" />, color: "text-blue-400" },
    { name: "Travel", icon: <Globe className="w-6 h-6" />, color: "text-cyan-400" },
    { name: "Meals", icon: <Receipt className="w-6 h-6" />, color: "text-green-400" },
    { name: "Software", icon: <Cpu className="w-6 h-6" />, color: "text-purple-400" },
    { name: "Marketing", icon: <Target className="w-6 h-6" />, color: "text-pink-400" },
    { name: "Utilities", icon: <Zap className="w-6 h-6" />, color: "text-yellow-400" }
  ];

  return (
    <>
      <Helmet>
        <title>Smart Expense Categorizer - Zion Tech Group | AI-Powered Expense Management</title>
        <meta
          name="description"
          content="Automatically categorize expenses with AI-powered analysis, receipt scanning, and budget management. Save time, reduce errors, and gain insights into your spending patterns."
        />
        <meta
          name="keywords"
          content="expense management, expense categorization, receipt scanning, budget management, expense tracking, AI expenses, financial analytics, expense automation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Expense Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Smart Expense Categorizer
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Automatically categorize expenses with AI-powered analysis, receipt scanning, and budget management. 
              Save time, reduce errors, and gain valuable insights into your spending patterns with our 
              intelligent expense platform.
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
                <Eye className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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
        </section>

        {/* Categories Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Smart Category Recognition
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                AI automatically recognizes and categorizes expenses across all business categories
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
                >
                  <div className={`w-12 h-12 mx-auto mb-3 ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-white font-semibold group-hover:text-cyan-300 transition-colors">
                    {category.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Smart Expense Categorizer?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Transform your expense management with proven benefits and measurable results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <div className={benefit.color}>
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Leverage cutting-edge artificial intelligence to streamline your expense management
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
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

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                      : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
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

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Smart Expense Categorizer
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Simplify Your Expense Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using Smart Expense Categorizer to streamline their finances.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Receipt className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
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
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Eye className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SmartExpenseCategorizerPage;