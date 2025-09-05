import React, { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BarChart3, 
  Search, 
  Filter,
  ArrowRight,
  ExternalLink,
  Building2,
  Heart,
  DollarSign,
  ShoppingCart,
  GraduationCap,
  Globe,
  Shield,
  Zap,
  Award,
  ChevronRight
} from 'lucide-react';

const caseStudyCategories = [
  { name: 'All', value: 'all' },
  { name: 'Healthcare', value: 'healthcare' },
  { name: 'Finance', value: 'finance' },
  { name: 'Education', value: 'education' },
  { name: 'Government', value: 'government' },
  { name: 'Manufacturing', value: 'manufacturing' },
  { name: 'Retail', value: 'retail' }
];

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Healthcare Platform",
    client: "MedTech Solutions",
    industry: "healthcare",
    challenge: "Needed to process and analyze large volumes of medical data to improve patient outcomes",
    solution: "Developed an AI-powered platform that analyzes patient data in real-time",
    results: [
      "40% reduction in diagnosis time",
      "25% improvement in patient outcomes",
      "60% increase in operational efficiency"
    ],
    technologies: ["Machine Learning", "Cloud Computing", "Data Analytics"],
    image: "/images/case-studies/healthcare.jpg"
  },
  {
    id: 2,
    title: "Financial Risk Management System",
    client: "Global Finance Corp",
    industry: "finance",
    challenge: "Required advanced risk assessment and fraud detection capabilities",
    solution: "Built a comprehensive risk management system with real-time monitoring",
    results: [
      "50% reduction in false positives",
      "35% improvement in fraud detection",
      "80% faster risk assessment"
    ],
    technologies: ["AI/ML", "Blockchain", "Real-time Analytics"],
    image: "/images/case-studies/finance.jpg"
  },
  {
    id: 3,
    title: "Smart Manufacturing Platform",
    client: "Industrial Dynamics",
    industry: "manufacturing",
    challenge: "Optimize production processes and reduce downtime",
    solution: "Implemented IoT sensors and AI analytics for predictive maintenance",
    results: [
      "30% reduction in downtime",
      "20% increase in production efficiency",
      "45% decrease in maintenance costs"
    ],
    technologies: ["IoT", "AI Analytics", "Cloud Platform"],
    image: "/images/case-studies/manufacturing.jpg"
  },
  {
    id: 4,
    title: "E-Learning Platform",
    client: "EduTech University",
    industry: "education",
    challenge: "Create an engaging online learning experience for students",
    solution: "Developed a comprehensive e-learning platform with AI-powered personalization",
    results: [
      "60% increase in student engagement",
      "40% improvement in learning outcomes",
      "70% reduction in administrative overhead"
    ],
    technologies: ["AI/ML", "Cloud Computing", "Mobile Development"],
    image: "/images/case-studies/education.jpg"
  }
];

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesCategory = selectedCategory === 'all' || study.industry === selectedCategory;
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout
      title="Case Studies - Zion Tech Group"
      description="Explore our successful projects and client success stories across various industries."
      keywords="case studies, success stories, client projects, technology solutions, AI implementations"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Discover how we've helped businesses transform and achieve their goals through innovative technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {caseStudyCategories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category.value
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                        {study.industry.charAt(0).toUpperCase() + study.industry.slice(1)}
                      </span>
                      <span className="text-sm text-gray-500">{study.client}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
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
                    
                    <button className="flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's work together to create innovative solutions that drive real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Start Your Project
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}