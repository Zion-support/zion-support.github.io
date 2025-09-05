<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
import React from 'react';
import { motion } from 'framer-motion';
=======
import React from 'react';
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
<<<<<<< HEAD
  MapPin, 
  Clock, 
  Users, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Zap, 
  Globe, 
  Shield, 
  Brain, 
  Code, 
  BarChart3, 
  ArrowRight, 
<<<<<<< HEAD
  CheckCircle, 
  Star, 
  Award, 
  Rocket, 
  Lightbulb, 
  Target, 
  Phone, 
  Mail, 
  ExternalLink
=======
  CheckCircle,
  DollarSign,
  GraduationCap
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
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
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
} from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
<<<<<<< HEAD
    title: 'Senior AI Engineer',
    department: 'AI & Machine Learning',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
    requirements: [
      'PhD in Computer Science or related field',
      '5+ years experience in AI/ML',
      'Expertise in Python, TensorFlow, PyTorch',
      'Experience with cloud platforms (AWS, GCP, Azure)',
      'Strong problem-solving and communication skills'
    ],
    benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Flexible work hours'],
    posted: '2 days ago',
    urgent: true
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Build scalable web applications and APIs using modern technologies.',
    requirements: [
      'Bachelor\'s degree in Computer Science',
      '3+ years full-stack development experience',
      'Proficiency in React, Node.js, TypeScript',
      'Experience with databases (PostgreSQL, MongoDB)',
      'Knowledge of cloud platforms and DevOps'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Professional development', 'Remote work'],
    posted: '1 week ago',
    urgent: false
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Manage cloud infrastructure and implement CI/CD pipelines for scalable systems.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '4+ years DevOps experience',
      'Expertise in AWS, Docker, Kubernetes',
      'Experience with Terraform, Ansible',
      'Knowledge of monitoring and logging tools'
    ],
<<<<<<< HEAD
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Certification support"]
=======
    benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Learning budget'],
    posted: '3 days ago',
    urgent: false
=======
    title: "Senior AI/ML Engineer",
    department: "AI & Machine Learning",
    location: "Remote / New York, NY",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.",
    requirements: [
      "Master's degree in Computer Science or related field",
      "5+ years experience in AI/ML development",
      "Expertise in Python, TensorFlow, PyTorch",
      "Experience with cloud platforms (AWS, Azure, GCP)",
      "Strong problem-solving and communication skills"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "401(k) with company matching"
    ],
    posted: "2024-01-15",
    featured: true
  },
  {
    id: 2,
    title: "Cloud Solutions Architect",
    department: "Technology",
    location: "Remote / San Francisco, CA",
    type: "Full-time",
    experience: "7+ years",
    description: "Design and implement scalable cloud solutions for enterprise clients across multiple cloud platforms.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "7+ years experience in cloud architecture",
      "Certifications in AWS, Azure, or GCP",
      "Experience with containerization and orchestration",
      "Strong leadership and mentoring skills"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "401(k) with company matching"
    ],
    posted: "2024-01-12",
    featured: true
  },
  {
    id: 3,
    title: "Cybersecurity Specialist",
    department: "Security",
    location: "Remote / Austin, TX",
    type: "Full-time",
    experience: "4+ years",
    description: "Protect client systems and data through advanced security measures and threat detection.",
    requirements: [
      "Bachelor's degree in Cybersecurity or related field",
      "4+ years experience in cybersecurity",
      "Certifications (CISSP, CISM, CEH)",
      "Experience with security tools and frameworks",
      "Knowledge of compliance standards"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "401(k) with company matching"
    ],
    posted: "2024-01-10"
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  },
  {
    id: 4,
    title: 'AI Product Manager',
    department: 'Product',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Drive product strategy and roadmap for AI-powered solutions.',
    requirements: [
      'MBA or equivalent experience',
      '5+ years product management experience',
      'Experience with AI/ML products',
      'Strong analytical and communication skills',
      'Experience with agile development'
    ],
    benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Flexible schedule'],
    posted: '5 days ago',
    urgent: false
  },
  {
    id: 5,
    title: 'Cybersecurity Specialist',
    department: 'Security',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Protect our systems and data with advanced security measures and monitoring.',
    requirements: [
      'Bachelor\'s degree in Cybersecurity or related field',
      '3+ years cybersecurity experience',
      'Certifications (CISSP, CISM, CEH) preferred',
      'Experience with security tools and frameworks',
      'Knowledge of compliance standards'
    ],
<<<<<<< HEAD
    benefits: ['Competitive salary', 'Health insurance', 'Certification support', 'Remote work'],
    posted: '1 week ago',
    urgent: false
=======
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "401(k) with company matching"
    ],
    posted: "2024-01-05"
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  },
  {
    id: 6,
    title: 'Data Scientist',
    department: 'Data & Analytics',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Extract insights from data and build predictive models for business intelligence.',
    requirements: [
<<<<<<< HEAD
      'Master\'s degree in Data Science or related field',
      '3+ years data science experience',
      'Proficiency in Python, R, SQL',
      'Experience with ML libraries and frameworks',
      'Strong statistical and analytical skills'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Professional development', 'Research opportunities'],
    posted: '4 days ago',
    urgent: false
=======
<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import Head from 'next/head';
import Link from 'next/link';
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
<<<<<<< HEAD
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget', 'Certification support']
=======
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget']
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Certification support"]
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
      "Bachelor's degree in Computer Science or related field",
      "4+ years experience in DevOps",
      "Experience with CI/CD pipelines",
      "Knowledge of containerization and orchestration",
      "Strong scripting and automation skills"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "401(k) with company matching"
    ],
    posted: "2024-01-03"
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  }
];

