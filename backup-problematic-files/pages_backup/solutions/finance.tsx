import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Shield, 
  TrendingUp, 
  Users, 
  Database, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: 'Financial Data Management',
    description: 'Secure and efficient management of financial data and transactions',
    benefits: ['Data encryption', 'Transaction processing', 'Audit trails', 'Compliance']
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Bank-level security with comprehensive compliance features',
    icon: Shield,
    benefits: ['PCI DSS compliance', 'Data encryption', 'Access control', 'Risk management']
  },
  {
    icon: TrendingUp,
    title: 'Analytics & Reporting',
    description: 'Advanced analytics and reporting for financial insights',
    benefits: ['Real-time analytics', 'Custom reports', 'Risk assessment', 'Performance tracking']
  },
  {
    icon: Users,
    title: 'User Management',
    description: 'Secure user management with role-based access control',
    benefits: ['User provisioning', 'Role management', 'Access control', 'Audit logs']
  }
];

export default function FinanceSolutionsPage() {
  return (
    <>
      <Head>
        <title>Finance Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive finance technology solutions including data management, security, analytics, and compliance." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Finance Solutions</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Secure and compliant finance technology solutions designed for financial institutions. 
                From data management to analytics and reporting.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Finance Technology Features</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our finance solutions are built with security and compliance in mind.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
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
                Ready for Finance Solutions?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our finance solutions can support your organization.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Sales
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}