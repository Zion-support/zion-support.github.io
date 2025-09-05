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
    client: "Global E-commerce Retailer",
    industry: "E-commerce",
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
    industry: "Financial Services",
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
    title: "Micro SaaS Platform for Project Management",
    client: "Tech Startup",
    industry: "Technology",
    challenge: "Need for a scalable project management solution",
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
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Case Studies
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Real-world success stories showcasing our expertise and results
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Case Studies
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our most impactful projects and the results we've achieved for our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredCaseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                        {caseStudy.category}
                      </span>
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm font-medium">Featured</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{caseStudy.title}</h3>
                    <p className="text-gray-600 mb-4">{caseStudy.client} • {caseStudy.industry}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600 text-sm mb-3">{caseStudy.challenge}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600 text-sm mb-3">{caseStudy.solution}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                      <p className="text-gray-600 text-sm">{caseStudy.results}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(caseStudy.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-indigo-600">{value}</div>
                          <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4">
                      <blockquote className="text-gray-700 italic mb-2">
                        "{caseStudy.testimonial.quote}"
                      </blockquote>
                      <div className="text-sm text-gray-600">
                        — {caseStudy.testimonial.author}, {caseStudy.testimonial.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}