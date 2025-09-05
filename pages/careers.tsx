import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
<<<<<<< HEAD
  ArrowRight, 
  Users, 
  Award, 
  Heart, 
  Globe, 
  CheckCircle,
  Star,
  Clock,
  MapPin,
  Briefcase,
  GraduationCap,
  Coffee
} from 'lucide-react';
=======
  Users, 
  MapPin, 
  Clock, 
  DollarSign, 
  Heart, 
  Laptop, 
  GraduationCap, 
  ArrowRight,
  CheckCircle,
  Star,
  Building,
  Zap
} from 'lucide-react';

const positions = [
  {
    title: 'Senior Full Stack Developer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$80,000 - $120,000',
    requirements: [
      '5+ years of full-stack development experience',
      'Proficiency in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS, Azure, GCP)',
      'Strong problem-solving and communication skills'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget', 'Certification support']
  },
  {
    title: 'AI/ML Engineer',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$100,000 - $150,000',
    requirements: [
      '3+ years of machine learning experience',
      'Proficiency in Python, TensorFlow, PyTorch',
      'Experience with MLOps and model deployment',
      'Strong mathematical and statistical background'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget', 'Certification support']
  },
  {
    title: 'DevOps Engineer',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$90,000 - $130,000',
    requirements: [
      '4+ years of DevOps experience',
      'Proficiency in Kubernetes, Docker, CI/CD',
      'Experience with infrastructure as code',
      'Strong automation and scripting skills'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget', 'Certification support']
  }
];
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
<<<<<<< HEAD
    description: 'Comprehensive health insurance, mental health support, and wellness programs.'
  },
  {
    icon: GraduationCap,
    title: 'Learning & Development',
    description: 'Continuous learning opportunities, conference attendance, and skill development programs.'
  },
  {
    icon: Globe,
    title: 'Remote Work',
    description: 'Flexible remote work options and modern collaboration tools.'
  },
  {
    icon: Coffee,
    title: 'Work-Life Balance',
    description: 'Flexible hours, unlimited PTO, and family-friendly policies.'
  },
  {
    icon: Award,
    title: 'Career Growth',
    description: 'Clear career paths, mentorship programs, and advancement opportunities.'
  },
  {
    icon: Users,
    title: 'Team Culture',
    description: 'Collaborative environment, team events, and strong company culture.'
  }
];

const openPositions = [
  {
    title: 'Senior AI Engineer',
    department: 'AI Services',
    location: 'San Francisco, CA / Remote',
    type: 'Full-time',
    description: 'Lead AI solution development and machine learning model implementation.',
    requirements: [
      '5+ years experience in AI/ML',
      'Python, TensorFlow, PyTorch',
      'Strong problem-solving skills',
      'PhD in Computer Science preferred'
    ]
  },
  {
    title: 'Full Stack Developer',
    department: 'Micro SaaS',
    location: 'New York, NY / Remote',
    type: 'Full-time',
    description: 'Build scalable web applications and microservices architecture.',
    requirements: [
      '3+ years full-stack experience',
      'React, Node.js, TypeScript',
      'Cloud platform experience',
      'Agile development experience'
    ]
  },
  {
    title: 'IT Solutions Architect',
    department: 'IT Services',
    location: 'Austin, TX / Remote',
    type: 'Full-time',
    description: 'Design and implement enterprise IT infrastructure solutions.',
    requirements: [
      '7+ years IT architecture experience',
      'AWS, Azure, GCP expertise',
      'Security best practices',
      'Leadership experience'
    ]
  },
  {
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Los Angeles, CA / Remote',
    type: 'Full-time',
    description: 'Create intuitive and beautiful user experiences for our products.',
    requirements: [
      '4+ years design experience',
      'Figma, Sketch, Adobe Creative Suite',
      'User research skills',
      'Portfolio required'
    ]
  }
];

const values = [
  'Innovation and creativity',
  'Collaboration and teamwork',
  'Continuous learning',
  'Customer focus',
  'Integrity and transparency',
  'Diversity and inclusion'
];

export default function CareersPage() {
=======
    description: 'Comprehensive health insurance and wellness programs'
  },
  {
    icon: Laptop,
    title: 'Remote Work',
    description: 'Flexible remote work options and home office stipend'
  },
  {
    icon: GraduationCap,
    title: 'Learning & Development',
    description: 'Professional development budget and conference attendance'
  },
  {
    icon: Zap,
    title: 'Innovation Time',
    description: '20% time for personal projects and innovation'
  }
];

