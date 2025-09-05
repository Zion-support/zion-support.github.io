import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Search, 
  Filter,
  TrendingUp,
  Users,
  Clock,
  Award,
  CheckCircle,
  Star,
  Eye,
  Download,
  ExternalLink,
  Building,
  Zap,
  Brain,
  Cloud,
  Shield
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'AI-Powered Customer Service Transformation',
    client: 'Global E-commerce Company',
    industry: 'E-commerce',
    challenge: 'High customer service costs and slow response times',
    solution: 'Implemented AI chatbot and automated ticket routing system',
    results: [
      '60% reduction in customer service costs',
      '80% faster response times',
      '95% customer satisfaction rate',
      '50% increase in first-call resolution'
    ],
    technologies: ['AI/ML', 'NLP', 'Cloud Computing', 'API Integration'],
    duration: '6 months',
    teamSize: '8 members',
    image: '/api/placeholder/600/400',
    featured: true,
    category: 'AI & Machine Learning',
    testimonial: {
      quote: 'Zion Tech Group transformed our customer service operations. The AI solution exceeded our expectations and delivered measurable results.',
      author: 'Sarah Johnson',
      role: 'VP of Customer Experience',
      company: 'Global E-commerce Company'
    }
  },
  {
    id: 2,
    title: 'Cloud Migration and DevOps Implementation',
    client: 'Financial Services Firm',
    industry: 'Finance',
    challenge: 'Legacy infrastructure limiting scalability and innovation',
    solution: 'Complete cloud migration with automated CI/CD pipelines',
    results: [
      '99.9% uptime achieved',
      '70% reduction in deployment time',
      '40% cost savings on infrastructure',
      'Zero security incidents'
    ],
    technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins'],
    duration: '8 months',
    teamSize: '12 members',
    image: '/api/placeholder/600/400',
    featured: true,
    category: 'Cloud & DevOps',
    testimonial: {
      quote: 'The cloud migration was seamless and the new DevOps practices have revolutionized our development process.',
      author: 'Michael Chen',
      role: 'CTO',
      company: 'Financial Services Firm'
    }
  },
  {
    id: 3,
    title: 'Cybersecurity Overhaul for Healthcare Provider',
    client: 'Regional Healthcare Network',
    industry: 'Healthcare',
    challenge: 'Compliance requirements and increasing cyber threats',
    solution: 'Comprehensive security framework with real-time monitoring',
    results: [
      '100% compliance with HIPAA regulations',
      'Zero security breaches in 18 months',
      '50% reduction in security incidents',
      '24/7 threat monitoring implemented'
    ],
    technologies: ['SIEM', 'Endpoint Protection', 'Network Security', 'Compliance Tools'],
    duration: '4 months',
    teamSize: '6 members',
    image: '/api/placeholder/600/400',
    featured: false,
    category: 'Cybersecurity',
    testimonial: {
      quote: 'Zion Tech Group helped us achieve full compliance while significantly improving our security posture.',
      author: 'Dr. Emily Rodriguez',
      role: 'Chief Information Officer',
      company: 'Regional Healthcare Network'
    }
  },
  {
    id: 4,
    title: 'Micro SaaS Platform for Real Estate',
    client: 'Real Estate Management Company',
    industry: 'Real Estate',
    challenge: 'Need for custom property management solution',
    solution: 'Built scalable micro SaaS platform with mobile app',
    results: [
      '300% increase in operational efficiency',
      '90% reduction in manual processes',
      '50% improvement in tenant satisfaction',
      'ROI achieved in 8 months'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Mobile Development'],
    duration: '10 months',
    teamSize: '10 members',
    image: '/api/placeholder/600/400',
    featured: false,
    category: 'Micro SaaS',
    testimonial: {
      quote: 'The custom platform has transformed our business operations and given us a competitive advantage.',
      author: 'David Kim',
      role: 'Operations Director',
      company: 'Real Estate Management Company'
    }
  },
  {
    id: 5,
    title: 'Data Analytics and Business Intelligence',
    client: 'Manufacturing Company',
    industry: 'Manufacturing',
    challenge: 'Lack of data-driven insights for decision making',
    solution: 'Implemented comprehensive BI platform with predictive analytics',
    results: [
      '35% improvement in production efficiency',
      '25% reduction in waste',
      '40% faster decision making',
      '$2M annual cost savings'
    ],
    technologies: ['Power BI', 'Python', 'Machine Learning', 'Data Warehousing'],
    duration: '5 months',
    teamSize: '7 members',
    image: '/api/placeholder/600/400',
    featured: false,
    category: 'Data Analytics',
    testimonial: {
      quote: 'The analytics platform has given us unprecedented visibility into our operations and helped us make better decisions.',
      author: 'Lisa Thompson',
      role: 'VP of Operations',
      company: 'Manufacturing Company'
    }
  },
  {
    id: 6,
    title: 'Digital Transformation for Retail Chain',
    client: 'National Retail Chain',
    industry: 'Retail',
    challenge: 'Outdated systems and poor customer experience',
    solution: 'Complete digital transformation with omnichannel platform',
    results: [
      '45% increase in online sales',
      '60% improvement in customer satisfaction',
      '30% reduction in operational costs',
      'Seamless omnichannel experience'
    ],
    technologies: ['E-commerce Platform', 'Mobile App', 'CRM', 'Analytics'],
    duration: '12 months',
    teamSize: '15 members',
    image: '/api/placeholder/600/400',
    featured: true,
    category: 'Digital Transformation',
    testimonial: {
      quote: 'The digital transformation has modernized our business and significantly improved our competitive position.',
      author: 'Robert Wilson',
      role: 'CEO',
      company: 'National Retail Chain'
    }
  }
];

