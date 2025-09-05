import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
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
=======
import {
  Users,
  Clock,
  CheckCircle,
  BarChart3,
  Building,
  Cloud,
  Shield
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
} from 'lucide-react';
import Layout from '../components/Layout';

const caseStudies = [
  {
<<<<<<< HEAD
    id: 1,
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
  },
  {
    id: 2,
    title: "Cloud Migration for Financial Services",
    client: "Regional Bank",
    industry: "Financial Services",
    challenge: "Legacy systems causing performance issues and high maintenance costs",
    solution: "Complete cloud migration with microservices architecture",
    results: [
      "50% reduction in infrastructure costs",
      "99.9% uptime achieved",
      "3x faster application performance",
      "Zero security incidents"
    ],
    technologies: ["AWS", "Kubernetes", "Microservices", "DevOps"],
    duration: "8 months",
    team: "15 experts",
    image: "/images/case-studies/cloud-migration.jpg"
  },
  {
    id: 3,
    title: "Cybersecurity Enhancement",
    client: "Manufacturing Company",
    industry: "Manufacturing",
    challenge: "Increasing cyber threats and compliance requirements",
    solution: "Comprehensive security framework with 24/7 monitoring",
    results: [
      "100% compliance with industry standards",
      "90% reduction in security incidents",
      "24/7 threat monitoring",
      "50% faster incident response"
    ],
    technologies: ["Cybersecurity", "SIEM", "Compliance", "Monitoring"],
    duration: "4 months",
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
  },
  {
    id: 5,
    title: "Cloud Migration Strategy",
    client: "TechStartup",
    industry: "Technology",
    challenge: "Need to scale infrastructure and reduce operational costs",
    solution: "Migrated entire infrastructure to AWS with auto-scaling",
    results: [
      "70% reduction in infrastructure costs",
      "Auto-scaling to handle 10x traffic",
      "99.9% availability",
      "50% faster deployment times"
    ],
    duration: "3 months",
    team: "6 developers",
    technologies: ["AWS", "Terraform", "Docker", "Kubernetes"],
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    id: 6,
    title: "Mobile App Development",
    client: "ServiceProvider",
    industry: "Services",
    challenge: "Need for mobile presence and customer engagement",
    solution: "Developed cross-platform mobile app with real-time features",
    results: [
      "50,000+ app downloads",
      "4.8/5 app store rating",
      "40% increase in customer engagement",
      "Real-time notifications and chat"
    ],
    duration: "4 months",
    team: "8 developers",
    technologies: ["React Native", "Firebase", "WebRTC", "Push Notifications"],
    image: "/api/placeholder/600/400",
    featured: false
  }
];

const industries = [
  "Healthcare",
  "Financial Services",
  "Manufacturing",
  "Retail",
  "Education",
  "PropTech",
  "SaaS Development",
  "Data Analytics"
];

export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our success stories and see how we've helped clients transform their businesses with innovative technology solutions." />
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
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
                Discover how we've helped businesses transform and succeed with innovative technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

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
=======
    title: 'AI-Powered Customer Service Transformation',
    client: 'TechCorp Inc.',
    industry: 'Technology',
    challenge: 'High customer service costs and response times',
    solution: 'Implemented AI chatbots and automated ticket routing',
    results: '60% reduction in response time, 40% cost savings',
    duration: '3 months',
    team: '5 AI engineers'
  },
  {
    title: 'Cloud Infrastructure Migration',
    client: 'FinanceFlow Ltd.',
    industry: 'Financial Services',
    challenge: 'Legacy system limitations and scalability issues',
    solution: 'Migrated to AWS with microservices architecture',
    results: '99.9% uptime, 50% performance improvement',
    duration: '6 months',
    team: '8 cloud architects'
  }
];

export default function CaseStudiesPage() {
  return (
    <Layout title="Case Studies - Zion Tech Group">
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Success Stories
              </h1>
              <p className="text-xl text-blue-100">
                Real results from our technology solutions
              </p>
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
<<<<<<< HEAD
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
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
=======
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                  <div className="mb-4">
                    <p className="text-gray-600"><strong>Client:</strong> {study.client}</p>
                    <p className="text-gray-600"><strong>Industry:</strong> {study.industry}</p>
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Challenge:</h4>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Solution:</h4>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Results:</h4>
                    <p className="text-gray-700">{study.results}</p>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Duration: {study.duration}</span>
                    <span>Team: {study.team}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
