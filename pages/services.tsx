import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, ArrowRight, CheckCircle, Users, Globe, Award } from 'lucide-react';

const services = [
  {
    title: "AI Services",
    description: "80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics",
    icon: Brain,
    href: "/ai-services"
  },
  {
    title: "IT Services", 
    description: "70+ comprehensive IT services from cloud infrastructure to cybersecurity, quantum computing, and zero-trust architecture",
    icon: Network,
    href: "/it-services"
  },
  {
    title: "Micro SaaS",
    description: "85+ innovative micro SaaS solutions for modern businesses across all industries with real-time pricing and market analysis",
    icon: Cloud,
    href: "/micro-saas"
  }
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI solutions, IT services, and micro SaaS platforms." />
        <meta name="keywords" content="AI services, IT services, micro SaaS, technology solutions" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions to transform your business
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-center text-white">Get In Touch</h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm text-gray-300 mb-1">Phone</p>
                  <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 font-semibold">+1 302 464 0950</a>
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Email</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 font-semibold">kleber@ziontechgroup.com</a>
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Address</p>
                  <p className="text-blue-400 font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Link 
                      href={service.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}