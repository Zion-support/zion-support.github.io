import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  EyeIcon, 
  CpuChipIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ExclamationTriangleIcon,
  KeyIcon,
  ServerIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const CybersecurityPage: React.FC = () => {
  const services = [
    {
      icon: ShieldCheckIcon,
      title: 'Security Assessment',
      description: 'Comprehensive security audits to identify vulnerabilities and protect your digital assets.',
      features: ['Vulnerability Scanning', 'Penetration Testing', 'Risk Assessment', 'Compliance Audit']
    },
    {
      icon: LockClosedIcon,
      title: 'Data Protection',
      description: 'Advanced encryption and data protection solutions to secure sensitive information.',
      features: ['End-to-End Encryption', 'Data Loss Prevention', 'Secure Backup', 'Access Control']
    },
    {
      icon: EyeIcon,
      title: 'Threat Monitoring',
      description: '24/7 threat detection and monitoring to prevent security breaches before they happen.',
      features: ['Real-time Monitoring', 'Threat Intelligence', 'Incident Response', 'Security Analytics']
    },
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Security',
      description: 'Machine learning-based security solutions that adapt and evolve with emerging threats.',
      features: ['Behavioral Analysis', 'Anomaly Detection', 'Predictive Security', 'Automated Response']
    }
  ];

  const compliance = [
    'SOC 2 Type II',
    'ISO 27001',
    'GDPR',
    'HIPAA',
    'PCI DSS',
    'NIST Framework'
  ];

  return (
    <>
      <SEOHead
        title="Cybersecurity Solutions - Zion Tech Group"
        description="Comprehensive cybersecurity solutions including security assessment, data protection, threat monitoring, and AI-powered security services."
        keywords="cybersecurity, security audit, data protection, threat monitoring, AI security, compliance, SOC 2, ISO 27001, GDPR"
        canonicalUrl="https://ziontechgroup.com/cybersecurity"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-slate-900 to-orange-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Cybersecurity Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your business with advanced cybersecurity solutions. We provide comprehensive security services to safeguard your digital assets and ensure compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                  Get Security Assessment
                </button>
                <button className="border-2 border-red-400 text-red-300 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our <span className="text-red-400">Security Services</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions designed to protect your business from evolving threats.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
                <span className="text-red-400">Compliance</span> & Standards
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We help you meet industry standards and regulatory requirements with our compliance expertise.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {compliance.map((standard, index) => (
                <div key={index} className="bg-slate-800/50 p-4 rounded-lg text-center hover:bg-slate-700/50 transition-all duration-300">
                  <div className="text-sm font-semibold text-white">{standard}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-red-900/40 via-slate-900 to-orange-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact our cybersecurity experts for a comprehensive security assessment and customized protection plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                Get Security Assessment
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CybersecurityPage;