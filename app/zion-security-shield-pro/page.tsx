import { ArrowRight, Brain, Shield, Globe, Code, Smartphone, Cloud, BarChart3, Bot, Wifi, Target, Users, TrendingUp, FileText, Mail, Zap, Database, Settings, Monitor, Lock, Server, Cpu, Network, HardDrive, Phone, Laptop, Headphones, Package, Heart, Receipt, Calendar, Clock, Award, Sparkles, CheckCircle, Star, Rocket, DollarSign, Zap as Lightning, Download, Play, Eye, PieChart, LineChart, Activity, AlertTriangle, ShieldCheck, Lock as LockIcon, Key, Eye as EyeIcon, AlertCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionSecurityShieldPro() {
  const features = [
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms detect and prevent cyber threats in real-time with 99.9% accuracy, including zero-day attacks and sophisticated malware.",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["99.9% threat detection rate", "Zero-day attack protection", "Real-time monitoring", "Behavioral analysis"]
    },
    {
      title: "Automated Incident Response",
      description: "Instantly respond to security incidents with automated containment, isolation, and remediation procedures to minimize damage and recovery time.",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Instant response", "Automated containment", "Damage minimization", "Recovery acceleration"]
    },
    {
      title: "24/7 Security Monitoring",
      description: "Round-the-clock monitoring of your entire infrastructure with our expert security team and AI systems working together to protect your business.",
      icon: <EyeIcon className="w-6 h-6" />,
      benefits: ["24/7 monitoring", "Expert security team", "AI assistance", "Immediate alerts"]
    },
    {
      title: "Compliance Management",
      description: "Automated compliance reporting for GDPR, HIPAA, SOC 2, PCI DSS, and other regulatory requirements with detailed audit trails and documentation.",
      icon: <FileText className="w-6 h-6" />,
      benefits: ["Multi-compliance support", "Automated reporting", "Audit trails", "Documentation"]
    },
    {
      title: "Advanced Firewall Management",
      description: "Next-generation firewall with deep packet inspection, application control, and intelligent traffic analysis to block malicious activities.",
      icon: <LockIcon className="w-6 h-6" />,
      benefits: ["Deep packet inspection", "Application control", "Traffic analysis", "Intelligent blocking"]
    },
    {
      title: "Security Training & Awareness",
      description: "Comprehensive security training programs for your team with simulated phishing attacks, security best practices, and ongoing education.",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Phishing simulations", "Security training", "Best practices", "Ongoing education"]
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses with basic security needs",
      features: [
        "Up to 50 endpoints",
        "Basic threat detection",
        "Email support",
        "Standard firewall",
        "Monthly reports",
        "Basic compliance"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      description: "Ideal for growing businesses with advanced security requirements",
      features: [
        "Up to 200 endpoints",
        "Advanced AI threat detection",
        "Priority support",
        "Next-gen firewall",
        "Real-time reports",
        "Full compliance suite",
        "Incident response",
        "Security training"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "Complete security solution for large organizations",
      features: [
        "Unlimited endpoints",
        "AI-powered threat detection",
        "24/7 dedicated support",
        "Advanced firewall",
        "Custom reporting",
        "Full compliance suite",
        "Automated response",
        "Advanced training",
        "SLA guarantee",
        "Custom integrations"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const securityMetrics = [
    {
      title: "Threat Detection Rate",
      value: "99.9%",
      description: "Accuracy in detecting and preventing cyber threats",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      title: "Response Time",
      value: "< 30s",
      description: "Average time to detect and respond to threats",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Uptime Guarantee",
      value: "99.99%",
      description: "Service availability with SLA guarantee",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Compliance Coverage",
      value: "100%",
      description: "Coverage for major compliance frameworks",
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  const threatTypes = [
    {
      name: "Malware Protection",
      description: "Advanced detection and prevention of viruses, trojans, ransomware, and other malicious software",
      icon: <AlertTriangle className="w-6 h-6" />,
      coverage: "99.9%"
    },
    {
      name: "Phishing Prevention",
      description: "AI-powered email filtering and user training to prevent phishing attacks and social engineering",
      icon: <Mail className="w-6 h-6" />,
      coverage: "98.5%"
    },
    {
      name: "DDoS Mitigation",
      description: "Distributed denial-of-service attack prevention with intelligent traffic filtering and load balancing",
      icon: <Network className="w-6 h-6" />,
      coverage: "100%"
    },
    {
      name: "Data Breach Prevention",
      description: "Data loss prevention, encryption, and access controls to protect sensitive information",
      icon: <Lock className="w-6 h-6" />,
      coverage: "99.8%"
    },
    {
      name: "Insider Threat Detection",
      description: "Behavioral analysis and monitoring to detect and prevent insider threats and unauthorized access",
      icon: <Users className="w-6 h-6" />,
      coverage: "95.2%"
    },
    {
      name: "Zero-Day Protection",
      description: "Advanced threat intelligence and behavioral analysis to protect against unknown vulnerabilities",
      icon: <EyeIcon className="w-6 h-6" />,
      coverage: "97.3%"
    }
  ];

  const testimonials = [
    {
      name: "David Martinez",
      company: "Financial Services Corp",
      role: "CISO",
      content: "Zion Security Shield Pro has been a game-changer for our security posture. We've seen a 90% reduction in security incidents and 50% faster incident response times.",
      rating: 5,
      avatar: "DM"
    },
    {
      name: "Lisa Thompson",
      company: "Healthcare Solutions",
      role: "IT Director",
      content: "The compliance automation features saved us countless hours. We now maintain full HIPAA compliance with minimal manual effort, and our audit scores have improved significantly.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "James Wilson",
      company: "E-commerce Platform",
      role: "Security Manager",
      content: "The AI threat detection is incredibly sophisticated. It caught several advanced persistent threats that our previous solution missed. Highly recommended for any business serious about security.",
      rating: 5,
      avatar: "JW"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Security Shield Pro - Advanced Cybersecurity Protection | Zion Tech Group</title>
        <meta
          name="description"
          content="Protect your business with Zion Security Shield Pro. AI-powered threat detection, 24/7 monitoring, automated incident response, and compliance management. Enterprise-grade security for all businesses."
        />
        <meta
          name="keywords"
          content="cybersecurity, threat detection, security monitoring, incident response, compliance, firewall, malware protection, data security, enterprise security"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
                  <Shield className="w-4 h-4 text-red-400 mr-2" />
                  <span className="text-red-400 text-sm font-medium">Enterprise-Grade Security</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
                    Zion Security Shield Pro
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Comprehensive cybersecurity protection with AI-powered threat detection, 24/7 monitoring, 
                  and automated incident response. Protect your business from evolving cyber threats with enterprise-grade security.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="group bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/25 hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </button>
                </div>
                
                {/* Security Metrics */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">99.9%</div>
                    <div className="text-sm text-gray-300">Threat Detection</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">&lt; 30s</div>
                    <div className="text-sm text-gray-300">Response Time</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Security Dashboard</h3>
                    <p className="text-gray-300 text-sm">Real-time threat monitoring</p>
                  </div>
                  
                  {/* Mock Security Dashboard */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">Threats Blocked</span>
                        <span className="text-green-400 text-sm">+2,847</span>
                      </div>
                      <div className="text-2xl font-bold text-white">99.9%</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-red-400 text-sm">Active Threats</div>
                        <div className="text-white font-bold">0</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-red-400 text-sm">System Status</div>
                        <div className="text-green-400 font-bold">Secure</div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white text-sm">Security Score</span>
                        <span className="text-green-400 text-xs">Excellent</span>
                      </div>
                      <div className="h-2 bg-gradient-to-r from-red-500 to-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Metrics */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Security Performance
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our advanced security metrics speak for themselves
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold text-gray-300 mb-2">{metric.title}</div>
                  <div className="text-sm text-gray-400">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Advanced Security Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive protection against all types of cyber threats with AI-powered security solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
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

        {/* Threat Protection Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Threat Protection
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Protect against all types of cyber threats with our multi-layered security approach.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {threatTypes.map((threat, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {threat.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white group-hover:text-red-300 transition-colors">
                          {threat.name}
                        </h3>
                        <span className="text-green-400 text-sm font-bold">{threat.coverage}</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {threat.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Security Plans for Every Business
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security plan that fits your business needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular
                      ? 'border-red-500/50 shadow-red-500/25'
                      : 'border-white/20 hover:border-red-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700 shadow-lg hover:shadow-red-500/25'
                        : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Security Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what security experts say about Zion Security Shield Pro
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
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Don't wait for a cyber attack to happen. Protect your business with Zion Security Shield Pro 
              and sleep peacefully knowing your data and systems are secure.
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
                to="/contact"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Security Audit
                <Shield className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}