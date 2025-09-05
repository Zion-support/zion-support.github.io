import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Globe, Cloud, Zap, Users, Shield, Award, Users as Handshake } from 'lucide-react';
import Layout from '../components/Layout';
=======
import { Globe, Cloud, Zap, Users, Shield, Award, Handshake, ArrowRight } from 'lucide-react';
>>>>>>> main
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409

const partners = [
  {
    name: 'Microsoft',
    category: 'Cloud Partner',
    description: 'Strategic partnership for Azure cloud services and enterprise solutions',
    icon: Cloud,
    logo: '/partners/microsoft.png',
    benefits: ['Azure Integration', 'Enterprise Support', 'Scalable Solutions', 'Security Compliance']
  },
  {
    name: 'Amazon Web Services',
    category: 'Cloud Infrastructure',
    description: 'Leading cloud infrastructure provider for scalable and reliable solutions',
    icon: Globe,
    logo: '/partners/aws.png',
    benefits: ['Global Infrastructure', 'Advanced Services', 'Cost Optimization', 'High Availability']
  },
  {
    name: 'Google Cloud',
    category: 'AI & Analytics',
    description: 'AI-powered cloud solutions and advanced analytics capabilities',
    icon: Zap,
    logo: '/partners/google-cloud.png',
    benefits: ['AI Services', 'Data Analytics', 'Machine Learning', 'Innovation']
  },
  {
    name: 'IBM',
    category: 'Enterprise Solutions',
    description: 'Enterprise-grade solutions and consulting services',
    icon: Shield,
    logo: '/partners/ibm.png',
    benefits: ['Enterprise Security', 'Consulting Services', 'Legacy Integration', 'Compliance']
  },
  {
    name: 'Salesforce',
    category: 'CRM & Sales',
    description: 'Customer relationship management and sales automation solutions',
    icon: Users,
    logo: '/partners/salesforce.png',
    benefits: ['CRM Integration', 'Sales Automation', 'Customer Insights', 'Workflow Optimization']
  },
  {
    name: 'Oracle',
    category: 'Database & ERP',
    description: 'Database solutions and enterprise resource planning systems',
    icon: Award,
    logo: '/partners/oracle.png',
    benefits: ['Database Solutions', 'ERP Systems', 'Data Management', 'Enterprise Integration']
  }
];

const partnershipTypes = [
  {
    title: 'Technology Partners',
    description: 'Strategic technology partnerships for enhanced solutions',
    icon: Zap
  },
  {
    title: 'Cloud Partners',
    description: 'Cloud infrastructure and platform partnerships',
    icon: Cloud
  },
  {
    title: 'Integration Partners',
    description: 'Seamless integration and interoperability solutions',
    icon: Handshake
  },
  {
    title: 'Consulting Partners',
    description: 'Expert consulting and implementation services',
    icon: Users
  }
];

export default function PartnersPage() {
  return (
<<<<<<< HEAD
    <Layout
      title="Partners - Zion Tech Group"
      description="Discover our strategic partnerships and how they enhance our technology solutions and services."
      keywords="partners, partnerships, technology, cloud, integration, consulting"
    >
=======
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Partners
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with leading technology partners to deliver the best solutions for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <partner.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{partner.name}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{partner.description}</p>
              
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {partner.category}
                </span>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {partner.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-gray-600">
                      • {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
=======
    <>
      <Head>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Learn about our strategic partnerships with leading technology companies and how they benefit our clients." />
      </Head>

>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partners</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Strategic partnerships that enhance our technology solutions and deliver exceptional value to our clients.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Partnership Types
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We work with industry leaders across different domains to provide comprehensive solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Strategic Partners
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry leaders who help us deliver cutting-edge solutions and exceptional value.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                        <partner.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                        <span className="text-sm text-blue-600 font-medium">{partner.category}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {partner.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {partner.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Become a Partner
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Join our partner ecosystem and help us deliver innovative solutions to clients worldwide.
              </p>
              
              <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Partner Benefits
                </h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Access to cutting-edge technology and resources</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Joint marketing and sales opportunities</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Technical training and certification programs</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Dedicated partner support and resources</span>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    <Handshake className="w-5 h-5 mr-2" />
                    Become a Partner
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's explore how we can work together to deliver exceptional value to our clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <Handshake className="w-5 h-5 mr-2" />
                  Contact Us
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
    </Layout>
  );
}