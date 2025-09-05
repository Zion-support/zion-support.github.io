import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, Zap, Shield, ArrowRight, CheckCircle, Users, Globe, Award, Phone, Mail, MapPin } from 'lucide-react';
import Layout from '../components/Layout';

const services = [
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Cutting-edge artificial intelligence solutions for your business',
    features: ['Machine Learning', 'Computer Vision', 'Natural Language Processing', 'Predictive Analytics'],
    link: '/ai-services',
    count: '150+',
    color: 'from-blue-500 to-purple-600'
  },
  {
    icon: Network,
    title: 'IT Services',
    description: 'Comprehensive IT infrastructure and management services',
    features: ['Cloud Infrastructure', 'Cybersecurity', 'Network Management', 'System Administration'],
    link: '/it-services',
    count: '80+',
    color: 'from-green-500 to-blue-600'
  },
  {
    icon: Cloud,
    title: 'Micro SaaS',
    description: 'Innovative micro software-as-a-service solutions',
    features: ['AI-Powered Tools', 'Automation', 'Analytics', 'Integration'],
    link: '/micro-saas',
    count: '200+',
    color: 'from-purple-500 to-pink-600'
  }
];

const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '5,000+', label: 'Projects Completed' },
  { number: '130+', label: 'Services & Solutions' },
  { number: '300+', label: 'Expert Team Members' },
  { number: '25+', label: 'Years Experience' }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechCorp Inc.',
    role: 'CTO',
    content: 'Zion Tech Group transformed our AI capabilities. Their expertise and dedication are unmatched.',
    rating: 5,
    avatar: '/images/testimonials/sarah.jpg'
  },
  {
    name: 'Michael Chen',
    company: 'StartupXYZ',
    role: 'Founder',
    content: 'The micro SaaS solutions they built for us have revolutionized our business operations.',
    rating: 5,
    avatar: '/images/testimonials/michael.jpg'
  },
  {
    name: 'Emily Rodriguez',
    company: 'Enterprise Solutions',
    role: 'IT Director',
    content: 'Outstanding IT services and support. They helped us modernize our entire infrastructure.',
    rating: 5,
    avatar: '/images/testimonials/emily.jpg'
  }
];

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance and rapid deployment'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.9% uptime'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: '300+ certified professionals at your service'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving clients worldwide with local expertise'
  }
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your Business with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {' '}AI & Technology
                </span>
              </h1>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                Leading provider of AI solutions, IT services, and micro SaaS platforms. 
                Empowering businesses to innovate, scale, and succeed in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      <feature.icon className="w-8 h-8 mx-auto mb-2 text-blue-300" />
                      <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                      <p className="text-xs text-gray-300">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
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
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-blue-600 font-semibold">{service.count} Projects</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by industry leaders and growing businesses worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how our AI and technology solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-400">info@ziontechgroup.com</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-400">123 Tech Street, Innovation City</p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}