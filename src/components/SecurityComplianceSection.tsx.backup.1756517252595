import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  CheckCircle, 
  AlertTriangle, 
  Users,
  Award,
  FileText,
  Globe,
  Server,
  Eye
} from 'lucide-react';

export const SecurityComplianceSection: React.FC = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Zero Trust Security',
      description: 'Implement comprehensive zero-trust architecture with continuous verification.',
      benefits: ['Continuous authentication', 'Micro-segmentation', 'Least privilege access', 'Real-time monitoring']
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption for data at rest and in transit.',
      benefits: ['AES-256 encryption', 'TLS 1.3 protocols', 'Key management', 'Encrypted backups']
    },
    {
      icon: Users,
      title: 'Identity & Access Management',
      description: 'Robust IAM solutions with multi-factor authentication.',
      benefits: ['SSO integration', 'MFA enforcement', 'Role-based access', 'Privileged access management']
    },
    {
      icon: Server,
      title: 'Network Security',
      description: 'Advanced network protection with intrusion detection and prevention.',
      benefits: ['Firewall protection', 'IDS/IPS systems', 'DDoS mitigation', 'VPN solutions']
    }
  ];

  const complianceFrameworks = [
    { name: 'SOC 2 Type II', status: 'Certified', icon: CheckCircle, color: 'text-green-500' },
    { name: 'ISO 27001', status: 'Certified', icon: CheckCircle, color: 'text-green-500' },
    { name: 'GDPR', status: 'Compliant', icon: CheckCircle, color: 'text-green-500' },
    { name: 'HIPAA', status: 'Compliant', icon: CheckCircle, color: 'text-green-500' },
    { name: 'PCI DSS', status: 'Level 1', icon: CheckCircle, color: 'text-green-500' },
    { name: 'NIST', status: 'Compliant', icon: CheckCircle, color: 'text-green-500' }
  ];

  const securityMetrics = [
    { label: 'Security Incidents', value: '0', icon: AlertTriangle },
    { label: 'Uptime', value: '99.99%', icon: Server },
    { label: 'Data Breaches', value: '0', icon: Shield },
    { label: 'Compliance Score', value: '100%', icon: Award }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Security & Compliance
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade security with industry-leading compliance certifications. 
            Your data and systems are protected by the highest security standards.
          </p>
        </motion.div>

        {/* Security Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {securityMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={metric.label} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-600 rounded-full">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-300">{metric.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-600 rounded-xl mr-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Compliance Frameworks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Compliance & Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFrameworks.map((framework, index) => {
              const IconComponent = framework.icon;
              return (
                <div key={framework.name} className="bg-gray-800 rounded-xl p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <IconComponent className={`h-8 w-8 ${framework.color}`} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{framework.name}</h4>
                  <p className="text-sm text-gray-400">{framework.status}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Secure Your Business Today
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get enterprise-grade security and compliance without the complexity. 
              Our experts handle everything while you focus on your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200">
                Security Assessment
                <Shield className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-medium transition-colors duration-200">
                Compliance Review
                <FileText className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityComplianceSection;
