import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building, 
  Shield, 
  Users, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  Clock,
  DollarSign
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const enterpriseSolutions = [
  {
    title: 'Scalable Architecture',
    description: 'Enterprise-grade infrastructure that grows with your business.',
    icon: Building,
    features: [
      'Microservices architecture',
      'Auto-scaling capabilities',
      'Load balancing',
      'High availability design'
    ]
  },
  {
    title: 'Security & Compliance',
    description: 'Comprehensive security framework meeting enterprise standards.',
    icon: Shield,
    features: [
      'End-to-end encryption',
      'Access control management',
      'Audit logging',
      'Compliance monitoring'
    ]
  },
  {
    title: 'User Management',
    description: 'Advanced user management and authentication systems.',
    icon: Users,
    features: [
      'Single sign-on (SSO)',
      'Role-based access control',
      'Multi-factor authentication',
      'User provisioning'
    ]
  },
  {
    title: 'Analytics & Reporting',
    description: 'Comprehensive analytics and reporting capabilities.',
    icon: BarChart3,
    features: [
      'Real-time dashboards',
      'Custom reports',
      'Data visualization',
      'Export capabilities'
    ]
  }
];

const enterpriseBenefits = [
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Optimized for speed and reliability at enterprise scale'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with comprehensive compliance'
  },
  {
    icon: Globe,
    title: 'Global Scalability',
    description: 'Deploy and scale across multiple regions and time zones'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock support with dedicated account management'
  }
];

const industries = [
  'Financial Services',
  'Healthcare',
  'Manufacturing',
  'Retail',
  'Government',
  'Education'
];

export default function EnterpriseSolutionsPage() {
  return (
    <MainLayout
      title="Enterprise Solutions - Zion Tech Group"
      description="Enterprise-grade technology solutions including scalable architecture, security, user management, and analytics."
      keywords="enterprise solutions, scalable architecture, enterprise security, user management, analytics, compliance"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Enterprise <span className="text-yellow-400">Solutions</span>
              </h1>
              <p className="text-xl mb-8">
                Comprehensive technology solutions designed for large-scale enterprises with complex requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Free Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Enterprise Solutions</h2>
              <p className="text-xl text-gray-600">
                Comprehensive solutions designed for enterprise-scale requirements
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {enterpriseSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-lg"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <solution.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">{solution.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Enterprise Solutions?</h2>
              <p className="text-xl text-gray-600">
                Proven expertise in delivering enterprise-grade solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {enterpriseBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
              <p className="text-xl text-gray-600">
                Proven experience across diverse enterprise sectors
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg text-center hover:bg-blue-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900">{industry}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready for Enterprise Solutions?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss your enterprise requirements and create a solution that scales with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contact Our Experts
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}