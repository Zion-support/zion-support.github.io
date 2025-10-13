import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Users, Clock, Sparkles, Target, Globe, FileText, Search, TrendingUp, Receipt, CreditCard, PieChart, TrendingDown } from 'lucide-react';
import EnhancedSEO from '../../components/EnhancedSEO';

const ExpenseTrackerAIPage = () => {
  const features = [
    {
      title: "Receipt Scanning AI",
      description: "Automatically extract data from receipts using advanced OCR and AI technology",
      icon: <Receipt className="w-6 h-6" />,
      benefits: ["Instant data extraction", "Multi-format support", "99% accuracy"]
    },
    {
      title: "Smart Categorization",
      description: "AI automatically categorizes expenses and learns from your patterns",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Auto-categorization", "Learning algorithms", "Custom categories"]
    },
    {
      title: "Expense Analytics",
      description: "Comprehensive analytics and insights to help you understand spending patterns",
      icon: <PieChart className="w-6 h-6" />,
      benefits: ["Spending insights", "Trend analysis", "Budget tracking"]
    },
    {
      title: "Automated Reporting",
      description: "Generate detailed expense reports automatically for tax and accounting purposes",
      icon: <FileText className="w-6 h-6" />,
      benefits: ["Tax-ready reports", "Custom formats", "Automated scheduling"]
    },
    {
      title: "Multi-Currency Support",
      description: "Track expenses in multiple currencies with real-time exchange rates",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["100+ currencies", "Real-time rates", "Automatic conversion"]
    },
    {
      title: "Team Collaboration",
      description: "Share expense data with team members and accountants seamlessly",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Team sharing", "Role permissions", "Approval workflows"]
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$19",
      period: "/month",
      description: "Perfect for individuals and freelancers",
      features: [
        "Unlimited receipts",
        "Basic categorization",
        "Expense analytics",
        "Tax reports",
        "Mobile app",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$49",
      period: "/month",
      description: "Ideal for small businesses and teams",
      features: [
        "Everything in Personal",
        "Advanced AI features",
        "Team collaboration",
        "Custom categories",
        "API access",
        "Priority support",
        "Multi-user accounts"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Everything in Business",
        "Custom integrations",
        "White-label options",
        "Advanced security",
        "Dedicated support",
        "Custom reporting",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Lee",
      company: "Freelance Consultant",
      role: "Business Owner",
      content: "Expense Tracker AI has saved me hours every week. The receipt scanning is incredibly accurate and the categorization is spot-on.",
      rating: 5,
      avatar: "JL"
    },
    {
      name: "Robert Kim",
      company: "Digital Agency",
      role: "Finance Manager",
      content: "The team collaboration features are fantastic. We can now track all expenses in one place and generate reports instantly.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Maria Garcia",
      company: "E-commerce Store",
      role: "Owner",
      content: "The analytics helped us identify unnecessary expenses and save over $2,000 per month. The ROI was immediate.",
      rating: 5,
      avatar: "MG"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO 
        title="Expense Tracker AI - Intelligent Expense Management | Zion Tech Group"
        description="Streamline expense management with AI-powered receipt scanning, smart categorization, and automated reporting. Perfect for individuals and businesses. Starting at $19/month."
        keywords="expense tracker, expense management, receipt scanning, expense analytics, tax reports, financial tracking, AI categorization"
        canonical="https://ziontechgroup.com/expense-tracker-ai"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">#1 AI Expense Management Tool</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-glow">
            Expense Tracker AI
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform your expense management with AI-powered receipt scanning, smart categorization, 
            and automated reporting. Save time and gain valuable insights into your spending patterns.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/contact" 
              className="cyber-button inline-flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="#demo" 
              className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Watch Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">99%</div>
              <div className="text-gray-300 text-sm">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50K+</div>
              <div className="text-gray-300 text-sm">Receipts Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">$2M+</div>
              <div className="text-gray-300 text-sm">Expenses Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">AI Processing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Powerful Expense Management Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to track, analyze, and manage expenses efficiently
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 neon-text">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-green-400">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Simple, Affordable Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your expense tracking needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-green-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'cyber-button'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about Expense Tracker AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="hologram-card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-cyan-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-glow">
            Ready to Simplify Your Expense Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of users who are already saving time and money with Expense Tracker AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center justify-center"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/pricing"
              className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              View All Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpenseTrackerAIPage;