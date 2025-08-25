import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building2, Zap, Target, Users, 
  Shield, Rocket, Globe, Sparkles,
  Check, ArrowRight, Star, Award,
  Server, Database, Network, Lock, Cpu, BarChart3
} from 'lucide-react';

export default function EnterpriseIT() {
  const services = [
    {
      name: 'IT Infrastructure Management',
      description: 'Comprehensive management of enterprise IT infrastructure and systems',
      features: [
        'Server & Storage Management',
        'Network Infrastructure',
        'Cloud Migration',
        'Disaster Recovery',
        'Performance Optimization',
        '24/7 Monitoring'
      ],
      icon: <Server className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600',
      link: '/it-infrastructure-management'
    },
    {
      name: 'Zero Trust Security Platform',
      description: 'Advanced security framework for enterprise-grade protection',
      features: [
        'Identity Verification',
        'Access Control',
        'Threat Detection',
        'Data Encryption',
        'Compliance Management',
        'Security Analytics'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600',
      link: '/zero-trust-security-platform'
    },
    {
      name: 'Edge Computing Orchestrator',
      description: 'Intelligent edge computing management and optimization',
      features: [
        'Edge Node Management',
        'Load Distribution',
        'Real-time Processing',
        'Latency Optimization',
        'Scalable Architecture',
        'Performance Monitoring'
      ],
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
      link: '/edge-computing-orchestrator-pro'
    },
    {
      name: 'AI-Powered DevOps Platform',
      description: 'Intelligent automation for development and operations',
      features: [
        'CI/CD Automation',
        'Code Quality Analysis',
        'Deployment Management',
        'Performance Testing',
        'Infrastructure as Code',
        'Monitoring & Alerting'
      ],
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
      link: '/ai-powered-devops-platform'
    },
    {
      name: 'Data Center Optimization',
      description: 'Enterprise data center management and optimization',
      features: [
        'Capacity Planning',
        'Energy Efficiency',
        'Cooling Management',
        'Space Optimization',
        'Cost Reduction',
        'Sustainability Metrics'
      ],
      icon: <Database className="w-8 h-8" />,
      color: 'from-teal-500 to-blue-600',
      link: '/quantum-data-center-platform'
    },
    {
      name: 'Enterprise Integration',
      description: 'Seamless integration of enterprise systems and applications',
      features: [
        'API Management',
        'Data Integration',
        'Workflow Automation',
        'System Connectivity',
        'Real-time Sync',
        'Error Handling'
      ],
      icon: <Network className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-600',
      link: '/enterprise-integration'
    }
  ];

  const solutions = [
    {
      title: 'Cloud Strategy & Migration',
      description: 'Comprehensive cloud adoption and migration strategies',
      icon: <Globe className="w-6 h-6" />,
      benefits: ['Cost Optimization', 'Scalability', 'Security', 'Compliance']
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation',
      icon: <Sparkles className="w-6 h-6" />,
      benefits: ['Process Automation', 'Customer Experience', 'Operational Efficiency', 'Innovation']
    },
    {
      title: 'Cybersecurity & Compliance',
      description: 'Advanced security solutions and regulatory compliance',
      icon: <Lock className="w-6 h-6" />,
      benefits: ['Threat Protection', 'Data Security', 'Regulatory Compliance', 'Risk Management']
    },
    {
      title: 'Data Analytics & BI',
      description: 'Enterprise data analytics and business intelligence solutions',
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ['Data Insights', 'Decision Making', 'Performance Metrics', 'Predictive Analytics']
    }
  ];

  const industries = [
    {
      name: 'Financial Services',
      solutions: ['Regulatory Compliance', 'Risk Management', 'Fraud Detection', 'High-Frequency Trading'],
      icon: <Building2 className="w-6 h-6" />
    },
    {
      name: 'Healthcare',
      solutions: ['HIPAA Compliance', 'Patient Data Security', 'Medical Device Integration', 'Clinical Analytics'],
      icon: <Users className="w-6 h-6" />
    },
    {
      name: 'Manufacturing',
      solutions: ['IoT Integration', 'Predictive Maintenance', 'Supply Chain Optimization', 'Quality Control'],
      icon: <Rocket className="w-6 h-6" />
    },
    {
      name: 'Retail',
      solutions: ['E-commerce Platforms', 'Inventory Management', 'Customer Analytics', 'Omnichannel Integration'],
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const enterpriseBenefits = [
    {
      title: 'Scalability',
      description: 'Grow your IT infrastructure seamlessly as your business expands',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security with zero-trust architecture and advanced threat protection',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Efficiency',
      description: 'Optimize operations and reduce costs through intelligent automation and AI',
      icon: <Target className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600'
    }
  ];

  return (
    <>
      <Head>
        <title>Enterprise IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise IT solutions including infrastructure management, security, DevOps, and digital transformation services." />
        <meta name="keywords" content="enterprise IT, IT infrastructure, cybersecurity, DevOps, digital transformation, cloud migration" />
        <link rel="canonical" href="https://ziontechgroup.com/enterprise-it" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Building2 className="w-4 h-4 mr-2" />
                Enterprise IT
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Enterprise IT Solutions
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your enterprise with cutting-edge IT solutions. From infrastructure management 
                to digital transformation, we deliver scalable, secure, and efficient technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Enterprise IT Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Enterprise IT Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={service.link} className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enterprise Solutions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Enterprise Solutions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                        {solution.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{solution.description}</p>
                    
                    <div className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-400">
                          <Star className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Industry Solutions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {industries.map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      {industry.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-4">{industry.name}</h3>
                    
                    <div className="space-y-2">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="text-sm text-gray-400">
                          {solution}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enterprise Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Why Choose Our Enterprise IT Solutions?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {enterpriseBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Enterprise IT?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Partner with us to build a future-ready IT infrastructure that drives innovation, 
                security, and operational excellence across your organization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/case-studies" className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200">
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
=======
import Layout from '../components/layout/Layout';

import { Server, CheckCircle, Database, Cloud } from 'lucide-react';

export default function EnterpriseITPage() {
  const features = [
    'Cloud migration and landing zones with cost governance',
    'DevOps automation, CI/CD, and platform engineering',
    'Data platforms, lineage, and quality monitoring',
    'Observability, SLOs, and incident automation',
  ];

  const solutions = [
    { name: 'Cloud Landing Zone', href: '/cloud-landing-zone' },
    { name: 'Cloud Cost Optimizer', href: '/cloud-cost-optimizer' },
    { name: 'Data Pipeline Observability', href: '/data-pipeline-observability' },
    { name: 'Uptime & SLO Monitor', href: '/uptime-slo-monitor' },
  ];

  return (
    <Layout>
      <Head>
        <title>Enterprise IT | Zion Tech Group</title>
        <meta name="description" content="Cloud, DevOps, data platforms, and SRE with cost, performance, and reliability in focus." />
        <link rel="canonical" href="https://ziontechgroup.com/enterprise-it" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
              <Server className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">Enterprise IT</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">Ship secure, reliable platforms with measurable business outcomes.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="px-8 py-4">Get a Roadmap</a>
              <a href="/market-pricing" className="px-8 py-4">See Market Pricing</a>
            </div>
          </header>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Core Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <span className="text-gray-200">{f}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Highlighted Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {solutions.map((s) => (
                <a key={s.name} href={s.href} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors">
                  <div className="text-gray-200 font-semibold mb-2">{s.name}</div>
                  <p className="text-gray-300 text-sm">Learn more</p>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
>>>>>>> autobot/2025-08-24T03-49-38-332Z
  );
}