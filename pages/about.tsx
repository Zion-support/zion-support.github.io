import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  Users,
  Award,
  Target,
  Heart,
  Globe,
  Shield,
  Zap,
  CheckCircle,
  Star,
  TrendingUp,
  Building,
  Rocket,
  Lightbulb
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for perfection in every project, ensuring the highest quality standards.'
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We are passionate about technology and its potential to transform businesses.'
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We build long-term relationships with our clients based on trust and mutual success.'
  }
];

const team = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'CEO & Founder',
    image: '/api/placeholder/300/300',
    bio: 'Visionary leader with 15+ years in AI and technology innovation.'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: '/api/placeholder/300/300',
    bio: 'Expert in cloud architecture and scalable systems design.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of AI Research',
    image: '/api/placeholder/300/300',
    bio: 'Leading researcher in machine learning and neural networks.'
  },
  {
    name: 'David Kim',
    role: 'VP of Engineering',
    image: '/api/placeholder/300/300',
    bio: 'Full-stack development expert with focus on microservices.'
  }
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Enterprise Clients' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' }
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and the team behind our innovative technology solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About <span className="text-blue-400">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                We are a leading technology company dedicated to transforming businesses through innovative AI, IT, and Micro SaaS solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-500 rounded-lg mr-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-gray-300 text-lg">
                  To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We believe in the transformative power of AI, cloud computing, and digital platforms.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-purple-500 rounded-lg mr-4">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-gray-300 text-lg">
                  To be the global leader in technology innovation, creating a future where every business can leverage advanced AI and digital solutions to achieve unprecedented success.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                >
                  <div className="p-4 bg-blue-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The brilliant minds behind our innovative solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                >
                  <div className="w-24 h-24 bg-gray-600 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Join hundreds of companies that trust Zion Tech Group for their technology needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}