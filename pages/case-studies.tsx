import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  ArrowRight,
  ExternalLink,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Building,
  Heart,
  DollarSign,
  ShoppingCart
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const caseStudies = [
  {
    title: "Healthcare AI Platform",
    client: "Regional Medical Center",
    industry: "Healthcare",
    icon: Heart,
    challenge: "Needed to implement AI-powered diagnostic tools while maintaining HIPAA compliance",
    solution: "Developed a secure AI platform with advanced diagnostic capabilities and automated compliance monitoring",
    results: [
      "40% faster diagnosis times",
      "99.9% HIPAA compliance rate",
      "60% reduction in diagnostic errors",
      "85% staff satisfaction improvement"
    ],
    readTime: "8 min read",
    href: "/case-studies/healthcare-ai-platform"
  },
  {
    title: "Financial Services Cloud Migration",
    client: "National Bank",
    industry: "Finance",
    icon: DollarSign,
    challenge: "Required secure migration of legacy banking systems to cloud infrastructure",
    solution: "Implemented zero-downtime migration with enhanced security and compliance features",
    results: [
      "50% reduction in infrastructure costs",
      "99.99% uptime achieved",
      "Zero security incidents",
      "3x faster transaction processing"
    ],
    readTime: "10 min read",
    href: "/case-studies/bank-cloud-migration"
  },
  {
    title: "Manufacturing IoT Integration",
    client: "Global Manufacturing Corp",
    industry: "Manufacturing",
    icon: Building,
    challenge: "Wanted to implement IoT sensors for predictive maintenance across 50+ facilities",
    solution: "Deployed comprehensive IoT platform with real-time monitoring and AI-powered predictive analytics",
    results: [
      "30% reduction in equipment downtime",
      "25% decrease in maintenance costs",
      "90% improvement in predictive accuracy",
      "ROI achieved in 8 months"
    ],
    readTime: "12 min read",
    href: "/case-studies/manufacturing-iot"
  },
  {
    title: "E-commerce Platform Optimization",
    client: "Retail Chain",
    industry: "Retail",
    icon: ShoppingCart,
    challenge: "Needed to scale e-commerce platform to handle 10x traffic during peak seasons",
    solution: "Implemented auto-scaling cloud infrastructure with AI-powered recommendation engine",
    results: [
      "500% increase in peak capacity",
      "35% improvement in conversion rates",
      "40% reduction in page load times",
      "99.9% uptime during peak periods"
    ],
    readTime: "9 min read",
    href: "/case-studies/ecommerce-optimization"
  },
  {
    title: "Government Data Platform",
    client: "State Government",
    industry: "Government",
    icon: Shield,
    challenge: "Required secure data platform for citizen services with strict compliance requirements",
    solution: "Built compliant data platform with advanced security features and citizen portal",
    results: [
      "80% faster citizen service delivery",
      "100% compliance with government standards",
      "60% reduction in data processing time",
      "95% citizen satisfaction rating"
    ],
    readTime: "11 min read",
    href: "/case-studies/government-data-platform"
  },
  {
    title: "Educational LMS Platform",
    client: "University System",
    industry: "Education",
    icon: Users,
    challenge: "Needed modern learning management system for 100,000+ students across multiple campuses",
    solution: "Developed scalable LMS with AI-powered personalized learning and analytics",
    results: [
      "45% improvement in student engagement",
      "30% increase in course completion rates",
      "50% reduction in administrative overhead",
      "90% faculty satisfaction rating"
    ],
    readTime: "7 min read",
    href: "/case-studies/educational-lms"
  }
];

const stats = [
  { number: '200+', label: 'Successful Projects' },
  { number: '99%', label: 'Client Satisfaction' },
  { number: '50%', label: 'Average Cost Reduction' },
  { number: '3x', label: 'Average Performance Improvement' }
];

const industries = [
  { name: "Healthcare", count: 45, icon: Heart },
  { name: "Finance", count: 38, icon: DollarSign },
  { name: "Manufacturing", count: 52, icon: Building },
  { name: "Retail", count: 29, icon: ShoppingCart },
  { name: "Government", count: 18, icon: Shield },
  { name: "Education", count: 31, icon: Users }
];

export default function CaseStudiesPage() {
  return (
    <MainLayout 
      title="Case Studies - Zion Tech Group"
      description="Explore real-world success stories and case studies from our clients across various industries. See how we've helped organizations achieve their technology goals."
      keywords="case studies, success stories, client results, project examples, industry solutions, technology implementations"
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
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Real-world case studies showcasing how we've helped organizations 
                across industries achieve their technology goals and drive business growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="#case-studies"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  View Case Studies <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/contact"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  Start Your Project
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-gray-300">
                Case studies across various industries and sectors
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors duration-300 group-hover:scale-105 transform">
                    <industry.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-white font-semibold mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {industry.count} case studies
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section id="case-studies" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Case Studies</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore detailed case studies showcasing our successful implementations 
                and the measurable results achieved for our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300 group"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-600 p-3 rounded-lg mr-4 group-hover:bg-blue-500 transition-colors duration-300">
                      <study.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {study.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {study.client} • {study.industry}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      {study.challenge}
                    </p>
                    
                    <h4 className="text-white font-semibold mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      {study.solution}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-300 text-sm">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.readTime}
                    </div>
                    <Link 
                      href={study.href}
                      className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group"
                    >
                      Read Full Case Study <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let us help you achieve similar results for your organization. 
                Contact us today to discuss your project and get a free consultation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Start Your Project <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/solutions"
                  className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  View Our Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}