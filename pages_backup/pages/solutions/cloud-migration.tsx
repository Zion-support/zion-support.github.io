import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  BarChart3,
  Clock,
  Award,
  Shield,
  Database,
  Server,
  Zap,
  Target,
  TrendingUp,
  Globe,
  Building,
  Rocket,
  Lock,
  RefreshCw,
  DollarSign
} from 'lucide-react';
import Layout from '../../components/Layout';

const migrationSteps = [
  {
    step: '01',
    title: 'Assessment & Planning',
    description: 'Comprehensive analysis of your current infrastructure and migration strategy development.',
    icon: Target,
    duration: '1-2 weeks',
    features: ['Infrastructure audit', 'Dependency mapping', 'Risk assessment', 'Migration roadmap']
  },
  {
    step: '02',
    title: 'Design & Architecture',
    description: 'Design cloud-native architecture optimized for performance, security, and scalability.',
    icon: Building,
    duration: '2-4 weeks',
    features: ['Cloud architecture design', 'Security planning', 'Cost optimization', 'Performance tuning']
  },
  {
    step: '03',
    title: 'Migration Execution',
    description: 'Seamless migration of applications, data, and services to the cloud platform.',
    icon: RefreshCw,
    duration: '4-12 weeks',
    features: ['Data migration', 'Application deployment', 'Service configuration', 'Testing & validation']
  },
  {
    step: '04',
    title: 'Optimization & Support',
    description: 'Continuous optimization and ongoing support to ensure peak performance.',
    icon: Zap,
    duration: 'Ongoing',
    features: ['Performance monitoring', 'Cost optimization', 'Security updates', '24/7 support']
  }
];

const cloudProviders = [
  {
    name: 'Amazon Web Services (AWS)',
    icon: Cloud,
    description: 'Comprehensive cloud platform with extensive services and global reach.',
    features: ['EC2, S3, RDS', 'Lambda functions', 'CloudFront CDN', 'Auto Scaling'],
    pricing: 'Pay-as-you-go'
  },
  {
    name: 'Microsoft Azure',
    icon: Cloud,
    description: 'Enterprise-focused cloud platform with strong integration capabilities.',
    features: ['Virtual Machines', 'Azure SQL', 'Active Directory', 'DevOps tools'],
    pricing: 'Flexible plans'
  },
  {
    name: 'Google Cloud Platform',
    icon: Cloud,
    description: 'AI and data-focused cloud platform with advanced analytics capabilities.',
    features: ['BigQuery', 'AI/ML services', 'Kubernetes Engine', 'Cloud Functions'],
    pricing: 'Competitive rates'
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Scalability',
    description: 'Scale resources up or down based on demand automatically.',
    metric: '99.9%'
  },
  {
    icon: DollarSign,
    title: 'Cost Savings',
    description: 'Reduce infrastructure costs with pay-as-you-go pricing.',
    metric: '30%'
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Enterprise-grade security with built-in compliance features.',
    metric: '24/7'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Improved performance with global CDN and optimized infrastructure.',
    metric: '50%'
  }
];

const migrationTypes = [
  {
    type: 'Lift and Shift',
    description: 'Move applications to cloud with minimal changes',
    icon: ArrowRight,
    duration: '2-4 weeks',
    complexity: 'Low',
    cost: 'Low'
  },
  {
    type: 'Replatforming',
    description: 'Optimize applications for cloud-native features',
    icon: RefreshCw,
    duration: '4-8 weeks',
    complexity: 'Medium',
    cost: 'Medium'
  },
  {
    type: 'Refactoring',
    description: 'Completely redesign applications for cloud architecture',
    icon: Building,
    duration: '8-16 weeks',
    complexity: 'High',
    cost: 'High'
  }
];

export default function CloudMigration() {
  return (
    <Layout
      title="Cloud Migration Solutions - Zion Tech Group"
      description="Migrate your infrastructure to the cloud with our expert cloud migration services. AWS, Azure, GCP support."
      keywords="cloud migration, AWS migration, Azure migration, GCP migration, cloud infrastructure, cloud services"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cloud{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Migration
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Seamlessly migrate your infrastructure to the cloud with our expert migration services. AWS, Azure, and Google Cloud Platform support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Migration
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Success Stories
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Migration Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Migration Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to ensure smooth, secure, and cost-effective cloud migration.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {migrationSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {step.step}
                    </div>
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-8 h-8 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="text-sm text-blue-600 font-semibold mb-4">
                      Duration: {step.duration}
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cloud Providers */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cloud Providers We Support
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We work with all major cloud providers to give you the best options for your specific needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cloudProviders.map((provider, index) => {
                const IconComponent = provider.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{provider.name}</h3>
                    <p className="text-gray-600 mb-4">{provider.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {provider.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-sm text-blue-600 font-semibold">
                      Pricing: {provider.pricing}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Migration Types */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Migration Strategies
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the right migration approach based on your business requirements and timeline.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {migrationTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{type.type}</h3>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold">{type.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Complexity:</span>
                        <span className="font-semibold">{type.complexity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Cost:</span>
                        <span className="font-semibold">{type.cost}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Migration Benefits
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience the advantages of cloud migration with improved performance, security, and cost efficiency.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-lg text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12 mx-auto" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{benefit.metric}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Migrate to the Cloud?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our cloud experts help you migrate your infrastructure with minimal downtime and maximum efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Assessment
                </Link>
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  View All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
import MainLayout from '../../src/components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout 
      title="Page - Zion Tech Group"
      description="Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
