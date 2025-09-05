import Head from 'next/head';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, User } from 'lucide-react';
import Layout from '../components/Layout';

const privacySections = [
  {
    title: 'Information We Collect',
    description: 'We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.',
    icon: User,
    details: [
      'Account information (name, email, company)',
      'Service usage data',
      'Communication records',
      'Payment information'
    ]
  },
  {
    title: 'How We Use Information',
    description: 'We use the information we collect to provide, maintain, and improve our services and communicate with you.',
    icon: Eye,
    details: [
      'Provide and maintain our services',
      'Process transactions',
      'Send technical notices and updates',
      'Respond to your inquiries'
    ]
  },
  {
    title: 'Information Sharing',
    description: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.',
    icon: Lock,
    details: [
      'We do not sell personal information',
      'Limited sharing with service providers',
      'Legal compliance requirements',
      'Business transfers (with notice)'
    ]
  },
  {
    title: 'Data Security',
    description: 'We implement appropriate security measures to protect your personal information against unauthorized access.',
    icon: Shield,
    details: [
      'Encryption in transit and at rest',
      'Regular security audits',
      'Access controls and monitoring',
      'Employee training and awareness'
    ]
  }
];

export default function Privacy() {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn how we collect, use, and protect your personal information in accordance with privacy laws and best practices." />
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
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Learn how we collect, use, and protect your personal information.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {privacySections.map((section, index) => {
                  const IconComponent = section.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-8"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start mb-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.title}</h2>
                          <p className="text-gray-600 mb-4">{section.description}</p>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {section.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start text-gray-600">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> 123 Technology Drive, San Francisco, CA 94105</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}