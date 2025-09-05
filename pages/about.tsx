import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  TrendingUp,
  Building,
  Rocket,
  Lightbulb,
  Handshake,
  Brain, 
  Users, 
  Award, 
  Target, 
  Heart, 
  Globe
} from 'lucide-react';
import Layout from '../components/Layout';

const values = [
  {
    icon: Brain,
    title: 'Innovation',
    description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of collaboration and work closely with our clients to achieve their goals.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations.'
  },
  {
    icon: Target,
    title: 'Focus',
    description: 'We maintain laser focus on our clients\' objectives and deliver results that matter.'
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We are passionate about technology and its potential to transform businesses and lives.'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'We work with clients worldwide to create solutions that make a positive global impact.'
  }
];

export default function AboutPage() {
  return (
    <Layout
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group's mission, vision, and values in delivering cutting-edge technology solutions"
      keywords="about us, company, mission, vision, values, technology solutions, AI, cloud computing"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We are a leading technology solutions provider dedicated to transforming businesses through innovative AI, cloud architecture, and cutting-edge development services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                To empower businesses with cutting-edge technology solutions that drive growth, innovation, and digital transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the global leader in AI-powered technology solutions, creating a future where technology seamlessly integrates with human potential.
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
                <p className="text-gray-600">
                  We combine deep technical expertise with business acumen to deliver solutions that not only meet current needs but anticipate future challenges.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                These core values guide everything we do and shape our culture of excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our technology solutions can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}