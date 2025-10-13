import { Link } from "react-router-dom";
import { Shield, Lock, Eye, AlertTriangle, Zap, Users, Globe, ArrowRight, Star, Sparkles, CheckCircle, Brain, Database, Smartphone } from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

const ZionCyberShieldProPage = () => {
  const features = [
    {
      title: "AI Threat Detection",
      description: "Advanced machine learning algorithms that detect and prevent cyber threats in real-time",
      icon: <Brain className="w-6 h-6" />,
      benefit: "99.9% threat detection"
    },
    {
      title: "Zero Trust Architecture",
      description: "Implement zero trust security model with continuous verification and least privilege access",
      icon: <Lock className="w-6 h-6" />,
      benefit: "100% secure access"
    },
    {
      title: "Real-time Monitoring",
      description: "24/7 security monitoring with instant alerts and automated response capabilities",
      icon: <Eye className="w-6 h-6" />,
      benefit: "Instant response"
    },
    {
      title: "Compliance Automation",
      description: "Automated compliance reporting for GDPR, HIPAA, SOC2, and other regulatory requirements",
      icon: <CheckCircle className="w-6 h-6" />,
      benefit: "100% compliance"
    }
  ];

  const securityModules = [
    {
      title: "Endpoint Protection",
      description: "Advanced endpoint detection and response (EDR) with behavioral analysis",
      icon: <Smartphone className="w-8 h-8" />,
      features: ["Real-time threat detection", "Automated incident response", "Device management"]
    },
    {
      title: "Network Security",
      description: "Comprehensive network monitoring and intrusion detection system",
      icon: <Globe className="w-8 h-8" />,
      features: ["Traffic analysis", "DDoS protection", "VPN management"]
    },
    {
      title: "Data Protection",
      description: "Encryption, backup, and data loss prevention (DLP) solutions",
      icon: <Database className="w-8 h-8" />,
      features: ["End-to-end encryption", "Automated backups", "Data classification"]
    },
    {
      title: "Identity Management",
      description: "Multi-factor authentication and identity access management (IAM)",
      icon: <Users className="w-8 h-8" />,
      features: ["SSO integration", "Role-based access", "Privileged access management"]
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 25 endpoints",
        "Basic threat detection",
        "Email security",
        "24/7 monitoring",
        "Email support",
        "Standard compliance reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 100 endpoints",
        "Advanced AI threat detection",
        "Full security suite",
        "Real-time response",
        "Priority support",
        "Advanced compliance",
        "Custom integrations",
        "Security training"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited endpoints",
        "Full AI security suite",
        "Custom security policies",
        "Dedicated security team",
        "24/7 phone support",
        "Custom compliance",
        "White-label options",
        "Advanced analytics",
        "Penetration testing"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      role: "CISO",
      company: "SecureCorp",
      content: "Zion Cyber Shield Pro prevented 3 major attacks in the last month alone. The AI detection is incredibly accurate.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Sarah Williams",
      role: "IT Director",
      company: "TechFlow Inc.",
      content: "Compliance automation saved us months of work. We passed our SOC2 audit in record time.",
      rating: 5,
      avatar: "SW"
    },
    {
      name: "David Rodriguez",
      role: "CEO",
      company: "StartupSecure",
      content: "The zero trust implementation was seamless. Our security posture improved dramatically overnight.",
      rating: 5,
      avatar: "DR"
    }
  ];

  const stats = [
    { number: "1,000+", label: "Protected Organizations", icon: <Shield className="w-8 h-8" /> },
    { number: "99.9%", label: "Threat Detection Rate", icon: <Eye className="w-8 h-8" /> },
    { number: "24/7", label: "Security Monitoring", icon: <AlertTriangle className="w-8 h-8" /> },
    { number: "0", label: "Successful Breaches", icon: <Lock className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Zion Cyber Shield Pro - Advanced AI Cybersecurity Platform | Zion Tech Group"
        description="Enterprise-grade cybersecurity platform with AI threat detection, zero trust architecture, and automated compliance. Protect your organization from advanced cyber threats."
        keywords="cybersecurity, AI security, threat detection, zero trust, compliance automation, endpoint protection, network security, data protection"
        canonical="https://ziontechgroup.com/zion-cyber-shield-pro"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
            <Shield className="w-4 h-4 text-red-400 mr-2" />
            <span className="text-red-400 text-sm font-medium">Enterprise-Grade Cybersecurity</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Zion
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 animate-pulse">
              {" "}Cyber Shield Pro
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Advanced AI-powered cybersecurity platform that protects your organization from sophisticated threats 
            with real-time detection, automated response, and comprehensive compliance management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-red-500/25 hover:scale-105"
            >
              Get Security Assessment
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
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
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

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive cybersecurity protection powered by cutting-edge AI and machine learning technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-red-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-400">
                    {feature.benefit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Modules Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Modules
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete cybersecurity coverage across all attack vectors and compliance requirements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityModules.map((module, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {module.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-red-400 transition-colors text-center">
                  {module.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 text-center">
                  {module.description}
                </p>
                <ul className="space-y-2">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
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

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Security Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options for organizations of all sizes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-red-400 shadow-2xl shadow-red-500/20' 
                    : 'border-white/20 hover:border-red-400/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Security Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what security professionals say about Zion Cyber Shield Pro
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/30 to-orange-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Secure Your Organization Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Don't wait for a breach to happen. Protect your organization with enterprise-grade cybersecurity 
            that adapts to evolving threats and ensures compliance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-red-500/25 hover:scale-105"
            >
              Get Security Assessment
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
          
          <div className="mt-8 text-sm text-gray-400">
            <p>Contact us: <span className="text-red-400">kleber@ziontechgroup.com</span> | <span className="text-red-400">+1 302 464 0950</span></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionCyberShieldProPage;