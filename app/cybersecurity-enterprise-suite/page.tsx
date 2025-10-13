import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Zap, 
  Brain,
  ArrowRight,
  Users,
  BarChart3,
  Settings,
  Globe,
  Clock,
  FileText,
  Database,
  Server
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const CybersecurityEnterpriseSuite = () => {
  const features = [
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms detect and prevent sophisticated cyber threats in real-time",
      icon: <Brain className="w-8 h-8" />,
      stats: "99.9% accuracy"
    },
    {
      title: "Zero Trust Architecture",
      description: "Implement zero trust security model with continuous verification and least privilege access",
      icon: <Lock className="w-8 h-8" />,
      stats: "100% secure"
    },
    {
      title: "24/7 Security Monitoring",
      description: "Round-the-clock security operations center with real-time threat monitoring and response",
      icon: <Eye className="w-8 h-8" />,
      stats: "24/7 SOC"
    },
    {
      title: "Advanced Endpoint Protection",
      description: "Comprehensive endpoint security with behavioral analysis and automated threat response",
      icon: <Shield className="w-8 h-8" />,
      stats: "99.8% protection"
    },
    {
      title: "Network Security",
      description: "Multi-layered network security with firewalls, intrusion detection, and traffic analysis",
      icon: <Globe className="w-8 h-8" />,
      stats: "Enterprise-grade"
    },
    {
      title: "Compliance Management",
      description: "Automated compliance monitoring for SOC2, ISO27001, GDPR, HIPAA, and other standards",
      icon: <CheckCircle className="w-8 h-8" />,
      stats: "100% compliant"
    }
  ];

  const securityServices = [
    {
      title: "Security Assessment",
      description: "Comprehensive security audit and vulnerability assessment",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Penetration Testing",
      description: "Ethical hacking to identify security weaknesses",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Incident Response",
      description: "Rapid response and recovery from security incidents",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: "Security Training",
      description: "Employee security awareness and training programs",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Policy Development",
      description: "Custom security policies and procedures",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Compliance Audit",
      description: "Regular compliance audits and reporting",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const pricing = [
    {
      name: "Essential",
      price: "$299",
      period: "/month",
      description: "Basic security for small businesses",
      features: [
        "Basic threat detection",
        "Email security",
        "Firewall protection",
        "Monthly reports",
        "Email support",
        "Standard compliance"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Comprehensive security for growing businesses",
      features: [
        "Advanced threat detection",
        "24/7 monitoring",
        "Endpoint protection",
        "Network security",
        "Priority support",
        "Full compliance suite",
        "Incident response",
        "Security training"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "Complete security suite for large organizations",
      features: [
        "AI-powered security",
        "Zero trust architecture",
        "Dedicated SOC team",
        "Custom integrations",
        "24/7 phone support",
        "All compliance standards",
        "Rapid incident response",
        "Custom security policies",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const complianceStandards = [
    { name: "SOC 2", icon: "🔒", level: "Type II" },
    { name: "ISO 27001", icon: "🛡️", level: "Certified" },
    { name: "GDPR", icon: "🇪🇺", level: "Compliant" },
    { name: "HIPAA", icon: "🏥", level: "Compliant" },
    { name: "PCI DSS", icon: "💳", level: "Level 1" },
    { name: "NIST", icon: "🏛️", level: "Framework" },
    { name: "CIS", icon: "🔐", level: "Controls" },
    { name: "COBIT", icon: "📊", level: "Framework" }
  ];

  const benefits = [
    {
      title: "Reduce Security Risks",
      description: "Minimize cyber threats and data breaches with advanced protection",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Ensure Compliance",
      description: "Meet all regulatory requirements with automated compliance monitoring",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "24/7 Protection",
      description: "Round-the-clock security monitoring and threat response",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Cost Savings",
      description: "Reduce security costs with integrated solutions and automation",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <EnhancedSEO
        title="Cybersecurity Enterprise Suite - Advanced Security Solutions"
        description="Comprehensive cybersecurity suite with AI-powered threat detection, zero trust architecture, and 24/7 monitoring. Protect your business with enterprise-grade security solutions."
        keywords="cybersecurity, enterprise security, threat detection, zero trust, security monitoring, compliance, SOC, penetration testing"
        canonical="https://ziontechgroup.com/cybersecurity-enterprise-suite"
      />
      
      <ResponsiveContainer className="py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
            <Shield className="w-4 h-4 text-red-400 mr-2" />
            <span className="text-red-400 text-sm font-medium">#1 Cybersecurity Provider</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cybersecurity Enterprise Suite
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Comprehensive cybersecurity suite with AI-powered threat detection, zero trust architecture, 
            and 24/7 security monitoring. Protect your business with enterprise-grade security solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={Shield}
              iconPosition="left"
            >
              Get Security Assessment
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={Eye}
              iconPosition="left"
            >
              View Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Threat Detection</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300 text-sm">SOC Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-300 text-sm">Compliance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300 text-sm">Protected Clients</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Advanced Security Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                glowColor={index % 2 === 0 ? 'red' : 'orange'}
                hoverEffect={true}
                className="h-full"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-400">
                    {feature.stats}
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Security Services */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Comprehensive Security Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Standards */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Compliance & Standards
          </h2>
          <p className="text-xl text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            Meet all regulatory requirements with our comprehensive compliance solutions
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {complianceStandards.map((standard, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              >
                <div className="text-2xl mb-2">{standard.icon}</div>
                <div className="text-white font-medium text-sm mb-1">{standard.name}</div>
                <div className="text-red-400 text-xs">{standard.level}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose Our Security Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Flexible Security Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
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
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
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

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Secure Your Business Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a comprehensive security assessment and discover how our enterprise-grade 
            cybersecurity solutions can protect your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
            >
              Get Security Assessment
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={Shield}
              iconPosition="left"
            >
              View Demo
            </FuturisticButton>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default CybersecurityEnterpriseSuite;