import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Building, 
  TrendingUp,
  Calendar, 
  User, 
  Tag, 
  ExternalLink,
  Clock,
  Target,
  Zap,
  Shield,
  Cloud,
  Brain
=======
import MainLayout from '../src/components/layout/MainLayout';import { motion } from 'framer-motion';
import {
  Calendar,
  User,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  CheckCircle,
  Users,
  Building,
  Globe,  Award,
  Clock,
  CheckCircle
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
} from 'lucide-react';
import Layout from '../components/Layout';

const caseStudies = [
  {
    id: 1,
<<<<<<< HEAD
    title: "AI-Powered Healthcare Platform",
    client: "MedTech Solutions",
    industry: "Healthcare",
    challenge: "Need for automated medical diagnosis and patient management",
    solution: "Developed AI-powered diagnostic system with 95% accuracy",
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
    title: "E-commerce Optimization Suite",
    client: "RetailMax",
    industry: "E-commerce",
    challenge: "Low conversion rates and poor customer experience",
    solution: "Implemented AI-driven personalization and recommendation engine",
    results: [
      "35% increase in conversion rates",
      "25% boost in average order value",
      "40% improvement in customer retention",
      "50% reduction in cart abandonment"
    ],
    author: "Mike Johnson",
    date: "2024-02-10",
    readTime: "6 min read",
    featured: true,
    image: "/api/placeholder/600/400"
  },
  {
    id: 3,
    title: "Financial Services Automation",
    client: "FinTech Global",
    industry: "Finance",
    challenge: "Manual processes causing delays and errors",
    solution: "Built comprehensive automation platform with AI integration",
    results: [
      "70% reduction in processing time",
      "90% decrease in manual errors",
      "60% cost savings",
      "100% compliance achievement"
    ],
    author: "Lisa Wang",
    date: "2024-01-28",
    readTime: "7 min read",
    featured: false,
    image: "/api/placeholder/600/400"
  }
];

const industries = [
  "All Industries",
  "Healthcare",
  "E-commerce",
  "Finance",
  "Manufacturing",
  "Education",
  "Retail"
=======
    title: "AI-Powered Customer Service Transformation",
    client: "Global E-commerce Retailer",
    industry: "E-commerce",
    challenge: "High customer service costs and inconsistent response quality",
    solution: "Implemented AI-powered chatbot and intelligent routing system",    results: [
      "99.2% fraud detection accuracy",
      "80% reduction in false positives",
      "Real-time transaction monitoring",
      "30% cost savings in fraud prevention"
    ],
    duration: "3 months",
    team: "8 experts",
    technologies: ["AI/ML", "NLP", "Cloud", "Analytics"],
    image: "/images/case-studies/ecommerce-ai.jpg"
  },
  {
    id: 2,
    title: "Cloud Migration for Financial Services",
    client: "Regional Bank",
    industry: "Financial Services",
    challenge: "Legacy systems limiting scalability and innovation",
    solution: "Complete cloud migration with microservices architecture",
    results: [
      "99.9% uptime achieved",
      "50% faster application deployment",
      "30% reduction in infrastructure costs",
      "Enhanced security compliance"
    ],
    duration: "6 months",
    team: "12 experts",
    technologies: ["AWS", "Kubernetes", "Microservices", "DevOps"],
    image: "/images/case-studies/cloud-migration.jpg"  },
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
    duration: "4 months",
    team: "6 experts",
    technologies: ["Cybersecurity", "SIEM", "Compliance", "Monitoring"],
    image: "/images/case-studies/healthcare-security.jpg"
  }
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "99.9%", label: "Success Rate" },
  { number: "24/7", label: "Support Available" }
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = React.useState("All Industries");

  const filteredCaseStudies = selectedIndustry === "All Industries" 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
<<<<<<< HEAD
      description="Explore our successful projects and client transformations. Real case studies showcasing our expertise in AI, cloud, and digital transformation."
      keywords="case studies, success stories, client projects, digital transformation, AI implementation, cloud migration"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
=======
      description="Explore our success stories and see how we've helped businesses transform through innovative technology solutions."
      keywords="case studies, success stories, client projects, technology solutions, AI implementation"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stories</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Discover how we've helped businesses transform and achieve their goals through innovative technology solutions. 
                Real projects, real results, real impact.
=======
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success{' '}
                <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  Stories
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover how we've helped businesses transform and achieve their goals 
                through innovative technology solutions.
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#case-studies"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  View Case Studies
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Start Your Project
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Industry Filter */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    selectedIndustry === industry
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {industry}
                </button>
=======
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Case Studies Grid */}
        <section id="case-studies" className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-48 object-cover"
                    />
                    {study.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Tag className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-600">{study.industry}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-gray-600 mb-4">{study.challenge}</p>
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-gray-900">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 3).map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {study.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.readTime}
                      </div>
                    </div>
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Read Full Case Study
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
=======
        {/* Case Studies */}
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
                Featured Case Studies
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real projects, real results. See how we've helped businesses across 
                different industries achieve their technology goals.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="space-y-16">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={study.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="p-8">
                        <div className="flex items-center mb-4">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mr-4">
                            {study.industry}
                          </span>
                          <span className="text-gray-500 text-sm">{study.duration}</span>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {study.title}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          <strong>Client:</strong> {study.client}
                        </p>

                        <div className="space-y-4 mb-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                            <p className="text-gray-600">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                            <p className="text-gray-600">{study.solution}</p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                          <ul className="space-y-2">
                            {study.results.map((result, idx) => (
                              <li key={idx} className="flex items-center text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {study.technologies.map((tech, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="w-4 h-4 mr-2" />
                            {study.team}
                          </div>
                          <a
                            href={`/case-studies/${study.id}`}
                            className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
                          >
                            Read Full Case Study
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-green-500 to-teal-600 p-8 flex items-center justify-center">
                        <div className="text-center text-white">
                          <Building className="w-16 h-16 mx-auto mb-4 opacity-80" />
                          <h4 className="text-xl font-semibold mb-2">Project Overview</h4>
                          <p className="text-green-100">
                            A comprehensive solution that transformed our client's business operations
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
            </div>

            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Building className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No case studies found</h3>
                <p className="text-gray-600">Try selecting a different industry.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's work together to transform your business with innovative technology solutions. 
                Contact us today to discuss your project.
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
                  View Our Services
                </Link>
=======
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Let's work together to create your own success story. 
                Contact us today to discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-green-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Start Your Project
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold"
                >
                  Explore Our Services
                </a>
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>  );
}