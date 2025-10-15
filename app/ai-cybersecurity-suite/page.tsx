import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Lock, 
  Eye, 
  Zap, 
  CheckCircle, 
  Star,
  ArrowRight,
  Clock,
  Target,
  AlertTriangle,
  Database,
  Network,
  FileText,
  Users
} from 'lucide-react';

const AiCybersecuritySuitePage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "AI Threat Detection",
      description: "Advanced machine learning algorithms detect and prevent cyber threats in real-time"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Zero Trust Architecture",
      description: "Implement zero trust security model with continuous verification and access control"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "24/7 Monitoring",
      description: "Round-the-clock security monitoring with instant threat response and incident management"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Vulnerability Assessment",
      description: "Comprehensive security scanning and vulnerability management with AI-powered analysis"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Protection",
      description: "Advanced encryption, data loss prevention, and compliance management for sensitive data"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Network Security",
      description: "AI-powered network monitoring, intrusion detection, and firewall management"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic Threat Detection",
        "Email Security",
        "Firewall Management",
        "Monthly Reports",
        "Email Support",
        "Up to 50 Users"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing businesses and enterprises",
      features: [
        "Advanced AI Detection",
        "24/7 Monitoring",
        "Incident Response",
        "Compliance Management",
        "Priority Support",
        "Up to 500 Users",
        "Custom Integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large organizations and critical infrastructure",
      features: [
        "Custom AI Models",
        "Dedicated Security Team",
        "White-label Options",
        "Advanced Analytics",
        "24/7 Phone Support",
        "Unlimited Users",
        "Custom Compliance"
      ],
      popular: false
    }
  ];

  const securityServices = [
    {
      title: "Penetration Testing",
      description: "Comprehensive security testing to identify vulnerabilities before attackers do",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Security Auditing",
      description: "Thorough security assessments and compliance audits for regulatory requirements",
      icon: <FileText className="w-8 h-8" />
    },
    {
      title: "Incident Response",
      description: "Rapid response and recovery services for security incidents and breaches",
      icon: <AlertTriangle className="w-8 h-8" />
    },
    {
      title: "Security Training",
      description: "Comprehensive security awareness training for your team and employees",
      icon: <Users className="w-8 h-8" />
    }
  ];

  const complianceStandards = [
    { name: "SOC 2", icon: <Shield className="w-6 h-6" />, color: "text-blue-600" },
    { name: "ISO 27001", icon: <Lock className="w-6 h-6" />, color: "text-green-600" },
    { name: "GDPR", icon: <Database className="w-6 h-6" />, color: "text-purple-600" },
    { name: "HIPAA", icon: <Eye className="w-6 h-6" />, color: "text-red-600" },
    { name: "PCI DSS", icon: <Target className="w-6 h-6" />, color: "text-orange-600" },
    { name: "NIST", icon: <Network className="w-6 h-6" />, color: "text-cyan-600" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Suite - Zion Tech Group | Advanced Security Solutions</title>
        <meta name="description" content="Revolutionary AI-powered cybersecurity suite. Protect your business with advanced threat detection, zero trust architecture, and 24/7 monitoring. Enterprise-grade security solutions." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security monitoring, zero trust, vulnerability assessment, compliance management" />
        <meta property="og:title" content="AI Cybersecurity Suite - Zion Tech Group" />
        <meta property="og:description" content="Protect your business with AI-powered cybersecurity solutions and advanced threat detection." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-cybersecurity-suite" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                #1 AI Cybersecurity Platform
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Cybersecurity
                </span>
                <br />
                <span className="text-white">Suite</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Protect your business with AI-powered cybersecurity solutions. Advanced threat detection, 
                zero trust architecture, and 24/7 monitoring to keep your data and systems secure from 
                evolving cyber threats.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Schedule Security Audit
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <div className="text-gray-400 text-sm">Threat Detection Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-gray-400 text-sm">Security Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">5K+</div>
                  <div className="text-gray-400 text-sm">Protected Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">SOC 2</div>
                  <div className="text-gray-400 text-sm">Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Security Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions powered by artificial intelligence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Security Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end cybersecurity services to protect your business from all angles
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Compliance & Standards</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet industry standards and regulatory requirements with our compliance solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className={`w-12 h-12 mx-auto mb-3 ${standard.color} group-hover:scale-110 transition-transform duration-300`}>
                    {standard.icon}
                  </div>
                  <h3 className="text-white font-semibold">{standard.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect security plan for your organization's needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-lg shadow-cyan-500/10' 
                    : 'border-cyan-500/20'
                } hover:border-cyan-400/40 transition-all duration-300 group`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already protected by our AI-powered cybersecurity solutions. 
                Start your free trial today - no credit card required!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Schedule Security Audit
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