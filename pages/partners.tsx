import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, Handshake, Users, Award, CheckCircle, ArrowRight, Star, Building, Shield, Zap } from 'lucide-react';
import Layout from '../components/Layout';

const partnershipTypes = [
  {
    title: 'Technology Partners',
    description: 'Strategic partnerships with leading technology providers to deliver best-in-class solutions.',
    icon: Globe,
    benefits: ['Access to cutting-edge technology', 'Joint product development', 'Technical support'],
    requirements: ['Proven track record', 'Technical expertise', 'Market presence']
  },
  {
    title: 'Implementation Partners',
    description: 'Certified partners who help implement and customize our solutions for clients.',
    icon: Handshake,
    benefits: ['Certification programs', 'Training and support', 'Revenue sharing'],
    requirements: ['Technical certification', 'Project experience', 'Client references']
  },
  {
    title: 'Channel Partners',
    description: 'Reseller partners who market and sell our solutions to their customer base.',
    icon: Users,
    benefits: ['Competitive pricing', 'Marketing support', 'Sales training'],
    requirements: ['Sales expertise', 'Customer base', 'Market knowledge']
  },
  {
    title: 'Strategic Partners',
    description: 'Long-term partnerships for joint ventures and strategic initiatives.',
    icon: Award,
    benefits: ['Joint ventures', 'Market expansion', 'Innovation collaboration'],
    requirements: ['Strategic alignment', 'Financial stability', 'Long-term commitment']
  }
];

const currentPartners = [
  {
    name: 'Microsoft',
    logo: '/api/placeholder/200/100',
    type: 'Technology Partner',
    description: 'Cloud infrastructure and AI services',
    since: '2020'
  },
  {
    name: 'Amazon Web Services',
    logo: '/api/placeholder/200/100',
    type: 'Technology Partner',
    description: 'Cloud computing and machine learning',
    since: '2019'
  },
  {
    name: 'Google Cloud',
    logo: '/api/placeholder/200/100',
    type: 'Technology Partner',
    description: 'AI and data analytics solutions',
    since: '2021'
  },
  {
    name: 'Salesforce',
    logo: '/api/placeholder/200/100',
    type: 'Strategic Partner',
    description: 'CRM and business automation',
    since: '2020'
  }
];

export default function PartnersPage() {
  return (
    <Layout title="Partners - Zion Tech Group">
      <Head>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group's innovative solutions." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Partner with Us
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Join our ecosystem of innovative partners and unlock new opportunities for growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Become a Partner
                </Link>
                <Link href="#partnerships" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  View Opportunities
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section id="partnerships" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
                <p className="text-xl text-gray-600">
                  Choose the partnership model that best fits your business goals
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {partnershipTypes.map((type, index) => (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200"
                  >
                    <div className="flex items-center mb-4">
                      <type.icon className="h-8 w-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {type.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {type.requirements.map((requirement, reqIndex) => (
                          <li key={reqIndex} className="flex items-center text-sm text-gray-600">
                            <Star className="h-4 w-4 text-yellow-500 mr-2" />
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                      Learn More <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
                <p className="text-xl text-gray-600">
                  Trusted by industry leaders worldwide
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {currentPartners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center"
                  >
                    <div className="w-32 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 font-semibold">{partner.name}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h3>
                    <p className="text-sm text-blue-600 font-medium mb-1">{partner.type}</p>
                    <p className="text-sm text-gray-600 mb-2">{partner.description}</p>
                    <p className="text-xs text-gray-500">Partner since {partner.since}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner with Us?</h2>
                <p className="text-xl text-gray-600">
                  Join a growing ecosystem of successful partners
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                  <p className="text-gray-600">Join partners who have achieved significant growth and success with our solutions.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Support</h3>
                  <p className="text-gray-600">Get training, marketing support, and technical assistance to ensure your success.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation Focus</h3>
                  <p className="text-gray-600">Be part of cutting-edge technology solutions that shape the future of business.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join our partner ecosystem and unlock new opportunities for growth and success.
            </p>
            <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Start Your Partnership
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}