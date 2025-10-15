import React from "react";
import { ArrowRight, CheckCircle, Star, Shield, AlertTriangle, Eye, Lock, Zap, Sparkles, Users, Award, Clock, DollarSign, Globe, Smartphone, Monitor, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play as PlayIcon, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../../components/SEOOptimizer";

export default function ZionAiCybersecurityMonitorPro() {
  const features = [
    "AI-powered threat detection and analysis",
    "Real-time security monitoring 24/7",
    "Automated incident response and remediation",
    "Advanced behavioral analytics and anomaly detection",
    "Zero-day vulnerability protection",
    "Compliance monitoring (GDPR, HIPAA, SOX, PCI-DSS)",
    "Multi-cloud and hybrid environment support",
    "Custom security policies and rules",
    "Threat intelligence and IOCs",
    "Security orchestration and automation",
    "Comprehensive reporting and dashboards",
    "API integration and webhook support"
  ];

  const benefits = [
    "Detect threats 99.9% faster than traditional methods",
    "Reduce security incidents by 95%",
    "Achieve 100% compliance with regulations",
    "Save 60% on security operations costs"
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$199",
      period: "month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 50 endpoints",
        "Basic threat detection",
        "Email alerts",
        "Standard compliance reports",
        "Email support",
        "Basic integrations",
        "30-day log retention"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "month",
      description: "Ideal for growing businesses and enterprises",
      features: [
        "Up to 500 endpoints",
        "Advanced AI threat detection",
        "Real-time alerts & notifications",
        "Advanced compliance monitoring",
        "Priority support",
        "100+ integrations",
        "Custom security policies",
        "90-day log retention",
        "Incident response automation"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "month",
      description: "For large organizations with complex security needs",
      features: [
        "Unlimited endpoints",
        "Full AI security suite",
        "Custom alerting & notifications",
        "Complete compliance suite",
        "24/7 dedicated support",
        "Unlimited integrations",
        "Custom AI models",
        "Unlimited log retention",
        "Full incident response automation",
        "White-label options",
        "API access",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Robert Chen",
      company: "Financial Services",
      role: "CISO",
      content: "Zion AI Cybersecurity Monitor Pro has revolutionized our security posture. We've detected and prevented 99% of threats before they could cause damage.",
      rating: 5,
      avatar: "RC"
    },
    {
      name: "Maria Garcia",
      company: "Healthcare Provider",
      role: "Security Director",
      content: "The AI-powered threat detection is incredibly accurate. We've reduced false positives by 90% while catching real threats we would have missed.",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "Alex Thompson",
      company: "E-commerce Platform",
      role: "CTO",
      content: "This tool has given us peace of mind. The automated incident response has saved us countless hours and prevented potential breaches.",
      rating: 5,
      avatar: "AT"
    }
  ];

  const securityCapabilities = [
    {
      title: "AI Threat Detection",
      description: "Advanced machine learning algorithms detect known and unknown threats in real-time",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Behavioral Analytics",
      description: "Monitor user and system behavior to identify anomalies and potential security risks",
      icon: <Eye className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Incident Response",
      description: "Automated response to security incidents with customizable playbooks and workflows",
      icon: <AlertTriangle className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Compliance Monitoring",
      description: "Continuous monitoring and reporting for GDPR, HIPAA, SOX, PCI-DSS, and other regulations",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Vulnerability Management",
      description: "Automated vulnerability scanning, assessment, and remediation recommendations",
      icon: <Lock className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Threat Intelligence",
      description: "Real-time threat intelligence feeds and indicators of compromise (IOCs)",
      icon: <Activity className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const complianceFrameworks = [
    { name: "GDPR", description: "General Data Protection Regulation" },
    { name: "HIPAA", description: "Health Insurance Portability and Accountability Act" },
    { name: "SOX", description: "Sarbanes-Oxley Act" },
    { name: "PCI-DSS", description: "Payment Card Industry Data Security Standard" },
    { name: "ISO 27001", description: "Information Security Management System" },
    { name: "NIST", description: "National Institute of Standards and Technology" },
    { name: "SOC 2", description: "Service Organization Control 2" },
    { name: "CIS", description: "Center for Internet Security Controls" }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Cybersecurity Monitor Pro - AI-Powered Security Monitoring | Zion Tech Group</title>
        <meta
          name="description"
          content="Advanced AI-powered cybersecurity monitoring platform. Real-time threat detection, automated incident response, and compliance monitoring. Protect your business 24/7 with AI."
        />
        <meta
          name="keywords"
          content="AI cybersecurity, security monitoring, threat detection, incident response, compliance monitoring, security automation, cyber defense, security analytics"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-cybersecurity-monitor-pro" />
      </Helmet>
      <SEOOptimizer
        title="Zion AI Cybersecurity Monitor Pro - AI-Powered Security Monitoring | Zion Tech Group"
        description="Advanced AI-powered cybersecurity monitoring platform. Real-time threat detection, automated incident response, and compliance monitoring. Protect your business 24/7 with AI."
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
              <Shield className="w-4 h-4 text-red-400 mr-2" />
              <span className="text-red-400 text-sm font-medium">AI-Powered Security Monitoring</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
                Zion AI Cybersecurity Monitor Pro
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
              Advanced AI-powered cybersecurity monitoring platform. Detect threats in real-time, 
              automate incident response, and ensure compliance with industry regulations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-red-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Video className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 text-xs md:text-sm">Threat Detection</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">15,000+</div>
                <div className="text-gray-300 text-xs md:text-sm">Protected Organizations</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-gray-300 text-xs md:text-sm">Incident Reduction</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300 text-xs md:text-sm">AI Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced Security Monitoring Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive AI-powered cybersecurity monitoring with real-time threat detection, 
                automated response, and compliance management.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-red-300 transition-colors">
                      {feature}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Powered Security Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to protect your organization from evolving cyber threats.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityCapabilities.map((capability, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${capability.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-300 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Compliance & Regulatory Support
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet industry compliance requirements with automated monitoring and reporting.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {complianceFrameworks.map((framework, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 text-center"
                >
                  <div className="text-2xl mb-2">🛡️</div>
                  <div className="text-sm font-medium text-white group-hover:text-red-300 transition-colors">
                    {framework.name}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {framework.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Security Plans for Every Organization
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security plan that fits your organization's needs and budget.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular
                      ? 'border-red-500/50 shadow-red-500/25'
                      : 'border-white/20 hover:border-white/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600'
                        : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900'
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
                Trusted by Security Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what security experts say about Zion AI Cybersecurity Monitor Pro
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
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/30 to-orange-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Protect Your Business with AI-Powered Security
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of organizations who trust our AI-powered cybersecurity monitoring 
              to protect their digital assets and ensure compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-red-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Pricing
                <DollarSign className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-red-400 hover:text-red-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-red-400 hover:text-red-300">+1 302 464 0950</a></p>
              <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}