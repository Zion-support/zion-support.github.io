import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { ArrowRight, CheckCircle, Code, Database, Cloud, Shield, Zap, Users, TrendingUp, Clock } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CustomDevelopment: NextPage = () => {
  const features = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored applications built from scratch to meet your specific business requirements and workflows.'
    },
    {
      icon: Database,
      title: 'Database Design & Optimization',
      description: 'Scalable database architectures that ensure optimal performance and data integrity.'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Solutions',
      description: 'Modern applications designed for cloud environments with microservices architecture.'
    },
    {
      icon: Shield,
      title: 'Security-First Development',
      description: 'Built-in security measures and compliance with industry standards from day one.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'High-performance applications optimized for speed, scalability, and efficiency.'
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Intuitive interfaces designed with your users in mind for maximum adoption.'
    }
  ];

  const technologies = [
    { name: 'React & Next.js', category: 'Frontend' },
    { name: 'Node.js & Express', category: 'Backend' },
    { name: 'Python & Django', category: 'Backend' },
    { name: 'PostgreSQL & MongoDB', category: 'Database' },
    { name: 'AWS & Azure', category: 'Cloud' },
    { name: 'Docker & Kubernetes', category: 'DevOps' },
    { name: 'GraphQL & REST APIs', category: 'API' },
    { name: 'Redis & Elasticsearch', category: 'Caching' }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, define project scope, and create a detailed development roadmap.'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team designs the system architecture and creates wireframes and prototypes.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Agile development process with continuous testing and quality assurance.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Smooth deployment with ongoing maintenance and support services.'
    }
  ];

  return (
    <MainLayout
      title="Custom Development Solutions - Zion Tech Group"
      description="Transform your business with custom software development solutions. From web applications to enterprise systems, we build scalable, secure, and innovative solutions tailored to your needs."
      keywords="custom development, software development, web applications, enterprise solutions, custom software"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Custom Development
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Solutions</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your business with custom software solutions built specifically for your unique requirements. 
            From web applications to enterprise systems, we deliver scalable, secure, and innovative solutions 
            that drive growth and efficiency.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact" className="group">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg group-hover:shadow-xl">
                Start Your Project
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/solutions" className="group">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">
                View All Solutions
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Custom Development?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to build robust, scalable applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">{tech.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Custom Solution?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            Let's discuss your project requirements and create a solution that transforms your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="group">
              <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg">
                Get Started Today
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/solutions" className="group">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">
                View All Solutions
              </button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CustomDevelopment;