import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
import Layout from '../components/Layout';

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push the boundaries of technology to deliver cutting-edge solutions that drive real business value."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and work closely with our clients to understand their unique needs and challenges."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest standards of ethics and transparency in all our business relationships and project deliveries."
  },
  {
    icon: Zap,
    title: "Excellence",
    description: "We are committed to delivering exceptional quality in everything we do, from initial consultation to final implementation."
  }
];

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in tech innovation and business strategy.",
    image: "/team/sarah.jpg"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "Expert in AI/ML and cloud architecture with a passion for scalable solutions.",
    image: "/team/michael.jpg"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Cybersecurity",
    bio: "Security specialist focused on protecting businesses from evolving threats.",
    image: "/team/emily.jpg"
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    bio: "Full-stack developer with expertise in modern web technologies and APIs.",
    image: "/team/david.jpg"
  }
];

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Started with a vision to democratize access to cutting-edge technology solutions."
  },
  {
    year: "2021",
    title: "First Major Client",
    description: "Secured our first enterprise client and delivered a successful AI transformation project."
  },
  {
    year: "2022",
    title: "Team Expansion",
    description: "Grew our team to 20+ experts across AI, cloud, and cybersecurity domains."
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description: "Received multiple awards for innovation in AI and cloud solutions."
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Expanded services to international markets and launched new product lines."
  }
];

const stats = [
  { number: "100+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "99.9%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support Available" }
];

export default function AboutPage() {
  return (
    <Layout
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group's mission to provide cutting-edge technology solutions and our team of expert professionals."
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech Group</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're a team of passionate technologists dedicated to transforming businesses through innovative AI, cloud, and cybersecurity solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                To democratize access to cutting-edge technology solutions, empowering businesses of all sizes to thrive in the digital age through innovative AI, cloud infrastructure, and cybersecurity services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in technology, business strategy, and innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-center mb-2">{member.role}</p>
                  <p className="text-gray-600 text-center text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Numbers that speak to our commitment to excellence and client success.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From startup to industry leader, here's how we've grown and evolved over the years.
              </p>
            </motion.div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6">
                      {milestone.year}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
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
                Let's discuss how our team can help transform your business with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Started Today
                </Link>
                <Link 
                  href="/services" 
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}