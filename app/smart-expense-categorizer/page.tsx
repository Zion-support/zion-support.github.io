import React, { useState } from "react";
import { Receipt, TrendingUp, BarChart3, Zap, ArrowRight, CheckCircle, Star, Users, Clock, DollarSign, Brain, Shield } from "lucide-react";
import EnhancedSEO from "../../components/EnhancedSEO";
import FuturisticCard from "../../components/FuturisticCard";
import FuturisticButton from "../../components/FuturisticButton";
import ResponsiveContainer from "../../components/ResponsiveContainer";

const SmartExpenseCategorizerPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("pro");

  const features = [
    {
      title: "AI-Powered Auto-Categorization",
      description: "Automatically categorize expenses using machine learning algorithms that learn from your spending patterns.",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Smart categorization", "Learning algorithms", "Pattern recognition"]
    },
    {
      title: "Receipt OCR & Processing",
      description: "Extract data from receipts using optical character recognition and automatically categorize expenses.",
      icon: <Receipt className="w-6 h-6" />,
      benefits: ["Receipt scanning", "Data extraction", "Automatic entry"]
    },
    {
      title: "Expense Analytics Dashboard",
      description: "Comprehensive analytics and insights on spending patterns, budget tracking, and financial health.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Spending insights", "Budget tracking", "Financial reports"]
    },
    {
      title: "Tax Preparation Support",
      description: "Automatically organize expenses for tax purposes with proper categorization and documentation.",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Tax categories", "Audit trails", "Compliance support"]
    },
    {
      title: "Multi-Currency Support",
      description: "Handle expenses in multiple currencies with automatic conversion and real-time exchange rates.",
      icon: <DollarSign className="w-6 h-6" />,
      benefits: ["Currency conversion", "Exchange rates", "Global support"]
    },
    {
      title: "Integration & Automation",
      description: "Seamlessly integrate with accounting software, banks, and credit cards for automated expense tracking.",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Bank integration", "Accounting sync", "API access"]
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: 19,
      period: "month",
      description: "Perfect for individuals",
      features: [
        "Up to 500 expenses/month",
        "Basic categorization",
        "Receipt scanning",
        "Basic reporting",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Business",
      price: 59,
      period: "month",
      description: "Ideal for small businesses",
      features: [
        "Up to 2,000 expenses/month",
        "Advanced AI categorization",
        "Multi-user support",
        "Tax preparation tools",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 149,
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited expenses",
        "Custom AI models",
        "Advanced integrations",
        "White-label options",
        "Dedicated support",
        "Custom reporting"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Freelance Consultant",
      company: "Independent",
      content: "The smart expense categorizer has saved me hours every month. The AI categorization is incredibly accurate and the receipt scanning is a game-changer.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      role: "Finance Manager",
      company: "StartupHub Inc",
      content: "Managing expenses for our team was a nightmare. This tool automated everything and gave us insights we never had before. Highly recommended!",
      rating: 5
    },
    {
      name: "David Lee",
      role: "Small Business Owner",
      company: "Local Services Co",
      content: "The tax preparation features alone are worth the subscription. It's organized all our expenses perfectly for our accountant and saved us money on tax prep.",
      rating: 5
    }
  ];

  const stats = [
    { number: "90%", label: "Categorization Accuracy", icon: <Brain className="w-6 h-6" /> },
    { number: "75%", label: "Time Saved", icon: <Clock className="w-6 h-6" /> },
    { number: "95%", label: "Receipt OCR Accuracy", icon: <Receipt className="w-6 h-6" /> },
    { number: "500+", label: "Happy Users", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Smart Expense Categorizer | Zion Tech Group - AI-Powered Expense Management"
        description="Automatically categorize expenses with AI-powered analysis, receipt OCR, and smart insights. Streamline expense tracking, tax preparation, and financial management."
        keywords="expense management, expense categorization, receipt scanning, expense tracking, AI expenses, financial management, tax preparation"
        canonical="https://ziontechgroup.com/smart-expense-categorizer"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Receipt className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Expense Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Smart Expense Categorizer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Automatically categorize and manage expenses with AI-powered analysis, receipt OCR, and smart insights. 
            Streamline expense tracking, tax preparation, and financial management for individuals and businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Expense Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage AI and automation to streamline expense management and gain valuable financial insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your expense management needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10'
                    : 'border-white/20 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-1">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by Users Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our users say about the Smart Expense Categorizer
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Simplify Your Expense Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of users already using our smart expense categorizer to streamline their financial management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Start Your Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>📧 Contact: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
            <p>📞 Phone: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default SmartExpenseCategorizerPage;