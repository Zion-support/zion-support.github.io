<<<<<<< HEAD:pages_disabled/about.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  TrendingUp,
  Building,
  Rocket,
  Lightbulb,
  Handshake,
=======
import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import { motion } from 'framer-motion';
=======
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
import { 
>>>>>>> origin/main:pages/about.tsx
  Brain, 
  Users, 
  Target, 
  Heart, 
  Globe, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
<<<<<<< HEAD:pages_disabled/about.tsx
  Star, 
  DollarSign, 
  Clock, 
  BarChart3
=======
<<<<<<< HEAD
  Star, 
  Rocket, 
  Code
>>>>>>> origin/main:pages/about.tsx
} from 'lucide-react';
import MainLayout from '../src/components/layout/MainLayout';
=======
  Star
} from 'lucide-react';

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief AI Officer",
    image: "/team/sarah-chen.jpg",
    bio: "Leading AI research with 15+ years in machine learning and neural networks.",
    expertise: ["Machine Learning", "Deep Learning", "AI Ethics"]
  },
  {
    name: "Michael Rodriguez",
    role: "CTO",
    image: "/team/michael-rodriguez.jpg",
    bio: "Technology visionary with expertise in scalable cloud architectures.",
    expertise: ["Cloud Computing", "DevOps", "System Architecture"]
  },
  {
    name: "Dr. Priya Patel",
    role: "Head of Data Science",
    image: "/team/priya-patel.jpg",
    bio: "Data science expert specializing in predictive analytics and big data.",
    expertise: ["Data Science", "Analytics", "Statistics"]
  },
  {
    name: "James Wilson",
    role: "Lead Developer",
    image: "/team/james-wilson.jpg",
    bio: "Full-stack developer with passion for creating innovative solutions.",
    expertise: ["Full-Stack Development", "React", "Node.js"]
  }
];
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51

const values = [
  {
    icon: Brain,
    title: "Innovation First",
    description: "We constantly push the boundaries of what's possible with cutting-edge technology and creative problem-solving."
  },
  {
    icon: Users,
<<<<<<< HEAD:pages_disabled/about.tsx
    title: 'Collaboration',
    description: 'We work closely with our clients as partners, ensuring their success is our success.'
  }
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Foundation
            </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built on strong values and a clear vision for the future of technology.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation in the digital age.
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
              return (
                <motion.div
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
            {team.map((member, index) => (
              <motion.div
                key={index}
className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }}">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                  <p className="text-blue-600 font-semibold mb-2">
                  {member.role}
                </p>
                  <p className="text-sm text-gray-600 mb-2">
                  {member.expertise}
                </p>
                  <p className="text-xs text-gray-500">
                  {member.experience}
                </p>
                  </motion.div>
            ))}
          </div>
                  </div>
                  </section>
      {/* Achievements Section */}
      <section className="py-20 bg-white">
                  <div className="container mx-auto px-4">
                  <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recognition and results that speak to our commitment to excellence.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {achievement.stat}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, AI, and business innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 mb-2">
                  {member.expertise}
                </p>
                <p className="text-sm text-gray-500">
                  {member.experience}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const team = [{
    "name": 'Dr. Sarah Chen',
    "role": 'Chief Technology Officer',
    "expertise": 'AI & Machine Learning',
    "experience": '15+ years',
    "image": '/team/sarah-chen.jpg'
  },
  {
    "name": 'Michael Rodriguez',
    "role": 'Head of Engineering',
    "expertise": 'Cloud Infrastructure',
    "experience": '12+ years',
    "image": '/team/michael-rodriguez.jpg'
  },
  {
    "name": 'Emily Watson',
    "role": 'Lead Data Scientist',
    "expertise": 'Data Analytics & AI',
    "experience": '10+ years',
    "image": '/team/emily-watson.jpg'
  },
  {
    "name": 'David Kim',
    "role": 'Security Architect',
    "expertise": 'Cybersecurity',
    "experience": '14+ years',
    "image": '/team/david-kim.jpg'
=======
    title: "Client-Centric",
    description: "Your success is our success. We build lasting partnerships based on trust, transparency, and results."
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description: "We prioritize the security of your data and systems with industry-leading practices and compliance standards."
  },
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description: "Our solutions grow with your business, ensuring long-term value and adaptability to changing needs."
>>>>>>> origin/main:pages/about.tsx
  }
];

const achievements = [
  {
    number: "500+",
    label: "Projects Completed",
    description: "Successfully delivered projects across various industries"
  },
  {
    number: "99.9%",
    label: "Uptime Guarantee",
    description: "Reliable systems with industry-leading availability"
  },
  {
<<<<<<< HEAD:pages_disabled/about.tsx
    "icon": Globe,
    "title": 'Global Reach',
    "description": 'Serving clients across 25+ countries worldwide',
    "stat": '25+'
  },
  {
    "icon": TrendingUp,
    "title": 'Growth',
    "description": '300% year-over-year growth in AI services',
    "stat": '300%'
  }
];