export default function Careers() {
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Join our team at Zion Tech Group. Explore career opportunities in AI, IT, and software development. Build the future with us." />
        <meta name="keywords" content="careers, jobs, employment, AI engineer, developer, designer, remote work" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Navigation */}
        <nav className="relative z-10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white text-xl font-bold">Zion Tech Group</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              <Link href="/careers" className="text-white font-semibold">Careers</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto text-center">
=======
        <meta name="description" content="Join our team of innovative developers, engineers, and designers building the future of technology." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Join Our
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Team
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Build the future of technology with us. We're looking for passionate individuals 
                who want to make a difference in the world of AI, IT, and software development.
              </p>
              <Link href="#positions" className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
=======
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Amazing Team
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                We're looking for passionate individuals who want to build the future of technology. 
                Join us in creating innovative solutions that make a difference.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  View Open Positions
                </button>
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn About Us
                </Link>
              </div>
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Why Work With Us */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Work With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer more than just a job - we provide a platform for growth, innovation, and impact.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
=======
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
                We offer competitive benefits and a great work environment that fosters growth and innovation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
<<<<<<< HEAD
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <benefit.icon className="h-12 w-12 text-blue-400 mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
=======
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Our Values */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Values</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our values guide everything we do and shape our company culture. 
                  We believe in creating an environment where everyone can thrive and contribute.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Join Our Mission</h3>
                <p className="text-blue-100 mb-6">
                  We're building the future of technology, one innovation at a time. 
                  Join us in creating solutions that transform businesses and improve lives.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-200" />
                    <span className="text-blue-100">50+ Team Members</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-blue-200" />
                    <span className="text-blue-100">Remote-First Culture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-blue-200" />
                    <span className="text-blue-100">Industry Recognition</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Open Positions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current openings and find the perfect role for your career growth.
              </p>
            </motion.div>
            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-gray-300">
                        <div className="flex items-center space-x-2">
                          <Briefcase className="h-4 w-4" />
                          <span>{position.department}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{position.type}</span>
                        </div>
                      </div>
                    </div>
                    <Link href="/contact" className="mt-4 lg:mt-0 inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
=======
        {/* Open Positions Section */}
        <section className="py-20 bg-gray-50">
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
                Explore our current job openings and find the perfect role for you.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {positions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {position.salary}
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
<<<<<<< HEAD
                  <p className="text-gray-300 mb-6">{position.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Requirements:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {position.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{requirement}</span>
                        </li>
                      ))}
                    </ul>
=======

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.benefits.map((benefit, benefitIndex) => (
                        <span
                          key={benefitIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Don't See Your Role?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
              </p>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Send Your Resume
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
=======
        {/* Culture Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Culture
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe in creating an inclusive, collaborative environment where everyone can thrive.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Collaborative
                </h3>
                <p className="text-gray-600">
                  We work together as a team, sharing knowledge and supporting each other's growth.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Innovative
                </h3>
                <p className="text-gray-600">
                  We encourage creative thinking and experimentation to solve complex problems.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Inclusive
                </h3>
                <p className="text-gray-600">
                  We value diversity and create an environment where everyone feels welcome and valued.
                </p>
              </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Send Resume
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </button>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Z</span>
                  </div>
                  <span className="text-white text-xl font-bold">Zion Tech Group</span>
                </div>
                <p className="text-gray-400">
                  Transforming businesses with cutting-edge technology solutions.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/ai-services" className="text-gray-400 hover:text-white">AI Services</Link></li>
                  <li><Link href="/it-services" className="text-gray-400 hover:text-white">IT Services</Link></li>
                  <li><Link href="/micro-saas" className="text-gray-400 hover:text-white">Micro SaaS</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                  <li><Link href="/careers" className="text-white font-semibold">Careers</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Contact</h3>
                <p className="text-gray-400">info@ziontechgroup.com</p>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">&copy; 2024 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}