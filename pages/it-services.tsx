import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Wifi,
  Monitor,
  Smartphone,
  CheckCircle,
  Star,
  Users
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const itServices = [
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions tailored to your business needs.',
    icon: Cloud,
    features: ['AWS/Azure/GCP', 'Auto-scaling', 'Disaster Recovery', 'Cost Optimization']
  },
  {
    title: 'Network Security',
    description: 'Comprehensive security solutions to protect your digital assets.',
    icon: Shield,
    features: ['Firewall Management', 'VPN Solutions', 'Threat Detection', 'Compliance']
  },
  {
    title: 'Database Management',
    description: 'Optimized database solutions for performance and reliability.',
    icon: Database,
    features: ['Performance Tuning', 'Backup & Recovery', 'Migration Services', 'Monitoring']
  },
  {
    title: 'IT Support',
    description: '24/7 technical support to keep your systems running smoothly.',
    icon: Monitor,
    features: ['Help Desk', 'Remote Support', 'System Maintenance', 'User Training']
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: 'Proven Expertise',
    description: '10+ years of experience in enterprise IT solutions.'
  },
  {
    icon: Star,
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control processes.'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated IT professionals available when you need them.'
  }
];

export default function ITServicesPage() {
  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT infrastructure and support services. Cloud solutions, network security, and 24/7 technical support for modern businesses." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IT <span className="text-blue-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Comprehensive IT infrastructure and support services designed to keep your business running efficiently and securely.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our IT Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end IT services designed to optimize your technology infrastructure
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                >
                  <div className="p-4 bg-blue-500 rounded-lg w-16 h-16 mb-4 flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our IT Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine technical expertise with business understanding to deliver IT solutions that drive real results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
                >
                  <div className="p-4 bg-green-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Optimize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our expert team help you build a robust, scalable, and secure IT environment that supports your business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Start Your IT Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}