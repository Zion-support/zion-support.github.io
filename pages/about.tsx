import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
=======
import { 
  TrendingUp,
  Building,
  Rocket,
  Lightbulb,
  Handshake,
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
  Brain, 
  Users, 
  Award, 
  Target, 
  Heart, 
  Globe, 
  Shield, 
  Zap, 
  CheckCircle, 
<<<<<<< HEAD
  Star, 
  TrendingUp,
  Building,
  Rocket,
  Lightbulb
=======
  ArrowRight, 
  Star, 
  DollarSign, 
  Clock, 
  BarChart3
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
} from 'lucide-react';

const values = [
  {
    icon: Brain,
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
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: '/api/placeholder/300/300',
    bio: 'Visionary leader with 15+ years in technology and business transformation.'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: '/api/placeholder/300/300',
    bio: 'Technical expert specializing in AI and cloud architecture solutions.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    image: '/api/placeholder/300/300',
    bio: 'Creative director focused on user experience and modern design principles.'
  },
  {
    name: 'David Kim',
    role: 'Lead Developer',
    image: '/api/placeholder/300/300',
    bio: 'Full-stack developer with expertise in modern web technologies.'
  }
];

const stats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'Projects Completed', value: '500+' },
  { label: 'Happy Clients', value: '200+' },
  { label: 'Team Members', value: '50+' }
];

export default function AboutPage() {
=======
    description: 'We push the boundaries of technology to create cutting-edge solutions that transform businesses.'
  },
  {
    icon: Users,
    title: 'Collaboration',
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
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We conduct business with honesty, transparency, and ethical practices.'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'We build solutions that make a positive difference in the world.'
  }
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
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

export default function About() {
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're passionate about transforming businesses with cutting-edge technology." />
        <meta name="keywords" content="about us, company, team, mission, values, technology company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Navigation */}
        <nav className="relative z-10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white text-xl font-bold">Zion Tech Group</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-white font-semibold">About</Link>
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto text-center">
=======
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team of experts dedicated to delivering innovative technology solutions." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                About
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
<<<<<<< HEAD
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are a leading technology company dedicated to transforming businesses 
                through innovative AI services, IT solutions, and Micro SaaS applications.
=======
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We are a leading technology company dedicated to transforming businesses through innovative solutions, 
                cutting-edge AI services, and comprehensive IT infrastructure.
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
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
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Mission Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with cutting-edge technology solutions that drive growth, 
                  efficiency, and innovation. We believe technology should be accessible, 
                  scalable, and transformative.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Our team of experts combines technical expertise with business acumen to deliver 
                  solutions that not only meet current needs but also prepare our clients for future challenges.
                </p>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                  Work With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
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
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
=======
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
<<<<<<< HEAD
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <value.icon className="h-12 w-12 text-blue-400 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
=======
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
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
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The talented individuals who make our vision a reality
              </p>
            </motion.div>
=======
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in technology, 
                design, and business strategy.
              </p>
            </motion.div>

>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
<<<<<<< HEAD
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
=======
                  whileInView={{ opacity: 1, y: 0 }}
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
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how we can help transform your business with our technology solutions
              </p>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Z</span>
                  </div>
                  <span className="text-white text-xl font-bold">Zion Tech Group</span>
                </div>
                <p className="text-gray-400">
                  Transforming businesses with cutting-edge technology solutions.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/ai-services" className="text-gray-400 hover:text-white">AI Services</Link></li>
                  <li><Link href="/it-services" className="text-gray-400 hover:text-white">IT Services</Link></li>
                  <li><Link href="/micro-saas" className="text-gray-400 hover:text-white">Micro SaaS</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-white font-semibold">About</Link></li>
                  <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Contact</h3>
                <p className="text-gray-400">info@ziontechgroup.com</p>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">&copy; 2024 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
=======
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
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
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
      </div>
    </>
  );
}