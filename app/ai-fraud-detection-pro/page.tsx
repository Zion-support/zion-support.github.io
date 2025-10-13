import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Shield, Brain, Zap, Eye, Lock, AlertTriangle, BarChart3, Settings, Monitor, Smartphone, Laptop, Globe, Users, Clock, FileText, MessageSquare, Calendar, Mail, Phone, Sparkles, TrendingUp, Target, Award, Rocket, Cpu, Wifi, Battery, Video, Image, Music, Search, Filter, Download, Upload, Share, Bell, Heart, ThumbsUp } from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

export default function AIFraudDetectionPro() {
  const features = [
    {
      title: "Real-Time Fraud Detection",
      description: "Detect fraudulent activities in real-time with 99.9% accuracy using advanced machine learning algorithms",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Behavioral Analysis",
      description: "Analyze user behavior patterns to identify anomalies and suspicious activities across all touchpoints",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Transaction Monitoring",
      description: "Monitor all transactions in real-time with advanced pattern recognition and risk scoring",
      icon: <Eye className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Identity Verification",
      description: "Multi-factor identity verification with biometric authentication and document validation",
      icon: <Lock className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Risk Scoring",
      description: "Dynamic risk scoring system that adapts to new fraud patterns and threat intelligence",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Compliance & Reporting",
      description: "Automated compliance reporting for PCI DSS, GDPR, SOX, and other regulatory requirements",
      icon: <FileText className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const fraudTypes = [
    {
      title: "Payment Fraud",
      description: "Detect credit card fraud, chargebacks, and unauthorized transactions",
      icon: <CreditCard className="w-6 h-6" />,
      benefits: ["Reduce chargebacks by 85%", "Prevent unauthorized transactions", "Real-time payment monitoring", "PCI DSS compliant"]
    },
    {
      title: "Identity Theft",
      description: "Protect against identity theft and account takeover attacks",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Multi-factor authentication", "Biometric verification", "Document validation", "Behavioral analysis"]
    },
    {
      title: "Synthetic Identity",
      description: "Detect and prevent synthetic identity fraud and fake account creation",
      icon: <AlertTriangle className="w-6 h-6" />,
      benefits: ["Pattern recognition", "Data validation", "Cross-reference verification", "Machine learning detection"]
    },
    {
      title: "Money Laundering",
      description: "Combat money laundering and suspicious financial activities",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["Transaction monitoring", "Pattern analysis", "Regulatory reporting", "Risk assessment"]
    }
  ];

  const industries = [
    {
      name: "Financial Services",
      description: "Banks, credit unions, and fintech companies",
      icon: <Banknote className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "E-commerce",
      description: "Online retailers and marketplaces",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Healthcare",
      description: "Hospitals, clinics, and insurance providers",
      icon: <Heart className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Gaming & Entertainment",
      description: "Online gaming platforms and streaming services",
      icon: <Gamepad2 className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Insurance",
      description: "Property, auto, and life insurance companies",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500"
    },
    {
      name: "Government",
      description: "Public sector and government agencies",
      icon: <Globe className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10,000 transactions/month",
        "Basic fraud detection",
        "Email alerts",
        "Standard support",
        "Basic reporting",
        "API access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 100,000 transactions/month",
        "Advanced fraud detection",
        "Real-time alerts",
        "Priority support",
        "Advanced analytics & reporting",
        "Custom rules engine",
        "Multi-channel monitoring",
        "Compliance reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited transactions",
        "Full AI capabilities",
        "Custom model training",
        "24/7 dedicated support",
        "Custom analytics dashboard",
        "Advanced security features",
        "White-label options",
        "SLA guarantee",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Robert Chen",
      company: "FinTech Solutions",
      role: "Chief Security Officer",
      content: "Zion AI Fraud Detection Pro reduced our fraud losses by 92% in just 3 months. The real-time detection capabilities are outstanding and the false positive rate is incredibly low.",
      rating: 5,
      avatar: "RC"
    },
    {
      name: "Maria Garcia",
      company: "E-commerce Giant",
      role: "Risk Management Director",
      content: "Our chargeback rate dropped from 2.3% to 0.4% after implementing this solution. The behavioral analysis features help us catch sophisticated fraud attempts before they impact our business.",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "James Thompson",
      company: "Healthcare Insurance",
      role: "Compliance Officer",
      content: "The compliance reporting features are a game-changer. We can now generate all required reports automatically and stay ahead of regulatory requirements. HIPAA compliance is seamless.",
      rating: 5,
      avatar: "JT"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Fraud Detection Pro - Zion Tech Group | Advanced Fraud Prevention Solutions</title>
        <meta
          name="description"
          content="Protect your business with AI Fraud Detection Pro. Real-time fraud detection, behavioral analysis, and compliance reporting. 99.9% accuracy with advanced machine learning. Start your free trial today!"
        />
        <meta
          name="keywords"
          content="AI fraud detection, fraud prevention, risk management, payment fraud, identity theft, compliance, PCI DSS, GDPR, machine learning, behavioral analysis"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-fraud-detection-pro" />
      </Helmet>
      <SEOOptimizer
        title="AI Fraud Detection Pro - Zion Tech Group | Advanced Fraud Prevention Solutions"
        description="Protect your business with AI Fraud Detection Pro. Real-time fraud detection, behavioral analysis, and compliance reporting. 99.9% accuracy with advanced machine learning. Start your free trial today!"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 mb-6">
              <Shield className="w-4 h-4 text-red-400 mr-2" />
              <span className="text-red-400 text-sm font-medium">#1 Fraud Detection Platform 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400">
                AI Fraud Detection Pro
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Protect your business from fraud with our advanced AI-powered detection system. 
              Real-time monitoring, behavioral analysis, and compliance reporting with 99.9% accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-red-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Monitor className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-red-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 text-xs md:text-sm">Detection Accuracy</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-red-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">&lt;50ms</div>
                <div className="text-gray-300 text-xs md:text-sm">Response Time</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-red-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">92%</div>
                <div className="text-gray-300 text-xs md:text-sm">Fraud Reduction</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-red-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">25K+</div>
                <div className="text-gray-300 text-xs md:text-sm">Protected Businesses</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced Fraud Detection Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our AI Fraud Detection Pro combines cutting-edge machine learning with real-time monitoring 
                to provide comprehensive protection against all types of fraud.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-red-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fraud Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
                  Comprehensive Fraud Protection
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Protect against all types of fraud with our comprehensive detection and prevention system
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {fraudTypes.map((fraudType, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      {fraudType.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-red-300 transition-colors">
                      {fraudType.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {fraudType.description}
                  </p>
                  <div className="space-y-2">
                    {fraudType.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted Across Industries
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Fraud Detection Pro is used by leading companies across various industries
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${industry.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-red-300 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
                  Simple, Transparent Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core features with no hidden fees.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                    tier.popular
                      ? "border-red-500/50 shadow-2xl shadow-red-500/10"
                      : "border-white/20 hover:border-white/30"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-300 ml-2">{tier.period}</span>
                    </div>
                  </div>
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular
                        ? "bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 shadow-lg hover:shadow-red-500/25"
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our AI Fraud Detection Pro
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/30 to-pink-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Protect Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our AI Fraud Detection Pro to protect against fraud. 
              Start your free trial today - no credit card required.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-red-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-red-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-red-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-red-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}