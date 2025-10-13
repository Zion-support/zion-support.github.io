import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Brain, 
  Zap, 
  AlertTriangle, 
  BarChart3, 
  Clock, 
  Users, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  Globe,
  Smartphone,
  Monitor,
  Award,
  FileText,
  Send,
  Filter,
  Search,
  Settings,
  Bell,
  Lock,
  Cloud,
  Database,
  Cpu,
  Network,
  Smartphone as Phone,
  Laptop,
  Headphones,
  CheckCircle as Check,
  Star as StarIcon,
  Award as AwardIcon,
  Rocket,
  Sparkles as SparklesIcon,
  DollarSign,
  CreditCard,
  Banknote,
  TrendingDown,
  Eye,
  Fingerprint,
  Key,
  Lock as LockIcon,
  Scale,
  Gavel
} from 'lucide-react';

export default function AISmartExpenseCategorizer() {
  const features = [
    {
      title: "AI-Powered Expense Recognition",
      description: "Advanced machine learning algorithms automatically categorize expenses with 98.5% accuracy using merchant data and spending patterns",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Fraud Detection",
      description: "Instant detection of suspicious transactions, unusual spending patterns, and potential fraudulent activities",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Smart Receipt Processing",
      description: "OCR technology extracts data from receipts and automatically categorizes expenses with tax compliance",
      icon: <FileText className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Compliance Monitoring",
      description: "Automated compliance checking for tax regulations, corporate policies, and financial standards",
      icon: <Scale className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive spending insights, budget analysis, and financial health monitoring with predictive analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Multi-Currency Support",
      description: "Handle expenses in multiple currencies with real-time exchange rates and automatic conversion",
      icon: <Globe className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$39",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 transactions/month",
        "Basic AI categorization",
        "Receipt scanning",
        "Basic fraud detection",
        "Standard reporting",
        "Email support"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 10,000 transactions/month",
        "Advanced AI categorization",
        "Real-time fraud detection",
        "Compliance monitoring",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Multi-currency support"
      ],
      popular: true,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited transactions",
        "Full AI suite",
        "Custom compliance rules",
        "Advanced security",
        "Custom integrations",
        "24/7 support",
        "White-label options",
        "Dedicated account manager"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const testimonials = [
    {
      name: "Robert Wilson",
      company: "Financial Services Corp",
      role: "CFO",
      content: "This AI expense categorizer has saved us countless hours and significantly improved our financial accuracy. The fraud detection features are exceptional.",
      rating: 5,
      avatar: "RW"
    },
    {
      name: "Maria Garcia",
      company: "Tech Startup Inc.",
      role: "Finance Director",
      content: "The automated categorization and compliance monitoring have streamlined our expense management process. Highly recommend for any growing business.",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "James Anderson",
      company: "Consulting Group",
      role: "Managing Partner",
      content: "The multi-currency support and advanced analytics have been game-changers for our international operations. Excellent tool!",
      rating: 5,
      avatar: "JA"
    }
  ];

  const stats = [
    { number: "5,000+", label: "Companies Protected", icon: <Shield className="w-6 h-6" /> },
    { number: "98.5%", label: "Accuracy Rate", icon: <Award className="w-6 h-6" /> },
    { number: "75%", label: "Time Saved", icon: <Clock className="w-6 h-6" /> },
    { number: "$2.5B+", label: "Transactions Processed", icon: <DollarSign className="w-6 h-6" /> }
  ];

  const securityFeatures = [
    {
      title: "Bank-Level Encryption",
      description: "256-bit SSL encryption protects all financial data",
      icon: <LockIcon className="w-6 h-6 text-green-400" />
    },
    {
      title: "SOC 2 Compliance",
      description: "Certified security standards for data protection",
      icon: <Shield className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Multi-Factor Authentication",
      description: "Advanced security with biometric and token authentication",
      icon: <Fingerprint className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Real-time Monitoring",
      description: "24/7 security monitoring and threat detection",
      icon: <Eye className="w-6 h-6 text-cyan-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Financial Crime Detection Pro - Smart Expense Categorization | Zion Tech Group</title>
        <meta
          name="description"
          content="Advanced AI-powered expense categorization with fraud detection, compliance monitoring, and financial analytics. Secure, accurate, and automated financial management."
        />
        <meta
          name="keywords"
          content="AI expense categorization, fraud detection, financial compliance, expense management, receipt scanning, financial analytics, AI finance"
        />
        <link rel="canonical" href="https://ziontechgroup.com/smart-expense-categorizer" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Shield className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Financial Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Financial Crime Detection Pro
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Advanced AI-powered expense categorization with real-time fraud detection, compliance monitoring, 
              and financial analytics. Secure, accurate, and automated financial management for modern businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
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
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Bank-Level Security
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your financial data is protected with enterprise-grade security measures
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced Financial Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered tools for expense management, fraud detection, and financial compliance
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Secure Financial Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your financial management needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                    plan.popular ? 'ring-2 ring-cyan-500' : ''
                  }`}
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
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Finance Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how companies are securing their financial operations with AI
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Secure Your Financial Operations
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies using AI to protect and optimize their financial processes.
            </p>
            
            {/* Contact Information */}
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
        </section>
      </div>
    </>
  );
}