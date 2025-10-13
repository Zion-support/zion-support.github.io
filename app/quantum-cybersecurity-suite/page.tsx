import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, BarChart3, ArrowRight, Star, CheckCircle, Clock, Users, Award, TrendingUp, Cpu, Database, Globe, Sparkles, Lock, Eye, AlertTriangle } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const QuantumCybersecuritySuitePage = () => {
  const features = [
    {
      title: "Quantum Encryption",
      description: "Next-generation quantum encryption algorithms that are virtually unbreakable by classical or quantum computers",
      icon: <Lock className="w-6 h-6" />,
      benefits: ["Quantum-resistant algorithms", "Future-proof security", "Military-grade encryption"]
    },
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced AI systems that detect and respond to threats in real-time using machine learning and behavioral analysis",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Real-time monitoring", "Predictive threat analysis", "Automated response"]
    },
    {
      title: "Zero Trust Architecture",
      description: "Implement zero trust security model with continuous verification and least privilege access principles",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Continuous verification", "Micro-segmentation", "Identity-based access"]
    },
    {
      title: "Quantum Key Distribution",
      description: "Secure key exchange using quantum mechanics principles for ultimate cryptographic security",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Unhackable key exchange", "Quantum entanglement", "Perfect secrecy"]
    }
  ];

  const securityLayers = [
    {
      title: "Network Security",
      description: "Advanced network protection with quantum-encrypted communications and intrusion detection",
      coverage: "100% network coverage",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Endpoint Protection",
      description: "Comprehensive endpoint security with AI-powered malware detection and behavioral analysis",
      coverage: "All device types supported",
      icon: <Cpu className="w-8 h-8" />
    },
    {
      title: "Data Protection",
      description: "Quantum-encrypted data storage and transmission with advanced backup and recovery systems",
      coverage: "99.99% data integrity",
      icon: <Database className="w-8 h-8" />
    },
    {
      title: "Identity Management",
      description: "Multi-factor authentication with biometric verification and quantum-secured identity tokens",
      coverage: "Zero identity breaches",
      icon: <Users className="w-8 h-8" />
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$499",
      period: "per month",
      description: "Perfect for small to medium businesses",
      features: [
        "Basic quantum encryption",
        "AI threat detection",
        "24/7 monitoring",
        "Email support",
        "Standard reporting",
        "Up to 100 users"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "per month",
      description: "Ideal for growing enterprises",
      features: [
        "Advanced quantum encryption",
        "AI-powered threat response",
        "24/7 SOC monitoring",
        "Priority support",
        "Advanced analytics",
        "Up to 1,000 users",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "per month",
      description: "For large organizations with complex needs",
      features: [
        "Full quantum security suite",
        "Custom AI models",
        "Dedicated security team",
        "24/7 phone support",
        "Custom reporting",
        "Unlimited users",
        "On-premise deployment",
        "Compliance consulting"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Robert Kim",
      company: "Global Finance Corp",
      role: "Chief Security Officer",
      content: "The quantum cybersecurity suite has provided us with unprecedented security. We've had zero breaches since implementation, and the AI threat detection is incredibly sophisticated.",
      rating: 5
    },
    {
      name: "Dr. Sarah Williams",
      company: "Healthcare Systems Inc",
      role: "IT Director",
      content: "This solution has given us the confidence to handle sensitive patient data securely. The quantum encryption ensures our data is protected against future threats.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "TechStart Solutions",
      role: "CTO",
      content: "The AI-powered threat detection has caught several sophisticated attacks before they could cause damage. It's like having a team of security experts working 24/7.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Quantum Cybersecurity Suite - Next-Gen Security Solutions | Zion Tech Group"
        description="Revolutionary quantum-powered cybersecurity suite with AI threat detection, quantum encryption, and zero trust architecture. Protect your organization from current and future threats."
        keywords="quantum cybersecurity, quantum encryption, AI threat detection, zero trust security, quantum key distribution, enterprise security, cybersecurity suite"
        canonical="https://ziontechgroup.com/quantum-cybersecurity-suite"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-purple-500/20 border border-red-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-red-400 mr-2" />
            <span className="text-red-400 text-sm font-medium">Military-Grade Quantum Security</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-cyan-400">
              Quantum Cybersecurity Suite
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The world's most advanced cybersecurity platform combining quantum encryption, AI-powered threat detection, 
            and zero trust architecture to protect your organization from current and future threats.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Shield className="w-5 h-5" />}
            >
              Get Security Assessment
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">100%</div>
              <div className="text-gray-300 text-sm">Threat detection rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">Zero</div>
              <div className="text-gray-300 text-sm">Successful breaches</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">AI monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.99%</div>
              <div className="text-gray-300 text-sm">Uptime guarantee</div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge quantum and AI technologies working together to provide unparalleled security
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Security Layers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive Security Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multi-layered security approach protecting every aspect of your digital infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityLayers.map((layer, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {layer.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{layer.title}</h3>
                <p className="text-gray-300 mb-4">{layer.description}</p>
                <div className="text-red-400 font-semibold">{layer.coverage}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your Security Level
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible security solutions tailored to your organization's needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-red-500/50 ring-2 ring-red-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-red-400 mb-2">{plan.price}</div>
                  <div className="text-gray-300">{plan.period}</div>
                  <p className="text-gray-400 text-sm mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full justify-center"
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by Security Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how quantum cybersecurity is protecting organizations worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-red-900/30 to-purple-900/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your organization with quantum-powered cybersecurity that's ready for tomorrow's threats
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Shield className="w-5 h-5" />}
              >
                Get Security Assessment
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Eye className="w-5 h-5" />}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Contact us: <span className="text-red-400">kleber@ziontechgroup.com</span> | <span className="text-red-400">+1 302 464 0950</span></p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default QuantumCybersecuritySuitePage;