import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Users,
  Clock,
  CheckCircle,
  Globe,
  Heart,
  Zap,
  Award,
  BookOpen
} from 'lucide-react';
import Layout from '../components/Layout';

const jobOpenings = [
  {
    id: 1,
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
    requirements: [
      'Master\'s degree in Computer Science or related field',
      '5+ years of experience in AI/ML development',
      'Proficiency in Python, TensorFlow, PyTorch',
      'Experience with cloud platforms (AWS, GCP, Azure)',
      'Strong problem-solving and communication skills'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      '401(k) with company matching',
      'Flexible work arrangements',
      'Professional development budget'
    ],
    posted: '2024-01-15'
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Middletown, DE',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Build scalable web applications and APIs using modern technologies.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of full-stack development experience',
      'Proficiency in React, Node.js, TypeScript',
      'Experience with databases (PostgreSQL, MongoDB)',
      'Knowledge of cloud services and DevOps practices'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      '401(k) with company matching',
      'Flexible work arrangements',
      'Professional development budget'
    ],
    posted: '2024-01-10'
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Manage and optimize our cloud infrastructure and deployment pipelines.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '4+ years of DevOps experience',
      'Proficiency in AWS, Docker, Kubernetes',
      'Experience with CI/CD pipelines',
      'Knowledge of monitoring and logging tools'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      '401(k) with company matching',
      'Flexible work arrangements',
      'Professional development budget'
    ],
    posted: '2024-01-05'
  },
  {
    id: 4,
    title: 'AI Product Manager',
    department: 'Product',
    location: 'Middletown, DE',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead product strategy and development for AI-powered solutions.',
    requirements: [
      'Bachelor\'s degree in Business, Engineering, or related field',
      '5+ years of product management experience',
      'Experience with AI/ML products',
      'Strong analytical and communication skills',
      'Experience with agile development methodologies'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      '401(k) with company matching',
      'Flexible work arrangements',
      'Professional development budget'
    ],
    posted: '2024-01-03'
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
    icon: BookOpen,
    title: 'Learning & Development',
    description: 'Professional development budget and access to learning resources'
  },
  {
    icon: Award,
    title: 'Recognition',
    description: 'Performance bonuses and recognition programs for outstanding work'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Work on projects that make a positive impact worldwide'
  },
  {
    icon: Users,
    title: 'Great Team',
    description: 'Collaborate with talented and passionate professionals'
  }
];

const culture = [
  'Innovation and creativity are encouraged',
  'Collaborative and inclusive environment',
  'Continuous learning and growth opportunities',
  'Work-life balance is prioritized',
  'Diversity and inclusion are core values',
  'Open communication and transparency'
];

export default function CareersPage() {
  return (
    <Layout
      title="Careers - Zion Tech Group | Join Our Team"
      description="Join Zion Tech Group and be part of a team that's shaping the future of technology. Explore career opportunities in AI, engineering, and more."
      keywords="careers, jobs, employment, AI engineer, software developer, tech jobs, remote work"
    >
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Join Our <span className="text-blue-400">Team</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            >
              Be part of a team that's shaping the future of technology
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="#open-positions" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
                View Open Positions
              </Link>
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Join Zion Tech Group?</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We're building the future of technology and we want you to be part of it
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Culture</h2>
                <p className="text-lg text-gray-700">
                  We believe in creating an environment where everyone can thrive and grow
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">What We Value</h3>
                  <ul className="space-y-3">
                    {culture.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-600 mr-3" />
                      <a href="tel:+13024640950" className="text-gray-700 hover:text-blue-600">+1 302 464 0950</a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-600 mr-3" />
                      <a href="mailto:kleber@ziontechgroup.com" className="text-gray-700 hover:text-blue-600">kleber@ziontechgroup.com</a>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                      <span className="text-gray-700">364 E Main St STE 1008<br />Middletown, DE 19709</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="open-positions" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Explore our current job openings and find your next opportunity
              </p>
            </div>

            <div className="space-y-8">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
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
                        <span className="flex items-center">
                          <Award className="w-4 h-4 mr-1" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="text-sm text-gray-500">Posted: {job.posted}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{job.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {job.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Link
                      href="/contact"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors font-medium"
                    >
                      Apply Now
                    </Link>
                    <Link
                      href={`/contact?subject=Question about ${job.title}`}
                      className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg transition-colors font-medium"
                    >
                      Ask Questions
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't See Your Role?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <Link href="/contact" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
              Send Your Resume
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}