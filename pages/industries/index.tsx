import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { Heart, DollarSign, Settings, ShoppingCart, BookOpen, Building, ArrowRight, CheckCircle, Users, Shield, Cloud, Brain } from 'lucide-react';

const industries = [
  {
    id: 1,
    name: 'Healthcare',
    icon: Heart,
    description: 'AI-powered diagnostic tools and patient care solutions',
    services: ['Medical AI', 'Patient Management', 'Data Analytics', 'Compliance']
  },
  {
    id: 2,
    name: 'Finance',
    icon: DollarSign,
    description: 'Secure financial technology and fraud detection systems',
    services: ['Fraud Detection', 'Risk Assessment', 'Payment Processing', 'Compliance']
  },
  {
    id: 3,
    name: 'E-commerce',
    icon: ShoppingCart,
    description: 'Scalable e-commerce platforms and customer experience solutions',
    services: ['Platform Development', 'Payment Integration', 'Inventory Management', 'Analytics']
  }
];

export default function Industries() {
  return (
    <>
      <Head>
        <title>Industries - Zion Tech Group</title>
        <meta name="description" content="Technology solutions tailored for specific industries including healthcare, finance, e-commerce, and more." />
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Industries</h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Technology solutions for every industry
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <industry.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{industry.name}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{industry.description}</p>
                  
                  <ul className="mb-6">
                    {industry.services.map((service, idx) => (
                      <li key={idx} className="flex items-center mb-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
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
      </Layout>
    </>
  );
}
