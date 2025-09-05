import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Heart,
  Laptop,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Clock,
  MapPin
} from 'lucide-react';

const CareersPage = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ]
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and microservices for our platform.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in full-stack development',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud technologies and DevOps'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Manage and optimize our cloud infrastructure and deployment pipelines.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years experience in DevOps/Infrastructure',
        'Proficiency in AWS, Docker, Kubernetes',
        'Experience with CI/CD pipelines',
        'Knowledge of monitoring and logging tools'
      ]
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Drive product strategy and roadmap for our AI and IT services.',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        '5+ years experience in product management',
        'Experience with AI/ML products preferred',
        'Strong analytical and communication skills',
        'Experience with agile development methodologies'
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs'
    },
    {
      icon: Laptop,
      title: 'Flexible Work',
      description: 'Remote work options, flexible hours, and modern equipment'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment with talented, passionate professionals'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Work on projects that make a difference worldwide'
    }
  ];

  return (
    <Layout 
      title="Careers - Zion Tech Group" 
      description="Join our team of innovators and help shape the future of technology. Explore career opportunities at Zion Tech Group."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Join Our Team
                </h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                  Be part of a team that's building the future of technology. 
                  We're looking for passionate individuals who want to make a difference.
                </p>
                <Link 
                  href="#positions" 
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer more than just a job - we offer a career path in cutting-edge technology.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-xl text-gray-600">
                Join our growing team and help us build the future of technology.
              </p>
            </div>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {position.type}
                        </span>
                        <span className="flex items-center">
                          <GraduationCap className="h-4 w-4 mr-1" />
                          {position.experience}
                        </span>
                      </div>
                    </div>
                    <Link 
                      href="/contact"
                      className="mt-4 lg:mt-0 inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{requirement}</span>
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
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Don't See Your Perfect Role?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Send Us Your Resume
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CareersPage;