import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lock, Eye, AlertTriangle, CheckCircle, Mail, Smartphone, Award, Clock, Users, BarChart3, Activity, FileText, Globe2, Database, Server, Zap } from 'lucide-react';

export default function CybersecuritySolutions() {
  const services = [
    {
      name: "Security Assessment",
      description: "Comprehensive security evaluation and vulnerability assessment of your systems",
      icon: <Eye className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $1,999",
      features: ["Vulnerability Scanning", "Penetration Testing", "Security Audit", "Risk Assessment", "Compliance Check"]
    },
    {
      name: "Threat Detection & Response",
      description: "Advanced threat detection and automated incident response systems",
      icon: <AlertTriangle className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      price: "Starting at $2,499/month",
      features: ["24/7 Monitoring", "AI Threat Detection", "Incident Response", "Forensic Analysis", "Threat Intelligence"]
    },
    {
      name: "Security Implementation",
      description: "Complete security infrastructure setup and hardening",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      price: "Starting at $3,999",
      features: ["Firewall Setup", "Access Controls", "Encryption", "Security Policies", "Training"]
    },
    {
      name: "Compliance Management",
      description: "Ensure compliance with industry standards and regulations",
      icon: <FileText className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      price: "Starting at $1,499/month",
      features: ["GDPR Compliance", "HIPAA Compliance", "SOC 2", "ISO 27001", "PCI DSS"]
    },
    {
      name: "Security Training",
      description: "Comprehensive security awareness training for your team",
      icon: <Users className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $299/person",
      features: ["Phishing Simulation", "Security Awareness", "Incident Response Training", "Best Practices", "Certification"]
    },
    {
      name: "Managed Security",
      description: "Complete managed security services with 24/7 monitoring",
      icon: <Activity className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $4,999/month",
      features: ["24/7 SOC", "Threat Hunting", "Incident Response", "Security Updates", "Dedicated Team"]
    }
  ];

  const securityThreats = [
    { name: "Malware", blocked: "99.8%", color: "from-red-500 to-orange-500" },
    { name: "Phishing", blocked: "99.5%", color: "from-yellow-500 to-orange-500" },
    { name: "DDoS", blocked: "100%", color: "from-blue-500 to-cyan-500" },
    { name: "Ransomware", blocked: "99.9%", color: "from-purple-500 to-pink-500" },
    { name: "Data Breaches", blocked: "99.7%", color: "from-green-500 to-emerald-500" },
    { name: "Insider Threats", blocked: "98.5%", color: "from-indigo-500 to-purple-500" }
  ];

  const pricingPlans = [
    {
      name: "Essential Security",
      price: "$399",
      period: "/month",
      description: "Basic security protection for small businesses",
      features: [
        "Basic threat detection",
        "Email support",
        "Monthly security reports",
        "Vulnerability scanning",
        "Security training",
        "Up to 25 users"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional Security",
      price: "$999",
      period: "/month",
      description: "Advanced security for growing businesses",
      features: [
        "Advanced threat detection",
        "Priority support",
        "Real-time monitoring",
        "Incident response",
        "Compliance management",
        "Up to 100 users",
        "Security training"
      ],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise Security",
      price: "$2,499",
      period: "/month",
      description: "Complete security suite for large organizations",
      features: [
        "Enterprise threat detection",
        "24/7 dedicated support",
        "Advanced monitoring",
        "Full incident response",
        "Complete compliance",
        "Unlimited users",
        "Custom security policies",
        "Dedicated security team"
      ],
      popular: false,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const testimonials = [
    {
      name: "Lisa Wang",
      company: "Financial Services",
      role: "CTO",
      content: "Zion's cybersecurity solutions have been a game-changer. We've had zero security incidents since implementation and passed all compliance audits.",
      rating: 5,
      improvement: "Zero security incidents"
    },
    {
      name: "Robert Martinez",
      company: "Healthcare Provider",
      role: "IT Director",
      content: "The threat detection system caught a sophisticated attack before it could cause damage. Their response time was incredible.",
      rating: 5,
      improvement: "100% threat prevention"
    },
    {
      name: "Jennifer Kim",
      company: "E-commerce Platform",
      role: "Security Manager",
      content: "The security training program transformed our team's awareness. We've reduced security incidents by 90%.",
      rating: 5,
      improvement: "90% incident reduction"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group | Advanced Security Services</title>
        <meta
          name="description"
          content="Comprehensive cybersecurity solutions including threat detection, incident response, compliance management, and security training. Protect your business with expert security services."
        />
        <meta
          name="keywords"
          content="cybersecurity, security solutions, threat detection, incident response, compliance management, security training, managed security services"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
              <Shield className="w-4 h-4 text-red-400 mr-2" />
              <span className="text-red-400 text-sm font-medium">Advanced Security Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              Cybersecurity
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 animate-pulse">
                {" "}Solutions
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Protect your business with our comprehensive cybersecurity solutions. From threat detection 
              to compliance management, we provide enterprise-grade security services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-red-500/25 hover:scale-105"
              >
                Get Security Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Security Audit
                <Shield className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Threat Detection Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Security Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-300 text-sm">Businesses Protected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">Zero</div>
                <div className="text-gray-300 text-sm">Successful Breaches</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Security Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions designed to protect your business from all threats.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-red-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-center mb-4">{service.description}</p>
                  <div className="text-red-400 font-bold text-lg text-center mb-4">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Threat Protection Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Threat Protection
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered security systems block threats before they can cause damage.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {securityThreats.map((threat, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${threat.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                  >
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">{threat.name}</div>
                  <div className="text-red-300 text-xs font-bold">{threat.blocked} blocked</div>
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
                Security Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security plan that fits your business needs and budget.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-red-400 bg-gradient-to-br from-red-500/10 to-orange-500/10'
                      : 'border-white/20 hover:border-red-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">/{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how we've helped businesses protect their assets with our security solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 text-yellow-400 fill-current">⭐</div>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    <div className="text-xs text-red-400 mt-1">{testimonial.improvement}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-red-900/30 to-orange-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait for a security breach. Contact our cybersecurity experts today for a free security assessment.
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
                  <Globe2 className="w-6 h-6 text-white" />
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
                Get Free Security Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Pricing
                <Award className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}