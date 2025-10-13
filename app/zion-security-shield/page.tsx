import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  DollarSign,
  Globe,
  Smartphone,
  Monitor,
  Server,
  Brain,
  Target,
  Zap,
  Users,
  Database,
  BarChart3,
  Cloud
} from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

const ZionSecurityShieldPage = () => {
  const features = [
    {
      title: "Threat Detection",
      description: "Advanced AI-powered threat detection with real-time monitoring and instant alerts",
      icon: <AlertTriangle className="w-6 h-6" />,
      benefits: ["Real-time monitoring", "AI threat detection", "Instant alerts", "Behavioral analysis"]
    },
    {
      title: "Vulnerability Scanning",
      description: "Comprehensive vulnerability assessment with automated scanning and remediation",
      icon: <Eye className="w-6 h-6" />,
      benefits: ["Automated scanning", "Vulnerability assessment", "Risk prioritization", "Remediation guidance"]
    },
    {
      title: "Compliance Monitoring",
      description: "Stay compliant with industry standards including GDPR, HIPAA, and SOC 2",
      icon: <CheckCircle className="w-6 h-6" />,
      benefits: ["GDPR compliance", "HIPAA compliance", "SOC 2 monitoring", "Audit reports"]
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock security monitoring and expert support when you need it",
      icon: <Clock className="w-6 h-6" />,
      benefits: ["24/7 monitoring", "Expert support", "Incident response", "Security consultation"]
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive security analytics with detailed reporting and insights",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Security dashboards", "Threat intelligence", "Risk assessment", "Performance metrics"]
    },
    {
      title: "Multi-Platform Protection",
      description: "Protect all your digital assets across cloud, on-premise, and hybrid environments",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["Cloud security", "On-premise protection", "Hybrid environments", "Cross-platform monitoring"]
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$49",
      period: "per month",
      description: "Basic security protection for small businesses",
      features: [
        "Up to 10 devices",
        "Basic threat detection",
        "Email support",
        "Monthly reports",
        "Standard compliance"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$149",
      period: "per month",
      description: "Advanced security for growing businesses",
      features: [
        "Up to 100 devices",
        "Advanced threat detection",
        "Priority support",
        "Real-time monitoring",
        "Full compliance suite",
        "API access",
        "Custom integrations"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "per month",
      description: "Complete security solution for large organizations",
      features: [
        "Unlimited devices",
        "AI-powered threat detection",
        "24/7 dedicated support",
        "Custom security policies",
        "Advanced compliance",
        "Full API access",
        "Custom development",
        "On-premise deployment"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const securityFeatures = [
    {
      title: "Endpoint Protection",
      description: "Comprehensive protection for all your devices and endpoints",
      icon: <Monitor className="w-8 h-8" />,
      capabilities: ["Antivirus protection", "Firewall management", "Device encryption", "Remote monitoring"]
    },
    {
      title: "Network Security",
      description: "Advanced network monitoring and intrusion detection",
      icon: <Server className="w-8 h-8" />,
      capabilities: ["Network monitoring", "Intrusion detection", "Traffic analysis", "Threat blocking"]
    },
    {
      title: "Cloud Security",
      description: "Protect your cloud infrastructure and data",
      icon: <Cloud className="w-8 h-8" />,
      capabilities: ["Cloud monitoring", "Data encryption", "Access control", "Compliance monitoring"]
    },
    {
      title: "Mobile Security",
      description: "Secure mobile devices and applications",
      icon: <Smartphone className="w-8 h-8" />,
      capabilities: ["Mobile device management", "App security", "Data protection", "Remote wipe"]
    }
  ];

  const testimonials = [
    {
      name: "David Wilson",
      company: "Financial Services Inc.",
      role: "CISO",
      content: "Zion Security Shield has been a game-changer for our security posture. The AI-powered threat detection caught several advanced persistent threats that other solutions missed.",
      rating: 5,
      avatar: "DW"
    },
    {
      name: "Lisa Martinez",
      company: "Healthcare Solutions",
      role: "IT Director",
      content: "The compliance monitoring features helped us achieve HIPAA compliance in record time. The 24/7 support team is incredibly responsive and knowledgeable.",
      rating: 5,
      avatar: "LM"
    },
    {
      name: "Robert Kim",
      company: "E-commerce Platform",
      role: "Security Manager",
      content: "The multi-platform protection is exactly what we needed. We can monitor our entire infrastructure from one dashboard with real-time alerts and analytics.",
      rating: 5,
      avatar: "RK"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Threat Detection Rate", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Security Monitoring", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Compliance Standards", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "1000+", label: "Protected Organizations", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Security Shield - Advanced Cybersecurity Protection Platform</title>
        <meta name="description" content="Protect your business with Zion Security Shield - advanced cybersecurity protection with threat detection, vulnerability scanning, and compliance monitoring starting from $49/month." />
        <meta name="keywords" content="cybersecurity, threat detection, vulnerability scanning, compliance monitoring, security platform, enterprise security, data protection" />
        <meta property="og:title" content="Zion Security Shield - Advanced Cybersecurity Protection" />
        <meta property="og:description" content="Advanced cybersecurity protection with AI-powered threat detection and compliance monitoring." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-security-shield" />
        <meta property="og:image" content="https://ziontechgroup.com/og-security-shield.jpg" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <SEOOptimizer
          title="Zion Security Shield - Advanced Cybersecurity Protection Platform"
          description="Protect your business with Zion Security Shield - advanced cybersecurity protection with threat detection, vulnerability scanning, and compliance monitoring starting from $49/month."
          keywords="cybersecurity, threat detection, vulnerability scanning, compliance monitoring, security platform, enterprise security, data protection, AI security"
          canonical="https://ziontechgroup.com/zion-security-shield"
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
              <span className="text-red-400 text-sm font-medium">Enterprise-Grade Security</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Zion Security
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 animate-pulse">
                {" "}Shield
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Advanced cybersecurity protection with AI-powered threat detection, vulnerability scanning, 
              and compliance monitoring designed for modern enterprises.
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
                <Shield className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to protect your business from evolving cyber threats.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Multi-Layer Security Protection
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Protect every aspect of your digital infrastructure with our comprehensive security suite.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {feature.capabilities.map((capability, capabilityIndex) => (
                      <div key={capabilityIndex} className="text-sm bg-red-500/20 text-red-300 px-3 py-2 rounded">
                        {capability}
                      </div>
                    ))}
                  </div>
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
                Flexible Security Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security level that matches your business needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-red-500/50 shadow-red-500/20' 
                    : 'border-white/20 hover:border-red-500/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={plan.name === 'Enterprise' ? '/contact' : '/contact'}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700 shadow-lg hover:shadow-red-500/25'
                        : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/30 to-orange-900/30">
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
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Don't wait for a security breach. Join thousands of businesses already protected by Zion Security Shield. 
              Start your free trial today.
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
                <Shield className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionSecurityShieldPage;