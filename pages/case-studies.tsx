import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Award,
  Building,
  Globe,
  Zap,
  Shield,
  Brain,
  Cloud,
  Target
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'AI-Powered Healthcare Analytics Platform',
    client: 'MedTech Solutions',
    industry: 'Healthcare',
    challenge: 'MedTech Solutions needed to analyze large volumes of patient data to identify patterns and improve treatment outcomes.',
    solution: 'We developed a comprehensive AI-powered analytics platform that processes patient data, identifies health patterns, and provides predictive insights for better patient care.',
    results: [
      '40% improvement in diagnostic accuracy',
      '60% reduction in data analysis time',
      '25% increase in patient satisfaction',
      '30% cost savings in operational efficiency'
    ],
    technologies: ['Machine Learning', 'Python', 'TensorFlow', 'AWS', 'PostgreSQL'],
    duration: '6 months',
    team: '8 experts',
    image: '/images/case-studies/healthcare-ai.jpg',
    category: 'AI & Machine Learning',
    featured: true
  },
  {
    id: 2,
    title: 'E-commerce Micro SaaS Platform',
    client: 'RetailMax',
    industry: 'Retail',
    challenge: 'RetailMax needed a scalable e-commerce platform to handle seasonal traffic spikes and provide personalized shopping experiences.',
    solution: 'We built a custom micro SaaS platform with AI-powered recommendations, automated inventory management, and real-time analytics.',
    results: [
      '300% increase in conversion rates',
      '50% reduction in cart abandonment',
      '80% improvement in inventory accuracy',
      '200% growth in customer engagement'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'Docker'],
    duration: '4 months',
    team: '6 experts',
    image: '/images/case-studies/ecommerce-saas.jpg',
    category: 'Micro SaaS',
    featured: true
  },
  {
    id: 3,
    title: 'Financial Services Security Enhancement',
    client: 'SecureBank',
    industry: 'Finance',
    challenge: 'SecureBank required advanced cybersecurity measures to protect customer data and comply with financial regulations.',
    solution: 'We implemented a comprehensive security framework including zero-trust architecture, advanced threat detection, and automated compliance monitoring.',
    results: [
      '99.9% security uptime achieved',
      'Zero security breaches in 18 months',
      '50% reduction in security incidents',
      '100% regulatory compliance maintained'
    ],
    technologies: ['Cybersecurity', 'Zero Trust', 'SIEM', 'AWS Security', 'Compliance'],
    duration: '8 months',
    team: '12 experts',
    image: '/images/case-studies/finance-security.jpg',
    category: 'Cybersecurity',
    featured: false
  },
  {
    id: 4,
    title: 'Manufacturing IoT Integration',
    client: 'IndustrialCorp',
    industry: 'Manufacturing',
    challenge: 'IndustrialCorp needed to modernize their manufacturing processes with IoT sensors and real-time monitoring systems.',
    solution: 'We developed an integrated IoT platform that connects manufacturing equipment, monitors performance in real-time, and provides predictive maintenance insights.',
    results: [
      '35% reduction in equipment downtime',
      '25% increase in production efficiency',
      '40% improvement in predictive maintenance accuracy',
      '20% reduction in maintenance costs'
    ],
    technologies: ['IoT', 'Edge Computing', 'Machine Learning', 'Azure IoT', 'Time Series DB'],
    duration: '10 months',
    team: '10 experts',
    image: '/images/case-studies/manufacturing-iot.jpg',
    category: 'IoT Solutions',
    featured: false
  },
  {
    id: 5,
    title: 'Cloud Migration & Optimization',
    client: 'TechStartup',
    industry: 'Technology',
    challenge: 'TechStartup needed to migrate their on-premises infrastructure to the cloud while maintaining performance and reducing costs.',
    solution: 'We executed a comprehensive cloud migration strategy using AWS, implemented auto-scaling, and optimized their infrastructure for cost and performance.',
    results: [
      '60% reduction in infrastructure costs',
      '99.9% uptime achieved',
      '50% improvement in application performance',
      '80% reduction in deployment time'
    ],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CloudFormation'],
    duration: '3 months',
    team: '5 experts',
    image: '/images/case-studies/cloud-migration.jpg',
    category: 'Cloud Computing',
    featured: false
  },
  {
    id: 6,
    title: 'AI-Powered Customer Service Automation',
    client: 'ServicePro',
    industry: 'Customer Service',
    challenge: 'ServicePro needed to automate customer service operations while maintaining high-quality support and reducing response times.',
    solution: 'We implemented an AI-powered chatbot system with natural language processing, automated ticket routing, and intelligent response generation.',
    results: [
      '70% reduction in response time',
      '85% customer satisfaction rate',
      '50% reduction in support costs',
      '90% of queries resolved automatically'
    ],
    technologies: ['NLP', 'Chatbot', 'Machine Learning', 'Python', 'API Integration'],
    duration: '5 months',
    team: '7 experts',
    image: '/images/case-studies/customer-service-ai.jpg',
    category: 'AI & Machine Learning',
    featured: false
  }
];

