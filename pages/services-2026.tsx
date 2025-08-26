import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import EnhancedNavigation from '../components/layout/EnhancedNavigation';
import Footer from '../components/layout/Footer';

export default function Services2026Page() {
  return (
    <>
      <Head>
        <title>2026 Services | Zion Tech Group - AI & Emerging Technology Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive 2026 portfolio of AI, quantum computing, emerging technology, and specialized industry solutions. Transform your business with cutting-edge innovation." />
        <meta property="og:title" content="2026 Services - Zion Tech Group" />
        <meta property="og:description" content="AI, quantum computing, emerging technology, and specialized industry solutions for 2026." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="AI services, quantum computing, emerging technology, micro SAAS, healthcare AI, fintech, manufacturing IoT, retail AI, education AI, logistics AI, Zion Tech Group" />
      </Head>
      
      <EnhancedNavigation />
      
      <div className="min-h-screen bg-black text-white pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10" />
          </div>
          
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                2026 Services Portfolio
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
                Discover the future of technology with our comprehensive portfolio of AI, quantum computing, emerging technology, and specialized industry solutions designed to transform your business in 2026 and beyond.
              </p>
              
              {/* Contact Information */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70 mb-8">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  +1 302 464 0950
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-400" />
                  kleber@ziontechgroup.com
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-400" />
                  364 E Main St STE 1008 Middletown DE 19709
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center gap-2 text-lg font-semibold"
                >
                  Visit Website <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50 text-lg font-semibold"
                >
                  Contact Sales Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service Categories
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our comprehensive portfolio covers every aspect of modern technology innovation, from AI and quantum computing to specialized industry solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI & Machine Learning */}
              <div className="bg-gradient-to-br from-blue-600/20 to-indigo-700/20 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/30">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">AI & Machine Learning</h3>
                <p className="text-white/70 mb-6">
                  Advanced AI solutions including autonomous content creation, customer success automation, financial advisory, and HR optimization.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• AI Autonomous Content Factory</li>
                  <li>• AI Customer Success Platform</li>
                  <li>• AI Financial Advisor</li>
                  <li>• AI HR Platform</li>
                </ul>
              </div>

              {/* Quantum Computing */}
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-700/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30">
                <div className="text-4xl mb-4">⚛️</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Quantum Computing</h3>
                <p className="text-white/70 mb-6">
                  Revolutionary quantum computing solutions for cryptography, optimization, and scientific research applications.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Quantum Cryptography Platform</li>
                  <li>• Quantum Optimization Engine</li>
                  <li>• Quantum Machine Learning</li>
                  <li>• Quantum Internet Protocol</li>
                </ul>
              </div>

              {/* Emerging Technology */}
              <div className="bg-gradient-to-br from-green-600/20 to-emerald-700/20 backdrop-blur-xl rounded-2xl p-8 border border-green-500/30">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Emerging Technology</h3>
                <p className="text-white/70 mb-6">
                  Cutting-edge technologies including holographic displays, brain-computer interfaces, and advanced robotics.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Holographic Display Platform</li>
                  <li>• Brain-Computer Interface</li>
                  <li>• Advanced Robotics</li>
                  <li>• Neuromorphic Computing</li>
                </ul>
              </div>

              {/* Micro SaaS Solutions */}
              <div className="bg-gradient-to-br from-orange-600/20 to-red-700/20 backdrop-blur-xl rounded-2xl p-8 border border-orange-500/30">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Micro SaaS Solutions</h3>
                <p className="text-white/70 mb-6">
                  Specialized software solutions for specific business needs and industry verticals.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Legal Document Automation</li>
                  <li>• Healthcare AI Platform</li>
                  <li>• Fintech Solutions</li>
                  <li>• E-commerce Optimization</li>
                </ul>
              </div>

              {/* Industry Solutions */}
              <div className="bg-gradient-to-br from-cyan-600/20 to-blue-700/20 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Industry Solutions</h3>
                <p className="text-white/70 mb-6">
                  Tailored solutions for manufacturing, retail, education, logistics, and other key industries.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Manufacturing IoT Platform</li>
                  <li>• Retail AI Solutions</li>
                  <li>• Education Technology</li>
                  <li>• Logistics Optimization</li>
                </ul>
              </div>

              {/* Infrastructure & Security */}
              <div className="bg-gradient-to-br from-indigo-600/20 to-purple-700/20 backdrop-blur-xl rounded-2xl p-8 border border-indigo-500/30">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold mb-4 text-indigo-400">Infrastructure & Security</h3>
                <p className="text-white/70 mb-6">
                  Next-generation infrastructure and cybersecurity solutions for modern enterprises.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Zero Trust Architecture</li>
                  <li>• Edge Computing Platform</li>
                  <li>• 5G Private Networks</li>
                  <li>• Blockchain Infrastructure</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-xl rounded-3xl p-12 border border-cyan-500/30"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
                Join the future of technology with our comprehensive 2026 services portfolio. Each solution is designed to deliver measurable ROI and competitive advantage.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-lg font-semibold"
                >
                  Start Your Transformation
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50 text-lg font-semibold"
                >
                  Explore All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}