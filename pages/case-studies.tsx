import React from 'react';
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
  Zap,
  Shield,
  Cloud
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

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
    title: "Cloud Infrastructure Migration",
    client: "Financial Services Company",
    industry: "Financial Services",
    challenge: "Legacy infrastructure causing performance issues",
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
      quote: "The migration was seamless and exceeded our expectations.",
      author: "Michael Chen",
      role: "CTO"
    }
  },
  {
    id: 3,
    title: "Micro SaaS Platform Development",
    client: "Tech Startup",
    industry: "Technology",
    challenge: "Need for scalable project management solution",
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
      quote: "The platform has been instrumental in our growth.",
      author: "Emily Rodriguez",
      role: "Founder & CEO"
    }
  },
  {
    id: 2,
    title: "Healthcare AI Platform Transformation",
    client: "MedTech Solutions",
    industry: "Healthcare",
    challenge: "Legacy system modernization and AI integration for patient data analysis",
    solution: "Custom AI platform with real-time analytics and predictive modeling",
    results: [
      "40% reduction in diagnosis time",
      "95% accuracy in predictive analytics",
      "60% improvement in patient outcomes",
      "$2M annual cost savings"
    ],
    duration: "6 months",
    team: "12 experts",
    technologies: ["AI/ML", "Cloud", "Data Analytics", "Security"],
    image: "/images/case-studies/healthcare-ai.jpg",
    featured: true
  },
  {
    title: "Enterprise Cloud Migration",
    client: "Global Finance Corp",
    industry: "Finance",
    challenge: "Migrating legacy systems to cloud while maintaining security and compliance",
    solution: "Comprehensive cloud migration with zero-downtime deployment",
    results: [
      "99.9% uptime achieved",
      "50% reduction in infrastructure costs",
      "3x faster deployment cycles",
      "SOC 2 compliance maintained"
    ],
    duration: "8 months",
    team: "15 experts",
    technologies: ["AWS", "Kubernetes", "DevOps", "Security"],
    image: "/images/case-studies/cloud-migration.jpg",
    featured: true
  },
  {
    title: "E-commerce Platform Optimization",
    client: "RetailMax",
    industry: "Retail",
    challenge: "Scaling e-commerce platform to handle 10x traffic during peak seasons",
    solution: "Microservices architecture with auto-scaling and performance optimization",
    results: [
      "10x traffic handling capacity",
      "80% improvement in page load times",
      "99.8% availability during peak",
      "200% increase in conversion rates"
    ],
    duration: "4 months",
    team: "8 experts",
    technologies: ["Microservices", "React", "Node.js", "Redis"],
    image: "/images/case-studies/ecommerce-optimization.jpg",
    featured: false
  },
  {
    title: "Manufacturing IoT Integration",
    client: "Industrial Dynamics",
    industry: "Manufacturing",
    challenge: "Implementing IoT sensors and AI for predictive maintenance",
    solution: "End-to-end IoT platform with machine learning for predictive analytics",
    results: [
      "30% reduction in downtime",
      "25% increase in production efficiency",
      "50% reduction in maintenance costs",
      "Real-time monitoring capabilities"
    ],
    duration: "5 months",
    team: "10 experts",
    technologies: ["IoT", "AI/ML", "Edge Computing", "Analytics"],
    image: "/images/case-studies/manufacturing-iot.jpg",
    featured: false
  },
  {
    title: "Financial Services Digital Transformation",
    client: "SecureBank",
    industry: "Finance",
    challenge: "Modernizing legacy banking systems and implementing digital-first approach",
    solution: "Complete digital transformation with mobile-first banking platform",
    results: [
      "70% increase in digital adoption",
      "90% customer satisfaction score",
      "40% reduction in operational costs",
      "Real-time transaction processing"
    ],
    duration: "12 months",
    team: "20 experts",
    technologies: ["React Native", "Blockchain", "AI", "Security"],
    image: "/images/case-studies/financial-transformation.jpg",
    featured: false
  },
  {
    title: "Education Platform Development",
    client: "EduTech Global",
    industry: "Education",
    challenge: "Creating scalable online learning platform with AI-powered personalization",
    solution: "Cloud-native learning management system with AI recommendations",
    results: [
      "500K+ active users",
      "85% course completion rate",
      "60% improvement in learning outcomes",
      "Multi-language support"
    ],
    duration: "7 months",
    team: "14 experts",
    technologies: ["React", "AI/ML", "Video Streaming", "Analytics"],
    image: "/images/case-studies/education-platform.jpg",
    featured: false
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
  }
];

