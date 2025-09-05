import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import {
  Users,
  Target,
  Award,
  Heart,
  Lightbulb,
  Handshake,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Code,
  Brain,
  Database,
  Cloud,
  Lock,
  Eye,
  BarChart3,
  Smartphone,
  Laptop,
  Server,
  Cpu,
  Settings,
  Rocket,
  BookOpen,
  MessageSquare,
  Calendar,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'
import Layout from '../components/Layout'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly push the boundaries of what\'s possible with technology, always seeking new and better ways to solve problems.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We conduct business with the highest ethical standards, building trust through transparency and honest communication.'
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, delivering solutions that exceed expectations and drive real results.'
  },
  {
    icon: Handshake,
    title: 'Client Success',
    description: 'Our success is measured by our clients\' success. We are committed to being true partners in their growth journey.'
  }
];

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    image: '/team/sarah-chen.jpg',
    bio: 'Leading AI research and development with 15+ years of experience in machine learning and quantum computing.',
    expertise: ['AI/ML', 'Quantum Computing', 'Research']
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Cloud Architecture',
    image: '/team/michael-rodriguez.jpg',
    bio: 'Expert in scalable cloud solutions and infrastructure design with a focus on security and performance.',
    expertise: ['Cloud Architecture', 'DevOps', 'Security']
  },
  {
    name: 'Emily Johnson',
    role: 'Lead Developer',
    image: '/team/emily-johnson.jpg',
    bio: 'Full-stack developer specializing in modern web technologies and microservices architecture.',
    expertise: ['Full-Stack Development', 'Microservices', 'Web Technologies']
  },
  {
    name: 'David Kim',
    role: 'AI Solutions Architect',
    image: '/team/david-kim.jpg',
    bio: 'Designing intelligent systems that solve complex business problems using cutting-edge AI technologies.',
    expertise: ['AI Solutions', 'System Design', 'Business Intelligence']
  }
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Team Members' },
  { number: '10+', label: 'Years Experience' }
];

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're passionate about delivering innovative AI and technology solutions." />
        <meta name="keywords" content="about us, team, mission, values, AI company, technology solutions" />
      </Head>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Pioneering the future of AI and technology solutions with innovation, integrity, and excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                To democratize access to cutting-edge AI and technology solutions, empowering businesses of all sizes to achieve their digital transformation goals and unlock their full potential.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Vision</h3>
                  <p className="text-gray-600">
                    To be the global leader in AI-powered solutions, creating a world where technology seamlessly integrates with human potential to solve the world's most complex challenges.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Values</h3>
                  <p className="text-gray-600">
                    Innovation, integrity, excellence, and client success drive everything we do. We believe in building lasting partnerships based on trust and mutual growth.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Our Core Values
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, cloud computing, and digital transformation.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Our Impact
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
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
                Ready to Work With Us?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how our team can help transform your business with cutting-edge AI and technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get in Touch
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  )
}