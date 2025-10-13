import { ArrowRight, FileText, Zap, CheckCircle, Star, Brain, DollarSign, Clock, Shield, Users, TrendingUp, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAiInvoiceGenerator() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Invoice Generation",
      description: "Automatically generate professional invoices using AI that learns from your business patterns and client preferences"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Automation",
      description: "Set up recurring invoices, payment reminders, and automated follow-ups to reduce manual work by 90%"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Compliant",
      description: "Bank-level security with GDPR compliance, digital signatures, and encrypted data storage"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Track payment patterns, predict late payments, and optimize your cash flow with AI insights"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Multi-Currency Support",
      description: "Generate invoices in 150+ currencies with real-time exchange rates and automatic tax calculations"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client Portal",
      description: "Professional client portal for invoice viewing, payment processing, and communication"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$19",
      period: "/month",
      description: "Perfect for freelancers and small businesses",
      features: [
        "Up to 50 invoices/month",
        "Basic AI templates",
        "Email delivery",
        "Payment tracking",
        "Basic analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Unlimited invoices",
        "Advanced AI customization",
        "Multi-currency support",
        "Recurring invoices",
        "Advanced analytics",
        "Client portal",
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
        "Custom branding",
        "White-label solution",
        "Advanced integrations",
        "Dedicated account manager",
        "Custom reporting",
        "SSO integration",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Martinez",
      company: "Creative Agency",
      role: "Owner",
      content: "Zion AI Invoice Generator saved me 10 hours per week. The AI learns my clients' preferences and generates perfect invoices automatically.",
      rating: 5
    },
    {
      name: "David Kim",
      company: "Consulting Firm",
      role: "CFO",
      content: "The payment prediction feature is incredible. We've reduced late payments by 60% using their AI insights.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      company: "E-commerce Store",
      role: "Operations Manager",
      content: "Professional invoices that our clients love. The multi-currency support made international sales so much easier.",
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Increase Revenue",
      description: "Get paid 40% faster with automated follow-ups and professional invoices"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save Time",
      description: "Reduce invoice creation time from 30 minutes to 2 minutes per invoice"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Better Cash Flow",
      description: "AI-powered insights help optimize payment terms and reduce late payments"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Invoice Generator - Smart Invoice Automation | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your invoicing with Zion AI Invoice Generator. AI-powered invoice creation, automated follow-ups, multi-currency support, and advanced analytics. Start free trial today."
        />
        <meta
          name="keywords"
          content="AI invoice generator, automated invoicing, smart invoices, payment automation, invoice software, billing automation, AI invoicing"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Star className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">#1 AI Invoice Generator 2024</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Zion AI Invoice Generator
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your invoicing process with AI-powered automation. Generate professional invoices, 
              automate follow-ups, and get paid faster with intelligent payment insights.
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
                <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">Faster Payments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">90%</div>
                <div className="text-gray-300">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">150+</div>
                <div className="text-gray-300">Currencies</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion AI Invoice Generator?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of invoicing with AI-powered automation and intelligent insights.
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features for Modern Invoicing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to streamline your invoicing process and get paid faster.
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
                Choose the plan that fits your business needs. All plans include 14-day free trial.
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
                Trusted by Businesses Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Zion AI Invoice Generator
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
              Ready to Transform Your Invoicing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using Zion AI Invoice Generator to get paid faster and save time.
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