const benefits = [
  {
<<<<<<< HEAD
    icon: Heart,
<<<<<<< HEAD
=======
<<<<<<< HEAD
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, dental, vision, and mental health support'
  },
  {
    icon: Zap,
    title: 'Flexible Work',
    description: 'Remote work options, flexible hours, and work-life balance'
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
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
=======
    title: "Competitive Compensation",
    description: "Market-leading salaries and equity participation",
    icon: "💰"
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance",
    icon: "🏥"
  },
  {
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
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
  }
];

export default function CareersPage() {
  return (
    <Layout
      title="Careers - Zion Tech Group"
      description="Join our team of talented professionals and help shape the future of technology. Explore career opportunities at Zion Tech Group."
      keywords="careers, jobs, employment, technology careers, AI jobs, software development"
    >
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    icon: Heart,
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs'
  },
  {
    icon: Laptop,
    title: 'Remote Work',
    description: 'Flexible remote work options and home office stipend'
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
  },
  {
    icon: GraduationCap,
    title: 'Learning & Development',
<<<<<<< HEAD
    description: 'Professional development budget, conferences, and training programs'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Work on projects that make a difference worldwide'
  },
  {
    icon: Shield,
    title: 'Security & Stability',
    description: 'Competitive salary, stock options, and job security'
  },
  {
    icon: Brain,
    title: 'Innovation',
    description: 'Work with cutting-edge technology and innovative solutions'
  }
];

const companyValues = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from code quality to customer service.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and collaborative problem-solving.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We encourage creative thinking and innovative solutions to complex problems.'
  },
  {
    icon: Globe,
    title: 'Impact',
    description: 'We focus on creating meaningful impact for our customers and communities.'
=======
    description: 'Professional development budget and conference attendance'
  },
  {
    icon: Zap,
    title: 'Innovation Time',
    description: '20% time for personal projects and innovation'
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
  }
];

