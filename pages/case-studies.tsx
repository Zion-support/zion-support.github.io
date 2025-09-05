<<<<<<< HEAD
import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import {
  ArrowRight,
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
  Cloud,
  Shield,
  Calendar,
  User,
  Tag,
  ExternalLink
=======
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle, 
  Building, 
  Brain, 
  Shield, 
  Zap,
  ArrowRight,
  Star,
  Award,
  Calendar, 
  User, 
  Tag, 
  ExternalLink,
  Clock,
  Target,
  Cloud,
  Search
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
<<<<<<< HEAD
    title: "AI-Powered Customer Service Transformation",
    client: "Global E-commerce Retailer",
    industry: "E-commerce",
    challenge: "High customer service costs and inconsistent response quality",
    solution: "Implemented AI-powered chatbot and intelligent routing system",
    results: [
      "60% reduction in support costs",
      "40% faster response times",
      "95% customer satisfaction rate",
      "$2M annual savings"
    ],
    duration: "3 months",
    team: "8 experts",
    technologies: ["AI/ML", "NLP", "Cloud", "Analytics"],
    image: "/images/case-studies/ecommerce-ai.jpg"
=======
    title: "AI-Powered Healthcare Platform",
    client: "Regional Medical Center",
    industry: "Healthcare",
    challenge: "Manual patient data processing and diagnosis delays",
    solution: "AI-powered diagnostic platform with real-time analysis",
    results: [
      "60% reduction in diagnosis time",
      "40% improvement in accuracy",
      "80% reduction in manual data entry",
      "95% patient satisfaction rate"
    ],
    technologies: ["AI/ML", "Computer Vision", "Data Analytics", "Cloud Computing"],
    duration: "6 months",
    team: "12 experts",
    image: "/images/case-studies/healthcare-ai.jpg"
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
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
    image: "/images/case-studies/cloud-migration.jpg"
  },
  {
    id: 3,
    title: "Cybersecurity Enhancement for Healthcare",
    client: "Healthcare Network",
    industry: "Healthcare",
    challenge: "Increasing cyber threats and compliance requirements",
    solution: "Comprehensive security framework and threat detection system",
    results: [
      "Zero security breaches",
      "100% compliance with HIPAA",
      "24/7 threat monitoring",
      "50% faster incident response"
    ],
    technologies: ["Cybersecurity", "SIEM", "Compliance", "Monitoring"],
    duration: "4 months",
<<<<<<< HEAD
    team: "6 experts",
    image: "/images/case-studies/healthcare-security.jpg"
=======
    team: "8 experts",
    image: "/images/case-studies/cybersecurity.jpg"
  },
  {
    id: 4,
    title: "AI-Powered Medical Diagnosis",
    client: "MedTech Solutions",
    industry: "Healthcare",
    challenge: "Need for automated medical diagnosis and patient management",
    solution: "Developed AI-powered diagnostic system with 95% accuracy",
    results: [
      "95% diagnostic accuracy improvement",
      "60% reduction in diagnosis time",
      "40% cost savings",
      "500+ patients served daily"
    ],
    duration: "6 months",
    team: "12 developers",
    technologies: ["AI/ML", "React", "Node.js", "PostgreSQL"],
    image: "/api/placeholder/600/400",
    featured: true
  },
  {
    id: 2,
    title: "E-commerce Platform Migration",
    client: "RetailMax",
    industry: "Retail",
    challenge: "Legacy system causing performance issues and scalability problems",
    solution: "Migrated to modern cloud-based architecture with microservices",
    results: [
      "300% performance improvement",
      "99.9% uptime achieved",
      "50% reduction in server costs",
      "2M+ monthly active users"
    ],
    duration: "4 months",
    team: "8 developers",
    technologies: ["Next.js", "AWS", "Docker", "Kubernetes"],
    image: "/api/placeholder/600/400",
    featured: true
  },
  {
    id: 3,
    title: "Cybersecurity Implementation",
    client: "FinanceCorp",
    industry: "Financial Services",
    challenge: "Need for comprehensive security framework and compliance",
    solution: "Implemented zero-trust security architecture with advanced monitoring",
    results: [
      "100% compliance with SOC 2 Type II",
      "Zero security breaches",
      "99.9% threat detection rate",
      "50% reduction in security incidents"
    ],
    duration: "8 months",
    team: "15 security experts",
    technologies: ["Zero Trust", "SIEM", "WAF", "IAM"],
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    id: 4,
    title: "Data Analytics Platform",
    client: "ManufacturingCo",
    industry: "Manufacturing",
    challenge: "Need for real-time production monitoring and predictive analytics",
    solution: "Built comprehensive IoT and analytics platform",
    results: [
      "25% increase in production efficiency",
      "30% reduction in downtime",
      "40% improvement in quality control",
      "Real-time monitoring of 1000+ sensors"
    ],
    duration: "5 months",
    team: "10 developers",
    technologies: ["IoT", "Python", "TensorFlow", "InfluxDB"],
    image: "/api/placeholder/600/400",
    featured: false
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
  },
  {
    id: 5,
    title: "Real Estate PropTech Platform",
    client: "PropertyPro",
    industry: "Real Estate",
    challenge: "Fragmented property management and lead generation",
    solution: "Integrated PropTech platform with AI-powered lead scoring",
    results: [
      "200% increase in lead conversion",
      "50% reduction in manual work",
      "Automated property matching",
      "Mobile-first user experience"
    ],
    technologies: ["PropTech", "AI/ML", "Mobile Development"],
    duration: "7 months",
    team: "10 experts",
    image: "/api/placeholder/600/400"
  },
  {
    id: 6,
    title: "SaaS Platform Development",
    client: "StartupTech",
    industry: "SaaS",
    challenge: "Building scalable SaaS platform from scratch",
    solution: "End-to-end SaaS development with multi-tenant architecture",
    results: [
      "10,000+ active users",
      "99.9% uptime",
      "Scalable infrastructure",
      "Rapid feature deployment"
    ],
<<<<<<< HEAD
    technologies: ["SaaS Development", "Multi-tenancy", "Cloud Computing"],
    duration: "12 months",
    team: "25 experts",
    image: "/api/placeholder/600/400"
=======
    duration: "4 months",
    team: "8 developers",
    technologies: ["React Native", "Firebase", "WebRTC", "Push Notifications"],
    image: "/api/placeholder/600/400",
    featured: false
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
  }
];

