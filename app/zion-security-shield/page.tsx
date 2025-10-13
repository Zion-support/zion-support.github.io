import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, Lock, Eye, AlertTriangle, Zap, CheckCircle, Star, Globe, Smartphone, Mail, ArrowRight, Users, BarChart3, Clock } from "lucide-react";

export default function ZionSecurityShield() {
  const features = [
    {
      title: "Advanced Threat Detection",
      description: "AI-powered threat detection that identifies and neutralizes security risks in real-time",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Real-time monitoring", "AI threat analysis", "Automated response", "Zero false positives"]
    },
    {
      title: "Endpoint Protection",
      description: "Comprehensive protection for all devices with advanced behavioral analysis",
      icon: <Lock className="w-6 h-6" />,
      benefits: ["Multi-device support", "Behavioral analysis", "Malware prevention", "Device encryption"]
    },
    {
      title: "Network Security",
      description: "Advanced firewall and intrusion detection system for complete network protection",
      icon: <Eye className="w-6 h-6" />,
      benefits: ["Next-gen firewall", "Intrusion detection", "Traffic analysis", "VPN integration"]
    },
    {
      title: "Compliance Management",
      description: "Automated compliance monitoring for GDPR, HIPAA, SOC 2, and other regulations",
      icon: <AlertTriangle className="w-6 h-6" />,
      benefits: ["GDPR compliance", "HIPAA ready", "SOC 2 certified", "Automated reporting"]
    },
    {
      title: "Security Analytics",
      description: "Comprehensive security dashboard with detailed insights and reporting",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Security dashboard", "Risk assessment", "Incident reports", "Trend analysis"]
    },
    {
      title: "24/7 Monitoring",
      description: "Round-the-clock security monitoring with instant alerts and rapid response",
      icon: <Clock className="w-6 h-6" />,
      benefits: ["24/7 monitoring", "Instant alerts", "Rapid response", "Expert support"]
    }
  ];

  const securityLayers = [
    {
      layer: "Layer 1: Perimeter Defense",
      description: "Advanced firewall and DDoS protection",
      protection: "99.9%"
    },
    {
      layer: "Layer 2: Network Security",
      description: "Intrusion detection and prevention systems",
      protection: "99.8%"
    },
    {
      layer: "Layer 3: Endpoint Protection",
      description: "AI-powered malware detection and prevention",
      protection: "99.9%"
    },
    {
      layer: "Layer 4: Data Encryption",
      description: "End-to-end encryption for all data at rest and in transit",
      protection: "100%"
    },
    {
      layer: "Layer 5: Access Control",
      description: "Multi-factor authentication and zero-trust architecture",
      protection: "99.7%"
    },
    {
      layer: "Layer 6: Monitoring & Response",
      description: "Real-time monitoring and automated incident response",
      protection: "99.9%"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$49",
      period: "per month",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic threat detection",
        "Email security",
        "Firewall protection",
        "24/7 monitoring",
        "Email support",
        "Up to 25 users"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "per month",
      description: "Ideal for growing businesses with advanced security needs",
      features: [
        "Advanced threat detection",
        "Endpoint protection",
        "Network security",
        "Compliance monitoring",
        "Priority support",
        "Up to 100 users",
        "Security analytics",
        "Incident response"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "per month",
      description: "For large organizations with complex security requirements",
      features: [
        "Complete security suite",
        "Custom security policies",
        "Advanced analytics",
        "Dedicated security team",
        "24/7 phone support",
        "Unlimited users",
        "Custom integrations",
        "On-premise deployment",
        "Security training"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Martinez",
      company: "Financial Services Corp",
      role: "CISO",
      content: "Zion Security Shield has been a game-changer for our security posture. The AI threat detection prevented 3 major attacks in the last quarter alone.",
      rating: 5,
      avatar: "DM"
    },
    {
      name: "Lisa Thompson",
      company: "Healthcare Solutions",
      role: "IT Director",
      content: "The compliance management features saved us months of work. We passed our HIPAA audit with flying colors thanks to Zion Security Shield.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "Robert Kim",
      company: "E-commerce Platform",
      role: "Security Manager",
      content: "The 24/7 monitoring and rapid response capabilities give us peace of mind. Our security incidents are resolved 3x faster now.",
      rating: 5,
      avatar: "RK"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Security Shield - Advanced Cybersecurity Protection | Zion Tech Group</title>
        <meta
          name="description"
          content="Protect your business with Zion Security Shield. Advanced AI-powered cybersecurity, threat detection, compliance management, and 24/7 monitoring. Starting at $49/month."
        />
        <meta
          name="keywords"
          content="cybersecurity, threat detection, endpoint protection, network security, compliance management, security monitoring, data protection, firewall, malware protection"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-security-shield" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
              <Shield className="w-4 h-4 text-red-400 mr-2" />
              <span className="text-red-400 text-sm font-medium">#1 Cybersecurity Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Zion
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 animate-pulse">
                {" "}Security Shield
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Advanced AI-powered cybersecurity protection that keeps your business safe from evolving threats. 
              Complete security suite with real-time monitoring, threat detection, and compliance management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
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
              </Link>
            </div>
            
            {/* Security Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-red-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Threat Block Rate</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">50,000+</div>
                <div className="text-gray-300 text-sm">Protected Users</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Monitoring</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Lock className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-300 text-sm">Data Encryption</div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Layers Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Multi-Layer Security
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400"> Protection</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our defense-in-depth approach ensures comprehensive protection across all attack vectors. 
                Six layers of security working together to keep your business safe.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityLayers.map((layer, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">{layer.protection}</div>
                      <div className="text-sm text-gray-400">Protection Rate</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-300 transition-colors">
                    {layer.layer}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive security tools designed to protect your business from modern cyber threats.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-red-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
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

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Security Plans for Every Business
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security plan that fits your business needs. All plans include our core security features.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-red-500/50 shadow-2xl shadow-red-500/10 bg-gradient-to-br from-red-500/10 to-orange-500/10'
                      : 'border-white/20 hover:border-red-500/30'
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
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700 shadow-lg hover:shadow-red-500/25'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
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
              Don't Wait for a Breach
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Protect your business today with Zion Security Shield. Get comprehensive cybersecurity protection 
              with 24/7 monitoring and rapid response capabilities.
            </p>
            
            {/* Contact Information */}
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
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}