import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Layout from '../components/Layout';

const jobOpenings = [
  {
    id: 1,
    title: 'Senior AI/ML Engineer',
    department: 'AI Services',
    location: 'Remote',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead AI/ML projects and develop cutting-edge machine learning solutions',
    requirements: [
      'Master\'s degree in Computer Science or related field',
      '5+ years of experience in AI/ML',
      'Proficiency in Python, TensorFlow, PyTorch',
      'Experience with cloud platforms (AWS, Azure, GCP)',
      'Strong problem-solving and communication skills'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      'Professional development opportunities',
      '401(k) with company matching'
    ],
    posted: '2024-01-15',
    featured: true
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    department: 'Micro SaaS',
    location: 'Middletown, DE',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Build and maintain micro SaaS applications using modern web technologies',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of full-stack development experience',
      'Proficiency in React, Node.js, TypeScript',
      'Experience with databases (PostgreSQL, MongoDB)',
      'Knowledge of cloud platforms and DevOps'
    ],
    benefits: [
      'Competitive salary',
      'Health and dental insurance',
      'Remote work options',
      'Learning and development budget',
      'Team building events'
    ],
    posted: '2024-01-10',
    featured: false
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    department: 'IT Services',
    location: 'Remote',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Manage cloud infrastructure and implement CI/CD pipelines',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '4+ years of DevOps experience',
      'Experience with AWS, Azure, or GCP',
      'Knowledge of Docker, Kubernetes, Terraform',
      'Scripting skills (Python, Bash)'
    ],
    benefits: [
      'Competitive salary and bonuses',
      'Comprehensive health benefits',
      'Flexible work schedule',
      'Professional certification support',
      'Stock options'
    ],
    posted: '2024-01-08',
    featured: true
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: 'Competitive Compensation',
    description: 'We offer competitive salaries and comprehensive benefits packages'
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description: 'Work with talented professionals in a supportive and inclusive environment'
  },
  {
    icon: Star,
    title: 'Growth Opportunities',
    description: 'Continuous learning and career development opportunities'
  },
  {
    icon: Clock,
    title: 'Work-Life Balance',
    description: 'Flexible work arrangements and generous time off policies'
  }
];

export default function TalentPage() {
  return (
    <Layout
      title="Join Our Team - Zion Tech Group"
      description="Explore career opportunities at Zion Tech Group. Join our team of talented professionals building the future of technology."
      keywords="careers, jobs, employment, technology careers, AI jobs, software development"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Build the future of technology with us. Explore exciting career opportunities at Zion Tech Group.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Apply Now
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Current Openings
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover exciting career opportunities and join our growing team
              </p>
            </motion.div>

            <div className="space-y-8">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <h3 className="text-2xl font-bold text-gray-900 mr-3">{job.title}</h3>
                        {job.featured && (
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-semibold">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
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
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="text-sm text-gray-500">Posted: {job.posted}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{job.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={`/contact?job=${job.id}`}
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link
                      href={`/contact?job=${job.id}`}
                      className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Us?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive benefits package and a supportive work environment
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't See Your Role?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Send Your Resume
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}