import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  Brain, 
  Users, 
  Award, 
  Target, 
  Heart, 
  Globe, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Building, 
  Rocket, 
  Lightbulb, 
  Handshake 
} from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly push the boundaries of technology to create cutting-edge solutions that drive real business value.'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We deliver exceptional quality in every project, ensuring our clients receive the best possible outcomes.'
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We build lasting relationships based on trust, transparency, and mutual respect with our clients and partners.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients as partners, understanding their unique needs and challenges.'
  }
];

const stats = [
  { number: '430+', label: 'Services & Solutions' },
  { number: '200+', label: 'Expert Team Members' },
  { number: '20+', label: 'Years Experience' },
  { number: '99.9%', label: 'Uptime Guarantee' }
];

const team = [
  {
    name: 'Dr. Kleber Santos',
    role: 'CEO & Founder',
    description: 'Visionary leader with 20+ years in technology and AI innovation.',
    image: '/team/kleber.jpg'
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    description: 'Technology strategist specializing in cloud architecture and AI systems.',
    image: '/team/sarah.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Head of AI Research',
    description: 'AI researcher with expertise in machine learning and quantum computing.',
    image: '/team/michael.jpg'
  }
];

export default function AboutPage() {
  return (
    <Layout
      title="About Zion Tech Group - Leading Technology Solutions Provider"
      description="Learn about Zion Tech Group's mission to transform businesses through innovative AI, IT, and micro SaaS solutions. Discover our team, values, and commitment to excellence."
      keywords="about zion tech group, technology company, AI solutions, IT services, team, mission, values"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                About Zion Tech Group
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8 text-gray-200"
              >
                Transforming businesses through innovative technology solutions
              </motion.p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-8">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                efficiency, and innovation. We believe in the transformative power of AI, 
                cloud computing, and intelligent automation to solve complex business challenges.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the world's leading provider of intelligent technology solutions, 
                    enabling businesses to thrive in the digital age through innovation, 
                    excellence, and transformative technology.
                  </p>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                  <p className="text-gray-600">
                    We are committed to integrity, innovation, and excellence in everything we do. 
                    Our values guide our decisions and shape our relationships with clients, 
                    partners, and team members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
              <p className="text-xl text-blue-200">Numbers that speak to our success</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600">The experts behind our success</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Let's work together to create innovative solutions that drive your success.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/services"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}