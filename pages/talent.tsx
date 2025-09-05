<<<<<<< HEAD
import React, { useState } from 'react';
import MainLayout from './components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Users,
  MapPin,
  Clock,
  Briefcase,
  Star,
  ArrowRight,
  Filter,
  Search,
  Globe,
  Award,
  Heart,
  Zap,
  Calendar
} from 'lucide-react';

export default function TalentPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'design', name: 'Design' },
    { id: 'product', name: 'Product' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'sales', name: 'Sales' },
    { id: 'operations', name: 'Operations' }
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'remote', name: 'Remote' },
    { id: 'new-york', name: 'New York' },
    { id: 'san-francisco', name: 'San Francisco' },
    { id: 'london', name: 'London' },
    { id: 'singapore', name: 'Singapore' }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      department: 'engineering',
      location: 'remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'We are looking for a passionate Senior Full-Stack Developer to join our engineering team. You will work on building scalable web applications and APIs.',
      requirements: [
        '5+ years of experience with React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Strong understanding of database design and optimization',
        'Experience with CI/CD pipelines and DevOps practices',
        'Excellent problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      postedDate: '2024-01-15',
      isUrgent: true
    },
    {
      id: 2,
      title: 'AI/ML Engineer',
      department: 'engineering',
      location: 'san-francisco',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Join our AI team to build cutting-edge machine learning models and AI solutions that will transform our clients\' businesses.',
      requirements: [
        '3+ years of experience in machine learning and AI',
        'Proficiency in Python, TensorFlow, and PyTorch',
        'Experience with MLOps and model deployment',
        'Strong background in statistics and mathematics',
        'Experience with cloud ML platforms'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      postedDate: '2024-01-12',
      isUrgent: false
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      department: 'design',
      location: 'new-york',
      type: 'Full-time',
      experience: '4+ years',
      description: 'We are seeking a talented UX/UI Designer to create intuitive and beautiful user experiences for our products and client projects.',
      requirements: [
        '4+ years of experience in UX/UI design',
        'Proficiency in Figma, Sketch, and Adobe Creative Suite',
        'Strong portfolio showcasing user-centered design',
        'Experience with design systems and component libraries',
        'Knowledge of front-end development principles'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      postedDate: '2024-01-10',
      isUrgent: false
    },
    {
      id: 4,
      title: 'Product Manager',
      department: 'product',
      location: 'london',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead product strategy and execution for our core platform. Work closely with engineering, design, and business teams to deliver exceptional products.',
      requirements: [
        '5+ years of product management experience',
        'Experience with B2B SaaS products',
        'Strong analytical and problem-solving skills',
        'Excellent communication and leadership abilities',
        'Experience with agile development methodologies'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      postedDate: '2024-01-08',
      isUrgent: true
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Join our infrastructure team to build and maintain our cloud infrastructure, CI/CD pipelines, and monitoring systems.',
      requirements: [
        '4+ years of DevOps experience',
        'Proficiency with AWS, Docker, and Kubernetes',
        'Experience with Infrastructure as Code (Terraform)',
        'Strong scripting skills (Python, Bash)',
        'Experience with monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      postedDate: '2024-01-05',
      isUrgent: false
    },
    {
      id: 6,
      title: 'Sales Engineer',
      department: 'sales',
      location: 'singapore',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Help our clients understand and implement our technical solutions. Work closely with the sales team to drive technical discussions and demos.',
      requirements: [
        '3+ years of sales engineering experience',
        'Technical background in software development',
        'Excellent presentation and communication skills',
        'Experience with enterprise software sales',
        'Ability to travel as needed'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      postedDate: '2024-01-03',
      isUrgent: false
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const companyValues = [
    {
      title: 'Innovation',
      description: 'We encourage creative thinking and embrace new technologies',
      icon: Zap
    },
    {
      title: 'Collaboration',
      description: 'We work together to achieve common goals and support each other',
      icon: Users
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do',
      icon: Award
    },
    {
      title: 'Growth',
      description: 'We invest in our people and provide opportunities for development',
      icon: Heart
    }
  ];

  return (
    <MainLayout
      title="Join Our Team - Zion Tech Group"
      description="Join our talented team of engineers, designers, and innovators. Explore career opportunities at Zion Tech Group and help us build the future of technology."
      keywords="careers, jobs, hiring, engineering, design, product, remote work, technology careers"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
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
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Team
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Help us build the future of technology. Join our talented team of engineers, 
                designers, and innovators working on cutting-edge solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Find Your Perfect Role
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Search through our open positions and find the role that matches your skills and interests.
                </p>
              </motion.div>

              <div className="flex flex-col lg:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for jobs, skills, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
                  >
                    {departments.map(dept => (
                      <option key={dept.id} value={dept.id}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
                  >
                    {locations.map(location => (
                      <option key={location.id} value={location.id}>
                        {location.name}
                      </option>
                    ))}
                  </select>
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, Briefcase, Star, ArrowRight, CheckCircle, DollarSign, Calendar } from 'lucide-react';
import Layout from './components/layout/MainLayout';

const jobOpenings = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    company: 'Zion Tech Group',
    location: 'Remote / San Francisco, CA',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '$120,000 - $160,000',
    description: 'We are looking for a passionate Senior Full Stack Developer to join our growing team. You will be responsible for developing and maintaining our web applications using modern technologies.',
    requirements: [
      "3+ years experience in full-stack development",
      "Proficiency in React, Node.js, TypeScript",
      "Experience with databases (PostgreSQL, MongoDB)",
      "Knowledge of cloud deployment and DevOps"
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
    id: 2,
    title: 'AI/ML Engineer',
    company: 'Zion Tech Group',
    location: 'Remote / New York, NY',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '$130,000 - $180,000',
    description: 'Join our AI team to build cutting-edge machine learning solutions. You will work on developing and deploying AI models that power our products.',
    requirements: [
      "Master's degree in Computer Science or related field",
      "Experience with Python, TensorFlow, PyTorch",
      "Knowledge of machine learning algorithms",
      "Experience with cloud platforms (AWS, GCP, Azure)"
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
    company: 'Zion Tech Group',
    location: 'Remote / Austin, TX',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '$110,000 - $150,000',
    description: 'We need a DevOps Engineer to help us scale our infrastructure and improve our deployment processes.',
    requirements: [
      "Experience with Docker and Kubernetes",
      "Knowledge of CI/CD pipelines",
      "Experience with cloud platforms",
      "Scripting skills (Bash, Python)"
    ],
    benefits: [
      'Competitive salary',
      'Health and dental insurance',
      'Remote work options',
      'Professional development budget',
      'Gym membership'
    ],
    posted: '2024-01-05',
    featured: false
  },
  {
    id: 4,
    title: 'Product Manager',
    company: 'Zion Tech Group',
    location: 'San Francisco, CA',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '$140,000 - $180,000',
    description: 'Lead product development initiatives and work closely with engineering teams to deliver exceptional user experiences.',
    requirements: [
      "3+ years of product management experience",
      "Technical background preferred",
      "Experience with agile methodologies",
      "Strong communication skills"
    ],
    benefits: [
      'Competitive salary',
      'Stock options',
      'Health and dental insurance',
      'Flexible work arrangements',
      'Learning and development budget'
    ],
    posted: '2024-01-03',
    featured: true
  }
];

const categories = ['All', 'Engineering', 'Product', 'Design', 'Marketing', 'Sales'];

export default function TalentPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredJobs = jobOpenings.filter(job => {
    const matchesCategory = selectedCategory === 'All' || job.type === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout title="Talent - Zion Tech Group">
      <Head>
        <title>Talent - Zion Tech Group</title>
        <meta name="description" content="Join our team of talented professionals and help us build the future of technology." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Be part of a team that's building the future of technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#jobs" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  View Openings
                </Link>
                <Link href="/contact" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search jobs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
                </div>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Job Listings */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="space-y-8">
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-2xl font-bold text-gray-900 mr-3">{job.title}</h3>
                          {job.isUrgent && (
                            <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-sm font-semibold">
                              URGENT
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-4">{job.description}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-2" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{locations.find(l => l.id === job.location)?.name}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{job.experience}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>Posted {new Date(job.postedDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:ml-6">
                        <button className="w-full lg:w-auto bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-lg transition-colors duration-300 font-semibold flex items-center justify-center">
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.slice(0, 3).map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                              <Star className="w-4 h-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {job.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start text-sm text-gray-600">
                              <Heart className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredJobs.length === 0 && (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
                  <p className="text-gray-600">Try adjusting your search criteria or check back later for new openings.</p>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {companyValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
=======
        {/* Jobs Grid */}
        <section id="jobs" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  {job.featured && (
                    <div className="flex items-center mb-4">
                      <Star className="h-5 w-5 text-yellow-500 mr-2" />
                      <span className="text-sm font-medium text-yellow-600">Featured</span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                  <p className="text-blue-600 font-medium mb-2">{job.company}</p>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span className="text-sm">{job.type}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span className="text-sm">{job.salary}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{job.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.slice(0, 3).map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      Posted {job.posted}
                    </div>
                    <Link href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                      Apply Now <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                We're always looking for talented individuals. Send us your resume and we'll 
                keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Send Your Resume
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold"
                >
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
=======
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
            <p className="text-xl mb-8 text-blue-100">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Send Resume
            </Link>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
