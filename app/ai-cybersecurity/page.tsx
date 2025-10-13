'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, AlertTriangle, Zap, CheckCircle, ArrowRight, Star, Cpu, Network } from 'lucide-react';

export default function AICybersecurityPage() {
  const securityFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Threat Detection",
      description: "Advanced AI algorithms detect and prevent cyber threats in real-time with 99.9% accuracy.",
      features: ["Malware Detection", "Anomaly Detection", "Behavioral Analysis", "Zero-day Protection"]
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Data Protection",
      description: "Comprehensive data encryption and access control to protect sensitive information.",
      features: ["End-to-End Encryption", "Access Management", "Data Loss Prevention", "Compliance Monitoring"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Security Monitoring",
      description: "24/7 monitoring and analysis of your entire IT infrastructure for potential threats.",
      features: ["Real-time Monitoring", "Log Analysis", "Incident Response", "Forensic Investigation"]
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Network Security",
      description: "Protect your network infrastructure with AI-powered firewall and intrusion detection.",
      features: ["AI Firewall", "Intrusion Detection", "Traffic Analysis", "DDoS Protection"]
    }
  ];

  const threatStats = [
    {
      metric: "2.4M",
      description: "Threats blocked daily",
      icon: <Shield className="w-6 h-6" />
    },
    {
      metric: "99.9%",
      description: "Detection accuracy",
      icon: <Eye className="w-6 h-6" />
    },
    {
      metric: "< 1s",
      description: "Response time",
      icon: <Zap className="w-6 h-6" />
    },
    {
      metric: "24/7",
      description: "Protection coverage",
      icon: <Lock className="w-6 h-6" />
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$299",
      period: "/month",
      description: "Basic AI security for small businesses",
      features: [
        "Basic threat detection",
        "Email security",
        "Firewall protection",
        "Email support",
        "Up to 50 users",
        "1 year data retention",
        "Standard compliance"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Advanced security for growing businesses",
      features: [
        "Advanced AI threat detection",
        "Full data protection suite",
        "24/7 monitoring",
        "Priority support",
        "Up to 500 users",
        "3 years data retention",
        "Advanced compliance",
        "Incident response",
        "Security training"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "Complete security for large organizations",
      features: [
        "Everything in Professional",
        "Custom AI models",
        "Dedicated security team",
        "24/7 phone support",
        "Unlimited users",
        "Unlimited data retention",
        "Custom compliance",
        "White-label options",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const complianceStandards = [
    { name: "SOC 2", status: "Certified" },
    { name: "ISO 27001", status: "Certified" },
    { name: "GDPR", status: "Compliant" },
    { name: "HIPAA", status: "Compliant" },
    { name: "PCI DSS", status: "Compliant" },
    { name: "NIST", status: "Aligned" }
  ];

  const testimonials = [
    {
      name: "David Kim",
      role: "CISO, FinanceCorp",
      content: "Zion's AI cybersecurity platform has reduced our security incidents by 95%. The AI threat detection is incredibly accurate.",
      rating: 5
    },
    {
      name: "Sarah Martinez",
      role: "IT Director, HealthTech",
      content: "The automated incident response and 24/7 monitoring give us peace of mind. Our compliance scores have improved significantly.",
      rating: 5
    },
    {
      name: "Michael Thompson",
      role: "CEO, TechStart",
      content: "The AI-powered threat detection caught several sophisticated attacks that traditional security tools missed. Highly recommended.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity - Advanced Threat Protection | Zion Tech Group</title>
        <meta name="description" content="Protect your business with AI-powered cybersecurity. Advanced threat detection, data protection, and 24/7 monitoring for complete security coverage." />
        <meta name="keywords" content="AI cybersecurity, threat detection, data protection, security monitoring, cyber defense, threat intelligence" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                AI-Powered Security Platform
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                AI Cybersecurity
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Protect your business with advanced AI-powered cybersecurity. Get real-time threat detection, 
                data protection, and 24/7 monitoring that adapts to evolving threats.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25">
                  Start Free Trial
                  <ArrowRight className="inline w-5 h-5 ml-2" />
                </button>
                <button className="border border-red-500 text-red-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-500/10 transition-all duration-300">
                  Security Assessment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Threat Stats Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Proven <span className="text-red-400">Security Performance</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI cybersecurity platform delivers unmatched protection with industry-leading performance metrics.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {threatStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300">
                      <div className="text-red-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                        {stat.icon}
                      </div>
                      <div className="text-4xl font-bold text-white mb-2">{stat.metric}</div>
                      <div className="text-gray-300">{stat.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Features Section */}
        <div className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive <span className="text-orange-400">Security Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered security platform provides complete protection across all attack vectors.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300">
                    <div className="text-red-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-orange-400 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Industry <span className="text-red-400">Compliance</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform meets the highest security and compliance standards across industries.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                    <div className="text-2xl font-bold text-white mb-2">{standard.name}</div>
                    <div className="text-orange-400 text-sm font-medium">{standard.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Security <span className="text-red-400">Pricing Plans</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security plan that provides the right level of protection for your organization.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative ${plan.popular ? 'scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 h-full ${
                    plan.popular ? 'border-red-500/50' : 'border-slate-700/50'
                  }`}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-gray-400">{plan.period}</span>
                      </div>
                      <p className="text-gray-300">{plan.description}</p>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700' 
                        : 'border border-slate-600 text-white hover:bg-slate-700'
                    }`}>
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Trusted by <span className="text-red-400">Security Leaders</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what security professionals say about our AI cybersecurity platform.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-red-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-red-500/10 to-orange-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Secure Your <span className="text-red-400">Digital Assets</span> Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't wait for a breach. Protect your business with AI-powered cybersecurity that adapts to evolving threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25">
                Start Free Trial
                <ArrowRight className="inline w-5 h-5 ml-2" />
              </button>
              <button className="border border-red-500 text-red-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-500/10 transition-all duration-300">
                Security Assessment
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📧 <a href="mailto:kleber@ziontechgroup.com" className="hover:text-red-400">kleber@ziontechgroup.com</a> | 
              📞 <a href="tel:+13024640950" className="hover:text-red-400">+1 302 464 0950</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}