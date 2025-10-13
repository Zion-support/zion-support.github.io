import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Download, 
  Send, 
  Sparkles, 
  Clock, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Star,
  Zap,
  Brain,
  Target,
  BarChart3,
  DollarSign,
  Receipt,
  CreditCard
} from 'lucide-react';

const ZionAIInvoiceGeneratorPage = () => {
  const features = [
    "AI-Powered Invoice Generation",
    "Automated Data Extraction",
    "Smart Template Selection",
    "Multi-Currency Support",
    "Tax Calculation & Compliance",
    "Payment Tracking & Reminders",
    "Client Management Integration",
    "Custom Branding & Logos",
    "PDF & Email Delivery",
    "Mobile App Access",
    "API Integration",
    "White-label Options"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for freelancers and small businesses",
      features: [
        "50 invoices per month",
        "Basic templates",
        "Email delivery",
        "Payment tracking",
        "Standard support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month", 
      description: "Ideal for growing businesses and agencies",
      features: [
        "200 invoices per month",
        "Premium templates",
        "Custom branding",
        "Advanced reporting",
        "API access",
        "Priority support"
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
        "Custom templates",
        "White-label options",
        "Advanced analytics",
        "Multi-user access",
        "Dedicated support"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Save Time",
      description: "Generate professional invoices in seconds",
      icon: <Clock className="w-6 h-6" />,
      stat: "90% time saved"
    },
    {
      title: "Reduce Errors",
      description: "AI-powered validation prevents mistakes",
      icon: <Shield className="w-6 h-6" />,
      stat: "99% accuracy"
    },
    {
      title: "Get Paid Faster",
      description: "Automated reminders and payment tracking",
      icon: <DollarSign className="w-6 h-6" />,
      stat: "40% faster payments"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Invoice Generator - Automated Invoice Creation | Zion Tech Group</title>
        <meta name="description" content="Create professional invoices with AI. Automated data extraction, smart templates, payment tracking, and multi-currency support. Perfect for freelancers and businesses." />
        <meta name="keywords" content="AI invoice generator, automated invoicing, invoice software, billing automation, payment tracking, invoice templates" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI Invoice Automation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Invoice Generator
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your invoicing process with AI-powered automation. Create professional invoices, 
            track payments, and get paid faster with our intelligent invoice generation platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Creating Invoices
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

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Powerful Features
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              How It Works
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">1. AI Analysis</h3>
              <p className="text-gray-300">Our AI analyzes your project data and client information to automatically generate invoice details</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">2. Generate Invoice</h3>
              <p className="text-gray-300">Professional invoice is created with your branding, tax calculations, and payment terms</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Send className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">3. Send & Track</h3>
              <p className="text-gray-300">Automatically send invoices via email and track payment status with smart reminders</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Simple Pricing
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
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
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
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
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
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

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Streamline Your Invoicing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of freelancers and businesses who are already using 
              Zion AI Invoice Generator to get paid faster and reduce administrative work.
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
                View Demo
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