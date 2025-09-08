import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  CheckCircle 
} from 'lucide-react';

export default function ServicesShowcase2028() {
  return (
    <>
      <Head>
        <title>2028 Futuristic Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Experience the future of technology with our cutting-edge 2028 services." />
      </Head>
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-6 py-3 text-purple-300 text-sm mb-8">
                <Sparkles className="w-4 h-4" />
                <span>2028 Future Technology</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Futuristic
                </span>
                <br />
                <span className="text-white">Services</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed mb-12">
                Experience the future of technology with our cutting-edge 2028 services. From AI consciousness to quantum internet, we&apos;re building tomorrow&apos;s solutions today.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/revolutionary-2028-pricing" 
                  className="px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>View Pricing</span>
                  <DollarSign className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
              <div>
                <div className="text-3xl font-bold text-blue-400">99.9%</div>
                <div className="text-blue-300">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400">500+</div>
                <div className="text-pink-300">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">24/7</div>
                <div className="text-cyan-300">Support Available</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Services
              </h2>
              <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                Discover our comprehensive range of futuristic services designed to transform your business and propel you into the future of technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  className="group relative p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl hover:border-purple-500/60 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Future Service {item}
                    </h3>
                    <p className="text-purple-200 mb-6">
                      Revolutionary technology that will transform your business operations and give you a competitive edge in the market.
                    </p>
                    <Link 
                      href="/services" 
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <span>Explore More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Analysis Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Market Analysis
              </h2>
              <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                Understand the market dynamics and growth potential of our futuristic services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <TrendingUp className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Market Growth</h3>
                <p className="text-purple-300 mb-6">
                  Our services target markets with exponential growth potential, with some sectors growing at 300-800% annually.
                </p>
                <div className="text-3xl font-bold text-green-400">500%+</div>
                <div className="text-purple-300">Average Annual Growth</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <DollarSign className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Market Size</h3>
                <p className="text-blue-300 mb-6">
                  Combined market size of our service categories exceeds $500 billion with rapid expansion expected.
                </p>
                <div className="text-3xl font-bold text-blue-400">$500B+</div>
                <div className="text-blue-300">Total Addressable Market</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <Shield className="w-16 h-16 text-pink-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Competitive Edge</h3>
                <p className="text-pink-300 mb-6">
                  First-to-market solutions with proprietary technology and AI algorithms that competitors cannot replicate.
                </p>
                <div className="text-3xl font-bold text-pink-400">90%</div>
                <div className="text-pink-300">Market Share in Niche</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-12">
                Join hundreds of forward-thinking companies already leveraging our futuristic services to gain competitive advantages and drive innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/case-studies" 
                  className="px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>View Case Studies</span>
                  <TrendingUp className="w-5 h-5" />
                </Link>
              </div>

              <div className="flex items-center justify-center space-x-8 text-purple-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>30-Day Free Trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>24/7 Expert Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Money-Back Guarantee</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}