import React from 'react';
<<<<<<< HEAD
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  ArrowRight,
  TrendingUp,
  CheckCircle,
  Users,
  Building,
  Globe,
  Award,
  Clock,
  Target,
  Star,
  Zap,
  Shield,
  Database,
  Cpu,
  Brain,
  Cloud,
  Smartphone
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Customer Service Transformation",
    client: "Global E-commerce Retailer",
    industry: "E-commerce",
    challenge: "High customer service volume and response time issues",
    solution: "Implemented AI chatbot and automated response system",
    results: [
      "75% reduction in response time",
      "60% decrease in support tickets",
      "95% customer satisfaction rate",
      "$2M annual cost savings"
    ],
    technologies: ["AI/ML", "Natural Language Processing", "Cloud Computing"],
    duration: "6 months",
    team: "8 specialists",
    image: "/images/case-study-1.jpg",
    testimonial: {
      quote: "Zion Tech Group transformed our customer service operations. The AI solution exceeded our expectations and delivered measurable results.",
      author: "Sarah Johnson",
      role: "VP of Customer Experience"
    }
  },
  {
    id: 2,
    title: "Healthcare AI Platform Transformation",
    client: "MedTech Solutions",
    industry: "Healthcare",
    challenge: "Legacy system modernization and AI integration for patient data analysis",
    solution: "Developed comprehensive AI platform for medical data processing and analysis",
    results: [
      "90% improvement in data processing speed",
      "85% accuracy in diagnostic predictions",
      "50% reduction in manual data entry",
      "Compliance with HIPAA and FDA regulations"
    ],
    technologies: ["Machine Learning", "Data Analytics", "Cloud Infrastructure", "Security"],
    duration: "8 months",
    team: "12 specialists",
    image: "/images/case-study-2.jpg",
    testimonial: {
      quote: "The AI platform revolutionized our diagnostic capabilities while maintaining the highest security standards.",
      author: "Dr. Michael Chen",
      role: "Chief Medical Officer"
    }
  },
  {
    id: 3,
    title: "Financial Services Cloud Migration",
    client: "Regional Bank",
    industry: "Financial Services",
    challenge: "Legacy infrastructure limitations and security concerns",
    solution: "Complete cloud migration with enhanced security and compliance features",
    results: [
      "99.9% uptime achieved",
      "40% reduction in infrastructure costs",
      "Enhanced security compliance",
      "50% faster application deployment"
    ],
    technologies: ["Cloud Computing", "DevOps", "Security", "Compliance"],
    duration: "10 months",
    team: "15 specialists",
    image: "/images/case-study-3.jpg",
    testimonial: {
      quote: "The cloud migration was seamless and significantly improved our operational efficiency while maintaining security.",
      author: "Jennifer Martinez",
      role: "CTO"
    }
  },
  {
    id: 4,
    title: "Manufacturing IoT Integration",
    client: "Industrial Manufacturing Co.",
    industry: "Manufacturing",
    challenge: "Manual production monitoring and quality control processes",
    solution: "IoT sensor network with real-time analytics and predictive maintenance",
    results: [
      "30% increase in production efficiency",
      "25% reduction in equipment downtime",
      "20% improvement in product quality",
      "Real-time production monitoring"
    ],
    technologies: ["IoT", "Data Analytics", "Machine Learning", "Edge Computing"],
    duration: "7 months",
    team: "10 specialists",
    image: "/images/case-study-4.jpg",
    testimonial: {
      quote: "The IoT solution transformed our manufacturing operations and provided insights we never had before.",
      author: "Robert Kim",
      role: "Operations Director"
    }
  },
  {
    id: 5,
    title: "Retail AI Personalization Engine",
    client: "Fashion Retail Chain",
    industry: "Retail",
    challenge: "Low customer engagement and conversion rates",
    solution: "AI-powered personalization engine for product recommendations and marketing",
    results: [
      "45% increase in conversion rates",
      "35% improvement in customer engagement",
      "25% increase in average order value",
      "Personalized shopping experience"
    ],
    technologies: ["AI/ML", "Recommendation Systems", "Data Science", "E-commerce"],
    duration: "5 months",
    team: "6 specialists",
    image: "/images/case-study-5.jpg",
    testimonial: {
      quote: "The personalization engine dramatically improved our customer experience and sales performance.",
      author: "Lisa Thompson",
      role: "Head of Digital Marketing"
    }
  },
  {
    id: 6,
    title: "Government Digital Services Platform",
    client: "State Government",
    industry: "Government",
    challenge: "Outdated citizen services and accessibility issues",
    solution: "Modern digital platform with accessibility features and citizen portal",
    results: [
      "80% reduction in service processing time",
      "95% citizen satisfaction rate",
      "Full accessibility compliance",
      "50% reduction in administrative costs"
    ],
    technologies: ["Web Development", "Accessibility", "Security", "Cloud Computing"],
    duration: "12 months",
    team: "20 specialists",
    image: "/images/case-study-6.jpg",
    testimonial: {
      quote: "The digital platform modernized our services and significantly improved citizen satisfaction.",
      author: "David Wilson",
      role: "IT Director"
    }
  }
];

const industries = [
  { name: "Healthcare", count: 15, icon: Shield },
  { name: "Financial Services", count: 12, icon: Building },
  { name: "E-commerce", count: 18, icon: Globe },
  { name: "Manufacturing", count: 8, icon: Cpu },
  { name: "Government", count: 6, icon: Award },
  { name: "Education", count: 10, icon: Users }
];

const technologies = [
  { name: "AI/ML", count: 25, icon: Brain },
  { name: "Cloud Computing", count: 30, icon: Cloud },
  { name: "Data Analytics", count: 20, icon: BarChart3 },
  { name: "IoT", count: 12, icon: Smartphone },
  { name: "Security", count: 18, icon: Shield },
  { name: "DevOps", count: 15, icon: Zap }
];

export default function CaseStudiesPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Success Stories
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Discover how we've helped organizations across various industries 
                transform their operations and achieve remarkable results.
=======
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { ArrowRight, Calendar, Clock, User, Building, TrendingUp } from 'lucide-react';
import Layout from '../components/Layout';

const caseStudies = [
  {
    id: 'ai-healthcare-transformation',
    title: 'AI-Powered Healthcare Transformation',
    company: 'MedTech Solutions',
    industry: 'Healthcare',
    description: 'Implemented AI-driven diagnostic tools that reduced diagnosis time by 60% and improved accuracy by 45%.',
    image: '/images/case-studies/healthcare-ai.jpg',
    readTime: '5 min read',
    date: '2024-01-15',
    results: [
      '60% reduction in diagnosis time',
      '45% improvement in accuracy',
      '30% cost savings',
      '95% patient satisfaction'
    ]
  },
  {
    id: 'cloud-migration-enterprise',
    title: 'Enterprise Cloud Migration',
    company: 'Global Finance Corp',
    industry: 'Finance',
    description: 'Successfully migrated legacy systems to AWS, improving scalability and reducing infrastructure costs by 40%.',
    image: '/images/case-studies/cloud-migration.jpg',
    readTime: '7 min read',
    date: '2024-01-10',
    results: [
      '40% reduction in infrastructure costs',
      '99.9% uptime achieved',
      '50% faster deployment',
      'Zero data loss during migration'
    ]
  },
  {
    id: 'micro-saas-ecommerce',
    title: 'Micro SaaS for E-commerce',
    company: 'RetailMax',
    industry: 'Retail',
    description: 'Developed custom inventory management SaaS that increased operational efficiency by 35% and reduced stockouts by 80%.',
    image: '/images/case-studies/ecommerce-saas.jpg',
    readTime: '6 min read',
    date: '2024-01-05',
    results: [
      '35% increase in operational efficiency',
      '80% reduction in stockouts',
      '25% increase in sales',
      '90% user adoption rate'
    ]
  }
];

export default function CaseStudiesPage() {
  return (
    <Layout
      title="Case Studies - Zion Tech Group"
      description="Explore our successful projects and see how we've helped businesses transform with cutting-edge technology solutions."
      keywords="case studies, success stories, AI projects, cloud migration, micro SaaS, technology solutions"
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
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover how we've helped businesses transform with innovative technology solutions
>>>>>>> main
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
<<<<<<< HEAD
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
=======
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
>>>>>>> main
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
<<<<<<< HEAD
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Case Studies
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real projects, real results. See how our solutions have made a 
                measurable impact for our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-gray-600 mb-4">{study.client}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-sm text-gray-700">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-sm text-gray-700">{study.solution}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Results</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 3).map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
=======
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Case Studies
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real projects, real results. See how we've delivered value to our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.article
                  key={study.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
=======
import {
  Calendar,
  User,
  ArrowRight,
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
>>>>>>> main
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Building className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
<<<<<<< HEAD
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{study.date}</span>
                      <Clock className="w-4 h-4 ml-2" />
                      <span>{study.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {study.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{study.company}</span>
                      </div>
                      <Link
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
=======
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
>>>>>>> main
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
<<<<<<< HEAD
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <blockquote className="text-sm text-gray-700 italic mb-2">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div className="text-sm text-gray-600">
                        <strong>{study.testimonial.author}</strong>, {study.testimonial.role}
                      </div>
=======
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
>>>>>>> main
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
>>>>>>> main
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Load More Case Studies
              </button>
            </div>
          </div>
<<<<<<< HEAD
        </section>

        {/* Industries & Technologies */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Industries */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Industries We Serve</h3>
                <div className="grid grid-cols-2 gap-4">
                  {industries.map((industry, index) => {
                    const IconComponent = industry.icon;
                    return (
                      <div key={industry.name} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <IconComponent className="w-6 h-6 text-blue-600 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-900">{industry.name}</div>
                          <div className="text-sm text-gray-600">{industry.count} projects</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies We Use</h3>
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <div key={tech.name} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <IconComponent className="w-6 h-6 text-purple-600 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-900">{tech.name}</div>
                          <div className="text-sm text-gray-600">{tech.count} projects</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with 
                cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
=======
<<<<<<< HEAD
>>>>>>> main
        </section>
      </div>
    </Layout>
=======
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
>>>>>>> main
  );
}