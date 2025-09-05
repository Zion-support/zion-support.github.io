import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';

const positions = [
  {
    title: 'Senior AI Engineer',
    department: 'AI & Machine Learning',
    location: 'Remote',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
    requirements: [
      'Master\'s degree in Computer Science or related field',
      '5+ years experience in AI/ML development',
      'Proficiency in Python, TensorFlow, PyTorch',
      'Experience with cloud platforms (AWS, Azure, GCP)',
      'Strong problem-solving and communication skills'
    ]
  },
  {
    title: 'Cloud Solutions Architect',
    department: 'Cloud Infrastructure',
    location: 'New York, NY',
    type: 'Full-time',
    experience: '7+ years',
    description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '7+ years experience in cloud architecture',
      'Expertise in AWS, Azure, or Google Cloud',
      'Experience with containerization (Docker, Kubernetes)',
      'Strong understanding of DevOps practices'
    ]
  },
  {
    title: 'Frontend Developer',
    department: 'Web Development',
    location: 'San Francisco, CA',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Build responsive and interactive web applications using modern technologies.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years experience in frontend development',
      'Proficiency in React, Next.js, TypeScript',
      'Experience with CSS frameworks (Tailwind, Bootstrap)',
      'Knowledge of web performance optimization'
    ]
  },
  {
    title: 'Data Scientist',
    department: 'Data Analytics',
    location: 'Remote',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Analyze complex data sets to provide actionable insights for business decisions.',
    requirements: [
      'Master\'s degree in Data Science, Statistics, or related field',
      '4+ years experience in data analysis',
      'Proficiency in Python, R, SQL',
      'Experience with data visualization tools',
      'Strong statistical and analytical skills'
    ]
  },
  {
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Austin, TX',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Manage and optimize our development and deployment pipelines.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '5+ years experience in DevOps',
      'Experience with CI/CD pipelines',
      'Knowledge of infrastructure as code (Terraform, CloudFormation)',
      'Strong scripting skills (Bash, Python)'
    ]
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    experience: '6+ years',
    description: 'Lead product strategy and roadmap for our technology solutions.',
    requirements: [
      'Bachelor\'s degree in Business, Engineering, or related field',
      '6+ years experience in product management',
      'Experience with agile development methodologies',
      'Strong analytical and communication skills',
      'Technical background preferred'
    ]
  }
];

const benefits = [
  {
    icon: Star,
    title: 'Competitive Salary',
    description: 'Above-market compensation with performance bonuses'
  },
  {
    icon: Users,
    title: 'Great Team',
    description: 'Work with talented and passionate professionals'
  },
  {
    icon: Clock,
    title: 'Flexible Hours',
    description: 'Work-life balance with flexible scheduling options'
  },
  {
    icon: MapPin,
    title: 'Remote Work',
    description: 'Work from anywhere with full remote support'
  }
];

export default function TalentPage() {
  return (
    <Layout 
      title="Join Our Team - Zion Tech Group"
      description="Join our team of talented professionals and help us build the future of technology. Explore career opportunities at Zion Tech Group."
    >
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Team
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Be part of a team that's shaping the future of technology. 
                Join us in building innovative solutions that make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#positions"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center"
                >
                  View Open Positions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="border border-gray-600 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Us?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer more than just a job - we provide an environment where you can grow, 
                learn, and make a real impact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
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

        {/* Open Positions */}
        <section id="positions" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Explore our current job openings and find the perfect role for you.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {positions.map((position, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                          {position.experience}
                        </span>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center lg:w-auto w-full"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {position.description}
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Requirements:
                    </h4>
                    <ul className="space-y-2">
                      {position.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
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
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume 
                and let us know how you'd like to contribute to our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  Send Resume
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
                >
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}