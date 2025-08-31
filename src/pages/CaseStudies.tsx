import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  TrendingUp, 
  Users, 
  Building, 
  ArrowRight,
  Search,
  Filter,
  Clock,
  Award,
  Rocket,
  Brain,
  Shield,
  Cloud,
  DollarSign,
  Target,
  CheckCircle
} from 'lucide-react';

const CaseStudies = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const industries = [
    { id: 'all', name: 'All Industries', count: 15 },
    { id: 'healthcare', name: 'Healthcare', count: 4 },
    { id: 'finance', name: 'Financial Services', count: 3 },
    { id: 'manufacturing', name: 'Manufacturing', count: 3 },
    { id: 'retail', name: 'Retail & E-commerce', count: 2 },
    { id: 'government', name: 'Government', count: 3 }
  ];

  const services = [
    { id: 'all', name: 'All Services', count: 15 },
    { id: 'ai', name: 'AI Solutions', count: 6 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 4 },
    { id: 'cloud', name: 'Cloud & DevOps', count: 3 },
    { id: 'digital-transformation', name: 'Digital Transformation', count: 2 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Patient Care Optimization',
      client: 'MetroHealth Systems',
      industry: 'healthcare',
      service: 'ai',
      challenge: 'MetroHealth needed to improve patient outcomes while reducing operational costs. They were struggling with inefficient resource allocation and limited predictive capabilities for patient care.',
      solution: 'Implemented an AI-powered patient care optimization platform that uses machine learning to predict patient needs, optimize resource allocation, and provide personalized care recommendations.',
      results: [
        '35% reduction in patient readmission rates',
        '28% improvement in resource utilization',
        '$2.4M annual cost savings',
        '95% accuracy in patient outcome predictions'
      ],
      duration: '8 months',
      teamSize: '12',
      featured: true,
      tags: ['AI/ML', 'Healthcare', 'Predictive Analytics', 'Cost Optimization']
    },
    {
      id: 2,
      title: 'Quantum-Resistant Cybersecurity Infrastructure',
      client: 'Global Financial Corp',
      industry: 'finance',
      service: 'cybersecurity',
      challenge: 'A major financial institution needed to future-proof their security infrastructure against quantum computing threats while maintaining compliance with strict financial regulations.',
      solution: 'Developed and deployed a quantum-resistant cybersecurity platform using post-quantum cryptography algorithms, advanced threat detection, and real-time monitoring systems.',
      results: [
        '100% compliance with financial security regulations',
        'Zero security breaches in 18 months',
        '60% faster threat detection and response',
        'Future-proof quantum-resistant encryption'
      ],
      duration: '12 months',
      teamSize: '15',
      featured: false,
      tags: ['Cybersecurity', 'Quantum Computing', 'Compliance', 'Financial Services']
    },
    {
      id: 3,
      title: 'Cloud-Native Digital Transformation',
      client: 'TechManufacturing Inc',
      industry: 'manufacturing',
      service: 'cloud',
      challenge: 'A traditional manufacturing company needed to modernize their legacy systems and implement cloud-based solutions to improve efficiency and enable remote operations.',
      solution: 'Executed a comprehensive cloud migration strategy, implementing microservices architecture, containerization, and automated CI/CD pipelines for seamless deployment and scaling.',
      results: [
        '40% improvement in operational efficiency',
        '99.9% system uptime achieved',
        '50% reduction in deployment time',
        'Support for 100% remote operations'
      ],
      duration: '10 months',
      teamSize: '18',
      featured: false,
      tags: ['Cloud Migration', 'Microservices', 'DevOps', 'Manufacturing']
    },
    {
      id: 4,
      title: 'AI-Driven Supply Chain Optimization',
      client: 'RetailChain Solutions',
      industry: 'retail',
      service: 'ai',
      challenge: 'A retail chain was experiencing significant inventory waste and supply chain inefficiencies, leading to lost revenue and customer dissatisfaction.',
      solution: 'Implemented an AI-powered supply chain optimization system that uses predictive analytics to forecast demand, optimize inventory levels, and streamline logistics operations.',
      results: [
        '45% reduction in inventory waste',
        '30% improvement in delivery times',
        '$1.8M annual cost savings',
        '25% increase in customer satisfaction'
      ],
      duration: '6 months',
      teamSize: '10',
      featured: false,
      tags: ['AI/ML', 'Supply Chain', 'Retail', 'Predictive Analytics']
    },
    {
      id: 5,
      title: 'Government Digital Services Platform',
      client: 'State Digital Services',
      industry: 'government',
      service: 'digital-transformation',
      challenge: 'A state government needed to modernize their citizen services platform to improve accessibility, reduce processing times, and enhance user experience.',
      solution: 'Developed a comprehensive digital services platform with user-friendly interfaces, automated workflows, and integrated data systems for seamless citizen interactions.',
      results: [
        '80% reduction in service processing time',
        '95% citizen satisfaction rate',
        '60% decrease in manual processing errors',
        '24/7 service availability'
      ],
      duration: '14 months',
      teamSize: '20',
      featured: false,
      tags: ['Digital Transformation', 'Government', 'Citizen Services', 'Automation']
    },
    {
      id: 6,
      title: 'AI-Powered Fraud Detection System',
      client: 'SecureBank International',
      industry: 'finance',
      service: 'ai',
      challenge: 'A multinational bank needed to enhance their fraud detection capabilities to protect against increasingly sophisticated financial crimes and reduce false positives.',
      solution: 'Built an advanced AI-powered fraud detection system using deep learning algorithms, real-time transaction monitoring, and behavioral analysis to identify and prevent fraudulent activities.',
      results: [
        '90% reduction in false positives',
        '95% accuracy in fraud detection',
        'Real-time threat response',
        '$15M in prevented fraud losses'
      ],
      duration: '9 months',
      teamSize: '14',
      featured: false,
      tags: ['AI/ML', 'Fraud Detection', 'Financial Services', 'Real-time Analytics']
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.challenge.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesIndustry && matchesService && matchesSearch;
  });

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case 'healthcare': return Users;
      case 'finance': return DollarSign;
      case 'manufacturing': return Building;
      case 'retail': return Target;
      case 'government': return Shield;
      default: return Building;
    }
  };

  const getServiceIcon = (service: string) => {
    switch (service) {
      case 'ai': return Brain;
      case 'cybersecurity': return Shield;
      case 'cloud': return Cloud;
      case 'digital-transformation': return Rocket;
      default: return Rocket;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#ffffff_1px,_transparent_1px)] bg-[length:20px_20px] opacity-5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Case Studies
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover how we've helped organizations across industries achieve remarkable results 
              through innovative technology solutions and strategic digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                />
              </div>
            </div>

            {/* Industry Filter */}
            <div>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
              >
                {industries.map((industry) => (
                  <option key={industry.id} value={industry.id}>
                    {industry.name} ({industry.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Service Filter */}
            <div>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
              >
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name} ({service.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {filteredCaseStudies.filter(study => study.featured).length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Featured Case Study</h2>
            </motion.div>

            {filteredCaseStudies.filter(study => study.featured).map((study) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <getIndustryIcon industry={study.industry} className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{study.client}</h4>
                        <p className="text-sm text-gray-400 capitalize">{study.industry}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        Duration: {study.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Users className="w-4 h-4 mr-2" />
                        Team Size: {study.teamSize}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <getServiceIcon service={study.service} className="w-4 h-4 mr-2" />
                        Service: {study.service.replace('-', ' ')}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {study.title}
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">The Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Our Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {study.results.map((result, index) => (
                            <div key={index} className="flex items-center text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                              <span className="text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group mt-6">
                      Read Full Case Study
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our collection of successful implementations and discover how 
              we've helped organizations achieve their digital transformation goals.
            </p>
          </motion.div>

          {filteredCaseStudies.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No case studies found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.filter(study => !study.featured).map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <getIndustryIcon industry={study.industry} className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm">{study.client}</h4>
                        <p className="text-xs text-gray-400 capitalize">{study.industry}</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <getServiceIcon service={study.service} className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {study.challenge}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      {study.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Users className="w-4 h-4 mr-2" />
                      {study.teamSize} team members
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs border border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-white mb-2">Key Results:</h5>
                    <div className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <div key={index} className="flex items-center text-xs text-gray-400">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-1 flex-shrink-0" />
                          <span className="line-clamp-1">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group w-full justify-center">
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help your organization achieve similar results 
              through innovative technology solutions and strategic digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Start Your Project
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
