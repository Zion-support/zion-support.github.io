import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, FileText, Users, Brain, Target, 
  Zap, Building, ArrowRight, Star, CheckCircle, 
  DollarSign, BarChart3, Settings, Cpu
} from 'lucide-react';

const microSaasServices = [
  {
    name: 'AI Content Factory Enterprise',
    href: '/ai-content-factory-enterprise',
    description: 'Enterprise AI content generation platform for scalable content creation',
    features: ['AI Content Generation', 'Multi-format Output', 'Brand Consistency', 'Scalable Production'],
    isNew: true,
    badge: 'New',
    color: 'from-teal-500 to-emerald-600'
  },
  {
    name: 'Quantum CRM Suite Enterprise',
    href: '/quantum-crm-suite-enterprise',
    description: 'Quantum-enhanced CRM platform with advanced analytics and automation',
    features: ['Quantum Analytics', 'Customer Insights', 'Automation', 'Predictive Modeling'],
    isHot: true,
    badge: 'Hot',
    color: 'from-purple-500 to-pink-600'
  },
  {
    name: 'AI Autonomous Decision Engine',
    href: '/ai-autonomous-decision-engine',
    description: 'Autonomous AI decision making system for business optimization',
    features: ['Autonomous Decisions', 'Business Optimization', 'Real-time Analysis', 'Risk Assessment'],
    isNew: true,
    badge: 'New',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    name: 'AI Legal Contract Analyzer',
    href: '/ai-legal-contract-analyzer',
    description: 'AI-powered legal analysis and contract review platform',
    features: ['Contract Analysis', 'Legal Review', 'Risk Assessment', 'Compliance Checking'],
    isNew: true,
    badge: 'New',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    name: 'AI Healthcare Diagnostics Pro',
    href: '/ai-healthcare-diagnostics-pro',
    description: 'Advanced medical AI diagnostics with predictive healthcare insights',
    features: ['Medical Diagnostics', 'Predictive Healthcare', 'Image Analysis', 'Patient Monitoring'],
    isPremium: true,
    badge: 'Premium',
    color: 'from-red-500 to-pink-600'
  }
];

const benefits = [
  {
    icon: <Rocket className="w-8 h-8 text-teal-400" />,
    title: 'Rapid Deployment',
    description: 'Quick setup and deployment for immediate business impact'
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: 'AI-Powered',
    description: 'Intelligent automation and decision-making capabilities'
  },
  {
    icon: <Building className="w-8 h-8 text-purple-400" />,
    title: 'Enterprise Ready',
    description: 'Scalable solutions designed for business growth'
  },
  {
    icon: <DollarSign className="w-8 h-8 text-green-400" />,
    title: 'Cost Effective',
    description: 'Affordable solutions with high ROI and value'
  }
];

export default function MicroSaas() {
  return (
    <>
      <Head>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Innovative business solutions for modern enterprises. AI content generation, quantum CRM, autonomous decision making, and healthcare diagnostics." />
        <meta name="keywords" content="micro SAAS, AI content, CRM, decision engine, legal AI, healthcare AI" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-emerald-500/5 to-purple-500/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.1),transparent_50%)]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Rocket className="w-12 h-12 text-teal-400" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
                  Micro SAAS
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Innovative business solutions for modern enterprises. Transform your operations with 
                AI-powered micro SAAS applications designed for rapid deployment and immediate impact.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-teal-600 hover:to-emerald-700 transition-all duration-200 hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
                  className="px-8 py-4 border border-teal-500/40 text-teal-300 rounded-xl font-semibold hover:bg-teal-500/10 transition-all duration-200"
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
                Innovative Business Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our comprehensive suite of micro SAAS applications designed for modern enterprises
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 hover:scale-105">
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
                        <Rocket className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
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
                      className="inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 font-semibold group-hover:translate-x-1 transition-all duration-200"
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
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience rapid deployment and immediate business impact with our innovative solutions
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
                  <div className="w-20 h-20 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Join the future of business automation with our innovative micro SAAS solutions. 
                Deploy quickly and see immediate results.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-teal-600 hover:to-emerald-700 transition-all duration-200 hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
                  className="px-8 py-4 border border-teal-500/40 text-teal-300 rounded-xl font-semibold hover:bg-teal-500/10 transition-all duration-200"
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