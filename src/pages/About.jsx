import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Globe, 
  Zap,
  Shield,
  Brain,
  Cloud
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible in technology.'
    },
    {
      icon: Shield,
      title: 'Excellence',
      description: 'Quality and precision in everything we do, from code to customer service.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest, transparent, and ethical in all our business relationships.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together with clients and partners to achieve shared success.'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to democratize AI technology.'
    },
    {
      year: '2021',
      title: 'First AI Solution',
      description: 'Successfully deployed our first AI-powered business intelligence platform.'
    },
    {
      year: '2022',
      title: '100+ Clients',
      description: 'Reached our first milestone of serving over 100 satisfied clients.'
    },
    {
      year: '2023',
      title: 'Quantum Computing',
      description: 'Launched our quantum computing research and development division.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across 25+ countries worldwide.'
    }
  ];

  const team = [
    {
      name: 'Dr. Kleber Santos',
      role: 'Founder & CEO',
      bio: 'Former NASA scientist with 15+ years in AI and quantum computing research.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      expertise: ['AI Research', 'Quantum Computing', 'Strategic Leadership']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO',
      bio: 'Leading expert in machine learning and cybersecurity with 12+ years experience.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
      expertise: ['Machine Learning', 'Cybersecurity', 'System Architecture']
    },
    {
      name: 'Michael Rodriguez',
      role: 'VP of Engineering',
      bio: 'Cloud infrastructure specialist with expertise in scalable systems and DevOps.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      expertise: ['Cloud Architecture', 'DevOps', 'System Scaling']
    }
  ];

  return (
    <>
      <SEO 
        title="About Zion Tech Group - Our Story, Mission & Team"
        description="Learn about Zion Tech Group's mission to democratize AI technology, our innovative team, and our journey from startup to industry leader."
      />
      
      <div className="min-h-screen bg-futuristic py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking technology company dedicated to transforming businesses through innovative AI solutions, 
              cutting-edge cybersecurity, and scalable cloud infrastructure.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-zion-blue-dark/30 p-8 rounded-lg border border-zion-cyan/20"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-zion-slate-light leading-relaxed">
                To democratize artificial intelligence and cutting-edge technology, making advanced solutions accessible 
                to businesses of all sizes. We believe that every organization deserves access to the tools that will 
                define the future of business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-zion-blue-dark/30 p-8 rounded-lg border border-zion-cyan/20"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-zion-slate-light leading-relaxed">
                To be the global leader in AI-powered business transformation, pioneering the next generation of 
                intelligent systems that will revolutionize how organizations operate, compete, and succeed in 
                the digital economy.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-zion-slate-light">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Company Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                Founded in 2020 by Dr. Kleber Santos, a former NASA scientist with deep expertise in artificial 
                intelligence and quantum computing, Zion Tech Group began with a simple yet powerful mission: 
                to make cutting-edge technology accessible to businesses of all sizes.
              </p>
              <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                What started as a small team of passionate technologists has grown into a global organization 
                serving hundreds of clients across 25+ countries. Our journey has been marked by continuous 
                innovation, unwavering commitment to excellence, and deep partnerships with our clients.
              </p>
              <p className="text-zion-slate-light text-lg leading-relaxed">
                Today, we stand at the forefront of the AI revolution, helping organizations transform their 
                operations, enhance their security, and unlock new possibilities through intelligent technology.
              </p>
            </div>
          </motion.div>

          {/* Milestones */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">Key Milestones</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-zion-cyan/30"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zion-cyan rounded-full border-4 border-zion-blue-dark"></div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-zion-blue-dark/30 p-6 rounded-lg border border-zion-cyan/20">
                        <div className="text-zion-cyan font-bold text-lg mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                        <p className="text-zion-slate-light">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-zion-blue-dark/30 p-6 rounded-lg border border-zion-cyan/20 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <div className="text-zion-cyan font-medium mb-3">{member.role}</div>
                  <p className="text-zion-slate-light mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-zion-cyan to-zion-purple p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Work With Us?</h2>
              <p className="text-white/90 mb-6">
                Join hundreds of organizations that have already transformed their business with our technology solutions.
              </p>
              <button className="px-8 py-3 bg-white text-zion-blue rounded-lg font-semibold hover:scale-105 transition-transform">
                Get Started Today
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
