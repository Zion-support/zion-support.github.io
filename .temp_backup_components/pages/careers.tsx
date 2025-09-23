import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Code, 
  Users, 
  Heart, 
  Globe, 
  Award, 
  Clock, 
  DollarSign, 
  Book, 
  Zap, 
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const jobOpenings = [
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are looking for an experienced full stack developer to join our team.',
    requirements: [
      '5+ years of experience with React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Strong understanding of database design and optimization',
      'Experience with microservices architecture',
      'Strong automation and scripting skills'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget', 'Certification support']
  },
  {
    title: 'AI/ML Engineer',
    department: 'AI & Research',
    location: 'Remote',
    type: 'Full-time',
    description: 'Join our AI team to build cutting-edge machine learning solutions.',
    requirements: [
      '3+ years of experience in machine learning and AI',
      'Proficiency in Python, TensorFlow, and PyTorch',
      'Experience with cloud ML platforms',
      'Strong mathematical and statistical background',
      'Experience with MLOps and model deployment'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget']
  },
  {
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    description: 'Help us build and maintain our cloud infrastructure and deployment pipelines.',
    requirements: [
      '3+ years of DevOps experience',
      'Experience with Kubernetes and Docker',
      'Knowledge of CI/CD pipelines',
      'Experience with infrastructure as code',
      'Strong automation and scripting skills'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget', 'Certification support']
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Compensation',
    description: 'We offer competitive salaries and performance-based bonuses'
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs'
  },
  {
    icon: Globe,
    title: 'Remote Work',
    description: 'Work from anywhere with flexible schedules'
  },
  {
    icon: Book,
    title: 'Learning & Development',
    description: 'Continuous learning opportunities and professional development budget'
  },
  {
    icon: Award,
    title: 'Career Growth',
    description: 'Clear career paths and opportunities for advancement'
  },
  {
    icon: Users,
    title: 'Great Team',
    description: 'Work with talented and passionate professionals'
  }
];

const stats = [
  { number: '50+', label: 'Team Members' },
  { number: '15+', label: 'Countries' },
  { number: '100%', label: 'Remote First' },
  { number: '4.8/5', label: 'Employee Rating' }
];

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team at Zion Tech Group. We're looking for talented individuals to help us build the future of technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Team
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Be part of a team that's building the future of technology. 
                We're looking for passionate individuals who want to make a difference.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="#openings"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  View Openings
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
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
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="openings" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our team and help us build innovative technology solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        {job.department}
                      </span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                        {job.location}
                      </span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                        {job.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                  </div>

                  <div className="mb-6">
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

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.benefits.map((benefit, benefitIndex) => (
                        <span
                          key={benefitIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center w-full justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive benefits package and a great work environment.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't See Your Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Send Resume
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}