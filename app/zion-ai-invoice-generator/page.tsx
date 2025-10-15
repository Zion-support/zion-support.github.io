import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Zap, Star, ArrowRight, CheckCircle, Users, Award, Clock, Sparkles, Calculator, CreditCard, Shield, Download, Send, Edit, Eye, BarChart3, TrendingUp, DollarSign, Receipt, Building, Globe, Smartphone, Monitor, Headphones, Mic, Target, Rocket, Crown, Diamond, Calendar, Mail, Phone, MapPin } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAIInvoiceGeneratorPage = () => {
  const features = [
    {
      title: "AI-Powered Invoice Creation",
      description: "Generate professional invoices automatically from project data and client information",
      icon: <FileText className="w-6 h-6" />,
      benefits: ["Auto-populate fields", "Smart categorization", "Professional templates"]
    },
    {
      title: "Automated Payment Tracking",
      description: "Track payments, send reminders, and manage overdue invoices automatically",
      icon: <CreditCard className="w-6 h-6" />,
      benefits: ["Payment reminders", "Overdue tracking", "Payment analytics"]
    },
    {
      title: "Multi-Currency Support",
      description: "Create invoices in any currency with real-time exchange rate conversion",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["150+ currencies", "Real-time rates", "Tax calculations"]
    },
    {
      title: "Client Portal Integration",
      description: "Provide clients with secure access to view and pay invoices online",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Secure access", "Online payments", "Document history"]
    },
    {
      title: "Expense Management",
      description: "Track and categorize business expenses with AI-powered categorization",
      icon: <Calculator className="w-6 h-6" />,
      benefits: ["Auto-categorization", "Receipt scanning", "Tax preparation"]
    },
    {
      title: "Advanced Analytics",
      description: "Get insights into your business performance with detailed financial reports",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Revenue tracking", "Client analysis", "Cash flow reports"]
    }
  ];

  const pricingPlans = [
    {
      name: "Solo",
      price: "$19",
      period: "/month",
      description: "Perfect for freelancers and solo entrepreneurs",
      features: [
        "50 invoices per month",
        "Basic templates",
        "Payment tracking",
        "Email support",
        "PDF export",
        "Basic analytics"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Business",
      price: "$49",
      period: "/month",
      description: "Ideal for small businesses and agencies",
      features: [
        "200 invoices per month",
        "Premium templates",
        "Automated reminders",
        "Multi-currency support",
        "Client portal",
        "Advanced analytics",
        "API access",
        "Priority support"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large teams and growing companies",
      features: [
        "Unlimited invoices",
        "Custom templates",
        "White-label options",
        "Advanced integrations",
        "Team collaboration",
        "Custom reporting",
        "Dedicated support",
        "SLA guarantee"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "Freelance Designer",
      role: "Creative Director",
      content: "Zion AI Invoice Generator has streamlined my entire billing process. I can create professional invoices in seconds and track payments effortlessly.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Martinez",
      company: "Marketing Agency",
      role: "Operations Manager",
      content: "The automated payment reminders and client portal have reduced our overdue invoices by 60%. Our cash flow has never been better.",
      rating: 5,
      avatar: "LM"
    },
    {
      name: "James Wilson",
      company: "Consulting Firm",
      role: "Managing Partner",
      content: "The multi-currency support and advanced analytics have been game-changers for our international clients. Highly recommended!",
      rating: 5,
      avatar: "JW"
    }
  ];

  const useCases = [
    {
      title: "Freelancers",
      description: "Streamline billing and payment collection for independent professionals",
      icon: <Users className="w-8 h-8" />,
      examples: ["Project billing", "Hourly tracking", "Expense management"]
    },
    {
      title: "Small Businesses",
      description: "Professional invoicing and financial management for growing companies",
      icon: <Building className="w-8 h-8" />,
      examples: ["Recurring billing", "Client management", "Financial reporting"]
    },
    {
      title: "Agencies",
      description: "Manage multiple clients and projects with advanced billing features",
      icon: <Target className="w-8 h-8" />,
      examples: ["Multi-client billing", "Project tracking", "Team collaboration"]
    },
    {
      title: "E-commerce",
      description: "Automated invoicing for online businesses and subscription services",
      icon: <Globe className="w-8 h-8" />,
      examples: ["Subscription billing", "Tax calculations", "International payments"]
    }
  ];

  const integrations = [
    { name: "QuickBooks", logo: "QB", description: "Sync invoices and payments" },
    { name: "Xero", logo: "XO", description: "Real-time accounting integration" },
    { name: "Stripe", logo: "SP", description: "Secure payment processing" },
    { name: "PayPal", logo: "PP", description: "Global payment acceptance" },
    { name: "FreshBooks", logo: "FB", description: "Complete accounting solution" },
    { name: "Wave", logo: "WV", description: "Free accounting software" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion AI Invoice Generator - Automated Invoicing & Payment Management | Zion Tech Group"
        description="Streamline your billing process with AI-powered invoice generation, automated payment tracking, and client portal integration. Create professional invoices in seconds and get paid faster. Start free trial!"
        keywords="AI invoice generator, automated invoicing, payment tracking, invoice management, billing software, financial management, client portal, payment reminders"
        canonical="https://ziontechgroup.com/zion-ai-invoice-generator"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden cyber-grid-enhanced quantum-dots">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-8 neon-border">
            <FileText className="w-5 h-5 text-green-400 mr-2 animate-pulse" />
            <span className="text-green-400 text-sm font-medium">#1 AI Invoice Generator 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight holographic-text">
            Zion AI Invoice Generator
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your billing process with AI-powered invoice generation and automated payment management. 
            <span className="text-green-400 font-semibold"> Get paid faster with professional invoices created in seconds.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<FileText className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group data-stream">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                <FileText className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">2M+</div>
              <div className="text-gray-300 text-xs md:text-sm">Invoices Generated</div>
            </div>
            <div className="text-center group data-stream">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">85%</div>
              <div className="text-gray-300 text-xs md:text-sm">Faster Payments</div>
            </div>
            <div className="text-center group data-stream">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">25K+</div>
              <div className="text-gray-300 text-xs md:text-sm">Active Users</div>
            </div>
            <div className="text-center group data-stream">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                <Award className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">4.8/5</div>
              <div className="text-gray-300 text-xs md:text-sm">User Rating</div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Invoice Management Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to create, send, and track invoices with AI-powered automation and intelligent financial management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50 cyber-grid-enhanced">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 holographic-text">
              Perfect for Every Business Type
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From freelancers to enterprise companies, our AI invoice generator adapts to your billing needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 relative overflow-hidden neon-border">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {useCase.description}
                </p>
                <div className="space-y-1">
                  {useCase.examples.map((example, idx) => (
                    <div key={idx} className="text-xs text-green-300">
                      • {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Connect with your favorite tools and services for a complete financial management solution.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <span className="font-bold text-sm">{integration.logo}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {integration.name}
                </h3>
                <p className="text-gray-300 text-sm">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose the plan that fits your business needs. All plans include our core AI features and 24/7 support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-green-500/50 shadow-green-500/20 scale-105' 
                  : 'border-white/20 hover:border-green-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Crown className="w-4 h-4" />
                      <span>Most Popular</span>
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <FuturisticButton
                  href={plan.name === 'Enterprise' ? '/contact' : '#signup'}
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-green-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our users say about Zion AI Invoice Generator
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 relative overflow-hidden">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Streamline Your Billing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses who are already using Zion AI Invoice Generator to get paid faster and manage their finances better.
            <span className="text-green-400 font-semibold"> Start your free trial today - no credit card required.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="#signup"
              variant="primary"
              size="lg"
              icon={<Rocket className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/contact"
              variant="outline"
              size="lg"
              icon={<Headphones className="w-5 h-5" />}
            >
              Contact Sales
            </FuturisticButton>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAIInvoiceGeneratorPage;