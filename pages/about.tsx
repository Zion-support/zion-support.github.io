import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
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
=======
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
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
  Star,
  TrendingUp,
  Building,
  Rocket,
<<<<<<< HEAD
  Lightbulb
=======
  Phone,
  Mail,
  MapPin
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
<<<<<<< HEAD
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
=======
    description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients as partners in their digital transformation journey'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards of quality in everything we deliver'
  },
  {
    icon: Target,
    title: 'Results',
    description: 'We focus on delivering measurable business outcomes and ROI'
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We conduct business with honesty, transparency, and ethical practices'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'We serve clients worldwide with localized expertise and support'
  }
];

const team = [
  {
    name: 'Dr. Kleber Santos',
    role: 'CEO & Founder',
    description: '20+ years in AI and technology leadership',
    image: '/team/kleber.jpg'
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    description: 'Expert in AI architecture and cloud solutions',
    image: '/team/sarah.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Head of AI Research',
    description: 'PhD in Machine Learning, 15+ years experience',
    image: '/team/michael.jpg'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Engineering',
    description: 'Full-stack development and DevOps expertise',
    image: '/team/emily.jpg'
  }
];

const stats = [
  { number: '20+', label: 'Years Experience' },
  { number: '3,500+', label: 'Projects Completed' },
  { number: '200+', label: 'Team Members' },
  { number: '95+', label: 'Services & Solutions' },
  { number: '50+', label: 'Countries Served' },
  { number: '99.9%', label: 'Client Satisfaction' }
];

export default function About() {
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
  return (
    <Layout>
      <Head>
<<<<<<< HEAD
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and the team behind our innovative technology solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
=======
        <title>About Us | ZionTech Group</title>
        <meta name="description" content="Learn about ZionTech Group's mission, values, and team. We're leading the way in AI services, IT solutions, and micro SaaS platforms." />
        <meta name="keywords" content="about us, company, team, mission, values, AI experts, technology leaders" />
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

<<<<<<< HEAD
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
<<<<<<< HEAD
                About <span className="text-blue-400">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                We are a leading technology company dedicated to transforming businesses through innovative AI, IT, and Micro SaaS solutions.
=======
                About
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}ZionTech Group
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are a leading technology company specializing in AI services, IT solutions, 
                and micro SaaS platforms. Our mission is to transform businesses through 
                innovative technology solutions.
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
              </p>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Mission & Vision */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
=======
        {/* Stats Section */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
<<<<<<< HEAD
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

=======
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with cutting-edge AI and technology solutions that drive 
                  growth, efficiency, and innovation. We believe technology should be accessible, 
                  reliable, and transformative.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Since our founding, we've been committed to delivering exceptional value through 
                  innovative solutions, expert guidance, and unwavering support for our clients' 
                  success.
                </p>
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
                >
                  Work With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
<<<<<<< HEAD
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
=======
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Expert Team</h4>
                      <p className="text-gray-300">20+ years of combined experience in AI and technology</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Proven Results</h4>
                      <p className="text-gray-300">3,500+ successful projects and 99.9% client satisfaction</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">24/7 Support</h4>
                      <p className="text-gray-300">Round-the-clock support and maintenance services</p>
                    </div>
                  </li>
                </ul>
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
              </motion.div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Values */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
=======
        {/* Values Section */}
        <section className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
=======
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                >
                  <div className="p-4 bg-blue-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
=======
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
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
=======
        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The brilliant minds behind our innovative solutions
=======
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, 
                technology, and business innovation
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                >
                  <div className="w-24 h-24 bg-gray-600 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
=======
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-300 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.description}</p>
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
=======
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center"
=======
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
<<<<<<< HEAD
                Join hundreds of companies that trust Zion Tech Group for their technology needs.
=======
                Let's discuss how we can help transform your business with our expertise and solutions
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
<<<<<<< HEAD
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Started
=======
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Get in Touch
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
<<<<<<< HEAD
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Services
=======
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Explore Services
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        <Footer />
=======
        {/* Contact Info */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
      </div>
    </Layout>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
