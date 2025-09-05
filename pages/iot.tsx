import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Wifi, 
  Cpu, 
  BarChart3, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  Globe,
  Zap,
  Database
} from 'lucide-react';

const iotServices = [
  {
    title: "IoT Device Development",
    description: "Custom IoT devices and sensors for data collection and monitoring",
    icon: Cpu,
    features: ["Sensor Integration", "Edge Computing", "Device Management", "Real-time Monitoring"],
    price: "Starting at $8,000"
  },
  {
    title: "IoT Platform Development",
    description: "Comprehensive IoT platforms for device management and data processing",
    icon: Globe,
    features: ["Device Connectivity", "Data Processing", "User Dashboards", "Analytics"],
    price: "Starting at $15,000"
  },
  {
    title: "Industrial IoT Solutions",
    description: "IIoT solutions for manufacturing, agriculture, and industrial automation",
    icon: BarChart3,
    features: ["Process Monitoring", "Predictive Maintenance", "Quality Control", "Efficiency Optimization"],
    price: "Starting at $20,000"
  },
  {
    title: "Smart City Solutions",
    description: "IoT solutions for smart cities including traffic, energy, and environmental monitoring",
    icon: Wifi,
    features: ["Traffic Management", "Energy Monitoring", "Environmental Sensors", "Citizen Services"],
    price: "Starting at $25,000"
  }
];

const iotFeatures = [
  {
    title: "Edge Computing",
    description: "Process data locally for faster response times and reduced latency",
    icon: Zap
  },
  {
    title: "Secure Connectivity",
    description: "End-to-end encryption and secure communication protocols",
    icon: Shield
  },
  {
    title: "Scalable Architecture",
    description: "Designed to handle thousands of devices and massive data volumes",
    icon: Database
  }
];

export default function IoTPage() {
  return (
    <Layout
      title="IoT Solutions & Development - Zion Tech Group"
      description="Expert IoT development services including device development, platform creation, industrial IoT, and smart city solutions."
      keywords="IoT development, Internet of Things, smart devices, industrial IoT, edge computing, sensor networks, IoT platforms"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IoT Solutions &{' '}
                <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Connect the physical and digital worlds with our comprehensive IoT solutions. 
                From smart devices to industrial automation, we build connected systems that drive efficiency and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Your IoT Project
                </Link>
                <Link href="/pricing" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our IoT Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide end-to-end IoT solutions that connect devices, process data, and deliver 
                actionable insights for your business.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {iotServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-green-600 mb-4">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-2xl font-bold text-green-600 mb-4">
                      {service.price}
                    </div>
                    <Link
                      href="/contact"
                      className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our IoT Solutions?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We combine hardware expertise with software development to create 
                robust, scalable IoT solutions that deliver real business value.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {iotFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-green-600 mb-4">
                      <IconComponent className="w-16 h-16 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Connect Your World?</h2>
            <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
              Let's discuss your IoT project and explore how we can help you build 
              connected solutions that transform your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link href="/contact" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Start Your Project
              </Link>
              <a href="tel:+13024640950" className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call Us Now
              </a>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 mr-2" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}