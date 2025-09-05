import Head from 'next/head';
import { motion } from 'framer-motion';
import { Zap, Cloud, Shield, BarChart3, Users, Globe } from 'lucide-react';
import Layout from '../components/Layout';

const serviceCategories = [
  {
    title: 'AI Services',
    description: 'Transform your business with artificial intelligence and machine learning solutions.',
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
    services: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
  },
  {
    title: 'Cloud Solutions',
    description: 'Migrate and optimize your infrastructure with our comprehensive cloud services.',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    services: ['Cloud Migration', 'Infrastructure as Code', 'Cost Optimization', 'Multi-cloud Strategy']
  },
  {
    title: 'Security & Compliance',
    description: 'Protect your data and ensure compliance with our security solutions.',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    services: ['Threat Detection', 'Data Encryption', 'Compliance Auditing', 'Incident Response']
  },
  {
    title: 'Data Analytics',
    description: 'Unlock insights from your data with advanced analytics and visualization.',
    icon: BarChart3,
    color: 'from-green-500 to-emerald-500',
    services: ['Business Intelligence', 'Data Warehousing', 'Real-time Analytics', 'Custom Dashboards']
  },
  {
    title: 'Digital Transformation',
    description: 'Modernize your business processes and operations with digital solutions.',
    icon: Users,
    color: 'from-indigo-500 to-purple-500',
    services: ['Process Automation', 'Workflow Optimization', 'Change Management', 'Training & Support']
  },
  {
    title: 'Custom Development',
    description: 'Build tailored solutions that meet your specific business requirements.',
    icon: Globe,
    color: 'from-teal-500 to-blue-500',
    services: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
  }
];

export default function ServicesOverview() {
  return (
    <Layout>
      <Head>
        <title>Services Overview - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of technology services designed to transform your business." />
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
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Explore our comprehensive range of technology services designed to transform your business.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceCategories.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                      <p className="text-gray-600 mb-6">{category.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Services Include:</h4>
                        <ul className="space-y-2">
                          {category.services.map((service, serviceIndex) => (
                            <li key={serviceIndex} className="text-sm text-gray-600">
                              • {service}
                            </li>
                          ))}
                        </ul>
                      </div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Contact us today to discuss your project requirements and discover how we can help transform your business.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}