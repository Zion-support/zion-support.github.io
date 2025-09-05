import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
  Phone,
  Mail,
  MapPin,
  Globe,
  Zap,
  Target,
  Award,
  TrendingUp,
  BarChart3,
  Settings,
  Wifi,
  Database,
  Server,
  Monitor,
  Code,
  Lock,
  Heart,
  Home,
  Search,
  ShoppingCart,
  BookOpen,
  GraduationCap,
  Truck,
  Bot,
  Eye,
  Video,
  Mic,
  FileText,
  Smartphone,
  Laptop,
  HardDrive,
  Cpu,
  Network,
  Car,
  Sprout,
  MessageSquare,
  Package,
  Calendar,
  Trash2,
  Camera,
  UserCheck,
  Lightbulb
} from 'lucide-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge technology solutions including AI services, cloud computing, cybersecurity, and digital transformation for businesses worldwide." />
        <meta name="keywords" content="technology solutions, AI services, cloud computing, cybersecurity, digital transformation, software development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Leading the Future of <span className="text-yellow-400">Technology</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Transform your business with cutting-edge AI solutions, cloud computing, and digital innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
                  >
                    Get Started
                  </motion.button>
                </Link>
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions to drive your business forward.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "AI & Machine Learning",
                  description: "Intelligent solutions powered by artificial intelligence and machine learning technologies."
                },
                {
                  icon: Cloud,
                  title: "Cloud Computing",
                  description: "Scalable cloud infrastructure and migration services for modern businesses."
                },
                {
                  icon: Shield,
                  title: "Cybersecurity",
                  description: "Advanced security solutions to protect your digital assets and data."
                },
                {
                  icon: Code,
                  title: "Software Development",
                  description: "Custom software solutions tailored to your business needs."
                },
                {
                  icon: Database,
                  title: "Data Analytics",
                  description: "Transform your data into actionable insights and business intelligence."
                },
                {
                  icon: Users,
                  title: "Consulting",
                  description: "Strategic technology consulting to guide your digital transformation."
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through innovation, expertise, and dedication.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Proven Expertise",
                  description: "Years of experience delivering successful technology solutions across industries."
                },
                {
                  icon: Shield,
                  title: "Security First",
                  description: "Enterprise-grade security measures to protect your data and systems."
                },
                {
                  icon: Zap,
                  title: "Fast Delivery",
                  description: "Agile development processes that deliver results quickly and efficiently."
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Skilled professionals with deep expertise in cutting-edge technologies."
                },
                {
                  icon: Globe,
                  title: "Global Reach",
                  description: "Serving clients worldwide with localized support and understanding."
                },
                {
                  icon: Heart,
                  title: "Client Focused",
                  description: "Your success is our priority. We're committed to your long-term growth."
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Let's discuss how our technology solutions can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors"
                  >
                    Get Started Today
                  </motion.button>
                </Link>
                <Link href="/quote">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Get a Quote
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}