export default function Careers() {
  return (
<<<<<<< HEAD
    <Layout
      title="Careers - Zion Tech Group"
      description="Join our team of innovators and help shape the future of AI, IT, and Micro SaaS solutions. Explore career opportunities at Zion Tech Group."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Join Our Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Help us build the future of technology. Join a team of passionate innovators 
              working on cutting-edge AI, IT, and Micro SaaS solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="#openings"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
              >
                View Openings
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-lg font-semibold"
              >
                Contact Us
=======
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Join Our 
              <span className="text-indigo-400"> Growing Team</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-indigo-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Be part of a team that's shaping the future of technology. Work on cutting-edge projects 
              with talented professionals in a collaborative and innovative environment.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="#openings" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                View Open Positions
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get in Touch
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
<<<<<<< HEAD
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job - we offer a career with purpose, growth, and impact
            </p>
=======
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600">We offer more than just a job - we offer a career with purpose</p>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
<<<<<<< HEAD
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
=======
              <motion.div 
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and shape our culture
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
=======
      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
<<<<<<< HEAD
      <section id="openings" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your next career opportunity with us
            </p>
=======
      <section id="openings" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Find your next career opportunity with us</p>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
          </div>
          
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
<<<<<<< HEAD
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      {job.urgent && (
                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          Urgent
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-600 mb-2">
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
=======
              <motion.div 
                key={job.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      {job.featured && (
                        <span className="ml-2 px-2 py-1 bg-indigo-100 text-indigo-800 rounded text-xs font-semibold">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
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
<<<<<<< HEAD
                        <Users className="w-4 h-4 mr-1" />
                        {job.experience}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{job.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-4">
                    <span className="text-sm text-gray-500">Posted {job.posted}</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.slice(0, 3).map((req) => (
                        <li key={req} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
=======
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
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
<<<<<<< HEAD
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
<<<<<<< HEAD
                Join Our Team
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
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
                Join Our{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Amazing Team
                </span>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                We're looking for passionate individuals who want to build the future of technology. 
                Join us in creating innovative solutions that make a difference.
              </p>
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Why Join Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Join Zion Tech Group?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're not just a company - we're a community of innovators, creators, and problem-solvers 
                working together to build amazing technology solutions.
              </p>
            </motion.div>
=======
        {/* Benefits Section */}
<<<<<<< HEAD
=======
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
                      Apply Now
                    </button>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
<<<<<<< HEAD
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {job.benefits.slice(0, 3).map((benefit) => (
                        <li key={benefit} className="flex items-center text-sm text-gray-600">
                          <Star className="w-3 h-3 text-yellow-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
=======
                        <Award className="w-4 h-4 mr-1" />
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Link 
                      href={`/careers/${job.id}`}
                      className="inline-flex items-center bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.requirements.slice(0, 3).map((req, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                      {req}
                    </span>
                  ))}
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple and transparent process to join our team
            </p>
=======

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">Simple steps to join our team</p>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
<<<<<<< HEAD
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply</h3>
              <p className="text-gray-600">Submit your application with resume and cover letter</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Review</h3>
              <p className="text-gray-600">Our team reviews your application and qualifications</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-gray-600">Technical and cultural fit interviews with the team</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Offer</h3>
              <p className="text-gray-600">Receive your offer and join our amazing team</p>
            </div>
          </div>
<<<<<<< HEAD
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
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

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="bg-white p-6 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
=======
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't See Your Role?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let us know how you can contribute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
            >
              Send Resume
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 text-lg font-semibold"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Questions About Careers?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">Middletown, DE 19709</span>
              </div>
=======
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Apply Online</h3>
              <p className="text-gray-600">Submit your application and resume through our portal</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Initial Review</h3>
              <p className="text-gray-600">Our team reviews your application and qualifications</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Interviews</h3>
              <p className="text-gray-600">Technical and cultural fit interviews with our team</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Offer & Onboarding</h3>
              <p className="text-gray-600">Receive your offer and join our amazing team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
            Don't see a position that matches your skills? We're always looking for talented individuals. 
            Send us your resume and let's start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/contact" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Send Your Resume
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>careers@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
    </Layout>
=======

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
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Open Positions */}
        <section id="open-positions" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Open Positions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for you.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {jobOpenings.map((job, index) => (
                  <motion.div
                    key={job.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {job.department}
                      </span>
                      <span className="text-gray-500 text-sm">{job.type}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {job.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {job.experience}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.slice(0, 3).map((requirement, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.benefits.map((benefit, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={`/careers/${job.id}`}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center justify-center"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </motion.div>
                ))}
              </div>
=======
        {/* Culture Section */}
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
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

<<<<<<< HEAD
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
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
              animate={{ opacity: 1, y: 0 }}
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
=======
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
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229

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
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't See Your Dream Job?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know 
                how you'd like to contribute to our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Send Resume
                </a>
                <a
                  href="/about"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Learn More About Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </MainLayout>
=======
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
<<<<<<< HEAD
=======
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
    </Layout>
=======
    </>
<<<<<<< HEAD
=======
        </section>
      </div>
    </MainLayout>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
    </Layout>
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
  );
}