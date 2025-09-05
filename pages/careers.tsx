import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  MapPin, 
  Clock, 
  Users, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Zap, 
  Globe, 
  Shield, 
  Brain, 
  Code, 
  BarChart3, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Award, 
  Rocket, 
  Lightbulb, 
  Target, 
  Phone, 
  Mail, 
  ExternalLink
} from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: 'Senior AI Engineer',
    department: 'AI & Machine Learning',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
    requirements: [
      'PhD in Computer Science or related field',
      '5+ years experience in AI/ML',
      'Expertise in Python, TensorFlow, PyTorch',
      'Experience with cloud platforms (AWS, GCP, Azure)',
      'Strong problem-solving and communication skills'
    ],
    benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Flexible work hours'],
    posted: '2 days ago',
    urgent: true
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Build scalable web applications and APIs using modern technologies.',
    requirements: [
      'Bachelor\'s degree in Computer Science',
      '3+ years full-stack development experience',
      'Proficiency in React, Node.js, TypeScript',
      'Experience with databases (PostgreSQL, MongoDB)',
      'Knowledge of cloud platforms and DevOps'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Professional development', 'Remote work'],
    posted: '1 week ago',
    urgent: false
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Manage cloud infrastructure and implement CI/CD pipelines for scalable systems.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '4+ years DevOps experience',
      'Expertise in AWS, Docker, Kubernetes',
      'Experience with Terraform, Ansible',
      'Knowledge of monitoring and logging tools'
    ],
    benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Learning budget'],
    posted: '3 days ago',
    urgent: false
  },
  {
    id: 4,
    title: 'AI Product Manager',
    department: 'Product',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Drive product strategy and roadmap for AI-powered solutions.',
    requirements: [
      'MBA or equivalent experience',
      '5+ years product management experience',
      'Experience with AI/ML products',
      'Strong analytical and communication skills',
      'Experience with agile development'
    ],
    benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Flexible schedule'],
    posted: '5 days ago',
    urgent: false
  },
  {
    id: 5,
    title: 'Cybersecurity Specialist',
    department: 'Security',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Protect our systems and data with advanced security measures and monitoring.',
    requirements: [
      'Bachelor\'s degree in Cybersecurity or related field',
      '3+ years cybersecurity experience',
      'Certifications (CISSP, CISM, CEH) preferred',
      'Experience with security tools and frameworks',
      'Knowledge of compliance standards'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Certification support', 'Remote work'],
    posted: '1 week ago',
    urgent: false
  },
  {
    id: 6,
    title: 'Data Scientist',
    department: 'Data & Analytics',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Extract insights from data and build predictive models for business intelligence.',
    requirements: [
      'Master\'s degree in Data Science or related field',
      '3+ years data science experience',
      'Proficiency in Python, R, SQL',
      'Experience with ML libraries and frameworks',
      'Strong statistical and analytical skills'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Professional development', 'Research opportunities'],
    posted: '4 days ago',
    urgent: false
  }
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, dental, vision, and mental health support'
  },
  {
    icon: Zap,
    title: 'Flexible Work',
    description: 'Remote work options, flexible hours, and work-life balance'
  },
  {
    icon: GraduationCap,
    title: 'Learning & Development',
    description: 'Professional development budget, conferences, and training programs'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Work on projects that make a difference worldwide'
  },
  {
    icon: Shield,
    title: 'Security & Stability',
    description: 'Competitive salary, stock options, and job security'
  },
  {
    icon: Brain,
    title: 'Innovation',
    description: 'Work with cutting-edge technology and innovative solutions'
  }
];

const companyValues = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from code quality to customer service.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and collaborative problem-solving.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We encourage creative thinking and innovative solutions to complex problems.'
  },
  {
    icon: Globe,
    title: 'Impact',
    description: 'We focus on creating meaningful impact for our customers and communities.'
  }
];

export default function Careers() {
  return (
    <Layout
      title="Careers - Zion Tech Group"
      description="Join our team of innovators and help shape the future of AI, IT, and Micro SaaS solutions. Explore career opportunities at Zion Tech Group."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Join Our Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Help us build the future of technology. Join a team of passionate innovators 
              working on cutting-edge AI, IT, and Micro SaaS solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="#openings"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
              >
                View Openings
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-lg font-semibold"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job - we offer a career with purpose, growth, and impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and shape our culture
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your next career opportunity with us
            </p>
          </div>
          
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      {job.urgent && (
                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          Urgent
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-600 mb-2">
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {job.experience}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{job.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-4">
                    <span className="text-sm text-gray-500">Posted {job.posted}</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.slice(0, 3).map((req) => (
                        <li key={req} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {job.benefits.slice(0, 3).map((benefit) => (
                        <li key={benefit} className="flex items-center text-sm text-gray-600">
                          <Star className="w-3 h-3 text-yellow-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple and transparent process to join our team
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply</h3>
              <p className="text-gray-600">Submit your application with resume and cover letter</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Review</h3>
              <p className="text-gray-600">Our team reviews your application and qualifications</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-gray-600">Technical and cultural fit interviews with the team</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Offer</h3>
              <p className="text-gray-600">Receive your offer and join our amazing team</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't See Your Role?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let us know how you can contribute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
            >
              Send Resume
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 text-lg font-semibold"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Questions About Careers?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}