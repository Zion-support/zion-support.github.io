import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const openPositions = [
  {
    id: 1,
    title: 'Senior AI Engineer',
    department: 'AI & Machine Learning',
    location: 'Remote',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
    requirements: [
      'Master\'s degree in Computer Science or related field',
      '5+ years of experience in AI/ML',
      'Proficiency in Python, TensorFlow, PyTorch',
      'Experience with cloud platforms (AWS, GCP, Azure)'
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Professional development"]
  },
  {
    id: 2,
    title: 'Cloud Solutions Architect',
    department: 'Cloud Services',
    location: 'New York, NY',
    type: 'Full-time',
    experience: '7+ years',
    description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '7+ years of cloud architecture experience',
      'Certifications in AWS, Azure, or GCP',
      'Strong knowledge of DevOps practices'
    ],
    benefits: ["Competitive salary", "Health insurance", "Flexible hours", "Stock options"]
  },
  {
    id: 3,
    title: 'Cybersecurity Specialist',
    department: 'Security',
    location: 'San Francisco, CA',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Protect our clients\' digital assets with advanced security solutions.',
    requirements: [
      'Bachelor\'s degree in Cybersecurity or related field',
      '4+ years of security experience',
      'Certifications in CISSP, CISM, or similar',
      'Experience with security tools and frameworks'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget']
  }
];

const culture = [
  {
    icon: Users,
    title: "Collaborative Environment",
    description: "Work with talented individuals who share your passion for innovation"
  },
  {
    icon: Award,
    title: "Growth Opportunities",
    description: "Continuous learning and career development programs"
  },
  {
    icon: Star,
    title: "Innovation Focus",
    description: "Be part of cutting-edge projects that shape the future"
  }
];

export default function CareersPage() {
  return (
    <Layout
      title="Careers - Zion Tech Group"
      description="Join our team and help us build innovative solutions that make a difference"
      keywords="careers, jobs, employment, technology careers"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Join Our Team
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-indigo-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Build the future with us. Join our team of passionate technologists.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities and join our mission to transform the world through technology.
            </p>
          </motion.div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {job.department}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        {job.location}
                      </span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                        {job.type}
                      </span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Apply Now
                  </button>
                </div>
                
                <p className="text-gray-700 mb-6">{job.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.benefits.map((benefit, benefitIndex) => (
                      <span key={benefitIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
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
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Don't See Your Role?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Send Resume
              </button>
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}