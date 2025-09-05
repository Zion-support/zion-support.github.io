import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  Zap, 
  Award, 
  BookOpen, 
  Coffee, 
  Laptop, 
  Globe, 
  ArrowRight, 
  CheckCircle 
} from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: 'Senior AI Engineer',
    location: 'Remote',
    type: 'Full-time',
    department: 'AI & Machine Learning',
    description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
    requirements: [
      '5+ years of experience in AI/ML',
      'Proficiency in Python, TensorFlow, PyTorch',
      'Experience with cloud platforms (AWS, GCP, Azure)',
      'Strong problem-solving skills'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Flexible work hours', 'Professional development']
  },
  {
    id: 2,
    title: 'Cloud Solutions Architect',
    location: 'New York, NY',
    type: 'Full-time',
    department: 'Cloud & Infrastructure',
    description: 'Design and implement scalable cloud architectures for enterprise clients.',
    requirements: [
      '7+ years of cloud architecture experience',
      'AWS/Azure/GCP certifications preferred',
      'Experience with microservices and containerization',
      'Strong communication skills'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Flexible work hours', 'Professional development']
  },
  {
    id: 3,
    title: 'Frontend Developer',
    location: 'Remote',
    type: 'Full-time',
    department: 'Development',
    description: 'Create beautiful, responsive user interfaces using modern web technologies.',
    requirements: [
      '3+ years of React/Next.js experience',
      'Proficiency in TypeScript and CSS',
      'Experience with design systems',
      'Portfolio of previous work'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Flexible work hours', 'Professional development']
  }
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs'
  },
  {
    icon: Zap,
    title: 'Flexible Work',
    description: 'Remote work options and flexible schedules'
  },
  {
    icon: BookOpen,
    title: 'Learning & Development',
    description: 'Continuous learning opportunities and skill development'
  },
  {
    icon: Award,
    title: 'Career Growth',
    description: 'Clear career paths and advancement opportunities'
  },
  {
    icon: Coffee,
    title: 'Great Culture',
    description: 'Collaborative, inclusive, and innovative work environment'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Work on projects that make a difference worldwide'
  }
];

export default function CareersPage() {
  return (
    <Layout
      title="Careers - Zion Tech Group"
      description="Join our team of innovative technologists and help shape the future of technology"
      keywords="careers, jobs, employment, technology careers, AI engineer, cloud architect, developer"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Team
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Build the future of technology with us. We're looking for passionate, innovative individuals to join our growing team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-xl text-gray-600">Explore our current job openings and find your perfect role</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="mr-4">{job.location}</span>
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{job.type}</span>
                      </div>
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                        {job.department}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
              <p className="text-xl text-gray-600">We offer competitive benefits and a great work environment</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Don't See Your Role?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let's discuss opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}