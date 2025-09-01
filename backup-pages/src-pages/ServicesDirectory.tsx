import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Shield,
  Cloud,
  Database,
  Cpu,
  Zap,
  Globe,
  Lock,
  Smartphone,
  BarChart3,
  Network,
  Server,
  ArrowRight,
  CheckCircle,
  Star,
} from 'lucide-react';

const ServicesDirectory = () => {
  const serviceCategories = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      description:
        'Advanced AI solutions to transform your business operations',
      icon: Brain,
      color: 'from-purple-500 to-indigo-500',
      services: [
        {
          name: 'AI Quantum Financial Trading',
          description: 'Revolutionary quantum-powered trading algorithms',
          path: '/services/ai-quantum-financial-trading',
          featured: true,
        },
        {
          name: 'AI Business Intelligence',
          description: 'Intelligent analytics and decision-making systems',
          path: '/services/ai-business-intelligence',
        },
        {
          name: 'AI Code Review',
          description: 'Automated code analysis and optimization',
          path: '/services/ai-code-review',
        },
        {
          name: 'AI Content Generator',
          description: 'Advanced content creation and automation',
          path: '/services/ai-content-generator',
        },
      ],
    },
    {
      title: 'Cybersecurity Solutions',
      description:
        'Comprehensive security services to protect your digital assets',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        {
          name: 'Zero Trust Security',
          description: 'Advanced zero-trust architecture implementation',
          path: '/services/zero-trust-security',
          featured: true,
        },
        {
          name: 'Vulnerability Assessment',
          description: 'Comprehensive security vulnerability scanning',
          path: '/services/vulnerability-assessment',
        },
        {
          name: 'Penetration Testing',
          description: 'Ethical hacking and security testing services',
          path: '/services/penetration-testing',
        },
        {
          name: 'Security Monitoring',
          description: '24/7 security monitoring and threat detection',
          path: '/services/security-monitoring',
        },
      ],
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Scalable cloud solutions and modern infrastructure',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'Cloud Migration',
          description: 'Seamless cloud migration and optimization',
          path: '/services/cloud-migration',
          featured: true,
        },
        {
          name: 'DevOps Automation',
          description: 'Automated deployment and CI/CD pipelines',
          path: '/services/devops-automation',
        },
        {
          name: 'Infrastructure as Code',
          description: 'Automated infrastructure management',
          path: '/services/infrastructure-as-code',
        },
        {
          name: 'Container Orchestration',
          description: 'Docker and Kubernetes deployment solutions',
          path: '/services/container-orchestration',
        },
      ],
    },
    {
      title: 'Data & Analytics',
      description: 'Transform data into actionable business insights',
      icon: Database,
      color: 'from-green-500 to-teal-500',
      services: [
        {
          name: 'Big Data Processing',
          description: 'Large-scale data processing and analytics',
          path: '/services/big-data-processing',
          featured: true,
        },
        {
          name: 'Real-time Analytics',
          description: 'Live data streaming and analysis',
          path: '/services/real-time-analytics',
        },
        {
          name: 'Data Visualization',
          description: 'Interactive dashboards and reporting',
          path: '/services/data-visualization',
        },
        {
          name: 'Business Intelligence',
          description: 'Strategic insights and decision support',
          path: '/services/business-intelligence',
        },
      ],
    },
  ];

  const stats = [
    { number: '500+', label: 'Services Delivered' },
    { number: '99.9%', label: 'Success Rate' },
    { number: '24/7', label: 'Support Available' },
    { number: '150+', label: 'Technologies' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {' '}
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions designed to accelerate your
              digital transformation and drive business innovation forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-r ${category.color}`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">
                      {category.title}
                    </h2>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      whileHover={{ scale: 1.05 }}
                      className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 relative ${
                        service.featured ? 'ring-2 ring-cyan-400/30' : ''
                      }`}
                    >
                      {service.featured && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            Featured
                          </span>
                        </div>
                      )}

                      <h3 className="text-lg font-bold mb-3 text-white">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        {service.description}
                      </p>

                      <Link
                        to={service.path}
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't see exactly what you're looking for? Our expert team can
              create tailored solutions designed specifically for your unique
              business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Discuss Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View All Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesDirectory;
