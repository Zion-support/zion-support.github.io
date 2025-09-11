

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cloud, Server, Database, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662


import Layout from '../../components/Layout';
import { Cloud, Server, Database, Shield, Zap } from 'lucide-react';
import React from 'react';
import Layout from '../../components/Layout';';
import { Cloud, Server, Database, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';
const features = [;
  {}
    icon: Cloud,;
    title: 'Cloud Migration,',;
    description: 'Seamlessly migrate your infrastructure to AWS, Azure, or Google Cloud with zero downtime.',;
import Layout from '../../components/Layout';
import { Cloud, Server, GitBranch, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const features = [
  {
    icon: Cloud,
    title: 'Cloud Migration',


    description: 'Seamless migration to cloud platforms with zero downtime'
  },
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {Cloud,, Server,, Database,, Shield,, Zap,, ArrowRight,, CheckCircle} from 'lucide-react';

const features = [;
  {;
    icon: Cloud,;
    title: 'Cloud Migration',;
    description: 'Seamless migration to cloud platforms with zero downtime';
  },;
  {}
    icon: Server,
    title: 'Infrastructure as Code,',
    description: 'Automate infrastructure provisioning and management using Terraform, Ansible, and CloudFormation.',
  },
  {}
    icon: Database,
    title: 'Database Management,',
    description: 'Optimize database performance, implement backup strategies, and ensure data integrity.',
  },
  {}
    icon: Shield,;
    title: 'Security & Compliance,',;
    description: 'Implement robust security measures and maintain compliance with industry standards.'',;
  },;
  {}
    icon: Zap,
    title: 'CI/CD Pipelines,',
    description: 'Build automated deployment pipelines for faster, more reliable software delivery.',
  }
;];
const services = [;

  'Cloud Architecture Design',',;
  'Container Orchestration (Kubernetes)',',;
  'Microservices Implementation',',;
  'Monitoring & Logging Setup',',;
  'Disaster Recovery Planning',',;
  'Performance Optimization',',;
  'Cost Optimization',',;
  'Security Hardening'',;

  ];
export default function CloudDevOpsPage() {;
  return (
    <Layout)
      title="Cloud & DevOps Services - Zion Tech Group""
      description="Expert cloud migration, infrastructure automation, and DevOps solutions. Transform your operations with scalable, secure cloud infrastructure."">;
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">"
          <div className="container mx-auto px-4">";
            <div className="max-w-4xl mx-auto text-center">";
              <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">", Cloud & DevOps,;
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">";
                  Solutions;
                </span>;
              </h1>;
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">";
                Accelerate your digital transformation with our comprehensive cloud migration, 
                infrastructure automation, and DevOps expertise. Build, deploy, and scale with confidence.,
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">", <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">",;
                  Get Started;
                  <ArrowRight className="w-5 h-5 ml-2" />";
                </button>;
                <button className="border border-gray-600 text-white px-8 py-4 rounded-lg hover: bg-gray-800 transition-colors font-medium">", View Case Studies,;
                </button>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Features Section */}
        <section className="py-20">"
          <div className="container mx-auto px-4">";
            <div className="text-center mb-16">";
              <h2 className="text-4xl font-bold text-white mb-4">";
                Comprehensive Cloud & DevOps Services;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">";
                From cloud migration to continuous deployment, we provide end-to-end solutions;
                that modernize your infrastructure and accelerate your development cycles.;
              </p>;
            </div>;
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">",;
              {features && features.map((feature, index) => (,;
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover: border-blue-500 transition-colors">";
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">";
                    <feature && feature.icon className="w-6 h-6 text-white" />";
                  </div>,;
                  <h3 className="text-xl font-semibold text-white mb-4">{feature && feature.title}</h3>";
                  <p className="text-gray-300">{feature && feature.description}</p>";
                </div>;
              ))}
            </div>,
          </div>;
        </section>;
        {/* Services List */}
        <section className="py-20 bg-gray-800/30">"
          <div className="container mx-auto px-4">";
            <div className="max-w-4xl mx-auto">";
              <h2 className="text-3xl font-bold text-white text-center mb-12">";
                Our Cloud & DevOps Expertise;
              </h2>;
              <div className="grid grid-cols-1 md: grid-cols-2 gap-6">",;
                {services && services.map((service, index) => (,;
                  <div key={index} className="flex items-center space-x-3">";
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />";
                    <span className="text-gray-300 text-lg">{service}</span>"
                  </div>;
                ))}
              </div>,
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-20">"
          <div className="container mx-auto px-4">";
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">";
              <h2 className="text-4xl font-bold text-white mb-6">";
                Ready to Transform Your Infrastructure?;
              </h2>;
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">";
                Let our cloud and DevOps experts help you build a scalable, secure, 
                and efficient infrastructure that grows with your business.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">", <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium">",;
                  Schedule Consultation;
                </button>;
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover: bg-white hover:text-blue-600 transition-colors font-medium">", Download Whitepaper,;
                </button>;
              </div>;
            </div>;
          </div>;
        </section>;
      </div>;
    </Layout>;


    description: 'Seamless migration to cloud platforms with zero downtime'
  },


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
  },
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
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



const benefits = [
  'Reduced infrastructure costs by up to 50%',
  'Improved deployment speed and reliability',
  'Enhanced security and compliance',
  'Automated scaling and resource management',
  'Better disaster recovery capabilities',
  'Faster time-to-market for applications'
];
export default function CloudDevOpsServices() {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function CloudDevOpsPage() {;
const benefits = [;
  'Reduced infrastructure costs by up to 50%',;
  'Improved deployment speed and reliability',;
  'Enhanced security and compliance',;
  'Automated scaling and resource management',;
  'Better disaster recovery capabilities',;
  'Faster time-to-market for applications';
];
export default function CloudDevOpsServices() {;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <Layout
      title="Cloud & DevOps Services - Zion Tech Group"
      description="Comprehensive cloud migration and DevOps services. Transform your infrastructure with modern cloud technologies and automated processes."

  

    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-700 text-white py-20">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                Cloud & DevOps Services;
              </h1>;
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">;
                Transform your infrastructure with modern cloud technologies and automated DevOps processes;
                for improved performance, security, and scalability.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">;
                  Get Started;
                </button>;
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">;
                  View Case Studies;
                </button>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Features Section */}


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

                </ul>;
              </div>;
              <div className="bg-gradient-to-r from-blue-600 to-cyan-700 p-8 rounded-xl text-white">;
                <h3 className="text-2xl font-bold mb-6">Ready to Modernize Your Infrastructure?</h3>;
                <p className="text-lg mb-6">;
                  Let our cloud and DevOps experts help you transform your infrastructure;
                  and accelerate your development processes.;
                </p>;
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">;
                  Schedule Consultation;
                  <ArrowRight className="w-5 h-5 ml-2" />;
                </button>;
              </div>;


        {/* Tools Section */}
        <section className="py-16 bg-white">;
          <div className="max-w-7xl mx-auto px-4">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
ursor/fix-syntax-push-and-merge-to-main-40de
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

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
  );
