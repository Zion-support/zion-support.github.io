import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Cloud, Shield, Users, Award, Target, Lightbulb, Heart } from 'lucide-react';
import Layout from '../components/Layout';

const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    bio: 'Leading our AI and machine learning initiatives with 15+ years of experience in cutting-edge technology.',
    image: '/team/sarah-chen.jpg',
    expertise: ['AI/ML', 'Cloud Architecture', 'Team Leadership'],
    education: 'PhD Computer Science, MIT',
    linkedin: 'https://linkedin.com/in/sarahchen',
    twitter: 'https://twitter.com/sarahchen'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Engineering',
    bio: 'Full-stack development expert with a passion for building scalable, user-friendly applications.',
    image: '/team/michael-rodriguez.jpg',
    expertise: ['Full-Stack Development', 'DevOps', 'System Architecture'],
    education: 'MS Computer Science, Stanford',
    linkedin: 'https://linkedin.com/in/michaelrodriguez',
    twitter: 'https://twitter.com/michaelrod'
  },
  {
    name: 'Dr. Emily Watson',
    role: 'AI Research Director',
    bio: 'Pioneering research in natural language processing and computer vision applications.',
    image: '/team/emily-watson.jpg',
    expertise: ['NLP', 'Computer Vision', 'Research'],
    education: 'PhD AI, Carnegie Mellon',
    linkedin: 'https://linkedin.com/in/emilywatson',
    twitter: 'https://twitter.com/emilywatson'
  },
  {
    name: 'David Kim',
    role: 'Product Manager',
    bio: 'Strategic product development with a focus on user experience and market innovation.',
    image: '/team/david-kim.jpg',
    expertise: ['Product Strategy', 'UX Design', 'Market Analysis'],
    education: 'MBA, Wharton',
    linkedin: 'https://linkedin.com/in/davidkim',
    twitter: 'https://twitter.com/davidkim'
  },
  {
    name: 'Lisa Thompson',
    role: 'Head of Operations',
    bio: 'Streamlining operations and ensuring smooth delivery of our technology solutions.',
    image: '/team/lisa-thompson.jpg',
    expertise: ['Operations', 'Project Management', 'Quality Assurance'],
    education: 'MS Business Administration, Harvard',
    linkedin: 'https://linkedin.com/in/lisathompson',
    twitter: 'https://twitter.com/lisathompson'
  },
  {
    name: 'James Wilson',
    role: 'Lead Developer',
    bio: 'Frontend specialist creating intuitive and responsive user interfaces.',
    image: '/team/james-wilson.jpg',
    expertise: ['Frontend Development', 'React', 'UI/UX'],
    education: 'BS Computer Science, UC Berkeley',
    linkedin: 'https://linkedin.com/in/jameswilson',
    twitter: 'https://twitter.com/jameswilson'
  }
];

const values = [
  {
    title: 'Innovation',
    description: 'We constantly push the boundaries of what\'s possible in technology.',
    icon: Lightbulb
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest quality in everything we do.',
    icon: Award
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and shared success.',
    icon: Users
  },
  {
    title: 'Impact',
    description: 'We focus on creating solutions that make a real difference.',
    icon: Target
  }
];

const stats = [
  { number: '50+', label: 'Team Members' },
  { number: '15+', label: 'Years Experience' },
  { number: '100+', label: 'Projects Completed' },
  { number: '99%', label: 'Client Satisfaction' }
];

export default function TeamPage() {
  return (
    <Layout
      title="Our Team - Zion Tech Group"
      description="Meet the talented individuals behind Zion Tech Group. Our diverse team of experts is dedicated to delivering innovative technology solutions."
      keywords="team, about us, leadership, experts, technology team, AI experts"
    >
      <div className="min-h-screen bg-gray-50">
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                The talented individuals behind Zion Tech Group. We're a diverse team of experts 
                passionate about creating innovative technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the experts leading our mission to revolutionize technology.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-blue-600 font-semibold">{member.role}</p>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-sm text-gray-500">{member.education}</p>
                    </div>
                    
                    <div className="flex justify-center space-x-4">
                      <a
                        href={member.linkedin}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                      <a
                        href={member.twitter}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Twitter
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our Team
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our mission. 
                Explore our open positions and be part of something amazing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/talent"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <Users className="w-5 h-5 mr-2" />
                  View Open Positions
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}