<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
=======
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
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
<<<<<<< HEAD
  Globe,
  TrendingUp,
  Building,
  Rocket,
  Lightbulb,
  Handshake,
  Shield, 
  Zap, 
  CheckCircle, 
<<<<<<< HEAD
  ArrowRight, 
  Star
=======
  ArrowRight,
  Rocket,
  Lightbulb,
  Handshake
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
  Globe, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  DollarSign, 
  Clock, 
  BarChart3
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
} from 'lucide-react';

const values = [
  {
    icon: Brain,
    title: 'Innovation',
<<<<<<< HEAD
    description: 'We constantly push the boundaries of technology to create cutting-edge solutions that drive real business value.'
  },
  {
<<<<<<< HEAD
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

=======
    icon: Shield,
    title: 'Security',
    description: 'Security is at the core of everything we do, ensuring your data and systems are protected with enterprise-grade security.'
=======
    description: 'We push the boundaries of technology to create cutting-edge solutions that transform businesses.'
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
  },
  {
    icon: Users,
    title: 'Collaboration',
<<<<<<< HEAD
    description: 'We work closely with our clients as partners, understanding their unique challenges and co-creating solutions together.'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations and drive results.'
=======
    description: 'We work closely with our clients as partners, ensuring their success is our success.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, delivering quality that exceeds expectations.'
  },
  {
    icon: Target,
    title: 'Results',
    description: 'We focus on measurable outcomes that drive real business value and growth.'
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
  },
  {
    icon: Heart,
    title: 'Integrity',
<<<<<<< HEAD
    description: 'We conduct business with the highest ethical standards, building trust through transparency and honest communication.'
=======
    description: 'We conduct business with honesty, transparency, and ethical practices.'
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
  },
  {
    icon: Globe,
    title: 'Global Impact',
<<<<<<< HEAD
    description: 'We believe technology should make the world better, creating solutions that have positive impact on society and the environment.'
  }
];

const team = [
  {
    name: 'Kleber Santos',
    role: 'CEO & Founder',
    description: 'Visionary leader with 15+ years in technology and business transformation.',
    image: '/team/kleber.jpg'
  },
  {
    name: 'AI Research Team',
    role: 'Machine Learning Engineers',
    description: 'World-class AI researchers and engineers pushing the boundaries of artificial intelligence.',
    image: '/team/ai-team.jpg'
  },
  {
    name: 'Cloud Architecture Team',
    role: 'Cloud Solutions Architects',
    description: 'Experts in cloud infrastructure, DevOps, and scalable system design.',
    image: '/team/cloud-team.jpg'
=======
    description: 'We build solutions that make a positive difference in the world.'
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
  }
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
<<<<<<< HEAD
  { number: '99.9%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' },
  { number: '50+', label: 'Countries Served' }
];

>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
  { number: '50+', label: 'Happy Clients' },
  { number: '99%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' }
];

const team = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    image: '/images/team/john-smith.jpg',
    bio: 'Visionary leader with 15+ years in tech innovation.'
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    image: '/images/team/sarah-johnson.jpg',
    bio: 'Technical expert specializing in AI and cloud architecture.'
  },
  {
    name: 'Mike Chen',
    role: 'Head of Engineering',
    image: '/images/team/mike-chen.jpg',
    bio: 'Full-stack developer passionate about scalable solutions.'
  },
  {
    name: 'Emily Davis',
    role: 'Head of Design',
    image: '/images/team/emily-davis.jpg',
    bio: 'Creative director focused on user experience excellence.'
  }
];

>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team of experts dedicated to delivering innovative technology solutions." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
<<<<<<< HEAD
=======
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're transforming businesses through innovative AI and technology solutions." />
        <meta name="keywords" content="about us, team, mission, values, AI technology, cloud services" />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          <div className="container mx-auto px-6 text-center">
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
              className="text-center"
=======
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
              className="text-center"
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
<<<<<<< HEAD
<<<<<<< HEAD
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We are a leading technology solutions provider dedicated to transforming businesses 
                through innovative AI, cloud architecture, and cutting-edge development services.
=======
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Transforming businesses through innovative AI and technology solutions
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
              </p>
=======
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We are a leading technology company dedicated to transforming businesses through innovative solutions, 
                cutting-edge AI services, and comprehensive IT infrastructure.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Our Services
                </Link>
              </div>
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
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
          </div>
        </section>

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
              </motion.div>
=======
        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
            </div>
          </div>
        </section>

        {/* Values Section */}
<<<<<<< HEAD
        <section className="py-20 bg-white">
=======
        <section className="py-20 bg-gray-50">
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
          <div className="container mx-auto px-4">
=======
        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
<<<<<<< HEAD
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                To democratize access to cutting-edge AI and technology solutions, empowering businesses of all sizes to compete and thrive in the digital age. We believe that every organization deserves access to world-class technology that can transform their operations and drive growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
<<<<<<< HEAD
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
=======
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
=======
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <value.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
=======
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape how we work with our clients and each other.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-8 text-center"
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                );
              })}
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
            </div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Services Section */}
        <section className="py-20 bg-gray-50">
=======
        {/* Team Section */}
        <section className="py-20 bg-white">
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
          <div className="container mx-auto px-4">
=======
        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
            <motion.div
              initial={{ opacity: 0, y: 30 }}
<<<<<<< HEAD
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
<<<<<<< HEAD
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive technology solutions across multiple domains
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
=======
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the passionate experts behind our innovative solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
=======
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8 text-center"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
<<<<<<< HEAD
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Impact
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Numbers that reflect our commitment to excellence and client success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
=======
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in technology, 
                design, and business strategy.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg text-blue-100">{stat.label}</div>
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
=======
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
          <div className="container mx-auto px-4 text-center">
=======
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's work together to create innovative solutions that drive your success.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Explore Services
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
                </Link>
=======
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Let's discuss how we can help transform your business with our innovative technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Learn More
                </motion.button>
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
              </div>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
      </div>
=======
      </Layout>
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
    </>
  );
}