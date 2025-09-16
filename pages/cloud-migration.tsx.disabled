import React from 'react';
import MainLayout from './components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Cloud,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Shield,
  Zap,
  Users,
  Building2,
  Database,
  Network,
  Settings
} from 'lucide-react';

export default function CloudMigrationPage() {
  const migrationServices = [
    {
      icon: Cloud,
      title: 'AWS Migration',
      description: 'Complete migration to Amazon Web Services with zero downtime',
      features: [
        'Assessment and planning',
        'Data migration',
        'Application migration',
        'Security configuration',
        'Performance optimization',
        '24/7 monitoring'
      ],
      price: 'Starting at $5,000',
      duration: '2-4 weeks'
    },
    {
      icon: Cloud,
      title: 'Azure Migration',
      description: 'Seamless migration to Microsoft Azure cloud platform',
      features: [
        'Hybrid cloud setup',
        'Active Directory integration',
        'Office 365 migration',
        'Security compliance',
        'Cost optimization',
        'Ongoing support'
      ],
      price: 'Starting at $4,500',
      duration: '2-3 weeks'
    },
    {
      icon: Cloud,
      title: 'GCP Migration',
      description: 'Migration to Google Cloud Platform with advanced AI integration',
      features: [
        'Kubernetes migration',
        'BigQuery setup',
        'AI/ML integration',
        'Data analytics',
        'Security hardening',
        'Performance tuning'
      ],
      price: 'Starting at $6,000',
      duration: '3-5 weeks'
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description: 'Reduce infrastructure costs by up to 40%'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Improve application performance by 60%'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enhanced security with cloud-native tools'
    },
    {
      icon: Users,
      title: 'Scalability',
      description: 'Scale resources based on demand'
    }
  ];

  return (
    <MainLayout
      title="Cloud Migration Services - Zion Tech Group"
      description="Expert cloud migration services for AWS, Azure, and GCP. Seamless migration with zero downtime and enhanced performance."
      keywords="cloud migration, AWS migration, Azure migration, GCP migration, cloud services"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Expert Cloud Migration{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Seamlessly migrate your infrastructure to AWS, Azure, or GCP with our expert team. 
                Zero downtime, enhanced security, and optimized performance guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Get Free Assessment
                </Link>
                <Link
                  href="/pricing"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Migration Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cloud Migration Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive cloud migration services tailored to your specific needs and requirements.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {migrationServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                        <div className="text-sm text-gray-500">Starting price</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Duration</div>
                        <div className="font-semibold text-gray-900">{service.duration}</div>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Migration Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our expert team ensures a smooth, secure, and cost-effective cloud migration process.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Migrate to the Cloud?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Get a free cloud migration assessment and discover how we can help you 
                achieve your cloud transformation goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Get Free Assessment
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}