import React from 'react';
import SEOHead from '../components/SEOHead';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Users } from 'lucide-react';

const CybersecuritySolutionsPage: React.FC = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Audits',
      description: 'Comprehensive security assessments to identify vulnerabilities and risks.',
      features: ['Vulnerability Scanning', 'Penetration Testing', 'Risk Assessment', 'Compliance Review']
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Data Protection',
      description: 'Advanced encryption and data security measures to protect sensitive information.',
      features: ['Data Encryption', 'Access Controls', 'Data Loss Prevention', 'Backup Security']
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Threat Monitoring',
      description: '24/7 monitoring and detection of security threats and suspicious activities.',
      features: ['Real-time Monitoring', 'Threat Detection', 'Incident Response', 'Security Analytics']
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Incident Response',
      description: 'Rapid response and recovery services for security incidents and breaches.',
      features: ['Emergency Response', 'Forensic Analysis', 'Recovery Planning', 'Damage Assessment']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Security Training',
      description: 'Employee training and awareness programs to prevent security breaches.',
      features: ['Security Awareness', 'Phishing Simulation', 'Best Practices', 'Compliance Training']
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Compliance Management',
      description: 'Ensure compliance with industry standards and regulatory requirements.',
      features: ['GDPR Compliance', 'HIPAA Compliance', 'SOC 2', 'ISO 27001']
    }
  ];

  return (
    <>
      <SEOHead
        title="Cybersecurity Solutions - Zion Tech Group"
        description="Advanced cybersecurity solutions including security audits, threat monitoring, data protection, and incident response for modern businesses."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-600 bg-clip-text text-transparent">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your business from evolving cyber threats with our comprehensive security solutions and expert support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="text-red-400 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-slate-800 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Cybersecurity Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Expert Security Team</h3>
                <p className="text-gray-300">Certified cybersecurity professionals with advanced threat detection skills</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">24/7 Monitoring</h3>
                <p className="text-gray-300">Round-the-clock threat monitoring and rapid incident response</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
                <p className="text-gray-300">Zero successful breaches for our clients in the past 3 years</p>
              </div>
            </div>
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Secure Your Business Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CybersecuritySolutionsPage;