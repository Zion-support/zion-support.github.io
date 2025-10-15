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
  GlobeAltIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const CybersecurityPage: React.FC = () => {
  const services = [
    {
      icon: ShieldCheckIcon,
      title: 'Security Audits',
      description: 'Comprehensive security assessments to identify vulnerabilities and compliance gaps.',
      features: ['Penetration testing', 'Vulnerability scanning', 'Compliance assessment', 'Risk analysis'],
      pricing: 'Starting at $2,499/mo'
    },
    {
      icon: LockClosedIcon,
      title: 'Data Protection',
      description: 'Advanced encryption and data security solutions to protect sensitive information.',
      features: ['End-to-end encryption', 'Data loss prevention', 'Access controls', 'Backup solutions'],
      pricing: 'Starting at $1,999/mo'
    },
    {
      icon: EyeIcon,
      title: 'Threat Monitoring',
      description: '24/7 security monitoring and threat detection using AI-powered systems.',
      features: ['Real-time monitoring', 'Threat intelligence', 'Incident response', 'Security alerts'],
      pricing: 'Starting at $3,999/mo'
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'Incident Response',
      description: 'Rapid response and recovery services for security incidents and breaches.',
      features: ['Emergency response', 'Forensic analysis', 'Recovery planning', 'Legal support'],
      pricing: 'Starting at $4,999/mo'
    }
  ];

  const compliance = [
    { name: 'SOC 2 Type II', status: 'Certified', icon: CheckCircleIcon },
    { name: 'ISO 27001', status: 'Certified', icon: CheckCircleIcon },
    { name: 'GDPR', status: 'Compliant', icon: CheckCircleIcon },
    { name: 'HIPAA', status: 'Compliant', icon: CheckCircleIcon },
    { name: 'PCI DSS', status: 'Compliant', icon: CheckCircleIcon },
    { name: 'NIST', status: 'Compliant', icon: CheckCircleIcon }
  ];

  const stats = [
    { number: '99.9%', label: 'Security Uptime' },
    { number: '24/7', label: 'Monitoring' },
    { number: '15min', label: 'Response Time' },
    { number: '100%', label: 'Compliance Rate' }
  ];

  return (
    <>
      <SEOHead
        title="Cybersecurity Solutions - Zion Tech Group"
        description="Comprehensive cybersecurity solutions including security audits, threat monitoring, data protection, and incident response. Protect your business with enterprise-grade security."
        keywords="cybersecurity, security audit, threat monitoring, data protection, incident response, compliance, SOC 2, ISO 27001"
        canonicalUrl="https://ziontechgroup.com/cybersecurity"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-slate-900 to-orange-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                <ShieldCheckIcon className="w-5 h-5 text-red-400 mr-2" />
                <span className="text-red-300 text-sm font-medium">Enterprise Security</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent holographic">
                  Cybersecurity Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your business with enterprise-grade cybersecurity solutions. Comprehensive security audits, threat monitoring, and incident response.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25">
                  Get Security Audit
                </button>
                <button className="border-2 border-red-400 text-red-300 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300">
                  View Compliance
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2 neon-text">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Security Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions designed to protect your business from evolving threats.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group holographic-card p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm text-red-400 font-medium neon-text">{service.pricing}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full cyber-button py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Compliance & Certifications</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We maintain the highest standards of security compliance and certifications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {compliance.map((item, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-red-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-300 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-green-400 font-medium">{item.status}</p>
                    </div>
                    <item.icon className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-900/40 via-slate-900 to-orange-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait for a security breach. Get comprehensive protection with our cybersecurity solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25">
                Get Security Audit
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Security Team
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <strong>Security Hotline:</strong> +1 302 464 0950</p>
              <p>✉️ <strong>Email:</strong> security@ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CybersecurityPage;