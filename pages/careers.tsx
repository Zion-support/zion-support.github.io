import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  Heart,
  Laptop,
  BookOpen,
  Award,
  Coffee,
  Globe,
  CheckCircle,
  ArrowRight
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
import { motion } from 'framer-motion';
import { 
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
<<<<<<< HEAD
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
} from 'lucide-react';

const positions = [
  {
<<<<<<< HEAD
<<<<<<< HEAD
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
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget']
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
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget']
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
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
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
<<<<<<< HEAD
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget', 'Certification support']
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
<<<<<<< HEAD
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget', 'Certification support']
=======
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget']
  },
  {
    title: 'Product Manager',
    location: 'Remote / Delaware',
    type: 'Full-time',
    department: 'Product',
    description: 'Drive product strategy and roadmap for our AI and technology solutions.',
    requirements: [
      '5+ years of product management',
      'AI/ML product experience preferred',
      'Strong analytical skills',
      'Excellent communication skills'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget']
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Certification support"]
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
  }
];

const benefits = [
  {
<<<<<<< HEAD
<<<<<<< HEAD
    title: "Health Insurance",
    description: "Comprehensive health coverage for you and your family"
  },
  {
    title: "Flexible Work",
    description: "Remote work options and flexible hours"
=======
    icon: Heart,
<<<<<<< HEAD
=======
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs"
  },
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description: "Competitive salaries, performance bonuses, and equity participation"
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Professional development budget, conference attendance, and training programs"
  },
  {
    icon: Globe,
    title: "Flexible Work",
    description: "Remote work options, flexible hours, and work-life balance"
  },
  {
    icon: Coffee,
    title: "Great Culture",
    description: "Collaborative environment, team events, and inclusive workplace"
  },
  {
    icon: Award,
    title: "Career Growth",
    description: "Clear career paths, mentorship programs, and advancement opportunities"
  }
];

const values = [
  {
    title: "Innovation",
    description: "We encourage creative thinking and embrace new technologies to solve complex problems."
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and open communication across all levels."
  },
  {
    title: "Excellence",
    description: "We strive for the highest quality in everything we do and continuously improve."
  },
  {
    title: "Integrity",
    description: "We conduct business with honesty, transparency, and ethical practices."
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
  }
];

export default function CareersPage() {
  return (
<<<<<<< HEAD
    <Layout
      title="Careers - Zion Tech Group"
      description="Join our team of technology experts. Explore career opportunities in AI, cloud computing, cybersecurity, and more. Competitive benefits and growth opportunities."
      keywords="careers, jobs, employment, AI engineer, cloud architect, cybersecurity specialist, data scientist, technology careers"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
=======
    icon: Heart,
=======
    <MainLayout
      title="Careers - Zion Tech Group"
      description="Join our team of talented professionals and help shape the future of technology. Explore career opportunities at Zion Tech Group."
      keywords="careers, jobs, employment, technology careers, AI jobs, software development"
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
    icon: Heart,
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
    title: 'Health & Wellness',
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
  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of innovative developers, engineers, and designers building the future of technology." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
                Join Our <span className="text-blue-600">Team</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Help us build the future of AI and technology. We're looking for passionate, 
                innovative individuals to join our growing team.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Learn About Us
                </Link>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
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
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
<<<<<<< HEAD
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
              Join Our Team
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-indigo-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
=======
=======
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer competitive benefits and a great work environment that fosters growth and innovation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
<<<<<<< HEAD
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
            >
              Build the future with us. Join our team of passionate technologists.
            </motion.p>
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
=======
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for you.
              </p>
            </motion.div>

>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
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
                      Apply Now
                    </button>
                  </div>

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
                  </div>
                </motion.div>
              ))}
            </div>
<<<<<<< HEAD
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
=======
          </div>
        </section>

>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
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
            </motion.div>
          </div>
        </section>
      </div>
    </>
<<<<<<< HEAD
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
<<<<<<< HEAD
=======
        </section>
      </div>
    </MainLayout>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
  );
}