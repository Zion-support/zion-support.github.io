import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Eye, Lock, Zap, CheckCircle, ArrowRight, Star, Clock, Users, AlertTriangle } from 'lucide-react';

const AiCybersecuritySuitePage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "AI Threat Detection",
      description: "Advanced AI algorithms that detect and prevent cyber threats in real-time"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Behavioral Analysis",
      description: "Machine learning models that analyze user behavior to identify anomalies"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Zero Trust Security",
      description: "Comprehensive zero trust architecture with continuous verification"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Response",
      description: "Instant automated response to security incidents and threats"
    }
  ];

  const securityFeatures = [
    "Real-time Threat Detection",
    "Advanced Malware Protection",
    "Network Security Monitoring",
    "Endpoint Protection",
    "Email Security",
    "Web Application Firewall",
    "Data Loss Prevention",
    "Identity & Access Management",
    "Security Information Management",
    "Incident Response Automation",
    "Compliance Monitoring",
    "Vulnerability Assessment"
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Basic threat detection",
        "Email security",
        "Endpoint protection",
        "24/7 monitoring",
        "Up to 50 users",
        "Email support",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month", 
      description: "Ideal for growing companies",
      features: [
        "Advanced threat detection",
        "Full security suite",
        "Behavioral analysis",
        "Priority support",
        "Up to 250 users",
        "Advanced analytics",
        "Custom policies",
        "API integration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Complete AI security suite",
        "Zero trust architecture",
        "Custom AI models",
        "24/7 dedicated support",
        "Unlimited users",
        "Full analytics suite",
        "White-label options",
        "SLA guarantee",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const benefits = [
    "Advanced AI threat detection",
    "Real-time security monitoring",
    "Automated incident response",
    "Comprehensive compliance support",
    "Reduced security costs",
    "Enhanced data protection",
    "Scalable security solutions",
    "Expert security support"
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Suite - Zion Tech Group | Advanced Security Solutions</title>
        <meta name="description" content="Comprehensive AI-powered cybersecurity suite with advanced threat detection, behavioral analysis, and automated response. Protect your business with cutting-edge security technology." />
        <meta name="keywords" content="ai cybersecurity, threat detection, security suite, malware protection, network security, zero trust" />
        <meta property="og:title" content="AI Cybersecurity Suite - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI-powered cybersecurity solutions" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Cybersecurity Suite</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Protect your business with advanced AI-powered cybersecurity solutions. 
                Detect, prevent, and respond to threats with unprecedented intelligence and speed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Start Security Assessment
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Security Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced Security Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI technology for comprehensive cybersecurity protection
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Security Coverage</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete protection across all attack vectors and security domains
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300 group">
                  <div className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                    {feature}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Cybersecurity Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Protect your business with advanced AI-powered security solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 text-center hover:bg-cyan-500/20 transition-all duration-300 group">
                  <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    {benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Security Suite Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect security plan for your organization's needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-lg">Threat Detection Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">2s</div>
                <div className="text-gray-300 text-lg">Response Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300 text-lg">Security Monitoring</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
                <div className="text-gray-300 text-lg">Compliance Coverage</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Secure Your Digital Future?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Protect your business with advanced AI-powered cybersecurity. Start your security assessment today and fortify your defenses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Security Assessment
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Security Experts
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiCybersecuritySuitePage;