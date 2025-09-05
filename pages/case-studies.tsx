import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Calendar,
  User,
  Building,
  TrendingUp,
  CheckCircle,
  Star,
  ExternalLink
} from 'lucide-react';
import Layout from '../components/Layout';

const caseStudies = [
  {
    id: 1,
    title: 'AI-Powered Customer Service Transformation',
    client: 'TechCorp Solutions',
    industry: 'Technology',
    challenge: 'High customer service costs and inconsistent response times',
    solution: 'Implemented AI chatbot system with natural language processing',
    results: [
      '60% reduction in customer service costs',
      '90% improvement in response time',
      '85% customer satisfaction rate',
      '24/7 availability achieved'
    ],
    duration: '3 months',
    team: '5 developers',
    image: 'https://via.placeholder.com/600x400',
    testimonial: 'The AI solution transformed our customer service operations and significantly improved our efficiency.',
    author: 'Sarah Johnson',
    position: 'VP of Customer Experience'
  },
  {
    id: 2,
    title: 'Predictive Analytics for E-commerce',
    client: 'RetailMax',
    industry: 'E-commerce',
    challenge: 'Low conversion rates and high cart abandonment',
    solution: 'Deployed machine learning models for personalized recommendations and pricing optimization',
    results: [
      '35% increase in conversion rates',
      '25% reduction in cart abandonment',
      '40% improvement in average order value',
      '50% increase in customer lifetime value'
    ],
    duration: '4 months',
    team: '6 developers',
    image: 'https://via.placeholder.com/600x400',
    testimonial: 'The predictive analytics solution revolutionized our e-commerce platform and drove significant revenue growth.',
    author: 'Michael Chen',
    position: 'CTO'
  },
  {
    id: 3,
    title: 'Computer Vision for Manufacturing',
    client: 'ManufacturingPro',
    industry: 'Manufacturing',
    challenge: 'Quality control issues and manual inspection inefficiencies',
    solution: 'Implemented computer vision system for automated quality inspection',
    results: [
      '95% accuracy in defect detection',
      '80% reduction in inspection time',
      '70% decrease in quality-related costs',
      '99.9% uptime achieved'
    ],
    duration: '5 months',
    team: '8 developers',
    image: 'https://via.placeholder.com/600x400',
    testimonial: 'The computer vision solution transformed our quality control process and significantly improved our manufacturing efficiency.',
    author: 'David Rodriguez',
    position: 'Operations Director'
  },
  {
    id: 4,
    title: 'AI-Powered Financial Risk Assessment',
    client: 'FinanceFirst',
    industry: 'Financial Services',
    challenge: 'Manual risk assessment processes and high false positive rates',
    solution: 'Developed AI system for automated risk assessment and fraud detection',
    results: [
      '90% reduction in false positives',
      '75% faster risk assessment',
      '60% improvement in fraud detection accuracy',
      '50% reduction in operational costs'
    ],
    duration: '6 months',
    team: '7 developers',
    image: 'https://via.placeholder.com/600x400',
    testimonial: 'The AI risk assessment system revolutionized our financial operations and significantly improved our decision-making process.',
    author: 'Jennifer Lee',
    position: 'Risk Management Director'
  },
  {
    id: 5,
    title: 'Natural Language Processing for Healthcare',
    client: 'HealthTech Solutions',
    industry: 'Healthcare',
    challenge: 'Manual medical record processing and documentation inefficiencies',
    solution: 'Implemented NLP system for automated medical record analysis and documentation',
    results: [
      '85% reduction in documentation time',
      '95% accuracy in medical record processing',
      '70% improvement in patient care efficiency',
      '60% reduction in administrative costs'
    ],
    duration: '7 months',
    team: '9 developers',
    image: 'https://via.placeholder.com/600x400',
    testimonial: 'The NLP solution transformed our healthcare operations and significantly improved our patient care quality.',
    author: 'Dr. Robert Smith',
    position: 'Chief Medical Officer'
  },
  {
    id: 6,
    title: 'AI-Powered Supply Chain Optimization',
    client: 'LogisticsPro',
    industry: 'Logistics',
    challenge: 'Inefficient supply chain management and high operational costs',
    solution: 'Deployed AI system for supply chain optimization and demand forecasting',
    results: [
      '40% reduction in operational costs',
      '60% improvement in demand forecasting accuracy',
      '50% reduction in inventory levels',
      '80% improvement in delivery times'
    ],
    duration: '4 months',
    team: '6 developers',
    image: 'https://via.placeholder.com/600x400',
    testimonial: 'The AI supply chain solution revolutionized our logistics operations and significantly improved our efficiency.',
    author: 'Lisa Wang',
    position: 'Supply Chain Director'
  }
];

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '95%', label: 'Client Satisfaction' },
  { number: '40%', label: 'Average Cost Reduction' },
  { number: '60%', label: 'Average Efficiency Gain' }
];

export default function CaseStudiesPage() {
  return (
    <Layout
      title="Case Studies - Zion Tech Group | Success Stories"
      description="Explore our successful AI and technology implementations across various industries. See how we've helped businesses transform with innovative solutions."
      keywords="case studies, success stories, AI implementation, technology solutions, client results, project examples"
    >
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Success <span className="text-blue-400">Stories</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            >
              Real results from real clients across various industries
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
                Start Your Project
              </Link>
              <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
                View Services
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Case Studies</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Discover how we've helped businesses transform with innovative AI and technology solutions
              </p>
            </div>

            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <Building className="w-6 h-6 text-blue-600 mr-3" />
                        <span className="text-sm text-gray-600">{study.industry}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Client: {study.client}</h4>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {study.duration}
                          </span>
                          <span className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {study.team}
                          </span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-700">{study.challenge}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-700">{study.solution}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="border-l-4 border-blue-600 pl-4 mb-6">
                        <p className="text-gray-700 italic mb-2">"{study.testimonial}"</p>
                        <div className="text-sm text-gray-600">
                          <span className="font-semibold">{study.author}</span>
                          <br />
                          {study.position}
                        </div>
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                      >
                        Start Your Project
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>

                    <div className="relative">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="text-center text-white">
                          <Star className="w-12 h-12 mx-auto mb-2" />
                          <span className="text-lg font-semibold">Success Story</span>
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
        <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Let's work together to transform your business with innovative AI and technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
                Start Your Project
              </Link>
              <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}