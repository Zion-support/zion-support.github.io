import { motion } from 'framer-motion';
import Head from 'next/head';
import { Lock, Users, Shield, Eye, AlertTriangle, CheckCircle } from 'lucide-react';

const securityFeatures = [
  {
    title: 'Data Encryption',
    description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols.',
    icon: Lock,
    color: 'from-blue-500 to-cyan-500',
    details: ['AES-256 encryption', 'TLS 1.3 for data in transit', 'End-to-end encryption', 'Key management']
  },
  {
    title: 'Access Control',
    description: 'Multi-factor authentication and role-based access control to protect sensitive data.',
    icon: Users,
    color: 'from-green-500 to-emerald-500',
    details: ['MFA required', 'Role-based permissions', 'Single sign-on (SSO)', 'Regular access reviews']
  },
  {
    title: 'Network Security',
    description: 'Advanced network security measures including firewalls and intrusion detection.',
    icon: Shield,
    color: 'from-purple-500 to-pink-500',
    details: ['Firewall protection', 'Intrusion detection', 'DDoS protection', 'Network monitoring']
  },
  {
    title: 'Monitoring & Logging',
    description: 'Comprehensive monitoring and logging of all system activities and security events.',
    icon: Eye,
    color: 'from-orange-500 to-red-500',
    details: ['Real-time monitoring', 'Security event logging', 'Audit trails', 'Alert systems']
  },
  {
    title: 'Compliance',
    description: 'Full compliance with industry standards and regulations including SOC 2, GDPR, and HIPAA.',
    icon: CheckCircle,
    color: 'from-indigo-500 to-blue-500',
    details: ['SOC 2 Type II', 'GDPR compliance', 'HIPAA compliance', 'Regular audits']
  },
  {
    title: 'Incident Response',
    description: 'Rapid response to security incidents with 24/7 monitoring and incident management.',
    icon: AlertTriangle,
    color: 'from-red-500 to-pink-500',
    details: ['24/7 monitoring', 'Incident response team', 'Automated alerts', 'Recovery procedures']
  }
];

export default function Security() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Security - Zion Tech Group</title>
        <meta name="description" content="Comprehensive security measures to protect your data and business" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Security & Compliance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your data security is our top priority. We implement industry-leading security measures to protect your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} mr-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{feature.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}