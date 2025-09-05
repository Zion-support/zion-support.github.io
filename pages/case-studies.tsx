import React, { useState } from 'react'
import MainLayout from '../components/layout/MainLayout'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  BarChart3, 
  Search, 
  Filter,
  ArrowRight,
  ExternalLink,
  Clock,
  User,
  Star,
  TrendingUp,
  DollarSign,
  Users,
  Globe,
  Shield,
  Zap,
  Award,
  ChevronRight
} from 'lucide-react'

const caseStudyCategories = [
  { name: "All", count: 25, active: true },
  { name: "AI Solutions", count: 8, active: false },
  { name: "IT Services", count: 6, active: false },
  { name: "Micro SaaS", count: 5, active: false },
  { name: "Enterprise", count: 4, active: false },
  { name: "Startup", count: 2, active: false }
];

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Customer Service Transformation",
    client: "E-commerce Retailer",
    industry: "Retail",
    challenge: "High customer service costs and inconsistent response quality",
    solution: "Implemented AI-powered chatbot and intelligent routing system",
    results: "60% reduction in support costs, 40% faster response times",
    category: "AI Solutions",
    duration: "3 months",
    teamSize: "8 developers",
    technologies: ["AI/ML", "NLP", "Python", "AWS"],
    featured: true,
    metrics: {
      costReduction: "60%",
      responseTime: "40%",
      customerSatisfaction: "85%",
      roi: "300%"
    },
    testimonial: {
      quote: "The AI solution transformed our customer service operations. We've seen incredible improvements in efficiency and customer satisfaction.",
      author: "Sarah Johnson",
      role: "VP of Customer Experience"
    }
  },
  {
    id: 2,
    title: "Cloud Infrastructure Migration and Optimization",
    client: "Financial Services Company",
    industry: "Finance",
    challenge: "Legacy infrastructure causing performance issues and high costs",
    solution: "Complete cloud migration with microservices architecture",
    results: "50% cost reduction, 99.9% uptime, 3x faster performance",
    category: "IT Services",
    duration: "6 months",
    teamSize: "12 developers",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    featured: true,
    metrics: {
      costReduction: "50%",
      uptime: "99.9%",
      performance: "300%",
      roi: "250%"
    },
    testimonial: {
      quote: "The migration was seamless and the results exceeded our expectations. Our infrastructure is now more reliable and cost-effective.",
      author: "Michael Chen",
      role: "CTO"
    }
  },
  {
    id: 3,
    title: "Micro SaaS Platform for Real Estate Management",
    client: "Real Estate Agency",
    industry: "Real Estate",
    challenge: "Need for custom CRM and property management solution",
    solution: "Built custom micro SaaS platform with real-time collaboration",
    results: "10,000+ users, $50K MRR, 95% user satisfaction",
    category: "Micro SaaS",
    duration: "4 months",
    teamSize: "6 developers",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
    featured: false,
    metrics: {
      users: "10,000+",
      mrr: "$50K",
      satisfaction: "95%",
      growth: "400%"
    },
    testimonial: {
      quote: "The platform has been instrumental in our growth. The team delivered exactly what we needed and more.",
      author: "Emily Rodriguez",
      role: "Founder & CEO"
    }
  },
  {
    id: 4,
    title: "Healthcare Data Security and Compliance Implementation",
    client: "Healthcare Provider",
    industry: "Healthcare",
    challenge: "HIPAA compliance and data security requirements",
    solution: "Comprehensive security audit and implementation",
    results: "100% HIPAA compliance, zero security incidents",
    category: "IT Services",
    duration: "5 months",
    teamSize: "10 developers",
    technologies: ["Security", "Compliance", "Monitoring", "Encryption"],
    featured: false,
    metrics: {
      compliance: "100%",
      incidents: "0",
      auditScore: "A+",
      roi: "200%"
    },
    testimonial: {
      quote: "The security implementation was thorough and professional. We now have complete confidence in our data protection.",
      author: "Dr. James Wilson",
      role: "Chief Information Officer"
    }
  },
  {
    id: 5,
    title: "AI-Driven Inventory Management System",
    client: "Manufacturing Company",
    industry: "Manufacturing",
    challenge: "Inefficient inventory management leading to stockouts and overstock",
    solution: "AI-driven demand forecasting and inventory optimization",
    results: "30% reduction in inventory costs, 95% stock accuracy",
    category: "AI Solutions",
    duration: "4 months",
    teamSize: "7 developers",
    technologies: ["Machine Learning", "Python", "TensorFlow", "APIs"],
    featured: false,
    metrics: {
      costReduction: "30%",
      accuracy: "95%",
      efficiency: "45%",
      roi: "180%"
    },
    testimonial: {
      quote: "The AI solution has revolutionized our inventory management. We've eliminated stockouts and reduced costs significantly.",
      author: "Lisa Thompson",
      role: "Operations Director"
    }
  },
  {
    id: 6,
    title: "Custom CRM for Real Estate Agency",
    client: "Real Estate Agency",
    industry: "Real Estate",
    challenge: "Need for specialized CRM with property management features",
    solution: "Custom CRM with property management and client tracking",
    results: "200% increase in lead conversion, 50% time savings",
    category: "Micro SaaS",
    duration: "3 months",
    teamSize: "5 developers",
    technologies: ["Vue.js", "Laravel", "MySQL", "APIs"],
    featured: false,
    metrics: {
      conversion: "200%",
      timeSavings: "50%",
      userAdoption: "90%",
      roi: "150%"
    },
    testimonial: {
      quote: "The custom CRM has transformed our business. Our team is more efficient and our conversion rates have skyrocketed.",
      author: "Robert Davis",
      role: "Managing Partner"
    }
  }
];

