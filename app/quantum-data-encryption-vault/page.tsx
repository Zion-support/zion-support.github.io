import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Lock, Key, Eye, EyeOff, Database, Cloud, Zap, CheckCircle, Star, Award, Rocket, Sparkles, Brain, Globe, Users, Settings, BarChart3, TrendingUp, AlertTriangle, ShieldCheck, FileText, Download, Upload, Share, Bell, Heart, ThumbsUp, MessageSquare, Calendar, Clock, Target, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, Wifi, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Calendar as CalendarIcon, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, CalendarOganesson, Package, Receipt, ClipboardList, Workflow, ArrowRight, Mail, Phone, Globe } from 'lucide-react';

const QuantumDataEncryptionVaultPage = () => {
  const features = [
    {
      title: "Quantum Encryption",
      description: "Unbreakable quantum key distribution using quantum mechanics principles for ultimate data security",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Quantum key distribution", "Unbreakable encryption", "Future-proof security", "Zero-knowledge architecture"]
    },
    {
      title: "Zero-Knowledge Architecture",
      description: "Complete privacy protection where even we cannot access your encrypted data",
      icon: <EyeOff className="w-8 h-8" />,
      benefits: ["End-to-end encryption", "Zero-knowledge proof", "Client-side encryption", "Privacy by design"]
    },
    {
      title: "Data Sovereignty",
      description: "Full control over your data location and compliance with international data protection regulations",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Geographic data control", "GDPR compliance", "CCPA compliance", "Custom data residency"]
    },
    {
      title: "Quantum-Safe Algorithms",
      description: "Advanced cryptographic algorithms resistant to both classical and quantum computing attacks",
      icon: <Key className="w-8 h-8" />,
      benefits: ["Post-quantum cryptography", "Lattice-based encryption", "Code-based cryptography", "Multivariate cryptography"]
    },
    {
      title: "Real-time Monitoring",
      description: "24/7 security monitoring with quantum threat detection and instant incident response",
      icon: <Activity className="w-8 h-8" />,
      benefits: ["Quantum threat detection", "Real-time alerts", "Automated response", "Security analytics"]
    },
    {
      title: "Compliance Ready",
      description: "Built-in compliance with SOC 2, ISO 27001, HIPAA, and other industry standards",
      icon: <Award className="w-8 h-8" />,
      benefits: ["SOC 2 Type II", "ISO 27001", "HIPAA compliance", "Custom compliance"]
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$599",
      period: "per month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 1TB storage",
        "Quantum encryption",
        "Zero-knowledge architecture",
        "Basic monitoring",
        "Email support",
        "Standard compliance"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,199",
      period: "per month",
      description: "Ideal for growing enterprises and mid-size companies",
      features: [
        "Up to 10TB storage",
        "Advanced quantum encryption",
        "Full zero-knowledge architecture",
        "Real-time monitoring",
        "Priority support",
        "Advanced compliance",
        "API access",
        "Custom data residency"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "per month",
      description: "Complete solution for large organizations and government agencies",
      features: [
        "Unlimited storage",
        "Premium quantum encryption",
        "Full zero-knowledge architecture",
        "24/7 monitoring & response",
        "Dedicated support team",
        "Full compliance suite",
        "Custom integrations",
        "On-premise deployment",
        "Custom algorithms",
        "White-label options"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Michael Torres",
      company: "SecureData Corp",
      role: "Chief Security Officer",
      content: "The Quantum Data Encryption Vault has given us the highest level of security possible. The quantum encryption is truly unbreakable, and the zero-knowledge architecture ensures complete privacy.",
      rating: 5,
      avatar: "MT"
    },
    {
      name: "Sarah Kim",
      company: "Global Finance Group",
      role: "Data Protection Officer",
      content: "Compliance has never been easier. The built-in compliance features automatically ensure we meet all regulatory requirements, and the quantum-safe algorithms future-proof our data security.",
      rating: 5,
      avatar: "SK"
    },
    {
      name: "Dr. James Wilson",
      company: "MedTech Solutions",
      role: "Chief Technology Officer",
      content: "As a healthcare company, data security is paramount. The Quantum Vault provides the level of protection we need for sensitive patient data while maintaining full compliance with HIPAA.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const securityFeatures = [
    {
      title: "Quantum Key Distribution",
      description: "Generate and distribute encryption keys using quantum mechanics principles",
      icon: <Key className="w-6 h-6" />,
      details: ["BB84 protocol", "Quantum entanglement", "Heisenberg uncertainty", "Perfect secrecy"]
    },
    {
      title: "Post-Quantum Cryptography",
      description: "Advanced algorithms resistant to quantum computing attacks",
      icon: <Shield className="w-6 h-6" />,
      details: ["Lattice-based encryption", "Code-based cryptography", "Multivariate schemes", "Hash-based signatures"]
    },
    {
      title: "Homomorphic Encryption",
      description: "Process encrypted data without decrypting it",
      icon: <Database className="w-6 h-6" />,
      details: ["Fully homomorphic encryption", "Secure computation", "Privacy-preserving analytics", "Encrypted search"]
    },
    {
      title: "Multi-Factor Authentication",
      description: "Advanced authentication using biometrics and quantum tokens",
      icon: <Lock className="w-6 h-6" />,
      details: ["Biometric authentication", "Quantum tokens", "Hardware security modules", "Behavioral analysis"]
    },
    {
      title: "Threat Intelligence",
      description: "AI-powered threat detection and quantum attack prevention",
      icon: <Brain className="w-6 h-6" />,
      details: ["Quantum threat detection", "AI-powered analysis", "Predictive security", "Automated response"]
    },
    {
      title: "Audit & Compliance",
      description: "Comprehensive audit trails and compliance reporting",
      icon: <FileText className="w-6 h-6" />,
      details: ["Immutable audit logs", "Compliance reporting", "Regulatory mapping", "Risk assessment"]
    }
  ];

  const complianceStandards = [
    { name: "SOC 2 Type II", status: "Certified", icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "ISO 27001", status: "Certified", icon: <Award className="w-5 h-5" /> },
    { name: "HIPAA", status: "Compliant", icon: <Heart className="w-5 h-5" /> },
    { name: "GDPR", status: "Compliant", icon: <Globe className="w-5 h-5" /> },
    { name: "CCPA", status: "Compliant", icon: <Eye className="w-5 h-5" /> },
    { name: "PCI DSS", status: "Compliant", icon: <CreditCard className="w-5 h-5" /> },
    { name: "FISMA", status: "Compliant", icon: <Shield className="w-5 h-5" /> },
    { name: "FedRAMP", status: "In Progress", icon: <Rocket className="w-5 h-5" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Quantum Data Encryption Vault - Zion Tech Group | Unbreakable Security</title>
        <meta
          name="description"
          content="Revolutionary quantum-powered data encryption vault with zero-knowledge architecture. Unbreakable security for sensitive data with quantum key distribution and post-quantum cryptography."
        />
        <meta
          name="keywords"
          content="quantum encryption, data vault, zero-knowledge architecture, post-quantum cryptography, quantum key distribution, data sovereignty, compliance, security"
        />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-data-encryption-vault" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Unbreakable Quantum Security</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Quantum Data
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Encryption Vault
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The world's most secure data encryption solution using quantum mechanics principles. 
              Protect your most sensitive data with unbreakable quantum encryption and zero-knowledge architecture.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-300 text-xs md:text-sm">Quantum Secure</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <EyeOff className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">Zero</div>
                <div className="text-gray-300 text-xs md:text-sm">Knowledge Access</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">8+</div>
                <div className="text-gray-300 text-xs md:text-sm">Compliance Standards</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300 text-xs md:text-sm">Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Revolutionary Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of data security with quantum-powered encryption and zero-knowledge architecture.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced Security Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge security technologies that provide unmatched protection for your most sensitive data.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Industry Compliance & Certifications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built-in compliance with major industry standards and regulations to ensure your data meets all requirements.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {complianceStandards.map((standard, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {standard.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {standard.name}
                  </h3>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    standard.status === 'Certified' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : standard.status === 'Compliant'
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {standard.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Security Level
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to provide the right level of security for your organization.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative ${
                    plan.popular
                      ? 'border-cyan-500/50 hover:shadow-cyan-500/25'
                      : 'border-white/20 hover:bg-white/20'
                  }`}
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
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Security Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join organizations that trust us with their most sensitive data and critical security requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
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
              Secure Your Data with Quantum Encryption
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Protect your most sensitive data with the world's most advanced quantum encryption technology. 
              Experience unbreakable security with zero-knowledge architecture.
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
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
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
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuantumDataEncryptionVaultPage;