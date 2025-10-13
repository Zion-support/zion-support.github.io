import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Star,
  Zap,
  Users,
  BarChart3,
  CreditCard,
  Download,
  Send,
  Receipt,
  Calculator,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Laptop,
  Mail,
  Bell,
  TrendingUp
} from 'lucide-react';

const ZionAIInvoiceGeneratorPage = () => {
  const features = [
    {
      title: "AI-Powered Invoice Creation",
      description: "Generate professional invoices automatically from project data and client information",
      icon: <FileText className="w-6 h-6" />,
      details: "AI analyzes your work patterns and creates accurate invoices in seconds"
    },
    {
      title: "Smart Payment Tracking",
      description: "Automatically track payments, send reminders, and manage overdue accounts",
      icon: <CreditCard className="w-6 h-6" />,
      details: "Never miss a payment with intelligent tracking and automated follow-ups"
    },
    {
      title: "Multi-Currency Support",
      description: "Create invoices in any currency with real-time exchange rate conversion",
      icon: <Globe className="w-6 h-6" />,
      details: "Support for 150+ currencies with automatic rate updates"
    },
    {
      title: "Automated Tax Calculations",
      description: "Calculate taxes, discounts, and fees automatically based on location and business type",
      icon: <Calculator className="w-6 h-6" />,
      details: "Comply with local tax regulations with built-in tax calculation engine"
    },
    {
      title: "Client Portal Access",
      description: "Give clients secure access to view and pay invoices online",
      icon: <Users className="w-6 h-6" />,
      details: "Professional client portal with payment processing and invoice history"
    },
    {
      title: "Advanced Analytics",
      description: "Track revenue, payment trends, and client behavior with detailed reports",
      icon: <BarChart3 className="w-6 h-6" />,
      details: "Make data-driven decisions with comprehensive financial insights"
    }
  ];

  const pricingPlans = [
    {
      name: "Solo",
      price: "$19",
      period: "/month",
      description: "Perfect for freelancers and solo entrepreneurs",
      features: [
        "50 invoices per month",
        "Basic templates",
        "Payment tracking",
        "Email support",
        "PDF export",
        "1 user account"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Business",
      price: "$49",
      period: "/month",
      description: "Ideal for small to medium businesses",
      features: [
        "200 invoices per month",
        "Premium templates",
        "Advanced payment tracking",
        "Priority support",
        "Multi-currency support",
        "5 user accounts",
        "Client portal",
        "Basic analytics",
        "API access"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited invoices",
        "Custom templates",
        "Full payment automation",
        "24/7 phone support",
        "All currencies",
        "Unlimited users",
        "Advanced client portal",
        "Advanced analytics",
        "Custom integrations",
        "White-label options",
        "Dedicated account manager"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const useCases = [
    {
      title: "Freelancers",
      description: "Streamline invoicing for freelance projects and retainers",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Agencies",
      description: "Manage client billing and project-based invoicing",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "E-commerce",
      description: "Automate order invoicing and subscription billing",
      icon: <CreditCard className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Consultants",
      description: "Professional invoicing for consulting and advisory services",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      title: "Save Time",
      description: "Reduce invoice creation time by 90% with AI automation",
      icon: <Clock className="w-6 h-6" />,
      stat: "90% time saved"
    },
    {
      title: "Get Paid Faster",
      description: "Automated reminders and easy payment options increase collection rates",
      icon: <TrendingUp className="w-6 h-6" />,
      stat: "40% faster payments"
    },
    {
      title: "Reduce Errors",
      description: "AI-powered validation eliminates calculation and formatting errors",
      icon: <Shield className="w-6 h-6" />,
      stat: "99.9% accuracy"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Invoices Generated", icon: <FileText className="w-6 h-6" /> },
    { number: "2,500+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> },
    { number: "$2M+", label: "Revenue Processed", icon: <DollarSign className="w-6 h-6" /> },
    { number: "150+", label: "Currencies Supported", icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Invoice Generator - Automated Invoice Creation & Payment Tracking | Zion Tech Group</title>
        <meta name="description" content="Create professional invoices automatically with AI. Track payments, manage clients, and get paid faster. Perfect for freelancers, agencies, and businesses." />
        <meta name="keywords" content="AI invoice generator, automated invoicing, payment tracking, invoice management, billing software, financial automation" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Invoicing</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Invoice Generator
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Create professional invoices automatically, track payments intelligently, and get paid faster. 
            Our AI-powered platform streamlines your entire billing process from creation to collection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <FileText className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Invoice Generator?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your billing process with intelligent automation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 mb-3">{benefit.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to manage your invoicing and payments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  {feature.description}
                </p>
                <p className="text-sm text-cyan-400">
                  {feature.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect For Every Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From freelancers to enterprises, our solution scales with your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your invoicing needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105 relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={plan.cta === "Contact Sales" ? "/contact" : "/contact"}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  } hover:scale-105`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Streamline Your Invoicing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses who trust Zion AI Invoice Generator 
              to automate their billing and get paid faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <FileText className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZionAIInvoiceGeneratorPage;