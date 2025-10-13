import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Zap, Star, ArrowRight, Users, Award, BarChart3, Sparkles, Globe, Brain, Key } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIQuantumEncryptionPage = () => {
  const features = [
    {
      title: "Quantum Key Distribution",
      description: "Unbreakable encryption using quantum mechanics principles for ultimate data security",
      icon: <Key className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced AI algorithms detect and prevent quantum attacks in real-time",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Zero-Knowledge Architecture",
      description: "Complete privacy with zero-knowledge proofs ensuring no data exposure",
      icon: <Lock className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Post-Quantum Cryptography",
      description: "Future-proof encryption resistant to quantum computer attacks",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const securityLevels = [
    {
      level: "Military Grade",
      encryption: "AES-256 + Quantum",
      description: "Ultimate security for classified data and government operations",
      icon: <Shield className="w-6 h-6" />,
      color: "text-red-400"
    },
    {
      level: "Enterprise",
      encryption: "AES-128 + Quantum",
      description: "High-level security for corporate data and financial transactions",
      icon: <Lock className="w-6 h-6" />,
      color: "text-yellow-400"
    },
    {
      level: "Standard",
      encryption: "AES-256",
      description: "Strong encryption for personal and small business data",
      icon: <Key className="w-6 h-6" />,
      color: "text-green-400"
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$49",
      period: "month",
      description: "Perfect for individuals and small businesses",
      features: [
        "Up to 1TB encrypted storage",
        "AES-256 encryption",
        "Basic quantum key distribution",
        "Mobile app access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$199",
      period: "month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Up to 10TB encrypted storage",
        "Advanced quantum encryption",
        "AI threat detection",
        "Team collaboration tools",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "month",
      description: "For large organizations requiring maximum security",
      features: [
        "Unlimited encrypted storage",
        "Military-grade quantum encryption",
        "Advanced AI threat prevention",
        "Zero-knowledge architecture",
        "Dedicated security team",
        "24/7 phone support",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Alex Thompson",
      company: "CyberDefense Corp",
      role: "Chief Security Officer",
      content: "The quantum encryption is absolutely revolutionary. We've never felt more secure with our data protection.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      company: "Financial Services Inc.",
      role: "IT Director",
      content: "Finally, a solution that can protect against future quantum attacks. Our clients trust us more than ever.",
      rating: 5
    },
    {
      name: "James Wilson",
      company: "Government Agency",
      role: "Security Analyst",
      content: "Military-grade security with quantum encryption. This is exactly what we needed for our classified operations.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Quantum Encryption - Unbreakable Data Security | Zion Tech Group"
        description="Revolutionary AI-powered quantum encryption technology for unbreakable data security. Military-grade protection against quantum attacks with zero-knowledge architecture."
        keywords="quantum encryption, data security, quantum cryptography, AI security, unbreakable encryption, post-quantum cryptography, zero-knowledge proofs"
        canonical="https://ziontechgroup.com/ai-quantum-encryption"
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
            <span className="text-cyan-400 text-sm font-medium">Unbreakable Quantum Security</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Quantum Encryption
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary AI-powered quantum encryption technology that provides unbreakable data security. 
            Protect your most sensitive information with military-grade quantum cryptography.
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
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Lock className="w-5 h-5" />}
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
              Unbreakable Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the future of data protection with quantum-powered encryption
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
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

      {/* Security Levels Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Levels
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right level of protection for your data
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {securityLevels.map((level, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r from-slate-700 to-slate-600 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <div className={level.color}>
                      {level.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {level.level}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-4">{level.encryption}</p>
                  <p className="text-gray-300 leading-relaxed">
                    {level.description}
                  </p>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Security Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing for every security need
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
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Star className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                >
                  Get Started
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
              See what security professionals say about our quantum encryption
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
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
              Secure Your Future Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Don't wait for quantum attacks to become a reality. 
              Protect your data with unbreakable quantum encryption now.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Shield className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/pricing"
                variant="outline"
                size="lg"
                icon={<BarChart3 className="w-5 h-5" />}
              >
                View All Plans
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIQuantumEncryptionPage;