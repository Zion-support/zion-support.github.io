import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Shield, 
  Users, 
  BarChart3,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Layout from '../components/Layout';

const enterpriseFeatures = [
  {
    title: 'Enterprise Security',
    description: 'Advanced security features designed for large organizations.',
    icon: Shield,
    benefits: ['SOC 2 compliance', 'End-to-end encryption', 'Advanced threat protection', 'Audit logging']
  },
  {
    title: 'Scalable Infrastructure',
    description: 'Infrastructure that grows with your business needs.',
    icon: Building2,
    benefits: ['Auto-scaling', 'High availability', 'Global deployment', '99.9% uptime']
  },
  {
    title: 'Team Management',
    description: 'Comprehensive tools for managing large teams.',
    icon: Users,
    benefits: ['Role-based access', 'Team collaboration', 'User analytics', 'Custom permissions']
  },
  {
    title: 'Advanced Analytics',
    description: 'Deep insights into your business performance.',
    icon: BarChart3,
    benefits: ['Real-time dashboards', 'Custom reports', 'Predictive analytics', 'Data export']
  }
];

const stats = [
  { value: '500+', label: 'Enterprise Clients' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '24/7', label: 'Support' },
  { value: '50+', label: 'Countries' }
];

export default function Enterprise() {
  return (
    <Layout>
      <Head>
        <title>Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Enterprise-grade solutions designed for large organizations with advanced security and scalability." />
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
                Enterprise Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Enterprise-grade solutions designed for large organizations with advanced security and scalability.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Enterprise Features
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {enterpriseFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
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
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {benefit}
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
                Ready for Enterprise?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Contact our enterprise team to discuss your specific requirements and get a custom solution.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center mx-auto">
                Contact Enterprise Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}