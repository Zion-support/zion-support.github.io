import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Wifi, 
  Cpu, 
  Shield, 
  BarChart3, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Award,
  TrendingUp,
  DollarSign,
  Clock,
  Star,
  Zap,
  Globe,
  Lock
} from 'lucide-react';
import Layout from '../components/Layout';

const iotServices = [
  {
    title: "Smart Device Development",
    description: "Custom IoT devices and sensors for industrial and consumer applications",
    icon: Cpu,
    features: ["Sensor integration", "Edge computing", "Real-time data processing", "Device management"],
    pricing: "Starting at $8,000"
  },
  {
    title: "IoT Platform Development",
    description: "Complete IoT platforms with device management, data analytics, and visualization",
    icon: BarChart3,
    features: ["Device connectivity", "Data ingestion", "Analytics dashboard", "Alert systems"],
    pricing: "Starting at $15,000"
  },
  {
    title: "Industrial IoT (IIoT)",
    description: "Smart manufacturing and industrial automation solutions",
    icon: Zap,
    features: ["Predictive maintenance", "Process optimization", "Quality control", "Safety monitoring"],
    pricing: "Starting at $25,000"
  },
  {
    title: "Smart City Solutions",
    description: "Urban IoT solutions for traffic, energy, and infrastructure management",
    icon: Globe,
    features: ["Traffic management", "Energy monitoring", "Waste management", "Public safety"],
    pricing: "Starting at $50,000"
  }
];

const benefits = [
  {
    title: "Real-time Monitoring",
    description: "Continuous monitoring and control of connected devices and systems",
    icon: BarChart3
  },
  {
    title: "Predictive Analytics",
    description: "AI-powered insights to predict maintenance needs and optimize operations",
    icon: TrendingUp
  },
  {
    title: "Cost Reduction",
    description: "Automated processes and optimized resource utilization",
    icon: DollarSign
  },
  {
    title: "Enhanced Security",
    description: "End-to-end security for IoT devices and data transmission",
    icon: Shield
  }
];

const stats = [
  { number: '100+', label: 'IoT Devices Deployed' },
  { number: '99.9%', label: 'Device Uptime' },
  { number: '24/7', label: 'Monitoring' },
  { number: '50+', label: 'Connected Systems' }
];

export default function IoTServices() {
  return (
    <Layout 
      title="IoT Solutions & Development | Zion Tech Group"
      description="Expert IoT development services including smart devices, industrial IoT, smart city solutions, and connected systems."
      keywords="IoT development, smart devices, industrial IoT, connected systems, edge computing, sensor networks"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                IoT Solutions & Development
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Connect, monitor, and optimize with cutting-edge IoT technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-green-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Get Started
                </Link>
                <Link 
                  href="/quote" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our IoT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive IoT solutions for modern connected businesses
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {iotServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-green-600 font-semibold">{service.pricing}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose IoT?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your business with connected technology and smart automation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Connect Your World?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Let's build the IoT solution that transforms your business operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Start Your Project
                </Link>
                <Link 
                  href="/case-studies" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}