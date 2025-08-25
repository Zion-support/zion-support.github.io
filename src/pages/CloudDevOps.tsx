import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Cloud, Code, Zap, Shield, Database, Globe, Server, GitBranch } from 'lucide-react';
=======
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Code, 
  Database, 
  Network, 
  Shield, 
  Zap, 
  Clock, 
  Users, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Play,
  BookOpen,
  Headphones
} from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7

export default function CloudDevOps() {
  const services = [
    {
<<<<<<< HEAD
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless migration to AWS, Azure, or Google Cloud with zero downtime and optimized performance."
    },
    {
      icon: Code,
      title: "CI/CD Pipelines",
      description: "Automated build, test, and deployment pipelines for faster, more reliable software delivery."
    },
    {
      icon: Zap,
      title: "Infrastructure as Code",
      description: "Manage infrastructure using Terraform, CloudFormation, or Ansible for consistent deployments."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Built-in security best practices and compliance frameworks for enterprise-grade protection."
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Managed database services with automated backups, scaling, and monitoring."
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "Worldwide content delivery network for lightning-fast user experiences."
=======
      title: "Cloud Migration & Strategy",
      description: "Seamless migration to cloud platforms with minimal downtime",
      features: [
        "Multi-cloud strategy development",
        "Legacy system migration",
        "Cost optimization analysis",
        "Performance benchmarking"
      ],
      icon: Cloud
    },
    {
      title: "DevOps Automation",
      description: "Streamline development and operations with intelligent automation",
      features: [
        "CI/CD pipeline optimization",
        "Infrastructure as Code (IaC)",
        "Automated testing & deployment",
        "Monitoring & alerting systems"
      ],
      icon: Code
    },
    {
      title: "Container Orchestration",
      description: "Manage and scale containerized applications efficiently",
      features: [
        "Kubernetes implementation",
        "Docker containerization",
        "Service mesh architecture",
        "Auto-scaling solutions"
      ],
      icon: Database
    },
    {
      title: "Cloud Security",
      description: "Comprehensive security for cloud environments",
      features: [
        "Identity & access management",
        "Data encryption & compliance",
        "Threat detection & response",
        "Security auditing & monitoring"
      ],
      icon: Shield
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
    }
  ];

  const benefits = [
<<<<<<< HEAD
    "Reduced deployment time from weeks to hours",
    "99.9% uptime guarantee with automated failover",
    "Cost optimization through intelligent resource management",
    "Enhanced security with automated threat detection",
    "Scalable infrastructure that grows with your business",
    "24/7 monitoring and proactive issue resolution"
  ];

  const technologies = [
    "AWS, Azure, Google Cloud",
    "Docker & Kubernetes",
    "Terraform & Ansible",
    "Jenkins & GitLab CI",
    "Prometheus & Grafana",
    "ELK Stack & Splunk"
=======
    "Reduced infrastructure costs by 40-60%",
    "Faster deployment cycles (80% improvement)",
    "Improved system reliability (99.9% uptime)",
    "Enhanced security and compliance",
    "Scalable and flexible infrastructure"
  ];

  const technologies = [
    "AWS", "Azure", "Google Cloud", "Kubernetes", "Docker",
    "Terraform", "Ansible", "Jenkins", "GitLab CI", "Prometheus"
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full">
                <Cloud className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Cloud DevOps Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Accelerate your development with modern cloud infrastructure and automated DevOps practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
                View Pricing
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud and DevOps solutions designed to modernize your infrastructure and accelerate development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg w-fit mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
=======
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <Cloud className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Cloud DevOps Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your development and operations with cutting-edge cloud technologies, 
            intelligent automation, and scalable infrastructure solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Cloud DevOps Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From cloud migration to continuous deployment, we provide end-to-end 
              DevOps solutions that accelerate your digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-16 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Cloud DevOps?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of modern cloud infrastructure and automated DevOps practices.
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Cloud DevOps Solutions?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience measurable improvements in efficiency, cost savings, and 
              operational excellence.
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-gray-700/50 rounded-lg p-4 hover:bg-gray-600/50 transition-all duration-300"
              >
                <Zap className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-200">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on industry-leading tools and platforms for maximum reliability and performance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-all duration-300"
              >
                <Server className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <span className="text-gray-200 font-medium">{tech}</span>
              </motion.div>
=======
      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our expertise spans the entire cloud and DevOps ecosystem, ensuring 
              we can work with your existing stack or recommend the best solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {technologies.map((tech, idx) => (
              <div key={idx} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-cyan-400 font-semibold">{tech}</div>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you build a modern, scalable, and efficient cloud infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Migration
              </button>
              <button className="px-8 py-4 border border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
                Get Assessment
              </button>
            </div>
          </motion.div>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your DevOps?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our cloud DevOps solutions can accelerate your 
            development cycles and improve operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
        </div>
      </section>
    </div>
  );
}