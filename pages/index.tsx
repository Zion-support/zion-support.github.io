import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, ArrowRight, CheckCircle, Star, Users, Award } from 'lucide-react';
import Layout from '../components/Layout';

const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Expert Team Members' }
];

const services = [
  {
    title: "AI Services",
    description: "Cutting-edge artificial intelligence solutions for modern businesses",
    icon: Brain,
    href: "/ai-services",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
  },
  {
    title: "IT Services", 
    description: "Comprehensive information technology services and infrastructure",
    icon: Network,
    href: "/it-services",
    features: ["Cloud Migration", "Cybersecurity", "Network Management", "System Integration"]
  },
  {
    title: "Micro SaaS",
    description: "Scalable software as a service solutions for growing businesses",
    icon: Cloud,
    href: "/micro-saas",
    features: ["Custom Applications", "API Development", "Database Design", "User Management"]
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    role: "CTO",
    content: "Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%.",
    rating: 5
  },
  {
    name: "Michael Chen",
    company: "StartupXYZ",
    role: "Founder",
    content: "The micro SaaS platform they built for us has been a game-changer. We've scaled from 0 to 10,000 users in 6 months.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    company: "Enterprise Solutions",
    role: "VP Technology",
    content: "Outstanding service and expertise. They delivered our project on time and exceeded all expectations.",
    rating: 5
  }
];

export default function HomePage() {
  return (
    <Layout>
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
              Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-blue-300 hover:text-blue-200">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-blue-300 hover:text-blue-200">+1 302 464 0950</a> for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Get Started Today
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

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
              We provide comprehensive technology solutions to help your business thrive in the digital age. From innovative micro SaaS applications to cutting-edge AI services and enterprise IT solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="h-12 w-12 text-blue-600 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-sm text-blue-600 font-semibold">{service.count}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-lg font-semibold text-blue-600">{service.pricing}</span>
                  </div>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
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
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our proven track record speaks for itself
            </p>
          </motion.div>

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
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
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
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Get Started
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
    </div>
  );
}
