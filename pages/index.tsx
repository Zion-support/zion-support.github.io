import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { services, getServicesByCategory } from '../data/services';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, Play, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Home: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const microSaasServices = getServicesByCategory('micro-saas');
  const itServices = getServicesByCategory('it-services');
  const aiServices = getServicesByCategory('ai-services');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Transform Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Zion Tech Group</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200"
          >
            Leading technology solutions provider helping businesses transform their digital presence 
            with cutting-edge AI, cloud architecture, and innovative development services.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg">
              Get Started Today
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">
              Explore Services
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-blue-400">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-purple-400">50+</div>
              <div className="text-gray-300">Team Members</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-indigo-400">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-cyan-400">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive technology solutions to help your business thrive in the digital age.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Micro SaaS Services */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-blue-600 mb-4">
                <Zap className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro SaaS Solutions</h3>
              <p className="text-gray-600 mb-6">
                Innovative, focused software solutions that solve specific business problems with minimal overhead.
              </p>
              <Link href="/services/micro-saas" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                Learn More →
              </Link>
            </motion.div>

            {/* IT Services */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-blue-600 mb-4">
                <Shield className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Services</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive IT infrastructure, cloud migration, and cybersecurity solutions for modern businesses.
              </p>
              <Link href="/services/it-services" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                Learn More →
              </Link>
            </motion.div>

            {/* AI Services */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-blue-600 mb-4">
                <Globe className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Services</h3>
              <p className="text-gray-600 mb-6">
                Cutting-edge artificial intelligence solutions to automate processes and gain competitive advantages.
              </p>
              <Link href="/services/ai-services" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                Learn More →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Let's discuss how we can help transform your business with cutting-edge technology solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg">
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;