import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign,
  ArrowRight,
  ExternalLink,
  Calendar,
  Tag,
  CheckCircle,
  Star
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const caseStudies = [
  {
    id: 1,
    title: 'FinTech Startup Scales to 1M+ Users',
    client: 'PayFlow Technologies',
    industry: 'Financial Services',
    challenge: 'Building a scalable payment processing platform',
    solution: 'Custom microservices architecture with real-time processing',
    results: [
      '1M+ active users',
      '99.99% uptime',
      '300% increase in transaction volume',
      '50% reduction in processing costs'
    ],
    duration: '6 months',
    team: '8 developers',
    technologies: ['Node.js', 'React', 'AWS', 'Docker'],
    image: '/images/case-studies/fintech.jpg',
    rating: 4.9,
    testimonial: 'Zion Tech Group transformed our vision into a reality. Their expertise in fintech and scalable architecture was exactly what we needed.',
    author: 'Sarah Johnson, CTO'
  },
  {
    id: 2,
    title: 'Healthcare Provider Digital Transformation',
    client: 'Regional Medical Center',
    industry: 'Healthcare',
    challenge: 'Modernizing patient management and telemedicine capabilities',
    solution: 'HIPAA-compliant patient portal with AI-powered diagnostics',
    results: [
      '40% improvement in patient satisfaction',
      '60% reduction in appointment scheduling time',
      'Full HIPAA compliance',
      '50K+ patients managed'
    ],
    duration: '8 months',
    team: '12 developers',
    technologies: ['React', 'Python', 'PostgreSQL', 'AWS'],
    image: '/images/case-studies/healthcare.jpg',
    rating: 4.8,
    testimonial: 'The new system has revolutionized how we serve our patients. The team understood our compliance requirements perfectly.',
    author: 'Dr. Michael Chen, Medical Director'
  },
  {
    id: 3,
    title: 'Manufacturing IoT Implementation',
    client: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    challenge: 'Implementing IoT for predictive maintenance and efficiency',
    solution: 'Custom IoT platform with machine learning predictions',
    results: [
      '30% reduction in downtime',
      '25% increase in production efficiency',
      '95% prediction accuracy',
      'ROI of 300% in first year'
    ],
    duration: '10 months',
    team: '15 developers',
    technologies: ['Python', 'TensorFlow', 'React', 'Azure IoT'],
    image: '/images/case-studies/manufacturing.jpg',
    rating: 4.9,
    testimonial: 'The predictive maintenance system has saved us millions in unplanned downtime. Excellent work by the Zion team.',
    author: 'Jennifer Martinez, Operations Director'
  },
  {
    id: 4,
    title: 'E-commerce Platform Modernization',
    client: 'RetailMax Online',
    industry: 'Retail & E-commerce',
    challenge: 'Scaling e-commerce platform for peak shopping seasons',
    solution: 'Cloud-native architecture with auto-scaling capabilities',
    results: [
      '500% increase in peak traffic handling',
      '99.9% uptime during Black Friday',
      '40% faster page load times',
      '200% increase in conversion rates'
    ],
    duration: '5 months',
    team: '10 developers',
    technologies: ['Next.js', 'Node.js', 'AWS', 'Redis'],
    image: '/images/case-studies/ecommerce.jpg',
    rating: 4.7,
    testimonial: 'Our Black Friday sales were the best ever thanks to the robust platform. The team delivered beyond expectations.',
    author: 'David Kim, VP of Technology'
  },
  {
    id: 5,
    title: 'Educational Platform for Remote Learning',
    client: 'University System',
    industry: 'Education',
    challenge: 'Creating a comprehensive remote learning platform',
    solution: 'Full-featured LMS with video conferencing and analytics',
    results: [
      '100K+ students served',
      '95% user satisfaction rate',
      'Seamless remote learning experience',
      '50% reduction in administrative overhead'
    ],
    duration: '7 months',
    team: '14 developers',
    technologies: ['React', 'Node.js', 'WebRTC', 'MongoDB'],
    image: '/images/case-studies/education.jpg',
    rating: 4.8,
    testimonial: 'The platform enabled us to continue education seamlessly during challenging times. Outstanding work.',
    author: 'Prof. Lisa Thompson, Academic Dean'
  },
  {
    id: 6,
    title: 'Government Digital Services Portal',
    client: 'State Government',
    industry: 'Government',
    challenge: 'Modernizing citizen services and digital government',
    solution: 'Secure citizen portal with integrated services',
    results: [
      '80% reduction in service processing time',
      'Full security compliance',
      '90% citizen satisfaction',
      '60% reduction in paper usage'
    ],
    duration: '12 months',
    team: '20 developers',
    technologies: ['React', 'Java', 'PostgreSQL', 'Azure'],
    image: '/images/case-studies/government.jpg',
    rating: 4.9,
    testimonial: 'The new portal has transformed how citizens interact with government services. Highly recommend Zion Tech Group.',
    author: 'Robert Wilson, IT Director'
  }
];

const industries = [
  { name: 'Financial Services', count: 12, color: 'bg-green-100 text-green-800' },
  { name: 'Healthcare', count: 8, color: 'bg-blue-100 text-blue-800' },
  { name: 'Manufacturing', count: 6, color: 'bg-orange-100 text-orange-800' },
  { name: 'Retail & E-commerce', count: 10, color: 'bg-purple-100 text-purple-800' },
  { name: 'Education', count: 5, color: 'bg-indigo-100 text-indigo-800' },
  { name: 'Government', count: 4, color: 'bg-gray-100 text-gray-800' }
];

export default function CaseStudiesPage() {
  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Real-world success stories and implementations. See how we've helped businesses transform their technology and achieve remarkable results."
      keywords="case studies, success stories, client implementations, ROI, business transformation"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Stories
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
                Real-world implementations and transformations. See how we've helped 
                businesses achieve remarkable results with our technology solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                <Link href="#case-studies">
                  <span className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    View Case Studies
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Start Your Project
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industry Filter */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Filter by Industry
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {industries.map((industry, index) => (
                  <button
                    key={industry.name}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${industry.color} hover:opacity-80`}
                  >
                    {industry.name} ({industry.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section id="case-studies" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  {/* Header */}
                  <div className="p-8 border-b border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {study.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Users className="w-4 h-4 mr-2" />
                          {study.client}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Tag className="w-4 h-4 mr-2" />
                          {study.industry}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="font-semibold">{study.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                        {study.duration}
                      </span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                        {study.team}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <p className="text-sm text-gray-700 italic mb-2">
                        "{study.testimonial}"
                      </p>
                      <p className="text-xs text-gray-500 font-semibold">
                        — {study.author}
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Link
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                      <Link
                        href="/contact"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        Start Similar Project
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">300%</div>
                <div className="text-gray-600">Average ROI</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-green-100">
                Let's discuss your project and create a solution that delivers 
                exceptional results for your business.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact">
                  <span className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Start Your Project
                  </span>
                </Link>
                <Link href="/about">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Learn More About Us
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}