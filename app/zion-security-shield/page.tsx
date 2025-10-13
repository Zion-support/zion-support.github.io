import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Zap, 
  CheckCircle, 
  Globe, 
  Brain,
  ArrowRight,
  Star,
  Clock,
  Target,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  Users,
  Award
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionSecurityShield = () => {
  const features = [
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms detect and prevent cyber threats in real-time with 99.9% accuracy.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Zero-Trust Architecture",
      description: "Implement zero-trust security model with continuous verification and least privilege access.",
      icon: <Lock className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Monitoring",
      description: "24/7 security monitoring with instant alerts and automated response to security incidents.",
      icon: <Eye className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Compliance Management",
      description: "Automated compliance monitoring for GDPR, HIPAA, SOX, and other regulatory requirements.",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const securityFeatures = [
    {
      title: "Advanced Firewall",
      description: "Next-generation firewall with deep packet inspection and application control",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Intrusion Detection",
      description: "Real-time intrusion detection and prevention system (IDPS)",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: "Data Encryption",
      description: "End-to-end encryption for data at rest and in transit",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Vulnerability Scanning",
      description: "Automated vulnerability assessment and penetration testing",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Security Analytics",
      description: "AI-powered security analytics and threat intelligence",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Incident Response",
      description: "Automated incident response and forensic analysis",
      icon: <Zap className="w-6 h-6" />
    }
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
        "Firewall protection",
        "24/7 monitoring",
        "Standard support",
        "Up to 50 users"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Advanced AI threat detection",
        "Zero-trust architecture",
        "Compliance management",
        "Priority support",
        "Up to 500 users",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large organizations",
      features: [
        "Full AI security suite",
        "Custom security policies",
        "Dedicated security team",
        "24/7 phone support",
        "Unlimited users",
        "White-label solution",
        "Advanced reporting"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "99.9%", label: "Threat Detection Rate", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Security Monitoring", icon: <Eye className="w-6 h-6" /> },
    { number: "50+", label: "Security Integrations", icon: <Globe className="w-6 h-6" /> },
    { number: "5,000+", label: "Protected Businesses", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion Security Shield - AI-Powered Cybersecurity Platform | Zion Tech Group"
        description="Protect your business with Zion Security Shield. Advanced AI-powered cybersecurity, real-time threat detection, and comprehensive security management for modern enterprises."
        keywords="cybersecurity, AI security, threat detection, zero-trust, security monitoring, compliance, data protection, Zion Security Shield"
        canonical="https://ziontechgroup.com/zion-security-shield"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 mb-6">
            <Shield className="w-4 h-4 text-red-400 mr-2" />
            <span className="text-red-400 text-sm font-medium">#1 Security Platform 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-blue-400">
              Zion Security Shield
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Protect your business with our AI-powered cybersecurity platform. 
            Advanced threat detection, zero-trust architecture, and 24/7 security monitoring.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
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
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive security solutions powered by artificial intelligence and machine learning.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-red-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Security Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Security Suite
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to protect your business from cyber threats.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-500/20 to-pink-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security plan that fits your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-red-500/50 ring-2 ring-red-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
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
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Secure Your Business Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Don't wait for a security breach. Protect your business with Zion Security Shield 
            and get peace of mind with enterprise-grade security.
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
              icon={<Monitor className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionSecurityShield;