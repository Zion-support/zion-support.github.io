import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Target,
  Award,
  Globe,
  Zap,
  Shield,
  Rocket,
  Heart,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Lightbulb,
  Cpu,
  Brain,
  Cloud,
  Code,
  Building,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'We push the boundaries of technology to create groundbreaking solutions that shape the future.',
    },
    {
      icon: Shield,
      title: 'Security',
      description:
        'Security is at the core of everything we do, ensuring your data and systems are always protected.',
    },
    {
      icon: Heart,
      title: 'Excellence',
      description:
        'We maintain the highest standards in all our work, delivering exceptional quality every time.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'We believe in the power of teamwork and building strong partnerships with our clients.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '99.9%', label: 'Uptime' },
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in enterprise technology',
      image: '/api/placeholder/300/300',
    },
    {
      name: 'Sarah Rodriguez',
      role: 'CTO',
      description:
        'Expert in AI and machine learning with PhD in Computer Science',
      image: '/api/placeholder/300/300',
    },
    {
      name: 'Michael Johnson',
      role: 'Head of Security',
      description:
        'Cybersecurity specialist with experience in defense and finance',
      image: '/api/placeholder/300/300',
    },
    {
      name: 'Emily Wang',
      role: 'Head of Cloud Operations',
      description: 'Cloud architecture expert with extensive DevOps experience',
      image: '/api/placeholder/300/300',
    },
  ];

  const timeline = [
    {
      year: '2018',
      title: 'Company Founded',
      description:
        'Started with a vision to revolutionize enterprise technology',
    },
    {
      year: '2019',
      title: 'First Major Client',
      description: 'Secured partnership with Fortune 500 company',
    },
    {
      year: '2020',
      title: 'AI Division Launch',
      description: 'Launched dedicated AI and machine learning services',
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'Opened offices in London and Singapore',
    },
    {
      year: '2022',
      title: 'Security Certification',
      description: 'Achieved SOC 2 Type II and ISO 27001 certifications',
    },
    {
      year: '2023',
      title: 'Quantum Computing',
      description: 'Launched quantum computing research division',
    },
    {
      year: '2024',
      title: '500+ Projects',
      description: 'Reached milestone of 500 completed projects',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {' '}
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking technology company dedicated to
              transforming businesses through innovative AI, cybersecurity, and
              cloud solutions. Our mission is to empower organizations with
              cutting-edge technology that drives growth and success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
            >
              <Target className="w-12 h-12 text-cyan-400 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To democratize advanced technology by making cutting-edge AI,
                cybersecurity, and cloud solutions accessible to businesses of
                all sizes. We strive to be the trusted technology partner that
                accelerates digital transformation and drives sustainable
                growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
            >
              <Rocket className="w-12 h-12 text-cyan-400 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To be the world's leading technology innovation company,
                pioneering solutions that shape the future of business. We
                envision a world where intelligent technology seamlessly
                enhances human potential and creates unprecedented opportunities
                for growth and success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These values guide everything we do and shape our company culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:border-cyan-400/50 transition-all duration-300"
              >
                <value.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-gray-300">
              From startup to industry leader - here's our story
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-400"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}
                  >
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                      <div className="text-cyan-400 font-bold text-2xl mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900"></div>
                  </div>

                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate professionals dedicated to delivering exceptional
              results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <div className="text-cyan-400 mb-3">{member.role}</div>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that trust Zion Tech Group to drive
              their digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
