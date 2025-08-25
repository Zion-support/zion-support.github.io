import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { 
  Shield, 
  Lock, 
  Eye, 
<<<<<<< HEAD
  Zap, 
  Globe, 
  BarChart3, 
  Users, 
  Building2,
  Cloud,
  Database,
  Network,
  Cpu,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Target,
  AlertTriangle,
  Key,
  Fingerprint,
  Server,
  Monitor
} from 'lucide-react';

export default function AdvancedCybersecuritySuite() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Advanced Threat Protection",
      description: "Multi-layered security with AI-powered threat detection and real-time response capabilities."
    },
    {
      icon: Lock,
      title: "Zero Trust Architecture",
      description: "Implement strict access controls and continuous verification for all users and devices."
=======
import { Shield, Zap, BarChart3, Globe, Users, Database, Settings, ArrowRight, Lock, Eye, Network, Server, AlertTriangle, CheckCircle } from 'lucide-react';

const AdvancedCybersecuritySuite: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Threat Protection",
      description: "Multi-layered security with AI-powered threat detection and prevention."
>>>>>>> origin/cursor/website-audit-and-enhancement-3121
    },
    {
      icon: Eye,
      title: "24/7 Security Monitoring",
<<<<<<< HEAD
      description: "Round-the-clock security operations center with expert analysts monitoring your infrastructure."
    },
    {
      icon: Zap,
      title: "Incident Response",
      description: "Rapid response team with automated threat containment and recovery procedures."
    },
    {
      icon: Globe,
      title: "Global Threat Intelligence",
      description: "Real-time threat feeds and intelligence sharing across our global security network."
=======
      description: "Continuous security monitoring with real-time threat detection and response."
    },
    {
      icon: Lock,
      title: "Zero Trust Security",
      description: "Implement zero trust architecture with continuous verification and access control."
>>>>>>> origin/cursor/website-audit-and-enhancement-3121
    },
    {
      icon: BarChart3,
      title: "Security Analytics",
<<<<<<< HEAD
      description: "Advanced analytics and machine learning for predictive threat detection and risk assessment."
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-3121
    }
  ];

  const securityServices = [
    {
<<<<<<< HEAD
      icon: Building2,
      title: "Enterprise Security",
      description: "Comprehensive security solutions for large organizations with complex infrastructure needs.",
      features: ["Network segmentation", "Access control", "Data encryption", "Security awareness training"]
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "Secure cloud environments with advanced threat protection and compliance management.",
      features: ["Cloud access security", "Data loss prevention", "Compliance monitoring", "Identity management"]
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "End-to-end data security with encryption, backup, and disaster recovery solutions.",
      features: ["Data encryption", "Backup solutions", "Disaster recovery", "Compliance reporting"]
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Advanced network protection with intrusion detection and prevention systems.",
      features: ["Firewall management", "Intrusion detection", "VPN solutions", "Network monitoring"]
    },
    {
      icon: Server,
      title: "Endpoint Security",
      description: "Comprehensive endpoint protection for all devices across your organization.",
      features: ["Antivirus protection", "Device control", "Application whitelisting", "Threat isolation"]
    },
    {
      icon: Monitor,
      title: "Security Operations",
      description: "Managed security operations with 24/7 monitoring and incident response.",
      features: ["Security monitoring", "Incident response", "Threat hunting", "Vulnerability management"]
    }
  ];

  const complianceStandards = [
    {
      standard: "SOC 2 Type II",
      description: "Service Organization Control 2 compliance for security, availability, and confidentiality.",
      icon: CheckCircle
    },
    {
      standard: "ISO 27001",
      description: "International standard for information security management systems.",
      icon: CheckCircle
    },
    {
      standard: "PCI DSS",
      description: "Payment Card Industry Data Security Standard compliance for payment processing.",
      icon: CheckCircle
    },
    {
      standard: "HIPAA",
      description: "Health Insurance Portability and Accountability Act compliance for healthcare data.",
      icon: CheckCircle
    },
    {
      standard: "GDPR",
      description: "General Data Protection Regulation compliance for EU data protection.",
      icon: CheckCircle
    },
    {
      standard: "NIST",
      description: "National Institute of Standards and Technology cybersecurity framework.",
      icon: CheckCircle
=======
  AlertTriangle, 
  BarChart3, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Target,
  Clock,
  Star,
  FileText,
  Code,
  Monitor,
  Smartphone,
  Tablet,
  Network,
  Database,
  Cpu
} from 'lucide-react';

export default function AdvancedCybersecuritySuite() {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Threat Protection',
      description: 'Multi-layered security against sophisticated cyber threats'
    },
    {
      icon: Lock,
      title: 'Zero Trust Security',
      description: 'Comprehensive identity and access management'
    },
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: '24/7 security monitoring and threat detection'
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: 'Rapid response and recovery from security incidents'
    }
  ];

  const securityModules = [
    {
      title: 'Network Security',
      description: 'Advanced network protection and monitoring',
      features: ['Firewall management', 'Intrusion detection', 'DDoS protection', 'Network segmentation']
    },
    {
      title: 'Endpoint Security',
      description: 'Comprehensive device protection',
      features: ['Antivirus protection', 'Device control', 'Data encryption', 'Threat prevention']
    },
    {
      title: 'Cloud Security',
      description: 'Secure cloud infrastructure and applications',
      features: ['Cloud access control', 'Data protection', 'Compliance monitoring', 'Security automation']
    },
    {
      title: 'Data Security',
      description: 'Protection of sensitive information',
      features: ['Data encryption', 'Access controls', 'Data loss prevention', 'Backup security']
>>>>>>> origin/cursor/website-audit-and-enhancement-1b0a
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-3121
    }
  ];

  const benefits = [
<<<<<<< HEAD
<<<<<<< HEAD
    "99.9% threat detection accuracy with AI-powered systems",
    "Average response time of under 15 minutes for critical threats",
    "Zero false positive rate in production environments",
    "24/7 expert security team availability",
    "Custom security policies tailored to your business needs",
    "Comprehensive compliance reporting and audit support"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-zion-blue via-zion-purple to-zion-cyan text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-12 h-12 text-zion-cyan mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-zion-cyan bg-clip-text text-transparent">
                Advanced Cybersecurity Suite
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Protect your digital assets with enterprise-grade cybersecurity solutions. 
              Our advanced suite provides comprehensive protection against evolving threats.
=======
    {
      metric: '99.9%',
      label: 'Threat Detection',
      description: 'High accuracy threat identification'
    },
    {
      metric: '24/7',
      label: 'Monitoring',
      description: 'Round-the-clock security oversight'
    },
    {
      metric: '<1min',
      label: 'Response Time',
      description: 'Rapid incident response'
    },
    {
      metric: '100%',
      label: 'Compliance',
      description: 'Full regulatory compliance'
    }
  ];

  const industries = [
    {
      industry: 'Financial Services',
      focus: ['PCI DSS compliance', 'Fraud detection', 'Transaction security', 'Regulatory compliance']
    },
    {
      industry: 'Healthcare',
      focus: ['HIPAA compliance', 'Patient data protection', 'Medical device security', 'Privacy safeguards']
    },
    {
      industry: 'Government',
      focus: ['FedRAMP compliance', 'Classified data protection', 'National security', 'Infrastructure security']
    },
    {
      industry: 'Manufacturing',
      focus: ['Industrial control security', 'Supply chain protection', 'Intellectual property', 'Operational security']
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-3121
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Advanced Cybersecurity Suite
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive cybersecurity protection for modern enterprises. 
              Advanced threat detection, zero trust security, and 24/7 monitoring.
>>>>>>> origin/cursor/website-audit-and-enhancement-1b0a
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-3121
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
<<<<<<< HEAD
                className="bg-white text-zion-blue px-8 py-4 rounded-lg font-semibold hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105"
              >
                Get Security Assessment
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-all duration-300"
              >
                Schedule Demo
=======
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg text-white font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Protected
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-200"
              >
                Security Demo
>>>>>>> origin/cursor/website-audit-and-enhancement-1b0a
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-3121
              </Link>
            </div>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-zion-cyan/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-zion-purple/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Advanced Security Features
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Our cybersecurity suite combines cutting-edge technology with expert human intelligence 
              to provide unmatched protection for your organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-600"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-blue to-zion-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
=======
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise-Grade Security Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced cybersecurity capabilities designed for modern threats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-red-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-1b0a
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-3121
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Security Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              From network security to data protection, our suite covers every aspect of cybersecurity 
              your organization needs to stay protected.
=======
      {/* Security Modules Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Security Modules
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Integrated security solutions for complete protection
>>>>>>> origin/cursor/website-audit-and-enhancement-1b0a
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<<<<<<< HEAD
            {securityServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-600"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-2xl flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Standards Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Industry Compliance Standards
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Our cybersecurity solutions help you meet and exceed industry compliance requirements 
              while maintaining the highest security standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => {
              const Icon = standard.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-800 rounded-xl border border-slate-200 dark:border-slate-600"
                >
                  <div className="flex items-center mb-4">
                    <Icon className="w-6 h-6 text-green-500 mr-3" />
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {standard.standard}
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {standard.description}
                  </p>
                </div>
              );
            })}
=======
            {securityModules.map((module, index) => (
              <div key={index} className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-red-500 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4">{module.title}</h3>
                <p className="text-gray-400 mb-6">{module.description}</p>
                <ul className="space-y-2">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-1b0a
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-3121
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Why Choose Our Cybersecurity Suite?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Experience the advantages of enterprise-grade cybersecurity protection
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 text-lg">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Security Performance Metrics
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Quantifiable security improvements and protection levels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-red-500 transition-all duration-300">
                <div className="text-4xl font-bold text-red-400 mb-2">
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-3121
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
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-1b0a
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Threat Landscape Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Understanding the Threat Landscape
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Cyber threats are constantly evolving. Our advanced cybersecurity suite provides 
              real-time protection against the latest attack vectors and emerging threats.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl border border-red-200 dark:border-red-700">
                <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
                  Ransomware Attacks
                </h3>
                <p className="text-red-600 dark:text-red-300 text-sm">
                  Advanced protection against encryption-based attacks and data extortion
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <Network className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Advanced Persistent Threats
                </h3>
                <p className="text-blue-600 dark:text-blue-300 text-sm">
                  Detection and prevention of sophisticated, long-term cyber attacks
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl border border-green-200 dark:border-green-700">
                <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                  Social Engineering
                </h3>
                <p className="text-green-600 dark:text-green-300 text-sm">
                  Protection against phishing, pretexting, and other manipulation tactics
                </p>
              </div>
            </div>
=======
      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry-Specific Security
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored cybersecurity solutions for different sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-semibold mb-4 text-red-400">{industry.industry}</h3>
                <ul className="space-y-2">
                  {industry.focus.map((focus, focusIndex) => (
                    <li key={focusIndex} className="flex items-center text-gray-300">
                      <Target className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                      {focus}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-1b0a
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3121
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-zion-blue via-zion-purple to-zion-cyan text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Don't wait until it's too late. Our cybersecurity experts are ready to assess your current 
              security posture and implement comprehensive protection measures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue px-8 py-4 rounded-lg font-semibold hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Get Security Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Related Services
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Explore our comprehensive suite of technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              to="/soc2-compliance-automation"
              className="group p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-600"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Key className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                SOC2 Compliance
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Automated compliance management and reporting for SOC2 Type II certification.
              </p>
              <div className="flex items-center text-zion-cyan group-hover:text-zion-purple transition-colors">
                <span className="font-medium">Learn More</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/ai-autonomous-systems"
              className="group p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-600"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-blue to-zion-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                AI Autonomous Systems
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                AI-powered security systems that autonomously detect and respond to threats.
              </p>
              <div className="flex items-center text-zion-cyan group-hover:text-zion-purple transition-colors">
                <span className="font-medium">Learn More</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/it-infrastructure"
              className="group p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-600"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                IT Infrastructure
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Secure and scalable infrastructure solutions with built-in security features.
              </p>
              <div className="flex items-center text-zion-cyan group-hover:text-zion-purple transition-colors">
                <span className="font-medium">Learn More</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Enterprise?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Protect your business with advanced cybersecurity solutions
=======
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our cybersecurity experts can help you implement comprehensive protection for your organization.
>>>>>>> origin/cursor/website-audit-and-enhancement-3121
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg text-white font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
            >
              Security Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-200"
            >
              View Pricing
>>>>>>> origin/cursor/website-audit-and-enhancement-1b0a
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-3121
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default AdvancedCybersecuritySuite;
>>>>>>> origin/cursor/website-audit-and-enhancement-3121
