import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Building, 
  Users, 
  TrendingUp, 
  ArrowRight, 
  Search, 
  Filter, 
  Calendar,
  Star,
  Eye,
  Share2,
  Bookmark,
  Target,
  Award,
  Zap,
  Brain,
  Cloud,
  Shield,
  Atom,
  Network,
  Heart,
  DollarSign,
  Clock,
  MapPin,
  Factory
} from 'lucide-react';

export function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building, count: 0 },
    { id: 'healthcare', name: 'Healthcare', icon: Heart, count: 0 },
    { id: 'finance', name: 'Financial Services', icon: DollarSign, count: 0 },
    { id: 'manufacturing', name: 'Manufacturing', icon: Factory, count: 0 },
    { id: 'retail', name: 'Retail & E-commerce', icon: Users, count: 0 },
    { id: 'government', name: 'Government', icon: Building, count: 0 }
  ];

  const services = [
    { id: 'all', name: 'All Services', icon: Zap, count: 0 },
    { id: 'ai', name: 'AI Solutions', icon: Brain, count: 0 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, count: 0 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 0 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 0 },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Network, count: 0 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Analytics Platform',
      company: 'MedTech Solutions Inc.',
      industry: 'healthcare',
      service: 'ai',
      challenge: 'MedTech needed to analyze vast amounts of patient data to identify early disease patterns and improve treatment outcomes.',
      solution: 'Implemented an AI-powered analytics platform that processes real-time patient data, identifies patterns, and provides predictive insights.',
      results: [
        '40% improvement in early disease detection',
        '25% reduction in treatment costs',
        '60% faster diagnosis times',
        '95% accuracy in pattern recognition'
      ],
      duration: '6 months',
      teamSize: '8 developers',
      technologies: ['AI/ML', 'Python', 'TensorFlow', 'AWS', 'Healthcare APIs'],
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Quantum Computing for Financial Risk Modeling',
      company: 'Global Finance Corp.',
      industry: 'finance',
      service: 'quantum',
      challenge: 'Global Finance needed to process complex risk calculations that would take traditional computers weeks to complete.',
      solution: 'Developed a quantum computing solution that processes risk models in hours instead of weeks, enabling real-time risk assessment.',
      results: [
        '1000x faster risk calculations',
        'Real-time risk monitoring',
        '30% improvement in risk accuracy',
        '$50M annual cost savings'
      ],
      duration: '12 months',
      teamSize: '12 researchers',
      technologies: ['Quantum Computing', 'Qiskit', 'Python', 'IBM Quantum', 'Risk Models'],
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Zero-Trust Security Architecture',
      company: 'SecureNet Bank',
      industry: 'finance',
      service: 'security',
      challenge: 'SecureNet needed to protect customer data and prevent cyber attacks while maintaining seamless user experience.',
      solution: 'Implemented a comprehensive zero-trust security architecture with AI-powered threat detection and automated response systems.',
      results: [
        '99.9% threat detection rate',
        'Zero security breaches',
        '50% reduction in false positives',
        '24/7 automated monitoring'
      ],
      duration: '8 months',
      teamSize: '10 security engineers',
      technologies: ['Zero Trust', 'AI Security', 'Kubernetes', 'Terraform', 'SIEM'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 4,
      title: 'Cloud Migration & DevOps Transformation',
      company: 'TechCorp Manufacturing',
      industry: 'manufacturing',
      service: 'cloud',
      challenge: 'TechCorp needed to modernize their legacy systems and improve deployment efficiency for their manufacturing software.',
      solution: 'Migrated to cloud infrastructure and implemented CI/CD pipelines with automated testing and deployment processes.',
      results: [
        '90% faster deployment times',
        '99.9% uptime achieved',
        '40% reduction in infrastructure costs',
        'Automated scaling capabilities'
      ],
      duration: '10 months',
      teamSize: '15 DevOps engineers',
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Jenkins', 'Terraform'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 5,
      title: 'IoT Edge Computing for Smart Cities',
      company: 'CitySmart Solutions',
      industry: 'government',
      service: 'iot',
      challenge: 'CitySmart needed to process data from thousands of IoT sensors in real-time for traffic management and public safety.',
      solution: 'Deployed edge computing infrastructure that processes sensor data locally, reducing latency and improving response times.',
      results: [
        'Real-time traffic optimization',
        '30% reduction in response times',
        'Scalable IoT infrastructure',
        'Improved public safety'
      ],
      duration: '14 months',
      teamSize: '20 engineers',
      technologies: ['IoT', 'Edge Computing', 'Kubernetes', 'MQTT', 'Time Series DB'],
      featured: false,
      image: '/api/placeholder/600/400'
    }
  ];

  // Calculate counts
  industries.forEach(industry => {
    if (industry.id === 'all') {
      industry.count = caseStudies.length;
    } else {
      industry.count = caseStudies.filter(cs => cs.industry === industry.id).length;
    }
  });

  services.forEach(service => {
    if (service.id === 'all') {
      service.count = caseStudies.length;
    } else {
      service.count = caseStudies.filter(cs => cs.service === service.id).length;
    }
  });

  const filteredCaseStudies = caseStudies.filter(cs => {
    const matchesIndustry = selectedIndustry === 'all' || cs.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || cs.service === selectedService;
    const matchesSearch = cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cs.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cs.challenge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesIndustry && matchesService && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Customer Success Stories</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how organizations across industries are transforming their business with Zion Tech Group's innovative solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {industries.map(industry => (
                  <option key={industry.id} value={industry.id}>
                    {industry.name} ({industry.count})
                  </option>
                ))}
              </select>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {services.map(service => (
                  <option key={service.id} value={service.id}>
                    {service.name} ({service.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured Case Studies */}
        {filteredCaseStudies.filter(cs => cs.featured).length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Success Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCaseStudies.filter(cs => cs.featured).map((cs, index) => (
                <motion.article
                  key={cs.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {industries.find(i => i.id === cs.industry)?.name}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{cs.title}</h3>
                    <p className="text-gray-600 mb-3 font-medium">{cs.company}</p>
                    <p className="text-gray-600 mb-4">{cs.challenge}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {cs.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {cs.teamSize}
                      </span>
                    </div>
                    <a
                      href={`/case-studies/${cs.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* All Case Studies */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {filteredCaseStudies.length} Case Studies Found
          </h2>
          <div className="space-y-6">
            {filteredCaseStudies.filter(cs => !cs.featured).map((cs, index) => (
              <motion.article
                key={cs.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {industries.find(i => i.id === cs.industry)?.name}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {services.find(s => s.id === cs.service)?.name}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{cs.title}</h3>
                    <p className="text-gray-600 mb-2 font-medium">{cs.company}</p>
                    <p className="text-gray-600 mb-3">{cs.challenge}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {cs.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {cs.teamSize}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <Bookmark className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                      <a
                        href={`/case-studies/${cs.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Read Full Case Study
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Results</h4>
                    <ul className="space-y-2">
                      {cs.results.slice(0, 3).map((result, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <TrendingUp className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No case studies found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters.</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Success Story?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how Zion Tech Group can help transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
