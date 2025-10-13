import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Check, 
  Star, 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Zap, 
  Globe, 
  Database, 
  Users,
  Award,
  Sparkles,
  Mail,
  Smartphone,
  MapPin,
  Clock,
  TrendingUp,
  Settings,
  Monitor,
  FileText,
  Key,
  Activity
} from "lucide-react";

const ZionSecurityShield = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms detect and prevent cyber threats in real-time with 99.9% accuracy."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "24/7 Security Monitoring",
      description: "Round-the-clock monitoring of your systems with instant alerts and automated incident response."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Multi-Layer Protection",
      description: "Comprehensive security covering network, application, data, and endpoint protection layers."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Automated Incident Response",
      description: "AI-driven response system that automatically contains and mitigates security incidents."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Vulnerability Scanning",
      description: "Continuous scanning and assessment of your infrastructure for potential security vulnerabilities."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Compliance Reporting",
      description: "Automated compliance reports for GDPR, HIPAA, SOC 2, and other industry standards."
    }
  ];

  const securityLayers = [
    {
      name: "Network Security",
      description: "Firewall, DDoS protection, and intrusion detection",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Application Security",
      description: "Code scanning, vulnerability assessment, and secure development",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Data Protection",
      description: "Encryption, access controls, and data loss prevention",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Endpoint Security",
      description: "Device protection, malware detection, and mobile security",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$49",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Basic threat detection",
        "Email security",
        "Firewall protection",
        "Monthly security reports",
        "Email support",
        "Up to 25 users"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "per month",
      description: "Ideal for growing companies",
      features: [
        "Advanced AI threat detection",
        "24/7 monitoring",
        "Automated incident response",
        "Vulnerability scanning",
        "Priority support",
        "Up to 100 users",
        "Compliance reporting",
        "Custom security policies"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "per month",
      description: "For large organizations",
      features: [
        "Full AI security suite",
        "Dedicated security team",
        "Custom integrations",
        "White-label options",
        "24/7 phone support",
        "Unlimited users",
        "Advanced compliance",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const complianceStandards = [
    { name: "GDPR", description: "General Data Protection Regulation" },
    { name: "HIPAA", description: "Health Insurance Portability and Accountability Act" },
    { name: "SOC 2", description: "Service Organization Control 2" },
    { name: "ISO 27001", description: "Information Security Management" },
    { name: "PCI DSS", description: "Payment Card Industry Data Security Standard" },
    { name: "NIST", description: "National Institute of Standards and Technology" }
  ];

  const testimonials = [
    {
      name: "David Martinez",
      company: "Financial Services Inc.",
      role: "CISO",
      content: "Zion Security Shield has been a game-changer for our cybersecurity posture. The AI threat detection caught several sophisticated attacks that traditional systems missed.",
      rating: 5,
      avatar: "DM"
    },
    {
      name: "Lisa Thompson",
      company: "Healthcare Solutions",
      role: "IT Director",
      content: "The compliance reporting feature alone saves us 40 hours per month. We're now fully compliant with HIPAA requirements with minimal effort.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "Robert Kim",
      company: "E-commerce Platform",
      role: "Security Manager",
      content: "The automated incident response is incredible. What used to take hours now takes minutes, and the AI learns from each incident to improve protection.",
      rating: 5,
      avatar: "RK"
    }
  ];

  const securityStats = [
    { number: "99.9%", label: "Threat Detection Accuracy", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Security Monitoring", icon: <Eye className="w-6 h-6" /> },
    { number: "< 5min", label: "Average Response Time", icon: <Zap className="w-6 h-6" /> },
    { number: "100%", label: "Compliance Coverage", icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Security Shield - Advanced Cybersecurity Protection Suite | Zion Tech Group</title>
        <meta
          name="description"
          content="Protect your business with Zion Security Shield. AI-powered threat detection, 24/7 monitoring, and automated incident response. Start from $49/month."
        />
        <meta
          name="keywords"
          content="cybersecurity, threat detection, security monitoring, incident response, compliance, data protection, network security, endpoint security"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-security-shield" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
                  <Shield className="w-4 h-4 text-red-400 mr-2" />
                  <span className="text-red-400 text-sm font-medium">Advanced Cybersecurity Protection</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Zion Security
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                    {" "}Shield
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Comprehensive security solution protecting your business from cyber threats with AI-powered threat detection, 
                  24/7 monitoring, and automated incident response.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
                
                <div className="flex items-center space-x-6 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    <span>14-day free trial</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    <span>No setup fees</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Security Dashboard</h3>
                    <p className="text-gray-300">Real-time threat monitoring</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                        <span className="text-sm text-white">Network Status</span>
                      </div>
                      <span className="text-green-400 text-sm font-semibold">Secure</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                        <span className="text-sm text-white">Threats Blocked</span>
                      </div>
                      <span className="text-blue-400 text-sm font-semibold">1,247 today</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                        <span className="text-sm text-white">Vulnerabilities</span>
                      </div>
                      <span className="text-yellow-400 text-sm font-semibold">3 detected</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                        <span className="text-sm text-white">Compliance</span>
                      </div>
                      <span className="text-purple-400 text-sm font-semibold">100%</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">Last security scan</div>
                    <div className="text-lg font-semibold text-green-400">2 minutes ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {securityStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-red-400">{stat.icon}</div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Multi-layered security protection designed to keep your business safe from all types of cyber threats.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Layers */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Multi-Layer Security Protection
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive security coverage across all aspects of your digital infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityLayers.map((layer, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${layer.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{layer.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {layer.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {layer.description}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Industry Compliance Standards
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet all major compliance requirements with automated reporting and continuous monitoring.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">{standard.name}</div>
                  <div className="text-sm text-gray-300">{standard.description}</div>
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
                Flexible Security Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security level that matches your business needs and budget.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 relative ${
                    plan.popular ? 'ring-2 ring-red-500/50' : ''
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
                    <div className="text-4xl font-bold text-red-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-300 font-normal">/{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
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
                See what security experts say about Zion Security Shield
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Don't wait for a security breach. Join thousands of businesses already protected by Zion Security Shield. 
              Start your free trial today and experience enterprise-grade security.
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
                to="/demo"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
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
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-red-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionSecurityShield;