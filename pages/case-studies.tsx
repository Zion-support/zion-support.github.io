import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
=======
import Layout from './components/Layout';
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
import { motion } from 'framer-motion';
import {
  Calendar,
  User,
  ArrowRight,
<<<<<<< HEAD
  Tag,
  ExternalLink,
  Building,
  TrendingUp,
  Award,
  Clock,
  CheckCircle
} from 'lucide-react';
const caseStudies = [
  {
    id: 1,
    title: "Healthcare AI Transformation: 40% Reduction in Diagnosis Time",
    company: "MedTech Solutions",
    industry: "Healthcare",
    challenge: "Long diagnosis times and high error rates in medical imaging analysis",
    solution: "Implemented AI-powered image recognition system with machine learning algorithms",
    results: [
      "40% reduction in diagnosis time",
      "95% accuracy in image analysis",
      "60% decrease in false positives",
      "50% improvement in patient satisfaction"
    ],
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    featured: true,
    image: "/api/placeholder/600/400"
  },
  {
    id: 2,
    title: "Financial Services: AI-Powered Fraud Detection System",
    company: "SecureBank Corp",
    industry: "Financial Services",
    challenge: "Increasing fraud incidents and manual review processes",
    solution: "Deployed real-time AI fraud detection with behavioral analytics",
    results: [
      "99.2% fraud detection accuracy",
      "80% reduction in false positives",
      "Real-time transaction monitoring",
      "30% cost savings in fraud prevention"
    ],
    author: "Michael Rodriguez",
    date: "2024-01-10",
    readTime: "6 min read",
    featured: false,
    image: "/api/placeholder/600/400"
  },
  {
    id: 3,
    title: "Manufacturing: Predictive Maintenance with IoT and AI",
    company: "Industrial Dynamics",
    industry: "Manufacturing",
    challenge: "Unexpected equipment failures causing production delays",
    solution: "Implemented IoT sensors with AI predictive maintenance algorithms",
    results: [
      "70% reduction in unplanned downtime",
      "25% increase in equipment lifespan",
      "15% reduction in maintenance costs",
      "Predictive accuracy of 92%"
    ],
    author: "Alex Thompson",
    date: "2024-01-05",
    readTime: "7 min read",
    featured: false,
    image: "/api/placeholder/600/400"
  },
  {
    id: 4,
    title: "Retail: Personalized Customer Experience Platform",
    company: "ShopSmart Retail",
    industry: "Retail",
    challenge: "Low customer engagement and poor personalization",
    solution: "Built AI-driven recommendation engine with customer behavior analysis",
    results: [
      "45% increase in customer engagement",
      "35% boost in average order value",
      "60% improvement in conversion rates",
      "25% increase in customer retention"
    ],
    author: "Jennifer Lee",
    date: "2023-12-28",
    readTime: "5 min read",
    featured: false,
    image: "/api/placeholder/600/400"
  },
  {
    id: 5,
    title: "Education: AI-Powered Learning Management System",
    company: "EduTech University",
    industry: "Education",
    challenge: "Low student engagement and poor learning outcomes",
    solution: "Developed adaptive learning platform with AI tutoring system",
    results: [
      "50% improvement in student performance",
      "40% increase in course completion rates",
      "Personalized learning paths for each student",
      "85% student satisfaction rating"
    ],
    author: "David Kim",
    date: "2023-12-20",
    readTime: "6 min read",
    featured: false,
    image: "/api/placeholder/600/400"
  },
  {
    id: 6,
    title: "Logistics: Supply Chain Optimization with AI",
    company: "Global Logistics Inc",
    industry: "Logistics",
    challenge: "Inefficient supply chain and high operational costs",
    solution: "Implemented AI-powered supply chain optimization and route planning",
    results: [
      "30% reduction in delivery times",
      "25% decrease in fuel costs",
      "20% improvement in inventory management",
      "35% increase in customer satisfaction"
    ],
    author: "Emma Wilson",
    date: "2023-12-15",
    readTime: "7 min read",
    featured: false,
    image: "/api/placeholder/600/400"
  }
];
const industries = [
  "All Industries",
  "Healthcare",
  "Financial Services",
  "Manufacturing",
  "Retail",
  "Education",
  "Logistics",
  "Technology"
];
export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore real-world success stories and case studies from our AI and technology implementations across various industries." />
      </Head>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-blue-100">
              Real-world results from our AI and technology implementations across various industries
            </p>
          </div>
        </div>
      </section>
      {/* Featured Case Study */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Case Study</h2>
            {caseStudies.filter(study => study.featured).map((study) => (
              <motion.article
                key={study.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <Building className="w-24 h-24 text-white" />
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-600 font-medium">
                        {study.industry}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {study.title}
                    </h2>
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Challenge:</h3>
                      <p className="text-gray-600 mb-4">{study.challenge}</p>
                      <h3 className="font-semibold text-gray-900 mb-2">Solution:</h3>
                      <p className="text-gray-600 mb-4">{study.solution}</p>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{study.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{study.date}</span>
                        </div>
                      </div>
                      <span>{study.readTime}</span>
                    </div>
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      {/* Industry Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {industries.map((industry, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">All Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.filter(study => !study.featured).map((study, index) => (
                <motion.article
                  key={study.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Building className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-600 font-medium">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {study.title}
                    </h3>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Challenge:</h4>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {study.challenge}
                      </p>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Key Results:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {study.results.slice(0, 2).map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
=======
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  Building,
  Globe,
  Award,
  BarChart3,
  Brain,
  Shield,
  Zap,
  Cloud
=======
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  ArrowRight, 
  Calendar, 
  User, 
  Building, 
  CheckCircle, 
  Star, 
  ExternalLink, 
  Phone, 
  Mail, 
  MapPin, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  Shield, 
  Globe, 
  Brain, 
  Code, 
  Database, 
  Server, 
  Lock, 
  Award, 
  Target, 
  Users, 
  Lightbulb, 
  Rocket
>>>>>>> fd81623f34e3b84c2b325c5baeabd49310d8e0d9
} from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
  {
    id: 1,
    title: 'AI-Powered E-commerce Transformation',
    client: 'TechRetail Inc.',
    industry: 'E-commerce',
    duration: '6 months',
    team: '8 members',
    challenge: 'TechRetail needed to improve their customer experience and increase sales through AI-powered personalization and automation.',
    solution: 'Implemented a comprehensive AI solution including recommendation engines, chatbots, and predictive analytics.',
    results: [
      '45% increase in conversion rates',
      '60% improvement in customer satisfaction',
      '35% reduction in support tickets',
      '25% increase in average order value'
    ],
    technologies: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    image: '/case-studies/techretail.jpg',
    testimonial: {
      quote: 'Zion Tech Group transformed our entire e-commerce platform. The AI solutions they implemented have revolutionized our customer experience.',
      author: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechRetail Inc.'
    },
    featured: true
  },
  {
    id: 2,
    title: 'Healthcare Data Analytics Platform',
    client: 'MediCare Systems',
    industry: 'Healthcare',
    duration: '8 months',
    team: '12 members',
    challenge: 'MediCare needed to analyze large volumes of patient data to improve treatment outcomes and reduce costs.',
    solution: 'Built a comprehensive data analytics platform with AI-powered insights and predictive modeling.',
    results: [
      '40% reduction in readmission rates',
      '30% improvement in treatment accuracy',
      '50% faster diagnosis times',
      '20% reduction in operational costs'
    ],
<<<<<<< HEAD
    technologies: ["AWS", "Docker", "Kubernetes", "MongoDB"],
    duration: "8 months",
    team: "12 experts",
    image: "/images/case-studies/cloud-migration.jpg",
    icon: Cloud
  },
  {
    id: 3,
    title: "E-commerce Platform Optimization",
    client: "Global Retail Chain",
    industry: "Retail",
    challenge: "Poor performance and low conversion rates",
    solution: "Complete platform redesign with performance optimization",
    results: [
      "85% faster page load times",
      "40% increase in conversions",
      "60% reduction in bounce rate",
      "50% improvement in mobile experience"
    ],
    technologies: ["Next.js", "Redis", "CDN", "Analytics"],
    duration: "4 months",
    team: "6 experts",
    image: "/images/case-studies/ecommerce-optimization.jpg",
    icon: Zap
  }
];

const stats = [
  { label: "Projects Completed", value: "500+", icon: CheckCircle },
  { label: "Client Satisfaction", value: "98%", icon: Award },
  { label: "Team Members", value: "50+", icon: Users },
  { label: "Years Experience", value: "10+", icon: Clock }
=======
    technologies: ['Data Analytics', 'Machine Learning', 'Cloud Computing', 'Security'],
    image: '/case-studies/medicare.jpg',
    testimonial: {
      quote: 'The analytics platform has been a game-changer for our healthcare operations. We can now make data-driven decisions that save lives.',
      author: 'Dr. Michael Chen',
      position: 'Chief Medical Officer',
      company: 'MediCare Systems'
    },
    featured: true
  },
  {
    id: 3,
    title: 'Financial Services Automation',
    client: 'FinTech Solutions',
    industry: 'Financial Services',
    duration: '4 months',
    team: '6 members',
    challenge: 'FinTech Solutions needed to automate their loan processing and risk assessment workflows.',
    solution: 'Developed an AI-powered automation platform for loan processing and risk assessment.',
    results: [
      '70% reduction in processing time',
      '85% improvement in accuracy',
      '90% reduction in manual errors',
      '50% increase in loan approval efficiency'
    ],
    technologies: ['Process Automation', 'Risk Assessment', 'Machine Learning', 'API Integration'],
    image: '/case-studies/fintech.jpg',
    testimonial: {
      quote: 'The automation platform has transformed our loan processing. We can now process applications 10x faster with higher accuracy.',
      author: 'Emily Rodriguez',
      position: 'VP of Operations',
      company: 'FinTech Solutions'
    },
    featured: false
  },
  {
    id: 4,
    title: 'Manufacturing IoT Integration',
    client: 'Industrial Corp',
    industry: 'Manufacturing',
    duration: '10 months',
    team: '15 members',
    challenge: 'Industrial Corp needed to integrate IoT devices and implement predictive maintenance for their manufacturing facilities.',
    solution: 'Built a comprehensive IoT platform with AI-powered predictive maintenance and real-time monitoring.',
    results: [
      '60% reduction in unplanned downtime',
      '35% improvement in equipment efficiency',
      '45% reduction in maintenance costs',
      '80% improvement in predictive accuracy'
    ],
    technologies: ['IoT', 'Predictive Analytics', 'Cloud Computing', 'Real-time Monitoring'],
    image: '/case-studies/industrial.jpg',
    testimonial: {
      quote: 'The IoT platform has revolutionized our manufacturing operations. We can now predict and prevent equipment failures before they happen.',
      author: 'James Wilson',
      position: 'Plant Manager',
      company: 'Industrial Corp'
    },
    featured: false
  },
  {
    id: 5,
    title: 'Educational AI Platform',
    client: 'EduTech University',
    industry: 'Education',
    duration: '7 months',
    team: '10 members',
    challenge: 'EduTech University needed to personalize learning experiences and improve student outcomes.',
    solution: 'Developed an AI-powered educational platform with personalized learning paths and adaptive assessments.',
    results: [
      '50% improvement in student engagement',
      '35% increase in course completion rates',
      '40% improvement in learning outcomes',
      '60% reduction in administrative workload'
    ],
    technologies: ['Educational AI', 'Personalization', 'Adaptive Learning', 'Analytics'],
    image: '/case-studies/edutech.jpg',
    testimonial: {
      quote: 'The AI platform has transformed how we deliver education. Students are more engaged and achieving better outcomes.',
      author: 'Dr. Lisa Thompson',
      position: 'Dean of Technology',
      company: 'EduTech University'
    },
    featured: false
  },
  {
    id: 6,
    title: 'Cybersecurity AI Defense',
    client: 'SecureBank',
    industry: 'Banking',
    duration: '5 months',
    team: '8 members',
    challenge: 'SecureBank needed to enhance their cybersecurity posture with AI-powered threat detection and response.',
    solution: 'Implemented an AI-powered cybersecurity platform with real-time threat detection and automated response.',
    results: [
      '95% reduction in false positives',
      '80% faster threat detection',
      '70% improvement in response time',
      '90% reduction in security incidents'
    ],
    technologies: ['Cybersecurity', 'AI Security', 'Threat Detection', 'Automated Response'],
    image: '/case-studies/securebank.jpg',
    testimonial: {
      quote: 'The AI security platform has significantly strengthened our defense against cyber threats. We feel much more secure now.',
      author: 'Robert Kim',
      position: 'CISO',
      company: 'SecureBank'
    },
    featured: false
  }
];

const industries = [
  { name: 'All', count: caseStudies.length },
  { name: 'E-commerce', count: caseStudies.filter(cs => cs.industry === 'E-commerce').length },
  { name: 'Healthcare', count: caseStudies.filter(cs => cs.industry === 'Healthcare').length },
  { name: 'Financial Services', count: caseStudies.filter(cs => cs.industry === 'Financial Services').length },
  { name: 'Manufacturing', count: caseStudies.filter(cs => cs.industry === 'Manufacturing').length },
  { name: 'Education', count: caseStudies.filter(cs => cs.industry === 'Education').length },
  { name: 'Banking', count: caseStudies.filter(cs => cs.industry === 'Banking').length }
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Industries Served' },
  { number: '24/7', label: 'Support Available' }
>>>>>>> fd81623f34e3b84c2b325c5baeabd49310d8e0d9
];

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = React.useState('All');

  const filteredCaseStudies = caseStudies.filter(cs => 
    selectedIndustry === 'All' || cs.industry === selectedIndustry
  );

  return (
<<<<<<< HEAD
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
=======
    <Layout
      title="Case Studies - Zion Tech Group"
      description="Explore our success stories and see how we've helped businesses transform with AI, IT, and Micro SaaS solutions. Real results from real clients."
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
              Case Studies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Discover how we've helped businesses transform with our AI, IT, and Micro SaaS solutions. 
              Real results from real clients across various industries.
            </motion.p>
>>>>>>> fd81623f34e3b84c2b325c5baeabd49310d8e0d9
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-6">
                Success Stories
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Discover how we've helped businesses transform their operations and achieve remarkable results through innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#case-studies"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
                >
                  View Case Studies
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
                >
                  Start Your Project
                  <Phone className="ml-2 w-5 h-5" />
                </Link>
              </div>
=======
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-lg font-semibold"
              >
                Learn About Us
              </Link>
>>>>>>> fd81623f34e3b84c2b325c5baeabd49310d8e0d9
            </motion.div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section id="case-studies" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Case Studies
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Real projects, real results. See how we've helped businesses across various industries achieve their goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="relative">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded">
                        {study.industry}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <study.icon className="w-8 h-8 text-blue-600 mr-3" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {study.title}
                        </h3>
                        <p className="text-gray-600">
                          {study.client}
                        </p>
=======
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Filter by Industry
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {industries.map((industry) => (
                <button
                  key={industry.name}
                  onClick={() => setSelectedIndustry(industry.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedIndustry === industry.name
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {industry.name} ({industry.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {filteredCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                  caseStudy.featured ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {caseStudy.featured && (
                  <div className="bg-blue-500 text-white px-4 py-2 text-sm font-semibold">
                    Featured Case Study
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {caseStudy.title}
                      </h3>
                      <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center">
                          <Building className="w-4 h-4 mr-1" />
                          {caseStudy.client}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {caseStudy.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {caseStudy.team}
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          {caseStudy.industry}
                        </span>
>>>>>>> fd81623f34e3b84c2b325c5baeabd49310d8e0d9
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600 mb-4">{caseStudy.challenge}</p>
                      
<<<<<<< HEAD
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 mb-4">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
<<<<<<< HEAD
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{study.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{study.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{study.readTime}</span>
                      <Link
                        href={`/case-studies/${study.id}`}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Load More Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help transform your business with AI and technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
=======

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                          >
=======
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600 mb-4">{caseStudy.solution}</p>
                      
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {caseStudy.technologies.map((tech) => (
                          <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
>>>>>>> fd81623f34e3b84c2b325c5baeabd49310d8e0d9
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
<<<<<<< HEAD

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {study.team}
=======
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Results</h4>
                      <ul className="space-y-2 mb-6">
                        {caseStudy.results.map((result) => (
                          <li key={result} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <blockquote className="text-gray-700 italic mb-2">
                          "{caseStudy.testimonial.quote}"
                        </blockquote>
                        <div className="text-sm text-gray-600">
                          <div className="font-semibold">{caseStudy.testimonial.author}</div>
                          <div>{caseStudy.testimonial.position}, {caseStudy.testimonial.company}</div>
                        </div>
>>>>>>> fd81623f34e3b84c2b325c5baeabd49310d8e0d9
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center inline-flex items-center justify-center"
                    >
                      Start Similar Project
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
<<<<<<< HEAD
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl mb-8 text-green-100">
                Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center"
                >
                  View Our Services
                  <Building className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
=======
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      href="/contact"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
                    >
                      Start Similar Project
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let us help you transform your business with our proven AI, IT, and Micro SaaS solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Questions About Our Work?
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
            </div>
          </div>
        </div>
      </section>
>>>>>>> fd81623f34e3b84c2b325c5baeabd49310d8e0d9
    </Layout>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
  );
}