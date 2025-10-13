import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Download, 
  Send, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Star,
  Zap,
  DollarSign,
  Users,
  BarChart3,
  CreditCard,
  Globe,
  Smartphone,
  Shield
} from 'lucide-react';

const ZionAIInvoiceGeneratorPage = () => {
  const features = [
    {
      title: "AI-Powered Invoice Creation",
      description: "Generate professional invoices automatically from project data",
      icon: <FileText className="w-6 h-6" />,
      details: "Smart templates that adapt to your business needs"
    },
    {
      title: "Automated Payment Tracking",
      description: "Track payments and send automated reminders",
      icon: <Clock className="w-6 h-6" />,
      details: "Never miss a payment with intelligent follow-ups"
    },
    {
      title: "Multi-Currency Support",
      description: "Create invoices in any currency with real-time exchange rates",
      icon: <DollarSign className="w-6 h-6" />,
      details: "Support for 150+ currencies worldwide"
    },
    {
      title: "Client Portal Access",
      description: "Let clients view and pay invoices through secure portal",
      icon: <Users className="w-6 h-6" />,
      details: "Self-service portal with payment integration"
    },
    {
      title: "Advanced Analytics",
      description: "Track revenue, outstanding payments, and business metrics",
      icon: <BarChart3 className="w-6 h-6" />,
      details: "Comprehensive reporting and insights"
    },
    {
      title: "Mobile App",
      description: "Create and manage invoices on the go",
      icon: <Smartphone className="w-6 h-6" />,
      details: "Full-featured mobile app for iOS and Android"
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
        "Email support",
        "PDF export",
        "Payment tracking",
        "Mobile app access"
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
        "500 invoices per month",
        "Custom branding",
        "Priority support",
        "Advanced analytics",
        "Client portal",
        "API access",
        "Multi-currency",
        "Automated reminders"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited invoices",
        "White-label solution",
        "24/7 phone support",
        "Custom integrations",
        "Advanced reporting",
        "Team collaboration",
        "Custom workflows",
        "Dedicated account manager"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const benefits = [
    {
      title: "Save Time",
      description: "Create professional invoices in seconds, not minutes",
      icon: <Zap className="w-8 h-8" />,
      stat: "90% time saved",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Get Paid Faster",
      description: "Automated reminders and easy payment options",
      icon: <Clock className="w-8 h-8" />,
      stat: "40% faster payments",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Professional Image",
      description: "Branded invoices that impress your clients",
      icon: <Star className="w-8 h-8" />,
      stat: "100% professional",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Secure & Reliable",
      description: "Bank-level security for all your financial data",
      icon: <Shield className="w-8 h-8" />,
      stat: "99.9% uptime",
      color: "from-orange-500 to-red-500"
    }
  ];

  const integrations = [
    { name: "Stripe", description: "Accept online payments" },
    { name: "PayPal", description: "Global payment processing" },
    { name: "QuickBooks", description: "Accounting integration" },
    { name: "Xero", description: "Cloud accounting" },
    { name: "FreshBooks", description: "Small business accounting" },
    { name: "Wave", description: "Free accounting software" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Invoice Generator - Professional Invoicing Made Simple | Zion Tech Group</title>
        <meta name="description" content="Create professional invoices in seconds with our AI-powered invoice generator. Track payments, automate reminders, and get paid faster." />
        <meta name="keywords" content="AI invoice generator, professional invoicing, payment tracking, automated reminders, business invoicing, invoice templates" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Invoicing</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Invoice Generator
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Create professional invoices in seconds, track payments automatically, and get paid faster. 
            Our AI-powered platform streamlines your entire invoicing process.
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
              View Demo
              <FileText className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">1M+</div>
              <div className="text-gray-300 text-sm">Invoices Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">$50M+</div>
              <div className="text-gray-300 text-sm">Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300 text-sm">Faster Payments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">4.8/5</div>
              <div className="text-gray-300 text-sm">User Rating</div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose Our Invoice Generator?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Everything You Need for Professional Invoicing
          </h2>
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

        {/* Integrations Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Seamless Integrations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="group text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {integration.name}
                </h3>
                <p className="text-sm text-gray-300">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${
                  plan.popular 
                    ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                    : 'border-white/20 hover:bg-white/20'
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
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
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

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Streamline Your Invoicing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses who trust Zion AI Invoice Generator to manage their 
              invoicing process efficiently and professionally.
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