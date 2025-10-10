'use client';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FileText, 
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
  Clock,
  Shield,
  Smartphone,
  Globe,
  Users,
  Award,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  Receipt,
  Settings,
  Bot,
  Palette,
  Send,
  Eye,
  Edit,
  Trash2,
  Copy,
  Share2,
  Lock,
  TrendingUp,
  PieChart
} from 'lucide-react';

const AIInvoiceGeneratorPro: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    document.title = 'AI Invoice Generator Pro - Automated Invoice Creation | Zion Tech Group';
  }, []);

  const features = [
    {
      icon: FileText,
      title: "AI-Powered Invoice Creation",
      description: "Generate professional invoices in seconds using AI that understands your business context and client needs",
      benefits: ["Instant generation", "Smart templates", "Brand customization", "Multi-language support"]
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Set up automated invoice generation based on project milestones, time tracking, or recurring schedules",
      benefits: ["Time-based triggers", "Project milestones", "Recurring billing", "Smart reminders"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track payment patterns, client behavior, and revenue insights with comprehensive reporting",
      benefits: ["Payment analytics", "Client insights", "Revenue forecasting", "Custom reports"]
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Bank-level security with tax compliance features and automated record keeping",
      benefits: ["256-bit encryption", "Tax compliance", "Audit trails", "GDPR ready"]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Create, send, and track invoices from anywhere with our intuitive mobile interface",
      benefits: ["Mobile apps", "Offline access", "Push notifications", "Touch-optimized"]
    },
    {
      icon: Globe,
      title: "Multi-Currency Support",
      description: "Handle international clients with automatic currency conversion and tax calculations",
      benefits: ["150+ currencies", "Auto conversion", "Tax calculations", "Regional compliance"]
    }
  ];

  const pricingPlans = [
    {
      name: "Solo",
      price: "$19",
      period: "per month",
      description: "Perfect for freelancers and solo entrepreneurs",
      features: [
        "Up to 50 invoices/month",
        "Basic templates",
        "Email delivery",
        "Mobile app",
        "Basic analytics",
        "Email support"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Business",
      price: "$49",
      period: "per month",
      description: "Ideal for small to medium businesses",
      features: [
        "Unlimited invoices",
        "Advanced templates",
        "Multi-currency support",
        "Team collaboration",
        "Advanced analytics",
        "API access",
        "Priority support",
        "Custom branding"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "per month",
      description: "For large organizations with complex needs",
      features: [
        "Everything in Business",
        "Custom workflows",
        "White-label solution",
        "Dedicated support",
        "Advanced security",
        "Custom integrations",
        "SLA guarantee",
        "Training & onboarding"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "David Martinez",
      role: "Freelance Designer",
      company: "Creative Studio",
      content: "AI Invoice Generator Pro cut my invoicing time from 2 hours to 10 minutes. The AI suggestions are incredibly accurate.",
      rating: 5,
      avatar: "DM"
    },
    {
      name: "Lisa Thompson",
      role: "Accounting Manager",
      company: "TechCorp Solutions",
      content: "The automated workflows saved us 20 hours per week. Our payment collection rate increased by 35%.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "James Wilson",
      role: "Consultant",
      company: "Wilson Consulting",
      content: "The multi-currency support is perfect for my international clients. Professional invoices every time.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const stats = [
    { number: "25,000+", label: "Invoices Generated", icon: FileText },
    { number: "98%", label: "Payment Rate", icon: TrendingUp },
    { number: "90%", label: "Time Saved", icon: Clock },
    { number: "4.8/5", label: "User Rating", icon: Star }
  ];

  const templates = [
    {
      name: "Professional Services",
      category: "Consulting",
      features: ["Time tracking", "Project billing", "Expense tracking", "Client portal"]
    },
    {
      name: "E-commerce",
      category: "Retail",
      features: ["Product catalog", "Tax calculations", "Shipping costs", "Inventory sync"]
    },
    {
      name: "Creative Agency",
      category: "Marketing",
      features: ["Project milestones", "Asset tracking", "Client approval", "Brand guidelines"]
    },
    {
      name: "SaaS Subscription",
      category: "Technology",
      features: ["Recurring billing", "Usage tracking", "Tiered pricing", "Auto-renewal"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Invoice Generator Pro - Automated Invoice Creation | Zion Tech Group</title>
        <meta name="description" content="Create professional invoices in seconds with AI-powered automation. Features smart templates, multi-currency support, and automated workflows. Starting at $19/month." />
        <meta name="keywords" content="AI invoice generator, automated invoicing, invoice templates, billing software, invoice automation, professional invoices" />
        <meta property="og:title" content="AI Invoice Generator Pro - Automated Invoice Creation" />
        <meta property="og:description" content="Create professional invoices in seconds with AI-powered automation. Features smart templates, multi-currency support, and automated workflows." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-invoice-generator-pro" />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Invoice Generator Pro - Automated Invoice Creation" />
        <meta name="twitter:description" content="Create professional invoices in seconds with AI-powered automation. Features smart templates, multi-currency support, and automated workflows." />
        <link rel="canonical" href="https://ziontechgroup.com/ai-invoice-generator-pro" />
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
                AI-Powered Invoice Automation
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                AI Invoice Generator
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Pro
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Create professional invoices in seconds with AI-powered automation. 
                Smart templates, multi-currency support, and automated workflows 
                that save you 90% time on billing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  View Demo
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
                Our AI technology transforms invoice creation from a time-consuming task 
                into an intelligent, automated process that boosts your cash flow.
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

        {/* Templates Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Smart Invoice Templates
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from AI-optimized templates designed for different industries 
                and business types. Each template adapts to your specific needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {templates.map((template, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{template.name}</h3>
                    <p className="text-sm text-cyan-400">{template.category}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {template.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core AI features 
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
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Business Owners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how AI Invoice Generator Pro is transforming billing processes 
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
              Ready to Streamline Your Invoicing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already saving time and getting paid faster with AI Invoice Generator Pro.
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

export default AIInvoiceGeneratorPro;