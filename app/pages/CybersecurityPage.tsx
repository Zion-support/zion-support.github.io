import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ShieldCheckIcon,
  LockClosedIcon,
  EyeIcon,
  ExclamationTriangleIcon,
  CogIcon,
  ChartBarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  CloudIcon,
  CpuChipIcon,
  DocumentTextIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

const CybersecurityPage: React.FC = () => {
  const securityServices = [
    {
      icon: ShieldCheckIcon,
      title: 'Security Assessment',
      description: 'Comprehensive security audits and vulnerability assessments to identify and mitigate risks.',
      features: ['Penetration Testing', 'Vulnerability Scanning', 'Security Audits', 'Compliance Reviews']
    },
    {
      icon: LockClosedIcon,
      title: 'Identity & Access Management',
      description: 'Secure identity management and access control solutions for your organization.',
      features: ['Multi-Factor Authentication', 'Single Sign-On', 'Privileged Access Management', 'Identity Governance']
    },
    {
      icon: EyeIcon,
      title: 'Threat Detection & Response',
      description: 'Advanced threat detection and incident response services to protect against cyber attacks.',
      features: ['SIEM Implementation', 'Threat Hunting', 'Incident Response', 'Forensic Analysis']
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'Security Monitoring',
      description: '24/7 security monitoring and alerting to ensure continuous protection.',
      features: ['Real-time Monitoring', 'Security Analytics', 'Threat Intelligence', 'Automated Response']
    },
    {
      icon: CogIcon,
      title: 'Security Architecture',
      description: 'Design and implement robust security architectures for your infrastructure.',
      features: ['Zero Trust Architecture', 'Network Segmentation', 'Security Controls', 'Risk Management']
    },
    {
      icon: ChartBarIcon,
      title: 'Compliance & Governance',
      description: 'Ensure compliance with industry regulations and security standards.',
      features: ['GDPR Compliance', 'SOC 2 Certification', 'ISO 27001', 'HIPAA Compliance']
    }
  ];

  const threatTypes = [
    {
      name: 'Ransomware',
      description: 'Protect against ransomware attacks with advanced detection and prevention.',
      icon: '🔒',
      severity: 'High'
    },
    {
      name: 'Phishing',
      description: 'Combat phishing attempts with email security and user training.',
      icon: '🎣',
      severity: 'Medium'
    },
    {
      name: 'DDoS Attacks',
      description: 'Defend against distributed denial-of-service attacks.',
      icon: '⚡',
      severity: 'High'
    },
    {
      name: 'Insider Threats',
      description: 'Monitor and prevent threats from within your organization.',
      icon: '👤',
      severity: 'Medium'
    },
    {
      name: 'Advanced Persistent Threats',
      description: 'Detect and respond to sophisticated long-term attacks.',
      icon: '🎯',
      severity: 'Critical'
    },
    {
      name: 'Data Breaches',
      description: 'Prevent unauthorized access to sensitive data and information.',
      icon: '📊',
      severity: 'High'
    }
  ];

  const complianceFrameworks = [
    'ISO 27001',
    'SOC 2 Type II',
    'GDPR',
    'HIPAA',
    'PCI DSS',
    'NIST Cybersecurity Framework',
    'CIS Controls',
    'COBIT'
  ];

  const securityStats = [
    { number: '99.9%', label: 'Threat Detection Rate' },
    { number: '< 15 min', label: 'Average Response Time' },
    { number: '24/7', label: 'Security Monitoring' },
    { number: '100%', label: 'Compliance Success Rate' }
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions including threat detection, incident response, compliance, and security architecture. Protect your business with expert security services." />
        <meta name="keywords" content="cybersecurity, security solutions, threat detection, incident response, compliance, security audit, penetration testing, SIEM" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-orange-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Cybersecurity Solutions
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Protect your business with comprehensive cybersecurity solutions. From threat detection to compliance, we keep your digital assets secure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Security Assessment
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-red-400 text-red-300 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Security Stats */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {securityStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-red-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Security Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions designed to protect your business from evolving threats.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-red-500 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-red-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Threat Types Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Threats We <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Protect Against</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our security solutions protect against a wide range of cyber threats and attacks.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {threatTypes.map((threat, index) => (
                <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-slate-700 hover:border-red-500 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{threat.icon}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      threat.severity === 'Critical' ? 'bg-red-900/30 text-red-300' :
                      threat.severity === 'High' ? 'bg-orange-900/30 text-orange-300' :
                      'bg-yellow-900/30 text-yellow-300'
                    }`}>
                      {threat.severity}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-red-300 transition-colors">
                    {threat.name}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {threat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Compliance & <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Standards</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We help you achieve and maintain compliance with industry security standards and regulations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className="bg-slate-800/30 p-4 rounded-lg border border-slate-700 hover:border-red-500 transition-all duration-300 text-center group">
                  <span className="text-gray-300 group-hover:text-white transition-colors font-medium text-sm">
                    {framework}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-900/30 to-orange-900/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait for a security breach. Let our experts help you build a robust cybersecurity posture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Security Assessment
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CybersecurityPage;