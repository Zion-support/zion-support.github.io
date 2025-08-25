
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
<<<<<<< HEAD
  Award, 
  Globe, 
  Rocket, 
  Brain, 
  Shield, 
  Cpu,
  TrendingUp,
  CheckCircle,
  Star,
  Zap
} from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years of Experience', value: '10+', icon: Award },
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Happy Clients', value: '200+', icon: Star },
    { label: 'Team Members', value: '50+', icon: Users }
=======
  Rocket, 
  Shield, 
  Brain, 
  Globe, 
  Award, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Heart,
  Lightbulb,
  Clock
} from 'lucide-react';

export default function About() {
  const companyStats = [
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '99.9%', label: 'Uptime SLA', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Clock }
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
<<<<<<< HEAD
      description: 'We push the boundaries of what\'s possible with cutting-edge AI and emerging technologies.'
=======
      description: 'We push the boundaries of what\'s possible with cutting-edge AI and emerging technologies.',
      color: 'from-purple-500 to-pink-500'
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
    },
    {
      icon: Shield,
      title: 'Trust & Security',
<<<<<<< HEAD
      description: 'Your data and business operations are protected with enterprise-grade security measures.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'We measure our success by the success of our clients and their digital transformation journey.'
    },
    {
      icon: Rocket,
      title: 'Future-Ready',
      description: 'We build solutions that not only solve today\'s problems but prepare you for tomorrow\'s challenges.'
=======
      description: 'Your data and systems are protected with enterprise-grade security and compliance.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'We measure our success by the success of our clients and their digital transformation.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering quality that exceeds expectations.',
      color: 'from-green-500 to-emerald-500'
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
=======
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Lightbulb, 
  Rocket,
  Shield,
  Zap,
  Heart,
  Star
} from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries and exploring new frontiers in technology"
    },
    {
      icon: Heart,
      title: "Excellence",
      description: "Delivering exceptional quality in everything we do"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together to achieve extraordinary results"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Maintaining the highest ethical standards in all our relationships"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
    }
  ];

  const timeline = [
    {
<<<<<<< HEAD
      year: '2015',
      title: 'Company Founded',
<<<<<<< HEAD
      description: 'Zion Tech Group was established with a vision to democratize AI and emerging technologies.'
    },
    {
      year: '2017',
      title: 'AI Solutions Launch',
      description: 'Launched our first AI-powered business solutions and autonomous systems platform.'
    },
    {
      year: '2019',
      title: 'Quantum Technology',
      description: 'Expanded into quantum computing and quantum-secure solutions for enterprise clients.'
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'Opened offices in multiple countries and served clients across 25+ nations.'
    },
    {
      year: '2023',
      title: 'AI Consciousness Platform',
      description: 'Pioneered the development of AI consciousness evolution and simulation platforms.'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Leading the charge in autonomous business operations and next-generation AI systems.'
=======
      description: 'Zion Tech Group established with a vision to democratize AI technology'
    },
    {
      year: '2021',
      title: 'First AI Solutions',
      description: 'Launched our first AI-powered business automation platform'
    },
    {
      year: '2022',
      title: 'Enterprise Expansion',
      description: 'Expanded to serve Fortune 500 companies and government agencies'
    },
    {
      year: '2023',
      title: 'Quantum Innovation',
      description: 'Pioneered quantum computing solutions for enterprise applications'
    },
    {
      year: '2024',
      title: 'Global Reach',
      description: 'Extended services to international markets and emerging economies'
    },
    {
      year: '2025',
      title: 'AI Revolution',
      description: 'Leading the charge in autonomous AI systems and consciousness evolution'
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
=======
      year: "2020",
      title: "Company Founded",
      description: "Zion Tech Group established with a vision for technological innovation"
    },
    {
      year: "2021",
      title: "First AI Platform",
      description: "Launched our flagship AI-powered business solutions platform"
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded operations to serve clients worldwide"
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Awarded multiple industry awards for innovation and excellence"
    },
    {
      year: "2024",
      title: "Future Technologies",
      description: "Pioneering quantum computing and advanced AI solutions"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
    }
  ];
=======
>>>>>>> origin/main

<<<<<<< HEAD
const AboutPage: React.FC = () => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking technology company dedicated to transforming businesses through 
              cutting-edge AI, quantum computing, and autonomous systems solutions.
            </p>
