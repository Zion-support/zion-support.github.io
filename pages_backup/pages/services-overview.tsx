<<<<<<< HEAD
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Brain, Server, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const serviceCategories = [
  {
    title: 'AI Services',
    description: 'Cutting-edge artificial intelligence solutions for modern businesses',
    icon: Brain,
    services: [
      'AI Email Responder',
      'Predictive Analytics',
      'Content Generation',
      'Natural Language Processing'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions for your business needs',
    icon: Server,
    services: [
      'Cloud Migration',
      'Infrastructure Management',
      'Auto-scaling Solutions',
      'Disaster Recovery'
    ],
    color: 'from-green-500 to-teal-500'
  },
  {
    title: 'Micro SaaS',
    description: 'Complete SaaS solutions designed for small and medium businesses',
    icon: Zap,
    services: [
      'SaaS Development',
      'Multi-tenant Architecture',
      'Payment Integration',
      'User Management'
    ],
    color: 'from-purple-500 to-pink-500'
  }
];

export default function ServicesOverviewPage() {
  return (
    <Layout
      title="Services Overview - Zion Tech Group"
      description="Comprehensive technology services including AI, cloud infrastructure, and micro SaaS solutions."
      keywords="services, AI services, cloud computing, SaaS, technology solutions"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth and innovation
              </p>
            </motion.div>
          </div>
        </section>


        {/* Service Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Service Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive range of technology services
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className={`h-48 bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                    <p className="text-gray-600 mb-6">{category.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {service}
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href={`/services/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your project and discover how our services can help your business succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Contact Us
                </Link>
                <Link
                  href="/demo"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Request Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
import React from 'react';
import { Helmet } from 'react-helmet-async';

const services-overview: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>services-overview | Zion Tech Group</title>
        <meta name="description" content="services-overview - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">services-overview</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default services-overview;
