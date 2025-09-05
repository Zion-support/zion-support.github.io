import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  Rocket,
  Factory,
  Brain,
  Cloud,
  Shield,
  CheckCircle,
  Star,
  Users,
  Clock,
  DollarSign,
  Award,
  Globe,
  Lock,
  Cpu,
  Bot,
  FileText,
  Image,
  Video,
  Mic,
  Code,
  Settings,
  Monitor,
  Smartphone,
  Server,
  Network,
  Car,
  Rocket as RocketIcon,
  Heart,
  Building,
  Database,
  Sprout
} from 'lucide-react';

const microSaasProducts = [
  {
    id: 1,
    title: "AI-Powered Voice Assistant Builder",
    description: "Create custom voice assistants for your business with our no-code platform",
    icon: Mic,
    category: "Voice Technology",
    pricing: "$99/month",
    features: ["No-code voice assistant creation", "Multi-language support", "Custom wake words", "Analytics dashboard"],
    benefits: ["95% accuracy rate", "24/7 availability", "Easy integration", "Custom branding"]
  },
  {
    id: 2,
    title: "Smart IoT Device Manager",
    description: "Centralized management platform for all your IoT devices and sensors",
    icon: Cpu,
    category: "IoT Management",
    pricing: "$149/month",
    features: ["Device monitoring", "Remote control", "Data visualization", "Alert system"],
    benefits: ["Real-time monitoring", "Energy savings", "Predictive maintenance", "Scalable solution"]
  },
  {
    id: 3,
    title: "AI-Powered Cybersecurity Monitor",
    description: "Advanced threat detection and response system for small to medium businesses",
    icon: Shield,
    category: "Cybersecurity",
    pricing: "$199/month",
    features: ["Threat detection", "Automated response", "Compliance reporting", "Security dashboard"],
    benefits: ["99.9% threat detection", "Automated response", "Compliance ready", "24/7 monitoring"]
  }
];

const categories = [
  'Voice Technology',
  'IoT Management', 
  'Cybersecurity',
  'Supply Chain',
  'HR Technology',
  'Environmental',
  'Maintenance',
  'Education',
  'Fleet Management',
  'Energy Management',
  'Quality Assurance',
  'Customer Analytics',
  'Document Intelligence',
  'API Management',
  'Recommendation Engine',
  'Data Engineering',
  'Chat Analytics'
];

export default function MicroSaasPage() {
  return (
    <Layout
      title="Micro SaaS Solutions - Zion Tech Group"
      description="Discover our innovative micro SaaS solutions designed to solve specific business problems with powerful, focused tools."
      keywords="micro saas, saas solutions, business tools, automation, productivity"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Powerful, focused tools that solve specific business problems with precision and efficiency
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </Link>
                <Link href="/demo" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Micro SaaS Products
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each product is designed to solve a specific business challenge with powerful, easy-to-use tools
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <product.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-600">
                      {product.pricing}
                    </span>
                  </div>
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                  >
                    Learn More
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Solution Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We cover a wide range of business domains with specialized micro SaaS solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-700">
                    {category}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Discover how our micro SaaS solutions can solve your specific business challenges
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started Today
                </Link>
                <Link href="/demo" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}