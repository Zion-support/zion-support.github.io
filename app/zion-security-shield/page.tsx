import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Shield, 
  CheckCircle, 
  Star, 
  Users, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Clock, 
  Globe,
  Smartphone,
  Database,
  Zap,
  Target,
  Award,
  Rocket,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Play,
  Download,
  Share2,
  Cpu,
  Network,
  FileText
} from "lucide-react";

export default function ZionSecurityShield() {
  const features = [
    {
      title: "AI Threat Detection",
      description: "Advanced machine learning algorithms that detect and prevent cyber threats in real-time, including zero-day attacks and sophisticated malware.",
      icon: <Cpu className="w-6 h-6" />,
      benefits: ["Real-time threat detection", "Zero-day attack prevention", "Behavioral analysis", "Automated response"]
    },
    {
      title: "24/7 Security Monitoring",
      description: "Round-the-clock monitoring of your network, systems, and applications with instant alerts and automated incident response.",
      icon: <Eye className="w-6 h-6" />,
      benefits: ["Continuous monitoring", "Instant alerts", "Automated response", "Expert analysis"]
    },
    {
      title: "Automated Incident Response",
      description: "Intelligent automation that responds to security incidents within seconds, containing threats and minimizing damage.",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Sub-second response time", "Automated containment", "Damage minimization", "Recovery assistance"]
    },
    {
      title: "Vulnerability Assessment",
      description: "Comprehensive security scanning and vulnerability assessment with prioritized remediation recommendations.",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Comprehensive scanning", "Risk prioritization", "Remediation guidance", "Compliance reporting"]
    },
    {
      title: "Compliance Reporting",
      description: "Automated compliance reporting for GDPR, HIPAA, SOX, and other regulatory requirements with audit trail documentation.",
      icon: <FileText className="w-6 h-6" />,
      benefits: ["Multi-compliance support", "Automated reporting", "Audit trails", "Regulatory updates"]
    },
    {
      title: "Security Training Modules",
      description: "Interactive security awareness training for your team with phishing simulations and best practices education.",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Interactive training", "Phishing simulations", "Progress tracking", "Certification programs"]
    }
  ];

  const securityLayers = [
    {
      name: "Network Security",
      description: "Firewall management, intrusion detection, and network segmentation",
      icon: <Network className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Endpoint Protection",
      description: "Advanced antivirus, anti-malware, and device management",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Data Encryption",
      description: "End-to-end encryption for data at rest and in transit",
      icon: <Lock className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500"
    },
    {
      name: "Identity Management",
      description: "Multi-factor authentication and access control management",
      icon: <Users className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Cloud Security",
      description: "Cloud infrastructure protection and secure data storage",
      icon: <Globe className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Threat Intelligence",
      description: "Real-time threat intelligence and global security monitoring",
      icon: <Eye className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: 499,
      period: "month",
      description: "Perfect for small businesses with basic security needs",
      features: [
        "Basic threat detection",
        "Email security",
        "Firewall management",
        "Monthly security reports",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 999,
      period: "month",
      description: "Comprehensive security for growing businesses",
      features: [
        "Advanced AI threat detection",
        "24/7 monitoring",
        "Automated incident response",
        "Vulnerability assessment",
        "Compliance reporting",
        "Priority support",
        "Security training"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 1999,
      period: "month",
      description: "Complete security suite for large organizations",
      features: [
        "All Professional features",
        "Custom security policies",
        "Dedicated security team",
        "Penetration testing",
        "White-label options",
        "SLA guarantee",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Martinez",
      company: "Financial Services Corp",
      role: "CISO",
      content: "Zion Security Shield has been our cybersecurity backbone for 2 years. The AI threat detection prevented 3 major attacks that could have cost us millions.",
      rating: 5,
      avatar: "DM"
    },
    {
      name: "Lisa Thompson",
      company: "Healthcare Solutions",
      role: "IT Director",
      content: "The compliance reporting feature alone saved us weeks of work. HIPAA compliance is now automated and we have complete peace of mind.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "Robert Kim",
      company: "E-commerce Platform",
      role: "Security Manager",
      content: "The 24/7 monitoring and automated response gives us confidence that our customer data is always protected. Response time is incredible.",
      rating: 5,
      avatar: "RK"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Threat Detection Rate", icon: <Shield className="w-6 h-6" /> },
    { number: "50%", label: "Faster Incident Response", icon: <Zap className="w-6 h-6" /> },
    { number: "Zero", label: "False Positives", icon: <Target className="w-6 h-6" /> },
    { number: "24/7", label: "Protection", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Security Shield - Advanced AI Cybersecurity Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Protect your business with Zion Security Shield. Advanced AI-powered threat detection, 24/7 monitoring, and automated incident response. Enterprise-grade security starting at $499/month."
        />
        <meta
          name="keywords"
          content="cybersecurity, threat detection, security monitoring, incident response, vulnerability assessment, compliance reporting, network security, endpoint protection, data encryption, identity management"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Zion Security Shield",
            "description": "Advanced AI-powered cybersecurity platform with threat detection and automated response",
            "url": "https://ziontechgroup.com/zion-security-shield",
            "applicationCategory": "SecurityApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "499",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "RecurringPaymentsPriceSpecification",
                "billingDuration": "P1M"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "200"
            }
          })}
        </script>
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
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
                    Zion Security Shield
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Advanced cybersecurity protection with AI-powered threat detection, automated response, and 24/7 monitoring. 
                  Protect your business from evolving cyber threats with enterprise-grade security.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="group bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/25 hover:scale-105"
                  >
                    Get Protected Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Security Demo
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Professional Plan</h3>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className="text-4xl font-bold text-red-400">$999</span>
                      <span className="text-gray-400">/month</span>
                      <span className="text-green-400 text-sm bg-green-400/20 px-2 py-1 rounded">50% OFF</span>
                    </div>
                    <p className="text-gray-300">Most comprehensive security solution</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {[
                      "Advanced AI threat detection",
                      "24/7 monitoring",
                      "Automated incident response",
                      "Vulnerability assessment",
                      "Compliance reporting",
                      "Priority support",
                      "Security training"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-red-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 text-center block"
                  >
                    Start Protection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Layers Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Multi-Layer Security
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive protection across all attack vectors with our multi-layered security approach
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityLayers.map((layer, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${layer.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {layer.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-red-300 transition-colors">
                    {layer.name}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-red-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Advanced Security Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge security technology designed to protect your business from the most sophisticated threats
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
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 flex-shrink-0"></div>
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Security Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security level that matches your business needs and risk profile
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 ${
                    plan.popular 
                      ? 'border-red-500/50 bg-gradient-to-br from-red-500/10 to-orange-500/10' 
                      : 'border-white/20 hover:border-white/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-4xl font-bold text-red-400">${plan.price}</span>
                      <span className="text-gray-400">/{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
                    Get Protected
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Trusted by Security Leaders
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how security professionals rely on Zion Security Shield
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Don't Wait for a Breach
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Protect your business today with enterprise-grade cybersecurity. 
                Contact us for a free security assessment and consultation.
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
                    <Phone className="w-6 h-6 text-white" />
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
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/25 hover:scale-105"
                >
                  Get Security Assessment
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}