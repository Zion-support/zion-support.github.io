import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Zap, 
  ArrowRight,
  Star,
  Award,
  Clock,
  Globe,
  Database,
  Activity,
  Target,
  Brain,
  Sparkles,
  Users,
  Settings,
  FileText,
  Network
} from 'lucide-react';

const ZionAISecurityShield = () => {
  const features = [
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms detect and prevent cyber threats in real-time",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Real-time threat analysis", "Behavioral anomaly detection", "Zero-day attack prevention", "Automated response"]
    },
    {
      title: "24/7 Security Monitoring",
      description: "Continuous monitoring of your entire infrastructure with instant alerts and notifications",
      icon: <Eye className="w-6 h-6" />,
      benefits: ["Round-the-clock monitoring", "Instant threat alerts", "Custom notification rules", "Mobile app alerts"]
    },
    {
      title: "Advanced Firewall Protection",
      description: "Next-generation firewall with AI-driven rule optimization and traffic analysis",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Deep packet inspection", "Application-layer filtering", "Geo-blocking capabilities", "DDoS protection"]
    },
    {
      title: "Endpoint Security Suite",
      description: "Comprehensive protection for all devices with centralized management and monitoring",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Antivirus & anti-malware", "Device encryption", "Remote wipe capabilities", "USB device control"]
    },
    {
      title: "Vulnerability Assessment",
      description: "Automated security scanning and vulnerability management with remediation guidance",
      icon: <Activity className="w-6 h-6" />,
      benefits: ["Automated scanning", "Vulnerability prioritization", "Patch management", "Compliance reporting"]
    },
    {
      title: "Identity & Access Management",
      description: "Secure user authentication and authorization with multi-factor authentication",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Multi-factor authentication", "Single sign-on (SSO)", "Role-based access control", "Privileged access management"]
    }
  ];

  const securityLayers = [
    {
      layer: "Network Security",
      description: "Protect your network infrastructure with advanced firewall and intrusion detection",
      icon: <Network className="w-8 h-8" />,
      features: ["Next-gen firewall", "Intrusion detection", "VPN solutions", "Network segmentation"]
    },
    {
      layer: "Data Protection",
      description: "Encrypt and secure your sensitive data with enterprise-grade encryption",
      icon: <Database className="w-8 h-8" />,
      features: ["Data encryption", "Backup encryption", "Key management", "Data loss prevention"]
    },
    {
      layer: "Application Security",
      description: "Secure your applications with comprehensive testing and protection",
      icon: <Settings className="w-8 h-8" />,
      features: ["Code scanning", "API security", "Web application firewall", "Security testing"]
    },
    {
      layer: "Compliance & Reporting",
      description: "Meet regulatory requirements with automated compliance monitoring",
      icon: <FileText className="w-8 h-8" />,
      features: ["GDPR compliance", "SOC 2 reporting", "PCI DSS support", "Audit trails"]
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$499",
      period: "per month",
      description: "Perfect for small businesses with basic security needs",
      features: [
        "Up to 25 endpoints",
        "Basic threat detection",
        "Email support",
        "Standard firewall",
        "Vulnerability scanning",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$999",
      period: "per month",
      description: "Ideal for growing businesses with advanced security requirements",
      features: [
        "Up to 100 endpoints",
        "Advanced AI threat detection",
        "Priority support",
        "Next-gen firewall",
        "Advanced vulnerability management",
        "Compliance reporting",
        "24/7 monitoring",
        "Incident response"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1999",
      period: "per month",
      description: "Complete security solution for large organizations",
      features: [
        "Unlimited endpoints",
        "Premium AI threat detection",
        "Dedicated security team",
        "Custom firewall rules",
        "Full vulnerability management",
        "Advanced compliance",
        "24/7 SOC monitoring",
        "Custom integrations",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Martinez",
      company: "SecureCorp Inc.",
      role: "CISO",
      content: "Zion AI Security Shield has been a game-changer for our security posture. The AI threat detection prevented 3 major attacks in the last quarter alone.",
      rating: 5,
      avatar: "DM"
    },
    {
      name: "Lisa Thompson",
      company: "DataGuard Solutions",
      role: "Security Director",
      content: "The 24/7 monitoring and automated response capabilities give us peace of mind. Our security incidents have decreased by 80% since implementation.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "James Wilson",
      company: "TechSecure Ltd.",
      role: "IT Manager",
      content: "Best security platform we've used. The compliance reporting and vulnerability management features save us countless hours every month.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Threat Detection Rate", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Security Monitoring", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Security Layers", icon: <Lock className="w-6 h-6" /> },
    { number: "1000+", label: "Protected Businesses", icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <Helmet>
        <title>Zion AI Security Shield - Advanced Cybersecurity Protection | Zion Tech Group</title>
        <meta name="description" content="Protect your business with Zion AI Security Shield - the most advanced AI-powered cybersecurity platform. 24/7 monitoring, threat detection, and automated response starting at $499/month." />
        <meta name="keywords" content="cybersecurity, AI security, threat detection, firewall protection, endpoint security, vulnerability management, compliance, data protection" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-security-shield" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion AI Security Shield - Advanced Cybersecurity Protection" />
        <meta property="og:description" content="Protect your business with AI-powered cybersecurity. 24/7 monitoring, threat detection, and automated response starting at $499/month." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-security-shield" />
        <meta property="og:image" content="https://ziontechgroup.com/images/zion-ai-security-shield-og.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion AI Security Shield - Advanced Cybersecurity Protection" />
        <meta name="twitter:description" content="Protect your business with AI-powered cybersecurity. 24/7 monitoring and threat detection." />
        <meta name="twitter:image" content="https://ziontechgroup.com/images/zion-ai-security-shield-twitter.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
            <Shield className="w-4 h-4 text-red-400 mr-2" />
            <span className="text-red-400 text-sm font-medium">#1 AI Security Platform 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
              Zion AI Security Shield
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Protect your business with the most advanced AI-powered cybersecurity platform. 
            Get 24/7 monitoring, threat detection, and automated response that keeps you secure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/25 hover:scale-105"
            >
              Get Protected Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Security Demo
              <Shield className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Layers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Multi-Layer Security Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive security coverage across all aspects of your infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityLayers.map((layer, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 text-center"
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {layer.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {layer.layer}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {layer.description}
                </p>
                <ul className="space-y-2">
                  {layer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to protect your business from cyber threats.
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
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Security Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security plan that fits your business needs. All plans include 30-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-red-500/50 shadow-red-500/20' 
                    : 'border-white/20 hover:border-red-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-red-400">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700 shadow-lg hover:shadow-red-500/25'
                      : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Security Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what security experts say about Zion AI Security Shield
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
            Don't Wait for a Security Breach
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Protect your business today with Zion AI Security Shield. Get 24/7 protection, 
            AI-powered threat detection, and peace of mind. Start your free trial now.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-red-500/25 hover:scale-105"
            >
              Get Protected Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Security Assessment
              <Shield className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAISecurityShield;