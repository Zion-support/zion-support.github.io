import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  ArrowRight,
  TrendingUp,
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
  }
];

const industries = [
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
];

export default function CaseStudiesPage() {
  return (
    <MainLayout 
      title="Case Studies - Zion Tech Group"
      description="Explore our successful projects and client transformations. Real case studies showcasing our expertise in AI, cloud, and digital transformation."
      keywords="case studies, success stories, client projects, digital transformation, AI implementation, cloud migration"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
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

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
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

        {/* Industries Section */}
        <section className="py-20 bg-gray-50">
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
              ))}
            </div>
          </div>
        </section>

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
          </div>
        </section>
      </div>
    </MainLayout>
  );
}