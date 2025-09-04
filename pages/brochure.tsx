import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Download, FileText, ArrowRight, CheckCircle } from 'lucide-react'

const SEO = dynamic(() => import('../src/components/SEO'), { ssr: fals e })
const PageTransition = dynamic(() => import('../src/components/PageTransition'), { ssr: fals e })

const BrochurePage: Reac t.FC = () => {
  const brochures = [
    {
      id: 1,
      title: "AI Services Brochure",
      description: "Comprehensive guide to our AI and machine learning services",
      category: "AI Services",
      size: "2.4 MB",
      pages: 1 2,
      features: [
        "Machine Learning Solutions",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI Consulting"
      ]
    },
    {
      id: 2,
      title: "IT Services Portfolio",
      description: "Complete overview of our IT infrastructure and support services",
      category: "IT Services",
      size: "3.1 MB",
      pages: 1 6,
      features: [
        "Cloud Infrastructure",
        "Cybersecurity Solutions",
        "Network Management",
        "System Integration",
        "24/7 Support"
      ]
    },
    {
      id: 3,
      title: "Micro SaaS Solutions",
      description: "Innovative micro SaaS products and development services",
      category: "Micro SaaS",
      size: "2.8 MB",
      pages: 1 4,
      features: [
        "Custom SaaS Development",
        "API Integration",
        "Scalable Architecture",
        "Performance Optimization",
        "Maintenance & Support"
      ]
    },
    {
      id: 4,
      title: "Blockchain Solutions",
      description: "Cutting-edge blockchain technology and cryptocurrency services",
      category: "Blockchain",
      size: "2.2 MB",
      pages: 1 0,
      features: [
        "Smart Contract Development",
        "DeFi Solutions",
        "NFT Platforms",
        "Cryptocurrency Integration",
        "Blockchain Consulting"
      ]
    },
    {
      id: 5,
      title: "Complete Service Catalog",
      description: "All-in-one brochure covering all our services and solutions",
      category: "Complete",
      size: "5.2 MB",
      pages: 2 8,
      features: [
        "All AI Services",
        "Complete IT Solutions",
        "Full Micro SaaS Portfolio",
        "Blockchain Services",
        "Consulting & Support"
      ]
    }
  ]

  return (
    <>
      <SEO title="Download Brochures - Zion Tech Group"
        description="Download our comprehensive brochures to learn more about our AI services, IT solutions, and micro SaaS development capabilities."
        keywords="brochures, downloads, AI services, IT solutions, micro SaaS, Zion Tech Group"
        canonical="https://ziontechgroup.com/brochure"
       />
      
      <PageTransition>
        <main className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
            <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
              <motion.div
                initial={{ opacity: 0, y: 2 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h1 className="text-4xl md: tex t-6xl font-bold text-gray-900 mb-6">
                  Download Our
                  <span className="text-blue-600"> Brochures</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Get detailed information about our comprehensive range of AI services, IT solutions, and micro SaaS development capabilities.
                </p>
                <div className="flex flex-col sm: fle x-row gap-4 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <Download className="w-5 h-5"  />
                    Download All Brochures
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <FileText className="w-5 h-5"  />
                    View Online
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Brochures Grid */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
              <motion.div
                initial={{ opacity: 0, y: 2 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-4">
                  Available Brochures
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Choose from our comprehensive collection of service brochures
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-3 gap-8">
                {brochures.map((brochure, index) => (
                  <motion.div
                    key={brochure.id}
                    initial={{ opacity: 0, y: 2 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: inde x * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover: shado w-xl transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {brochure.category}
                        </span>
                        <div className="text-sm text-gray-500">
                          {brochure.size}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {brochure.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6">
                        {brochure.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {brochure.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500"  />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                        <span>{brochure.pages} pages</span>
                        <span>PDF Format</span>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 transition-colors"
                      >
                        <Download className="w-5 h-5"  />
                        Download Now
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
              <motion.div
                initial={{ opacity: 0, y: 2 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-6">
                  Need More Information?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Our team is ready to provide detailed information about any of our services. Contact us for personalized consultations and custom solutions.
                </p>
                <div className="flex flex-col sm: fle x-row gap-4 justify-center">
                  <motion.a
                    href="tel:+13024640950"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5"  />
                    Call Us: +1 302 464 0950
                  </motion.a>
                  <motion.a
                    href="mailto: klebe r@ziontechgroup.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5"  />
                    Email Us
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </PageTransition>
    </>
  )
}

export default BrochurePage