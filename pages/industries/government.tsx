import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Building, 
  Users, 
  Shield, 
  Rocket,
  CheckCircle,
  TrendingUp,
  Clock,
  Globe
} from 'lucide-react';
import Layout from '../components/Layout';

const governmentSolutions = [
  {
    title: 'Digital Government Platform',
    description: 'Comprehensive platform for modernizing government services and operations',
    icon: Building,
    features: ['Citizen Portal', 'Service Automation', 'Document Management', 'Workflow Optimization'],
    benefits: ['50% efficiency gain', 'Better citizen experience', 'Reduced costs', 'Improved transparency']
  },
  {
    title: 'Legacy System Modernization',
    description: 'Transform outdated systems into modern, efficient platforms',
    icon: Rocket,
    features: ['Process Automation', 'Legacy System Integration', 'Cloud Migration', 'Change Management'],
    benefits: ['50% efficiency gain', 'Cost reduction', 'Better citizen experience', 'Modern infrastructure']
  },
  {
    title: 'Data Analytics & Insights',
    description: 'Harness the power of data to make informed policy decisions',
    icon: TrendingUp,
    features: ['Data Visualization', 'Predictive Analytics', 'Performance Metrics', 'Reporting Tools'],
    benefits: ['Better decision making', 'Improved outcomes', 'Cost optimization', 'Transparency']
  }
];

const governmentBenefits = [
  {
    icon: Users,
    title: 'Citizen Satisfaction',
    description: 'Improve citizen experience with digital services and faster processing.',
    metric: '85%'
  },
  {
    icon: Clock,
    title: 'Process Efficiency',
    description: 'Streamline government operations and reduce processing times.',
    metric: '60%'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Ensure data security and regulatory compliance across all systems.',
    metric: '100%'
  }
];

export default function Government() {
  return (
    <Layout>
      <Head>
        <title>Government Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform government operations with our comprehensive technology solutions for public sector modernization." />
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
                Government Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform government operations with our comprehensive technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Our Government Solutions
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {governmentSolutions.map((solution, index) => {
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
                      
                      <div className="space-y-3 mb-6">
                        <h4 className="font-semibold text-gray-900">Key Features:</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Benefits:</h4>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <TrendingUp className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
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
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Why Choose Our Government Solutions?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {governmentBenefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-green-600" />
                      </div>
                      <div className="text-4xl font-bold text-green-600 mb-2">{benefit.metric}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
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