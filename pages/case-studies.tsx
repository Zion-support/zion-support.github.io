import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  ArrowRight, 
  Calendar, 
  User, 
  Building, 
  CheckCircle, 
  Star, 
  ExternalLink, 
  Phone, 
  Mail, 
  MapPin, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  Shield, 
  Globe, 
  Brain, 
  Code, 
  Database, 
  Server, 
  Lock, 
  Award, 
  Target, 
  Users, 
  Lightbulb, 
  Rocket
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'AI-Powered E-commerce Transformation',
    client: 'TechRetail Inc.',
    industry: 'E-commerce',
    duration: '6 months',
    team: '8 members',
    challenge: 'TechRetail needed to improve their customer experience and increase sales through AI-powered personalization and automation.',
    solution: 'Implemented a comprehensive AI solution including recommendation engines, chatbots, and predictive analytics.',
    results: [
      '45% increase in conversion rates',
      '60% improvement in customer satisfaction',
      '35% reduction in support tickets',
      '25% increase in average order value'
    ],
    technologies: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    image: '/case-studies/techretail.jpg',
    testimonial: {
      quote: 'Zion Tech Group transformed our entire e-commerce platform. The AI solutions they implemented have revolutionized our customer experience.',
      author: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechRetail Inc.'
    },
    featured: true
  },
  {
    id: 2,
    title: 'Healthcare Data Analytics Platform',
    client: 'MediCare Systems',
    industry: 'Healthcare',
    duration: '8 months',
    team: '12 members',
    challenge: 'MediCare needed to analyze large volumes of patient data to improve treatment outcomes and reduce costs.',
    solution: 'Built a comprehensive data analytics platform with AI-powered insights and predictive modeling.',
    results: [
      '40% reduction in readmission rates',
      '30% improvement in treatment accuracy',
      '50% faster diagnosis times',
      '20% reduction in operational costs'
    ],
    technologies: ['Data Analytics', 'Machine Learning', 'Cloud Computing', 'Security'],
    image: '/case-studies/medicare.jpg',
    testimonial: {
      quote: 'The analytics platform has been a game-changer for our healthcare operations. We can now make data-driven decisions that save lives.',
      author: 'Dr. Michael Chen',
      position: 'Chief Medical Officer',
      company: 'MediCare Systems'
    },
    featured: true
  },
  {
    id: 3,
    title: 'Financial Services Automation',
    client: 'FinTech Solutions',
    industry: 'Financial Services',
    duration: '4 months',
    team: '6 members',
    challenge: 'FinTech Solutions needed to automate their loan processing and risk assessment workflows.',
    solution: 'Developed an AI-powered automation platform for loan processing and risk assessment.',
    results: [
      '70% reduction in processing time',
      '85% improvement in accuracy',
      '90% reduction in manual errors',
      '50% increase in loan approval efficiency'
    ],
    technologies: ['Process Automation', 'Risk Assessment', 'Machine Learning', 'API Integration'],
    image: '/case-studies/fintech.jpg',
    testimonial: {
      quote: 'The automation platform has transformed our loan processing. We can now process applications 10x faster with higher accuracy.',
      author: 'Emily Rodriguez',
      position: 'VP of Operations',
      company: 'FinTech Solutions'
    },
    featured: false
  },
  {
    id: 4,
    title: 'Manufacturing IoT Integration',
    client: 'Industrial Corp',
    industry: 'Manufacturing',
    duration: '10 months',
    team: '15 members',
    challenge: 'Industrial Corp needed to integrate IoT devices and implement predictive maintenance for their manufacturing facilities.',
    solution: 'Built a comprehensive IoT platform with AI-powered predictive maintenance and real-time monitoring.',
    results: [
      '60% reduction in unplanned downtime',
      '35% improvement in equipment efficiency',
      '45% reduction in maintenance costs',
      '80% improvement in predictive accuracy'
    ],
    technologies: ['IoT', 'Predictive Analytics', 'Cloud Computing', 'Real-time Monitoring'],
    image: '/case-studies/industrial.jpg',
    testimonial: {
      quote: 'The IoT platform has revolutionized our manufacturing operations. We can now predict and prevent equipment failures before they happen.',
      author: 'James Wilson',
      position: 'Plant Manager',
      company: 'Industrial Corp'
    },
    featured: false
  },
  {
    id: 5,
    title: 'Educational AI Platform',
    client: 'EduTech University',
    industry: 'Education',
    duration: '7 months',
    team: '10 members',
    challenge: 'EduTech University needed to personalize learning experiences and improve student outcomes.',
    solution: 'Developed an AI-powered educational platform with personalized learning paths and adaptive assessments.',
    results: [
      '50% improvement in student engagement',
      '35% increase in course completion rates',
      '40% improvement in learning outcomes',
      '60% reduction in administrative workload'
    ],
    technologies: ['Educational AI', 'Personalization', 'Adaptive Learning', 'Analytics'],
    image: '/case-studies/edutech.jpg',
    testimonial: {
      quote: 'The AI platform has transformed how we deliver education. Students are more engaged and achieving better outcomes.',
      author: 'Dr. Lisa Thompson',
      position: 'Dean of Technology',
      company: 'EduTech University'
    },
    featured: false
  },
  {
    id: 6,
    title: 'Cybersecurity AI Defense',
    client: 'SecureBank',
    industry: 'Banking',
    duration: '5 months',
    team: '8 members',
    challenge: 'SecureBank needed to enhance their cybersecurity posture with AI-powered threat detection and response.',
    solution: 'Implemented an AI-powered cybersecurity platform with real-time threat detection and automated response.',
    results: [
      '95% reduction in false positives',
      '80% faster threat detection',
      '70% improvement in response time',
      '90% reduction in security incidents'
    ],
    technologies: ['Cybersecurity', 'AI Security', 'Threat Detection', 'Automated Response'],
    image: '/case-studies/securebank.jpg',
    testimonial: {
      quote: 'The AI security platform has significantly strengthened our defense against cyber threats. We feel much more secure now.',
      author: 'Robert Kim',
      position: 'CISO',
      company: 'SecureBank'
    },
    featured: false
  }
];

