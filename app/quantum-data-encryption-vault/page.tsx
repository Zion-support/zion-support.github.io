import React from 'react';
import { Link } from "react-router-dom";
import { Shield, Lock, Eye, Zap, CheckCircle, Star, ArrowRight, Brain, Globe, Sparkles, Users } from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";

const QuantumDataEncryptionVaultPage = () => {
  const features = [
    {
      title: "Quantum Encryption",
      description: "Unbreakable quantum encryption using quantum key distribution and post-quantum cryptography",
      icon: <Shield className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Zero-Knowledge Architecture",
      description: "Complete privacy with zero-knowledge proofs - even we can't access your data",
      icon: <Eye className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Key Distribution",
      description: "Secure key exchange using quantum mechanics principles for ultimate security",
      icon: <Lock className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced AI monitors for quantum decoherence and potential security breaches",
      icon: <Brain className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const securityFeatures = [
    "Quantum-resistant algorithms",
    "End-to-end encryption",
    "Perfect forward secrecy",
    "Multi-factor authentication",
    "Biometric access control",
    "Quantum random number generation",
    "Homomorphic encryption",
    "Secure multi-party computation"
  ];

  const pricingPlans = [
    {
      name: "Personal Vault",
      price: "$599",
      period: "per month",
      description: "Ultimate security for personal data and sensitive documents",
      features: [
        "Up to 1TB storage",
        "Quantum encryption",
        "Zero-knowledge architecture",
        "Mobile & desktop access",
        "24/7 monitoring",
        "Basic support"
      ],
      popular: false
    },
    {
      name: "Business Vault",
      price: "$1,299",
      period: "per month",
      description: "Enterprise-grade quantum security for business critical data",
      features: [
        "Up to 10TB storage",
        "Advanced quantum encryption",
        "Team collaboration tools",
        "API integrations",
        "Priority support",
        "Compliance reporting",
        "Custom retention policies"
      ],
      popular: true
    },
    {
      name: "Government Vault",
      price: "$2,999",
      period: "per month",
      description: "Military-grade quantum security for classified and sensitive operations",
      features: [
        "Unlimited storage",
        "Military-grade quantum encryption",
        "Air-gapped deployment options",
        "Dedicated security team",
        "24/7 on-site support",
        "Custom compliance frameworks",
        "Quantum key rotation",
        "Threat intelligence feeds"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "General Michael Thompson",
      company: "Defense Intelligence Agency",
      role: "Chief Information Security Officer",
      content: "The quantum encryption vault provides the highest level of security we've ever seen. Our classified data is now protected by the laws of physics themselves.",
      rating: 5
    },
    {
      name: "Dr. Lisa Chen",
      company: "Quantum Research Institute",
      role: "Director of Security",
      content: "This is the future of data protection. The quantum key distribution ensures that any attempt to intercept our data would be immediately detected.",
      rating: 5
    },
    {
      name: "James Rodriguez",
      company: "Global Financial Corp",
      role: "Chief Risk Officer",
      content: "Our most sensitive financial data is now protected by quantum encryption. The zero-knowledge architecture gives us complete confidence in our data security.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Quantum Data Encryption Vault - Unbreakable Security | Zion Tech Group"
        description="Military-grade quantum encryption vault with zero-knowledge architecture. Protect your most sensitive data with unbreakable quantum security and AI-powered threat detection."
        keywords="quantum encryption, data security, zero-knowledge, quantum key distribution, military-grade security, data protection, quantum cryptography"
        canonical="https://ziontechgroup.com/quantum-data-encryption-vault"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Shield className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Military-Grade Quantum Security</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Quantum Data Encryption Vault
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Protect your most sensitive data with unbreakable quantum encryption. 
            Our zero-knowledge architecture ensures complete privacy while AI-powered threat detection provides ultimate security.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Shield className="w-5 h-5" />}
            >
              Secure Your Data
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              View Security Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Quantum Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the ultimate in data protection with our revolutionary quantum encryption technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Security Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Security Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security features powered by quantum mechanics and artificial intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Security Level
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible quantum security solutions for every level of data protection needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Secure My Data
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Security Experts
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what security professionals say about our quantum encryption technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Protect Your Most Valuable Asset
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Don't wait for a breach to secure your data. Join the quantum security revolution 
              and protect your information with the most advanced encryption technology available.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Shield className="w-5 h-5" />}
              >
                Start Securing Now
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Eye className="w-5 h-5" />}
              >
                Security Assessment
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default QuantumDataEncryptionVaultPage;