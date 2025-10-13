import React from "react";
import { ArrowRight, CheckCircle, Star, Shield, AlertTriangle, Eye, Zap, Brain, Target, Users, BarChart3, Settings, Smartphone, Laptop, Monitor, Sparkles, Award, TrendingUp, DollarSign, Clock, Globe, Mail, Phone, MapPin, Lock, Unlock, Search, Filter, Activity, TrendingDown, AlertCircle, CheckCircle2, XCircle, Info, HelpCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function ZionAIFraudDetectionPro() {
  const features = [
    "Real-time Fraud Detection",
    "Machine Learning Models",
    "Behavioral Analysis",
    "Transaction Monitoring",
    "Risk Scoring & Assessment",
    "Pattern Recognition",
    "False Positive Reduction",
    "Compliance Reporting",
    "API Integration",
    "Custom Rule Engine",
    "Multi-channel Monitoring",
    "Automated Alerts"
  ];

  const benefits = [
    "Detect fraud with 99.5% accuracy",
    "Reduce false positives by 80%",
    "Protect against new fraud types",
    "Ensure regulatory compliance",
    "Save millions in fraud losses",
    "Real-time protection 24/7"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      originalPrice: "$399",
      period: "month",
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
      price: "$399",
      originalPrice: "$799",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 100,000 transactions/month",
        "Advanced ML models",
        "Real-time alerts",
        "Priority support",
        "Advanced analytics",
        "Custom rules engine",
        "Multi-channel monitoring",
        "Compliance reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      originalPrice: "$1,599",
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited transactions",
        "Premium AI capabilities",
        "Custom model training",
        "24/7 dedicated support",
        "Custom analytics dashboard",
        "White-label solutions",
        "SLA guarantee",
        "Custom integrations",
        "On-premise deployment",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const fraudTypes = [
    {
      title: "Credit Card Fraud",
      description: "Detect unauthorized credit card transactions and stolen card usage with advanced pattern recognition",
      icon: <Target className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      accuracy: "99.7%"
    },
    {
      title: "Identity Theft",
      description: "Identify suspicious account activities and prevent identity theft with behavioral analysis",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      accuracy: "99.5%"
    },
    {
      title: "Account Takeover",
      description: "Detect unauthorized account access and prevent account takeover attacks in real-time",
      icon: <Lock className="w-8 h-8" />,
      color: "from-orange-500 to-amber-500",
      accuracy: "99.8%"
    },
    {
      title: "Payment Fraud",
      description: "Monitor payment transactions and detect fraudulent payment patterns across all channels",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      accuracy: "99.6%"
    },
    {
      title: "Synthetic Identity",
      description: "Identify synthetic identities and fake accounts created for fraudulent purposes",
      icon: <Eye className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      accuracy: "99.4%"
    },
    {
      title: "Money Laundering",
      description: "Detect suspicious money laundering activities and comply with AML regulations",
      icon: <Activity className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      accuracy: "99.3%"
    }
  ];

  const industries = [
    {
      title: "Banking & Finance",
      description: "Protect financial institutions from fraud with advanced transaction monitoring and risk assessment",
      icon: <DollarSign className="w-6 h-6" />,
      savings: "$2.5M+"
    },
    {
      title: "E-commerce",
      description: "Secure online transactions and prevent fraudulent purchases with real-time fraud detection",
      icon: <Target className="w-6 h-6" />,
      savings: "$1.8M+"
    },
    {
      title: "Insurance",
      description: "Detect fraudulent insurance claims and prevent false claims with AI-powered analysis",
      icon: <Shield className="w-6 h-6" />,
      savings: "$3.2M+"
    },
    {
      title: "Healthcare",
      description: "Protect healthcare organizations from billing fraud and identity theft",
      icon: <Activity className="w-6 h-6" />,
      savings: "$1.5M+"
    }
  ];

  const testimonials = [
    {
      name: "David Chen",
      company: "Global Finance Corp",
      role: "Chief Risk Officer",
      content: "Zion AI Fraud Detection Pro has saved us over $5 million in fraud losses. The accuracy is incredible and false positives are minimal.",
      rating: 5,
      avatar: "DC"
    },
    {
      name: "Sarah Johnson",
      company: "E-commerce Plus",
      role: "Security Director",
      content: "Since implementing this system, our fraud losses dropped by 95%. The real-time detection is exactly what we needed.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Rodriguez",
      company: "SecureBank",
      role: "Head of Security",
      content: "The machine learning models are constantly improving. We've seen a 99.5% fraud detection rate with minimal false positives.",
      rating: 5,
      avatar: "MR"
    }
  ];

  const stats = [
    { number: "99.5%", label: "Detection Accuracy", icon: <Shield className="w-6 h-6" /> },
    { number: "80%", label: "False Positive Reduction", icon: <TrendingDown className="w-6 h-6" /> },
    { number: "24/7", label: "Real-time Monitoring", icon: <Clock className="w-6 h-6" /> },
    { number: "$50M+", label: "Fraud Prevented", icon: <DollarSign className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Fraud Detection Pro - Advanced Fraud Prevention | Zion Tech Group</title>
        <meta
          name="description"
          content="Protect your business with Zion AI Fraud Detection Pro. Advanced AI fraud prevention with 99.5% accuracy, real-time monitoring, and machine learning. Start your free trial today!"
        />
        <meta
          name="keywords"
          content="fraud detection, fraud prevention, AI fraud protection, machine learning fraud, real-time fraud monitoring, fraud analytics, risk assessment, compliance"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-fraud-detection-pro" />
      </Helmet>
      <SEOOptimizer
        title="Zion AI Fraud Detection Pro - Advanced Fraud Prevention | Zion Tech Group"
        description="Protect your business with Zion AI Fraud Detection Pro. Advanced AI fraud prevention with 99.5% accuracy, real-time monitoring, and machine learning. Start your free trial today!"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">#1 Fraud Detection Platform 2024</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Zion AI Fraud Detection Pro
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Advanced AI fraud prevention with 99.5% accuracy, real-time monitoring, and machine learning. 
                Protect your business from fraud with intelligent detection and prevention.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Watch Demo
                  <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Fraud Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Detect All Types of Fraud
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Advanced AI models trained to detect and prevent various types of fraud with industry-leading accuracy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fraudTypes.map((fraud, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${fraud.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">{fraud.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {fraud.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      {fraud.description}
                    </p>
                    <div className="text-2xl font-bold text-cyan-400">
                      {fraud.accuracy}
                    </div>
                    <div className="text-xs text-gray-400">Detection Accuracy</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Fraud Detection Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive fraud prevention capabilities powered by cutting-edge AI and machine learning.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how different industries are protecting their businesses with our fraud detection solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{industry.icon}</div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      {industry.description}
                    </p>
                    <div className="text-xl font-bold text-green-400">
                      {industry.savings}
                    </div>
                    <div className="text-xs text-gray-400">Average Savings</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business. All plans include a 14-day free trial with no credit card required.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? "border-cyan-500/50 shadow-cyan-500/25" 
                      : "border-white/10 hover:border-white/20"
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
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 line-through">${plan.originalPrice}</span>
                      <span className="text-gray-300">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 shadow-lg hover:shadow-cyan-500/25"
                        : "border border-white/20 text-white hover:bg-white/10"
                    }`}
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion AI Fraud Detection Pro?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Protect your business with intelligent fraud detection that delivers measurable results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center">
                    <TrendingUp className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-white font-medium">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of satisfied customers who trust our fraud detection solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Protect Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Start your free 14-day trial today. No credit card required. Experience the power of AI fraud detection.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
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