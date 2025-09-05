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
import MainLayout from '../src/components/layout/MainLayout';

const caseStudies = [
  {
    id: 1,
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
    category: "AI Solutions",
    featured: true
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
    category: "AI Solutions",
    featured: false
  },
  {
    id: 3,
    title: "Enterprise Cloud Migration",
    client: "Fortune 500 Manufacturing",
    industry: "Manufacturing",
    challenge: "Legacy on-premise infrastructure limiting scalability and innovation",
    solution: "Complete cloud migration with microservices architecture",
    results: [
      "50% reduction in infrastructure costs",
      "99.9% uptime achieved",
      "3x faster deployment cycles",
      "40% improvement in performance"
    ],
    duration: "8 months",
    team: "15 experts",
    technologies: ["Cloud", "DevOps", "Kubernetes", "Monitoring"],
    category: "Cloud Solutions",
    featured: true
  },
  {
    id: 4,
    title: "Fintech Security Platform",
    client: "Digital Banking Startup",
    industry: "Financial Services",
    challenge: "Building secure, compliant platform for digital banking services",
    solution: "End-to-end security platform with fraud detection and compliance automation",
    results: [
      "Zero security breaches",
      "SOC 2 compliance achieved",
      "99.99% fraud detection accuracy",
      "50% faster compliance reporting"
    ],
    duration: "4 months",
    team: "10 experts",
    technologies: ["Security", "Blockchain", "Compliance", "AI"],
    category: "Cybersecurity",
    featured: false
  }
];

const categories = [
  { name: "All", count: caseStudies.length },
  { name: "AI Solutions", count: caseStudies.filter(c => c.category === "AI Solutions").length },
  { name: "Cloud Solutions", count: caseStudies.filter(c => c.category === "Cloud Solutions").length },
  { name: "Cybersecurity", count: caseStudies.filter(c => c.category === "Cybersecurity").length }
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "99%", label: "Client Satisfaction" },
  { number: "$50M+", label: "Cost Savings Delivered" },
  { number: "24/7", label: "Support Available" }
];

export default function CaseStudiesPage() {
  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Explore our success stories and see how we've helped businesses transform with cutting-edge technology solutions."
      keywords="case studies, success stories, client projects, technology solutions, business transformation"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success Stories That{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Inspire Innovation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover how we've helped businesses across industries transform their operations 
                with cutting-edge technology solutions and achieve remarkable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#case-studies" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  View Case Studies
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Start Your Project
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
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
                  <div className="text-4xl font-bold text-indigo-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Featured Case Studies
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our most successful projects and see the real impact of our technology solutions.
              </p>
            </motion.div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                    study.featured ? 'ring-2 ring-indigo-500' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {study.featured && (
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2">
                      <span className="text-sm font-semibold">Featured Project</span>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                            {study.category}
                          </span>
                          <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                            {study.industry}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                        <p className="text-lg text-indigo-600 font-semibold mb-4">{study.client}</p>
                        <p className="text-gray-600 mb-6">{study.challenge}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <Target className="w-5 h-5 mr-2 text-indigo-600" />
                          Solution
                        </h4>
                        <p className="text-gray-600 mb-4">{study.solution}</p>
                        
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <Zap className="w-5 h-5 mr-2 text-indigo-600" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                          Results
                        </h4>
                        <ul className="space-y-3">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 border-t border-gray-200">
                      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-4 sm:mb-0">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          Duration: {study.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          Team: {study.team}
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                      >
                        Start Similar Project
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's work together to transform your business with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-center sm:text-left">
                  <p className="text-indigo-100 mb-1">📞 <strong>Call:</strong> +1 302 464 0950</p>
                  <p className="text-indigo-100">📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
                </div>
                <Link href="/contact" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your Project
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}