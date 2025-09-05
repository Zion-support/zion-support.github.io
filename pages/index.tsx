import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, Zap, Shield, ArrowRight, CheckCircle, Users, Globe, Award, Phone, Mail, MapPin, Cpu, Rocket, Car, Eye } from 'lucide-react';
=======
import MainLayout from '../components/layout/MainLayout';
import SEOHead from '../components/SEOHead';
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
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6

const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '2,500+', label: 'Projects Completed' },
  { number: '305+', label: 'Services & Solutions' },
  { number: '150+', label: 'Expert Team Members' },
  { number: '18+', label: 'Years Experience' }
];

const services = [
  {
    title: "AI Services",
    description: "100+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, autonomous systems, drug discovery, climate analytics, space technology, and advanced analytics with real-world applications",
    icon: Brain,
    href: "/ai-services",
    count: "100+ Solutions",
    pricing: "Starting at $1,800/month",
    marketPrice: "$3,000-20,000/month",
    benefits: ["40-60% accuracy improvement", "80% automation", "25-35% ROI increase", "Future-proof technology"],
    categories: ["Machine Learning", "Computer Vision", "NLP", "Quantum AI", "Healthcare AI", "Climate AI", "Space AI"]
  },
  {
<<<<<<< HEAD
    title: "IT Services", 
    description: "85+ comprehensive IT services from cloud infrastructure to cybersecurity, quantum computing, blockchain, IoT, AR/VR, space technology, edge computing, and enterprise digital transformation",
    icon: Network,
    href: "/it-services",
    count: "85+ Services",
    pricing: "Starting at $800/month",
    marketPrice: "$1,500-15,000/month",
    benefits: ["99.9% uptime", "50% cost reduction", "24/7 support", "Future-ready infrastructure"],
    categories: ["Cloud Computing", "Cybersecurity", "DevOps", "Quantum Computing", "Blockchain", "IoT", "AR/VR"]
  },
  {
    title: "Micro SaaS",
    description: "120+ innovative micro SaaS solutions for modern businesses across all industries including AI-powered tools, quantum security, blockchain analytics, space technology, and autonomous systems with real-time pricing and instant deployment",
    icon: Cloud,
    href: "/micro-saas",
    count: "120+ Platforms",
    pricing: "Starting at $19/month",
    marketPrice: "$50-4,999/month",
    benefits: ["10x productivity", "Instant setup", "White-label options", "Advanced AI integration"],
    categories: ["AI Marketing", "AI Analytics", "Quantum Security", "Blockchain", "IoT Management", "AR/VR", "Space Tech"]
  }
];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading AI, IT & Micro SAAS Solutions Provider</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge AI services, IT solutions, and innovative micro SAAS platforms. Transform your business with our comprehensive technology services and solutions." />
        <meta name="keywords" content="AI development, cloud solutions, blockchain, IoT platforms, micro SAAS, IT services, technology solutions" />
        <meta property="og:title" content="Zion Tech Group - Leading Technology Solutions Provider" />
        <meta property="og:description" content="Transform your business with our AI, IT, and micro SAAS solutions. Expert technology services for modern enterprises." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
=======
    title: 'IT Services',
    description: 'Comprehensive IT infrastructure and cloud solutions',
    icon: Cloud,
    features: ['Cloud Infrastructure', 'Cybersecurity', 'Network Management', 'System Administration'],
    href: '/services'
  },
  {
    title: 'Micro SaaS',
    description: 'Specialized software solutions for specific business needs',
    icon: Rocket,
    features: ['Custom Applications', 'API Development', 'Database Solutions', 'Integration Services'],
    href: '/micro-saas'
  }
];

const featuredServices = [
  {
    title: 'AI-Powered Analytics',
    description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
    icon: '🤖',
    features: ['Real-time Processing', 'Predictive Modeling', 'Custom Dashboards', 'API Integration'],
    price: 'Starting at $2,999/month'
  },
  {
    title: 'Cloud Migration',
    description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime.',
    icon: '☁️',
    features: ['Zero Downtime', 'Cost Optimization', 'Security Compliance', '24/7 Support'],
    price: 'Starting at $1,499/month'
  },
  {
    title: 'Custom Development',
    description: 'Build tailored solutions that perfectly fit your business requirements.',
    icon: '⚡',
    features: ['Agile Development', 'Modern Tech Stack', 'Scalable Architecture', 'Ongoing Support'],
    price: 'Starting at $3,999/month'
  }
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with end-to-end encryption and compliance certifications.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: '200+ certified professionals with deep expertise in cutting-edge technologies.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock support to ensure your systems run smoothly at all times.'
  },
  {
    icon: DollarSign,
    title: 'Cost Effective',
    description: 'Transparent pricing with no hidden costs and flexible payment options.'
  }
];

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "info@ziontechgroup.com",
  address: "123 Innovation Drive, Tech City, TC 12345"
};

export default function HomePage() {
  return (
<<<<<<< HEAD
    <MainLayout
      title="Zion Tech Group - Leading Technology Solutions"
      description="Transform your business with our comprehensive technology services including AI solutions, cloud services, cybersecurity, and custom development."
      keywords="AI services, cloud solutions, cybersecurity, custom development, IT services, technology consulting, enterprise solutions"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
<<<<<<< HEAD
                Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI & Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, quantum computing, blockchain, IoT, and digital transformation services. We deliver 235+ innovative solutions to transform your business with cutting-edge technology and expert implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
=======
                Transform Your Business with
                <span className="block text-yellow-400">Cutting-Edge Technology</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                Leading provider of AI solutions, cloud services, and custom development. 
                Empowering businesses to thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors flex items-center justify-center"
                >
>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
<<<<<<< HEAD
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
=======
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We provide comprehensive technology solutions to help your business thrive in the digital age. From innovative micro SaaS applications to cutting-edge AI services, quantum computing, blockchain solutions, and enterprise IT infrastructure. Our 305+ services cover every aspect of modern technology needs with competitive pricing and proven results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-blue-600 mb-4 group-hover:text-purple-600 transition-colors">
                      <IconComponent className="w-10 h-10 md:w-12 md:h-12" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {service.count}
                      </span>
                      {service.benefits && service.benefits.slice(0, 2).map((benefit, idx) => (
                        <span key={idx} className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-green-600">
                          {service.pricing}
                        </span>
                        {service.marketPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {service.marketPrice}
                          </span>
                        )}
                      </div>
                      {service.marketPrice && (
                        <div className="text-xs text-green-600 font-medium">
                          Save up to 40% vs market rate
                        </div>
                      )}
                    </div>
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

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
=======
=======
    <MainLayout>
      <SEOHead 
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Revolutionary AI solutions, enterprise IT services, and innovative micro SaaS products. Transform your business with cutting-edge technology from quantum computing to metaverse intelligence."
        keywords="AI solutions, IT services, micro SaaS, quantum computing, blockchain, machine learning, digital transformation, enterprise technology"
      />
      <div id="main-content" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-0e40

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
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

<<<<<<< HEAD
        {/* Innovative Technologies Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
=======
        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
            <motion.div
              initial={{ opacity: 0, y: 30 }}
<<<<<<< HEAD
              whileInView={{ opacity: 1, y: 0 }}
=======
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">
                    <service.icon className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-500 space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most popular and effective technology solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-500 space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through innovation, expertise, and dedication
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cutting-Edge Technologies
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We leverage the latest technologies to deliver innovative solutions that drive business growth and competitive advantage.
=======
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our technology solutions can drive your success
>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Quantum Computing",
                  description: "Quantum algorithms and quantum-resistant security solutions",
                  icon: Cpu,
                  color: "from-purple-500 to-indigo-600",
                  features: ["Quantum algorithms", "Post-quantum cryptography", "Quantum simulation", "Quantum optimization"]
                },
                {
                  title: "Space Technology",
                  description: "Satellite data analysis and space mission optimization",
                  icon: Rocket,
                  color: "from-blue-500 to-cyan-600",
                  features: ["Satellite analytics", "Mission planning", "Space weather", "Orbital mechanics"]
                },
                {
                  title: "Autonomous Systems",
                  description: "AI-powered autonomous vehicles and robotic systems",
                  icon: Car,
                  color: "from-green-500 to-emerald-600",
                  features: ["Autonomous vehicles", "Drone fleets", "Robotic automation", "Safety systems"]
                },
                {
                  title: "AR/VR Solutions",
                  description: "Immersive augmented and virtual reality experiences",
                  icon: Eye,
                  color: "from-pink-500 to-rose-600",
                  features: ["AR applications", "VR experiences", "3D content", "Mixed reality"]
                }
              ].map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{tech.description}</p>
                    <ul className="space-y-2">
                      {tech.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-500 flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
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

        {/* Market Position & Pricing Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We deliver cutting-edge technology solutions with competitive pricing and unmatched expertise.
                Our comprehensive service portfolio covers everything from micro SaaS development to enterprise AI solutions.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">💰 Competitive Pricing</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Micro SaaS: $19 - $4,999/month</li>
                  <li>• IT Services: $120 - $500/hour</li>
                  <li>• AI Solutions: $1,000 - $1M/project</li>
                  <li>• Blockchain: $50K - $500K/project</li>
                  <li>• Quantum Computing: $100K - $1M/project</li>
                  <li>• Transparent, no hidden fees</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 Innovation Focus</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• 100+ cutting-edge services</li>
                  <li>• AI, Blockchain, IoT, Quantum expertise</li>
                  <li>• Metaverse & AR/VR solutions</li>
                  <li>• Space technology infrastructure</li>
                  <li>• Future-ready technology stack</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">📞 Expert Support</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• 24/7 technical support</li>
                  <li>• Dedicated project managers</li>
                  <li>• Free consultation & quotes</li>
                  <li>• Rapid response times</li>
                </ul>
              </motion.div>
            </div>
            <motion.div
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-lg mb-6">
                Contact us today for a free consultation and custom quote tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-center sm:text-left">
                  <p className="text-blue-100 mb-1">📞 <strong>Call:</strong> +1 302 464 0950</p>
                  <p className="text-blue-100 mb-1">📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
                  <p className="text-blue-100">📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
                <Link href="/contact" className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">Get Free Quote</Link>
              </div>
            </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our expert team help you leverage cutting-edge technology to drive growth and innovation.
                <br className="hidden md:block" />
                <span className="text-blue-200 font-semibold">Get your free consultation today!</span>
              </p>
              <div className="mb-8">
                <p className="text-lg text-blue-100 mb-2">
                  📞 <strong>Call us:</strong> +1 302 464 0950
                </p>
                <p className="text-lg text-blue-100 mb-2">
                  📧 <strong>Email us:</strong> kleber@ziontechgroup.com
                </p>
                <p className="text-lg text-blue-100">
                  📍 <strong>Visit us:</strong> 364 E Main St STE 1008, Middletown DE 19709
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
=======
                <Link
                  href="/contact"
                  className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors flex items-center justify-center"
                >
>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
<<<<<<< HEAD
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Learn About Us
=======
                <Link
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </>
=======
    </MainLayout>
>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
  );
}