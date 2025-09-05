<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, Zap, Shield, ArrowRight, CheckCircle, Users, Globe, Award } from 'lucide-react';
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
import Layout from '../components/Layout';

const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Countries Served' }
];

const contactInfo = {
  phone: '+1 (302) 464-0950',
  email: 'info@ziontechgroup.com',
  address: '123 Business Ave, Suite 100, Wilmington, DE 19801'
};

const services = [
  {
    title: 'AI Services',
<<<<<<< HEAD
    description: 'Cutting-edge artificial intelligence solutions for your business',
    icon: Brain,
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    href: '/ai-services'
  },
  {
    title: 'IT Services',
    description: 'Comprehensive IT infrastructure and cloud solutions',
    icon: Network,
    features: ['Cloud Infrastructure', 'Cybersecurity', 'Network Management', 'System Administration'],
    href: '/it-services'
  },
  {
    title: 'Micro SaaS',
    description: 'Specialized software solutions for specific business needs',
    icon: Cloud,
    features: ['Custom Development', 'Scalable Architecture', 'API Integration', 'Maintenance Support'],
    href: '/micro-saas'
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
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
=======
    description: '20+ cutting-edge AI solutions including machine learning, computer vision, NLP, and quantum AI',
    icon: Brain,
    link: '/ai-services',
    color: 'from-blue-500 to-purple-600',
    stats: '20+ AI Solutions',
    pricing: 'Starting at $1,800/month'
  },
  {
    title: 'IT Services',
    description: '25+ comprehensive IT services from cloud infrastructure to quantum computing and 6G networks',
    icon: Network,
    link: '/it-services',
    color: 'from-green-500 to-blue-600',
    stats: '25+ IT Services',
    pricing: 'Starting at $1,999/month'
  },
  {
    title: 'Micro SAAS',
    description: '30+ innovative micro SaaS solutions for modern businesses across all industries',
    icon: Cloud,
    link: '/micro-saas',
    color: 'from-purple-500 to-pink-600',
    stats: '30+ SaaS Solutions',
    pricing: 'Starting at $15/month'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure, migration services, and DevOps automation',
    icon: Globe,
    link: '/cloud-solutions',
    color: 'from-indigo-500 to-cyan-600',
    stats: 'Multi-Cloud Support',
    pricing: 'Starting at $1,800/month'
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced security solutions with AI-powered threat detection and zero-trust architecture',
    icon: Shield,
    link: '/cybersecurity',
    color: 'from-red-500 to-orange-600',
    stats: '24/7 Protection',
    pricing: 'Starting at $2,000/month'
  },
  {
    title: 'Quantum Computing',
    description: 'Next-generation quantum computing infrastructure and quantum AI solutions',
    icon: Cpu,
    link: '/quantum-computing',
    color: 'from-violet-500 to-purple-600',
    stats: 'Future Technology',
    pricing: 'Starting at $19,999/month'
  }
];

const features = [
  {
    title: 'Lightning Fast',
    description: 'Optimized performance with sub-second response times',
    icon: Zap
  },
  {
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.9% uptime guarantee',
    icon: Shield
  },
  {
    title: 'Global Reach',
    description: 'Serving clients worldwide with local support',
    icon: Globe
  },
  {
    title: 'Award Winning',
    description: 'Recognized for excellence in technology innovation',
    icon: Award
  }
];

export default function HomePage() {
  return (
    <Layout
      title="Zion Tech Group - Leading Technology Solutions"
      description="Transform your business with our comprehensive AI services, IT solutions, and micro SAAS platforms. Expert technology solutions for modern businesses."
      keywords="AI services, IT solutions, micro SAAS, technology, innovation, business transformation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
<<<<<<< HEAD
              Transform Your Business with 
              <span className="text-blue-400"> Zion Tech Group</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-gray-200"
            >
              Leading provider of AI services, IT solutions, and innovative micro SAAS platforms. 
              We help businesses scale, automate, and innovate with cutting-edge technology.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            >
              <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Explore Our Services
              </Link>
              <Link href="/products" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                View Products
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid md:grid-cols-3 gap-8 mt-16"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-4">AI & Machine Learning</h3>
                <p className="text-gray-200">Custom AI solutions, ML models, and intelligent automation for your business needs.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-semibold mb-4">Cloud & Infrastructure</h3>
                <p className="text-gray-200">Scalable cloud solutions, DevOps, and infrastructure design for modern applications.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-4">Micro SAAS Platforms</h3>
                <p className="text-gray-200">Innovative micro SAAS solutions and automation tools for business growth.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI & Technology</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Leading provider of innovative AI services, IT solutions, and micro SAAS platforms. 
                Empowering businesses to thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Services
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
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
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

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth and innovation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {service.stats}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-bold text-green-600">{service.pricing}</span>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">(4.9/5)</span>
                    </div>
                  </div>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through innovation, expertise, and unwavering commitment to your success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get In Touch With Our Experts
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to transform your business? Contact our team of experts for a free consultation and personalized solution.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
<<<<<<< HEAD
                <div className="flex items-center mb-6">
                  <service.icon className="w-12 h-12 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-blue-200">Proven track record of delivering exceptional results</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300">Ready to transform your business? Let's discuss your project</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">{contactInfo.phone}</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-300">{contactInfo.address}</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg inline-flex items-center"
            >
              Contact Us Today <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
=======
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 mb-4">Call us for immediate assistance</p>
                <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800 font-semibold text-lg">
                  +1 302 464 0950
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Send us a message anytime</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-800 font-semibold text-lg">
                  kleber@ziontechgroup.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600 mb-4">Visit our headquarters</p>
                <p className="text-gray-700 font-medium">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how our innovative solutions can help you achieve your goals and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get Started Today
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
  );
}
