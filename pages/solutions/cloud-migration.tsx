import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Zap,
  Users,
  BarChart3,
  Clock,
  DollarSign
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const migrationSteps = [
  {
    step: 1,
    title: 'Assessment & Planning',
    description: 'Comprehensive analysis of your current infrastructure and migration requirements.',
    icon: BarChart3,
    duration: '1-2 weeks',
    features: [
      'Infrastructure audit',
      'Cost analysis',
      'Security assessment',
      'Migration roadmap'
    ]
  },
  {
    step: 2,
    title: 'Design & Architecture',
    description: 'Design cloud-native architecture optimized for your business needs.',
    icon: Cloud,
    duration: '2-3 weeks',
    features: [
      'Cloud architecture design',
      'Security framework',
      'Scalability planning',
      'Integration strategy'
    ]
  },
  {
    step: 3,
    title: 'Migration & Testing',
    description: 'Execute migration with comprehensive testing and validation.',
    icon: Zap,
    duration: '3-6 weeks',
    features: [
      'Data migration',
      'Application deployment',
      'Performance testing',
      'Security validation'
    ]
  },
  {
    step: 4,
    title: 'Optimization & Support',
    description: 'Continuous optimization and ongoing support for your cloud environment.',
    icon: CheckCircle,
    duration: 'Ongoing',
    features: [
      'Performance monitoring',
      'Cost optimization',
      'Security updates',
      '24/7 support'
    ]
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: 'Cost Reduction',
    description: 'Reduce infrastructure costs by up to 40% with cloud optimization'
  },
  {
    icon: Zap,
    title: 'Improved Performance',
    description: 'Enhanced performance and scalability with cloud-native architecture'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Enterprise-grade security with automated updates and monitoring'
  },
  {
    icon: Users,
    title: 'Better Collaboration',
    description: 'Improved team collaboration with cloud-based tools and services'
  }
];

export default function CloudMigrationPage() {
  return (
    <MainLayout
      title="Cloud Migration Solutions - Zion Tech Group"
      description="Expert cloud migration services to help your business transition to the cloud with minimal disruption and maximum benefits."
      keywords="cloud migration, AWS, Azure, Google Cloud, cloud services, digital transformation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Cloud <span className="text-blue-600">Migration</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Seamlessly migrate your infrastructure to the cloud with our expert guidance and proven methodologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Free Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Migration Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Migration Process</h2>
                <p className="text-xl text-gray-600">
                  A proven 4-step process to ensure successful cloud migration
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {migrationSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="text-sm text-blue-600 font-medium mb-4">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {step.duration}
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Cloud Migration?</h2>
                <p className="text-xl text-gray-600">
                  Experience the benefits of cloud migration with our expert guidance
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Migrate to the Cloud?</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let our experts guide you through a seamless cloud migration process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Start Migration
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Get Free Assessment
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}