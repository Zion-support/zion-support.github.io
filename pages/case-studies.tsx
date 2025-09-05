import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Star, Users, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'AI-Powered Healthcare Analytics Platform',
    client: 'MedTech Solutions',
    industry: 'Healthcare',
    challenge: 'MedTech Solutions needed to process and analyze large volumes of patient data to improve diagnostic accuracy and treatment outcomes.',
    solution: 'We developed a comprehensive AI-powered analytics platform that processes medical images, patient records, and real-time monitoring data to provide actionable insights for healthcare providers.',
    results: [
      '40% improvement in diagnostic accuracy',
      '60% reduction in data processing time',
      '35% increase in patient satisfaction',
      '50% cost savings in manual analysis'
    ],
    technologies: ['Machine Learning', 'Computer Vision', 'Cloud Computing', 'Data Analytics'],
    duration: '6 months',
    team: '8 specialists',
    image: '/api/placeholder/600/400',
    featured: true
  },
  {
    id: 2,
    title: 'Cloud Migration for Financial Services',
    client: 'FinSecure Bank',
    industry: 'Financial Services',
    challenge: 'FinSecure Bank needed to migrate their legacy systems to the cloud while maintaining security compliance and improving performance.',
    solution: 'We designed and implemented a secure cloud infrastructure using AWS, including data migration, security hardening, and compliance automation.',
    results: [
      '99.9% uptime achieved',
      '70% reduction in infrastructure costs',
      '50% faster application deployment',
      '100% compliance with financial regulations'
    ],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Security'],
    duration: '4 months',
    team: '12 specialists',
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: 3,
    title: 'IoT Manufacturing Optimization',
    client: 'AutoParts Manufacturing',
    industry: 'Manufacturing',
    challenge: 'AutoParts Manufacturing wanted to optimize their production line using IoT sensors and real-time analytics to reduce waste and improve efficiency.',
    solution: 'We implemented a comprehensive IoT solution with edge computing, real-time analytics, and predictive maintenance capabilities.',
    results: [
      '25% reduction in production waste',
      '30% improvement in equipment efficiency',
      '20% decrease in maintenance costs',
      '15% increase in overall productivity'
    ],
    technologies: ['IoT', 'Edge Computing', 'Data Analytics', 'Machine Learning'],
    duration: '5 months',
    team: '10 specialists',
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: 4,
    title: 'E-commerce Platform Modernization',
    client: 'RetailMax',
    industry: 'Retail',
    challenge: 'RetailMax needed to modernize their outdated e-commerce platform to handle increased traffic and provide better user experience.',
    solution: 'We rebuilt their e-commerce platform using modern technologies, implemented microservices architecture, and integrated advanced analytics.',
    results: [
      '300% increase in page load speed',
      '45% improvement in conversion rates',
      '80% reduction in downtime',
      '200% increase in mobile traffic'
    ],
    technologies: ['React', 'Node.js', 'Microservices', 'Cloud Computing'],
    duration: '7 months',
    team: '15 specialists',
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: 5,
    title: 'Cybersecurity Enhancement for Government',
    client: 'State Government Agency',
    industry: 'Government',
    challenge: 'A state government agency needed to enhance their cybersecurity posture to protect sensitive citizen data and comply with new regulations.',
    solution: 'We conducted a comprehensive security audit and implemented advanced security measures including zero-trust architecture and automated threat detection.',
    results: [
      '95% reduction in security incidents',
      '100% compliance with new regulations',
      '60% improvement in threat detection time',
      '40% reduction in security management costs'
    ],
    technologies: ['Cybersecurity', 'Zero Trust', 'AI/ML', 'Compliance'],
    duration: '8 months',
    team: '20 specialists',
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: 6,
    title: 'Data Analytics Dashboard for Education',
    client: 'EduTech University',
    industry: 'Education',
    challenge: 'EduTech University wanted to create a comprehensive analytics dashboard to track student performance and improve educational outcomes.',
    solution: 'We developed an advanced analytics platform that aggregates data from multiple sources and provides actionable insights for educators and administrators.',
    results: [
      '30% improvement in student retention',
      '25% increase in graduation rates',
      '50% reduction in administrative workload',
      '40% improvement in student satisfaction'
    ],
    technologies: ['Data Analytics', 'Machine Learning', 'Dashboard', 'Cloud Computing'],
    duration: '6 months',
    team: '12 specialists',
    image: '/api/placeholder/600/400',
    featured: false
  }
];

const industries = [
  'All',
  'Healthcare',
  'Financial Services',
  'Manufacturing',
  'Retail',
  'Government',
  'Education',
  'Technology'
];

const featuredCaseStudy = caseStudies.find(study => study.featured);
const regularCaseStudies = caseStudies.filter(study => !study.featured);

export default function CaseStudiesPage() {
  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Explore our success stories and see how we've helped businesses transform their operations with cutting-edge technology."
      keywords="case studies, success stories, client projects, technology solutions, digital transformation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success Stories
                <span className="block text-yellow-400">Real Results</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                Discover how we've helped businesses across industries achieve their digital transformation goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Case Study */}
        {featuredCaseStudy && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Case Study</h2>
                <div className="w-20 h-1 bg-blue-600"></div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredCaseStudy.image}
                      alt={featuredCaseStudy.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {featuredCaseStudy.industry}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {featuredCaseStudy.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      <strong>Client:</strong> {featuredCaseStudy.client}
                    </p>
                    <p className="text-gray-600 mb-6">
                      <strong>Challenge:</strong> {featuredCaseStudy.challenge}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {featuredCaseStudy.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        {featuredCaseStudy.team}
                      </div>
                    </div>
                    <Link
                      href={`/case-studies/${featuredCaseStudy.id}`}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Filter Section */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {industries.map((industry, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    industry === 'All'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">All Case Studies</h2>
              <div className="w-20 h-1 bg-blue-600"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      <strong>Client:</strong> {study.client}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {study.team}
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/quote"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}