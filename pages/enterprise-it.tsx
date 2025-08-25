import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, Cloud, Server, ShieldCheck, Settings, Database, 
  Zap, Building, ArrowRight, Star, CheckCircle, 
  Lock, Network, Cpu, BarChart3
} from 'lucide-react';

const enterpriseServices = [
  {
    name: 'Quantum Cloud Infrastructure Pro',
    href: '/quantum-cloud-infrastructure-pro',
    description: 'Quantum-enhanced cloud computing with advanced security and performance optimization',
    features: ['Quantum Processing', 'Cloud Security', 'Performance Optimization', 'Scalable Infrastructure'],
    isNew: true,
    badge: 'New',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    name: 'Edge Computing Orchestrator Pro',
    href: '/edge-computing-orchestrator-pro',
    description: 'Advanced edge computing platform for distributed processing and real-time analytics',
    features: ['Edge Processing', 'Real-time Analytics', 'Distributed Computing', 'Low Latency'],
    isHot: true,
    badge: 'Hot',
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: 'Zero Trust Security Platform',
    href: '/zero-trust-security-platform',
    description: 'Comprehensive zero trust security framework for enterprise-grade protection',
    features: ['Zero Trust Architecture', 'Identity Verification', 'Continuous Monitoring', 'Threat Detection'],
    isNew: true,
    badge: 'New',
    color: 'from-purple-500 to-pink-600'
  },
  {
    name: 'AI-Powered DevOps Platform',
    href: '/ai-powered-devops-platform',
    description: 'Intelligent DevOps automation with AI-driven optimization and monitoring',
    features: ['AI Automation', 'DevOps Optimization', 'Continuous Monitoring', 'Predictive Analytics'],
    isNew: true,
    badge: 'New',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    name: 'Quantum Data Center Platform',
    href: '/quantum-data-center-platform',
    description: 'Quantum data center management with advanced resource optimization',
    features: ['Quantum Management', 'Resource Optimization', 'Energy Efficiency', 'Advanced Analytics'],
    isPremium: true,
    badge: 'Premium',
    color: 'from-yellow-500 to-orange-600'
  }
];

const benefits = [
  {
    icon: <Shield className="w-8 h-8 text-green-400" />,
    title: 'Enterprise Security',
    description: 'Military-grade security with zero trust architecture and continuous monitoring'
  },
  {
    icon: <Cloud className="w-8 h-8 text-blue-400" />,
    title: 'Scalable Infrastructure',
    description: 'Cloud-native solutions that grow with your business needs'
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: 'High Performance',
    description: 'Quantum-enhanced processing for lightning-fast enterprise operations'
  },
  {
    icon: <Building className="w-8 h-8 text-purple-400" />,
    title: 'Enterprise Ready',
    description: 'Built for large-scale deployments with enterprise-grade reliability'
  }
];

export default function EnterpriseIT() {
  return (
    <>
      <Head>
        <title>Enterprise IT Services - Zion Tech Group</title>
        <meta name="description" content="Advanced enterprise infrastructure and security solutions. Quantum cloud infrastructure, edge computing, zero trust security, and AI-powered DevOps." />
        <meta name="keywords" content="enterprise IT, cloud infrastructure, edge computing, zero trust security, DevOps, data center" />
        <link rel="canonical" href="https://ziontechgroup.com/enterprise-it" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/5 to-cyan-500/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Shield className="w-12 h-12 text-green-400" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Enterprise IT
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Advanced enterprise infrastructure and security solutions designed for large-scale deployments. 
                Experience enterprise-grade reliability with cutting-edge technology.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-200 hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
                  className="px-8 py-4 border border-green-500/40 text-green-300 rounded-xl font-semibold hover:bg-green-500/10 transition-all duration-200"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise-Grade Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our comprehensive suite of enterprise IT infrastructure and security solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enterpriseServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                    {service.isNew && (
                      <span className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                        {service.badge}
                      </span>
                    )}
                    {service.isHot && (
                      <span className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                        {service.badge}
                      </span>
                    )}
                    {service.isPremium && (
                      <span className="absolute top-4 right-4 px-3 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full">
                        {service.badge}
                      </span>
                    )}
                    
                    <div className="mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-sm text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={service.href}
                      className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 font-semibold group-hover:translate-x-1 transition-all duration-200"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative bg-gradient-to-br from-gray-900/30 to-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Enterprise Solutions?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience enterprise-grade reliability with our cutting-edge infrastructure and security solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Join the future of enterprise IT with our cutting-edge infrastructure and security solutions. 
                Scale your business with enterprise-grade reliability and performance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-200 hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
                  className="px-8 py-4 border border-green-500/40 text-green-300 rounded-xl font-semibold hover:bg-green-500/10 transition-all duration-200"
                >
                  Explore All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}