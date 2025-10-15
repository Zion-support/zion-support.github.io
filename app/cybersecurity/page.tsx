import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  EyeIcon, 
  KeyIcon,
  DocumentCheckIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const CybersecurityPage: React.FC = () => {
  const services = [
    {
      icon: ShieldCheckIcon,
      title: 'Security Assessment',
      description: 'Comprehensive security evaluation of your systems and infrastructure',
      features: ['Vulnerability scanning', 'Penetration testing', 'Risk assessment', 'Compliance audit']
    },
    {
      icon: LockClosedIcon,
      title: 'Data Protection',
      description: 'Advanced encryption and data security solutions',
      features: ['End-to-end encryption', 'Data loss prevention', 'Secure backup', 'Access controls']
    },
    {
      icon: EyeIcon,
      title: 'Threat Monitoring',
      description: '24/7 security monitoring and threat detection',
      features: ['Real-time monitoring', 'Threat intelligence', 'Incident response', 'Security alerts']
    },
    {
      icon: KeyIcon,
      title: 'Identity Management',
      description: 'Secure identity and access management solutions',
      features: ['Multi-factor authentication', 'Single sign-on', 'Role-based access', 'Identity governance']
    },
    {
      icon: DocumentCheckIcon,
      title: 'Compliance',
      description: 'Ensure compliance with industry standards and regulations',
      features: ['GDPR compliance', 'HIPAA compliance', 'SOC 2 certification', 'ISO 27001']
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'Incident Response',
      description: 'Rapid response to security incidents and breaches',
      features: ['24/7 support', 'Forensic analysis', 'Recovery planning', 'Post-incident review']
    }
  ];

  const benefits = [
    'Protect sensitive data and intellectual property',
    'Ensure regulatory compliance',
    'Reduce security risks and vulnerabilities',
    'Improve customer trust and confidence',
    'Minimize financial losses from breaches',
    'Enhance business continuity',
    'Stay ahead of emerging threats',
    'Optimize security operations'
  ];

  return (
    <>
      <SEOHead
        title="Cybersecurity Services - Zion Tech Group"
        description="Comprehensive cybersecurity solutions to protect your business from threats. Advanced security assessment, data protection, and threat monitoring services."
        keywords="cybersecurity, security assessment, data protection, threat monitoring, compliance, penetration testing, security audit"
        canonicalUrl="https://ziontechgroup.com/cybersecurity"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-slate-900 to-orange-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="holographic">Cybersecurity</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Protect your business with <span className="text-red-400 font-semibold">advanced cybersecurity solutions</span> 
              designed to defend against evolving threats
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact" className="cyber-button text-lg px-8 py-4">
                Get Security Assessment
              </a>
              <a href="/contact" className="cyber-button text-lg px-8 py-4 border-red-400 text-red-400 hover:border-red-300 hover:text-red-300">
                Schedule Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="gradient-text">Security Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="card-cyber hover-lift group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-16 h-16 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-red-400 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                          <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full cyber-button">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our <span className="gradient-text">Cybersecurity Solutions</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Protect your business with industry-leading security expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="glass-dark rounded-lg p-6 text-center hover-lift">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircleIcon className="w-6 h-6 text-red-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-dark rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our cybersecurity solutions can protect your organization
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="cyber-button text-lg px-8 py-4">
                  Get Security Assessment
                </a>
                <a href="/contact" className="cyber-button text-lg px-8 py-4 border-green-400 text-green-400 hover:border-green-300 hover:text-green-300">
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CybersecurityPage;