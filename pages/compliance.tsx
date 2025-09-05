import Head from 'next/head';
import { motion } from 'framer-motion';
import { Lock, Shield, CheckCircle, FileText, Calendar, Users } from 'lucide-react';
import Layout from '../components/Layout';

const complianceStandards = [
  {
    name: 'SOC 2 Type II',
    description: 'Security, availability, and confidentiality controls',
    color: 'from-blue-500 to-cyan-500',
    details: [
      'Annual third-party audits',
      'Security controls implementation',
      'Availability monitoring',
      'Confidentiality protection'
    ],
    lastAudit: '2024-01-15',
    nextAudit: '2025-01-15',
    icon: Lock,
    requirements: [
      'Data encryption in transit and at rest',
      'Access controls and authentication',
      'Data retention and deletion policies',
      'Privacy by design principles'
    ]
  },
  {
    name: 'HIPAA Compliance',
    description: 'Healthcare data protection standards',
    color: 'from-green-500 to-emerald-500',
    details: [
      'Patient data protection',
      'Administrative safeguards',
      'Physical safeguards',
      'Technical safeguards'
    ],
    lastAudit: '2024-02-01',
    nextAudit: '2025-02-01',
    icon: Shield,
    requirements: [
      'Encryption of PHI',
      'Access controls',
      'Audit logs',
      'Risk assessments'
    ]
  },
  {
    name: 'GDPR Compliance',
    description: 'European data protection regulation',
    color: 'from-purple-500 to-pink-500',
    details: [
      'Data subject rights',
      'Consent management',
      'Data breach notification',
      'Privacy impact assessments'
    ],
    lastAudit: '2024-03-01',
    nextAudit: '2025-03-01',
    icon: CheckCircle,
    requirements: [
      'Lawful basis for processing',
      'Data minimization',
      'Right to be forgotten',
      'Data portability'
    ]
  }
];

export default function Compliance() {
  return (
    <Layout>
      <Head>
        <title>Compliance & Certifications - Zion Tech Group</title>
        <meta name="description" content="Learn about our compliance standards and certifications for security and data protection." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Compliance & Certifications
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We maintain the highest standards of security, privacy, and regulatory compliance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Compliance Standards Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {complianceStandards.map((standard, index) => {
                const IconComponent = standard.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${standard.color} rounded-lg flex items-center justify-center mb-6`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{standard.name}</h3>
                    <p className="text-gray-600 mb-6">{standard.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900">Key Requirements:</h4>
                      <ul className="space-y-2">
                        {standard.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between text-sm text-gray-500 mb-2">
                        <span>Last Audit:</span>
                        <span>{standard.lastAudit}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Next Audit:</span>
                        <span>{standard.nextAudit}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}