import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Server, 
  Database, 
  Shield, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Code,
  GitBranch,
  Container,
  Monitor,
  Settings
} from 'lucide-react';
import Layout from '../../components/Layout';

const services = [
  {
    icon: Cloud,
    title: 'Cloud Migration',
    description: 'Seamlessly migrate your infrastructure to AWS, Azure, or Google Cloud with zero downtime.',
    features: ['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Cost Optimization']
  },
  {
    icon: Server,
    title: 'Infrastructure as Code',
    description: 'Automate infrastructure provisioning and management using Terraform, CloudFormation, and Ansible.',
    features: ['Terraform Implementation', 'CloudFormation Templates', 'Ansible Automation', 'GitOps Workflows']
  },
  {
    icon: Container,
    title: 'Container Orchestration',
    description: 'Deploy and manage containerized applications with Kubernetes and Docker.',
    features: ['Kubernetes Setup', 'Docker Implementation', 'Service Mesh', 'Auto-scaling']
  },
  {
    icon: GitBranch,
    title: 'CI/CD Pipelines',
    description: 'Build robust continuous integration and deployment pipelines for faster, reliable releases.',
    features: ['Jenkins Setup', 'GitLab CI/CD', 'GitHub Actions', 'Automated Testing']
  },
  {
    icon: Monitor,
    title: 'Monitoring & Observability',
    description: 'Implement comprehensive monitoring, logging, and alerting for your applications.',
    features: ['Prometheus & Grafana', 'ELK Stack', 'APM Tools', 'Custom Dashboards']
  },
  {
    icon: Shield,
    title: 'DevSecOps',
    description: 'Integrate security practices into your development and operations workflows.',
    features: ['Security Scanning', 'Compliance Automation', 'Secrets Management', 'Vulnerability Assessment']
  }
];

const benefits = [
  {
    icon: Zap,
    title: 'Faster Deployments',
    description: 'Reduce deployment time from hours to minutes with automated CI/CD pipelines.'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Implement security best practices throughout your development lifecycle.'
  },
  {
    icon: Monitor,
    title: 'Better Monitoring',
    description: 'Gain real-time insights into your application performance and infrastructure health.'
  },
  {
    icon: Settings,
    title: 'Cost Optimization',
    description: 'Optimize cloud costs through right-sizing, auto-scaling, and resource management.'
  }
];

const technologies = [
  { name: 'AWS', category: 'Cloud Platforms' },
  { name: 'Azure', category: 'Cloud Platforms' },
  { name: 'Google Cloud', category: 'Cloud Platforms' },
  { name: 'Kubernetes', category: 'Container Orchestration' },
  { name: 'Docker', category: 'Containerization' },
  { name: 'Terraform', category: 'Infrastructure as Code' },
  { name: 'Ansible', category: 'Configuration Management' },
  { name: 'Jenkins', category: 'CI/CD' },
  { name: 'GitLab CI', category: 'CI/CD' },
  { name: 'GitHub Actions', category: 'CI/CD' },
  { name: 'Prometheus', category: 'Monitoring' },
  { name: 'Grafana', category: 'Monitoring' },
  { name: 'ELK Stack', category: 'Logging' },
  { name: 'Helm', category: 'Package Management' },
  { name: 'Istio', category: 'Service Mesh' }
];

const processSteps = [
  {
    step: '01',
    title: 'Assessment',
    description: 'Analyze your current infrastructure and identify migration opportunities.'
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Create a detailed migration plan with timelines and resource requirements.'
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Execute the migration with minimal downtime and maximum efficiency.'
  },
  {
    step: '04',
    title: 'Optimization',
    description: 'Fine-tune your cloud infrastructure for performance and cost efficiency.'
  }
];

export default function CloudDevOpsPage() {
  return (
    <Layout
      title="Cloud & DevOps Services - Zion Tech Group"
      description="Transform your infrastructure with our comprehensive cloud migration and DevOps services. AWS, Azure, Kubernetes, and CI/CD expertise."
      keywords="cloud migration, DevOps, AWS, Azure, Kubernetes, CI/CD, infrastructure as code, cloud consulting"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6">
                Cloud & DevOps Excellence
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Accelerate your digital transformation with our comprehensive cloud migration 
                and DevOps services. From infrastructure automation to continuous deployment.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#services"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Services
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Cloud & DevOps Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From cloud migration to DevOps automation, we provide end-to-end solutions 
                to modernize your infrastructure and accelerate your development cycles.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Cloud & DevOps Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our expertise in cloud technologies and DevOps practices delivers measurable 
                results for your business.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Technologies We Work With
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We leverage the latest cloud and DevOps technologies to deliver 
                robust, scalable solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.05 * index }}
                  className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {tech.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {tech.category}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Cloud & DevOps Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful cloud migration 
                and DevOps implementation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Ready to Transform Your Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let our cloud and DevOps experts help you build a scalable, 
                secure, and efficient infrastructure.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <span>Start Your Cloud Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/case-studies"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Case Studies
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}