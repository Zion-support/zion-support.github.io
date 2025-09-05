<<<<<<< HEAD
<<<<<<< HEAD
=======
import Head from 'next/head';
>>>>>>> pr-11913
import { motion } from 'framer-motion';
import { Globe, Cloud, Zap, Users, Shield, Award, Handshake } from 'lucide-react';
<<<<<<< HEAD
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, Cloud, Zap, Users, Shield, Award, Handshake, ArrowRight } from 'lucide-react';
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
=======
import Layout from '../components/Layout';
>>>>>>> pr-11913

const partners = [
  {
    name: 'Microsoft',
<<<<<<< HEAD
<<<<<<< HEAD
    logo: '/partners/microsoft.png',
    description: 'Strategic partnership for cloud services and AI solutions',
    category: 'Technology',
    benefits: ['Azure credits', 'Technical support', 'Co-marketing opportunities'],
    icon: Cloud
  },
  {
    name: 'Amazon Web Services',
    logo: '/partners/aws.png',
    description: 'Cloud infrastructure and machine learning services',
    category: 'Cloud',
    benefits: ['AWS credits', 'Training resources', 'Joint solutions'],
    icon: Globe
  },
  {
    name: 'Google Cloud',
    logo: '/partners/google-cloud.png',
    description: 'AI and data analytics platform integration',
    category: 'AI/ML',
    benefits: ['GCP credits', 'AI/ML tools', 'Technical workshops'],
    icon: Zap
  },
  {
    name: 'Salesforce',
    logo: '/partners/salesforce.png',
    description: 'CRM integration and customer success solutions',
    category: 'CRM',
    benefits: ['Salesforce credits', 'Integration support', 'Sales enablement'],
    icon: Users
  },
  {
    name: 'Cisco',
    logo: '/partners/cisco.png',
    description: 'Network security and infrastructure solutions',
    category: 'Security',
    benefits: ['Cisco credits', 'Technical support', 'Co-marketing opportunities'],
    icon: Shield
  }
];

const partnershipTypes = [
  {
    title: 'Technology Partners',
    description: 'Integrate with leading technology platforms and services',
    icon: Cloud,
    benefits: [
      'API integrations',
      'Technical support',
      'Co-development opportunities',
      'Marketing collaboration'
    ]
  },
  {
    title: 'Solution Partners',
    description: 'Build and deliver comprehensive solutions together',
    icon: Handshake,
    benefits: [
      'Joint go-to-market',
      'Solution certification',
      'Training programs',
      'Revenue sharing'
    ]
  },
  {
    title: 'Channel Partners',
    description: 'Resell and distribute our services through your network',
    icon: Globe,
    benefits: [
      'Reseller discounts',
      'Sales training',
      'Marketing support',
      'Technical enablement'
    ]
=======
    category: 'Cloud Partner',
    description: 'Strategic partnership for Azure cloud services and AI solutions',
    logo: '/api/placeholder/200/100',
    website: 'https://microsoft.com'
  },
  {
    name: 'Amazon Web Services',
    category: 'Cloud Partner',
    description: 'Leading cloud infrastructure and AI services provider',
    logo: '/api/placeholder/200/100',
    website: 'https://aws.amazon.com'
  },
  {
    name: 'Google Cloud',
    category: 'Cloud Partner',
    description: 'Advanced AI and machine learning platform partnership',
    logo: '/api/placeholder/200/100',
    website: 'https://cloud.google.com'
  },
  {
    name: 'OpenAI',
    category: 'AI Partner',
    description: 'Exclusive partnership for cutting-edge AI technologies',
    logo: '/api/placeholder/200/100',
    website: 'https://openai.com'
  },
  {
    name: 'Salesforce',
    category: 'CRM Partner',
    description: 'Customer relationship management and business solutions',
    logo: '/api/placeholder/200/100',
    website: 'https://salesforce.com'
  },
  {
    name: 'HubSpot',
    category: 'Marketing Partner',
    description: 'Inbound marketing and sales platform integration',
    logo: '/api/placeholder/200/100',
    website: 'https://hubspot.com'
  }
];

