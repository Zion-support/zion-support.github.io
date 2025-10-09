import React from 'react';
import Link from 'next/link';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, Users, Database, Server, Key } from 'lucide-react';

const SecurityPage: React.FC = () => {
  const securityServices = [
    {
      icon: <Shield className="w-12 h-12 text-green-400" />,
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security evaluation to identify vulnerabilities and risks in your systems.',
      features: [
        'Vulnerability scanning',
        'Penetration testing',
        'Security audit report',
        'Risk assessment',
        'Compliance check',
        'Remediation recommendations'
      ],
      pricing: 'Starting at $2,999',
      category: 'Assessment'
    },
    {
      icon: <Lock className="w-12 h-12 text-blue-400" />,
      title: 'Data Protection & Encryption',
      description: 'Advanced encryption and data protection solutions to secure your sensitive information.',
      features: [
        'End-to-end encryption',
        'Data loss prevention',
        'Secure key management',
        'Database encryption',
        'File system protection',
        'Backup encryption'
      ],
      pricing: 'Starting at $1,499/month',
      category: 'Data Protection'
    },
    {
      icon: <Eye className="w-12 h-12 text-purple-400" />,
      title: 'Threat Monitoring & Detection',
      description: '24/7 threat monitoring and detection using AI-powered security analytics.',
      features: [
        'Real-time threat detection',
        'AI-powered analytics',
        'Incident response',
        'Security alerts',
        'Threat intelligence',
        'Forensic analysis'
      ],
      pricing: 'Starting at $999/month',
      category: 'Monitoring'
    },
    {
      icon: <Users className="w-12 h-12 text-orange-400" />,
      title: 'Identity & Access Management',
      description: 'Comprehensive identity and access management solutions for secure user authentication.',
      features: [
        'Multi-factor authentication',
        'Single sign-on (SSO)',
        'Role-based access control',
        'Privileged access management',
        'Identity governance',
        'User provisioning'
      ],
      pricing: 'Starting at $799/month',
      category: 'IAM'
    },
    {
      icon: <Database className="w-12 h-12 text-red-400" />,
      title: 'Database Security',
      description: 'Specialized security solutions for database protection and compliance.',
      features: [
        'Database encryption',
        'Access control',
        'Audit logging',
        'Data masking',
        'Compliance reporting',
        'Performance monitoring'
      ],
      pricing: 'Starting at $1,299/month',
      category: 'Database'
    },
    {
      icon: <Server className="w-12 h-12 text-cyan-400" />,
      title: 'Infrastructure Security',
      description: 'Comprehensive security for your IT infrastructure and network systems.',
      features: [
        'Network security',
        'Firewall management',
        'Intrusion detection',
        'Security patching',
        'Configuration management',
        'Compliance monitoring'
      ],
      pricing: 'Starting at $1,199/month',
      category: 'Infrastructure'
    }
  ];

  const securityFeatures = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: 'SOC 2 Type II Certified',
      description: 'We maintain the highest security standards with SOC 2 Type II certification.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: '24/7 Security Monitoring',
      description: 'Round-the-clock monitoring to detect and respond to security threats immediately.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced AI algorithms to identify and prevent sophisticated cyber attacks.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: 'Compliance Management',
      description: 'Ensure compliance with GDPR, HIPAA, PCI DSS, and other regulatory requirements.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cybersecurity Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Protect your business with our comprehensive cybersecurity services. From threat detection to compliance management, we keep your data secure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Get Security Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="#services"
              className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Security Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Security Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Services */}
        <div id="services" className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Security Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400 mb-3">{service.pricing}</div>
                  <Link
                    href="/contact"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-medium transition-colors inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait for a security breach. Let our experts help you build a robust security posture that protects your business and data.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center"
          >
            Get Free Security Assessment
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
