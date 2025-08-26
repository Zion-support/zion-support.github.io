import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Cloud,
  Server,
  Database,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Globe,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  GitBranch,
  Monitor,
  Lock
} from 'lucide-react';
const CloudDevOps: React.FC = () => {
  const cloudServices = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration of your infrastructure to modern cloud platforms',
      icon: <Cloud className="w-8 h-8" />,
      features: ['AWS Migration', 'Azure Migration', 'Google Cloud Migration', 'Multi-Cloud Strategy']
    },
    {
      title: 'DevOps Automation',
      description: 'Streamline development and operations with automated CI/CD pipelines',
      icon: <GitBranch className="w-8 h-8" />,
      features: ['CI/CD Implementation', 'Infrastructure as Code', 'Automated Testing', 'Deployment Automation']
    },
    {
      title: 'Container Orchestration',
      description: 'Manage and scale containerized applications with Kubernetes and Docker',
      icon: <Server className="w-8 h-8" />,
      features: ['Kubernetes Management', 'Docker Implementation', 'Microservices Architecture', 'Service Mesh']
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive security solutions for cloud environments',
      icon: <Shield className="w-8 h-8" />,
      features: ['Identity & Access Management', 'Data Encryption', 'Compliance & Governance', 'Threat Detection']
    }
  ];
  const platforms = [
    { name: 'Amazon Web Services', description: 'Enterprise-grade cloud infrastructure and services' },
    { name: 'Microsoft Azure', description: 'Hybrid cloud solutions and enterprise integration' },
    { name: 'Google Cloud Platform', description: 'AI-powered cloud computing and analytics' },
    { name: 'Multi-Cloud', description: 'Optimized solutions across multiple cloud providers' }
  ];
  const benefits = [
    {
      title: 'Scalability',
      description: 'Scale resources up or down based on demand',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce infrastructure costs with pay-as-you-use models',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: 'Faster Deployment',
      description: 'Accelerate development cycles with automated pipelines',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Enhanced Security',
      description: 'Advanced security features and compliance standards',
      icon: <Lock className="w-6 h-6" />
    }
  ];
  const devOpsTools = [
    { name: 'Jenkins', category: 'CI/CD' },
    { name: 'GitLab CI', category: 'CI/CD' },
    { name: 'Terraform', category: 'Infrastructure' },
    { name: 'Ansible', category: 'Configuration' },
    { name: 'Kubernetes', category: 'Orchestration' },
    { name: 'Docker', category: 'Containerization' },
    { name: 'Prometheus', category: 'Monitoring' },
    { name: 'Grafana', category: 'Visualization' }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Cloud &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block">
              DevOps
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Accelerate your digital transformation with modern cloud infrastructure and DevOps practices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </section>
      {/* Cloud Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Cloud & DevOps Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions for modern cloud infrastructure and development operations
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cloudServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-xl mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Cloud Platforms Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Cloud Platforms We Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expertise across all major cloud providers and hybrid solutions
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                <p className="text-gray-300 text-sm">{platform.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* DevOps Tools Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              DevOps Tools & Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry-leading tools and technologies for modern DevOps practices
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {devOpsTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05 * index }}
                whileHover={{ y: -3 }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-1">{tool.name}</h3>
                <p className="text-sm text-gray-400">{tool.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our Cloud & DevOps Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of modern cloud infrastructure and DevOps practices
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-3xl p-12 text-center border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our cloud and DevOps solutions can accelerate your digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/services"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default CloudDevOps;