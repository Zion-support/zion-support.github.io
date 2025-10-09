'use client';
import React, { useState, useEffect } from 'react';
import { Shield, Lock, AlertTriangle, CheckCircle, Star, ArrowRight, Clock, Target, Zap, Brain, Eye, Database, Users } from 'lucide-react';

const AICybersecurityAdvancedPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Threat Detection",
      description: "Advanced machine learning algorithms detect and prevent cyber threats in real-time with 99.9% accuracy.",
      benefit: "Prevent 99.9% of attacks"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "24/7 Monitoring",
      description: "Continuous monitoring of your entire infrastructure with AI-powered anomaly detection and instant alerts.",
      benefit: "Never miss a threat"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Response",
      description: "AI automatically responds to threats, isolates affected systems, and implements countermeasures instantly.",
      benefit: "Respond in milliseconds"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Vulnerability Assessment",
      description: "Comprehensive security scanning and AI-powered vulnerability analysis with prioritized remediation.",
      benefit: "Fix critical issues first"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Behavior Analytics",
      description: "AI analyzes user behavior patterns to detect insider threats and compromised accounts.",
      benefit: "Detect insider threats"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Compliance Management",
      description: "Automated compliance monitoring for GDPR, HIPAA, SOX, and other regulatory requirements.",
      benefit: "Stay 100% compliant"
    }
  ];

  const securityLayers = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Network Security",
      description: "Advanced firewall, intrusion detection, and network segmentation"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Data Protection",
      description: "Encryption, data loss prevention, and secure backup solutions"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Endpoint Security",
      description: "AI-powered antivirus, device management, and threat prevention"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Identity Management",
      description: "Multi-factor authentication, access control, and user monitoring"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$799",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 50 endpoints",
        "Basic AI threat detection",
        "24/7 monitoring",
        "Email support",
        "Monthly security reports",
        "Basic compliance tools"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,999",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 500 endpoints",
        "Advanced AI security",
        "Real-time threat response",
        "Priority support",
        "Custom security policies",
        "Advanced compliance",
        "Incident response team",
        "Security training"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$4,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited endpoints",
        "Advanced AI automation",
        "Dedicated security team",
        "Custom integrations",
        "White-label options",
        "Advanced compliance",
        "24/7 phone support",
        "Penetration testing"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Robert Kim",
      company: "Financial Services",
      role: "CISO",
      content: "AI Cybersecurity Advanced prevented 99.9% of attacks and helped us achieve 100% compliance. The AI threat detection is incredibly accurate!",
      rating: 5
    },
    {
      name: "Lisa Johnson",
      company: "Healthcare Provider",
      role: "IT Director",
      content: "The automated response and 24/7 monitoring gave us peace of mind. We've had zero security incidents since implementation.",
      rating: 5
    },
    {
      name: "Michael Davis",
      company: "E-commerce Platform",
      role: "Security Manager",
      content: "The user behavior analytics and vulnerability assessment helped us identify and fix critical security gaps before they became problems.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Cybersecurity Advanced
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Next-Generation AI-Powered Security
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Protect your business with our advanced AI-powered cybersecurity platform. 
              Prevent 99.9% of attacks, achieve 100% compliance, and respond to threats 
              in milliseconds with intelligent automation and 24/7 monitoring.
            </p>
            
            {/* Security Layers */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {securityLayers.map((layer, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {layer.icon}
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">{layer.title}</div>
                  <div className="text-gray-300 text-sm">{layer.description}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button text-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Get Security Audit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            Advanced AI Security Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">
                  {feature.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            Comprehensive Security Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:from-cyan-500 hover:to-purple-600'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using AI Cybersecurity Advanced to protect their assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button text-center"
            >
              📞 Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityAdvancedPage;