import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, Shield, Zap, Database, Smartphone, Globe, ArrowRight, CheckCircle, Users, Award } from 'lucide-react';

const services = [
  {
    title: "AI Services",
    description: "80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics",
    icon: Brain,
    href: "/ai-services",
    features: ["Machine Learning Models", "Computer Vision", "Natural Language Processing", "Predictive Analytics", "AI Chatbots", "Quantum AI"],
    pricing: "Starting at $2,500/month"
  },
  {
    title: "IT Services",
    description: "70+ comprehensive IT services from cloud infrastructure to cybersecurity, quantum computing, and zero-trust architecture",
    icon: Network,
    href: "/it-services",
    features: ["Cloud Migration", "DevOps Automation", "System Integration", "IT Consulting", "Infrastructure Management", "Technical Support"],
    pricing: "Starting at $1,800/month"
  },
  {
    title: "Micro SaaS",
    description: "85+ innovative micro SaaS solutions for modern businesses across all industries with real-time pricing and market analysis",
    icon: Cloud,
    href: "/micro-saas",
    features: ["Workflow Automation", "API Integration", "Custom Dashboards", "Data Processing", "Business Intelligence", "Process Optimization"],
    pricing: "Starting at $1,500/month"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and infrastructure with enterprise-grade protection",
    icon: Shield,
    href: "/cybersecurity",
    features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response", "Zero Trust Architecture", "Security Training"],
    pricing: "Starting at $2,200/month"
  },
  {
    title: "Cloud DevOps",
    description: "Complete cloud infrastructure and DevOps solutions for scalable, reliable, and efficient operations",
    icon: Database,
    href: "/cloud-devops",
    features: ["Cloud Migration", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging", "Auto-scaling", "Disaster Recovery"],
    pricing: "Starting at $2,000/month"
  },
  {
    title: "Quantum Computing",
    description: "Next-generation quantum computing solutions for complex problem-solving and optimization",
    icon: Zap,
    href: "/quantum-computing",
    features: ["Quantum Algorithms", "Quantum Simulation", "Optimization Problems", "Cryptography", "Research & Development", "Quantum AI"],
    pricing: "Starting at $5,000/month"
  }
];

const stats = [
  { number: '235+', label: 'Services Available' },
  { number: '1,200+', label: 'Projects Completed' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' }
];

const benefits = [
  {
    title: "Expert Team",
    description: "Our team of 95+ experts brings decades of experience in cutting-edge technologies",
    icon: Users
  },
  {
    title: "Proven Results",
    description: "1,200+ successful projects with measurable business impact and ROI",
    icon: Award
  },
  {
    title: "Global Reach",
    description: "Serving clients across 50+ countries with local expertise and global standards",
    icon: Globe
  },
  {
    title: "Innovation Focus",
    description: "Constantly pushing boundaries with latest technologies and methodologies",
    icon: Zap
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Head>
        <title>Our Services - ZION TECH GROUP</title>
        <meta name="description" content="Comprehensive AI, IT, and technology services. From AI solutions to cloud infrastructure, cybersecurity, and quantum computing." />
        <meta name="keywords" content="AI services, IT services, cloud computing, cybersecurity, quantum computing, micro SaaS" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions designed to transform your business and drive innovation across all industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-blue-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">235+ Services Available</span>
              </div>
              <div className="flex items-center text-blue-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">1,200+ Projects Completed</span>
              </div>
              <div className="flex items-center text-blue-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">99.9% Uptime Guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI and machine learning to cloud infrastructure and cybersecurity, we provide comprehensive technology solutions.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-blue-600">{service.pricing}</div>
                </div>
                <Link
                  href={service.href}
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional value through expertise, innovation, and proven results.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your requirements and create a customized solution that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/calendar"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}