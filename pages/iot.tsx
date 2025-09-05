import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Wifi, 
  Cpu, 
  Smartphone, 
  Cloud, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Database,
  Globe,
  Settings,
  BarChart3,
  Smartphone as Device,
  Building,
  Car,
  Home
} from 'lucide-react';
import Layout from './components/Layout';

const iotServices = [
  {
    title: "IoT Device Development",
    description: "Custom IoT devices and sensors for data collection and monitoring",
    icon: Device,
    features: ["Sensor integration", "Edge computing", "Power optimization", "Real-time data"]
  },
  {
    title: "IoT Platform Development",
    description: "Scalable IoT platforms for device management and data processing",
    icon: Cloud,
    features: ["Device management", "Data analytics", "User dashboards", "API integration"]
  },
  {
    title: "Edge Computing Solutions",
    description: "Edge computing infrastructure for real-time data processing",
    icon: Cpu,
    features: ["Local processing", "Low latency", "Offline capability", "Resource optimization"]
  },
  {
    title: "IoT Security",
    description: "Comprehensive security solutions for IoT ecosystems",
    icon: Shield,
    features: ["Device authentication", "Data encryption", "Network security", "Compliance"]
  }
];

const industries = [
  {
    name: "Smart Manufacturing",
    description: "Industrial IoT solutions for predictive maintenance and automation",
    icon: Building,
    applications: ["Predictive maintenance", "Quality control", "Asset tracking", "Energy management"]
  },
  {
    name: "Smart Cities",
    description: "Urban IoT solutions for traffic, utilities, and public services",
    icon: Globe,
    applications: ["Traffic management", "Air quality monitoring", "Smart lighting", "Waste management"]
  },
  {
    name: "Smart Homes",
    description: "Residential IoT solutions for comfort, security, and efficiency",
    icon: Home,
    applications: ["Home automation", "Security systems", "Energy management", "Climate control"]
  },
  {
    name: "Connected Vehicles",
    description: "Automotive IoT solutions for fleet management and telematics",
    icon: Car,
    applications: ["Fleet tracking", "Driver behavior", "Predictive maintenance", "Route optimization"]
  }
];

const technologies = [
  "Arduino", "Raspberry Pi", "ESP32", "LoRaWAN", "NB-IoT", 
  "MQTT", "CoAP", "AWS IoT", "Azure IoT", "Google Cloud IoT"
];

export default function IoT() {
  return (
    <Layout 
      title="IoT Solutions & Development | Zion Tech Group"
      description="Expert IoT development services including device development, platform solutions, edge computing, and smart city implementations."
      keywords="IoT development, Internet of Things, smart devices, edge computing, IoT platform, connected devices, smart cities"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-blue-900 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              IoT Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8">
              Connect the physical and digital worlds with our comprehensive IoT development services. From smart devices to intelligent platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-green-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Start Your IoT Project
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our IoT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end IoT solutions from device development to platform deployment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {iotServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              IoT solutions tailored for different industries and use cases
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {industry.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {industry.description}
                </p>
                <ul className="space-y-2">
                  {industry.applications.map((app, idx) => (
                    <li key={idx} className="text-sm text-gray-600">
                      • {app}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technologies for robust IoT solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-gray-800 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Connect Your World?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your IoT project and explore how we can help you build connected solutions that transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Start Your Project
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}