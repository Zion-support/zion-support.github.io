import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Brain,
  Network,
  Cloud,
  Zap,
  Shield,
  CheckCircle,
  Users,
  Globe,
  Award,
  Building,
  Rocket,
  Heart,
  DollarSign,
  ShoppingCart,
  BookOpen,
  Settings,
  BarChart3,
  Cpu,
  Car,
  MessageSquare,
  Phone,
  FileText,
  Video,
  Mic,
  Code,
  Monitor,
  Smartphone,
  Server,
  Lock,
  Star,
  TrendingUp,
  Target,
  Lightbulb,
  Handshake
} from 'lucide-react';

const stats = [
  { number: '500+', label: 'Projects Completed', icon: CheckCircle },
  { number: '200+', label: 'Happy Clients', icon: Users },
  { number: '50+', label: 'Countries Served', icon: Globe },
  { number: '99%', label: 'Client Satisfaction', icon: Star }
];

const services = [
  {
    icon: Brain,
    title: 'AI Services',
    description: 'Transform your business with cutting-edge artificial intelligence solutions.',
    href: '/ai-services',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
  },
  {
    icon: Network,
    title: 'IT Services',
    description: 'Comprehensive IT solutions to keep your business running smoothly.',
    href: '/it-services',
    features: ['Infrastructure Management', 'Cloud Migration', 'Cybersecurity', 'Technical Support']
  },
  {
    icon: Cloud,
    title: 'Micro SaaS',
    description: 'Scalable software solutions designed for modern businesses.',
    href: '/micro-saas',
    features: ['Custom Development', 'API Integration', 'Scalable Architecture', '24/7 Support']
  }
];

const solutions = [
  {
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Modernize your business processes with innovative technology solutions.',
    href: '/solutions/digital-transformation'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect your business with advanced security solutions and best practices.',
    href: '/solutions/cybersecurity'
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Turn your data into actionable insights with powerful analytics tools.',
    href: '/solutions/data-analytics'
  },
  {
    icon: Cpu,
    title: 'IoT Solutions',
    description: 'Connect and manage your devices with intelligent IoT platforms.',
    href: '/solutions/iot'
  }
];

const industries = [
  { name: 'Healthcare', icon: Heart, href: '/industries/healthcare' },
  { name: 'Finance', icon: DollarSign, href: '/industries/finance' },
  { name: 'Education', icon: BookOpen, href: '/industries/education' },
  { name: 'Manufacturing', icon: Settings, href: '/industries/manufacturing' },
  { name: 'Retail', icon: ShoppingCart, href: '/industries/retail' },
  { name: 'Government', icon: Building, href: '/industries/government' }
];

export default function HomePage() {
  return (
    <MainLayout
      title="Zion Tech Group - Leading Technology Solutions Provider"
      description="Transform your business with cutting-edge AI, IT services, and micro SaaS solutions. Expert technology consulting and implementation services."
      keywords="technology solutions, AI services, IT consulting, micro SaaS, cloud computing, digital transformation, cybersecurity, software development"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              We deliver cutting-edge AI, IT services, and micro SaaS solutions that drive innovation and growth for businesses worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </Link>
              <Link href="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive technology solutions designed to meet the unique needs of modern businesses.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technology Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of technology solutions designed to solve complex business challenges.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <Link href={solution.href} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                  Explore Solution
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have extensive experience across various industries, delivering tailored solutions that drive results.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h3>
                <Link href={industry.href} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
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
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of companies that have already transformed their operations with our innovative technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/quote" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors">
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}