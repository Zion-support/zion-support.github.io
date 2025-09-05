import React from 'react';
<<<<<<< HEAD
=======
import { motion } from 'framer-motion';
import Head from 'next/head';
>>>>>>> fff1a961f4ef4a979058d66e8db4fd365994ab84
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Users, 
  Award, 
  Target, 
  Heart, 
  Globe,
  TrendingUp,
  Building,
  Rocket,
  Lightbulb,
  Handshake,
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
<<<<<<< HEAD
  Star, 
  TrendingUp, 
  Building, 
  Rocket, 
  Lightbulb, 
  Handshake,
  Code
} from 'lucide-react';
import MainLayout from '../src/components/layout/MainLayout';
=======
  Star
} from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly push the boundaries of technology to create cutting-edge solutions that drive real business value.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients as partners, fostering long-term relationships built on trust and mutual success.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for the highest quality in everything we do, from code to customer service, ensuring exceptional results.'
  },
  {
    icon: Target,
    title: 'Results',
    description: 'We focus on delivering measurable outcomes that directly impact our clients\' bottom line and business growth.'
  }
];
>>>>>>> fff1a961f4ef4a979058d66e8db4fd365994ab84

const stats = [
  { number: '18+', label: 'Years Experience' },
  { number: '2,500+', label: 'Projects Completed' },
  { number: '150+', label: 'Team Members' },
  { number: '50+', label: 'Countries Served' }
];

const services = [
  {
    title: 'AI & Machine Learning',
    description: 'Cutting-edge AI solutions that transform business operations',
    icon: Brain
  },
  {
    title: 'Cloud Architecture',
    description: 'Scalable cloud solutions for modern businesses',
    icon: Globe
  },
  {
    title: 'Digital Transformation',
    description: 'Complete digital transformation strategies and implementation',
    icon: Rocket
  },
  {
    title: 'Cybersecurity',
    description: 'Enterprise-grade security solutions and protection',
    icon: Shield
  }
];

export default function About() {
  return (
<<<<<<< HEAD
    <MainLayout
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge technology solutions."
      keywords="about us, company, mission, values, team, technology solutions"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Pioneering the future of technology with innovative solutions that transform businesses and empower communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get in Touch
              </Link>
              <Link href="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To democratize access to cutting-edge technology solutions, empowering businesses of all sizes to achieve their digital transformation goals through innovative AI, IT services, and micro SaaS platforms.
              </p>
              <div className="flex items-center space-x-4">
                <Target className="w-8 h-8 text-blue-600" />
                <span className="text-lg font-semibold text-gray-900">Innovation First</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be the global leader in technology solutions, creating a world where every business can leverage the power of AI and digital innovation to solve complex challenges and drive sustainable growth.
=======
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - a leading technology company with 18+ years of experience delivering innovative AI, cloud, and digital transformation solutions." />
        <meta name="keywords" content="about us, company, team, values, mission, vision, Zion Tech Group, technology solutions" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Discover our story, values, and commitment to delivering exceptional technology solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
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
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We are a leading technology solutions provider dedicated to transforming businesses 
                through innovative AI, cloud architecture, and cutting-edge development services.
>>>>>>> fff1a961f4ef4a979058d66e8db4fd365994ab84
              </p>
            </motion.div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape our culture of excellence and innovation.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible with technology, always seeking new and better ways to solve problems."
              },
              {
                icon: Shield,
                title: "Integrity",
                description: "We conduct business with the highest ethical standards, building trust through transparency and reliability."
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "We believe in the power of teamwork and partnership, both within our organization and with our clients."
              },
              {
                icon: Zap,
                title: "Excellence",
                description: "We strive for excellence in everything we do, delivering solutions that exceed expectations."
              },
              {
                icon: Heart,
                title: "Empathy",
                description: "We understand our clients' challenges and work with compassion to find the best solutions for their needs."
              },
              {
                icon: Globe,
                title: "Impact",
                description: "We're committed to creating positive change in the world through technology that makes a difference."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Impact in Numbers</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're proud of the measurable impact we've made in the technology landscape.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed", icon: CheckCircle },
              { number: "200+", label: "Happy Clients", icon: Users },
              { number: "50+", label: "Countries Served", icon: Globe },
              { number: "99%", label: "Client Satisfaction", icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
=======
        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
>>>>>>> fff1a961f4ef4a979058d66e8db4fd365994ab84
          </div>
        </section>

<<<<<<< HEAD
      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, innovation, and business transformation.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                description: "Visionary leader with 15+ years in tech innovation",
                icon: Rocket
              },
              {
                name: "Michael Chen",
                role: "CTO",
                description: "AI and machine learning expert with PhD in Computer Science",
                icon: Brain
              },
              {
                name: "Emily Rodriguez",
                role: "Head of Engineering",
                description: "Full-stack development specialist and team builder",
                icon: Code
              },
              {
                name: "David Kim",
                role: "Head of AI Solutions",
                description: "Machine learning researcher and AI implementation expert",
                icon: Zap
              },
              {
                name: "Lisa Thompson",
                role: "Head of Client Success",
                description: "Customer experience champion and relationship builder",
                icon: Heart
              },
              {
                name: "Alex Morgan",
                role: "Head of Security",
                description: "Cybersecurity expert and compliance specialist",
                icon: Shield
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <member.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-semibold mb-3">{member.role}</div>
                <p className="text-gray-600">{member.description}</p>
=======
        {/* Mission Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
                <p className="text-xl text-gray-600 mb-8">
                  To empower businesses with cutting-edge technology solutions that drive innovation, 
                  efficiency, and growth. We believe in the transformative power of technology and 
                  are committed to delivering exceptional value to our clients.
                </p>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-xl text-gray-600">
                  To be the world's leading technology solutions provider, recognized for our 
                  innovation, excellence, and commitment to client success.
                </p>
>>>>>>> fff1a961f4ef4a979058d66e8db4fd365994ab84
              </motion.div>
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that have already transformed their operations with our innovative technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
=======
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive technology solutions across multiple domains
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
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
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Join hundreds of satisfied clients who trust us with their technology needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get In Touch
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
>>>>>>> fff1a961f4ef4a979058d66e8db4fd365994ab84
  );
}