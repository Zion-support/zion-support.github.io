import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Star, Users, Award } from 'lucide-react'
import MainLayout from '../components/layout/MainLayout'

export default function HomePage() {
  return (
    <MainLayout
      title="Zion Tech Group - Technology Solutions"
      description="Leading technology solutions in AI, cybersecurity, cloud, and digital transformation."
      keywords="AI, cybersecurity, cloud, digital transformation, technology solutions">
      <Head>
        <title>Zion Tech Group - Technology Solutions</title>
        <meta name="description" content="Leading technology solutions in AI, cybersecurity, cloud, and digital transformation." />
      </Head>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl font-bold mb-6">
                  Transform Your Business with Technology
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Leading technology solutions in AI, cybersecurity, cloud infrastructure, and digital transformation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/services"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center transition-colors"
                  >
                    Explore Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-xl text-gray-600">
                  We deliver cutting-edge technology solutions that drive real business results.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: Star,
                    title: "AI Innovation",
                    description: "Advanced AI solutions that transform your business operations and decision-making."
                  },
                  {
                    icon: Award,
                    title: "Cybersecurity",
                    description: "Enterprise-grade security solutions to protect your digital assets and data."
                  },
                  {
                    icon: Users,
                    title: "Cloud Infrastructure",
                    description: "Scalable cloud solutions that grow with your business needs."
                  },
                  {
                    icon: CheckCircle,
                    title: "Digital Transformation",
                    description: "Complete digital transformation strategies that modernize your business."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how our technology solutions can help you achieve your goals.
              </p>
              <Link
                href="/contact"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
              >
                Contact Us Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}