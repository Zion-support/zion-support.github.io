import { ArrowRight, Shield, CheckCircle, TrendingUp, Users, Award, Clock, Zap, Database, Brain, Star, Mail, Smartphone, Globe, AlertTriangle, Lock, Eye, FileText } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionSecurityShieldPage() {
  const features = [
    {
      title: "AI Threat Detection & Analysis",
      description: "Advanced machine learning algorithms continuously monitor your systems for threats and anomalies in real-time.",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Real-time threat detection", "Behavioral analysis", "Anomaly detection", "Machine learning models"]
    },
    {
      title: "Automated Incident Response",
      description: "Instantly respond to security threats with automated workflows that contain and mitigate attacks before they spread.",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Instant threat containment", "Automated remediation", "Custom response rules", "Escalation protocols"]
    },
    {
      title: "Compliance Monitoring",
      description: "Stay compliant with GDPR, HIPAA, SOX, and other regulations with automated monitoring and reporting.",
      icon: <FileText className="w-6 h-6" />,
      benefits: ["GDPR compliance", "HIPAA monitoring", "SOX reporting", "Audit trails"]
    },
    {
      title: "24/7 Security Monitoring",
      description: "Round-the-clock monitoring by our security experts and AI systems to protect your business at all times.",
      icon: <Eye className="w-6 h-6" />,
      benefits: ["24/7 SOC monitoring", "Expert security team", "Real-time alerts", "Incident response"]
    }
  ];

  const securityMetrics = [
    { metric: "Threat Detection Accuracy", value: "99.9%", icon: <Shield className="w-5 h-5" /> },
    { metric: "Response Time", value: "< 30 seconds", icon: <Clock className="w-5 h-5" /> },
    { metric: "False Positive Rate", value: "< 0.1%", icon: <AlertTriangle className="w-5 h-5" /> },
    { metric: "Uptime SLA", value: "99.99%", icon: <Award className="w-5 h-5" /> }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$49",
      originalPrice: "$79",
      period: "per month",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic threat detection",
        "Email security",
        "Firewall monitoring",
        "Weekly security reports",
        "Email support",
        "Up to 25 users",
        "1GB log storage"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      originalPrice: "$249",
      period: "per month",
      description: "Ideal for growing businesses with advanced security needs",
      features: [
        "Advanced AI threat detection",
        "Automated incident response",
        "Compliance monitoring (GDPR, HIPAA)",
        "Real-time security alerts",
        "Priority support",
        "Up to 100 users",
        "10GB log storage",
        "Vulnerability assessments",
        "Penetration testing"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      originalPrice: "$599",
      period: "per month",
      description: "Complete security solution for large organizations",
      features: [
        "Full AI security suite",
        "Custom security policies",
        "Advanced compliance reporting",
        "24/7 dedicated support",
        "Unlimited users",
        "Unlimited log storage",
        "Custom integrations",
        "On-premise deployment",
        "SLA guarantees",
        "Security consulting"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Martinez",
      company: "Financial Services Corp",
      role: "CISO",
      content: "Zion Security Shield has been a game-changer for our security posture. The AI threat detection caught several advanced persistent threats that traditional tools missed.",
      rating: 5,
      avatar: "DM"
    },
    {
      name: "Lisa Thompson",
      company: "Healthcare Solutions",
      role: "IT Director",
      content: "The compliance monitoring feature is incredible. We're now fully compliant with HIPAA requirements and the automated reporting saves us hours every week.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "James Wilson",
      company: "E-commerce Platform",
      role: "Security Manager",
      content: "The automated incident response is lightning fast. We went from manual threat response taking hours to automated containment in under 30 seconds.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const stats = [
    { number: "5,000+", label: "Protected Organizations", icon: <Shield className="w-6 h-6" /> },
    { number: "99.9%", label: "Threat Detection Accuracy", icon: <Award className="w-6 h-6" /> },
    { number: "30s", label: "Average Response Time", icon: <Clock className="w-6 h-6" /> },
    { number: "24/7", label: "Security Monitoring", icon: <Eye className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Security Shield - AI-Powered Cybersecurity Protection | Zion Tech Group</title>
        <meta
          name="description"
          content="Advanced cybersecurity protection with AI-powered threat detection, automated incident response, and compliance monitoring. Protect your business with Zion Security Shield."
        />
        <meta
          name="keywords"
          content="cybersecurity, threat detection, incident response, compliance monitoring, security automation, AI security, enterprise security, data protection"
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
                  <span className="text-red-400 text-sm font-medium">Advanced Security</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Zion
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 animate-pulse">
                    {" "}Security Shield
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Advanced cybersecurity protection with AI-powered threat detection, automated incident response, 
                  and compliance monitoring. Keep your business secure with enterprise-grade security solutions.
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
                    Security Demo
                    <Shield className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                  </Link>
                </div>
                
                {/* Security Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {securityMetrics.map((metric, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center mr-3">
                          {metric.icon}
                        </div>
                        <div className="text-2xl font-bold text-white">{metric.value}</div>
                      </div>
                      <div className="text-sm text-gray-300">{metric.metric}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Security Dashboard</h3>
                    <p className="text-gray-300">Real-time threat monitoring</p>
                  </div>
                  
                  {/* Mock Security Dashboard */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">System Status</span>
                        <div className="flex items-center text-green-400">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          <span className="text-sm font-medium">Secure</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">Threats Blocked</span>
                        <span className="text-lg font-bold text-white">1,247</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Last 24 hours</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">Response Time</span>
                        <span className="text-lg font-bold text-white">0.8s</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Average</div>
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
                  Advanced Security Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cybersecurity protection powered by AI and machine learning to keep your business secure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
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
                Secure Your Business Today
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security plan that fits your organization's needs. All plans include our core security features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-red-500/50 shadow-2xl shadow-red-500/10'
                      : 'border-white/20 hover:border-red-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-lg text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <div className="text-sm text-gray-400 line-through">{plan.originalPrice}{plan.period}</div>
                    <p className="text-gray-300 text-sm mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center block ${
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Security Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what security professionals say about Zion Security Shield
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Don't Wait for a Security Breach
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Protect your business with enterprise-grade cybersecurity. Join thousands of organizations 
              already using Zion Security Shield to stay secure and compliant.
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
                Start Your Free Trial
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
        </section>
      </div>
    </>
  );
}