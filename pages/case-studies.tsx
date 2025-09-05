import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  TrendingUp, 
  Users, 
  Building, 
  Cloud, 
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign
} from 'lucide-react';

const caseStudies = [
  {
    title: 'E-commerce Platform Optimization',
    client: 'RetailTech Solutions',
    industry: 'E-commerce',
    challenge: 'Slow loading times and poor user experience affecting sales',
    solution: 'Implemented performance optimizations, CDN, and database improvements',
    results: [
      '50% faster page load times',
      '30% increase in conversion rates',
      '25% reduction in bounce rate',
      '40% improvement in mobile performance'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Redis', 'MongoDB'],
    duration: '3 months',
    team: '5 developers'
  },
  {
    title: 'AI-Powered Customer Service',
    client: 'FinanceCorp',
    industry: 'Financial Services',
    challenge: 'High customer service costs and long response times',
    solution: 'Developed intelligent chatbot and automated response system',
    results: [
      '60% reduction in support tickets',
      '80% faster response times',
      '90% customer satisfaction rate',
      '45% cost savings on support'
    ],
    technologies: ['Python', 'TensorFlow', 'NLP', 'AWS', 'Docker'],
    duration: '4 months',
    team: '6 developers'
  },
  {
    title: 'Cloud Migration & DevOps',
    client: 'ManufacturingCo',
    industry: 'Manufacturing',
    challenge: 'Legacy systems and manual deployment processes',
    solution: 'Complete cloud migration with automated CI/CD pipelines',
    results: [
      '99.9% uptime achieved',
      '70% faster deployment times',
      '50% reduction in infrastructure costs',
      'Zero-downtime deployments'
    ],
    technologies: ['AWS', 'Kubernetes', 'Docker', 'Jenkins', 'Terraform'],
    duration: '6 months',
    team: '8 developers'
  }
];

const stats = [
  { number: "100+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "99%", label: "Success Rate" },
  { number: "24/7", label: "Support Available" }
];

export default function CaseStudies() {
  return (
    <Layout
      title="Case Studies - Zion Tech Group"
      description="Explore our successful projects and see how we've helped businesses transform their operations with cutting-edge technology solutions."
      keywords="case studies, success stories, project portfolio, technology solutions, client results"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Success
                <span className="text-blue-600 block">Stories</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses transform their operations 
                and achieve remarkable results with our technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
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

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real projects, real results. See how we've delivered value 
                to businesses across various industries.
              </p>
            </motion.div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {study.title}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-4">
                          <Building className="h-5 w-5 mr-2" />
                          <span className="font-semibold">{study.client}</span>
                          <span className="mx-2">•</span>
                          <span>{study.industry}</span>
                        </div>
                        <p className="text-gray-600 mb-4">
                          <strong>Challenge:</strong> {study.challenge}
                        </p>
                        <p className="text-gray-600 mb-6">
                          <strong>Solution:</strong> {study.solution}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row lg:flex-col gap-4 mt-4 lg:mt-0 lg:ml-8">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          {study.duration}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-2" />
                          {study.team}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-gray-600">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let us help you achieve similar results. Contact us today to discuss 
                how we can transform your business with our technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-blue-300 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}