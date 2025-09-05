import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Briefcase } from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: 'Senior AI Engineer',
    department: 'AI & Machine Learning',
    location: 'Remote / New York, NY',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
    requirements: [
      'Master\'s degree in Computer Science or related field',
      '5+ years of experience in AI/ML development',
      'Proficiency in Python, TensorFlow, PyTorch',
      'Experience with cloud platforms (AWS, Azure, GCP)',
      'Strong problem-solving and communication skills'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      'Professional development budget',
      '401(k) with company matching'
    ],
    posted: '2024-01-15',
    featured: true
  },
  {
    id: 2,
    title: 'Cloud Solutions Architect',
    department: 'Cloud Infrastructure',
    location: 'San Francisco, CA',
    type: 'Full-time',
    experience: '7+ years',
    description: 'Design and implement scalable cloud solutions for enterprise clients.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '7+ years of cloud architecture experience',
      'AWS/Azure/GCP certifications preferred',
      'Experience with containerization (Docker, Kubernetes)',
      'Strong understanding of DevOps practices'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      'Professional development budget',
      '401(k) with company matching'
    ],
    posted: '2024-01-12',
    featured: false
  },
  {
    id: 3,
    title: 'Cybersecurity Specialist',
    department: 'Security',
    location: 'Remote / Austin, TX',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Protect our clients\' systems and data with advanced security measures.',
    requirements: [
      'Bachelor\'s degree in Cybersecurity or related field',
      '3+ years of cybersecurity experience',
      'CISSP, CISM, or similar certifications',
      'Experience with security tools and frameworks',
      'Knowledge of compliance standards (SOC 2, ISO 27001)'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      'Professional development budget',
      '401(k) with company matching'
    ],
    posted: '2024-01-10',
    featured: false
  },
  {
    id: 4,
    title: 'Full Stack Developer',
    department: 'Software Development',
    location: 'Remote / Chicago, IL',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Build innovative web applications using modern technologies.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of full-stack development experience',
      'Proficiency in React, Node.js, and databases',
      'Experience with cloud platforms',
      'Strong problem-solving skills'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      'Professional development budget',
      '401(k) with company matching'
    ],
    posted: '2024-01-08',
    featured: false
  }
];

const benefits = [
  {
    icon: Star,
    title: 'Competitive Compensation',
    description: 'Above-market salaries with performance bonuses and equity options'
  },
  {
    icon: Users,
    title: 'Great Team Culture',
    description: 'Work with talented, passionate professionals in a collaborative environment'
  },
  {
    icon: Briefcase,
    title: 'Career Growth',
    description: 'Opportunities for advancement and professional development'
  },
  {
    icon: Clock,
    title: 'Work-Life Balance',
    description: 'Flexible schedules and remote work options'
  }
];

const departments = [
  'AI & Machine Learning',
  'Cloud Infrastructure',
  'Cybersecurity',
  'Software Development',
  'Data Analytics',
  'DevOps',
  'Product Management',
  'Sales & Marketing'
];

export default function CareersPage() {
  return (
    <MainLayout
      title="Careers - Zion Tech Group"
      description="Join our team of technology experts and help shape the future of digital transformation."
      keywords="careers, jobs, technology careers, AI engineer, cloud architect, cybersecurity, software development"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our Team
                <span className="block text-yellow-400">Shape the Future</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                Work with cutting-edge technology and help businesses transform their digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#openings"
                  className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors flex items-center justify-center"
                >
                  View Open Positions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We offer more than just a job - we provide a platform for growth and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Departments
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore opportunities across different technology domains
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {departments.map((department, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <h3 className="font-semibold text-gray-900">{department}</h3>
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
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find your next career opportunity with us
              </p>
            </div>

            <div className="space-y-8">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`bg-white rounded-lg shadow-lg p-8 ${
                    job.featured ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  {job.featured && (
                    <div className="mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <Link
                        href={`/careers/${job.id}`}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{job.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.slice(0, 3).map((requirement, reqIndex) => (
                          <li key={reqIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {job.benefits.slice(0, 3).map((benefit, benIndex) => (
                          <li key={benIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Send Your Resume
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}