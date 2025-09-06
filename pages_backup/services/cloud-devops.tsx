import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cloud, Server, Database, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Cloud,
    title: 'Cloud Migration',
    description: 'Seamless migration to cloud platforms with minimal downtime and maximum efficiency.',
    benefits: ['Zero-downtime migration', 'Cost optimization', 'Performance improvement', 'Scalability']
  },
  {
    icon: Server,
    title: 'Infrastructure as Code',
    description: 'Manage your infrastructure using code for better consistency and automation.',
    benefits: ['Version control', 'Automated provisioning', 'Consistent environments', 'Disaster recovery']
  },
  {
    icon: Database,
    title: 'Database Management',
    description: 'Comprehensive database administration and optimization services.',
    benefits: ['Performance tuning', 'Backup & recovery', 'Security hardening', 'Monitoring']
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Implement security best practices and maintain compliance standards.',
    benefits: ['Security audits', 'Compliance reporting', 'Vulnerability scanning', 'Access control']
  },
  {
    icon: Zap,
    title: 'CI/CD Pipelines',
    description: 'Automated continuous integration and deployment pipelines for faster delivery.',
    benefits: ['Automated testing', 'Deployment automation', 'Quality gates', 'Rollback capabilities']
  },
  {
    icon: Server,
    title: 'Monitoring & Alerting',
    description: 'Comprehensive monitoring and alerting systems for proactive issue resolution.',
    benefits: ['Real-time monitoring', 'Custom dashboards', 'Automated alerts', 'Performance metrics']
  }
];

const tools = [
  { name: 'AWS', description: 'Amazon Web Services cloud platform' },
  { name: 'Azure', description: 'Microsoft Azure cloud services' },
  { name: 'Google Cloud', description: 'Google Cloud Platform solutions' },
  { name: 'Docker', description: 'Containerization platform' },
  { name: 'Kubernetes', description: 'Container orchestration' },
  { name: 'Terraform', description: 'Infrastructure as code' },
  { name: 'Jenkins', description: 'CI/CD automation' },
  { name: 'Prometheus', description: 'Monitoring and alerting' }
];

export default function CloudDevOpsPage() {
  return (
    <>
      <Head>
        <title>Cloud & DevOps Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud and DevOps services including migration, infrastructure as code, CI/CD pipelines, and monitoring solutions." />
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Cloud & DevOps</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Transform your infrastructure with our comprehensive cloud and DevOps services 
                designed for scalability, reliability, and efficiency.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive cloud and DevOps solutions to modernize your infrastructure.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Tools Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We work with leading cloud platforms and DevOps tools to deliver the best solutions.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors text-center"
                >
                  <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
                  <p className="text-gray-600 text-sm">{tool.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We follow a proven methodology to ensure successful cloud and DevOps implementations.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Assessment', description: 'Analyze your current infrastructure and requirements' },
                { step: '2', title: 'Planning', description: 'Design the optimal cloud and DevOps strategy' },
                { step: '3', title: 'Implementation', description: 'Execute the migration and setup processes' },
                { step: '4', title: 'Optimization', description: 'Monitor, optimize, and maintain your systems' }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
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
                Ready to Modernize Your Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our cloud and DevOps services can transform your business.
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
    </>
  );
}