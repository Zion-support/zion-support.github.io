import { ArrowRight, Shield, CheckCircle, Star, Users, AlertTriangle, Zap, Mail, Smartphone, Globe, Lock, Eye, FileCheck } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionSecurityShield() {
  const features = [
    {
      title: "Real-time Threat Detection",
      description: "Advanced AI algorithms monitor your systems 24/7 to detect and prevent cyber threats before they cause damage.",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: "Automated Incident Response",
      description: "Instant response to security incidents with automated containment and remediation procedures.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Compliance Monitoring",
      description: "Automated compliance reporting for GDPR, HIPAA, SOC 2, and other industry standards.",
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      title: "24/7 Security Monitoring",
      description: "Round-the-clock monitoring by our expert security team with immediate threat response.",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Security Training",
      description: "Comprehensive security awareness training for your team to prevent human error attacks.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Advanced Encryption",
      description: "End-to-end encryption for all data transmission and storage with military-grade security.",
      icon: <Lock className="w-6 h-6" />
    }
  ];

  const pricingPlans = [
    {
      name: "Basic Protection",
      price: "$49",
      period: "per month",
      description: "Essential security for small businesses",
      features: [
        "Real-time threat detection",
        "Basic incident response",
        "Email security",
        "Firewall protection",
        "Monthly security reports",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional Security",
      price: "$99",
      period: "per month",
      description: "Most popular for growing businesses",
      features: [
        "Advanced threat detection",
        "Automated incident response",
        "Compliance monitoring",
        "24/7 security monitoring",
        "Security training modules",
        "Priority support",
        "Custom security policies"
      ],
      popular: true
    },
    {
      name: "Enterprise Shield",
      price: "$199",
      period: "per month",
      description: "Complete security for large organizations",
      features: [
        "AI-powered threat detection",
        "Advanced incident response",
        "Full compliance suite",
        "Dedicated security team",
        "Custom training programs",
        "24/7 phone support",
        "Penetration testing",
        "Security audit reports"
      ],
      popular: false
    }
  ];

  const securityStats = [
    { number: "99.9%", label: "Threat Detection Rate", icon: <Shield className="w-6 h-6" /> },
    { number: "< 1min", label: "Response Time", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "Monitoring", icon: <Eye className="w-6 h-6" /> },
    { number: "100%", label: "Compliance Coverage", icon: <FileCheck className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "David Martinez",
      company: "Financial Services Inc.",
      role: "CISO",
      content: "Zion Security Shield has been a game-changer for our security posture. The automated threat detection prevented 3 major attacks in the last quarter alone.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      company: "Healthcare Solutions",
      role: "IT Director",
      content: "The compliance monitoring feature saved us countless hours. We're now fully compliant with HIPAA requirements with minimal effort.",
      rating: 5
    },
    {
      name: "Robert Kim",
      company: "E-commerce Platform",
      role: "Security Manager",
      content: "The 24/7 monitoring gives us peace of mind. We know our systems are protected even when we're not actively watching.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Security Shield - Advanced Cybersecurity Protection | Zion Tech Group</title>
        <meta
          name="description"
          content="Protect your business with Zion Security Shield. Advanced threat detection, automated incident response, and 24/7 monitoring. Starting at $49/month."
        />
        <meta
          name="keywords"
          content="cybersecurity, threat detection, incident response, security monitoring, compliance, data protection, network security, AI security"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
                <Shield className="w-4 h-4 text-red-400 mr-2" />
                <span className="text-red-400 text-sm font-medium">Advanced Cybersecurity Protection</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Zion
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 animate-pulse">
                  {" "}Security Shield
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Protect your business with advanced cybersecurity solutions. Real-time threat detection, 
                automated incident response, and 24/7 monitoring to keep your data safe.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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

              {/* Security Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {securityStats.map((stat, index) => (
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
                Advanced cybersecurity solutions designed to protect your business from evolving threats.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-red-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Flexible Security Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security level that matches your business needs. All plans include a free security assessment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 relative ${plan.popular ? 'ring-2 ring-red-400/50' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-orange-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-red-400">${plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Trusted by Security Professionals
                </span>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-red-900/30 to-orange-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Don't Wait for a Security Breach
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Protect your business today with Zion Security Shield. Get a free security assessment 
              and see how vulnerable your systems really are.
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
                Get Security Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
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