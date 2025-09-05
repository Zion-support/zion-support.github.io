import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
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
  MapPin,
  Clock
} from 'lucide-react';

const careers = [
  {
    id: 1,
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
    requirements: ['5+ years AI/ML experience', 'Python, TensorFlow, PyTorch', 'PhD in Computer Science preferred']
  },
  {
    id: 2,
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Manage cloud infrastructure and deployment pipelines for our services.',
    requirements: ['4+ years DevOps experience', 'AWS, Docker, Kubernetes', 'CI/CD expertise required']
  },
  {
    id: 3,
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    description: 'Drive product strategy and roadmap for our AI and micro SaaS offerings.',
    requirements: ['3+ years product management', 'Technical background preferred', 'Strong communication skills']
  }
];

const CareersPage = () => {
  return (
    <Layout
      title="Careers - Zion Tech Group"
      description="Join our team of innovators and help shape the future of AI and technology solutions."
      keywords="careers, jobs, AI engineer, DevOps, product manager, remote work"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Join Our <span className="text-blue-600">Team</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Be part of the future of AI and technology. We're looking for passionate individuals 
                who want to make a difference.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Open Positions</h2>
                <p className="text-xl text-gray-600">
                  Discover exciting opportunities to grow your career with us.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {careers.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {job.department}
                      </span>
                      <span className="text-gray-500 text-sm">{job.type}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{job.location}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={`/careers/${job.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Apply Now
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Work With Us?</h2>
                <p className="text-xl text-gray-600">
                  We offer more than just a job - we offer a career with purpose.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: Rocket, title: "Innovation", description: "Work on cutting-edge AI and technology" },
                  { icon: Users, title: "Team", description: "Collaborate with talented professionals" },
                  { icon: Globe, title: "Remote", description: "Work from anywhere in the world" },
                  { icon: Award, title: "Growth", description: "Continuous learning and development" }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Us?</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Don't see a position that fits? We're always looking for exceptional talent.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CareersPage;