const timeline = [{
    "year": '2018',
    "title": 'Company Founded',
    "description": 'Zion Tech Group was established with a vision to democratize AI and technology solutions.'
  },
  {
    "year": '2020',
    "title": 'AI Division Launch',
    "description": 'Launched our specialized AI services division, focusing on machine learning and automation.'
  },
  {
    "year": '2022',
    "title": 'Cloud Expansion',
    "description": 'Expanded into comprehensive cloud infrastructure and cybersecurity services.'
  },
  {
    "year": '2024',
    "title": 'Micro SaaS Platform',
    "description": 'Introduced our Micro SaaS solutions platform for rapid business application deployment.'
  }
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group | Leading Technology Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI, IT, and micro SaaS solutions. Our expert team delivers innovative technology solutions for modern businesses." />
        <meta name="keywords" content="about us, technology company, AI solutions, IT services, micro SaaS, team, expertise" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Leading technology solutions provider with expert team and innovative approach." />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                These principles guide everything we do and shape how we work with our clients.
              </p>
            </motion.div>
          </div>
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
=======
    number: "50+",
    label: "Team Members",
    description: "Expert professionals dedicated to your success"
  },
  {
    number: "24/7",
    label: "Support Available",
    description: "Round-the-clock assistance when you need it"
>>>>>>> origin/main:pages/about.tsx
  }
];

export default function About() {
  return (
<<<<<<< HEAD:pages_disabled/about.tsx
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team of experts dedicated to delivering innovative technology solutions." />
      </Head>
=======
    <MainLayout
      title="About Us - Zion Tech Group"
<<<<<<< HEAD
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
>>>>>>> origin/main:pages/about.tsx

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD:pages_disabled/about.tsx
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
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
=======
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
      description="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and technology solutions that transform businesses."
      keywords="about us, AI company, technology team, company mission, AI experts, tech leadership"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                About
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}Zion Tech Group
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                We are a leading technology company dedicated to transforming businesses through innovative AI solutions, 
                cutting-edge development, and exceptional service delivery.
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
              </p>
>>>>>>> origin/main:pages/about.tsx
            </motion.div>
          </div>
        </div>
      </section>

<<<<<<< HEAD:pages_disabled/about.tsx
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
                  <div className="text-gray-600">{stat.label}</div>
ursor/fix-lint-push-and-merge-to-main-4bb1
                </motion.div>
              ))}
            </div>
=======
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
>>>>>>> origin/main:pages/about.tsx
          </div>
        </div>
      </section>

<<<<<<< HEAD:pages_disabled/about.tsx
        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >

              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                );
              })}
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
ursor/fix-lint-push-and-merge-to-main-4bb1

                These core values guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
=======
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
        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  To democratize artificial intelligence and advanced technology, making it accessible 
                  and beneficial for businesses of all sizes. We believe that every organization should 
                  have the power to leverage AI for growth, efficiency, and innovation.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our team of experts works tirelessly to create solutions that not only meet today's 
                  challenges but anticipate tomorrow's opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Work With Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Our Services
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                      <div className="text-gray-600">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                      <div className="text-gray-600">Team Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                      <div className="text-gray-600">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                      <div className="text-gray-600">Support</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> origin/main:pages/about.tsx
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
<<<<<<< HEAD:pages_disabled/about.tsx
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
=======
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
>>>>>>> origin/main:pages/about.tsx
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
<<<<<<< HEAD:pages_disabled/about.tsx
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
=======
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
>>>>>>> origin/main:pages/about.tsx
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
<<<<<<< HEAD:pages_disabled/about.tsx
                Our diverse team of experts brings together decades of experience in technology, 
                design, and business strategy.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
=======
                The brilliant minds behind our innovative solutions and exceptional service delivery.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> origin/main:pages/about.tsx
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
<<<<<<< HEAD:pages_disabled/about.tsx
                  whileInView={{ opacity: 1, y: 0 }}
=======
                  animate={{ opacity: 1, y: 0 }}
>>>>>>> origin/main:pages/about.tsx
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.bio}
                  </p>
<<<<<<< HEAD:pages_disabled/about.tsx
=======
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
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
              </motion.div>
            ))}
          </div>
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
        {/* Achievements Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Achievements
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Numbers that reflect our commitment to excellence and client success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-xl font-semibold text-gray-900 mb-2">
                    {achievement.label}
                  </div>
                  <div className="text-gray-600">
                    {achievement.description}
                  </div>
>>>>>>> origin/main:pages/about.tsx
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
<<<<<<< HEAD:pages_disabled/about.tsx
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
=======
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our team can help transform your business with cutting-edge technology solutions.
>>>>>>> origin/main:pages/about.tsx
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
<<<<<<< HEAD:pages_disabled/about.tsx
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
=======
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
>>>>>>> origin/main:pages/about.tsx
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
<<<<<<< HEAD:pages_disabled/about.tsx
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Explore Services
=======
                  className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Our Services
>>>>>>> origin/main:pages/about.tsx
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
  );
}