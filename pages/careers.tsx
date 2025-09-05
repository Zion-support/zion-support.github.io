import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import { 
  Users, 
  MapPin, 
  Clock, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Zap, 
  Shield, 
  Brain, 
  Code, 
  Cloud, 
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Star
} from 'lucide-react';

const openPositions = [
  {
    title: 'Senior AI Engineer',
    department: 'AI & Machine Learning',
    location: 'Remote / New York',
    type: 'Full-time',
    experience: '5+ years',
    icon: Brain,
    description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
    requirements: [
      'PhD in Computer Science or related field',
      '5+ years experience in AI/ML',
      'Expertise in Python, TensorFlow, PyTorch',
      'Experience with cloud platforms (AWS, GCP, Azure)',
      'Strong problem-solving and communication skills'
    ],
    benefits: [
      'Competitive salary ($120k - $180k)',
      'Equity participation',
      'Health, dental, vision insurance',
      'Flexible work arrangements',
      'Professional development budget'
    ],
    posted: '2 days ago'
  },
  {
    title: 'Full-Stack Developer',
    department: 'Software Engineering',
    location: 'Remote / San Francisco',
    type: 'Full-time',
    experience: '3+ years',
    icon: Code,
    description: 'Build scalable web applications and microservices for our SaaS platforms.',
    requirements: [
      'Bachelor\'s degree in Computer Science',
      '3+ years full-stack development experience',
      'Proficiency in React, Node.js, TypeScript',
      'Experience with databases (PostgreSQL, MongoDB)',
      'Knowledge of cloud deployment and DevOps'
    ],
    benefits: [
      'Competitive salary ($90k - $140k)',
      'Stock options',
      'Comprehensive health benefits',
      'Remote work flexibility',
      'Learning and development opportunities'
    ],
    posted: '1 week ago'
  },
  {
    title: 'Cybersecurity Specialist',
    department: 'Security',
    location: 'Remote / Washington DC',
    type: 'Full-time',
    experience: '4+ years',
    icon: Shield,
    description: 'Protect our systems and data with advanced security measures and compliance.',
    requirements: [
      'Bachelor\'s degree in Cybersecurity or related field',
      '4+ years cybersecurity experience',
      'CISSP, CISM, or similar certifications',
      'Experience with security frameworks (NIST, ISO 27001)',
      'Knowledge of penetration testing and vulnerability assessment'
    ],
    benefits: [
      'Competitive salary ($100k - $150k)',
      'Security clearance opportunities',
      'Health and retirement benefits',
      'Professional certification support',
      'Flexible schedule'
    ],
    posted: '3 days ago'
  },
  {
    title: 'Cloud Solutions Architect',
    department: 'Cloud & DevOps',
    location: 'Remote / Austin',
    type: 'Full-time',
    experience: '6+ years',
    icon: Cloud,
    description: 'Design and implement scalable cloud infrastructure solutions.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '6+ years cloud architecture experience',
      'AWS, Azure, or GCP certifications',
      'Experience with Kubernetes and containerization',
      'Strong understanding of microservices architecture'
    ],
    benefits: [
      'Competitive salary ($130k - $200k)',
      'Equity participation',
      'Comprehensive benefits package',
      'Remote work options',
      'Conference and training budget'
    ],
    posted: '5 days ago'
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote / Seattle',
    type: 'Full-time',
    experience: '4+ years',
    icon: Briefcase,
    description: 'Drive product strategy and roadmap for our AI and SaaS platforms.',
    requirements: [
      'Bachelor\'s degree in Business, Engineering, or related field',
      '4+ years product management experience',
      'Experience with SaaS products',
      'Strong analytical and communication skills',
      'MBA or equivalent experience preferred'
    ],
    benefits: [
      'Competitive salary ($110k - $160k)',
      'Stock options',
      'Health and wellness benefits',
      'Flexible work arrangements',
      'Professional development opportunities'
    ],
    posted: '1 week ago'
  },
  {
    title: 'Data Scientist',
    department: 'Data & Analytics',
    location: 'Remote / Boston',
    type: 'Full-time',
    experience: '3+ years',
    icon: Award,
    description: 'Extract insights from data to drive business decisions and product improvements.',
    requirements: [
      'Master\'s degree in Data Science, Statistics, or related field',
      '3+ years data science experience',
      'Proficiency in Python, R, SQL',
      'Experience with machine learning and statistical modeling',
      'Strong business acumen and communication skills'
    ],
    benefits: [
      'Competitive salary ($95k - $145k)',
      'Equity participation',
      'Health and dental insurance',
      'Remote work flexibility',
      'Research and development opportunities'
    ],
    posted: '4 days ago'
  }
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health, dental, and vision insurance for you and your family'
  },
  {
    icon: Zap,
    title: 'Flexible Work',
    description: 'Remote work options and flexible hours to support work-life balance'
  },
  {
    icon: GraduationCap,
    title: 'Learning & Development',
    description: 'Annual budget for courses, conferences, and professional development'
  },
  {
    icon: Award,
    title: 'Equity Participation',
    description: 'Stock options and equity participation in our growing company'
  },
  {
    icon: Users,
    title: 'Team Building',
    description: 'Regular team events, retreats, and collaborative activities'
  },
  {
    icon: Shield,
    title: 'Security & Stability',
    description: 'Competitive salary, retirement planning, and job security'
  }
];

const culture = [
  {
    title: 'Innovation First',
    description: 'We encourage experimentation and reward creative thinking',
    icon: Brain
  },
  {
    title: 'Collaborative Environment',
    description: 'Work with talented colleagues who support and challenge you',
    icon: Users
  },
  {
    title: 'Growth Mindset',
    description: 'Continuous learning and development opportunities at every level',
    icon: GraduationCap
  },
  {
    title: 'Impact Driven',
    description: 'Your work directly contributes to solving real-world problems',
    icon: Award
  }
];

export default function CareersPage() {
  return (
    <Layout 
      title="Careers - Zion Tech Group | Join Our Team"
      description="Join Zion Tech Group and work with world-class AI and technology experts. Explore open positions, benefits, and our innovative culture. Apply today!"
      keywords="careers, jobs, AI engineer, software developer, cybersecurity, remote work, technology careers"
    >
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our Team
                <span className="block text-blue-400">Build the Future of Technology</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Work with world-class AI researchers, engineers, and technology experts. 
                Help us build cutting-edge solutions that transform businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#positions" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  View Open Positions
                </a>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold">
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover exciting career opportunities and join our mission to revolutionize technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <position.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{position.title}</h3>
                          <p className="text-blue-600 font-semibold">{position.department}</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{position.posted}</span>
                    </div>

                    <p className="text-gray-600 mb-6">{position.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                        {position.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-gray-400" />
                        {position.type}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Briefcase className="w-4 h-4 mr-2 text-gray-400" />
                        {position.experience}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2 text-gray-400" />
                        {position.department}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.slice(0, 3).map((requirement, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {position.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start text-sm text-gray-600">
                            <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex space-x-3">
                      <Link 
                        href="/contact" 
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold text-center transition-colors"
                      >
                        Apply Now
                      </Link>
                      <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg font-semibold text-center transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer competitive benefits and a supportive environment that helps you grow and succeed.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Culture
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We foster an environment where innovation, collaboration, and growth thrive.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {culture.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Join Us?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Don't see the perfect role? We're always looking for talented individuals. 
                Send us your resume and let's start a conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Send Your Resume
                </Link>
                <a href="mailto:careers@ziontechgroup.com" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}