const industries = [
  { name: 'All', count: caseStudies.length },
  { name: 'E-commerce', count: caseStudies.filter(cs => cs.industry === 'E-commerce').length },
  { name: 'Healthcare', count: caseStudies.filter(cs => cs.industry === 'Healthcare').length },
  { name: 'Financial Services', count: caseStudies.filter(cs => cs.industry === 'Financial Services').length },
  { name: 'Manufacturing', count: caseStudies.filter(cs => cs.industry === 'Manufacturing').length },
  { name: 'Education', count: caseStudies.filter(cs => cs.industry === 'Education').length },
  { name: 'Banking', count: caseStudies.filter(cs => cs.industry === 'Banking').length }
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Industries Served' },
  { number: '24/7', label: 'Support Available' }
];

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = React.useState('All');

  const filteredCaseStudies = caseStudies.filter(cs => 
    selectedIndustry === 'All' || cs.industry === selectedIndustry
  );

  return (
    <Layout
      title="Case Studies - Zion Tech Group"
      description="Explore our success stories and see how we've helped businesses transform with AI, IT, and Micro SaaS solutions. Real results from real clients."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Case Studies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Discover how we've helped businesses transform with our AI, IT, and Micro SaaS solutions. 
              Real results from real clients across various industries.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-lg font-semibold"
              >
                Learn About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
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

      {/* Industry Filter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Filter by Industry
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {industries.map((industry) => (
                <button
                  key={industry.name}
                  onClick={() => setSelectedIndustry(industry.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedIndustry === industry.name
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {industry.name} ({industry.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {filteredCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                  caseStudy.featured ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {caseStudy.featured && (
                  <div className="bg-blue-500 text-white px-4 py-2 text-sm font-semibold">
                    Featured Case Study
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {caseStudy.title}
                      </h3>
                      <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center">
                          <Building className="w-4 h-4 mr-1" />
                          {caseStudy.client}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {caseStudy.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {caseStudy.team}
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          {caseStudy.industry}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600 mb-4">{caseStudy.challenge}</p>
                      
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600 mb-4">{caseStudy.solution}</p>
                      
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {caseStudy.technologies.map((tech) => (
                          <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Results</h4>
                      <ul className="space-y-2 mb-6">
                        {caseStudy.results.map((result) => (
                          <li key={result} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <blockquote className="text-gray-700 italic mb-2">
                          "{caseStudy.testimonial.quote}"
                        </blockquote>
                        <div className="text-sm text-gray-600">
                          <div className="font-semibold">{caseStudy.testimonial.author}</div>
                          <div>{caseStudy.testimonial.position}, {caseStudy.testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      href="/contact"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
                    >
                      Start Similar Project
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let us help you transform your business with our proven AI, IT, and Micro SaaS solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Questions About Our Work?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}