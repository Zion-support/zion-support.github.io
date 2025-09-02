import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { getServicesByCategory } from '../../data/services';
import { ArrowRight, CheckCircle, Star, Zap, Users, Shield, Globe, Brain } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
const ServicesPage: NextPage = () => {
  const microSaasServices = getServicesByCategory('micro-saas');
  const itServices = getServicesByCategory('it-services');
  const aiServices = getServicesByCategory('ai-services');

  const serviceCategories = [
    {
      title: 'Micro SaaS Solutions',
      description: 'Innovative, focused software solutions that solve specific business problems with minimal overhead.',
      services: microSaasServices.slice(0, 4),
      icon: <Zap className="w-12 h-12" />,
      href: '/services/micro-saas',
      color: 'blue'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT infrastructure, cloud migration, and cybersecurity solutions for modern businesses.',
      services: itServices.slice(0, 4),
      icon: <Shield className="w-12 h-12" />,
      href: '/services/it-services',
      color: 'green'
    },
    {
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions to automate processes and gain competitive advantages.',
      services: aiServices.slice(0, 4),
      icon: <Brain className="w-12 h-12" />,
      href: '/services/ai-services',
      color: 'purple'
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Team',
      description: 'Experienced professionals with deep expertise in cutting-edge technologies.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast Delivery',
      description: 'Rapid development and deployment with proven methodologies.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and best practices.'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Proven Results',
      description: 'Track record of successful implementations with measurable ROI.'
    }
  ];

  return (
    <MainLayout
      title="Services - Zion Tech Group"
      description="Comprehensive technology services including micro SaaS solutions, IT services, and AI development. Transform your business with our expert team."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Comprehensive technology solutions designed to transform your business operations, 
            enhance productivity, and drive growth in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Get Free Consultation
            </Link>
            <Link href="#services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional results through innovative technology solutions, competitive pricing, and dedicated support.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-100 rounded-full group-hover:bg-purple-100 transition-colors">
                    <div className="text-blue-600 group-hover:text-purple-600 transition-colors">
                      {benefit.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive suite of technology services designed to meet your specific business needs.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className={`text-${category.color}-600 mb-6`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Featured Services:</h4>
                  <ul className="space-y-2">
                    {category.services.map((service) => (
                      <li key={service.id} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {service.name}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href={category.href}
                  className={`inline-flex items-center text-${category.color}-600 hover:text-${category.color}-700 font-semibold`}
                >
                  View All {category.title}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular and innovative solutions that are transforming businesses across industries.
            </p>
            <div className="mt-6">
              <Link href="/services/expanded" className="inline-block text-blue-600 hover:text-blue-700 font-semibold underline">
                Browse the expanded services catalog
              </Link>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <motion.div 
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{service.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-lg font-semibold text-green-600">
                    From ${service.pricing.starter}/mo
                  </div>
                  <Link 
                    href={service.link}
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:text-purple-600 transition-colors inline-flex items-center"
                  >
                    Learn More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg"
            >
              Get Custom Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and find the perfect solution for your business needs.
          </p>
          <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg shadow-lg hover:shadow-xl">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default ServicesPage;