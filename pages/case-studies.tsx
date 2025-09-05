import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { 
  FileText, 
  TrendingUp, 
  Users, 
  Clock, 
  ArrowRight,
  CheckCircle,
  Star,
  Filter,
  Search
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'AI-Powered Customer Service Automation',
    client: 'TechCorp Inc.',
    industry: 'Technology',
    duration: '6 months',
    team: '8 members',
    category: 'AI Services',
    challenge: 'High customer service costs and inconsistent response times across multiple channels.',
    solution: 'Implemented an AI-powered chatbot system with natural language processing capabilities.',
    results: [
      '60% reduction in customer service costs',
      '85% improvement in response time',
      '90% customer satisfaction rate',
      '24/7 availability across all channels'
    ],
    technologies: ['Machine Learning', 'NLP', 'AWS', 'React', 'Node.js'],
    image: '/api/placeholder/600/400',
    testimonial: {
      quote: 'The AI solution transformed our customer service operations. We can now handle 3x more inquiries with better quality.',
      author: 'Sarah Johnson',
      role: 'VP of Customer Experience',
      company: 'TechCorp Inc.'
    }
  },
  {
    id: 2,
    title: 'Cloud Migration & Infrastructure Modernization',
    client: 'DataFlow Systems',
    industry: 'Financial Services',
    duration: '8 months',
    team: '12 members',
    category: 'IT Services',
    challenge: 'Legacy on-premise infrastructure causing scalability issues and high maintenance costs.',
    solution: 'Complete migration to AWS cloud with microservices architecture and automated CI/CD pipelines.',
    results: [
      '70% reduction in infrastructure costs',
      '99.9% uptime achieved',
      '50% faster deployment cycles',
      'Unlimited scalability for future growth'
    ],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
    image: '/api/placeholder/600/400',
    testimonial: {
      quote: 'The cloud migration exceeded our expectations. Our systems are now more reliable and cost-effective.',
      author: 'Michael Chen',
      role: 'CTO',
      company: 'DataFlow Systems'
    }
  },
  {
    id: 3,
    title: 'Micro SaaS Lead Management Platform',
    client: 'SalesPro Agency',
    industry: 'Marketing',
    duration: '4 months',
    team: '6 members',
    category: 'Micro SaaS',
    challenge: 'Manual lead tracking processes causing data loss and missed opportunities.',
    solution: 'Custom-built lead management platform with automated workflows and CRM integration.',
    results: [
      '40% increase in lead conversion',
      '75% reduction in manual data entry',
      'Real-time analytics and reporting',
      'Seamless CRM integration'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'SendGrid'],
    image: '/api/placeholder/600/400',
    testimonial: {
      quote: 'The platform streamlined our entire sales process. We can now track and convert leads more effectively.',
      author: 'Emily Rodriguez',
      role: 'Sales Director',
      company: 'SalesPro Agency'
    }
  },
  {
    id: 4,
    title: 'Cybersecurity Threat Detection System',
    client: 'SecureBank',
    industry: 'Banking',
    duration: '10 months',
    team: '15 members',
    category: 'Cybersecurity',
    challenge: 'Increasing cyber threats and need for real-time threat detection and response.',
    solution: 'Advanced threat detection system with AI-powered anomaly detection and automated response.',
    results: [
      '95% reduction in false positives',
      'Real-time threat detection',
      'Automated incident response',
      'Zero security breaches since implementation'
    ],
    technologies: ['Machine Learning', 'SIEM', 'Python', 'Elasticsearch', 'Kibana'],
    image: '/api/placeholder/600/400',
    testimonial: {
      quote: 'The security system provides peace of mind. We can detect and respond to threats in real-time.',
      author: 'David Kim',
      role: 'CISO',
      company: 'SecureBank'
    }
  },
  {
    id: 5,
    title: 'AI-Powered Supply Chain Optimization',
    client: 'GlobalLogistics',
    industry: 'Logistics',
    duration: '7 months',
    team: '10 members',
    category: 'AI Services',
    challenge: 'Inefficient supply chain operations leading to delays and increased costs.',
    solution: 'AI-driven supply chain optimization platform with predictive analytics and route optimization.',
    results: [
      '30% reduction in delivery times',
      '25% cost savings in logistics',
      'Predictive maintenance capabilities',
      'Real-time tracking and optimization'
    ],
    technologies: ['Machine Learning', 'Python', 'TensorFlow', 'AWS', 'React'],
    image: '/api/placeholder/600/400',
    testimonial: {
      quote: 'The AI optimization transformed our logistics operations. We can now predict and prevent issues before they occur.',
      author: 'Lisa Wang',
      role: 'Operations Director',
      company: 'GlobalLogistics'
    }
  },
  {
    id: 6,
    title: 'Digital Transformation for Healthcare',
    client: 'MediCare Plus',
    industry: 'Healthcare',
    duration: '12 months',
    team: '20 members',
    category: 'IT Services',
    challenge: 'Outdated systems causing patient data management issues and compliance concerns.',
    solution: 'Complete digital transformation with HIPAA-compliant patient management system and telemedicine platform.',
    results: [
      '100% HIPAA compliance achieved',
      '50% improvement in patient satisfaction',
      'Streamlined appointment scheduling',
      'Secure telemedicine capabilities'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'HIPAA Compliance'],
    image: '/api/placeholder/600/400',
    testimonial: {
      quote: 'The digital transformation improved our patient care while ensuring complete compliance with regulations.',
      author: 'Dr. James Wilson',
      role: 'Medical Director',
      company: 'MediCare Plus'
    }
  }
];

const categories = ['All', 'AI Services', 'IT Services', 'Micro SaaS', 'Cybersecurity'];
const industries = ['All', 'Technology', 'Financial Services', 'Marketing', 'Banking', 'Logistics', 'Healthcare'];

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesCategory = selectedCategory === 'All' || study.category === selectedCategory;
    const matchesIndustry = selectedIndustry === 'All' || study.industry === selectedIndustry;
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.challenge.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesIndustry && matchesSearch;
  });

  return (
    <MainLayout>
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
              <div className="flex items-center justify-center mb-6">
                <FileText className="h-16 w-16 text-blue-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Success{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Stories
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover how we've helped businesses transform their operations and achieve remarkable results through innovative technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Industry Filter */}
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">Industry:</span>
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <FileText className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                        {study.category}
                      </span>
                      <span className="text-sm text-gray-500">{study.industry}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-gray-600 mb-4">{study.client}</p>

                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {study.team}
                      </span>
                    </div>

                    <p className="text-gray-700 mb-4 line-clamp-3">{study.challenge}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 3).map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          +{study.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <blockquote className="text-sm text-gray-600 italic mb-2">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div className="text-sm">
                        <span className="font-semibold text-gray-900">{study.testimonial.author}</span>
                        <span className="text-gray-500">, {study.testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No case studies found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help your business achieve similar results with our technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Start Your Project
                </a>
                <a
                  href="/services-overview"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Explore Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}