import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Zap, Star, ArrowRight, CheckCircle, Users, Clock, Award, Database, Key } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const ZionBlockchainSecurityPage = () => {
  const features = [
    {
      title: "Smart Contract Auditing",
      description: "Comprehensive security analysis of smart contracts with automated vulnerability detection",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Automated scanning", "Manual review", "Gas optimization", "Compliance checks"]
    },
    {
      title: "DeFi Security Monitoring",
      description: "Real-time monitoring of DeFi protocols for security threats and anomalies",
      icon: <Eye className="w-6 h-6" />,
      benefits: ["24/7 monitoring", "Threat detection", "Risk assessment", "Alert system"]
    },
    {
      title: "Multi-Chain Protection",
      description: "Security solutions across all major blockchain networks and protocols",
      icon: <Lock className="w-6 h-6" />,
      benefits: ["Ethereum support", "BSC integration", "Polygon coverage", "Cross-chain security"]
    },
    {
      title: "Quantum-Resistant Encryption",
      description: "Future-proof security with quantum-resistant cryptographic algorithms",
      icon: <Key className="w-6 h-6" />,
      benefits: ["Post-quantum crypto", "Future-proofing", "Advanced encryption", "Secure key management"]
    }
  ];

  const pricingPlans = [
    {
      name: "Basic Security",
      price: "$199",
      period: "/month",
      description: "Perfect for small DeFi projects",
      features: [
        "1 smart contract audit/month",
        "Basic monitoring",
        "Email alerts",
        "Standard reports",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional Security",
      price: "$599",
      period: "/month",
      description: "Ideal for growing protocols",
      features: [
        "5 smart contract audits/month",
        "Advanced monitoring",
        "Real-time alerts",
        "Detailed analytics",
        "Priority support",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise Security",
      price: "$1,999",
      period: "/month",
      description: "For large blockchain organizations",
      features: [
        "Unlimited audits",
        "Full monitoring suite",
        "Custom security protocols",
        "24/7 dedicated support",
        "White-label solution",
        "On-premise deployment",
        "Compliance assistance"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Alex Chen",
      role: "CTO",
      company: "DeFi Protocol Inc.",
      content: "Zion Blockchain Security has been instrumental in securing our DeFi protocol. Their smart contract audits caught critical vulnerabilities before launch.",
      rating: 5
    },
    {
      name: "Sarah Kim",
      role: "Security Lead",
      company: "CryptoVault",
      content: "The real-time monitoring has saved us from multiple potential attacks. The alert system is incredibly responsive and accurate.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Founder",
      company: "Blockchain Startup",
      content: "Their quantum-resistant encryption gives us confidence in our long-term security strategy. The team is incredibly knowledgeable.",
      rating: 5
    }
  ];

  const stats = [
    { number: "99.9%", label: "Security Uptime", icon: <Shield className="w-6 h-6" /> },
    { number: "500+", label: "Smart Contracts Audited", icon: <Lock className="w-6 h-6" /> },
    { number: "50+", label: "DeFi Protocols Protected", icon: <Database className="w-6 h-6" /> },
    { number: "0", label: "Security Breaches", icon: <Eye className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Zion Blockchain Security - Advanced DeFi & Smart Contract Security | Zion Tech Group"
        description="Comprehensive blockchain security solutions for DeFi protocols and smart contracts. Quantum-resistant encryption, real-time monitoring, and automated auditing. Secure your blockchain assets today."
        keywords="blockchain security, DeFi security, smart contract auditing, quantum encryption, cryptocurrency security, blockchain monitoring, DeFi protection"
        canonical="https://ziontechgroup.com/zion-blockchain-security"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Shield className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Blockchain Security</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Zion
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
              {" "}Blockchain Security
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Protect your DeFi protocols and smart contracts with advanced blockchain security solutions. 
            Quantum-resistant encryption, real-time monitoring, and comprehensive auditing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Security Audit
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Shield className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
              Comprehensive blockchain security solutions designed to protect your DeFi protocols 
              and smart contracts from emerging threats and vulnerabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security-First Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security level that matches your blockchain project's needs and risk profile.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-400 shadow-2xl shadow-cyan-500/20'
                    : 'border-white/20 hover:border-cyan-400'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Blockchain Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what blockchain security experts are saying about Zion Blockchain Security
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Secure Your Blockchain Assets
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Don't wait for a security breach. Protect your DeFi protocols and smart contracts 
            with industry-leading blockchain security solutions. Get started today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Security Audit
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Demo
              <Clock className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionBlockchainSecurityPage;