import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import {
  Users,
  Target,
  Award,
  Heart,
  Lightbulb,
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
const values = [{
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly push the boundaries of what&apos,s possible with technology, always seeking new and better ways to solve problems.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We maintain the highest ethical standards in all our interactions, building trust through transparency and honesty.'
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, delivering solutions that exceed expectations and drive real results.'
  },
  {
    icon: Handshake,
    title: 'Client Success',
    description: 'Our success is measured by our clients&apos, success. We are committed to being true partners in their growth journey.'
  }
];

const team = [{
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    expertise: 'AI & Machine Learning',
    experience: '15+ years',
    image: '/team/sarah-chen.jpg'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Engineering',
    expertise: 'Cloud Infrastructure',
    experience: '12+ years',
    image: '/team/michael-rodriguez.jpg'
  },
  {
    name: 'Emily Watson',
    role: 'Lead Data Scientist',
    expertise: 'Data Analytics & AI',
    experience: '10+ years',
    image: '/team/emily-watson.jpg'
  },
  {
    name: 'David Kim',
    role: 'Security Architect',
    expertise: 'Cybersecurity',
    experience: '14+ years',
    image: '/team/david-kim.jpg'
  }
];

const achievements = [{
    icon: Award,
    title: 'Excellence',
    description: 'We strive for perfection in everything we do, delivering exceptional quality and exceeding client expectations.'
  },
  {
    icon: Heart,
    title: 'Client Success',
    description: 'Your success is our success. We are deeply committed to helping you achieve your business goals.'
  }]
const team = [{
    name: 'Kleber Santos',
    role: 'CEO & Founder',
    bio: 'Technology leader with over 10 years of experience in AI, cloud computing, and digital transformation.',
    image: '/team/kleber-santos.jpg',
    linkedin: 'https://linkedin.com/in/kleber-santos',
    twitter: 'https://twitter.com/kleber_santos'
  }]
const stats = [
  { number: '150+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '5+', label: 'Years Experience' },
  { number: '24/7', label: 'Support Available' }]
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
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We're passionate about transforming businesses through innovative AI and technology solutions
              </p>
                  </motion.div>
                  <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                To be the global leader in AI-powered technology solutions, setting the standard for innovation and excellence.
              </p>
                  </motion.div>
                  <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
                  <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                  <p className="text-gray-600 leading-relaxed">
                Innovation, integrity, excellence, and client success are the core values that guide everything we do.
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our culture.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (}
                <motion.div}
                  key={index}
className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }} ">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                  </motion.div>
              );
            })}
          </div>
                  </div>
                  </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
                  <div className="container mx-auto px-4">
                  <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert professionals dedicated to delivering exceptional technology solutions.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (}
              <motion.div}
                key={index}
className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  To democratize access to cutting-edge AI and technology solutions, empowering businesses of all sizes to innovate, grow, and succeed in the digital age.
                </p>
                <p className="text-lg text-gray-600">
                  We believe that every business, regardless of size or industry, should have access to the transformative power of artificial intelligence and modern technology. Our mission is to make this vision a reality by delivering practical, scalable, and cost-effective solutions that drive real business value.
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
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our work and define our culture
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {}
              const IconComponent = achievement.icon;}
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
                  </div>
                  </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
                  <div className="container mx-auto px-4">
                  <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl sm: text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in our company&apos,s growth and evolution.
            </p>
                  </motion.div>
                  <div className="max-w-4xl mx-auto">
                  <div className="space-y-8">
              {timeline.map((item, index) => (}
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                      <Users className="w-16 h-16 text-blue-600" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {member.bio}
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href={member.linkedin}
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Users className="w-5 h-5" />
                      </a>
                      <a
                        href={member.twitter}
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageSquare className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
<h2 className="text-3xl md: text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let&apos,s discuss how our team can help transform your business with cutting-edge technology solutions.
            </p>
                  <div className="flex flex-col sm: flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get in Touch
              </Link>
                  <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                View Our Services
              </Link>
                  </div>
                  </motion.div>
                  </div>
                  </section>
                  </div>
    </MainLayout>
}