const featuredCaseStudies = caseStudies.filter(caseStudy => caseStudy.featured);
const regularCaseStudies = caseStudies.filter(caseStudy => !caseStudy.featured);

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredCaseStudies = caseStudies.filter(caseStudy => {
    const matchesCategory = selectedCategory === 'All' || caseStudy.category === selectedCategory;
    const matchesSearch = caseStudy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         caseStudy.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         caseStudy.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         caseStudy.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Real-world success stories and case studies showcasing how we've helped businesses achieve their goals with technology solutions."
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-emerald-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Real success stories from businesses we've helped transform with technology
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search case studies..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 overflow-x-auto">
                    {caseStudyCategories.map((category) => (
                      <button
                        key={category.name}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors duration-200 ${
                          selectedCategory === category.name
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {category.name} ({category.count})
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div className="grid gap-8">
                {filteredCaseStudies.map((caseStudy, index) => (
                  <motion.div
                    key={caseStudy.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                              {caseStudy.category}
                            </span>
                            {caseStudy.featured && (
                              <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                                Featured
                              </span>
                            )}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {caseStudy.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            <strong>{caseStudy.client}</strong> • {caseStudy.industry}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mt-4 md:mt-0">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {caseStudy.duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {caseStudy.teamSize}
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                          <p className="text-gray-600">{caseStudy.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                          <p className="text-gray-600">{caseStudy.solution}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                        <p className="text-gray-600 mb-4">{caseStudy.results}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {Object.entries(caseStudy.metrics).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-2xl font-bold text-blue-600">{value}</div>
                              <div className="text-sm text-gray-500 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {caseStudy.testimonial && (
                        <div className="bg-gray-50 rounded-lg p-6">
                          <blockquote className="text-gray-700 italic mb-4">
                            "{caseStudy.testimonial.quote}"
                          </blockquote>
                          <div className="flex items-center">
                            <div>
                              <div className="font-semibold text-gray-900">
                                {caseStudy.testimonial.author}
                              </div>
                              <div className="text-sm text-gray-500">
                                {caseStudy.testimonial.role}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredCaseStudies.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No case studies found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search or filter criteria
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}