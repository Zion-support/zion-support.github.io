import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Network, Server, Shield, Cloud, Database, Monitor, ArrowRight, CheckCircle } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const itServices = [
  {
    title: "Network Infrastructure",
    description: "Design, implement, and maintain robust network solutions for optimal performance",
    icon: Network,
    features: ["Network Design", "Wireless Solutions", "VPN Configuration", "Performance Optimization"]
  },
  {
    title: "System Administration",
    description: "Comprehensive system management and maintenance services",
    icon: Server,
    features: ["Server Management", "User Administration", "System Monitoring", "Backup Solutions"]
  },
  {
    title: "Cloud Migration",
    description: "Seamless migration to cloud platforms with minimal downtime",
    icon: Cloud,
    features: ["AWS Migration", "Azure Services", "Google Cloud", "Hybrid Solutions"]
  },
  {
    title: "Security Audits",
    description: "Comprehensive security assessments and vulnerability management",
    icon: Shield,
    features: ["Security Assessment", "Penetration Testing", "Compliance Audits", "Risk Management"]
  },
  {
    title: "Database Management",
    description: "Optimize and maintain your database systems for peak performance",
    icon: Database,
    features: ["Database Design", "Performance Tuning", "Data Migration", "Backup & Recovery"]
  },
  {
    title: "IT Support",
    description: "24/7 technical support and helpdesk services",
    icon: Monitor,
    features: ["Remote Support", "On-site Service", "Issue Resolution", "User Training"]
  }
];

const technologies = [
  "Microsoft Azure",
  "Amazon Web Services",
  "Google Cloud Platform",
  "VMware",
  "Cisco",
  "Fortinet",
  "Microsoft 365",
  "Active Directory"
];

const supportLevels = [
  {
    name: "Basic Support",
    description: "Essential IT support for small businesses",
    features: ["Email Support", "Remote Assistance", "Basic Troubleshooting", "Monthly Reports"],
    price: "Starting at $500/month"
  },
  {
    name: "Professional Support",
    description: "Comprehensive IT management for growing businesses",
    features: ["24/7 Phone Support", "Proactive Monitoring", "Security Management", "Quarterly Reviews"],
    price: "Starting at $1,500/month"
  },
  {
    name: "Enterprise Support",
    description: "Full-service IT solutions for large organizations",
    features: ["Dedicated Team", "Custom Solutions", "Strategic Planning", "Unlimited Support"],
    price: "Custom Pricing"
  }
];

export default function ITServicesPage() {
  return (
    <MainLayout 
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including network infrastructure, system administration, cloud migration, and security solutions."
      keywords="IT services, network infrastructure, system administration, cloud migration, security audits, IT support"
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
              Comprehensive IT Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Reliable technology solutions to keep your business running smoothly and securely
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Get IT Support
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IT Services Grid */}
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
              Our IT Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end IT services designed to optimize your technology infrastructure and operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => {
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
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
              Technologies We Work With
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're certified experts in leading enterprise technologies and platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="font-medium text-gray-700">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Levels Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Support Levels
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the support level that best fits your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportLevels.map((level, index) => (
              <motion.div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-lg ${
                  index === 1 ? 'ring-2 ring-blue-500 relative' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {level.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {level.description}
                </p>
                
                <div className="text-3xl font-bold text-blue-600 mb-6">
                  {level.price}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    index === 1
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
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
              Need Reliable IT Support?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our certified IT professionals handle your technology needs so you can focus on your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get IT Consultation
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </MainLayout>
  );
}