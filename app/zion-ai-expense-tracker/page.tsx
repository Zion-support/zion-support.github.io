import { ArrowRight, Receipt, Zap, CheckCircle, Star, Brain, DollarSign, TrendingUp, Shield, BarChart3, Clock, Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAiExpenseTracker() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Receipt Recognition",
      description: "Automatically extract data from receipts using advanced OCR and AI technology with 99.5% accuracy"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Categorization",
      description: "AI automatically categorizes expenses and learns from your patterns to improve accuracy over time"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Comprehensive financial insights with AI-powered spending analysis and budget recommendations"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Bank-Level Security",
      description: "256-bit encryption, SOC 2 compliance, and secure cloud storage for all your financial data"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Budget Optimization",
      description: "AI-powered budget recommendations and spending alerts to help you save money and reach financial goals"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Tax Preparation",
      description: "Automatically generate tax-ready reports and export data to popular accounting software"
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$9",
      period: "/month",
      description: "Perfect for individuals and freelancers",
      features: [
        "Up to 100 receipts/month",
        "Basic AI categorization",
        "Expense tracking",
        "Basic reports",
        "Mobile app access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Most popular for small businesses",
      features: [
        "Unlimited receipts",
        "Advanced AI categorization",
        "Team collaboration (5 users)",
        "Advanced analytics",
        "Budget optimization",
        "Tax preparation tools",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Unlimited team members",
        "Custom integrations",
        "Advanced security features",
        "White-label solution",
        "Dedicated account manager",
        "Custom reporting",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Michael Rodriguez",
      company: "Freelance Consultant",
      role: "Owner",
      content: "Zion AI Expense Tracker saved me 5 hours per week on expense management. The receipt scanning is incredibly accurate and the AI categorization is spot-on.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      company: "Marketing Agency",
      role: "Finance Manager",
      content: "The budget optimization feature helped us reduce unnecessary expenses by 25%. The AI insights are incredibly valuable for financial planning.",
      rating: 5
    },
    {
      name: "David Thompson",
      company: "Tech Startup",
      role: "CEO",
      content: "Managing expenses for our growing team was a nightmare. This tool streamlined everything and the tax preparation features are a lifesaver.",
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Save 25% on Expenses",
      description: "AI-powered budget optimization helps reduce unnecessary spending"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save 5+ Hours/Week",
      description: "Automated receipt processing and categorization saves significant time"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Better Financial Control",
      description: "AI insights help you understand spending patterns and optimize budgets"
    }
  ];

  const integrations = [
    { name: "QuickBooks", icon: "📊", color: "from-blue-600 to-blue-800" },
    { name: "Xero", icon: "💼", color: "from-green-500 to-green-700" },
    { name: "FreshBooks", icon: "📈", color: "from-orange-500 to-orange-700" },
    { name: "Sage", icon: "🔢", color: "from-purple-500 to-purple-700" },
    { name: "Wave", icon: "🌊", color: "from-cyan-500 to-cyan-700" },
    { name: "Zoho Books", icon: "📚", color: "from-indigo-500 to-indigo-700" }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Expense Tracker - Smart Expense Management | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your expense management with Zion AI Expense Tracker. AI-powered receipt scanning, smart categorization, budget optimization, and tax preparation. Start free trial today."
        />
        <meta
          name="keywords"
          content="AI expense tracker, receipt scanning, expense management, budget optimization, financial analytics, tax preparation, expense automation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Star className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">#1 AI Expense Tracker 2024</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Zion AI Expense Tracker
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your expense management with AI-powered receipt scanning, smart categorization, 
              and intelligent budget optimization. Take control of your finances like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.5%</div>
                <div className="text-gray-300">Receipt Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">25%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
                <div className="text-gray-300">Hours Saved/Week</div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite accounting software and financial tools.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center group"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${integration.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                    {integration.icon}
                  </div>
                  <h3 className="text-white font-semibold">{integration.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion AI Expense Tracker?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of expense management with AI-powered automation and insights.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features for Smart Expense Management
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to take control of your finances with AI-powered automation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your expense management needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/10 to-purple-500/10'
                      : 'border-white/20 hover:border-cyan-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Finance Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Zion AI Expense Tracker
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Expense Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using Zion AI Expense Tracker to take control of their finances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
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