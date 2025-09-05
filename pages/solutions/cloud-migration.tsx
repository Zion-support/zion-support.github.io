import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Shield, 
  Zap, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Database,
  Server,
  Globe,
  Lock,
  Settings,
  Users
} from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';

const phases = [
  {
    title: 'Assessment & Planning',
    description: 'Comprehensive analysis of current infrastructure and development of migration strategy.',
    icon: BarChart3,
    features: ['Infrastructure Audit', 'Workload Analysis', 'Migration Strategy', 'Risk Assessment']
  },
  {
    title: 'Design & Architecture',
    description: 'Design cloud-native architecture optimized for performance, security, and scalability.',
    icon: Settings,
    features: ['Cloud Architecture Design', 'Security Planning', 'Performance Optimization', 'Cost Optimization']
  },
  {
    title: 'Migration Execution',
    description: 'Seamless migration of applications and data to the cloud with minimal downtime.',
    icon: Cloud,
    features: ['Data Migration', 'Application Migration', 'Database Migration', 'Testing & Validation']
  },
  {
    title: 'Optimization & Support',
    description: 'Continuous optimization and ongoing support to ensure optimal cloud performance.',
    icon: Zap,
    features: ['Performance Monitoring', 'Cost Optimization', 'Security Updates', '24/7 Support']
  }
];

const benefits = [
  {
    title: 'Cost Reduction',
    description: 'Reduce infrastructure costs with pay-as-you-go cloud services and optimized resource usage.',
    icon: BarChart3
  },
  {
    title: 'Enhanced Security',
    description: 'Leverage enterprise-grade security features and compliance certifications.',
    icon: Shield
  },
  {
    title: 'Improved Performance',
    description: 'Faster, more reliable applications with global content delivery and auto-scaling.',
    icon: Zap
  },
  {
    title: 'Business Continuity',
    description: 'Built-in disaster recovery and backup solutions ensure business continuity.',
    icon: Globe
  }
];

const cloudProviders = [
  { name: 'Amazon Web Services', icon: Cloud, color: 'from-orange-500 to-yellow-500' },
  { name: 'Microsoft Azure', icon: Cloud, color: 'from-blue-500 to-cyan-500' },
  { name: 'Google Cloud Platform', icon: Cloud, color: 'from-green-500 to-emerald-500' },
  { name: 'Multi-Cloud Solutions', icon: Globe, color: 'from-purple-500 to-pink-500' }
];

const stats = [
  { number: '50%', label: 'Cost Reduction' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '3x', label: 'Performance Improvement' },
  { number: '24/7', label: 'Support Available' }
];

export default function CloudMigrationPage() {
  return (
    <MainLayout
      title="Cloud Migration Solutions - Zion Tech Group"
      description="Seamlessly migrate your infrastructure to the cloud with our comprehensive cloud migration services including AWS, Azure, and Google Cloud Platform."
      keywords="cloud migration, AWS migration, Azure migration, Google Cloud, cloud services, infrastructure migration, cloud consulting"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
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
                <h1 className="text-4xl md:text-6xl font-bold">
                  Cloud{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Migration Solutions
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Seamlessly migrate your infrastructure to the cloud with our comprehensive migration services. 
                We support AWS, Azure, Google Cloud, and multi-cloud solutions for optimal performance and cost efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Cloud Migration
                </Link>
                <Link href="/it-services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Explore IT Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Migration Process */}
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
                Our Migration Process
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We follow a proven methodology to ensure successful cloud migration with minimal downtime 
                and maximum performance optimization.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {phases.map((phase, index) => {
                const IconComponent = phase.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {phase.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {phase.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Activities:</h4>
                      <ul className="space-y-2">
                        {phase.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cloud Providers */}
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
                Cloud Providers We Support
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We work with all major cloud providers to ensure you get the best solution for your specific needs 
                and budget requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cloudProviders.map((provider, index) => {
                const IconComponent = provider.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${provider.color} rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{provider.name}</h3>
                    <p className="text-gray-600 text-sm">
                      {provider.name === 'Multi-Cloud Solutions' 
                        ? 'Hybrid and multi-cloud strategies for maximum flexibility'
                        : 'Comprehensive migration and optimization services'
                      }
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
                Why Choose Our Cloud Migration?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our cloud migration solutions deliver measurable improvements in cost, performance, 
                security, and business continuity.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center p-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Migrate to the Cloud?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our cloud migration experts help you seamlessly transition to the cloud with minimal downtime and maximum benefits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Cloud Migration
                </Link>
                <Link href="/it-services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Explore IT Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}