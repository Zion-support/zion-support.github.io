import { ArrowRight, FileText, Zap, BarChart3, Users, Target, Globe, Star, CheckCircle, Mail, Smartphone, MapPin, TrendingUp, CreditCard } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionInvoiceGenius() {
  const features = [
    {
      title: "AI-Powered Invoice Generation",
      description: "Automatically generate professional invoices with AI that learns your business patterns and preferences",
      icon: <FileText className="w-6 h-6" />,
      benefit: "90% time savings"
    },
    {
      title: "Smart Payment Processing",
      description: "Accept payments online with multiple payment methods including credit cards, bank transfers, and digital wallets",
      icon: <CreditCard className="w-6 h-6" />,
      benefit: "Faster payments"
    },
    {
      title: "Automated Follow-ups",
      description: "Intelligent payment reminders and follow-up sequences that adapt based on client behavior and payment history",
      icon: <Zap className="w-6 h-6" />,
      benefit: "Reduce late payments"
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive financial analytics with cash flow tracking, payment trends, and revenue forecasting",
      icon: <BarChart3 className="w-6 h-6" />,
      benefit: "Better insights"
    },
    {
      title: "Multi-Currency Support",
      description: "Invoice in any currency with automatic exchange rate updates and international payment processing",
      icon: <Globe className="w-6 h-6" />,
      benefit: "Global business"
    },
    {
      title: "Client Portal",
      description: "Professional client portal where customers can view invoices, make payments, and track payment history",
      icon: <Users className="w-6 h-6" />,
      benefit: "Enhanced experience"
    }
  ];

  const invoiceTypes = [
    {
      name: "Service Invoices",
      description: "Professional service billing with time tracking and project management",
      icon: <FileText className="w-8 h-8" />,
      efficiency: "85%"
    },
    {
      name: "Product Invoices",
      description: "E-commerce and retail invoicing with inventory management",
      icon: <Target className="w-8 h-8" />,
      efficiency: "90%"
    },
    {
      name: "Recurring Invoices",
      description: "Subscription and recurring billing with automated generation",
      icon: <Zap className="w-8 h-8" />,
      efficiency: "95%"
    },
    {
      name: "Expense Invoices",
      description: "Expense tracking and reimbursement with receipt management",
      icon: <BarChart3 className="w-8 h-8" />,
      efficiency: "80%"
    }
  ];

  const pricingPlans = [
    {
      name: "Solo",
      price: "$19",
      period: "per month",
      description: "Perfect for freelancers",
      features: [
        "Up to 50 invoices/month",
        "Basic templates",
        "Payment processing",
        "Email support",
        "Mobile app",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$49",
      period: "per month",
      description: "Ideal for small businesses",
      features: [
        "Up to 500 invoices/month",
        "Custom templates",
        "Advanced analytics",
        "Priority support",
        "Team collaboration",
        "API access",
        "Multi-currency"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited invoices",
        "White-label options",
        "Advanced reporting",
        "Dedicated support",
        "24/7 phone support",
        "Custom integrations",
        "Client portal"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "Freelance Designer",
      role: "Creative Director",
      content: "Zion Invoice Genius has transformed my business. I'm getting paid 50% faster and spending 90% less time on invoicing.",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "James Rodriguez",
      company: "Consulting Firm",
      role: "Managing Partner",
      content: "The AI invoice generation is incredible. It creates perfect invoices based on our project data automatically.",
      rating: 5,
      avatar: "JR"
    },
    {
      name: "Lisa Chen",
      company: "E-commerce Store",
      role: "Operations Manager",
      content: "The payment processing and analytics are outstanding. We can track our cash flow in real-time and make better decisions.",
      rating: 5,
      avatar: "LC"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Invoice Genius - AI-Powered Invoice Management Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Streamline your invoicing with Zion Invoice Genius. AI-powered invoice generation, smart payment processing, and advanced analytics for better cash flow management."
        />
        <meta
          name="keywords"
          content="invoice management, invoice generation, payment processing, billing software, invoice automation, cash flow management, financial analytics"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-invoice-genius" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-purple-500/20 border border-amber-500/30 mb-6">
              <FileText className="w-4 h-4 text-amber-400 mr-2" />
              <span className="text-amber-400 text-sm font-medium">Invoice Management Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-purple-400 to-cyan-400">
                Zion Invoice Genius
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-purple-400 to-cyan-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The most intelligent invoice management platform powered by AI. Generate, send, and track 
              invoices with smart automation, payment processing, and advanced analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-amber-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-amber-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <FileText className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">90%</div>
                <div className="text-gray-300 text-sm">Time Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50%</div>
                <div className="text-gray-300 text-sm">Faster Payments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Automated Processing</div>
              </div>
            </div>
          </div>
        </section>

        {/* Invoice Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Handle Any Type of Invoice
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From freelancers to enterprises, we've got you covered with specialized invoice types.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {invoiceTypes.map((type, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/10 text-center"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-amber-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {type.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="flex items-center justify-center text-amber-400 text-sm font-medium">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {type.efficiency} Efficiency
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Invoice Management Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to streamline your invoicing and get paid faster.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-amber-400 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {feature.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Invoice Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Scale your invoicing with our flexible pricing plans.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-amber-500/50 shadow-2xl shadow-amber-500/20' 
                      : 'border-white/20 hover:border-amber-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-amber-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-amber-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-amber-500 to-purple-600 text-white hover:from-amber-600 hover:to-purple-700 shadow-lg hover:shadow-amber-500/25'
                        : 'border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900'
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

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Business Owners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what business owners say about Zion Invoice Genius
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-amber-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Streamline Your Invoicing Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses using Zion Invoice Genius to get paid faster and manage their cash flow better. 
              Start your free trial today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-amber-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-amber-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-amber-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-amber-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-amber-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <FileText className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}