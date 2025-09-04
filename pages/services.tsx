import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, Shield, Database, Code, ArrowRight, CheckCircle } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const mainServices = [
  {
    title: "AI Services",
    description: "Cutting-edge artificial intelligence solutions to transform your business operations",
    icon: Brain,
    href: "/ai-services",
    features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
  },
  {
    title: "IT Services", 
    description: "Comprehensive information technology services for modern businesses",
    icon: Network,
    href: "/it-services",
    features: ["Network Infrastructure", "System Administration", "Cloud Migration", "Security Audits"]
  },
  {
    title: "Micro SaaS",
    description: "Scalable software as a service solutions for rapid deployment",
    icon: Cloud,
    href: "/micro-saas",
    features: ["Rapid Prototyping", "Scalable Architecture", "API Development", "User Management"]
  }
];

const additionalServices = [
  {
    title: "Cybersecurity",
    description: "Protect your business with advanced security solutions",
    icon: Shield,
    features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"]
  },
  {
    title: "Data Analytics",
    description: "Transform data into actionable business insights",
    icon: Database,
    features: ["Data Visualization", "Business Intelligence", "Real-time Analytics", "Custom Dashboards"]
  },
  {
    title: "Custom Development",
    description: "Tailored software solutions for your specific needs",
    icon: Code,
    features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"]
  }
];

export default function ServicesPage() {
  return (
    <MainLayout 
      title="Our Services - Zion Tech Group"
      description="Comprehensive technology services including AI solutions, IT services, micro SaaS, cybersecurity, and custom development."
      keywords="AI services, IT services, micro SaaS, cybersecurity, data analytics, custom development"
    >
      <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Technology Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Comprehensive solutions to drive your digital transformation and business growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our flagship services designed to address the most critical technology needs of modern businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-blue-600 mb-6 group-hover:text-purple-600 transition-colors">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={service.href}
                    className="text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors inline-flex items-center"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized services to complement your core technology needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-blue-600 mb-4 mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1 text-sm text-gray-500">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us help you choose the right services for your business needs
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