const categories = [
  { name: 'All', count: caseStudies.length, active: true },
  { name: 'AI & Machine Learning', count: caseStudies.filter(cs => cs.category === 'AI & Machine Learning').length, active: false },
  { name: 'Micro SaaS', count: caseStudies.filter(cs => cs.category === 'Micro SaaS').length, active: false },
  { name: 'Cybersecurity', count: caseStudies.filter(cs => cs.category === 'Cybersecurity').length, active: false },
  { name: 'IoT Solutions', count: caseStudies.filter(cs => cs.category === 'IoT Solutions').length, active: false },
  { name: 'Cloud Computing', count: caseStudies.filter(cs => cs.category === 'Cloud Computing').length, active: false }
];

const stats = [
  { number: '150+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Industries Served' },
  { number: '24/7', label: 'Support Available' }
];

export default function CaseStudiesPage() {
  return (
    <Layout 
      title="Case Studies - Zion Tech Group | Success Stories & Results"
      description="Explore our successful projects and case studies. See how we've helped businesses across industries achieve their goals with AI, IT, and micro SaaS solutions."
      keywords="case studies, success stories, project results, AI projects, IT solutions, micro SaaS, client testimonials"
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Case Studies
                <span className="block text-blue-400">Success Stories & Results</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover how we've helped businesses across industries achieve their goals 
                with cutting-edge AI, IT, and micro SaaS solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Your Project
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold">
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Track Record
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Numbers that speak to our commitment to excellence and client success.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category, index) => (
                  <button
                    key={category.name}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      category.active
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most impactful projects that showcase our expertise and results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.filter(cs => cs.featured).map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
                >
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <BarChart3 className="w-16 h-16 text-gray-400" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {caseStudy.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {caseStudy.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{caseStudy.title}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{caseStudy.client} • {caseStudy.industry}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{caseStudy.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 text-sm">{caseStudy.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {caseStudy.results.slice(0, 3).map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {caseStudy.team}
                        </div>
                        <div className="flex items-center">
                          <Award className="w-4 h-4 mr-1" />
                          {caseStudy.category}
                        </div>
                      </div>
                      <Link 
                        href={`/case-studies/${caseStudy.id}`}
                        className="flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                All Case Studies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our complete portfolio of successful projects across various industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
                >
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <BarChart3 className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                        {caseStudy.category}
                      </span>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {caseStudy.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{caseStudy.title}</h3>
                    <p className="text-blue-600 font-semibold text-sm mb-3">{caseStudy.client} • {caseStudy.industry}</p>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{caseStudy.challenge}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 text-sm mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {caseStudy.results.slice(0, 2).map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start text-xs text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <div className="flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          {caseStudy.team}
                        </div>
                      </div>
                      <Link 
                        href={`/case-studies/${caseStudy.id}`}
                        className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Join the ranks of successful businesses that have transformed their operations with our solutions. 
                Let's discuss how we can help you achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your Project
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}