
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Heart,
  Zap,
  Globe,
  Code,
  Brain,
  Shield,
  TrendingUp,
  Award,
  Coffee,
  Laptop,
  Smartphone,
  Database,
  Cloud,
  Lock,
  BarChart3,
  Target,
  Lightbulb
} from 'lucide-react'
import Layout from '../components/Layout'
const jobCategories = [
  { id: 'engineering', name: 'Engineering', count: 12, icon: Code },
  { id: 'design', name: 'Design', count: 5, icon: Brain },
  { id: 'product', name: 'Product', count: 3, icon: Target },
  { id: 'marketing', name: 'Marketing', count: 4, icon: TrendingUp },
  { id: 'sales', name: 'Sales', count: 6, icon: Users },
  { id: 'operations', name: 'Operations', count: 2, icon: Shield }]
const openPositions = [{
    id: 1,
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '5+ years',
    description: 'We are looking for a passionate Senior Full Stack Developer to join our growing team. You will work on cutting-edge AI and cloud solutions, building scalable applications that serve thousands of users.',
    requirements: [
      '5+ years of experience in full-stack development',
      'Proficiency in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Knowledge of AI/ML integration',
      'Strong problem-solving and communication skills'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      'Professional development budget',
      'Unlimited PTO'
    ],
    posted: '2024-01-15',
    featured: true
  },
  {
    id: 2,
    title: 'AI/ML Engineer',
    department: 'Engineering',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Join our AI team to build innovative machine learning solutions and AI-powered applications. Work with cutting-edge technologies and contribute to products that make a real impact.',
    requirements: [
      '3+ years of experience in AI/ML development',
      'Proficiency in Python, TensorFlow, and PyTorch',
      'Experience with cloud ML platforms',
      'Knowledge of NLP and computer vision',
      'Strong mathematical and statistical background'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      'Professional development budget',
      'Unlimited PTO'
    ],
    posted: '2024-01-10',
    featured: true
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Create beautiful, intuitive user experiences for our AI and technology products. Work closely with engineering and product teams to design solutions that users love.',
    requirements: [
      '3+ years of UX/UI design experience',
      'Proficiency in Figma, Sketch, or Adobe Creative Suite',
      'Experience with design systems',
      'Knowledge of accessibility principles',
      'Strong portfolio showcasing user-centered design'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      'Professional development budget',
      'Unlimited PTO'
    ],
    posted: '2024-01-08',
    featured: false
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Help us build and maintain robust, scalable infrastructure. Work with cutting-edge cloud technologies and automation tools to ensure our systems run smoothly.',
    requirements: [
      '4+ years of DevOps experience',
      'Proficiency in AWS, Azure, or GCP',
      'Experience with Docker and Kubernetes',
      'Knowledge of CI/CD pipelines',
      'Strong scripting skills (Python, Bash)'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      'Professional development budget',
      'Unlimited PTO'
    ],
    posted: '2024-01-05',
    featured: false
  },
  {
    id: 5,
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Lead product strategy and execution for our AI and technology solutions. Work with cross-functional teams to deliver products that delight users and drive business growth.',
    requirements: [
      '4+ years of product management experience',
      'Experience with AI/ML products',
      'Strong analytical and problem-solving skills',
      'Excellent communication and leadership skills',
      'Experience with agile development methodologies'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      'Professional development budget',
      'Unlimited PTO'
    ],
    posted: '2024-01-03',
    featured: false
  }]
const companyValues = [{
    title: 'Innovation',
    description: 'We embrace new technologies and creative solutions to solve complex problems.',
    icon: Lightbulb
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and diverse perspectives to achieve great things.',
    icon: Users
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest quality in everything we do, from code to customer service.',
    icon: Award
  },
  {
    title: 'Growth',
    description: 'We invest in our people and provide opportunities for continuous learning and development.',
    icon: TrendingUp
  }]
const benefits = [{
    title: 'Health & Wellness',
    description: 'Comprehensive health, dental, and vision insurance for you and your family.',
    icon: Heart
  },
  {
    title: 'Flexible Work',
    description: 'Remote work options and flexible hours to support work-life balance.',
    icon: Laptop
  },
  {
    title: 'Learning & Development',
    description: 'Annual learning budget and time off for conferences and courses.',
    icon: Brain
  },
  {
    title: 'Modern Tools',
    description: 'Latest hardware and software tools to help you do your best work.',
    icon: Code
  },
  {
    title: 'Team Events',
    description: 'Regular team building activities and company retreats.',
    icon: Coffee
  },
  {
    title: 'Equity',
    description: 'Stock options to share in the company\'s success and growth.',
    icon: TrendingUp
  }]
export default function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  const filteredJobs = selectedCategory === 'all'
    ? openPositions
    : openPositions.filter(job => job.department.toLowerCase() === selectedCategory)
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Team
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Build the future of AI and technology with us. We're looking for passionate, talented individuals to join our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  View Open Positions
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Learn About Us
                </button>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Company Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-blue-600 mb-4">
                    <value.icon className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
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
        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Benefits & Perks
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive benefits to support you and your family
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-blue-600 mb-4">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
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
        {/* Job Categories Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find your perfect role and join our growing team
              </p>
            </div>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Positions ({openPositions.length})
              </button>
              {jobCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
            {/* Job Listings */}
            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {job.title}
                        </h3>
                        {job.featured && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {job.experience}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {job.description}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 mt-4 lg:mt-0 lg:ml-6">
                      <button
                        onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                      </button>
                      <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                        Apply Now
                      </button>
                    </div>
                  </div>
                  {/* Job Details */}
                  {selectedJob === job.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-gray-200"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">Benefits</h4>
                          <ul className="space-y-2">
                            {job.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No positions found</h3>
                <p className="text-gray-600">
                  We don't have any open positions in this category right now. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Don't See Your Dream Job?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Send Resume
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  )
}