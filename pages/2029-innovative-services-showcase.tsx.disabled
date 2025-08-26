import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Target, ArrowRight, CheckCircle, Star, 
  Phone, Mail, MapPin
} from 'lucide-react';

// Mock data for services
const mockServices = [
  {
    id: 'ai-analytics',
    name: 'AI-Powered Analytics Platform',
    category: ['AI', 'Machine Learning'],
    description: 'Intelligent insights and predictive analytics for your business',
    price: '$499/month',
    features: ['Real-time data processing', 'Machine learning models', 'Custom dashboards']
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing Solutions',
    category: ['Emerging', 'Quantum'],
    description: 'Next-generation quantum computing services',
    price: '$2,999/month',
    features: ['Quantum algorithms', 'Hardware optimization', 'Research support']
  },
  {
    id: 'biotech-platform',
    name: 'Biotech Innovation Platform',
    category: ['Biotech', 'Healthcare'],
    description: 'Cutting-edge biotechnology solutions',
    price: '$1,999/month',
    features: ['Drug discovery', 'Clinical trials', 'Data analysis']
  },
  {
    id: 'business-automation',
    name: 'Business Process Automation',
    category: ['Business', 'Automation'],
    description: 'Streamline your business operations',
    price: '$799/month',
    features: ['Workflow automation', 'Process optimization', 'Integration tools']
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function InnovativeServicesShowcase2029() {
  const serviceCategories = [
    {
      title: '🚀 AI & Machine Learning',
      icon: Brain,
      color: 'from-violet-600 via-purple-600 to-indigo-600',
      services: mockServices.filter(s => s.category.some(cat => cat.includes('AI') || cat.includes('Machine Learning')))
    },
    {
      title: '⚛️ Emerging Technology',
      icon: Atom,
      color: 'from-indigo-600 via-blue-600 to-cyan-600',
      services: mockServices.filter(s => s.category.some(cat => cat.includes('Emerging') || cat.includes('Quantum')))
    },
    {
      title: '🎯 Business Solutions',
      icon: Target,
      color: 'from-cyan-600 via-teal-600 to-emerald-600',
      services: mockServices.filter(s => s.category.some(cat => cat.includes('Business') || cat.includes('Automation')))
    }
  ];

  return (
    <>
      <Head>
        <title>2029 Innovative Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Discover our cutting-edge 2029 innovative services including AI autonomous ecosystems, emerging tech breakthroughs, and practical business solutions. Transform your business with next-generation technology." />
        <meta name="keywords" content="2029 services, AI autonomous, emerging technology, business solutions, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/2029-innovative-services-showcase" />
      </Head>
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="py-32 bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-8">
                2029 Innovative Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
                Experience the future of technology with our revolutionary AI autonomous ecosystems, 
                emerging tech breakthroughs, and practical business solutions that will transform your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
                  Get Started
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Revolutionary Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 2029 services are organized into three cutting-edge categories, each designed to 
                revolutionize different aspects of business and technology.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-500 transition-all duration-500"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mx-auto mb-6 flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{category.title}</h3>
                  <p className="text-gray-400 text-center mb-6">
                    {category.services.length} cutting-edge services available
                  </p>
                  <div className="space-y-3">
                    {category.services.slice(0, 3).map((service, serviceIndex) => (
                      <div key={serviceIndex} className="bg-gray-800/50 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-2">{service.name}</h4>
                        <p className="text-gray-400 text-sm mb-2">{service.description}</p>
                        <div className="text-blue-400 font-semibold">{service.price}</div>
                      </div>
                    ))}
                  </div>
                  {category.services.length > 3 && (
                    <div className="text-center mt-4">
                      <span className="text-gray-400 text-sm">+{category.services.length - 3} more services</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Complete Service Catalog
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our complete portfolio of innovative services designed to transform your business 
                and keep you ahead of the competition.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-500 transition-all duration-500"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-gray-400 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/services/${service.id}`}
                      className="flex-1 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-sm"
                    >
                      Learn More
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 text-center border border-purple-500 text-purple-400 py-2 px-4 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 text-sm"
                    >
                      Get Started
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Contact our team to discuss your specific needs and get a personalized quote 
                for our revolutionary 2029 services.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="flex items-center justify-center gap-4 text-gray-300">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center gap-4 text-gray-300">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center gap-4 text-gray-300">
                  <MapPin className="w-6 h-6 text-green-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-lg">
                    Contact Us Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/2029-comprehensive-pricing" className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 text-lg">
                    View Pricing
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-800">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>&copy; 2029 Zion Tech Group. All rights reserved.</p>
            <p className="mt-2">
              <a href={contactInfo.website} className="text-blue-400 hover:text-blue-300">
                {contactInfo.website}
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}