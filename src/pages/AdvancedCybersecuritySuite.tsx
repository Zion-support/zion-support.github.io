import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, BarChart3, Globe, Users, Database, Settings, ArrowRight, Lock, Eye, Network, Server, AlertTriangle, CheckCircle } from 'lucide-react';

const AdvancedCybersecuritySuite: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Threat Protection",
      description: "Multi-layered security with AI-powered threat detection and prevention."
    },
    {
      icon: Eye,
      title: "24/7 Security Monitoring",
      description: "Continuous security monitoring with real-time threat detection and response."
    },
    {
      icon: Lock,
      title: "Zero Trust Security",
      description: "Implement zero trust architecture with continuous verification and access control."
    },
    {
      icon: BarChart3,
      title: "Security Analytics",
      description: "Advanced security analytics and threat intelligence for proactive defense."
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Comprehensive network security with firewall, IDS/IPS, and traffic analysis."
    },
    {
      icon: Server,
      title: "Endpoint Protection",
      description: "Advanced endpoint security with behavioral analysis and threat prevention."
    }
  ];

  const securityServices = [
    {
      title: "Threat Detection & Response",
      description: "Advanced threat hunting, detection, and automated response capabilities."
    },
    {
      title: "Vulnerability Management",
      description: "Continuous vulnerability assessment, prioritization, and remediation."
    },
    {
      title: "Identity & Access Management",
      description: "Secure identity management with multi-factor authentication and access control."
    },
    {
      title: "Data Protection & Encryption",
      description: "Comprehensive data protection with encryption and data loss prevention."
    },
    {
      title: "Security Compliance",
      description: "SOC2, ISO 27001, and industry-specific compliance management."
    },
    {
      title: "Incident Response",
      description: "Rapid incident response with forensics and recovery capabilities."
    }
  ];

  const benefits = [
    {
      metric: "99.9%",
      label: "Threat Detection",
      description: "Advanced threat detection accuracy"
    },
    {
      metric: "<1min",
      label: "Response Time",
      description: "Ultra-fast threat response and mitigation"
    },
    {
      metric: "24/7",
      label: "Protection",
      description: "Continuous security monitoring and protection"
    },
    {
      metric: "100%",
      label: "Compliance",
      description: "Full regulatory compliance coverage"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 quantum-particles"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Advanced Cybersecurity Suite
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Advanced
              <br />
              <span className="text-white">Cybersecurity Suite</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive cybersecurity protection with AI-powered threat detection, 
              zero trust architecture, and 24/7 security monitoring for enterprise-grade protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Secure Your Business
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Security Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced cybersecurity capabilities for comprehensive protection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Security Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive cybersecurity services for complete protection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Security Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Key advantages of our advanced cybersecurity suite
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                  {benefit.label}
                </div>
                <p className="text-gray-400 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our cybersecurity experts can help you implement comprehensive protection for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Protected
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedCybersecuritySuite;