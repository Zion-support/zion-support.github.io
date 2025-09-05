import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Server, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Code, 
  Database,
  Monitor,
  Settings,
  Users,
  BarChart3
} from 'lucide-react';
import Layout from '../../components/Layout';

const features = [
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Design, deploy, and manage scalable cloud infrastructure on AWS, Azure, and GCP.'
  },
  {
    icon: Code,
    title: 'DevOps Automation',
    description: 'Implement CI/CD pipelines, infrastructure as code, and automated deployment processes.'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Ensure your cloud infrastructure meets security standards and compliance requirements.'
  },
  {
    icon: Monitor,
    title: 'Monitoring & Logging',
    description: 'Set up comprehensive monitoring, alerting, and logging solutions for your applications.'
  },
  {
    icon: Database,
    title: 'Database Management',
    description: 'Optimize database performance, implement backup strategies, and ensure data integrity.'
  },
  {
    icon: Settings,
    title: 'Configuration Management',
    description: 'Automate configuration management and ensure consistency across environments.'
  }
];

const services = [
  {
    title: 'Cloud Migration',
    description: 'Seamlessly migrate your applications and data to the cloud with minimal downtime.',
    features: ['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Performance Optimization']
  },
  {
    title: 'DevOps Implementation',
    description: 'Establish DevOps practices and tools to accelerate your development lifecycle.',
    features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Automated Testing', 'Deployment Automation']
  },
  {
    title: 'Cloud Security',
    description: 'Implement comprehensive security measures to protect your cloud infrastructure.',
    features: ['Security Assessment', 'Identity & Access Management', 'Network Security', 'Compliance Auditing']
  },
  {
    title: 'Monitoring & Observability',
    description: 'Gain deep insights into your application performance and infrastructure health.',
    features: ['Application Monitoring', 'Infrastructure Monitoring', 'Log Aggregation', 'Alert Management']
  }
];

const technologies = [
  { name: 'AWS', category: 'Cloud Platform' },
  { name: 'Azure', category: 'Cloud Platform' },
  { name: 'Google Cloud', category: 'Cloud Platform' },
  { name: 'Docker', category: 'Containerization' },
  { name: 'Kubernetes', category: 'Orchestration' },
  { name: 'Terraform', category: 'Infrastructure as Code' },
  { name: 'Ansible', category: 'Configuration Management' },
  { name: 'Jenkins', category: 'CI/CD' },
  { name: 'GitLab CI', category: 'CI/CD' },
  { name: 'Prometheus', category: 'Monitoring' },
  { name: 'Grafana', category: 'Visualization' },
  { name: 'ELK Stack', category: 'Logging' }
];

const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '50%', label: 'Faster Deployments' },
  { number: '24/7', label: 'Monitoring & Support' },
  { number: '100+', label: 'Successful Migrations' }
];

export default function CloudDevOpsPage() {
  return (
    <Layout
      title="Cloud & DevOps Services - Zion Tech Group"
      description="Expert cloud infrastructure and DevOps solutions. Migrate to the cloud, implement CI/CD, and optimize your development workflow."
    >
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
              <div className="flex items-center justify-center mb-6">
                <Cloud className="w-16 h-16 text-blue-400 mr-4" />
                <Server className="w-16 h-16 text-purple-400" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cloud & DevOps
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your infrastructure with our comprehensive cloud and DevOps solutions. 
                From cloud migration to automated deployment pipelines, we help you build, deploy, and scale with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started Today
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Comprehensive Cloud & DevOps Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our expert team provides end-to-end cloud and DevOps services to help you modernize your infrastructure, 
                accelerate development, and ensure reliable, scalable operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-blue-600 mb-4 group-hover:text-purple-600 transition-colors">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Cloud & DevOps Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                From initial assessment to ongoing optimization, we provide comprehensive cloud and DevOps services 
                tailored to your specific needs and business objectives.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Technologies We Work With
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We leverage the latest cloud and DevOps technologies to deliver robust, scalable solutions 
                that meet your specific requirements and industry standards.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-600">{tech.category}</p>
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Infrastructure?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our cloud and DevOps experts help you build a robust, scalable infrastructure 
                that accelerates your development and supports your business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}