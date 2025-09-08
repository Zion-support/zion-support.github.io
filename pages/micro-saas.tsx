import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Heart, 
  Building, 
  Cloud,
  Zap,
  Shield,
  Bot,
  Database,
  Sprout,
  FileText,
  MessageSquare,
  Layers,
  Clock,
  TrendingUp,
  Brain,
  Calendar,
  Headphones,
  RefreshCw,
  Video,
  Stethoscope,
  Cpu,
  Image,
  Mail,
  Search,
  BarChart3,
  Users,
  Globe,
  Lock,
  Star,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Target,
  Award,
  DollarSign,
  Trash2,
  Camera,
  HardDrive,
  Droplets
} from 'lucide-react';
import Layout from '../components/Layout';

export default function MicroSaaS() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }
];

export default function MicroSaaS() {
  return (
    <Layout
      title="Micro SaaS Services - Zion Tech Group"
      description="Discover our innovative micro SaaS solutions designed to solve specific business problems with affordable, scalable tools."
      keywords="micro saas, software as a service, business tools, productivity, automation, affordable software"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  SaaS
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our innovative micro SaaS solutions designed to solve specific business problems 
                with affordable, scalable tools.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Micro SaaS Solutions</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Affordable, focused tools that solve specific business challenges
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {microSaasServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-indigo-100 rounded-lg">
                          <service.icon className="w-6 h-6 text-indigo-600" />
                        </div>
                        {service.popular && (
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="font-semibold">Category:</span>
                          <span className="ml-2">{service.category}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="font-semibold">Pricing:</span>
                          <span className="ml-2 text-green-600 font-semibold">{service.pricing}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="font-semibold">Market Price:</span>
                          <span className="ml-2">{service.marketPrice}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <ArrowRight className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href={service.link}
                        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 font-semibold flex items-center justify-center"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Contact us to learn more about our micro SaaS solutions and how they can help your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors font-semibold"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/ai-services"
                    className="px-8 py-4 border-2 border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-500 hover:text-white transition-colors font-semibold"
                  >
                    View AI Services
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
