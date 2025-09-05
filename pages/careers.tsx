import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Laptop, 
  BookOpen, 
  Award, 
  Coffee, 
  Globe, 
  MapPin, 
  Clock, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Building, 
  Zap, 
  Shield, 
  Brain, 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  BarChart3, 
  Settings, 
  Target, 
  TrendingUp, 
  Phone, 
  Mail, 
  Calendar, 
  DollarSign, 
  Briefcase, 
  GraduationCap, 
  Lightbulb, 
  Rocket, 
  Handshake 
} from 'lucide-react';
import Layout from './components/Layout';

const positions = [
  {
    title: 'Senior Full-Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead development of cutting-edge web applications using React, Node.js, and cloud technologies.',
    requirements: [
      '5+ years of full-stack development experience',
      'Expert knowledge of React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS, Azure, GCP)',
      'Strong problem-solving and communication skills'
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Learning budget", "Certification support"]
  },
  {
    title: 'AI/ML Engineer',
    department: 'AI & Data',
    location: 'San Francisco, CA',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Develop and implement machine learning models and AI solutions for enterprise clients.',
    requirements: [
      '3+ years of ML/AI experience',
      'Proficiency in Python, TensorFlow, PyTorch',
      'Experience with NLP and computer vision',
      'Strong mathematical and statistical background'
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Learning budget", "Certification support"]
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'New York, NY',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Drive product strategy and roadmap for our AI-powered platform solutions.',
    requirements: [
      '4+ years of product management experience',
      'AI/ML product experience preferred',
      'Strong analytical skills',
      'Excellent communication skills'
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Learning budget", "Certification support"]
  }
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs'
  },
  {
    icon: Laptop,
    title: 'Remote Work',
    description: 'Work from anywhere with flexible schedules'
  },
  {
    icon: BookOpen,
    title: 'Learning & Development',
    description: 'Annual learning budget and conference attendance'
  },
  {
    icon: Award,
    title: 'Career Growth',
    description: 'Clear career paths and promotion opportunities'
  },
  {
    icon: Coffee,
    title: 'Team Culture',
    description: 'Collaborative and inclusive work environment'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Work on projects that make a difference worldwide'
  }
];

const stats = [
  { number: '50+', label: 'Team Members' },
  { number: '15+', label: 'Countries' },
  { number: '98%', label: 'Employee Satisfaction' },
  { number: '4.8/5', label: 'Glassdoor Rating' }
];

export default function Careers() {
  const [selectedPosition, setSelectedPosition] = useState(null);

  return (
    <Layout>
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of innovative technologists and help shape the future of AI and technology solutions." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Be part of a team that's building the future of technology. 
                We're looking for passionate individuals who want to make a real impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#positions" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Open Positions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Get In Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Why Work With Us?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Positions Section */}
        <section id="positions" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Open Positions
            </motion.h2>
            <div className="space-y-8">
              {positions.map((position, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                        <span className="flex items-center">
                          <Building className="w-4 h-4 mr-1" />
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </span>
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {position.experience}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedPosition(selectedPosition === index ? null : index)}
                      className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      {selectedPosition === index ? 'Hide Details' : 'View Details'}
                      <ArrowRight className={`w-4 h-4 ml-2 transition-transform ${selectedPosition === index ? 'rotate-90' : ''}`} />
                    </button>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    {position.description}
                  </p>

                  {selectedPosition === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-white/20"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4">Requirements</h4>
                          <ul className="space-y-2">
                            {position.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-start text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4">Benefits</h4>
                          <ul className="space-y-2">
                            {position.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start text-gray-300">
                                <Star className="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6">
                        <a 
                          href={`mailto:careers@ziontechgroup.com?subject=Application for ${position.title}`}
                          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
                        >
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Don't See Your Dream Role?
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                We're always looking for talented individuals. Send us your resume and let's start a conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:careers@ziontechgroup.com"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Send Resume
                  <Mail className="w-4 h-4 ml-2" />
                </a>
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}