const categories = [
  { name: 'All', count: 24, icon: Building },
  { name: 'AI & Machine Learning', count: 6, icon: Brain },
  { name: 'Cloud & DevOps', count: 5, icon: Cloud },
  { name: 'Cybersecurity', count: 4, icon: Shield },
  { name: 'Micro SaaS', count: 3, icon: Zap },
  { name: 'Data Analytics', count: 3, icon: TrendingUp },
  { name: 'Digital Transformation', count: 3, icon: ArrowRight }
];

const industries = [
  'All', 'E-commerce', 'Finance', 'Healthcare', 'Real Estate', 
  'Manufacturing', 'Retail', 'Education', 'Technology'
];

export default function CaseStudiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.challenge.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.solution.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || study.category === selectedCategory;
    const matchesIndustry = selectedIndustry === 'All' || study.industry === selectedIndustry;
    
    return matchesSearch && matchesCategory && matchesIndustry;
  });

  const featuredCaseStudies = filteredCaseStudies.filter(study => study.featured);
  const regularCaseStudies = filteredCaseStudies.filter(study => !study.featured);

  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta name="description" content="Explore our successful technology implementations and client success stories. See how we've helped businesses transform with AI, cloud, and digital solutions." />
        <meta name="keywords" content="case studies, success stories, client results, technology implementations, AI projects" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Success stories and client results from our technology implementations." />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
        <meta property="og:type" content="website" />
      </Head>

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
                Success Stories
                <span className="block text-blue-400">Real Results, Real Impact</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover how we've helped businesses across industries transform their operations with cutting-edge technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.name} value={category.name}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        {featuredCaseStudies.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold mb-4 flex items-center">
                  <Star className="w-8 h-8 text-yellow-500 mr-3" />
                  Featured Case Studies
                </h2>
                <p className="text-gray-600">Our most impactful client success stories</p>
              </motion.div>

              <div className="space-y-12">
                {featuredCaseStudies.map((study, index) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="p-8">
                        <div className="flex items-center mb-4">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mr-3">
                            {study.category}
                          </span>
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                            Featured
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-800 mb-2">Client:</h4>
                          <p className="text-gray-600">{study.client} • {study.industry}</p>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-800 mb-2">Challenge:</h4>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-800 mb-2">Solution:</h4>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-800 mb-2">Key Results:</h4>
                          <ul className="space-y-2">
                            {study.results.map((result, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {study.duration}
                            </div>
                            <div className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {study.teamSize}
                            </div>
                          </div>
                          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                            Read Full Case Study
                          </button>
                        </div>
                      </div>
                      <div className="bg-gray-100 flex items-center justify-center p-8">
                        <div className="text-center">
                          <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-500">Case Study Image</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Case Studies */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">All Case Studies</h2>
              <p className="text-gray-600">Explore our complete portfolio of successful implementations</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <Building className="w-16 h-16 text-gray-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {study.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{study.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{study.client} • {study.industry}</p>
                    <p className="text-gray-700 text-sm mb-4">{study.challenge}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 text-sm mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {study.teamSize}
                      </div>
                    </div>
                    <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-12">
                <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No case studies found</h3>
                <p className="text-gray-500">Try adjusting your search criteria or check back later for new case studies.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Start Your Project
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold flex items-center justify-center"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Explore Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}