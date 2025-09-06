import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Wifi, 
  Cpu, 
  Database, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Award, 
  Phone, 
  Mail, 
  MapPin,
  Zap,
  Globe,
  Lock
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const features = [
  {
    icon: Wifi,
    title: 'Device Management',
    description: 'Comprehensive IoT device management with real-time monitoring and control capabilities.'
  },
  {
    icon: Cpu,
    title: 'Edge Computing',
    description: 'Process data at the edge for faster response times and reduced latency.'
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Advanced analytics and insights from your IoT data streams.'
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Enterprise-grade security for all connected devices and data transmission.'
  }
];

const services = [
  {
    title: 'IoT Platform Development',
    description: 'Custom IoT platforms with device connectivity, data processing, and analytics.',
    features: ['Device Connectivity', 'Real-time Monitoring', 'Data Processing', 'Analytics Dashboard'],
    pricing: 'Starting at $8,000'
  },
  {
    title: 'Smart City Solutions',
    description: 'Comprehensive smart city infrastructure with sensors, monitoring, and automation.',
    features: ['Traffic Management', 'Environmental Monitoring', 'Energy Management', 'Public Safety'],
    pricing: 'Starting at $25,000'
  },
  {
    title: 'Industrial IoT',
    description: 'Manufacturing and industrial IoT solutions for process optimization and monitoring.',
    features: ['Predictive Maintenance', 'Quality Control', 'Asset Tracking', 'Process Optimization'],
    pricing: 'Starting at $15,000'
  },
  {
    title: 'IoT Integration',
    description: 'Integrate existing systems with IoT capabilities and data connectivity.',
    features: ['Legacy Integration', 'API Development', 'Data Migration', 'System Monitoring'],
    pricing: 'Starting at $5,000'
  }
];

const stats = [
  { number: '100+', label: 'IoT Devices Connected' },
  { number: '50+', label: 'Smart Projects' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Monitoring' }
];

export default function IoTPage() {
  return (
    <MainLayout
      title="IoT Solutions - Zion Tech Group"
      description="Expert IoT development services including smart city solutions, industrial IoT, device management, and edge computing platforms."
      keywords="IoT development, smart city, industrial IoT, edge computing, device management, connected devices"
      canonical="https://ziontechgroup.com/iot"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              IoT Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-gray-200"
            >
              Connect, monitor, and optimize with our comprehensive IoT solutions. 
              From smart cities to industrial automation, we build the future of connected devices.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Get Started Today
              </Link>
              <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                View Case Studies
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IoT Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end IoT solutions that connect devices, process data, and deliver actionable insights.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-green-600 mb-4">
                    <IconComponent className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IoT development services for smart cities, industrial automation, and connected solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">{service.pricing}</span>
                  <Link 
                    href="/contact"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
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
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Connect Your World?</h2>
            <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
              Let's build intelligent IoT solutions that transform your business operations and create new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Start Your Project
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}