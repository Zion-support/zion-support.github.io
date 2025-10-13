import { Helmet } from "react-helmet-async";
import { Receipt, Brain, DollarSign, BarChart3, Zap, CheckCircle, Star, ArrowRight, Target, TrendingUp, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function SmartExpenseCategorizer() {
  const features = [
    {
      title: "AI-Powered Categorization",
      description: "Automatically categorize expenses with 98% accuracy using machine learning and receipt analysis",
      icon: <Brain className="w-6 h-6" />,
      stats: "98% accuracy"
    },
    {
      title: "Receipt OCR Technology",
      description: "Extract data from receipts, invoices, and bills automatically with advanced optical character recognition",
      icon: <Receipt className="w-6 h-6" />,
      stats: "99.5% OCR accuracy"
    },
    {
      title: "Smart Learning",
      description: "AI learns from your categorization patterns and improves accuracy over time with user feedback",
      icon: <Zap className="w-6 h-6" />,
      stats: "Continuous improvement"
    },
    {
      title: "Real-time Processing",
      description: "Process and categorize expenses instantly as they're uploaded or imported from bank accounts",
      icon: <Clock className="w-6 h-6" />,
      stats: "Instant processing"
    },
    {
      title: "Compliance Tracking",
      description: "Ensure tax compliance with automatic tracking of deductible expenses and tax categories",
      icon: <Shield className="w-6 h-6" />,
      stats: "Tax-ready reports"
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive spending insights with trends, budgets, and expense analysis dashboards",
      icon: <BarChart3 className="w-6 h-6" />,
      stats: "Actionable insights"
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals",
      features: [
        "Up to 500 expenses/month",
        "Basic categorization",
        "Receipt scanning",
        "Standard reports",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$99",
      period: "/month",
      description: "Ideal for small businesses",
      features: [
        "Up to 5,000 expenses/month",
        "Advanced AI categorization",
        "Multi-user access",
        "Tax compliance tracking",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited expenses",
        "Custom AI models",
        "White-label solution",
        "24/7 support",
        "Dedicated account manager",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Save Time",
      description: "Automated categorization eliminates manual data entry and reduces processing time by 90%",
      icon: <Clock className="w-8 h-8" />,
      percentage: "90%"
    },
    {
      title: "Improve Accuracy",
      description: "AI-powered categorization reduces human errors and ensures consistent expense classification",
      icon: <Target className="w-8 h-8" />,
      percentage: "98%"
    },
    {
      title: "Reduce Costs",
      description: "Streamlined expense management reduces administrative costs and improves financial efficiency",
      icon: <DollarSign className="w-8 h-8" />,
      percentage: "40%"
    },
    {
      title: "Better Insights",
      description: "Advanced analytics provide deeper insights into spending patterns and cost optimization opportunities",
      icon: <TrendingUp className="w-8 h-8" />,
      percentage: "75%"
    }
  ];

  const testimonials = [
    {
      name: "Amanda Foster",
      company: "Finance Manager",
      content: "The Smart Expense Categorizer has saved us 90% of our time on expense processing. The AI accuracy is incredible and keeps getting better.",
      rating: 5
    },
    {
      name: "James Wilson",
      company: "Small Business Owner",
      content: "Finally, an expense tool that actually works! The receipt scanning and automatic categorization have transformed our bookkeeping process.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      company: "Accounting Director",
      content: "The compliance tracking feature is a game-changer. We can now ensure tax compliance automatically and generate reports instantly.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Smart Expense Categorizer - Zion Tech Group | AI-Powered Expense Management</title>
        <meta
          name="description"
          content="Automate expense categorization with AI-powered receipt scanning and smart learning. Save 90% time, improve accuracy to 98%, and reduce costs by 40%."
        />
        <meta
          name="keywords"
          content="expense management, receipt scanning, expense categorization, AI bookkeeping, tax compliance, expense tracking, automated accounting"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Receipt className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Expense Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Smart Expense Categorizer
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Automate expense categorization with AI-powered receipt scanning and intelligent learning. Save 90% of your time, 
              achieve 98% accuracy, and reduce administrative costs by 40% with our advanced expense management platform.
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
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
                <div className="text-gray-300 text-sm">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">98%</div>
                <div className="text-gray-300 text-sm">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300 text-sm">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.5%</div>
                <div className="text-gray-300 text-sm">OCR Accuracy</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proven Business Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered expense categorization delivers measurable improvements across all financial management metrics.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{benefit.percentage}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
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
                Advanced AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge artificial intelligence to automate and optimize your expense management process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="text-cyan-400 font-semibold text-sm">
                    {feature.stats}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your expense volume and business needs. Scale up as you grow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-cyan-500/10' 
                      : 'border-white/20 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
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
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Finance Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about the Smart Expense Categorizer
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Automate Your Expense Management?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using Smart Expense Categorizer to save time and improve accuracy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}