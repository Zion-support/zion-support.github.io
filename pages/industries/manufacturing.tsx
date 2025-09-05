import Head from 'next/head';
import { motion } from 'framer-motion';
import { Factory, BarChart3, Shield, CheckCircle, TrendingUp } from 'lucide-react';
import Layout from '../components/Layout';

const solutions = [
  {
    title: 'Smart Factory Solutions',
    description: 'Implement IoT and AI technologies for intelligent manufacturing.',
    icon: Factory,
    features: ['IoT Sensors', 'Real-time Monitoring', 'Predictive Maintenance']
  },
  {
    title: 'Supply Chain Optimization',
    description: 'Optimize supply chain with AI-powered analytics.',
    icon: BarChart3,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Management']
  },
  {
    title: 'Quality Management',
    description: 'Ensure product quality with automated inspection systems.',
    icon: Shield,
    features: ['Automated Inspection', 'Quality Analytics', 'Defect Detection']
  }
];

export default function Manufacturing() {
  return (
    <Layout>
      <Head>
        <title>Manufacturing Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionize manufacturing with smart factory solutions and IoT integration." />
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
                Manufacturing Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize manufacturing with smart factory solutions and IoT integration.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {solutions.map((solution, index) => {
                  const IconComponent = solution.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                      <p className="text-gray-600 mb-6">{solution.description}</p>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
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
      </main>
    </Layout>
  );
}