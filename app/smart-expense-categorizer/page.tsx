import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Receipt, 
  Brain, 
  BarChart3, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Clock,
  Target,
  Zap,
  Shield,
  Smartphone,
  Globe,
  DollarSign
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const SmartExpenseCategorizerPage = () => {
  const features = [
    {
      title: "AI-Powered Categorization",
      description: "Automatically categorize expenses with 98% accuracy using machine learning and natural language processing",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Receipt OCR Scanning",
      description: "Extract data from receipts and invoices using advanced OCR technology and AI-powered data extraction",
      icon: <Receipt className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-time Expense Tracking",
      description: "Track expenses in real-time with automatic categorization and instant receipt processing",
      icon: <Clock className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Smart Budget Management",
      description: "Set budgets by category and get intelligent alerts when spending approaches limits",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Tax Preparation Ready",
      description: "Generate tax-ready reports with properly categorized expenses for easy tax filing",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Multi-Currency Support",
      description: "Handle expenses in multiple currencies with automatic conversion and exchange rate tracking",
      icon: <Globe className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$19",
      period: "per month",
      description: "Perfect for individuals and freelancers",
      features: [
        "Up to 500 expenses per month",
        "AI-powered categorization",
        "Receipt OCR scanning",
        "Basic reporting",
        "Mobile app access",
        "Email support",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$59",
      period: "per month",
      description: "Ideal for small businesses",
      features: [
        "Up to 2,000 expenses per month",
        "Advanced AI categorization",
        "Bulk receipt processing",
        "Advanced analytics & reporting",
        "Team collaboration",
        "Priority support",
        "Up to 5 user accounts",
        "API integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited expenses",
        "Custom AI models",
        "White-label solution",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "Unlimited users",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Save Time",
      description: "Reduce expense processing time by 80% with automated categorization",
      icon: <Clock className="w-6 h-6" />,
      value: "80%"
    },
    {
      title: "Improve Accuracy",
      description: "Achieve 98% categorization accuracy with AI-powered processing",
      icon: <Target className="w-6 h-6" />,
      value: "98%"
    },
    {
      title: "Reduce Costs",
      description: "Cut accounting costs by 60% with automated expense management",
      icon: <DollarSign className="w-6 h-6" />,
      value: "60%"
    },
    {
      title: "Better Compliance",
      description: "Ensure 100% compliance with automated tax-ready reporting",
      icon: <Shield className="w-6 h-6" />,
      value: "100%"
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      company: "Freelance Consultant",
      role: "Independent Contractor",
      content: "The smart expense categorizer has saved me hours every week. The AI categorization is incredibly accurate and the receipt scanning is flawless.",
      rating: 5,
      avatar: "AT"
    },
    {
      name: "Sarah Williams",
      company: "Small Business Solutions",
      role: "Finance Manager",
      content: "We've reduced our accounting costs by 65% since implementing this tool. The tax preparation features are a game-changer.",
      rating: 5,
      avatar: "SW"
    },
    {
      name: "Michael Davis",
      company: "Tech Startup Inc.",
      role: "CFO",
      content: "The multi-currency support and real-time tracking have transformed our expense management. Highly recommend for any business.",
      rating: 5,
      avatar: "MD"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Smart Expense Categorizer - AI-Powered Expense Management | Zion Tech Group"
        description="Automatically categorize expenses with 98% accuracy using AI. Save 80% time on expense processing and reduce accounting costs by 60%."
        keywords="expense management, expense categorization, receipt scanning, AI accounting, expense tracking, tax preparation, business finance"
        canonical="https://ziontechgroup.com/smart-expense-categorizer"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Receipt className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Expense Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Smart Expense Categorizer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Automatically categorize expenses with 98% accuracy using AI. Save 80% time on expense processing, 
            reduce accounting costs by 60%, and ensure tax compliance with intelligent expense management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Receipt className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
          
          {/* Benefits Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{benefit.value}</div>
                <div className="text-gray-300 text-xs md:text-sm">{benefit.title}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Intelligent Expense Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI-powered expense categorizer uses machine learning to automatically process, categorize, and manage your business expenses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your expense management needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10 scale-105' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
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
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
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
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
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
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Simplify Expense Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses already using our smart expense categorizer to save time and reduce costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Receipt className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default SmartExpenseCategorizerPage;