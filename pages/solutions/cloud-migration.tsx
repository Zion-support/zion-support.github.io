<<<<<<< HEAD
import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  BarChart3, 
  Users, 
  Settings, 
  Database, 
  Globe, 
  Lock, 
  Smartphone, 
  Brain 
} from 'lucide-react';

const migrationSteps = [
  {
    step: '1',
    title: 'Assessment',
    description: 'Comprehensive analysis of your current infrastructure and requirements',
    icon: BarChart3,
    features: ['Infrastructure audit', 'Performance analysis', 'Cost assessment', 'Risk evaluation']
  },
  {
    step: '2',
    title: 'Planning',
    description: 'Detailed migration strategy and timeline development',
    icon: Settings,
    features: ['Migration strategy', 'Timeline planning', 'Resource allocation', 'Risk mitigation']
  },
  {
    step: '3',
    title: 'Migration',
    description: 'Seamless migration with zero downtime and minimal disruption',
    icon: Cloud,
    features: ['Zero-downtime migration', 'Data transfer', 'Application migration', 'Testing']
  },
  {
    step: '4',
    title: 'Optimization',
    description: 'Post-migration optimization and performance tuning',
    icon: Zap,
    features: ['Performance tuning', 'Cost optimization', 'Security hardening', 'Monitoring']
=======
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Cloud, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';

const migrationSteps = [
  {
    step: 1,
    title: 'Assessment & Planning',
    description: 'Comprehensive analysis of your current infrastructure and migration requirements.',
    icon: CheckCircle,
    details: ['Infrastructure audit', 'Cost analysis', 'Risk assessment', 'Migration strategy']
  },
  {
    step: 2,
    title: 'Design & Architecture',
    description: 'Design optimal cloud architecture tailored to your business needs.',
    icon: Cloud,
    details: ['Cloud architecture design', 'Security planning', 'Scalability planning', 'Integration design']
  },
  {
    step: 3,
    title: 'Migration Execution',
    description: 'Execute the migration with minimal downtime and maximum security.',
    icon: Zap,
    details: ['Data migration', 'Application migration', 'Testing & validation', 'Go-live support']
  },
  {
    step: 4,
    title: 'Optimization & Support',
    description: 'Ongoing optimization and support to ensure peak performance.',
    icon: Shield,
    details: ['Performance optimization', 'Cost optimization', 'Security monitoring', '24/7 support']
>>>>>>> pr-11913
  }
];

const benefits = [
  {
<<<<<<< HEAD
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Bank-level security with advanced encryption and compliance'
  },
  {
    icon: Zap,
    title: 'Improved Performance',
    description: 'Faster, more reliable infrastructure with auto-scaling capabilities'
  },
  {
    icon: BarChart3,
    title: 'Cost Savings',
    description: 'Reduce infrastructure costs by up to 40% with cloud optimization'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Deploy your applications globally with cloud infrastructure'
  }
];

export default function CloudMigrationPage() {
  return (
    <>
      <Head>
        <title>Cloud Migration Solutions - Zion Tech Group</title>
        <meta name="description" content="Seamless cloud migration solutions with zero downtime. Expert cloud migration services for AWS, Azure, and Google Cloud." />
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Cloud Migration</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Seamlessly migrate your infrastructure to the cloud with zero downtime 
                and maximum efficiency. Expert cloud migration services for all major platforms.
=======
    title: 'Cost Reduction',
    description: 'Reduce infrastructure costs by up to 40% with cloud optimization.',
    metric: '40%'
  },
  {
    title: 'Scalability',
    description: 'Scale your infrastructure automatically based on demand.',
    metric: '99.9%'
  },
  {
    title: 'Security',
    description: 'Enhanced security with enterprise-grade cloud protection.',
    metric: '100%'
  }
];

export default function CloudMigration() {
  return (
    <Layout>
      <Head>
        <title>Cloud Migration - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive cloud migration services and solutions." />
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
                Cloud Migration
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with our comprehensive cloud migration services and solutions.
>>>>>>> pr-11913
              </p>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Migration Process */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Migration Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We follow a proven methodology to ensure successful cloud migration.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {migrationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                  </div>
                  <div className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
=======
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Our Migration Process
              </h2>
              
              <div className="space-y-8">
                {migrationSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-8"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                          <IconComponent className="w-8 h-8 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-4">
                            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                              {step.step}
                            </span>
                            <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                          </div>
                          <p className="text-gray-600 mb-4">{step.description}</p>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
>>>>>>> pr-11913
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Migration Benefits</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the advantages of migrating to the cloud with our expert services.
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
=======
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Migration Benefits
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl font-bold text-blue-600 mb-2">{benefit.metric}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
>>>>>>> pr-11913
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Migrate to the Cloud?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your cloud migration needs and create a customized plan.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Migration Plan
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/services/cloud"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Cloud Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
=======
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Migrate to the Cloud?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Let us help you migrate to the cloud with minimal risk and maximum benefits.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center mx-auto">
                Start Your Migration
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
>>>>>>> pr-11913
  );
}