import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import MainLayout from '../src/components/layout/MainLayout';

export default function CareersPage() {
  return (
    <MainLayout
      title="Careers - Zion Tech Group"
      description="Join our team of innovators and help shape the future of technology. Explore career opportunities at Zion Tech Group."
      keywords="careers, jobs, employment, technology, AI, engineering, remote work"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
=======
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
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
  Zap,
  Globe,
  Coffee,
  Award
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
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget', 'Certification support']
  }
];

const jobOpenings = [
  {
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
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget', 'Certification support']
  }
];

const benefits = [
  {
    icon: Heart,
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
  }
];

export default function CareersPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our Team
              </h1>
<<<<<<< HEAD
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
                Build the future of technology with us. We're looking for passionate individuals 
                who want to make a difference in the world.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover exciting career opportunities and join our growing team of innovators.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Senior AI Engineer</h3>
                <p className="text-gray-600 mb-4">Lead the development of cutting-edge AI solutions and machine learning models.</p>
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Full Stack Developer</h3>
                <p className="text-gray-600 mb-4">Build scalable web applications and APIs using modern technologies.</p>
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">DevOps Engineer</h3>
                <p className="text-gray-600 mb-4">Manage cloud infrastructure and deployment pipelines for our services.</p>
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Us?</h2>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Don't see a position that fits? We're always looking for talented individuals. 
                Send us your resume and let's start a conversation.
              </p>
              <button className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Send Resume
              </button>
=======
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
                Build the future of technology with us. We're looking for passionate individuals who want to make a difference.
              </p>
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </MainLayout>
=======
    </Layout>
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
  );
}
