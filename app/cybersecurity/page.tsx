import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  EyeIcon, 
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  CpuChipIcon,
  CloudIcon,
  ChartBarIcon,
  UserGroupIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const CybersecurityPage: React.FC = () => {
  const services = [
    {
      icon: ShieldCheckIcon,
      title: 'Security Assessment',
      description: 'Comprehensive security evaluation of your systems and infrastructure to identify vulnerabilities and risks.',
      features: ['Penetration Testing', 'Vulnerability Assessment', 'Security Audit', 'Risk Analysis'],
      pricing: 'Starting at $2,499/mo',
      popular: true
    },
    {
      icon: LockClosedIcon,
      title: 'Threat Detection',
      description: 'Advanced threat detection and monitoring systems to protect against cyber attacks in real-time.',
      features: ['24/7 Monitoring', 'AI-Powered Detection', 'Incident Response', 'Threat Intelligence'],
      pricing: 'Starting at $1,999/mo',
      popular: false
    },
    {
      icon: EyeIcon,
      title: 'Compliance Management',
      description: 'Ensure your organization meets industry standards and regulatory requirements.',
      features: ['SOC 2 Compliance', 'GDPR Compliance', 'HIPAA Compliance', 'ISO 27001'],
      pricing: 'Starting at $3,999/mo',
      popular: false
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'Incident Response',
      description: 'Rapid response and recovery services to minimize damage from security incidents.',
      features: ['24/7 Support', 'Forensic Analysis', 'Recovery Planning', 'Legal Support'],
      pricing: 'Starting at $4,999/mo',
      popular: false
    },
    {
      icon: CpuChipIcon,
      title: 'AI Security Solutions',
      description: 'AI-powered security tools to detect and prevent sophisticated cyber threats.',
      features: ['Machine Learning Detection', 'Behavioral Analysis', 'Predictive Security', 'Automated Response'],
      pricing: 'Starting at $2,999/mo',
      popular: false
    },
    {
      icon: CloudIcon,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions for cloud infrastructure and applications.',
      features: ['Cloud Access Security', 'Data Encryption', 'Identity Management', 'Compliance Monitoring'],
      pricing: 'Starting at $1,499/mo',
      popular: false
    }
  ];

  const threats = [
    {
      name: 'Ransomware',
      description: 'Malicious software that encrypts your data and demands payment for decryption.',
      impact: 'High',
      prevention: 'Regular backups, employee training, endpoint protection'
    },
    {
      name: 'Phishing',
      description: 'Fraudulent attempts to obtain sensitive information through deceptive emails.',
      impact: 'Medium',
      prevention: 'Email filtering, user education, multi-factor authentication'
    },
    {
      name: 'Data Breaches',
      description: 'Unauthorized access to sensitive data, often resulting in data theft.',
      impact: 'Critical',
      prevention: 'Access controls, encryption, monitoring systems'
    },
    {
      name: 'Insider Threats',
      description: 'Security risks posed by employees or contractors with access to systems.',
      impact: 'High',
      prevention: 'User monitoring, access controls, regular audits'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Threat Detection Rate' },
    { number: '24/7', label: 'Security Monitoring' },
    { number: '15min', label: 'Average Response Time' },
    { number: '100+', label: 'Security Experts' },
    { number: '50+', label: 'Compliance Standards' },
    { number: '1000+', label: 'Threats Blocked Daily' }
  ];

  return (
    <>
      <SEOHead
        title="Cybersecurity Solutions - Advanced Security Services | Zion Tech Group"
        description="Comprehensive cybersecurity solutions including threat detection, compliance management, incident response, and AI-powered security tools. Protect your business from cyber threats."
        keywords="cybersecurity, security assessment, threat detection, compliance, incident response, AI security, cloud security, penetration testing"
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
                <span className="text-red-300 text-sm font-medium">Advanced Security Solutions</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent holographic">
                  Cybersecurity Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your business from evolving cyber threats with our comprehensive security solutions. 
                Advanced threat detection, compliance management, and incident response services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25">
                  Get Security Assessment
                </button>
                <button className="border-2 border-red-400 text-red-300 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300">
                  View Security Report
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
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
                Comprehensive cybersecurity solutions designed to protect your business from all types of cyber threats.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className={`group holographic-card p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl ${
                  service.popular ? 'border-red-500 shadow-red-500/20' : 'border-slate-700 hover:border-red-500 hover:shadow-red-500/20'
                }`}>
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
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

        {/* Threat Landscape Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Current <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Threat Landscape</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Understanding the threats your business faces is the first step in protecting against them.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {threats.map((threat, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-red-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{threat.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      threat.impact === 'Critical' ? 'bg-red-500 text-white' :
                      threat.impact === 'High' ? 'bg-orange-500 text-white' :
                      'bg-yellow-500 text-black'
                    }`}>
                      {threat.impact} Risk
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{threat.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-2">Prevention Strategies:</h4>
                    <p className="text-gray-300 text-sm">{threat.prevention}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Process Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Security Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach to securing your business infrastructure and data.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Assessment',
                  description: 'Comprehensive security evaluation and risk analysis',
                  icon: EyeIcon
                },
                {
                  step: '02',
                  title: 'Planning',
                  description: 'Custom security strategy and implementation plan',
                  icon: DocumentTextIcon
                },
                {
                  step: '03',
                  title: 'Implementation',
                  description: 'Deploy security solutions and monitoring systems',
                  icon: ShieldCheckIcon
                },
                {
                  step: '04',
                  title: 'Monitoring',
                  description: 'Continuous monitoring and threat response',
                  icon: ChartBarIcon
                }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform neon-border-animated">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">
                    {step.description}
                  </p>
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
              Don't wait for a cyber attack. Get comprehensive security protection now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25">
                Get Security Assessment
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Security Team
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
              <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CybersecurityPage;