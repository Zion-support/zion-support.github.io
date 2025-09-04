import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Brain, 
  Network, 
  Cloud, 
  ArrowRight, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Lock,
  BarChart3,
  MessageSquare,
  FileText,
  Settings,
  Target,
  Lightbulb,
  Rocket
} from 'lucide-react';

const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '750+', label: 'Projects Completed' },
  { number: '60+', label: 'Technology Solutions' }
];

const services = [
  {
    title: "AI Solutions",
    description: "Cutting-edge artificial intelligence and machine learning solutions",
    icon: Brain,
    href: "/services?category=AI Solutions",
    color: "from-purple-500 to-pink-500",
    count: "20+ Solutions"
  },
  {
    title: "IT Services", 
    description: "Comprehensive information technology and infrastructure services",
    icon: Network,
    href: "/services?category=IT Services",
    color: "from-blue-500 to-cyan-500",
    count: "15+ Services"
  },
  {
    title: "Micro SaaS",
    description: "Innovative software as a service platforms and applications",
    icon: Cloud,
    href: "/services?category=Micro-SaaS",
    color: "from-green-500 to-emerald-500",
    count: "25+ Platforms"
  }
];

const featuredServices = [
  {
    title: "AI Content Generator",
    description: "Generate high-quality content with AI-powered tools and brand voice consistency",
    icon: FileText,
    price: "$79/mo",
    category: "Micro SaaS",
    href: "/services/ai-content-generator"
  },
  {
    title: "Zero Trust Security",
    description: "Complete security architecture implementation with continuous monitoring",
    icon: Shield,
    price: "From $15,000",
    category: "IT Services",
    href: "/services/zero-trust-security-implementation"
  },
  {
    title: "Predictive Analytics",
    description: "Advanced forecasting with machine learning and business intelligence",
    icon: BarChart3,
    price: "From $8,500",
    category: "AI Solutions",
    href: "/services/predictive-analytics-platform"
  },
  {
    title: "AI Social Media Manager",
    description: "Intelligent social media automation with AI-driven engagement strategies",
    icon: MessageSquare,
    price: "$89/mo",
    category: "Micro SaaS",
    href: "/services/ai-social-media-manager"
  },
  {
    title: "Blockchain NFT Marketplace",
    description: "Complete NFT marketplace with smart contracts and wallet integration",
    icon: Globe,
    price: "$199/mo",
    category: "Micro SaaS",
    href: "/services/blockchain-nft-marketplace"
  },
  {
    title: "Quantum Computing Readiness",
    description: "Future-proof your business with quantum computing assessment and integration",
    icon: Rocket,
    price: "From $25,000",
    category: "IT Services",
    href: "/services/quantum-computing-readiness"
  }
];

const benefits = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast Setup",
    description: "Get up and running in days, not months"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Team",
    description: "50+ certified professionals at your service"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Proven ROI",
    description: "Average 300% ROI within 6 months"
  }
];

const technologies = [
  { name: "AI & Machine Learning", icon: Brain },
  { name: "Cloud Infrastructure", icon: Cloud },
  { name: "Cybersecurity", icon: Shield },
  { name: "Data Analytics", icon: BarChart3 },
  { name: "DevOps & Automation", icon: Settings },
  { name: "Mobile Development", icon: Globe }
];

export default function HomePage() {
  return (
    <Layout
      title="Zion Tech Group - Leading AI & Technology Solutions"
      description="Transform your business with cutting-edge AI solutions, cloud services, and technology consulting. Expert team delivering innovative results with 99.9% uptime guarantee."
      keywords="AI solutions, cloud services, technology consulting, digital transformation, IT services, micro SaaS, cybersecurity, data analytics"
      canonical="https://ziontechgroup.com"
    >
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI & Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services. 
              <span className="text-blue-300 font-semibold"> 60+ innovative solutions</span> to accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold inline-flex items-center">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                Explore 60+ Services
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-gray-300">
              <div className="flex items-center justify-center">
                <span className="font-semibold">📞 +1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="font-semibold">✉️ kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="font-semibold">📍 Middletown, DE</span>
              </div>
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
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We provide comprehensive technology solutions to help your business thrive in the digital age. 
              From innovative micro SaaS applications to cutting-edge AI services and enterprise IT solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
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
                  <div className={`text-6xl mb-6 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    <IconComponent className="w-16 h-16" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {service.count}
                    </span>
                    <Link
                      href={service.href}
                      className="text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors inline-flex items-center"
                    >
                      <span>Explore Services</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our most popular and innovative solutions that are transforming businesses worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  onClick={() => window.location.href = service.href}
                >
                  <div className="text-blue-600 mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      {service.category}
                    </span>
                    <span className="text-sm font-bold text-gray-900">
                      {service.price}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional results with cutting-edge technology and unmatched expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Master
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage the latest technologies to deliver cutting-edge solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg text-center hover:bg-blue-50 transition-colors duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-blue-600 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {tech.name}
                  </h3>
                </motion.div>
              );
            })}
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our expert team help you leverage cutting-edge technology to drive growth and innovation. 
              Get a free consultation and discover how we can accelerate your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                Learn About Us
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
                <div className="flex items-center justify-center">
                  <span className="font-semibold">📞 +1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="font-semibold">✉️ kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="font-semibold">📍 364 E Main St STE 1008, Middletown, DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </Layout>
  );
}