const industries = [
<<<<<<< HEAD
  { name: 'All Industries', count: caseStudies.length },
  { name: 'Healthcare', count: caseStudies.filter(cs => cs.industry === 'Healthcare').length },
  { name: 'E-commerce', count: caseStudies.filter(cs => cs.industry === 'E-commerce').length },
  { name: 'Financial Services', count: caseStudies.filter(cs => cs.industry === 'Financial Services').length },
  { name: 'Technology', count: caseStudies.filter(cs => cs.industry === 'Technology').length }
=======
  { name: "Healthcare", count: 12, icon: Users },
  { name: "Finance", count: 8, icon: Building },
  { name: "Manufacturing", count: 6, icon: Globe },
  { name: "Retail", count: 10, icon: Target },
  { name: "Education", count: 5, icon: Award },
  { name: "Government", count: 4, icon: Shield }
];

const stats = [
  { number: '45+', label: 'Successful Projects' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '$50M+', label: 'Cost Savings Delivered' },
  { number: '500+', label: 'Years Combined Experience' }
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
];

export default function CaseStudiesPage() {
  return (
    <MainLayout 
      title="Case Studies - Zion Tech Group"
      description="Explore our successful projects and client transformations. Real case studies showcasing our expertise in AI, cloud, and digital transformation."
      keywords="case studies, success stories, client projects, digital transformation, AI implementation, cloud migration"
    >
<<<<<<< HEAD
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stories</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Discover how we've helped businesses transform and achieve their goals through innovative technology solutions. 
                Real projects, real results, real impact.
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
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                >
                  Start Your Project
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  {caseStudyCategories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                        selectedCategory === category.name
                          ? "bg-emerald-600 text-white" : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
              <p className="text-lg text-gray-600">Highlighting our most impactful projects</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.filter(cs => cs.featured).map((caseStudy, index) => (
=======
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
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

<<<<<<< HEAD
        {/* All Case Studies */}
        <section className="py-16 bg-gray-50">
=======
        {/* Industries Section */}
        <section className="py-20 bg-gray-50">
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We've delivered successful projects across various industries, each with unique challenges and requirements.
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((caseStudy, index) => (
                <motion.article
                  key={caseStudy.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full">
                        {caseStudy.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        4.9
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {caseStudy.title}
                    </h3>
                    
                    <div className="mb-4">
                      <p className="text-gray-700 font-medium">{caseStudy.client}</p>
                      <p className="text-sm text-gray-500">{caseStudy.industry}</p>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {caseStudy.challenge}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {caseStudy.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                        {caseStudy.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            +{caseStudy.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        {caseStudy.teamSize}
                      </div>
                      <Link
                        href={`/case-studies/${caseStudy.id}`}
                        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold group-hover:text-emerald-700"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
=======
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                    <industry.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {industry.count} projects
                  </p>
                </motion.div>
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-16 bg-emerald-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h2>
                <p className="text-xl text-emerald-100 mb-8">
                  Let's discuss how we can help transform your business with technology
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-white text-emerald-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                  >
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/services"
                    className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-900 transition-colors inline-flex items-center justify-center"
                  >
                    View Our Services
                  </Link>
                </div>
              </motion.div>
            </div>
=======
        {/* Case Studies Grid */}
        <section id="case-studies" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our most impactful projects and see how we've helped businesses achieve their goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.article
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
                    study.featured ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className={`${study.featured ? 'flex' : 'block'}`}>
                    <div className={`${study.featured ? 'w-1/2' : 'w-full h-48'} bg-gray-200 flex items-center justify-center`}>
                      <BarChart3 className="w-12 h-12 text-gray-400" />
                    </div>
                    <div className={`p-6 ${study.featured ? 'w-1/2' : ''}`}>
                      {study.featured && (
                        <div className="flex items-center mb-3">
                          <Award className="w-4 h-4 text-yellow-500 mr-2" />
                          <span className="text-sm font-medium text-yellow-600">
                            Featured Case Study
                          </span>
                        </div>
                      )}
                      
                      <div className="flex items-center mb-3">
                        <Building className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-sm font-medium text-blue-600">
                          {study.industry}
                        </span>
                      </div>
                      
                      <h3 className={`font-bold text-gray-900 mb-3 ${
                        study.featured ? 'text-2xl' : 'text-xl'
                      }`}>
                        {study.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        <strong>Client:</strong> {study.client}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600 text-sm">
                          {study.challenge}
                        </p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600 text-sm">
                          {study.solution}
                        </p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                        <ul className="space-y-1">
                          {study.results.slice(0, 3).map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                              <TrendingUp className="w-3 h-3 text-green-500 mr-2" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{study.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          <span>{study.team}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        href="#"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                      >
                        Read Full Case Study
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let us help you achieve similar results. Contact us to discuss your project and see how we can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Learn About Our Process
                </Link>
              </div>
            </motion.div>
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
          </div>
        </section>
      </div>
    </MainLayout>
  );
}