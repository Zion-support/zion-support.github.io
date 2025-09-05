import { Shield, Lock, Eye, CheckCircle } from 'lucide-react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, CheckCircle, AlertTriangle, Users } from 'lucide-react'
import Layout from '../components/Layout'

const securityFeatures = [
  {
    title: 'Data Encryption', description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols.', icon: Lock, details: [
      'AES-256 encryption for data at rest', 'TLS 1.3 for data in transit', ;
      'End-to-end encryption for sensitive data', ;
      'Regular encryption key rotation'] },;
  {
    title: 'Access Control', description: 'Multi-factor authentication and role-based access controls to protect your systems.', icon: Users, details: ['Multi-factor authentication(MFA)', 'Role-based access control(RBAC)', ;
      'Single sign-on(SSO) integration', ;
      'Privileged access management'] },;
  {
    title: 'Threat Detection', description: 'Advanced threat detection and response capabilities to identify and mitigate security risks.', icon: AlertTriangle, details: ['Real-time threat monitoring', 'AI-powered anomaly detection', ;
      'Automated incident response', ;
      'Security information and event management(SIEM)'] },;
  {
    title: 'Compliance & Auditing', description: 'Comprehensive compliance monitoring and audit trails to meet regulatory requirements.', icon: CheckCircle, details: ['SOC 2 Type II compliance', 'GDPR and CCPA compliance', ;
      'Regular security audits', ;
      'Comprehensive audit logging'] }]

const securityStats = [{ number: '99.9%', label: 'Uptime Guarantee' }, ;
  { number: '24/7', label: 'Security Monitoring' }, ;
  { number: '<1s', label: 'Threat Response Time' }, ;
  { number: '100%', label: 'Compliance Rate' }]

export default function Security() {
  return(<Layout>
      <Head>
        <title>Security - Zion Tech Group</title>
        <meta name="description" content="Learn about our comprehensive security measures and commitment to protecting your data and systems."  />
      </Head>
      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div;
              className="text-center"
              initial={{opacity: 0, y: 30 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
            >
              <h1 className="text-4xl md: text-6xl font-bold mb-6">
                Security & Compliance
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Your security is our priority. Learn about our comprehensive security measures and compliance standards.
              </p>
            </motion.div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Security Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                { securityFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return(<motion.div;
                      key={index }
                      className="bg-white rounded-xl shadow-lg p-8 hover: shadow-xl transition-shadow duration-300"
                      initial={{opacity: 0, y: 30 }}
                      whileInView={{opacity: 1, y: 0 }}
                      transition={{duration: 0.8, delay: index * 0.1 }}
                      viewport={{once: true }}
                    >
                      <div className="flex items-start mb-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-blue-600"  />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{ feature.title }</h3>
                          <p className="text-gray-600">{ feature.description }</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        { feature.details.map((detail, detailIndex) => (;
                          <li key={detailIndex } className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"  />
                            { detail }
                          </li>))}
                      </ul>
                    </motion.div>
                  )})}
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Security by the Numbers;
              </h2>
              <div className="grid grid-cols-2 md: grid-cols-4 gap-8">
                { securityStats.map((stat, index) => (;
                  <motion.div;
                    key={index }
                    className="text-center"
                    initial={{opacity: 0, y: 30 }}
                    whileInView={{opacity: 1, y: 0 }}
                    transition={{duration: 0.8, delay: index * 0.1 }}
                    viewport={{once: true }}
                  >
                    <div className="text-4xl md: text-5xl font-bold text-blue-600 mb-2">
                      { stat.number }
                    </div>
                    <div className="text-gray-600 font-medium">
                      { stat.label }
                    </div>
                  </motion.div>))}
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div;
                className="bg-white rounded-xl shadow-lg p-8 text-center"
                initial={{opacity: 0, y: 30 }}
                whileInView={{opacity: 1, y: 0 }}
                transition={{duration: 0.8 }}
                viewport={{once: true }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-600"  />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Security First Approach;
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We believe security should be built into every aspect of our solutions, not added as an afterthought.;
                  Our security-first approach ensures your data and systems are protected at every level.;
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover: bg-blue-700 transition-colors duration-300">
                  Learn More About Our Security
                </button>
              </motion.div>
            </div>
          </div>
        </section>
    icon: Lock
  },;
  {
    title: 'Access Control', description: 'Multi-factor authentication and role-based access control for enhanced security', icon: Shield }]

export default function SecurityPage() {
  return(<Layout title="Security - Zion Tech Group">
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md: text-5xl font-bold mb-6">Security</h1>
            <p className="text-xl text-blue-100">Protecting your data and systems</p>
          </div>
        </section>
      </div>
      </main>
    </Layout>) }
)