const industries = [
<<<<<<< HEAD
  "All Industries",
  "Healthcare",
  "E-commerce",
  "Finance",
  "Manufacturing",
  "Real Estate",
  "SaaS",
  "Education"
];

const technologies = [
  "All Technologies",
  "AI/ML",
  "Cloud Computing",
  "Cybersecurity",
  "IoT",
=======
  "Healthcare",
  "Financial Services",
  "Manufacturing",
  "Retail",
  "Education",
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
  "PropTech",
  "SaaS Development",
  "Data Analytics"
];

<<<<<<< HEAD
const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "99.9%", label: "Success Rate" },
  { number: "24/7", label: "Support Available" }
];

export default function CaseStudiesPage() {
  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
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
=======
export default function CaseStudies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  return (
    <Layout title="Case Studies - Zion Tech Group">
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
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
=======
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
                Discover how we've helped businesses transform and succeed with innovative technology solutions.
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
              </p>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
=======
        {/* Filter Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                  >
                    <option value="All">All Industries</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
                >
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
=======
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {caseStudy.client} • {caseStudy.industry}
                    </p>
                    <p className="text-gray-700 mb-4">
                      {caseStudy.challenge}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseStudy.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{caseStudy.duration}</span>
                      <span>{caseStudy.team}</span>
                    </div>
                  </div>
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
                </motion.div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD

        {/* Featured Case Studies */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how we've helped businesses transform and achieve their goals
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
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
=======
      </div>
    </Layout>
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
  );
}
