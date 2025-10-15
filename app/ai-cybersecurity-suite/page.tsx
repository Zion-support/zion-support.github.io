import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, Star, Phone, Mail, Zap, Users, Database } from 'lucide-react';

const AiCybersecuritySuitePage: React.FC = () => {
  const features = [
    "AI-powered threat detection and prevention",
    "Real-time security monitoring and alerts",
    "Automated incident response and remediation",
    "Advanced malware detection and removal",
    "Network security assessment and hardening",
    "Vulnerability scanning and patch management",
    "Compliance monitoring (GDPR, HIPAA, SOX)",
    "Security awareness training and phishing simulation",
    "24/7 Security Operations Center (SOC)",
    "Custom security policies and procedures"
  ];

  const pricingTiers = [
    {
      name: "Essential",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Basic threat detection",
        "Email security protection",
        "Firewall management",
        "Monthly security reports",
        "Up to 25 users",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Advanced AI threat detection",
        "Real-time monitoring",
        "Automated incident response",
        "Vulnerability scanning",
        "Up to 100 users",
        "Priority support",
        "Compliance reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Full AI security suite",
        "24/7 SOC monitoring",
        "Custom security policies",
        "Advanced compliance",
        "Unlimited users",
        "Dedicated security team",
        "Custom integrations",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Protection",
      description: "AI-powered defense against the latest cyber threats"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Response",
      description: "Instant threat detection and automated response"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "24/7 security experts monitoring your systems"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Compliance Ready",
      description: "Meet all regulatory requirements with ease"
    }
  ];

  const threats = [
    "Ransomware attacks",
    "Phishing campaigns",
    "Malware infections",
    "Data breaches",
    "Insider threats",
    "DDoS attacks",
    "Zero-day exploits",
    "Social engineering"
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Suite - Zion Tech Group | Advanced Threat Protection</title>
        <meta name="description" content="Comprehensive AI-powered cybersecurity solution with threat detection, monitoring, and automated response. Starting at $299/month." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security monitoring, incident response, compliance, SOC" />
        <meta property="og:title" content="AI Cybersecurity Suite - Zion Tech Group" />
        <meta property="og:description" content="Protect your business with advanced AI-powered cybersecurity solutions." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 pt-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-8">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Advanced AI Cybersecurity
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  AI Cybersecurity Suite
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Protect your business with AI-powered cybersecurity that detects, 
                prevents, and responds to threats in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Security Audit
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Threat Protection */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Protect Against All Threats</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered system defends against the latest cyber threats
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {threats.map((threat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-10 h-10 text-red-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{threat}</h3>
                  <p className="text-gray-400">AI-powered protection</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Security Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to secure your digital infrastructure
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Cybersecurity Suite?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology meets expert security knowledge
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-red-400">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Flexible Security Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security level that fits your business needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  tier.popular 
                    ? 'border-red-500/50 shadow-2xl shadow-red-500/10' 
                    : 'border-red-500/20'
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-red-400">{tier.price}</span>
                      <span className="text-gray-400 ml-2">{tier.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
                      : 'border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900'
                  }`}>
                    Get Protected
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600/20 to-orange-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Don't Wait for a Breach</h2>
              <p className="text-xl text-gray-300 mb-8">
                Protect your business today with our advanced AI cybersecurity suite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
                >
                  Schedule Security Audit
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiCybersecuritySuitePage;