import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
=======
>>>>>>> cursor/add-new-services-and-advertise-them-650b
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Zap, 
  Brain, 
  Shield, 
  Cloud,
<<<<<<< HEAD
  Lock,
  Database
=======
  Building2,
  Heart,
  Star,
  Rocket
>>>>>>> cursor/add-new-services-and-advertise-them-650b
} from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, label: 'Team Members', value: '150+' },
    { icon: Target, label: 'Projects Delivered', value: '500+' },
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Globe, label: 'Countries Served', value: '25+' }
  ];

  const values = [
    {
<<<<<<< HEAD
      icon: Lightbulb,
=======
      icon: Brain,
>>>>>>> cursor/add-new-services-and-advertise-them-650b
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge AI and emerging technologies.'
    },
    {
<<<<<<< HEAD
      icon: Award,
      title: 'Excellence in Execution',
      description: 'Every project is delivered with meticulous attention to detail and unwavering commitment to quality.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Partnership Approach',
      description: 'We work as an extension of your team, building long-term relationships based on trust and mutual success.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Your data and systems are protected with enterprise-grade security and compliance standards.',
      color: 'from-red-500 to-orange-500'
=======
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data and business operations are protected with enterprise-grade security measures.'
    },
    {
      icon: Heart,
      title: 'Customer Success',
      description: 'We measure our success by the success of our clients and their digital transformation journey.'
    },
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations.'
>>>>>>> cursor/add-new-services-and-advertise-them-650b
    }
  ];

  const timeline = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to revolutionize business through technology.'
    },
    {
      year: '2015',
      title: 'AI Services Launch',
      description: 'Launched our first AI-powered business intelligence platform for enterprise clients.'
    },
    {
<<<<<<< HEAD
      name: 'Marcus Rodriguez',
      role: 'Head of Cloud & DevOps',
      bio: 'Cloud infrastructure expert with certifications in AWS, Azure, and Google Cloud.',
      expertise: ['Cloud Architecture', 'DevOps', 'Infrastructure'],
      image: '/images/team/marcus-rodriguez.jpg'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Cybersecurity Director',
      bio: 'Former government cybersecurity specialist with expertise in threat intelligence.',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Management'],
      image: '/images/team/emily-watson.jpg'
    }
  ];

  const milestones = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Zion Tech Group established with a vision to democratize AI technology.'
    },
    {
      year: '2020',
      title: 'AI Breakthrough',
      description: 'Launched our first AI-powered business solutions platform.'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across 25+ countries.'
    },
    {
      year: '2024',
      title: 'Quantum Innovation',
      description: 'Pioneered quantum computing solutions for enterprise clients.'
=======
      year: '2019',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across 25+ countries worldwide.'
    },
    {
      year: '2023',
      title: 'Quantum Computing',
      description: 'Pioneered quantum edge computing solutions for next-generation applications.'
>>>>>>> cursor/add-new-services-and-advertise-them-650b
    },
    {
      year: '2025',
      title: 'Future Forward',
<<<<<<< HEAD
      description: 'Leading the next generation of AI and quantum technologies.'
=======
      description: 'Leading the charge in autonomous business operations and AI-driven innovation.'
>>>>>>> cursor/add-new-services-and-advertise-them-650b
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-slate-900 text-white">
      <SEO 
        title="About Zion Tech Group - Leading AI & Technology Innovation"
        description="Discover Zion Tech Group's journey from startup to global AI technology leader. Learn about our team, values, and commitment to innovation."
        keywords="Zion Tech Group, about us, AI company, technology innovation, team, values, milestones"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
=======
    <div className="min-h-screen bg-zion-slate-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
<<<<<<< HEAD
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
              Pioneering the future of AI, quantum computing, and sustainable technology solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/services"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Services
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
=======
            <h1 className="text-4xl md:text-6xl font-bold text-zion-cyan mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Pioneering the future of business through cutting-edge AI, quantum computing, and innovative technology solutions that drive digital transformation across industries.
            </p>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
<<<<<<< HEAD
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                  <p className="text-slate-400">{stat.description}</p>
                </div>
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-zion-cyan/20 rounded-full">
                    <stat.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                <div className="text-zion-slate-light">{stat.label}</div>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
=======
      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-zion-slate-light leading-relaxed mb-6">
                To empower businesses with intelligent, autonomous solutions that drive innovation, efficiency, and growth in an increasingly digital world.
              </p>
              <p className="text-lg text-zion-slate-light leading-relaxed">
                We believe that every organization deserves access to cutting-edge technology that can transform their operations and unlock new possibilities.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-8 border border-zion-cyan/30">
                <h3 className="text-2xl font-bold text-zion-cyan mb-4">Our Vision</h3>
                <p className="text-zion-slate-light leading-relaxed">
                  To be the global leader in autonomous business technology, creating a future where AI and human ingenuity work together to solve the world's most complex challenges.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
              Our Core Values
            </h2>
<<<<<<< HEAD
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The principles that guide our innovation and drive our success
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full mx-auto mb-6 flex items-center justify-center`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{value.title}</h3>
                  <p className="text-slate-300 text-center text-sm">{value.description}</p>
                </div>
=======
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide everything we do and every solution we create.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-zion-slate-dark rounded-xl border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-zion-cyan/20 rounded-full">
                    <value.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">{value.title}</h3>
                <p className="text-zion-slate-light">{value.description}</p>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Team Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              World-class experts driving innovation and delivering exceptional results
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">{member.name}</h3>
                  <p className="text-cyan-400 text-center mb-4">{member.role}</p>
                  <p className="text-slate-300 text-center mb-4 text-sm">{member.bio}</p>
                  <div className="space-y-2">
                    {member.expertise.map((skill, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-400">
                        <Star className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
=======
      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
>>>>>>> cursor/add-new-services-and-advertise-them-650b
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
              Our Journey
            </h2>
<<<<<<< HEAD
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Key milestones that have shaped our company and driven our growth
=======
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From startup to industry leader, here's how we've grown and evolved over the years.
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-zion-cyan/30"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
<<<<<<< HEAD
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
=======
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zion-cyan rounded-full border-4 border-zion-slate-dark"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-zion-slate-darker p-6 rounded-xl border border-zion-purple/20">
                      <div className="text-2xl font-bold text-zion-cyan mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-zion-slate-light">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join hundreds of organizations that have already revolutionized their operations with Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Get Started Today
              </button>
              <button className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}