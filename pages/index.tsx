import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Brain, Network, Cloud, ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '99%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' }
];

const services = [
  {
    title: 'AI Services',
    description: 'Cutting-edge artificial intelligence solutions for your business',
    icon: Brain,
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    link: '/ai-services'
  },
  {
    title: 'IT Services',
    description: 'Comprehensive IT infrastructure and support solutions',
    icon: Network,
    features: ['Cloud Migration', 'Network Security', 'System Administration', 'Technical Support'],
    link: '/it-services'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and management services',
    icon: Cloud,
    features: ['AWS/Azure/GCP', 'Auto-scaling', 'Disaster Recovery', 'Cost Optimization'],
    link: '/cloud-solutions'
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Technology Solutions for Modern Businesses</title>
        <meta name="description" content="Leading provider of AI services, IT solutions, and cloud infrastructure. Transform your business with cutting-edge technology." />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Business with Technology
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Leading provider of AI services, IT solutions, and cloud infrastructure
              </p>
              <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-8">
                We help businesses harness the power of cutting-edge technology to drive innovation, efficiency, and growth.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to meet your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  
                  <ul className="mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center mb-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your project and discover how we can help transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}