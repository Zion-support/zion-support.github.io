import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Shield, Lock, Key, Globe, Clock, Users, Award, Brain, Sparkles, Zap, Eye, FileText, Database } from 'lucide-react';

export default function QuantumDataEncryptionVault() {
  const features = [
    {
      title: "Quantum Encryption",
      description: "Unbreakable quantum encryption using quantum key distribution (QKD) technology",
      icon: <Shield className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Zero-Knowledge Architecture",
      description: "Complete data privacy with zero-knowledge proof protocols and homomorphic encryption",
      icon: <Eye className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Key Distribution",
      description: "Secure key exchange using quantum mechanics principles for ultimate security",
      icon: <Key className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data Sovereignty",
      description: "Complete control over data location and access with quantum-secured storage",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Compliance Ready",
      description: "Built-in compliance with GDPR, HIPAA, SOX, and other regulatory requirements",
      icon: <Award className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Quantum-Resistant",
      description: "Future-proof encryption that resists quantum computer attacks",
      icon: <Zap className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$599",
      period: "/month",
      description: "Perfect for individuals and small businesses",
      features: [
        "1TB quantum-encrypted storage",
        "Basic quantum key distribution",
        "Zero-knowledge architecture",
        "Email support",
        "Mobile app access",
        "Basic compliance tools"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$1,999",
      period: "/month",
      description: "Ideal for growing businesses and enterprises",
      features: [
        "10TB quantum-encrypted storage",
        "Advanced quantum key distribution",
        "Full zero-knowledge architecture",
        "Priority support",
        "API access",
        "Advanced compliance tools",
        "Team management",
        "Audit logging"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "/month",
      description: "For large organizations and government agencies",
      features: [
        "Unlimited quantum-encrypted storage",
        "Custom quantum algorithms",
        "Dedicated account manager",
        "24/7 phone support",
        "Advanced API access",
        "Custom compliance frameworks",
        "White-label options",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Williams",
      company: "Global Financial Corp",
      role: "Chief Security Officer",
      content: "The quantum encryption has given us unprecedented security. We can now store sensitive financial data with complete confidence in its protection.",
      rating: 5,
      avatar: "SW"
    },
    {
      name: "Michael Chen",
      company: "Healthcare Data Systems",
      role: "Data Protection Officer",
      content: "This platform has revolutionized our data security. The zero-knowledge architecture ensures patient data privacy while maintaining compliance.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Elena Rodriguez",
      company: "Government Security Agency",
      role: "Cybersecurity Director",
      content: "The quantum-resistant encryption is exactly what we needed for classified information. The security level is unmatched in the industry.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const securityFeatures = [
    {
      feature: "Quantum Key Distribution",
      description: "Unbreakable key exchange using quantum mechanics",
      icon: <Key className="w-6 h-6" />
    },
    {
      feature: "Homomorphic Encryption",
      description: "Compute on encrypted data without decryption",
      icon: <Brain className="w-6 h-6" />
    },
    {
      feature: "Zero-Knowledge Proofs",
      description: "Verify data without revealing its contents",
      icon: <Eye className="w-6 h-6" />
    },
    {
      feature: "Quantum Random Number Generation",
      description: "True randomness for cryptographic keys",
      icon: <Zap className="w-6 h-6" />
    },
    {
      feature: "Post-Quantum Cryptography",
      description: "Algorithms resistant to quantum attacks",
      icon: <Shield className="w-6 h-6" />
    },
    {
      feature: "Multi-Factor Authentication",
      description: "Advanced authentication with quantum security",
      icon: <Lock className="w-6 h-6" />
    }
  ];

  const complianceStandards = [
    {
      standard: "GDPR",
      description: "General Data Protection Regulation compliance",
      icon: <FileText className="w-6 h-6" />
    },
    {
      standard: "HIPAA",
      description: "Healthcare data protection standards",
      icon: <Database className="w-6 h-6" />
    },
    {
      standard: "SOX",
      description: "Sarbanes-Oxley Act compliance",
      icon: <Award className="w-6 h-6" />
    },
    {
      standard: "ISO 27001",
      description: "Information security management",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const performanceMetrics = [
    {
      metric: "Encryption Strength",
      value: "256-bit+",
      description: "Quantum-resistant encryption"
    },
    {
      metric: "Uptime",
      value: "99.99%",
      description: "Service availability guarantee"
    },
    {
      metric: "Data Integrity",
      value: "100%",
      description: "Tamper-proof data storage"
    },
    {
      metric: "Compliance",
      value: "100%",
      description: "Regulatory compliance coverage"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Quantum Data Encryption Vault - Zion Tech Group | Unbreakable Security</title>
        <meta
          name="description"
          content="Revolutionary quantum-powered data encryption vault with unbreakable security. Zero-knowledge architecture, quantum key distribution, and complete data sovereignty for ultimate protection."
        />
        <meta
          name="keywords"
          content="quantum encryption, data vault, quantum security, zero-knowledge, homomorphic encryption, quantum key distribution, data sovereignty, compliance, cybersecurity"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">Unbreakable Security</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Quantum Data
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 animate-pulse">
                {" "}Encryption Vault
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionary quantum-powered data protection with unbreakable encryption. 
              Zero-knowledge architecture ensures complete privacy and data sovereignty.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">Quantum encryption</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">Zero-knowledge architecture</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">Complete compliance</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">Data sovereignty</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                <Shield className="w-5 h-5 mr-2 inline" />
                Security Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Security Performance
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unmatched security metrics that guarantee the highest level of data protection.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {performanceMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">
                    {metric.metric}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Advanced Security Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge quantum technology for the ultimate in data protection and privacy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-blue-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Quantum Security Technologies
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced quantum technologies that provide unbreakable security for your most sensitive data.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((security, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {security.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">
                    {security.feature}
                  </h3>
                  <p className="text-gray-300 text-center text-sm">
                    {security.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Compliance Standards
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built-in compliance with major regulatory frameworks and security standards.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceStandards.map((standard, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {standard.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {standard.standard}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {standard.description}
                  </p>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Security Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security level that matches your data protection requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular
                      ? 'border-blue-500/50 shadow-blue-500/20 scale-105'
                      : 'border-white/10 hover:border-blue-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-400 hover:to-cyan-400'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Trusted by Leaders
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how leading organizations are protecting their most sensitive data with quantum encryption.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
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
                Ready to Secure Your Data with Quantum Technology?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Protect your most sensitive information with unbreakable quantum encryption and zero-knowledge architecture.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                >
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Security Consultation
                </Link>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a></p>
                <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}