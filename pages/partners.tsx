import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Handshake, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Building2,
  Zap,
  Shield,
  Target
} from 'lucide-react';

const partnershipTypes = [
  {
    title: 'Technology Partners',
    description: 'Strategic partnerships with leading technology providers to deliver best-in-class solutions.',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    benefits: [
      'Access to cutting-edge technology',
      'Joint product development',
      'Technical support and training',
      'Co-marketing opportunities'
    ]
  },
  {
    title: 'Implementation Partners',
    description: 'Certified partners who help implement and customize our solutions for your specific needs.',
    icon: Handshake,
    color: 'from-green-500 to-emerald-500',
    benefits: [
      'Certified implementation expertise',
      'Local support and service',
      'Custom solution development',
      'Ongoing maintenance and support'
    ]
  },
  {
    title: 'Channel Partners',
    description: 'Reseller and distribution partners who help expand our market reach and customer base.',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
    benefits: [
      'Revenue sharing opportunities',
      'Marketing support and materials',
      'Sales training and certification',
      'Lead generation programs'
    ]
  },
  {
    title: 'Strategic Alliances',
    description: 'Long-term partnerships focused on mutual growth and market expansion.',
    icon: Award,
    color: 'from-orange-500 to-red-500',
    benefits: [
      'Joint go-to-market strategies',
      'Shared resources and expertise',
      'Market research collaboration',
      'Innovation partnerships'
    ]
  }
];

const currentPartners = [
  {
    name: 'Microsoft',
    logo: '/partners/microsoft.svg',
    category: 'Technology Partner',
    description: 'Cloud infrastructure and AI services',
    website: 'https://microsoft.com'
  },
  {
    name: 'Amazon Web Services',
    logo: '/partners/aws.svg',
    category: 'Technology Partner',
    description: 'Cloud computing and storage solutions',
    website: 'https://aws.amazon.com'
  },
  {
    name: 'Google Cloud',
    logo: '/partners/google-cloud.svg',
    category: 'Technology Partner',
    description: 'AI and machine learning platforms',
    website: 'https://cloud.google.com'
  },
  {
    name: 'Salesforce',
    logo: '/partners/salesforce.svg',
    category: 'Technology Partner',
    description: 'CRM and business automation',
    website: 'https://salesforce.com'
  },
  {
    name: 'Deloitte',
    logo: '/partners/deloitte.svg',
    category: 'Implementation Partner',
    description: 'Enterprise consulting and implementation',
    website: 'https://deloitte.com'
  },
  {
    name: 'Accenture',
    logo: '/partners/accenture.svg',
    category: 'Implementation Partner',
    description: 'Digital transformation services',
    website: 'https://accenture.com'
  }
];

const benefits = [
  {
    icon: Building2,
    title: 'Expanded Market Reach',
    description: 'Access new markets and customer segments through our partner network'
  },
  {
    icon: Zap,
    title: 'Faster Implementation',
    description: 'Accelerate your digital transformation with certified implementation partners'
  },
  {
    icon: Shield,
    title: 'Reduced Risk',
    description: 'Minimize implementation risks with proven methodologies and expert support'
  },
  {
    icon: Target,
    title: 'Better Outcomes',
    description: 'Achieve superior results with specialized expertise and best practices'
  }
];

export default function Partners() {
  return (
    <>
      <Head>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group's technology solutions." />
        <meta name="keywords" content="partners, partnerships, technology partners, implementation partners, channel partners" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Partner with <span className="text-yellow-400">Zion Tech Group</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Join our ecosystem of technology partners and unlock new opportunities for growth and innovation.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                Become a Partner
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Partnership Opportunities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the partnership model that best fits your business goals and capabilities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${type.color} flex items-center justify-center mb-6`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Partners
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're proud to work with industry leaders who share our commitment to innovation and excellence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                      <Building2 className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                      <p className="text-sm text-blue-600">{partner.category}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{partner.description}</p>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Visit Website
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Partner With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the advantages of joining our partner ecosystem.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Join our growing ecosystem of partners and unlock new opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors"
                >
                  Apply to Become a Partner
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}