const partnershipBenefits = [
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Access to leading cloud platforms and services'
  },
  {
    icon: Zap,
    title: 'AI Technologies',
    description: 'Cutting-edge AI and machine learning capabilities'
  },
  {
    icon: Shield,
    title: 'Security Solutions',
    description: 'Enterprise-grade security and compliance tools'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated support from our partner network'
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
  }
];

export default function PartnersPage() {
  return (
<<<<<<< HEAD
    <Layout
      title="Partners - Zion Tech Group"
      description="Join our partner ecosystem and grow your business with Zion Tech Group's technology solutions."
      keywords="partners, partnership, technology partners, solution partners, channel partners"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
=======
    <>
      <Head>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Learn about our strategic partnerships with leading technology companies and how they benefit our clients." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
<<<<<<< HEAD
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Partner With Us
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Join our growing ecosystem of partners and unlock new opportunities for growth and innovation
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Partners</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We work with industry leaders to deliver the best solutions for our clients.
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
              </p>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Partnership Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Partnership Types
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the partnership model that best fits your business goals
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <type.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <ul className="space-y-2 text-left">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Partners
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trusted by leading technology companies worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
=======
        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Partners</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our partnerships enable us to provide comprehensive solutions and cutting-edge technology.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
<<<<<<< HEAD
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                      <partner.icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{partner.name}</h3>
                      <span className="text-sm text-gray-500">{partner.category}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{partner.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 text-sm">Benefits:</h4>
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <Award className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </div>
                    ))}
=======
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-gray-400">Logo</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{partner.category}</p>
                    <p className="text-gray-600 mb-4">{partner.description}</p>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Visit Website
                      <Globe className="ml-2 w-4 h-4" />
                    </a>
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Partner With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the advantages of joining our partner ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                <p className="text-gray-600">Access to our worldwide customer base and markets</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">Cutting-edge technology and solutions</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Support</h3>
                <p className="text-gray-600">Dedicated partner support and resources</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Recognition</h3>
                <p className="text-gray-600">Partner awards and certification programs</p>
              </motion.div>
=======
        {/* Partnership Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Benefits</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our strategic partnerships provide significant advantages for our clients.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join our partner ecosystem and unlock new opportunities for growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Become a Partner
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Download Partner Kit
                </button>
=======
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Become a Partner
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Interested in partnering with us? Let's explore how we can work together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Learn More
                </Link>
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
              </div>
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </Layout>
=======
    </>
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
=======
    category: 'Cloud Partner',
    description: 'Strategic partnership for Azure cloud solutions and enterprise services.',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Amazon Web Services',
    category: 'Cloud Partner',
    description: 'Leading cloud infrastructure and AI services partnership.',
    icon: Globe,
    color: 'from-orange-500 to-yellow-500'
  },
  {
    name: 'Google Cloud',
    category: 'AI Partner',
    description: 'Advanced AI and machine learning solutions collaboration.',
    icon: Zap,
    color: 'from-green-500 to-blue-500'
  },
  {
    name: 'Salesforce',
    category: 'CRM Partner',
    description: 'Customer relationship management and business automation solutions.',
    icon: Users,
    color: 'from-blue-600 to-indigo-600'
  },
  {
    name: 'IBM',
    category: 'Enterprise Partner',
    description: 'Enterprise solutions and consulting services partnership.',
    icon: Shield,
    color: 'from-blue-700 to-purple-700'
  },
  {
    name: 'Oracle',
    category: 'Database Partner',
    description: 'Database solutions and enterprise software integration.',
    icon: Award,
    color: 'from-red-500 to-pink-500'
  }
];

export default function Partners() {
  return (
    <Layout>
      <Head>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Meet our strategic partners who help us deliver world-class technology solutions." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Partners
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Meet our strategic partners who help us deliver world-class technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map((partner, index) => {
                  const IconComponent = partner.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${partner.color} rounded-lg flex items-center justify-center mb-6`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4">
                        {partner.category}
                      </span>
                      <p className="text-gray-600">{partner.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Become a Partner
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Join our partner ecosystem and help us deliver innovative solutions to clients worldwide.
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center mx-auto">
                  <Handshake className="w-5 h-5 mr-2" />
                  Partner With Us
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
>>>>>>> pr-11913
  );
}