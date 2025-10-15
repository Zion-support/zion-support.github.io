import { ArrowRight, FileText, Calculator, Send, BarChart3, CheckCircle, Clock, DollarSign, Target, Zap, Globe, Users, Settings } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionInvoiceGenius() {
  const features = [
    {
      title: "Smart Invoice Generation",
      description: "AI-powered invoice generation with automatic calculations, tax handling, and professional templates",
      icon: <FileText className="w-6 h-6" />,
      included: true
    },
    {
      title: "Automated Billing",
      description: "Set up recurring invoices, payment reminders, and automated follow-ups for overdue payments",
      icon: <Zap className="w-6 h-6" />,
      included: true
    },
    {
      title: "Payment Processing",
      description: "Accept payments online with integrated payment gateways and multiple payment methods",
      icon: <Calculator className="w-6 h-6" />,
      included: true
    },
    {
      title: "Client Management",
      description: "Comprehensive client database with contact information, payment history, and communication logs",
      icon: <Users className="w-6 h-6" />,
      included: true
    },
    {
      title: "Financial Reporting",
      description: "Detailed financial reports, profit/loss statements, and tax-ready reports for accounting",
      icon: <BarChart3 className="w-6 h-6" />,
      included: true
    },
    {
      title: "Multi-Currency Support",
      description: "Invoice and accept payments in multiple currencies with automatic exchange rate updates",
      icon: <Globe className="w-6 h-6" />,
      included: true
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 19,
      period: "month",
      description: "Perfect for freelancers",
      features: [
        "Up to 50 invoices/month",
        "Basic templates",
        "Email support",
        "1 user account",
        "Standard payment methods",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 49,
      period: "month",
      description: "Ideal for small businesses",
      features: [
        "Up to 500 invoices/month",
        "Premium templates",
        "Priority support",
        "Up to 5 user accounts",
        "All payment methods",
        "Advanced reporting",
        "Recurring invoices",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 129,
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited invoices",
        "Custom templates",
        "Dedicated support",
        "Unlimited users",
        "Custom payment methods",
        "Custom reporting",
        "White-label solution",
        "SSO integration"
      ],
      popular: false
    }
  ];

  const invoiceStats = [
    { number: "70%", label: "Faster Invoice Processing", icon: <FileText className="w-6 h-6" /> },
    { number: "50%", label: "Faster Payment Collection", icon: <Send className="w-6 h-6" /> },
    { number: "25+", label: "Payment Methods", icon: <Calculator className="w-6 h-6" /> },
    { number: "24/7", label: "Automated Billing", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Jennifer Lee",
      company: "Freelance Designer",
      role: "Owner",
      content: "Zion Invoice Genius has completely transformed my invoicing process. I can create and send professional invoices in minutes, and payments come in much faster.",
      rating: 5,
      avatar: "JL"
    },
    {
      name: "David Rodriguez",
      company: "Consulting Firm",
      role: "Finance Manager",
      content: "The automated billing features are incredible. We've reduced our accounts receivable by 50% and improved our cash flow significantly.",
      rating: 5,
      avatar: "DR"
    },
    {
      name: "Sarah Kim",
      company: "SaaS Startup",
      role: "CFO",
      content: "The financial reporting and multi-currency support have made our international operations so much easier. The reports are comprehensive and tax-ready.",
      rating: 5,
      avatar: "SK"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Invoice Genius - AI-Powered Invoicing & Payment Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Streamline your invoicing with Zion Invoice Genius - the ultimate AI-powered invoicing platform. Smart invoicing, automated billing, payment processing, and financial reporting. Starting at $19/month."
        />
        <meta
          name="keywords"
          content="invoicing software, invoice generation, payment processing, automated billing, financial reporting, client management, Zion Invoice Genius"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-teal-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 mb-6">
              <FileText className="w-4 h-4 text-emerald-400 mr-2" />
              <span className="text-emerald-400 text-sm font-medium">#1 Invoicing Platform 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 animate-pulse">
                Zion Invoice Genius
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              The ultimate AI-powered invoicing platform that helps you create, send, and track invoices effortlessly. 
              Smart invoicing, automated billing, and comprehensive financial reporting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-emerald-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>

            {/* Invoice Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {invoiceStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                  Advanced Invoicing Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage your invoicing and payments
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex items-center mt-4">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-green-400 text-sm font-medium">Included in all plans</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-emerald-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                  Invoicing Platform Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your invoicing needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
                    plan.popular 
                      ? 'border-emerald-500/50 bg-gradient-to-br from-emerald-500/10 to-green-500/10' 
                      : 'border-white/20 hover:border-emerald-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-emerald-400">${plan.price}</span>
                      <span className="text-gray-300 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700 shadow-lg hover:shadow-emerald-500/25'
                        : 'border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900'
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Business Owners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users say about Zion Invoice Genius
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FileText key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-emerald-900/30 to-green-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Invoicing Like a Genius
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses who use Zion Invoice Genius to streamline their invoicing. 
              Start your free trial today - no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-emerald-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime • ✓ 24/7 support</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}