import { ArrowRight, Shield, CheckCircle, Star, Users, TrendingUp, Clock, Lock, Zap, Database, Target, Mail, Smartphone, Globe, Sparkles, Award, AlertTriangle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionSecurityShield() {
  const features = [
    {
      title: "AI Threat Detection & Response",
      description: "Advanced machine learning algorithms detect and respond to threats in real-time",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["99.9% threat detection accuracy", "Sub-second response time", "Zero false positives", "Continuous learning"]
    },
    {
      title: "Real-time Security Monitoring",
      description: "24/7 monitoring of your entire infrastructure with instant threat alerts",
      icon: <Target className="w-6 h-6" />,
      benefits: ["24/7 SOC monitoring", "Instant alerts", "Multi-vector detection", "Custom thresholds"]
    },
    {
      title: "Automated Incident Response",
      description: "Automatically contain and remediate security incidents without human intervention",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Automated containment", "Instant remediation", "Custom playbooks", "Escalation protocols"]
    },
    {
      title: "Compliance Management",
      description: "Maintain compliance with SOC2, GDPR, HIPAA, and other regulatory requirements",
      icon: <Lock className="w-6 h-6" />,
      benefits: ["SOC2 Type II", "GDPR compliance", "HIPAA ready", "Automated reporting"]
    },
    {
      title: "Vulnerability Assessment",
      description: "Comprehensive vulnerability scanning and penetration testing services",
      icon: <AlertTriangle className="w-6 h-6" />,
      benefits: ["Automated scanning", "Penetration testing", "Risk scoring", "Remediation guidance"]
    },
    {
      title: "Security Awareness Training",
      description: "Educate your team with interactive security training and phishing simulations",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Interactive training", "Phishing simulations", "Progress tracking", "Certification programs"]
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$299",
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Basic threat detection",
        "Email security",
        "Firewall management",
        "Monthly reports",
        "Email support",
        "Up to 50 users"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "AI threat detection",
        "Real-time monitoring",
        "Automated response",
        "Compliance management",
        "Priority support",
        "Up to 200 users",
        "Advanced analytics",
        "Custom policies"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "month",
      description: "For large organizations",
      features: [
        "Advanced AI protection",
        "24/7 SOC monitoring",
        "Custom incident response",
        "Full compliance suite",
        "Dedicated support",
        "Unlimited users",
        "White-label solution",
        "Custom development"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Martinez",
      company: "Financial Services Inc.",
      role: "CISO",
      content: "Zion Security Shield has reduced our security incidents by 95%. The AI detection is incredibly accurate and fast.",
      rating: 5,
      avatar: "DM"
    },
    {
      name: "Lisa Thompson",
      company: "Healthcare Solutions",
      role: "IT Director",
      content: "Compliance has never been easier. The automated reporting saves us hours every week and keeps us audit-ready.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "James Wilson",
      company: "E-commerce Platform",
      role: "Security Manager",
      content: "The automated incident response is a game-changer. Threats are contained before they can cause damage.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Threat Detection Accuracy", icon: <Shield className="w-6 h-6" /> },
    { number: "50%", label: "Faster Response Time", icon: <Zap className="w-6 h-6" /> },
    { number: "95%", label: "Reduction in Incidents", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Security Monitoring", icon: <Clock className="w-6 h-6" /> }
  ];

  const complianceStandards = [
    { name: "SOC2 Type II", status: "Certified", icon: <CheckCircle className="w-5 h-5 text-green-400" /> },
    { name: "GDPR", status: "Compliant", icon: <CheckCircle className="w-5 h-5 text-green-400" /> },
    { name: "HIPAA", status: "Ready", icon: <CheckCircle className="w-5 h-5 text-green-400" /> },
    { name: "ISO 27001", status: "Certified", icon: <CheckCircle className="w-5 h-5 text-green-400" /> },
    { name: "PCI DSS", status: "Compliant", icon: <CheckCircle className="w-5 h-5 text-green-400" /> },
    { name: "NIST", status: "Aligned", icon: <CheckCircle className="w-5 h-5 text-green-400" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Security Shield - Advanced Cybersecurity Protection Suite | Zion Tech Group</title>
        <meta
          name="description"
          content="Protect your business with Zion Security Shield. AI-powered threat detection, automated incident response, and compliance management. Start your free trial today!"
        />
        <meta
          name="keywords"
          content="cybersecurity, threat detection, incident response, compliance management, SOC2, GDPR, HIPAA, security monitoring, AI security"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 relative overflow-hidden">
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
                  Zion Security
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 animate-pulse">
                    {" "}Shield
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Comprehensive cybersecurity solution with AI-powered threat detection, automated incident response, 
                  and compliance management for modern businesses.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center text-orange-400">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="font-medium">99.9% threat detection</span>
                  </div>
                  <div className="flex items-center text-orange-400">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="font-medium">50% faster response</span>
                  </div>
                  <div className="flex items-center text-orange-400">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="font-medium">24/7 monitoring</span>
                  </div>
                  <div className="flex items-center text-orange-400">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="font-medium">Full compliance</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
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
                    <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Zion Security Shield</h3>
                    <p className="text-gray-300">Advanced Cybersecurity Protection</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Monthly Price</span>
                      <span className="text-3xl font-bold text-white">$499</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Market Price</span>
                      <span className="text-lg text-gray-500 line-through">$799</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">You Save</span>
                      <span className="text-lg font-bold text-green-400">$300/month</span>
                    </div>
                    <div className="pt-4 border-t border-white/20">
                      <div className="flex items-center justify-center text-sm text-orange-400">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>30-day free trial included</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-red-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Compliance & Standards
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet all major compliance requirements with automated reporting and continuous monitoring.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {complianceStandards.map((standard, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex justify-center mb-3">
                    {standard.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{standard.name}</h3>
                  <p className="text-green-400 text-sm font-medium">{standard.status}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to protect your business from evolving cyber threats.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-orange-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-red-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Security Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to protect businesses of all sizes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-orange-500/50 shadow-2xl shadow-orange-500/10'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
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
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 shadow-lg hover:shadow-orange-500/25'
                        : 'border border-white/40 text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Security Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about Zion Security Shield
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
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
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

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already protected by Zion Security Shield. 
                Start your free trial today!
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-red-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-red-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-red-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Security Assessment
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}