'use client';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Receipt, 
  TrendingUp, 
  PieChart, 
  CreditCard, 
  Smartphone, 
  Shield, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Download, 
  Upload, 
  BarChart3, 
  Target, 
  Calendar,
  DollarSign,
  FileText,
  Bell,
  Settings,
  Users,
  Globe,
  Lock,
  Award,
  Clock,
  MessageSquare,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AIExpenseTrackerPro: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    document.title = 'AI Expense Tracker Pro - Smart Financial Management | Zion Tech Group';
  }, []);

  const features = [
    {
      icon: Receipt,
      title: "Smart Receipt Scanning",
      description: "AI-powered OCR technology automatically extracts data from receipts, invoices, and bills with 99.5% accuracy",
      benefits: ["Instant data entry", "Reduced manual work", "Error-free processing", "Multi-language support"]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Advanced machine learning algorithms predict spending patterns and suggest budget optimizations",
      benefits: ["Spending forecasts", "Budget recommendations", "Anomaly detection", "Trend analysis"]
    },
    {
      icon: PieChart,
      title: "Intelligent Categorization",
      description: "Automatically categorize expenses using AI and learn from your spending habits",
      benefits: ["Auto-categorization", "Custom categories", "Learning algorithms", "Smart suggestions"]
    },
    {
      icon: CreditCard,
      title: "Multi-Account Integration",
      description: "Connect all your bank accounts, credit cards, and financial institutions securely",
      benefits: ["Real-time sync", "Secure connections", "Multiple accounts", "Unified view"]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Native mobile apps with offline capabilities and instant sync across devices",
      benefits: ["Offline access", "Cross-platform sync", "Push notifications", "Touch-optimized"]
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Enterprise-grade security with end-to-end encryption and compliance certifications",
      benefits: ["256-bit encryption", "SOC 2 compliance", "GDPR ready", "Regular audits"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for individuals and small businesses",
      features: [
        "Up to 5 accounts",
        "100 receipts/month",
        "Basic analytics",
        "Email support",
        "Mobile apps",
        "Cloud backup"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Unlimited accounts",
        "500 receipts/month",
        "Advanced analytics",
        "Priority support",
        "Team collaboration",
        "Custom categories",
        "API access",
        "Advanced reporting"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description: "For large organizations with complex needs",
      features: [
        "Everything in Professional",
        "Unlimited receipts",
        "Custom integrations",
        "Dedicated support",
        "Advanced security",
        "Custom workflows",
        "White-label options",
        "SLA guarantee"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CFO",
      company: "TechStart Inc.",
      content: "AI Expense Tracker Pro reduced our expense processing time by 85%. The smart categorization saves us 10 hours per week.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Finance Director",
      company: "Global Solutions Ltd.",
      content: "The predictive analytics helped us identify $50K in unnecessary expenses. ROI was achieved in the first month.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Small Business Owner",
      company: "Creative Agency",
      content: "Finally, an expense tracker that actually understands my business. The AI categorization is incredibly accurate.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Active Users", icon: Users },
    { number: "99.5%", label: "Accuracy Rate", icon: Award },
    { number: "85%", label: "Time Saved", icon: Clock },
    { number: "4.9/5", label: "User Rating", icon: Star }
  ];

  return (
    <>
      <Helmet>
        <title>AI Expense Tracker Pro - Smart Financial Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered expense tracking with smart receipt scanning, predictive analytics, and intelligent categorization. Save 85% time on expense management. Starting at $29/month." />
        <meta name="keywords" content="AI expense tracker, receipt scanning, financial management, expense automation, budget tracking, OCR technology, expense analytics" />
        <meta property="og:title" content="AI Expense Tracker Pro - Smart Financial Management" />
        <meta property="og:description" content="Revolutionary AI-powered expense tracking with smart receipt scanning, predictive analytics, and intelligent categorization." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-expense-tracker-pro" />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Expense Tracker Pro - Smart Financial Management" />
        <meta name="twitter:description" content="Revolutionary AI-powered expense tracking with smart receipt scanning, predictive analytics, and intelligent categorization." />
        <link rel="canonical" href="https://ziontechgroup.com/ai-expense-tracker-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-8">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Financial Management
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                AI Expense Tracker
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Pro
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Revolutionize your expense management with AI-powered receipt scanning, 
                intelligent categorization, and predictive analytics. Save 85% time on 
                financial tracking while gaining unprecedented insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Demo
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-lg mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI technology transforms expense management from a tedious task 
                into an intelligent, automated process that saves time and money.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
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
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include our core AI features 
                with a 14-day free trial and no setup fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${plan.popular ? 'border-cyan-400 scale-105' : 'border-slate-700'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white transform hover:scale-105' 
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Finance Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how AI Expense Tracker Pro is transforming financial management 
                for businesses of all sizes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                      <div className="text-sm text-cyan-400">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Expense Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already saving time and money with AI Expense Tracker Pro.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </button>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center text-gray-300">
                  <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <Mail className="w-5 h-5 mr-2 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-2 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown, DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIExpenseTrackerPro;