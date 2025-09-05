import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
    title: 'Senior Full Stack Developer',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120,000 - $180,000',
    experience: '5+ years',
    remote: true,
    description: 'We are looking for a senior full-stack developer to join our growing team. You will be responsible for building and maintaining our web applications using modern technologies.',
    requirements: [
      '5+ years experience in full-stack development',
      'Proficiency in React, Node.js, TypeScript',
      'Experience with databases (PostgreSQL, MongoDB)',
      'Knowledge of cloud deployment and DevOps',
      'Strong problem-solving and communication skills'
    ],
    benefits: [
      'Competitive salary',
      'Health and dental insurance',
      'Remote work options',
      'Learning and development budget',
      'Team building events'
    ],
    posted: '2024-01-10',
    featured: true
  },
  {
    id: 2,
    title: 'AI/ML Engineer',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$140,000 - $200,000',
    experience: '4+ years',
    remote: true,
    description: 'Join our AI team to develop cutting-edge machine learning solutions and AI-powered applications.',
    requirements: [
      '4+ years experience in machine learning',
      'Proficiency in Python, TensorFlow, PyTorch',
      'Experience with cloud AI services',
      'Strong mathematical background',
      'Experience with MLOps and model deployment'
    ],
    benefits: [
      'Competitive salary',
      'Stock options',
      'Health and dental insurance',
      'Flexible work hours',
      'Conference attendance budget'
    ],
    posted: '2024-01-08',
    featured: true
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$110,000 - $160,000',
    experience: '3+ years',
    remote: true,
    description: 'Help us build and maintain our cloud infrastructure and deployment pipelines.',
    requirements: [
      '3+ years experience in DevOps',
      'Proficiency in AWS, Docker, Kubernetes',
      'Experience with CI/CD pipelines',
      'Knowledge of infrastructure as code',
      'Strong scripting skills (Bash, Python)'
    ],
    benefits: [
      'Competitive salary',
      'Health and dental insurance',
      'Remote work options',
      'Learning and development budget',
      'Gym membership'
    ],
    posted: '2024-01-05',
    featured: false
  }
];

const companyValues = [
  {
    icon: Heart,
    title: 'People First',
    description: 'We believe our team is our greatest asset and invest in their growth and well-being.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We encourage creative thinking and embrace new technologies to solve complex problems.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work together as one team, sharing knowledge and supporting each other.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for the highest quality in everything we do and continuously improve.'
  }
];

const perks = [
  {
    icon: Laptop,
    title: 'Flexible Work',
    description: 'Work from anywhere with flexible hours and remote options'
  },
  {
    icon: BookOpen,
    title: 'Learning Budget',
    description: 'Annual budget for courses, conferences, and professional development'
  },
  {
    icon: Coffee,
    title: 'Great Culture',
    description: 'Fun team events, company retreats, and a supportive work environment'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Work on projects that make a real difference in the world'
  }
];

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of talented professionals and help us build the future of technology." />
        <meta name="keywords" content="jobs, careers, employment, tech jobs, software engineering, AI, machine learning" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Join Our <span className="text-yellow-400">Team</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Help us build the future of technology. Explore exciting career opportunities at Zion Tech Group.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                View Open Positions
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover exciting opportunities to join our growing team.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                        {job.featured && (
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-gray-600 mb-4">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        {job.remote && (
                          <div className="flex items-center space-x-1">
                            <Globe className="w-4 h-4" />
                            <span>Remote</span>
                          </div>
                        )}
                      </div>
                      <p className="text-gray-700 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                          {job.salary}
                        </span>
                        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-3 lg:ml-6">
                      <Link
                        href={`/jobs/${job.id}`}
                        className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                      <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                        Save Job
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Perks & Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Perks & Benefits
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive benefits and perks to support our team members.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {perks.map((perk, index) => (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <perk.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{perk.title}</h3>
                  <p className="text-gray-600">{perk.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Join Us?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Don't see the perfect role? We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors"
                >
                  Submit Your Resume
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn About Our Culture
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}