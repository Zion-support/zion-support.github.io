import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Target,
  Award,
  Globe,
  Brain,
  Shield,
  Cloud,
  Code,
  Zap,
  Heart,
  Star,
  TrendingUp,
  CheckCircle,
  Lightbulb,
  Rocket,
  Building,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Linkedin
} from 'lucide-react';
import { contactInfo } from '../data/services.js';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      position: 'Chief Technology Officer',
      expertise: 'AI & Machine Learning',
      experience: '15+ years',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/sarahchen',
      bio: 'PhD in Computer Science from MIT, former researcher at Google AI'
    },
    {
      name: 'Michael Rodriguez',
      position: 'Chief Executive Officer',
      expertise: 'Strategic Leadership',
      experience: '20+ years',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/michaelrodriguez',
      bio: 'Former VP at IBM, Harvard MBA, expertise in digital transformation'
    },
    {
      name: 'Alex Thompson',
      position: 'Head of Cybersecurity',
      expertise: 'Security & Compliance',
      experience: '12+ years',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/alexthompson',
      bio: 'CISSP certified, former NSA cybersecurity specialist'
    },
    {
      name: 'Emma Wilson',
      position: 'Quantum Computing Lead',
      expertise: 'Quantum Technology',
      experience: '10+ years',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/emmawilson',
      bio: 'PhD in Physics from Stanford, quantum algorithm researcher'
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly pushing the boundaries of what\'s possible with cutting-edge technology and creative solutions.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Prioritizing the highest levels of security and compliance in all our solutions and processes.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with our clients as partners to achieve their goals and drive mutual success.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Delivering exceptional quality in every project through rigorous standards and continuous improvement.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Operating with honesty, transparency, and ethical practices in all our business relationships.'
    },
    {
      icon: Rocket,
      title: 'Growth',
      description: 'Empowering our clients and team members to achieve accelerated growth and transformation.'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: '500+ Projects Completed',
      description: 'Successfully delivered technology solutions across various industries'
    },
    {
      icon: Users,
      title: '98% Client Satisfaction',
      description: 'Consistently exceeding client expectations with our services'
    },
    {
      icon: Globe,
      title: '50+ Countries Served',
      description: 'Global reach with local expertise and 24/7 support'
    },
    {
      icon: TrendingUp,
      title: '200% Average ROI',
      description: 'Delivering measurable business value through our solutions'
    }
  ];

  const technologies = [
    { name: 'Artificial Intelligence', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { name: 'Quantum Computing', icon: Zap, color: 'from-blue-500 to-cyan-500' },
    { name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { name: 'Cloud Computing', icon: Cloud, color: 'from-green-500 to-teal-500' },
    { name: 'Blockchain', icon: Building, color: 'from-indigo-500 to-purple-500' },
    { name: 'Software Development', icon: Code, color: 'from-yellow-500 to-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {' '}Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking technology company dedicated to transforming businesses 
              through innovative AI, quantum computing, cybersecurity, and digital transformation solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Target className="w-12 h-12 text-cyan-400 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses and organizations worldwide by providing cutting-edge technology 
                solutions that drive innovation, enhance security, and create sustainable competitive advantages 
                in an increasingly digital world.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Lightbulb className="w-12 h-12 text-purple-400 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To be the global leader in transformative technology solutions, pioneering the future 
                of AI, quantum computing, and cybersecurity while making advanced technologies accessible 
                and beneficial for organizations of all sizes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Technology Expertise</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies we specialize in to drive innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <tech.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-sm font-medium text-center">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry experts and innovators leading the charge in technological advancement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-medium mb-2">{member.position}</p>
                <p className="text-sm text-gray-300 mb-3">{member.expertise}</p>
                <p className="text-xs text-gray-400 mb-4">{member.experience}</p>
                <p className="text-sm text-gray-300 mb-4">{member.bio}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Achievements</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable results that demonstrate our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-8 border border-cyan-400/30">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies that trust Zion Tech Group for their technology needs. 
                Let's discuss how we can help you achieve your goals.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Middletown, DE</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
                <motion.a
                  href="/services"
                  className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-400/10 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Services
                </motion.a>
                <motion.a
                  href={`tel:${contactInfo.mobile}`}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;