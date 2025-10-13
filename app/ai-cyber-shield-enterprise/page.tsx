import { ArrowRight, Shield, Eye, AlertTriangle, Lock, Zap, Brain, CheckCircle, Mail, Phone, MapPin, Star, Activity, Users, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AICyberShieldEnterprise() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Threat Detection",
      description: "Advanced machine learning algorithms detect and neutralize threats in real-time with 99.9% accuracy"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "24/7 Monitoring",
      description: "Continuous network monitoring with instant alerts and automated incident response"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Zero-Trust Security",
      description: "Implement zero-trust architecture with identity verification and least-privilege access"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "AI-powered threat intelligence predicts and prevents attacks before they happen"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Protection",
      description: "End-to-end encryption and data loss prevention with compliance reporting"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Response",
      description: "Instant threat containment and automated remediation with minimal human intervention"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 50 endpoints",
        "Basic threat detection",
        "Email support",
        "Standard reporting",
        "Cloud-based monitoring"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 500 endpoints",
        "Advanced AI detection",
        "24/7 support",
        "Custom dashboards",
        "On-premise deployment",
        "Compliance reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited endpoints",
        "AI-powered insights",
        "Dedicated security team",
        "Custom integrations",
        "White-label options",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const securityMetrics = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "99.9% Uptime",
      description: "Guaranteed network availability with redundant monitoring systems"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Real-time Detection",
      description: "Threats detected and neutralized within 30 seconds of occurrence"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "24/7 SOC Team",
      description: "Dedicated security operations center with certified experts"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Coverage",
      description: "Worldwide threat intelligence and monitoring capabilities"
    }
  ];

  const testimonials = [
    {
      name: "Robert Chen",
      company: "Financial Services Corp",
      role: "CISO",
      content: "AI Cyber Shield Enterprise has been a game-changer for our security posture. We've prevented 15 major attacks in the last quarter alone.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      company: "Healthcare Solutions",
      role: "IT Director",
      content: "The AI-powered threat detection is incredibly accurate. We sleep better knowing our patient data is protected by the best technology available.",
      rating: 5
    },
    {
      name: "James Thompson",
      company: "E-commerce Giant",
      role: "Security Manager",
      content: "Our compliance scores improved dramatically after implementing AI Cyber Shield. The automated reporting saves us hours every week.",
      rating: 5
    }
  ];

  const complianceStandards = [
    "SOC 2 Type II",
    "ISO 27001",
    "GDPR Compliant",
    "HIPAA Ready",
    "PCI DSS",
    "NIST Framework"
  ];

  return (
    <>
      <Helmet>
        <title>AI Cyber Shield Enterprise - Zion Tech Group | Advanced Cybersecurity Protection</title>
        <meta
          name="description"
          content="Enterprise-grade AI-powered cybersecurity platform with 99.9% threat detection accuracy, 24/7 monitoring, and automated incident response. Protect your business with cutting-edge security technology."
        />
        <meta
          name="keywords"
          content="cybersecurity, AI security, threat detection, network monitoring, data protection, compliance, SOC 2, ISO 27001, zero-trust security, automated response"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-cyber-shield-enterprise" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-cyan-500/20 border border-red-500/30 mb-6">
                <Shield className="w-4 h-4 text-red-400 mr-2" />
                <span className="text-red-400 text-sm font-medium">Enterprise Cybersecurity</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                AI Cyber Shield
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-cyan-400">
                  {" "}Enterprise
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Protect your business with enterprise-grade AI-powered cybersecurity. Advanced threat detection, 
                24/7 monitoring, and automated incident response with 99.9% accuracy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-red-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-red-500/25 hover:scale-105"
                >
                  Get Security Assessment
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

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">99.9%</div>
                  <div className="text-gray-300 text-sm">Detection Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">30s</div>
                  <div className="text-gray-300 text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">100%</div>
                  <div className="text-gray-300 text-sm">Compliance</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Metrics Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Enterprise-Grade
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-cyan-400">
                  {" "}Security Metrics
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered cybersecurity platform delivers unmatched protection with industry-leading performance metrics.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 text-center"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-red-500 to-cyan-600 flex items-center justify-center mb-4 mx-auto text-white group-hover:scale-110 transition-transform">
                    {metric.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-300 transition-colors">
                    {metric.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced Security
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-cyan-400">
                  {" "}Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cybersecurity protection powered by artificial intelligence and machine learning.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-cyan-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-300 transition-colors">
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

        {/* Compliance Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Industry
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-cyan-400">
                  {" "}Compliance
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet all major compliance standards with our certified security platform.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {complianceStandards.map((standard, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <p className="text-white font-semibold text-sm">{standard}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Flexible Security
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-cyan-400">
                  {" "}Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security level that matches your organization's needs and budget.
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
                      <span className="bg-gradient-to-r from-red-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-red-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-cyan-600 text-white hover:from-red-600 hover:to-cyan-700'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Security
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-cyan-400">
                  {" "}Professionals
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what security experts say about AI Cyber Shield Enterprise
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-red-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Don't wait for a security breach. Protect your business with AI-powered cybersecurity that adapts to evolving threats.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-red-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-red-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-red-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-red-500/25 hover:scale-105"
              >
                Get Security Assessment
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
}