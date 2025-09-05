import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, Network, Cloud, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Discover our comprehensive range of technology services including AI, IT, and Micro SaaS solutions. Expert implementation with competitive pricing." />
        <meta name="keywords" content="technology services, AI services, IT services, micro SaaS, cloud solutions, digital transformation" />
        <meta property="og:title" content="Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive technology services and solutions for modern enterprises." />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
                Our Services
                <span className="block text-blue-400">Comprehensive Technology Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with our comprehensive suite of technology services. From AI and machine learning to cloud infrastructure and micro SaaS solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <a href="tel:+13024640950" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold">
                  Call +1 302 464 0950
                </a>
              </div>
              
              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>Middletown, DE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Service Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive technology solutions across multiple categories to meet all your business needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-blue-600 group-hover:text-purple-600 transition-colors mb-4">
                  <Brain className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Services</h3>
                <p className="text-gray-600 mb-6">80+ cutting-edge AI solutions including machine learning, computer vision, NLP, and predictive analytics.</p>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    Starting at $199/month
                  </span>
                </div>
                <Link
                  href="/ai-services"
                  className="text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors inline-flex items-center"
                >
                  <span>Explore AI Services</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-blue-600 group-hover:text-purple-600 transition-colors mb-4">
                  <Network className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Services</h3>
                <p className="text-gray-600 mb-6">70+ comprehensive IT services from cloud infrastructure to cybersecurity and quantum computing.</p>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    Starting at $120/hour
                  </span>
                </div>
                <Link
                  href="/it-services"
                  className="text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors inline-flex items-center"
                >
                  <span>Explore IT Services</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-blue-600 group-hover:text-purple-600 transition-colors mb-4">
                  <Cloud className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
                <p className="text-gray-600 mb-6">85+ innovative micro SaaS solutions for modern businesses across all industries.</p>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    Starting at $19/month
                  </span>
                </div>
                <Link
                  href="/micro-saas"
                  className="text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors inline-flex items-center"
                >
                  <span>Explore Micro SaaS</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get started with our expert technology services today and experience the power of innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <a href="tel:+13024640950" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Call +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}