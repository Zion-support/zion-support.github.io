import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Globe, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Shield,
  Zap,
  Heart
} from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '1000+', label: 'Projects Completed' },
    { number: '100+', label: 'Expert Team Members' },
    { number: '150+', label: 'Services Available' },
    { number: '50+', label: 'Countries Served' }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new possibilities and pushing boundaries.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Your data and systems are protected with enterprise-grade security measures and best practices.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by the value we deliver to our clients.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We build solutions that make a difference, contributing to positive change in communities worldwide.'
    }
  ];

  const team = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in AI and technology innovation.',
      image: '/team/kleber.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Technical architect specializing in scalable cloud solutions.',
      image: '/team/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      description: 'Leading expert in machine learning and quantum computing.',
      image: '/team/michael.jpg'
    }
  ];

  return (
    <>
      <Head>
        <title>About Us | Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're leading the future of technology with innovative AI and IT solutions." />
        <meta name="keywords" content="about us, company, team, mission, values, technology, AI, IT services" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Leading the future of technology with innovative solutions, 
                cutting-edge AI, and comprehensive IT services that transform businesses.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                To democratize access to cutting-edge technology and AI solutions, 
                empowering businesses of all sizes to achieve their full potential 
                through innovative, scalable, and secure technology solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We continuously push the boundaries of what's possible with technology.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
                <p className="text-gray-600">
                  We work closely with our clients to understand and solve their unique challenges.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We deliver exceptional results that exceed expectations every time.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Impact
              </h2>
              <p className="text-xl text-blue-100">
                Numbers that speak to our commitment and success
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-100">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our culture
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The brilliant minds behind our innovative solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get In Touch
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}