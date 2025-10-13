import { ArrowRight, Shield, Lock, AlertTriangle, Eye, CheckCircle, Star, Mail, Smartphone, Globe, Zap, Database, Target, Award, Clock, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionSecurityShield() {
  const features = [
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms detect and prevent cyber threats in real-time",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["99.8% threat detection rate", "Sub-5 minute response time", "Zero false positives", "Continuous learning"]
    },
    {
      title: "Automated Incident Response",
      description: "Instant response to security incidents with automated containment and remediation",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Instant containment", "Automated remediation", "Incident documentation", "Escalation protocols"]
    },
    {
      title: "Compliance Monitoring",
      description: "Automated compliance monitoring for GDPR, HIPAA, SOC2, and other regulatory requirements",
      icon: <CheckCircle className="w-6 h-6" />,
      benefits: ["Multi-framework support", "Automated audits", "Real-time alerts", "Compliance reports"]
    },
    {
      title: "24/7 Security Monitoring",
      description: "Round-the-clock monitoring of your infrastructure with expert security analysts",
      icon: <Eye className="w-6 h-6" />,
      benefits: ["24/7 SOC monitoring", "Expert analysts", "Threat hunting", "Security intelligence"]
    },
    {
      title: "Vulnerability Scanning",
      description: "Comprehensive vulnerability assessments and penetration testing services",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Automated scanning", "Penetration testing", "Risk assessment", "Remediation guidance"]
    },
    {
      title: "Security Training",
      description: "Employee security awareness training and phishing simulation programs",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Interactive training", "Phishing simulations", "Progress tracking", "Certification programs"]
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses with basic security needs",
      features: [
        "Basic threat detection",
        "Email security",
        "Web filtering",
        "Basic reporting",
        "Email support",
        "Up to 25 users",
        "30-day data retention"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Comprehensive security for growing businesses",
      features: [
        "Advanced threat detection",
        "Endpoint protection",
        "Network monitoring",
        "Compliance monitoring",
        "Priority support",
        "Up to 100 users",
        "1-year data retention",
        "Incident response",
        "Vulnerability scanning"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "Complete security suite for large organizations",
      features: [
        "Everything in Professional",
        "24/7 SOC monitoring",
        "Custom integrations",
        "Dedicated security team",
        "Unlimited users",
        "Unlimited data retention",
        "White-label options",
        "On-premise deployment",
        "Custom training programs"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "Financial Services Inc.",
      role: "CISO",
      content: "Zion Security Shield prevented 3 major cyber attacks in the first month. The AI detection is incredibly accurate and the response time is unmatched.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Martinez",
      company: "Healthcare Solutions",
      role: "IT Director",
      content: "The compliance monitoring saved us countless hours of manual work. We passed our HIPAA audit with flying colors thanks to their automated reporting.",
      rating: 5,
      avatar: "LM"
    },
    {
      name: "Robert Johnson",
      company: "E-commerce Platform",
      role: "Security Manager",
      content: "The 24/7 monitoring gives us peace of mind. Their security analysts caught a sophisticated attack that our previous solution missed.",
      rating: 5,
      avatar: "RJ"
    }
  ];

  const stats = [
    { number: "99.8%", label: "Threat Detection Rate", icon: <Shield className="w-6 h-6" /> },
    { number: "5min", label: "Average Response Time", icon: <Clock className="w-6 h-6" /> },
    { number: "100%", label: "Compliance Coverage", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "24/7", label: "Security Monitoring", icon: <Eye className="w-6 h-6" /> }
  ];

  const securityThreats = [
    { name: "Malware", percentage: 95, color: "from-red-500 to-orange-500" },
    { name: "Phishing", percentage: 98, color: "from-orange-500 to-yellow-500" },
    { name: "Ransomware", percentage: 99, color: "from-yellow-500 to-green-500" },
    { name: "DDoS", percentage: 97, color: "from-green-500 to-cyan-500" },
    { name: "Insider Threats", percentage: 92, color: "from-cyan-500 to-blue-500" }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Security Shield - Advanced AI Cybersecurity Protection | Zion Tech Group</title>
        <meta
          name="description"
          content="Protect your business with Zion Security Shield. AI-powered threat detection, automated incident response, compliance monitoring, and 24/7 security monitoring. Starting from $49/month with free security audit."
        />
        <meta
          name="keywords"
          content="cybersecurity, threat detection, incident response, compliance monitoring, security monitoring, vulnerability scanning, security training, AI security, SOC monitoring"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-security-shield" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
                  <Shield className="w-4 h-4 text-red-400 mr-2" />
                  <span className="text-red-400 text-sm font-medium">AI-Powered Security</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Zion Security
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 animate-pulse">
                    {" "}Shield
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Advanced cybersecurity protection with AI-powered threat detection, automated incident response, 
                  and compliance monitoring. Keep your business safe with enterprise-grade security.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-red-500/25 hover:scale-105"
                  >
                    Get Free Security Audit
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
                
                {/* Key Benefits */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Free security audit</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">SOC2 compliant</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">24/7 monitoring</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Expert support</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Security Dashboard</h3>
                    <p className="text-gray-300">Real-time threat monitoring</p>
                  </div>
                  
                  {/* Threat Detection Stats */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">99.8%</div>
                      <div className="text-white text-sm">Threat Detection Rate</div>
                    </div>
                    
                    <div className="space-y-3">
                      {securityThreats.map((threat, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-white">{threat.name}</span>
                            <span className="text-gray-300">{threat.percentage}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full bg-gradient-to-r ${threat.color}`}
                              style={{ width: `${threat.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
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

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Comprehensive Security Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to protect your business from cyber threats
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
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Security Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security level that fits your business needs. All plans include free security audit.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular 
                      ? 'border-red-400/50 shadow-2xl shadow-red-500/20' 
                      : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-red-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700 shadow-lg hover:shadow-red-500/25'
                        : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900'
                    } group`}
                  >
                    Get Free Audit
                    <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
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
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't wait for a cyber attack. Get your free security audit today and discover 
                vulnerabilities before hackers do.
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
                  Get Free Security Audit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/micro-saas"
                  className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  View All Solutions
                  <Shield className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}