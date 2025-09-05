import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, ArrowRight } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '1000+', label: 'Projects Completed' },
  { number: '110+', label: 'Services Offered' },
  { number: '75+', label: 'Expert Team Members' }
];

const services = [
  {
    title: "AI Services",
    description: "Cutting-edge artificial intelligence solutions",
    icon: Brain,
    href: "/ai-services",
  },
  {
    title: "IT Services", 
    description: "Comprehensive information technology services",
    icon: Network,
    href: "/it-services",
  },
  {
    title: "Micro SaaS",
    description: "Scalable software as a service solutions",
    icon: Cloud,
    href: "/micro-saas",
  }
];

export default function HomePage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        {/* Background Animation */}
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
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Cutting-Edge Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Zion Tech Group delivers innovative AI, IT, and Micro SaaS solutions 
              that drive growth, efficiency, and competitive advantage for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 rounded-lg font-semibold transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI-powered automation to cloud infrastructure, we provide end-to-end 
              technology solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business? Contact our expert team for a free consultation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">💰 Competitive Pricing</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Micro SaaS: $29 - $4,999/month</li>
                <li>• IT Services: $120 - $500/hour</li>
                <li>• AI Solutions: $1,000 - $1M/project</li>
                <li>• Transparent, no hidden fees</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 Innovation Focus</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 110+ cutting-edge services</li>
                <li>• AI, Blockchain, IoT, 5G expertise</li>
                <li>• Quantum computing solutions</li>
                <li>• Future-ready technology stack</li>
                <li>• Industry-leading innovation</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">📞 Expert Support</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 24/7 technical support</li>
                <li>• Dedicated project managers</li>
                <li>• Free consultation & quotes</li>
                <li>• Rapid response times</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6">
              Contact us today for a free consultation and custom quote tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center sm:text-left">
                <p className="text-blue-100 mb-1">📞 <strong>Call:</strong> +1 302 464 0950</p>
                <p className="text-blue-100 mb-1">📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
                <p className="text-blue-100">📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
              <Link href="/contact" className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get Free Quote
              </Link>
            </div>
          </motion.div>
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
              Let our expert team help you leverage cutting-edge technology to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get Free Consultation
              </Link>
              <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      </div>
    </MainLayout>
  );
}