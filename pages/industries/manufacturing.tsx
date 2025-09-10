import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Settings, Brain, Shield, BarChart3, CheckCircle, ArrowRight, Cpu, Wrench, Activity, Database, FileText, Users } from 'lucide-react';

const solutions = [
  {
    title: 'Smart Manufacturing Platform',
    description: 'AI-powered manufacturing platform with real-time monitoring and optimization',
    icon: Settings,
    features: ['Real-time Monitoring', 'Predictive Maintenance', 'Quality Control', 'Process Optimization']
  },
  {
    title: 'IoT Integration',
    description: 'Comprehensive IoT solutions for connected manufacturing operations',
    icon: Cpu,
    features: ['Sensor Networks', 'Data Collection', 'Device Management', 'Edge Computing']
  },
  {
    title: 'Quality Management System',
    description: 'Advanced quality control and assurance system with AI-powered inspection',
    icon: Shield,
    features: ['Automated Inspection', 'Defect Detection', 'Quality Analytics', 'Compliance Tracking']
  },
  {
    title: 'Supply Chain Optimization',
    description: 'AI-powered supply chain management and optimization platform',
    icon: BarChart3,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Management', 'Logistics Tracking']
  }
];

const challenges = [
  {
    challenge: 'Operational Efficiency',
    description: 'Optimizing manufacturing processes and reducing waste.',
    solution: 'IoT sensors, real-time monitoring, and AI-powered optimization algorithms.',
    icon: Target
  },
  {
    challenge: 'Quality Control',
    description: 'Ensuring consistent product quality and reducing defects.',
    solution: 'Computer vision AI, automated inspection, and predictive quality analytics.',
    icon: Shield
  },
  {
    challenge: 'Supply Chain Management',
    description: 'Managing complex supply chains and supplier relationships.',
    solution: 'AI-powered demand forecasting, inventory optimization, and supplier analytics.',
    icon: Globe
  },
  {
    challenge: 'Predictive Maintenance',
    description: 'Preventing equipment failures and minimizing downtime.',
    solution: 'IoT sensors, machine learning models, and predictive maintenance algorithms.',
    icon: Cpu  }
];

const benefits = [
  {
    title: 'Increased Efficiency',
    description: 'Automated processes and AI optimization improve manufacturing efficiency',
    icon: Activity
  },
  {
    title: 'Better Quality',
    description: 'AI-powered quality control ensures consistent product quality',
    icon: Shield
  },
  {
    title: 'Reduced Costs',
    description: 'Optimized processes and predictive maintenance reduce operational costs',
    icon: CheckCircle
  },
  {
    title: 'Data-Driven Decisions',
    description: 'Comprehensive analytics help make informed manufacturing decisions',
    icon: Database
  }
];

export default function Manufacturing() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Manufacturing <span className="text-blue-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform manufacturing operations with smart manufacturing platforms, IoT integration, 
                and AI-powered quality control solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Manufacturing Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed specifically for manufacturing companies.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <solution.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{solution.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Manufacturing Solutions?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our solutions are designed to address the unique challenges faced by manufacturing companies.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Manufacturing?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our manufacturing solutions can help your company achieve its goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/it-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View IT Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}