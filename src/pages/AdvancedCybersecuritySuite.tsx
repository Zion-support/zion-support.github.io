import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
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
    },
    {
      icon: Eye,
      title: "24/7 Security Monitoring",
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
    },
    {
      icon: BarChart3,
      title: "Security Analytics",
      description: "Advanced analytics and machine learning for predictive threat detection and risk assessment."
    }
  ];

  const securityServices = [
    {
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
    }
  ];

  const benefits = [
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
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue px-8 py-4 rounded-lg font-semibold hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105"
              >
                Get Security Assessment
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
        
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
          </div>
        </div>
      </section>

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
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
          </div>
        </div>
      </section>

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
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}