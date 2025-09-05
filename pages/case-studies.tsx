import React, { useState } from 'react'
import MainLayout from '../components/layout/MainLayout'
import Link from 'next/link'
import { motion } from 'framer-motion';
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
  ChevronRight;'
} from 'lucide-react;
const caseStudyCategories = [',
  { name: "All", count: 25, active: true },
  { name: "AI Solutions", count: 8, active: false },
  { name: "IT Services", count: 6, active: false },
  { name: "Micro SaaS", count: 5, active: false },
  { name: "Enterprise", count: 4, active: false },
  { name: "Startup", count: 2, active: false }
]
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
    teamSize: "8 developers"];
    technologies: [AI/ML", "NLP", "Python", "AWS"],
    featured: true,
    metrics: {},
  {
  costReduction: "60%",
      responseTime: "40%",
      customerSatisfaction: "85%",
      roi: "300%"
    },
  {
    testimonial: {},
  {
  quote: "The AI solution transformed our customer service operations. We've seen incredible improvements in efficiency and customer satisfaction.",
      author: "Sarah Johnson",
      role: "VP of Customer Experience"
    },
  {
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
    technologies: [AWS", "Docker", "Kubernetes", "Terraform"],
    featured: true,
    metrics: {},
  {
  costReduction: "50%",
      uptime: "99.9%",
      performance: "300%",
      roi: "250%"
    },
  {
    testimonial: {},
  {
  quote: "The migration was seamless and the results exceeded our expectations. Our infrastructure is now more reliable and cost-effective.",
      author: "Michael Chen",
      role: "CTO"
    },
  {
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
    technologies: [React", "Node.js", "PostgreSQL", "Redis"],
    featured: false,
    metrics: {},
  {
  users: "10,000+",
      mrr: "$50K",
      satisfaction: "95%",
      growth: "400%"
    },
  {
    testimonial: {},
  {
  quote: "The platform has been instrumental in our growth. The team delivered exactly what we needed and more.",
      author: "Emily Rodriguez",
      role: "Founder & CEO"
    },
  {
  },
  {
    id: 4,
    title: "Enterprise Security Implementation",
    client: "Healthcare Organization",
    industry: "Healthcare",
    challenge: "HIPAA compliance and security vulnerabilities",
    solution: "Comprehensive security audit and implementation",
    results: "100% HIPAA compliance, zero security incidents",
    category: "IT Services",
    duration: "5 months",
    teamSize: "10 developers",
    technologies: [Security", "Compliance", "Monitoring", "Encryption"],
    featured: false,
    metrics: {},
  {
  compliance: "100%",
      incidents: "0",
      auditScore: "A+",
      roi: "200%"
    },
  {
    testimonial: {},
  {
  quote: "The security implementation was thorough and professional. We now have complete confidence in our data protection.",
      author: "Dr. James Wilson",
      role: "Chief Information Officer"
    },
  {
  },
  {
    id: 5,
    title: "AI-Powered Inventory Management",
    client: "Manufacturing Company",
    industry: "Manufacturing",
    challenge: "Inefficient inventory management leading to stockouts and overstock",
    solution: "AI-driven demand forecasting and inventory optimization",
    results: "30% reduction in inventory costs, 95% stock accuracy",
    category: "AI Solutions",
    duration: "4 months",
    teamSize: "7 developers",
    technologies: [Machine Learning", "Python", "TensorFlow", "APIs"],
    featured: false,
    metrics: {},
  {
  costReduction: "30%",
      accuracy: "95%",
      efficiency: "45%",
      roi: "180%"
    },
  {
    testimonial: {},
  {
  quote: "The AI solution has revolutionized our inventory management. We've eliminated stockouts and reduced costs significantly.",
      author: "Lisa Thompson",
      role: "Operations Director"
    },
  {
  },
  {
    id: 6,
    title: "Custom CRM Development",
    client: "Real Estate Agency",
    industry: "Real Estate",
    challenge: "Need for industry-specific CRM functionality",
    solution: "Custom CRM with property management and client tracking",
    results: "200% increase in lead conversion, 50% time savings",
    category: "Micro SaaS",
    duration: "3 months",
    teamSize: "5 developers",
    technologies: [Vue.js", "Laravel", "MySQL", "APIs"],
    featured: false,
    metrics: {},
  {
  conversion: "200%",
      timeSavings: "50%",
      userAdoption: "90%",
      roi: "150%"
    },
  {
    testimonial: {},
  {
  quote: "The custom CRM has transformed our business. Our team is more efficient and our conversion rates have skyrocketed.",
      author: "Robert Davis",
      role: "Managing Partner"
    },
  {
  },
  {
];

const featuredCaseStudies = caseStudies.filter(caseStudy => caseStudy.featured);
const regularCaseStudies = caseStudies.filter(caseStudy => !caseStudy.featured);

export default function CaseStudiesPage() {},
  {
  const ["selectedCategory", "setSelectedCategory"] = useState('All');''
  const ["searchQuery", "setSearchQuery"] = useState('');'
  const filteredCaseStudies = caseStudies.filter(caseStudy => {'})
    const matchesCategory = selectedCategory === 'All' || caseStudy.category === selectedCategory;');
    const matchesSearch = caseStudy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         caseStudy.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         caseStudy.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         caseStudy.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch
  });

  return (
    <MainLayout'
      title="Case Studies - Zion Tech Group"
      description="Real-world success stories and case studies showcasing how we've helped businesses achieve their goals with technology solutions.'
    >

      <div className="min-h-screen bg-gray-50">

        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">

          <div className="min-h-screen bg-gray-50">
</div>
            <motion.div
              initial={{ opacity: 0, y: 30 }},
  {
              animate={{ opacity: 1, y: 0 }},
  {
              transition={{ duration: 0.8 }},
  {
              className="text-center max-w-4xl mx-auto"
            >

              <h1 className="text-4xl md:text-6xl font-bold mb-6">"

                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">"
</span>
                </span>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8">"
</p>
              </p>
            </motion.div>
          </div>
        
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">

          <div className="min-h-screen bg-gray-50">

            <div className="min-h-screen bg-gray-50">

              <div className="min-h-screen bg-gray-50">

                <div className="min-h-screen bg-gray-50">

                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />"
</Search>
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    value={searchQuery});
                    onChange={(e) => setSearchQuery(e.target.value)},
  {
</input>
                
                <div className="min-h-screen bg-gray-50">
</div>
                    <button
                      key={category.name},
  {
                      onClick={() => setSelectedCategory(category.name)},
  {
</button>
                    </button>
                </div>
              </div>
            </div>
          </div>
        
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">

          <div className="min-h-screen bg-gray-50">
</div>
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }},
  {
              whileInView={{ opacity: 1, y: 0 }},
  {
              transition={{ duration: 0.8 }},
  {
              viewport={{ once: true }},
  {
            >

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Case Studies
              <p className="text-lg text-gray-600">Highlighting our most impactful projects
            </motion.div>
"
            <div className="min-h-screen bg-gray-50">
</div>
                <motion.div
                  key={caseStudy.id},
  {
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 border-emerald-100"
                  initial={{ opacity: 0, y: 30 }},
  {
                  whileInView={{ opacity: 1, y: 0 }},
  {
                  transition={{ duration: 0.8, delay: index * 0.1 }},
  {
                  viewport={{ once: true }},
  {
                >

                  <div className="min-h-screen bg-gray-50">

                    <div className="min-h-screen bg-gray-50">

                      <div className="min-h-screen bg-gray-50">

                        <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full">"
</span>
                        
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">"
</span>
                        </span>
                      
                      <div className="min-h-screen bg-gray-50">

                        <Star className="w-4 h-4 text-yellow-500 mr-1" />"
</Star>
                      </div>
                    </div>
                    "
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">"
</h3>
                    </h3>
                    "
                    <div className="min-h-screen bg-gray-50">

                      <p className="text-lg font-semibold text-gray-700 mb-1">{caseStudy.client},
  {
                      <p className="text-sm text-gray-500">{caseStudy.industry},
  {
                    </div>
                    "
                    <div className="min-h-screen bg-gray-50">

                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:
                      <p className="text-gray-600 text-sm mb-3">{caseStudy.challenge},
  {
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:
                      <p className="text-gray-600 text-sm mb-3">{caseStudy.solution},
  {
                      <h4 className="font-semibold text-gray-900 mb-2">Results:
                      <p className="text-emerald-600 text-sm font-semibold">{caseStudy.results},
  {
                    </div>
                    "
                    <div className="min-h-screen bg-gray-50">

                      <div className="min-h-screen bg-gray-50">

                        <div className="text-2xl font-bold text-emerald-600">{caseStudy.metrics.costReduction},
  {
                        <div className="text-xs text-gray-600">Cost Reduction
                      
                      <div className="min-h-screen bg-gray-50">

                        <div className="text-2xl font-bold text-emerald-600">{caseStudy.metrics.roi},
  {
                        <div className="text-xs text-gray-600">ROI
                      </div>
                    </div>
                    "
                    <div className="min-h-screen bg-gray-50">

                      <p className="text-gray-700 italic mb-2">"{caseStudy.testimonial.quote},
  {
                      <div className="min-h-screen bg-gray-50">

                        <div className="font-semibold">{caseStudy.testimonial.author},
  {
                        <div>{caseStudy.testimonial.role}</div>
                      </div>
                    </div>
                    "
                    <div className="min-h-screen bg-gray-50">

                      <div className="min-h-screen bg-gray-50">
</div>
                      </div>
                      <Link
                        href={`/case-studies/${caseStudy.id}`}`
                        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold"
                      >
</Link>
                        <span>Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-1" />"
</ArrowRight>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            </div>
          </div>
        
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">

          <div className="min-h-screen bg-gray-50">
</div>
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }},
  {
              whileInView={{ opacity: 1, y: 0 }},
  {
              transition={{ duration: 0.8 }},
  {
              viewport={{ once: true }},
  {
            >

              <h2 className="text-3xl font-bold text-gray-900 mb-4">All Case Studies
              <p className="text-lg text-gray-600">"
</p>
              </p>
            </motion.div>
"
            <div className="min-h-screen bg-gray-50">
</div>
                <motion.article;
                  key={caseStudy.id},
  {
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }},
  {
                  whileInView={{ opacity: 1, y: 0 }},
  {
                  transition={{ duration: 0.8, delay: index * 0.1 }},
  {
                  viewport={{ once: true }},
  {
                >

                  <div className="min-h-screen bg-gray-50">

                    <div className="min-h-screen bg-gray-50">

                      <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full">"
</span>
                      
                      <div className="min-h-screen bg-gray-50">

                        <Star className="w-4 h-4 text-yellow-500 mr-1" />"
</Star>
                      </div>
                    </div>
                    "
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">"
</h3>
                    </h3>
                    "
                    <div className="min-h-screen bg-gray-50">

                      <p className="text-lg font-semibold text-gray-700 mb-1">{caseStudy.client},
  {
                      <p className="text-sm text-gray-500">{caseStudy.industry},
  {
                    </div>
                    "
                    <p className="text-gray-600 mb-4 leading-relaxed">"
</p>
                    </p>
                    "
                    <div className="min-h-screen bg-gray-50">

                      <h4 className="font-semibold text-gray-900 mb-2">Key Results:
                      <p className="text-emerald-600 text-sm font-semibold">{caseStudy.results},
  {
                    </div>
                    "
                    <div className="min-h-screen bg-gray-50">

                        <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"
</span>
                        </span>
                    </div>
                    "
                    <div className="min-h-screen bg-gray-50">

                      <div className="min-h-screen bg-gray-50">
</div>
                      </div>
                      <Link
                        href={`/case-studies/${caseStudy.id}`}`
                        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold group-hover:text-emerald-700"
                      >
</Link>
                        <span>Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />"
</ArrowRight>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            
              <div className="min-h-screen bg-gray-50">

                <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />"

                <h3 className="text-xl font-semibold text-gray-900 mb-2">"
</h3>
                
                <p className="text-gray-600">"
</p>
                </p>
              </div>
          </div>
        
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">

          <div className="min-h-screen bg-gray-50">
</div>
            <motion.div
              initial={{ opacity: 0, y: 30 }},
  {
              whileInView={{ opacity: 1, y: 0 }},
  {
              transition={{ duration: 0.8 }},
  {
              viewport={{ once: true }},
  {
            >

              <h2 className="text-3xl md:text-4xl font-bold mb-6">"
</h2>
              
              <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">"
</p>
              
              <div className="min-h-screen bg-gray-50">

                <Link href="/contact" className="px-8 py-4 bg-white text-emerald-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">"
</Link>
                
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold">"
</Link>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );