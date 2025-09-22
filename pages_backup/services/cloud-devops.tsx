import React from 'react';
import Head from 'next/head';
import React from 'react';import Head from 'next/head';
import React from 'react';import Head from 'next/head';
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

import Layout from '../../components/Layout';
import { Cloud, Server, Database, Shield, Zap } from 'lucide-react';
import React from 'react';
import Layout from '../../components/Layout';';
import { Cloud, Server, Database, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';
const features = [;
  {}
    icon: Cloud,;
    title: 'Cloud Migration,',,
  description: 'Seamlessly migrate your infrastructure to AWS, Azure, or Google Cloud with zero downtime.',;
import Layout from '../../components/Layout';
import { Cloud, Server, GitBranch, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';  {
    icon: Server,
    title: 'Infrastructure as Code',
    description: 'Manage your infrastructure using code for better consistency and automation.',
import * as React from 'react';'
import Head from 'next/head';'
import Link from 'next/link';'
import { motion } from 'framer-motion';'
import { Cloud, Server, Database, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const features = []
  {}
    icon: Cloud,'
    title: 'Cloud Migration','
    description: 'Seamless migration to cloud platforms with minimal downtime and maximum efficiency.','
    benefits: ['Zero-downtime migration', 'Cost optimization', 'Performance improvement', 'Scalability']
  },
  {}
    icon: Server,'
    title: 'Infrastructure as Code','
    description: 'Manage your infrastructure using code for better consistency and automation.','
    benefits: ['Version control', 'Automated provisioning', 'Consistent environments', 'Disaster recovery']
  },
{
    icon: GitBranch,
    title: 'CI/CD Pipelines',
    description: 'Automated build, test, and deployment processes'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security and compliance frameworks'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimized cloud resources for maximum performance'
  },
  {
    icon: CheckCircle,
    title: 'Monitoring & Alerting',
    description: '24/7 monitoring and proactive alerting systems'
  }
];

const tools = ['
  { name: 'AWS', description: 'Amazon Web Services cloud platform' },'
  { name: 'Azure', description: 'Microsoft Azure cloud services' },'
  { name: 'Google Cloud', description: 'Google Cloud Platform solutions' },'
  { name: 'Docker', description: 'Containerization platform' },'
  { name: 'Kubernetes', description: 'Container orchestration' },'
  { name: 'Terraform', description: 'Infrastructure as code' },'
  { name: 'Jenkins', description: 'CI/CD automation' },'
  { name: 'Prometheus', description: 'Monitoring and alerting' }
];

export default function CloudDevOpsPage() {
const benefits = [
  'Reduced infrastructure costs by up to 50%',
  'Improved deployment speed and reliability',
  'Enhanced security and compliance',
  'Automated scaling and resource management',
  'Better disaster recovery capabilities',
  'Faster time-to-market for applications'
];
export default function CloudDevOpsServices() {

  return (
    <Layout
      title="Cloud & DevOps Services - Zion Tech Group"
      description="Comprehensive cloud migration and DevOps services. Transform your infrastructure with modern cloud technologies and automated processes."
      keywords="cloud services, DevOps, cloud migration, infrastructure as code, CI/CD, cloud optimization"

    >
      <div className="min-h-screen bg-white">
  return (
    <>
      <Head>
        <title>Cloud & DevOps Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud and DevOps services including migration, infrastructure as code, CI/CD pipelines, and monitoring solutions." />
      </Head>
"
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cloud & DevOps Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform your infrastructure with modern cloud technologies and automated DevOps processes
                for improved performance, security, and scalability.
  return (
    <Layout
      title="Cloud & DevOps Services - Zion Tech Group"
      description="Comprehensive cloud migration and DevOps services. Transform your infrastructure with modern cloud technologies and automated processes."
    >
      <div className="min-h-screen bg-white">        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
        {/* Hero Section */}"
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">"
          <div className="max-w-7xl mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center"
            >"
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Cloud & DevOps</h1>"
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Transform your infrastructure with our comprehensive cloud and DevOps services;
                designed for scalability, reliability, and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

{/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cloud & DevOps Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive cloud and DevOps services designed to modernize your infrastructure
                and accelerate your development processes.
        {/* Benefits Section */}
        <section className="py-20">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
              <div>;
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">;
                  Why Choose Our Cloud & DevOps Services?;
                </h2>;
                <p className="text-xl text-gray-600 mb-8">;
                  Our cloud and DevOps experts help you modernize your infrastructure,;
                  improve deployment processes, and optimize costs while maintaining security.;
                </p>;
                <ul className="space-y-4">;
                  {benefits && benefits.map((benefit, index) => (;
                    <li key={index} className="flex items-start">;
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />;
                      <span className="text-gray-700">{benefit}</span>;
                    </li>;
                  ))}

        {/* Tools Section */}
        <section className="py-16 bg-white">;
          <div className="max-w-7xl mx-auto px-4">;
            <motion&& motion.div              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center mb-12"
            >"
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>"
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive cloud and DevOps solutions to modernize your infrastructure.
              </p>
</motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
</div>
          </div>
        </section>

        {/* Tools Section */}"
        <section className="py-16 bg-white">"
          <div className="max-w-7xl mx-auto px-4">
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center mb-12"
            >"
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>"
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We work with leading cloud platforms and DevOps tools to deliver the best solutions.
              </p>
            </motion.div>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <motion.div;
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}"
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors text-center"
                >"
                  <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>"
                  <p className="text-gray-600 text-sm">{tool.description}</p>
                </motion.div>
              ))}
</div>
          </div>
        </section>
            </div>;
          </div>;
        </section>;

{/* Process Section */}
        <section className="py-16 px-4">;
          <div className="max-w-7xl mx-auto">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center mb-12">;
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>;
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">;
                We follow a proven methodology to ensure successful cloud and DevOps implementations.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">;
              {[;
                { step: '1', title: 'Assessment', description: 'Analyze your current infrastructure and requirements' },;
                { step: '2', title: 'Planning', description: 'Design the optimal cloud and DevOps strategy' },;
                { step: '3', title: 'Implementation', description: 'Execute the migration and setup processes' },;
                { step: '4', title: 'Optimization', description: 'Monitor, optimize, and maintain your systems' }
              ].map((phase, index) => (;
                <motion&& motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                  className="text-center">;
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">;
                    {phase && phase.step}
                  </div>;
                  <h3 className="text-xl font-semibold mb-2">{phase && phase.title}</h3>;
                  <p className="text-gray-600">{phase && phase.description}</p>;
                </motion && motion.div>;
              ))}

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Our Cloud & DevOps Services?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our cloud and DevOps experts help you modernize your infrastructure,
                  improve deployment processes, and optimize costs while maintaining security.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-cyan-700 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Modernize Your Infrastructure?</h3>
                <p className="text-lg mb-6">
                  Let our cloud and DevOps experts help you transform your infrastructure
                  and accelerate your development processes.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>

            </div>
          </div>
        </section>

{/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our cloud and DevOps team to discuss your specific requirements
              and discover how we can help modernize your infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Cloud Team
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Download Cloud Brochure
              </button>
            </div>
          </div>
        </section>
      </div>
</>

  );
}
}'"
