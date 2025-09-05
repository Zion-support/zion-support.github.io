import Head from 'next/head';
import { motion } from 'framer-motion';
import { Globe, Cloud, Zap, Users, Shield, Award, Handshake } from 'lucide-react';
import Layout from '../components/Layout';

const partners = [
  {
    name: 'Microsoft',
    category: 'Cloud Partner',
    description: 'Strategic partnership for Azure cloud solutions and enterprise services.',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Amazon Web Services',
    category: 'Cloud Partner',
    description: 'Leading cloud infrastructure and AI services partnership.',
    icon: Globe,
    color: 'from-orange-500 to-yellow-500'
  },
  {
    name: 'Google Cloud',
    category: 'AI Partner',
    description: 'Advanced AI and machine learning solutions collaboration.',
    icon: Zap,
    color: 'from-green-500 to-blue-500'
  },
  {
    name: 'Salesforce',
    category: 'CRM Partner',
    description: 'Customer relationship management and business automation solutions.',
    icon: Users,
    color: 'from-blue-600 to-indigo-600'
  },
  {
    name: 'IBM',
    category: 'Enterprise Partner',
    description: 'Enterprise solutions and consulting services partnership.',
    icon: Shield,
    color: 'from-blue-700 to-purple-700'
  },
  {
    name: 'Oracle',
    category: 'Database Partner',
    description: 'Database solutions and enterprise software integration.',
    icon: Award,
    color: 'from-red-500 to-pink-500'
  }
];

export default function Partners() {
  return (
    <Layout>
      <Head>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Meet our strategic partners who help us deliver world-class technology solutions." />
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
                Our Partners
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Meet our strategic partners who help us deliver world-class technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map((partner, index) => {
                  const IconComponent = partner.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${partner.color} rounded-lg flex items-center justify-center mb-6`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4">
                        {partner.category}
                      </span>
                      <p className="text-gray-600">{partner.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Become a Partner
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Join our partner ecosystem and help us deliver innovative solutions to clients worldwide.
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center mx-auto">
                  <Handshake className="w-5 h-5 mr-2" />
                  Partner With Us
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}