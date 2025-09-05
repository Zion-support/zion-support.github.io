import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Cloud, 
  Shield, 
  BarChart3, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Layout from '../../components/Layout';

const products = [
  {
    id: 1,
    name: 'AI Solutions Platform',
    description: 'Comprehensive AI platform for business automation and intelligent decision making.',
    icon: Zap,
    category: 'AI/ML',
    features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    pricing: 'Starting at $5,000/month'
  },
  {
    id: 2,
    name: 'Cloud Migration Suite',
    description: 'Complete solution for migrating and optimizing your infrastructure in the cloud.',
    icon: Cloud,
    category: 'Cloud',
    features: ['Multi-cloud Support', 'Automated Migration', 'Cost Optimization', 'Security Compliance'],
    pricing: 'Starting at $3,000/month'
  },
  {
    id: 3,
    name: 'Security & Compliance',
    description: 'Enterprise-grade security solutions to protect your data and ensure compliance.',
    icon: Shield,
    category: 'Security',
    features: ['Threat Detection', 'Data Encryption', 'Compliance Monitoring', 'Incident Response'],
    pricing: 'Starting at $2,500/month'
  },
  {
    id: 4,
    name: 'Analytics Dashboard',
    description: 'Advanced analytics and reporting platform for data-driven business insights.',
    icon: BarChart3,
    category: 'Analytics',
    features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'Predictive Insights'],
    pricing: 'Starting at $1,500/month'
  }
];

export default function Products() {
  return (
    <Layout>
      <Head>
        <title>Products - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive suite of technology products designed to transform your business." />
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
                Our Products
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Explore our comprehensive suite of technology products designed to transform your business.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {products.map((product, index) => {
                  const IconComponent = product.icon;
                  return (
                    <motion.div
                      key={product.id}
                      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start mb-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <IconComponent className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                            {product.category}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-2">{product.name}</h3>
                          <p className="text-gray-600">{product.description}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-gray-900">{product.pricing}</span>
                        </div>
                        <Link
                          href={`/products/${product.id}`}
                          className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
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
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We can create custom products tailored to your specific business needs and requirements.
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