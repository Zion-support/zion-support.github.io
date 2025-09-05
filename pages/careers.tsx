import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Users, 
  Award, 
  Target, 
  Heart, 
  Globe, 
  Shield, 
  Zap, 
  CheckCircle, 
  Star, 
  TrendingUp,
  Building,
  Rocket,
  Lightbulb,
  GraduationCap,
  Coffee
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const positions = [
  {
    title: 'Senior AI Engineer',
    department: 'AI & Machine Learning',
    location: 'Remote / New York',
    type: 'Full-time',
    description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
    requirements: ['5+ years ML experience', 'Python, TensorFlow, PyTorch', 'PhD in Computer Science preferred']
  },
  {
    title: 'Full-Stack Developer',
    department: 'Engineering',
    location: 'San Francisco',
    type: 'Full-time',
    description: 'Build scalable web applications and microservices for our platform.',
    requirements: ['3+ years full-stack experience', 'React, Node.js, TypeScript', 'Cloud experience preferred']
  },
  {
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    description: 'Manage cloud infrastructure and deployment pipelines for our services.',
    requirements: ['4+ years DevOps experience', 'AWS, Docker, Kubernetes', 'CI/CD expertise required']
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'New York',
    type: 'Full-time',
    description: 'Drive product strategy and roadmap for our AI and SaaS offerings.',
    requirements: ['5+ years PM experience', 'Technical background preferred', 'AI/ML product experience']
  }
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, mental health support, and wellness programs.'
  },
  {
    icon: GraduationCap,
    title: 'Learning & Development',
    description: 'Annual learning budget, conference attendance, and professional development opportunities.'
  },
  {
    icon: Coffee,
    title: 'Work-Life Balance',
    description: 'Flexible hours, remote work options, and unlimited PTO policy.'
  },
  {
    icon: Award,
    title: 'Recognition & Rewards',
    description: 'Competitive compensation, equity options, and performance bonuses.'
  }
];

export default function CareersPage() {
  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of innovators and help shape the future of technology. Explore career opportunities at Zion Tech Group." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Join Our <span className="text-blue-400">Team</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Be part of a team that's building the future of technology. We're looking for passionate individuals who want to make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#open-positions"
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Work With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just a company - we're a community of innovators, creators, and problem-solvers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                >
                  <div className="p-4 bg-blue-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Open Positions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find your next opportunity to make an impact
              </p>
            </motion.div>

            <div className="space-y-6">
              {positions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                        <span className="flex items-center">
                          <Building className="h-4 w-4 mr-1" />
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <Globe className="h-4 w-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="mt-4 md:mt-0 inline-flex items-center px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Don't See Your Role?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let's start a conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Send Your Resume
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}