import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ShieldCheckIcon, 
  LockClosedIcon,
  EyeIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CpuChipIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const CybersecurityPage: React.FC = () => {
  const services = [
    {
      icon: ShieldCheckIcon,
      title: 'Security Audits',
      description: 'Comprehensive security assessments to identify vulnerabilities and risks in your infrastructure.',
      features: ['Vulnerability Scanning', 'Penetration Testing', 'Compliance Audits', 'Risk Assessment'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: LockClosedIcon,
      title: 'Data Protection',
      description: 'Advanced encryption and data protection solutions to secure your sensitive information.',
      features: ['End-to-End Encryption', 'Data Loss Prevention', 'Secure Backup', 'Access Controls'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: EyeIcon,
      title: 'Threat Detection',
      description: 'AI-powered threat detection and monitoring to identify and respond to security incidents.',
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Anomaly Detection', 'Incident Response'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'Incident Response',
      description: 'Rapid response and recovery services to minimize damage from security breaches.',
      features: ['24/7 Monitoring', 'Rapid Response', 'Forensic Analysis', 'Recovery Planning'],
      color: 'from-red-500 to-orange-500'
    }
  ];

  const complianceStandards = [
    { name: 'SOC 2', description: 'Security, availability, and confidentiality controls' },
    { name: 'ISO 27001', description: 'Information security management systems' },
    { name: 'GDPR', description: 'General Data Protection Regulation compliance' },
    { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act' },
    { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard' },
    { name: 'NIST', description: 'National Institute of Standards and Technology' }
  ];

  const securityFeatures = [
    'Multi-factor Authentication',
    'Zero Trust Architecture',
    'Advanced Threat Protection',
    'Security Information and Event Management (SIEM)',
    'Identity and Access Management (IAM)',
    'Network Security Monitoring',
    'Endpoint Detection and Response (EDR)',
    'Cloud Security Posture Management',
    'Security Awareness Training',
    'Regular Security Updates',
    'Incident Response Planning',
    'Business Continuity Planning'
  ];

  return (
    <>
      <SEOHead
        title="Cybersecurity Solutions - Zion Tech Group"
        description="Comprehensive cybersecurity services including security audits, threat detection, data protection, and incident response. Protect your business with our advanced security solutions."
        keywords="cybersecurity, security audit, threat detection, data protection, incident response, security compliance, network security"
        canonicalUrl="https://ziontechgroup.com/cybersecurity"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Cybersecurity Solutions
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Protect your business with comprehensive cybersecurity services. From threat detection to incident response, we keep your data and infrastructure secure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Get Security Assessment
                </a>
                <a href="/security-audit" className="border-2 border-purple-400 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Security Audit
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Security Services</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions designed to protect your business from evolving threats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Compliance & <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Standards</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We help you meet industry compliance standards and regulatory requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">{standard.name}</h3>
                  <p className="text-gray-400 text-sm">{standard.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Security <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Advanced security technologies and practices to protect your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our Security <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                A systematic approach to securing your business infrastructure and data.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Assessment',
                  description: 'Comprehensive security assessment to identify vulnerabilities and risks'
                },
                {
                  step: '02',
                  title: 'Planning',
                  description: 'Develop a customized security strategy and implementation plan'
                },
                {
                  step: '03',
                  title: 'Implementation',
                  description: 'Deploy security solutions and best practices across your infrastructure'
                },
                {
                  step: '04',
                  title: 'Monitoring',
                  description: 'Continuous monitoring and maintenance to ensure ongoing protection'
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Secure Your Business Today
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Don't wait for a security breach. Protect your business with our comprehensive cybersecurity solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                Get Security Assessment
              </a>
              <a href="/pricing" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                View Pricing
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CybersecurityPage;