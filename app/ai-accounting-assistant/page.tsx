import { ArrowRight, Calculator, FileText, Target, Zap, BarChart3, CheckCircle, Clock, DollarSign, Users, Settings, Globe, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AIAccountingAssistant() {
  const features = [
    {
      title: "Automated Bookkeeping",
      description: "AI-powered bookkeeping that automatically categorizes transactions, reconciles accounts, and maintains accurate records",
      icon: <Calculator className="w-6 h-6" />,
      included: true
    },
    {
      title: "Smart Expense Tracking",
      description: "Intelligent expense tracking with receipt scanning, automatic categorization, and compliance monitoring",
      icon: <FileText className="w-6 h-6" />,
      included: true
    },
    {
      title: "Financial Reporting",
      description: "Generate comprehensive financial reports, profit/loss statements, and tax-ready documents automatically",
      icon: <BarChart3 className="w-6 h-6" />,
      included: true
    },
    {
      title: "Tax Preparation",
      description: "Automated tax preparation with deduction optimization, form generation, and compliance checking",
      icon: <Target className="w-6 h-6" />,
      included: true
    },
    {
      title: "Bank Integration",
      description: "Seamless integration with 10,000+ banks and financial institutions for real-time data synchronization",
      icon: <Globe className="w-6 h-6" />,
      included: true
    },
    {
      title: "Audit Trail",
      description: "Complete audit trail with document management, change tracking, and compliance reporting",
      icon: <Shield className="w-6 h-6" />,
      included: true
    }
  ];

  const pricingPlans = [
    {
      name: "Solo",
      price: 29,
      period: "month",
      description: "Perfect for freelancers",
      features: [
        "Up to 100 transactions/month",
        "Basic reporting",
        "Email support",
        "1 user account",
        "Standard bank connections",
        "Basic tax forms"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 79,
      period: "month",
      description: "Ideal for small businesses",
      features: [
        "Up to 1,000 transactions/month",
        "Advanced reporting",
        "Priority support",
        "Up to 5 user accounts",
        "All bank connections",
        "All tax forms",
        "Receipt scanning",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 199,
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited transactions",
        "Custom reporting",
        "Dedicated support",
        "Unlimited users",
        "Custom integrations",
        "White-label solution",
        "Custom workflows",
        "SSO integration"
      ],
      popular: false
    }
  ];

  const accountingStats = [
    { number: "90%", label: "Time Saved on Bookkeeping", icon: <Calculator className="w-6 h-6" /> },
    { number: "99.9%", label: "Accuracy Rate", icon: <Target className="w-6 h-6" /> },
    { number: "10,000+", label: "Bank Integrations", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "Automated Processing", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Jennifer Lee",
      company: "Freelance Consultant",
      role: "Owner",
      content: "AI Accounting Assistant has completely transformed my bookkeeping. I save 90% of my time on accounting tasks and have never been more organized.",
      rating: 5,
      avatar: "JL"
    },
    {
      name: "Michael Rodriguez",
      company: "Small Business",
      role: "CFO",
      content: "The automated expense tracking and receipt scanning are incredible. We've improved our accuracy to 99.9% and reduced our accounting costs by 60%.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Sarah Chen",
      company: "E-commerce Store",
      role: "Bookkeeper",
      content: "The bank integration and real-time synchronization have made our financial management so much easier. We always have up-to-date financial data.",
      rating: 5,
      avatar: "SC"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Accounting Assistant - AI-Powered Accounting & Bookkeeping Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Streamline your accounting with AI Accounting Assistant - the ultimate AI-powered accounting platform. Automated bookkeeping, expense tracking, and tax preparation. Starting at $29/month."
        />
        <meta
          name="keywords"
          content="AI accounting, automated bookkeeping, expense tracking, tax preparation, financial reporting, accounting software, AI accounting assistant"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
              <Calculator className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">#1 AI Accounting Platform 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 animate-pulse">
                AI Accounting Assistant
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              The ultimate AI-powered accounting platform that automates bookkeeping, expense tracking, and tax preparation. 
              Save 90% of your time on accounting tasks with intelligent automation and real-time insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>

            {/* Accounting Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {accountingStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-green-400 mb-2">{stat.number}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Advanced Accounting Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage your finances efficiently
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-green-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Accounting Platform Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your accounting needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
                    plan.popular 
                      ? 'border-green-500/50 bg-gradient-to-br from-green-500/10 to-emerald-500/10' 
                      : 'border-white/20 hover:border-green-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-green-400">${plan.price}</span>
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
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-green-500/25'
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
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
                Trusted by Accountants
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users say about AI Accounting Assistant
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Calculator key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-green-900/30 to-emerald-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Automating Your Accounting
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses who use AI Accounting Assistant to streamline their finances. 
              Start your free trial today - no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
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