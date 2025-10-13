import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Download, 
  Upload, 
  Sparkles, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Users,
  Zap,
  Target,
  BarChart3,
  Shield,
  Globe,
  CreditCard,
  Calculator,
  Receipt
} from 'lucide-react';

const ZionAIInvoiceGeneratorPage = () => {
  const features = [
    {
      title: "AI-Powered Invoice Creation",
      description: "Generate professional invoices automatically from project data and client information",
      icon: <FileText className="w-6 h-6" />,
      details: "Create invoices in seconds with intelligent data extraction and formatting"
    },
    {
      title: "Smart Payment Tracking",
      description: "Automatically track payments, send reminders, and manage overdue accounts",
      icon: <CreditCard className="w-6 h-6" />,
      details: "Never miss a payment with automated follow-ups and payment status tracking"
    },
    {
      title: "Multi-Currency Support",
      description: "Create invoices in 150+ currencies with real-time exchange rate updates",
      icon: <Globe className="w-6 h-6" />,
      details: "Support for international clients with automatic currency conversion"
    },
    {
      title: "Custom Branding",
      description: "Apply your logo, colors, and branding to all invoices and documents",
      icon: <Target className="w-6 h-6" />,
      details: "Maintain professional brand consistency across all client communications"
    },
    {
      title: "Automated Recurring Billing",
      description: "Set up recurring invoices for subscription services and retainer clients",
      icon: <Clock className="w-6 h-6" />,
      details: "Automate monthly, quarterly, or annual billing cycles"
    },
    {
      title: "Advanced Analytics",
      description: "Track revenue, payment trends, and client payment behavior",
      icon: <BarChart3 className="w-6 h-6" />,
      details: "Get insights into your business performance and cash flow patterns"
    }
  ];

  const pricingPlans = [
    {
      name: "Solo",
      price: "$29",
      period: "/month",
      description: "Perfect for freelancers and solo entrepreneurs",
      features: [
        "50 invoices per month",
        "Basic templates",
        "Payment tracking",
        "Email support",
        "PDF export",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$79",
      period: "/month",
      description: "Ideal for small to medium businesses",
      features: [
        "200 invoices per month",
        "Premium templates",
        "Advanced analytics",
        "Recurring billing",
        "Multi-currency support",
        "Priority support",
        "Team collaboration (3 users)",
        "Custom branding"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with high-volume needs",
      features: [
        "Unlimited invoices",
        "All templates",
        "Advanced reporting",
        "API integration",
        "White-label options",
        "24/7 support",
        "Unlimited team members",
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Freelancers",
      description: "Streamline invoicing for creative professionals, consultants, and independent contractors",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Small Business",
      description: "Manage client billing, track payments, and maintain cash flow for growing businesses",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Agencies",
      description: "Handle complex billing for multiple clients, projects, and team members",
      icon: <Shield className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "E-commerce",
      description: "Automate order processing, shipping invoices, and subscription billing",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Invoices Generated", icon: <FileText className="w-6 h-6" /> },
    { number: "2,500+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "98%", label: "Payment Success Rate", icon: <CreditCard className="w-6 h-6" /> },
    { number: "85%", label: "Time Saved", icon: <Clock className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      title: "Get Paid Faster",
      description: "Reduce payment time by 40% with automated reminders and easy payment options",
      icon: <Zap className="w-6 h-6" />,
      stat: "40% faster payments"
    },
    {
      title: "Reduce Errors",
      description: "Eliminate manual data entry errors with AI-powered invoice generation",
      icon: <Shield className="w-6 h-6" />,
      stat: "99.9% accuracy"
    },
    {
      title: "Save Time",
      description: "Create professional invoices in seconds instead of hours",
      icon: <Clock className="w-6 h-6" />,
      stat: "85% time savings"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Invoice Generator - Automated Invoice Creation Platform | Zion Tech Group</title>
        <meta name="description" content="Create professional invoices automatically with our AI invoice generator. Track payments, manage recurring billing, and get paid faster. Starting at $29/month." />
        <meta name="keywords" content="AI invoice generator, automated invoicing, payment tracking, recurring billing, invoice templates, business invoicing" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
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
            Transform your invoicing process with our intelligent AI-powered platform. 
            Create professional invoices, track payments, and get paid faster than ever before.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Receipt className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
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

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Powerful Features for Professional Invoicing
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-3">{feature.description}</p>
                <p className="text-sm text-cyan-400">{feature.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Perfect for Every Business Type
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group text-center">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
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
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
              Join thousands of businesses who are already using Zion AI Invoice Generator 
              to get paid faster and manage their finances more efficiently.
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
                <Receipt className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZionAIInvoiceGeneratorPage;