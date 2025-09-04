import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, 
  MapPin, 
  Clock, 
  DollarSign,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Heart,
  Zap,
  Shield,
  Globe,
  Code
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const benefits = [
  {
    title: 'Competitive Salary',
    description: 'Above-market compensation packages',
    icon: DollarSign,
    color: 'from-green-600 to-green-800'
  },
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs',
    icon: Heart,
    color: 'from-red-600 to-red-800'
  },
  {
    title: 'Flexible Work',
    description: 'Remote work options and flexible hours',
    icon: Globe,
    color: 'from-blue-600 to-blue-800'
  },
  {
    title: 'Learning & Growth',
    description: 'Professional development and training opportunities',
    icon: Zap,
    color: 'from-yellow-600 to-yellow-800'
  },
  {
    title: 'Work-Life Balance',
    description: 'Generous PTO and work-life balance initiatives',
    icon: Clock,
    color: 'from-purple-600 to-purple-800'
  },
  {
    title: 'Team Culture',
    description: 'Collaborative and inclusive work environment',
    icon: Users,
    color: 'from-indigo-600 to-indigo-800'
  }
];

const openPositions = [
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote / Delaware',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead development of our core platform and mentor junior developers.',
    requirements: [
      '5+ years full-stack development experience',
      'Expert in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS/Azure)',
      'Strong leadership and mentoring skills'
    ],
    posted: '2 days ago'
  },
  {
    title: 'AI/ML Engineer',
    department: 'AI Services',
    location: 'Remote / Delaware',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Build and deploy machine learning models for our AI services platform.',
    requirements: [
      '3+ years ML/AI experience',
      'Proficient in Python, TensorFlow, PyTorch',
      'Experience with MLOps and model deployment',
      'Strong understanding of NLP and computer vision'
    ],
    posted: '1 week ago'
  },
  {
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote / Delaware',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Manage and scale our cloud infrastructure and deployment pipelines.',
    requirements: [
      '4+ years DevOps experience',
      'Expert in AWS, Docker, Kubernetes',
      'Experience with CI/CD pipelines',
      'Strong automation and scripting skills'
    ],
    posted: '3 days ago'
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote / Delaware',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Drive product strategy and roadmap for our technology solutions.',
    requirements: [
      '3+ years product management experience',
      'Technical background preferred',
      'Experience with B2B SaaS products',
      'Strong analytical and communication skills'
    ],
    posted: '5 days ago'
  },
  {
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Remote / Delaware',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Create intuitive and beautiful user experiences for our platform.',
    requirements: [
      '2+ years UX/UI design experience',
      'Proficient in Figma, Sketch, Adobe Creative Suite',
      'Experience with design systems',
      'Strong portfolio of B2B applications'
    ],
    posted: '1 week ago'
  },
  {
    title: 'Sales Engineer',
    department: 'Sales',
    location: 'Remote / Delaware',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Support sales team with technical expertise and client demonstrations.',
    requirements: [
      '3+ years technical sales experience',
      'Strong technical background',
      'Excellent presentation skills',
      'Experience with enterprise software sales'
    ],
    posted: '4 days ago'
  }
];

const departments = [
  { name: 'Engineering', count: 8, color: 'bg-blue-100 text-blue-800' },
  { name: 'AI Services', count: 3, color: 'bg-purple-100 text-purple-800' },
  { name: 'Product', count: 2, color: 'bg-green-100 text-green-800' },
  { name: 'Design', count: 2, color: 'bg-pink-100 text-pink-800' },
  { name: 'Sales', count: 4, color: 'bg-orange-100 text-orange-800' },
  { name: 'Marketing', count: 3, color: 'bg-indigo-100 text-indigo-800' }
];

const values = [
  {
    title: 'Innovation',
    description: 'We embrace new technologies and creative solutions',
    icon: Zap
  },
  {
    title: 'Collaboration',
    description: 'We work together to achieve common goals',
    icon: Users
  },
  {
    title: 'Integrity',
    description: 'We maintain the highest ethical standards',
    icon: Shield
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest quality in everything we do',
    icon: Code
  }
];

export default function CareersPage() {
  return (
    <MainLayout
      title="Careers - Zion Tech Group"
      description="Join our team of talented professionals. Explore career opportunities, benefits, and culture at Zion Tech Group."
      keywords="careers, jobs, employment, hiring, benefits, culture, remote work"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
                Join Our{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Team
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
                Build the future of technology with us. We're looking for passionate 
                individuals who want to make a difference.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                <Link href="#open-positions">
                  <span className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    View Open Positions
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Contact Us
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Team Members</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="text-3xl font-bold text-green-600 mb-2">22</div>
                <div className="text-gray-600">Open Positions</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">Remote Friendly</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-orange-600 mb-2">4.8</div>
                <div className="text-gray-600">Employee Rating</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Work With Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer competitive benefits and a great work environment to help you thrive.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-lg flex items-center justify-center mb-6`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
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

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
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

        {/* Department Filter */}
        <section className="py-12 bg-gray-50 border-t">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Filter by Department
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {departments.map((dept, index) => (
                  <button
                    key={dept.name}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${dept.color} hover:opacity-80`}
                  >
                    {dept.name} ({dept.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find your next opportunity with us. We're always looking for talented individuals to join our team.
              </p>
            </motion.div>

            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {position.experience}
                        </div>
                        <span className="text-gray-500">
                          Posted {position.posted}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        {position.description}
                      </p>
                    </div>
                    <div className="lg:ml-8">
                      <Link
                        href="/contact"
                        className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {req}
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't See Your Role?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
                We're always looking for talented individuals. Send us your resume 
                and let us know how you can contribute to our team.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact">
                  <span className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Send Resume
                  </span>
                </Link>
                <Link href="/about">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Learn About Us
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}