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
  Award, 
  BarChart3,
  Settings,
  Download,
  Upload,
  Send,
  Calculator,
  CreditCard,
  Receipt,
  TrendingUp,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Laptop,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const ZionAIInvoiceGeneratorPage = () => {
  const features = [
    {
      title: "AI-Powered Invoice Creation",
      description: "Generate professional invoices automatically from project data and client information",
      icon: <FileText className="w-6 h-6" />,
      details: [
        "Smart data extraction",
        "Automatic calculations",
        "Professional templates",
        "Custom branding options"
      ]
    },
    {
      title: "Automated Payment Tracking",
      description: "Track payments, send reminders, and manage overdue invoices automatically",
      icon: <CreditCard className="w-6 h-6" />,
      details: [
        "Payment status tracking",
        "Automated reminders",
        "Late payment fees",
        "Payment analytics"
      ]
    },
    {
      title: "Multi-Currency Support",
      description: "Create invoices in any currency with real-time exchange rate updates",
      icon: <Globe className="w-6 h-6" />,
      details: [
        "150+ currencies supported",
        "Real-time exchange rates",
        "Tax calculations",
        "Regional compliance"
      ]
    },
    {
      title: "Client Portal Integration",
      description: "Provide clients with a secure portal to view and pay invoices online",
      icon: <Users className="w-6 h-6" />,
      details: [
        "Secure client access",
        "Online payment processing",
        "Invoice history",
        "Download receipts"
      ]
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
        "PDF export"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$49",
      period: "/month",
      description: "Ideal for small to medium businesses",
      features: [
        "200 invoices per month",
        "Premium templates",
        "Client portal",
        "Priority support",
        "Custom branding",
        "Multi-currency"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations and agencies",
      features: [
        "Unlimited invoices",
        "All templates",
        "Advanced analytics",
        "24/7 support",
        "White-label options",
        "API integration",
        "Custom workflows"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Save Time & Money",
      description: "Reduce invoice creation time by 90% and get paid faster",
      icon: <Clock className="w-8 h-8" />,
      stat: "90% time saved"
    },
    {
      title: "Professional Appearance",
      description: "Create polished, branded invoices that impress clients",
      icon: <Award className="w-8 h-8" />,
      stat: "100% professional"
    },
    {
      title: "Faster Payments",
      description: "Automated reminders and online payments speed up collections",
      icon: <TrendingUp className="w-8 h-8" />,
      stat: "40% faster payments"
    }
  ];

  const integrations = [
    {
      name: "QuickBooks",
      description: "Sync invoices and payments with QuickBooks",
      icon: <Calculator className="w-6 h-6" />
    },
    {
      name: "Stripe",
      description: "Process payments securely with Stripe",
      icon: <CreditCard className="w-6 h-6" />
    },
    {
      name: "PayPal",
      description: "Accept PayPal payments directly",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      name: "Xero",
      description: "Integrate with Xero accounting software",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      name: "FreshBooks",
      description: "Connect with FreshBooks for seamless workflow",
      icon: <FileText className="w-6 h-6" />
    },
    {
      name: "Zapier",
      description: "Automate workflows with 1000+ apps",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "50,000+", label: "Invoices Generated", icon: <FileText className="w-6 h-6" /> },
    { number: "2,500+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>Zion AI Invoice Generator - Automated Invoice Creation & Payment Tracking | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Create professional invoices automatically with our AI-powered invoice generator. Track payments, send reminders, and get paid faster with automated workflows." 
        />
        <meta 
          name="keywords" 
          content="AI invoice generator, automated invoicing, payment tracking, invoice templates, billing software, accounting integration" 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Invoicing</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Invoice Generator
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Create professional invoices automatically, track payments, and get paid faster with our AI-powered invoice generation platform. 
            Streamline your billing process and focus on growing your business.
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
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <FileText className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our AI Invoice Generator?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your billing process with intelligent automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful Features for Modern Businesses
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to manage invoicing and payments efficiently
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite tools and streamline your workflow
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  {integration.icon}
                </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {integration.name}
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  {integration.description}
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative ${
                  plan.popular 
                    ? 'border-cyan-500/50 hover:shadow-cyan-500/25' 
                    : 'border-white/20 hover:shadow-cyan-500/10'
                }`}
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
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Streamline Your Invoicing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses using our AI invoice generator to get paid faster and manage their finances more efficiently.
          </p>
          
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
              Watch Live Demo
              <FileText className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAIInvoiceGeneratorPage;