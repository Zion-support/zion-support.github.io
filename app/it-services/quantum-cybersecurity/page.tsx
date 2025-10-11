'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock,
  Target,
  Settings,
  BarChart,
  Users,
  Globe,
  FileText,
  Cpu,
  Heart,
  DollarSign,
  TrendingUp,
  MessageSquare,
  Atom,
  Database,
  Network,
  AlertTriangle
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const QuantumCybersecurityPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const features = [
    {
      icon: <Atom className="w-6 h-6 text-cyan-400" />,
      title: "Quantum-Safe Encryption",
      description: "Implement post-quantum cryptographic algorithms that are resistant to quantum computer attacks, ensuring long-term security."
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: "Quantum Key Distribution",
      description: "Ultra-secure key exchange using quantum mechanics principles, providing theoretically unbreakable encryption keys."
    },
    {
      icon: <Eye className="w-6 h-6 text-cyan-400" />,
      title: "Quantum Intrusion Detection",
      description: "Advanced quantum-based algorithms for detecting sophisticated cyber threats and zero-day attacks in real-time."
    },
    {
      icon: <Lock className="w-6 h-6 text-cyan-400" />,
      title: "Quantum Authentication",
      description: "Multi-factor authentication using quantum properties for virtually unbreakable identity verification systems."
    },
    {
      icon: <Database className="w-6 h-6 text-cyan-400" />,
      title: "Quantum Data Protection",
      description: "Protect sensitive data with quantum encryption that remains secure even against future quantum computers."
    },
    {
      icon: <Network className="w-6 h-6 text-cyan-400" />,
      title: "Quantum Network Security",
      description: "Secure network communications with quantum protocols that detect and prevent eavesdropping attempts."
    }
  ];

  const services = [
    {
      title: "Quantum Security Assessment",
      description: "Comprehensive evaluation of your current security posture against quantum threats and recommendations for quantum-safe migration.",
      icon: <Target className="w-8 h-8 text-cyan-400" />,
      deliverables: ["Quantum threat analysis", "Migration roadmap", "Risk assessment report"]
    },
    {
      title: "Quantum Encryption Implementation",
      description: "Deploy quantum-safe cryptographic algorithms and protocols across your infrastructure to protect against future quantum attacks.",
      icon: <Lock className="w-8 h-8 text-cyan-400" />,
      deliverables: ["Algorithm selection", "Implementation guide", "Testing & validation"]
    },
    {
      title: "Quantum Key Management",
      description: "Establish secure quantum key distribution systems for ultra-secure communication and data protection.",
      icon: <Key className="w-8 h-8 text-cyan-400" />,
      deliverables: ["QKD system design", "Key management protocols", "Security monitoring"]
    },
    {
      title: "Quantum Security Training",
      description: "Educate your team on quantum threats and quantum-safe security practices to ensure proper implementation and maintenance.",
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      deliverables: ["Training materials", "Hands-on workshops", "Certification programs"]
    }
  ];

  const pricingPlans = [
    {
      name: "Quantum Assessment",
      price: "$15,000",
      period: "one-time",
      description: "Comprehensive quantum security evaluation",
      features: [
        "Quantum threat analysis",
        "Current security assessment",
        "Migration recommendations",
        "Detailed report",
        "30-day support"
      ],
      popular: false
    },
    {
      name: "Quantum Implementation",
      price: "$75,000",
      period: "project",
      description: "Full quantum-safe security implementation",
      features: [
        "Quantum encryption deployment",
        "Key management system",
        "Network security upgrade",
        "Testing & validation",
        "90-day support",
        "Training included"
      ],
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "$200,000",
      period: "annually",
      description: "Complete quantum security solution",
      features: [
        "Full quantum security suite",
        "24/7 monitoring",
        "Dedicated security team",
        "Custom development",
        "Ongoing maintenance",
        "Priority support"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Future-Proof Security",
      description: "Protect your data against both current and future quantum computer threats.",
      icon: <Shield className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Regulatory Compliance",
      description: "Meet emerging quantum-safe security requirements and industry standards.",
      icon: <CheckCircle className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of competitors with cutting-edge quantum security technology.",
      icon: <TrendingUp className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Risk Mitigation",
      description: "Reduce the risk of data breaches and cyber attacks with quantum-resistant security.",
      icon: <AlertTriangle className="w-6 h-6 text-cyan-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Quantum Cybersecurity - Future-Proof Security Solutions | Zion Tech Group</title>
        <meta name="description" content="Protect your organization with quantum-safe cybersecurity solutions. Quantum encryption, key distribution, and intrusion detection for the post-quantum era." />
        <meta name="keywords" content="quantum cybersecurity, quantum encryption, quantum key distribution, post-quantum cryptography, quantum-safe security, cyber defense" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services/quantum-cybersecurity" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Next-Generation Security
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Quantum
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Cybersecurity</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Future-proof your organization with quantum-safe cybersecurity solutions. Protect against both current 
              and future quantum computer threats with cutting-edge quantum security technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/demo" 
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Quantum Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive quantum cybersecurity solutions designed to protect against the threats of tomorrow.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Quantum Security Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive quantum cybersecurity services to protect your organization's most valuable assets.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    {service.icon}
                    <h3 className="text-2xl font-semibold text-white ml-4">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Deliverables:</h4>
                    {service.deliverables.map((deliverable, deliverableIndex) => (
                      <div key={deliverableIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {deliverable}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Quantum Cybersecurity?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay ahead of emerging threats with quantum-safe security solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Quantum Security Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options for quantum cybersecurity services tailored to your organization's needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20' 
                      : 'border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-gray-600 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait for quantum computers to become a threat. Start protecting your organization today with quantum-safe security solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/demo" 
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default QuantumCybersecurityPage;