import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Lightbulb,
  Shield,
  Zap,
  Heart
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible in technology'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building long-term relationships based on reliability and transparency'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'Delivering exceptional quality in every project we undertake'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We\'re passionate about technology and its power to transform businesses'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Team Members' },
    { number: '25+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader with 20+ years in technology leadership and business transformation.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      bio: 'Expert in emerging technologies with deep expertise in AI, cloud, and cybersecurity.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Engineering',
      bio: 'Seasoned engineering leader specializing in scalable software architecture and team development.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'David Kim',
      role: 'VP of Solutions',
      bio: 'Strategic consultant helping enterprises navigate digital transformation challenges.',
      image: '/api/placeholder/150/150'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking technology company dedicated to empowering organizations through innovative solutions. 
              Our mission is to transform businesses by leveraging cutting-edge technology to solve complex challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <Target className="w-16 h-16 text-zion-cyan mb-6" />
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-zion-slate-light text-lg leading-relaxed">
                  To empower organizations with innovative technology solutions that drive growth, 
                  efficiency, and competitive advantage in an ever-evolving digital landscape.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <Globe className="w-16 h-16 text-zion-cyan mb-6" />
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-zion-slate-light text-lg leading-relaxed">
                  To be the leading technology partner for organizations worldwide, 
                  known for innovation, reliability, and transformative impact.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2">
                  {stat.number}
                </div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our company culture
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-zion-slate-light">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Meet the experienced professionals who drive our company's success and innovation
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-zion-cyan font-medium mb-3">{member.role}</p>
                <p className="text-zion-slate-light text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From humble beginnings to industry leadership - the story of Zion Tech Group
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">1998</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Founded</h3>
              <p className="text-zion-slate-light">
                Zion Tech Group was established with a vision to revolutionize business technology
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">2010</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Expansion</h3>
              <p className="text-zion-slate-light">
                Rapid growth and expansion into new markets and service areas
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">2025</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-zion-slate-light">
                Leading the industry in AI, cloud, and emerging technology solutions
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how Zion Tech Group can help transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-bold rounded-lg hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
              <a
                href="/careers"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-bold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Join Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}