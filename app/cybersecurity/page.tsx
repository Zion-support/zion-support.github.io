import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  EyeIcon, 
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const CybersecurityPage: React.FC = () => {
  const services = [
    {
      icon: ShieldCheckIcon,
      title: 'Security Assessment',
      description: 'Comprehensive security audits to identify vulnerabilities and strengthen your defenses.',
      features: ['Penetration Testing', 'Vulnerability Scanning', 'Security Compliance', 'Risk Assessment']
    },
    {
      icon: LockClosedIcon,
      title: 'Data Protection',
      description: 'Advanced encryption and data security solutions to protect sensitive information.',
      features: ['End-to-End Encryption', 'Data Loss Prevention', 'Secure Backup', 'Access Controls']
    },
    {
      icon: EyeIcon,
      title: 'Threat Monitoring',
      description: '24/7 security monitoring and threat detection to keep your systems safe.',
      features: ['Real-time Monitoring', 'Threat Intelligence', 'Incident Response', 'Security Analytics']
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'Compliance Management',
      description: 'Ensure compliance with industry standards and regulations.',
      features: ['GDPR Compliance', 'HIPAA Compliance', 'SOC 2 Certification', 'ISO 27001']
    }
  ];

  const benefits = [
    'Protect against cyber threats and data breaches',
    'Ensure regulatory compliance and avoid penalties',
    'Reduce security risks and vulnerabilities',
    'Improve customer trust and brand reputation',
    'Minimize downtime and business disruption',
    'Lower insurance costs and risk exposure'
  ];

  return (
    <>
      <SEOHead
        title="Cybersecurity Solutions - Zion Tech Group"
        description="Comprehensive cybersecurity solutions including security assessment, data protection, threat monitoring, and compliance management."
        keywords="cybersecurity, security assessment, data protection, threat monitoring, compliance, penetration testing, encryption"
        canonicalUrl="https://ziontechgroup.com/cybersecurity"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-slate-900 to-red-900/20"></div>
          <div className="cyber-grid absolute inset-0 opacity-20"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Cybersecurity Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Protect your business with enterprise-grade cybersecurity solutions designed to defend against 
              <span className="text-red-400 font-semibold"> evolving threats</span> and ensure regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 text-lg font-semibold">
                Get Security Assessment
              </button>
              <button className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300 text-lg font-semibold">
                View Pricing
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Security Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions tailored to protect your business from modern threats
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-red-400 mb-3">Key Features</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Cybersecurity Solutions</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge security technology with expert knowledge to protect your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-red-500/10">
                  <div className="relative">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-green-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-900/40 via-slate-900 to-red-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait for a security breach. Let our experts help you build a robust cybersecurity strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 text-lg font-semibold">
                Get Security Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300 text-lg font-semibold">
                Contact Security Expert
              </button>
            </div>
            <div className="mt-8 text-red-200">
              <p>📞 Call us: <a href="tel:+13024640950" className="text-white hover:underline">+1 (302) 464-0950</a></p>
              <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:underline">kleber@ziontechgroup.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CybersecurityPage;