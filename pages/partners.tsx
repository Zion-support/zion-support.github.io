import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Globe, Cloud, Zap, Users, Shield, Award, Handshake } from 'lucide-react';

const partners = [
  {
    name: 'Microsoft',
    logo: '/partners/microsoft.png',
    description: 'Strategic partnership for cloud services and AI solutions',
    category: 'Technology',
    benefits: ['Azure credits', 'Technical support', 'Co-marketing opportunities'],
    icon: Cloud
  },
  {
    name: 'Amazon Web Services',
    logo: '/partners/aws.png',
    description: 'Cloud infrastructure and machine learning services',
    category: 'Cloud',
    benefits: ['AWS credits', 'Training resources', 'Joint solutions'],
    icon: Globe
  },
  {
    name: 'Google Cloud',
    logo: '/partners/google-cloud.png',
    description: 'AI and data analytics platform integration',
    category: 'AI/ML',
    benefits: ['GCP credits', 'AI/ML tools', 'Technical workshops'],
    icon: Zap
  },
  {
    name: 'Salesforce',
    logo: '/partners/salesforce.png',
    description: 'CRM integration and customer success solutions',
    category: 'CRM',
    benefits: ['Salesforce credits', 'Integration support', 'Sales enablement'],
    icon: Users
  },
  {
    name: 'Cisco',
    logo: '/partners/cisco.png',
    description: 'Network security and infrastructure solutions',
    category: 'Security',
    benefits: ['Cisco credits', 'Technical support', 'Co-marketing opportunities'],
    icon: Shield
  }
];

const partnershipTypes = [
  {
    title: 'Technology Partners',
    description: 'Integrate with leading technology platforms and services',
    icon: Cloud,
    benefits: [
      'API integrations',
      'Technical support',
      'Co-development opportunities',
      'Marketing collaboration'
    ]
  },
  {
    title: 'Solution Partners',
    description: 'Build and deliver comprehensive solutions together',
    icon: Handshake,
    benefits: [
      'Joint go-to-market',
      'Solution certification',
      'Training programs',
      'Revenue sharing'
    ]
  },
  {
    title: 'Channel Partners',
    description: 'Resell and distribute our services through your network',
    icon: Globe,
    benefits: [
      'Reseller discounts',
      'Sales training',
      'Marketing support',
      'Technical enablement'
    ]
  }
];

export default function PartnersPage() {
  return (
    <Layout
      title="Partners - Zion Tech Group"
      description="Join our partner ecosystem and grow your business with Zion Tech Group's technology solutions."
      keywords="partners, partnership, technology partners, solution partners, channel partners"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Partner With Us
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Join our growing ecosystem of partners and unlock new opportunities for growth and innovation
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Partnership Types
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the partnership model that best fits your business goals
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <type.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <ul className="space-y-2 text-left">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Partners
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trusted by leading technology companies worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                      <partner.icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{partner.name}</h3>
                      <span className="text-sm text-gray-500">{partner.category}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{partner.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 text-sm">Benefits:</h4>
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <Award className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Partner With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the advantages of joining our partner ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                <p className="text-gray-600">Access to our worldwide customer base and markets</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">Cutting-edge technology and solutions</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Support</h3>
                <p className="text-gray-600">Dedicated partner support and resources</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Recognition</h3>
                <p className="text-gray-600">Partner awards and certification programs</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join our partner ecosystem and unlock new opportunities for growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Become a Partner
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Download Partner Kit
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}