=======
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      description: "Former AI researcher with 15+ years in technology leadership"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      description: "Expert in emerging technologies and system architecture"
    },
    {
      name: "Dr. James Kim",
      role: "Chief Innovation Officer",
      description: "Leading research in quantum computing and AI"
    },
    {
      name: "Lisa Thompson",
      role: "Chief Operations Officer",
      description: "Specialist in scaling technology operations globally"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to technological innovation and excellence." />
        <meta name="keywords" content="about Zion Tech Group, company mission, technology innovation, AI company, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            About
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Zion Tech Group
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Pioneering the future of technology through innovation, excellence, and unwavering commitment to our clients' success.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                To accelerate human progress through cutting-edge technology solutions that solve the world's most complex challenges.
              </p>
              <p className="text-lg text-gray-400">
                We believe that technology should serve humanity, making the impossible possible and creating opportunities for growth, innovation, and positive change across all industries and communities.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto border border-purple-500/30">
                <Target className="w-32 h-32 text-purple-400" />
              </div>
            </motion.div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-cyan-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            We are pioneers in AI technology, quantum computing, and digital transformation, 
            empowering businesses to thrive in the digital age through innovative solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
              </div>
=======
      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Mission & Vision */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                To democratize access to advanced AI and emerging technologies, enabling businesses 
                of all sizes to leverage the power of autonomous systems, quantum computing, and 
                intelligent automation for unprecedented growth and innovation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Democratize AI technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Enable autonomous business operations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Drive digital transformation</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">
                Our Vision
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                To be the global leader in autonomous business technology, pioneering the future 
                of work where AI and humans collaborate seamlessly to create unprecedented value 
                and solve humanity's greatest challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Global AI leadership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Human-AI collaboration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Solve global challenges</span>
                </div>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To democratize access to cutting-edge AI technology and empower organizations 
                of all sizes to achieve digital transformation through innovative, secure, 
                and scalable solutions.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We believe that every business deserves access to the same powerful AI tools 
                that Fortune 500 companies use, leveling the playing field and driving 
                innovation across industries.
              </p>
              <Link
                to="/mission"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center">
                <Target className="w-32 h-32 text-cyan-400" />
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
              </div>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
=======
      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
<<<<<<< HEAD
              The principles that guide everything we do and every solution we create.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <value.icon className="w-12 h-12 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
=======
              These principles guide everything we do and shape our culture of innovation and excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Company Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
=======
      {/* Company History */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
<<<<<<< HEAD
              From startup to global technology leader - our story of innovation and growth.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-purple-600 h-full"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900"></div>
=======
              From startup to industry leader, discover the milestones that shaped our company.
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-4 border-gray-900"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
=======
      {/* Team Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, 
              cybersecurity, quantum computing, and digital transformation.
            </p>
          </div>
          <div className="text-center">
            <Link
              to="/team"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-lg"
            >
              <Users className="w-6 h-6" />
              <span>View Our Team</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
=======
      {/* Milestones Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Key milestones in our growth and development
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
              >
                <div className="lg:w-1/3 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{milestone.year}</span>
                  </div>
                </div>
                <div className="lg:w-2/3 text-center lg:text-left">
                  <h3 className="text-2xl font-semibold text-white mb-3">{milestone.title}</h3>
                  <p className="text-gray-300 text-lg">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
          </div>
        </div>
      </section>

<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
<<<<<<< HEAD
            Join hundreds of companies already leveraging our AI and autonomous technology solutions.
=======
            Join hundreds of organizations that trust Zion Tech Group with their digital transformation.
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Explore Our Services
=======
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5" />
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
            </Link>
=======
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zion Tech Group is a leading technology company specializing in innovative solutions 
            for businesses and organizations. We are committed to delivering cutting-edge 
            technology services that drive growth and efficiency.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">Pushing the boundaries of what's possible in technology</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality</h3>
            <p className="text-gray-600">Delivering excellence in every project we undertake</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnership</h3>
            <p className="text-gray-600">Building lasting relationships with our clients</p>
>>>>>>> origin/main
          </div>
=======
      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the visionaries driving our company forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-300">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              By The Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our impact in numbers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "500+", label: "Clients Worldwide" },
              { icon: Globe, number: "25+", label: "Countries Served" },
              { icon: Award, number: "50+", label: "Industry Awards" },
              { icon: Rocket, number: "100+", label: "Innovation Projects" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Us in Shaping the Future
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of a team that's revolutionizing technology and making a difference in the world
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Join Our Team
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Partner With Us
              </button>
            </div>
          </motion.div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
        </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default AboutPage;
=======
export default About;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
