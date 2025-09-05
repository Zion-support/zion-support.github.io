import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Server, Shield, Cloud, Database, CheckCircle, ArrowRight } from 'lucide-react';

const itServices = [
  {
    id: 1,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions for modern businesses',
    icon: Cloud,
    features: ['AWS/Azure/GCP Setup', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery'],
    pricing: '$2,000 - $10,000/month',
    popular: true
  },
  {
    id: 2,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your business',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
    pricing: '$1,500 - $8,000/month',
    popular: false
  },
  {
    id: 3,
    title: 'Database Management',
    description: 'Optimized database solutions for performance and reliability',
    icon: Database,
    features: ['Database Design', 'Performance Optimization', 'Backup & Recovery', 'Migration'],
    pricing: '$1,000 - $5,000/month',
    popular: false
  }
];

export default function ITServices() {
  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Professional IT services including cloud infrastructure, cybersecurity, and database management solutions." />
      </Head>
      
      <Layout>
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">IT Services</h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Comprehensive IT solutions for modern businesses
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  
                  <ul className="mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center mb-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                      {service.popular && (
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-medium">
                          Popular
                        </span>
                      )}
                    </div>
                    <Link
                      href="/contact"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}