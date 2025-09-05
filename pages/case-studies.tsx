import React, { useState } from 'react'
import MainLayout from '../components/layout/MainLayout'
import Link from 'next/link'
import { motion } from 'framer-motion
import {
  // TODO: Implement
}
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
} from 'lucide-react
const caseStudyCategories = ['
  { name: "All", count: 25, active: true },
  { name: "AI Solutions", count: 8, active: false },
  { name: "IT Services", count: 6, active: false },
  { name: "Micro SaaS", count: 5, active: false },
  { name: "Enterprise", count: 4, active: false },
  { name: "Startup", count: 2, active: false }]
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
    teamSize: "8 developers",]
    technologies: [AI/ML", "NLP", "Python", "AWS"],
    featured: true,
    metrics: {,
  costReduction: "60%",
      responseTime: "40%",
      customerSatisfaction: "85%",
      roi: "300%"
    },
    testimonial: {,
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
    technologies: [AWS", "Docker", "Kubernetes", "Terraform"],
    featured: true,
    metrics: {,
  costReduction: "50%",
      uptime: "99.9%",
      performance: "300%",
      roi: "250%"
    },
    testimonial: {,
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
    technologies: [React", "Node.js", "PostgreSQL", "Redis"],
    featured: false,
    metrics: {,
  users: "10,000+",
      mrr: "$50K",
      satisfaction: "95%",
      growth: "400%"
    },
    testimonial: {,
  quote: "The platform has been instrumental in our growth. The team delivered exactly what we needed and more.",
      author: "Emily Rodriguez",
      role: "Founder & CEO"
    }
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
    metrics: {,
  compliance: "100%",
      incidents: "0",
      auditScore: "A+",
      roi: "200%"
    },
    testimonial: {,
  quote: "The security implementation was thorough and professional. We now have complete confidence in our data protection.",
      author: "Dr. James Wilson",
      role: "Chief Information Officer"
    }
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
    metrics: {,
  costReduction: "30%",
      accuracy: "95%",
      efficiency: "45%",
      roi: "180%"
    },
    testimonial: {,
  quote: "The AI solution has revolutionized our inventory management. We've eliminated stockouts and reduced costs significantly.",
      author: "Lisa Thompson",
      role: "Operations Director"
    }
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
    metrics: {,
  conversion: "200%",
      timeSavings: "50%",
      userAdoption: "90%",
      roi: "150%"
    },
    testimonial: {,
  quote: "The custom CRM has transformed our business. Our team is more efficient and our conversion rates have skyrocketed.",
      author: "Robert Davis",
      role: "Managing Partner"
    }
  }
];

const featuredCaseStudies = caseStudies.filter(caseStudy => caseStudy.featured);
const regularCaseStudies = caseStudies.filter(caseStudy => !caseStudy.featured);

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');''
  const [searchQuery, setSearchQuery] = useState('');'
  const filteredCaseStudies = caseStudies.filter(caseStudy => {'
    const matchesCategory = selectedCategory === 'All' || caseStudy.category === selectedCategory;')
    const matchesSearch = caseStudy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         caseStudy.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         caseStudy.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         caseStudy.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout;'
      title="Case Studies - Zion Tech Group"
      description="Real-world success stories and case studies showcasing how we've helped businesses achieve their goals with technology solutions."
    >
</MainLayout>"
      <div className="min-h-screen bg-gray-50">"
</div>"
        <section className="bg-gradient-to-br from-emerald-900 via-blue-900 to-indigo-900 text-white py-20">"
</section>"
          <div className="container mx-auto px-4">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
</motion>"
              <h1 className="text-4xl md:text-6xl font-bold mb-6">"
</h1>"
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">"
</span>
                </span>
              </h1>"
              <p className="text-xl md:text-2xl text-gray-300 mb-8">"
</p>
              </p>
            </motion.div>
          </div>
        </section>"
        <section className="py-12 bg-white">"
</section>"
          <div className="container mx-auto px-4">"
</div>"
            <div className="max-w-6xl mx-auto">"
</div>"
              <div className="flex flex-col lg:flex-row gap-4 mb-8">"
</div>"
                <div className="flex-1 relative">"
</div>"
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />"
</Search>
                  <input;"
                    type="text"
                    placeholder="Search case studies..."
                    value={searchQuery})
                    onChange={(e) => setSearchQuery(e.target.value)}
</input>
                </div>"
                <div className="flex gap-2 overflow-x-auto">"
</div>
                    <button;
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
</button>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </section>"
        <section className="py-16 bg-white">"
</section>"
          <div className="container mx-auto px-4">"
</div>
            <motion.div;"
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
</motion>"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>"
              <p className="text-lg text-gray-600">Highlighting our most impactful projects</p>"
            </motion.div>
"
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">"
</div>
                <motion.div;
                  key={caseStudy.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 border-emerald-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
</motion>"
                  <div className="p-8">"
</div>"
                    <div className="flex items-center justify-between mb-4">"
</div>"
                      <div className="flex items-center space-x-2">"
</div>"
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full">"
</span>
                        </span>"
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">"
</span>
                        </span>
                      </div>"
                      <div className="flex items-center text-sm text-gray-500">"
</div>"
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />"
</Star>
                      </div>
                    </div>
                    "
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">"
</h3>
                    </h3>
                    "
                    <div className="mb-4">"
</div>"
                      <p className="text-lg font-semibold text-gray-700 mb-1">{caseStudy.client}</p>"
                      <p className="text-sm text-gray-500">{caseStudy.industry}</p>"
                    </div>
                    "
                    <div className="mb-6">"
</div>"
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>"
                      <p className="text-gray-600 text-sm mb-3">{caseStudy.challenge}</p>"
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>"
                      <p className="text-gray-600 text-sm mb-3">{caseStudy.solution}</p>"
                      <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>"
                      <p className="text-emerald-600 text-sm font-semibold">{caseStudy.results}</p>"
                    </div>
                    "
                    <div className="grid grid-cols-2 gap-4 mb-6">"
</div>"
                      <div className="text-center p-3 bg-gray-50 rounded-lg">"
</div>"
                        <div className="text-2xl font-bold text-emerald-600">{caseStudy.metrics.costReduction}</div>"
                        <div className="text-xs text-gray-600">Cost Reduction</div>"
                      </div>"
                      <div className="text-center p-3 bg-gray-50 rounded-lg">"
</div>"
                        <div className="text-2xl font-bold text-emerald-600">{caseStudy.metrics.roi}</div>"
                        <div className="text-xs text-gray-600">ROI</div>"
                      </div>
                    </div>
                    "
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">"
</div>"
                      <p className="text-gray-700 italic mb-2">"{caseStudy.testimonial.quote}</p>"
                      <div className="text-sm text-gray-600">"
</div>"
                        <div className="font-semibold">{caseStudy.testimonial.author}</div>"
                        <div>{caseStudy.testimonial.role}</div>
                      </div>
                    </div>
                    "
                    <div className="flex items-center justify-between">"
</div>"
                      <div className="text-sm text-gray-500">"
</div>
                      </div>
                      <Link;
                        href={`/case-studies/${caseStudy.id}`}
                        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold"
                      >
</Link>
                        <span>Read Full Case Study</span>"
                        <ArrowRight className="w-4 h-4 ml-1" />"
</ArrowRight>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>"
        <section className="py-16">"
</section>"
          <div className="container mx-auto px-4">"
</div>
            <motion.div;"
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
</motion>"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">All Case Studies</h2>"
              <p className="text-lg text-gray-600">"
</p>
              </p>
            </motion.div>
"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
</div>
                <motion.article;
                  key={caseStudy.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
</motion>"
                  <div className="p-6">"
</div>"
                    <div className="flex items-center justify-between mb-4">"
</div>"
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full">"
</span>
                      </span>"
                      <div className="flex items-center text-sm text-gray-500">"
</div>"
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />"
</Star>
                      </div>
                    </div>
                    "
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">"
</h3>
                    </h3>
                    "
                    <div className="mb-4">"
</div>"
                      <p className="text-lg font-semibold text-gray-700 mb-1">{caseStudy.client}</p>"
                      <p className="text-sm text-gray-500">{caseStudy.industry}</p>"
                    </div>
                    "
                    <p className="text-gray-600 mb-4 leading-relaxed">"
</p>
                    </p>
                    "
                    <div className="mb-4">"
</div>"
                      <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>"
                      <p className="text-emerald-600 text-sm font-semibold">{caseStudy.results}</p>"
                    </div>
                    "
                    <div className="flex flex-wrap gap-1 mb-4">"
</div>"
                        <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"
</span>
                        </span>
                    </div>
                    "
                    <div className="flex items-center justify-between">"
</div>"
                      <div className="text-sm text-gray-500">"
</div>
                      </div>
                      <Link;
                        href={`/case-studies/${caseStudy.id}`}
                        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold group-hover:text-emerald-700"
                      >
</Link>
                        <span>Read More</span>"
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />"
</ArrowRight>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>"
              <div className="text-center py-12">"
</div>"
                <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />"
</BarChart3>"
                <h3 className="text-xl font-semibold text-gray-900 mb-2">"
</h3>
                </h3>"
                <p className="text-gray-600">"
</p>
                </p>
              </div>
          </div>
        </section>"
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">"
</section>"
          <div className="container mx-auto px-4 text-center">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
</motion>"
              <h2 className="text-3xl md:text-4xl font-bold mb-6">"
</h2>
              </h2>"
              <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">"
</p>
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>"
                <Link href="/contact" className="px-8 py-4 bg-white text-emerald-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">"
</Link>
                </Link>"
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold">"
</Link>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>"