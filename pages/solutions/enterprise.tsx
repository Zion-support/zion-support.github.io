<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Building, Shield, Users, BarChart3, ArrowRight, CheckCircle, Clock, Globe, Database, Lock } from 'lucide-react';
import Layout from '../../components/Layout';

const features = [
  {
    title: 'Scalable Architecture',
    description: 'Enterprise-grade infrastructure that grows with your business',
    icon: Building,
    details: ['Auto-scaling capabilities', 'Load balancing', 'High availability', 'Global deployment']
  },
  {
    title: 'Advanced Security',
    description: 'Comprehensive security measures to protect your enterprise data',
    icon: Shield,
    details: ['Multi-layer security', 'Access controls', 'Data encryption', 'Compliance management']
  },
  {
    title: 'Team Collaboration',
    description: 'Tools and platforms for seamless team collaboration',
    icon: Users,
    details: ['Real-time collaboration', 'Project management', 'Communication tools', 'Document sharing']
  },
  {
    title: 'Analytics & Insights',
    description: 'Advanced analytics to drive data-driven decisions',
    icon: BarChart3,
    details: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Business intelligence']
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock support for your enterprise needs',
    icon: Clock,
    details: ['Dedicated support team', 'Priority response', 'On-site assistance', 'Training programs']
  },
  {
    title: 'Global Reach',
    description: 'Worldwide deployment and support capabilities',
    icon: Globe,
    details: ['Multi-region deployment', 'Local support teams', 'Compliance across regions', 'Scalable infrastructure']
  }
];

const benefits = [
  {
    title: 'Increased Productivity',
    description: 'Streamlined processes and automation boost team productivity',
    icon: ArrowRight
  },
  {
    title: 'Cost Optimization',
    description: 'Efficient resource utilization reduces operational costs',
    icon: Database
  },
  {
    title: 'Enhanced Security',
    description: 'Enterprise-grade security protects your valuable data',
    icon: Lock
  },
  {
    title: 'Better Decision Making',
    description: 'Data-driven insights enable informed business decisions',
    icon: BarChart3
  }
];

export default function EnterpriseSolutionsPage() {
  return (
    <Layout
      title="Enterprise Solutions - Zion Tech Group"
      description="Comprehensive enterprise solutions designed to transform large organizations with scalable, secure, and innovative technology."
      keywords="enterprise solutions, large organizations, scalable technology, enterprise security, business transformation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive enterprise solutions designed to transform large organizations with scalable, 
                secure, and innovative technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Enterprise Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our enterprise solutions are designed to meet the complex needs of large organizations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Enterprise Benefits
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your enterprise with our comprehensive technology solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how our enterprise solutions can help your organization achieve its goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Contact Sales
                </Link>
                <Link
                  href="/case-studies"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
