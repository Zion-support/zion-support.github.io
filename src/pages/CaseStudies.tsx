import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Globe, 
  Cpu, 
  Lock,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Users,
  Target,
  Award,
  Sparkles,
  Rocket,
  BarChart3,
  MessageSquare,
  Mail,
  Database,
  Network,
  Cloud,
  Smartphone,
  Palette,
  Leaf,
  Code,
  Wallet,
  Box,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Play,
  FileText,
  BookOpen,
  Video,
  File,
  Calendar,
  Tag,
  Eye,
  Heart,
  Share2,
  Bookmark,
  ArrowUpRight,
  Building2,
  Factory,
  ShoppingCart,
  GraduationCap,
  Truck,
  Building,
  Heart as HeartIcon
} from 'lucide-react';
import { SEO } from '../components/SEO';

const CaseStudies: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building2 },
    { id: 'healthcare', name: 'Healthcare', icon: HeartIcon },
    { id: 'finance', name: 'Financial Services', icon: DollarSign },
    { id: 'manufacturing', name: 'Manufacturing', icon: Factory },
    { id: 'retail', name: 'Retail & E-commerce', icon: ShoppingCart },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'government', name: 'Government', icon: Building },
    { id: 'technology', name: 'Technology', icon: Cpu }
  ];

  const services = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'data', name: 'Data Analytics', icon: Database },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Network },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Wallet }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Diagnostic Platform for Major Hospital Network',
      client: 'Metro Health Systems',
      industry: 'healthcare',
      service: 'ai',
      description: 'Implemented an AI-powered diagnostic platform that improved diagnostic accuracy by 35% and reduced patient wait times by 60%.',
      challenge: 'The hospital network was struggling with long diagnostic wait times and occasional diagnostic errors, leading to delayed treatments and patient dissatisfaction.',
      solution: 'Developed a comprehensive AI diagnostic platform that integrated with existing EHR systems, providing real-time analysis of medical images and patient data.',
      results: [
        '35% improvement in diagnostic accuracy',
        '60% reduction in patient wait times',
        '40% increase in radiologist productivity',
        '$2.3M annual cost savings',
        'Improved patient satisfaction scores'
      ],
      technologies: ['Machine Learning', 'Computer Vision', 'Natural Language Processing', 'Cloud Computing'],
      duration: '8 months',
      teamSize: '12 developers',
      featured: true,
      image: '/case-studies/healthcare-ai-diagnostics.jpg',
      tags: ['Healthcare AI', 'Diagnostics', 'Machine Learning', 'EHR Integration']
    },
    {
      id: 2,
      title: 'Quantum Computing Solution for Financial Risk Modeling',
      client: 'Global Financial Corp',
      industry: 'finance',
      service: 'quantum',
      description: 'Revolutionized financial risk modeling with quantum computing, achieving 1000x performance improvement over classical methods.',
      challenge: 'Traditional risk modeling was taking days to complete, limiting the ability to respond to market changes and perform real-time risk assessment.',
      solution: 'Implemented a hybrid quantum-classical computing solution that leveraged quantum algorithms for complex risk calculations while maintaining classical computing for routine operations.',
      results: [
        '1000x performance improvement',
        'Real-time risk assessment capability',
        '50% reduction in capital requirements',
        'Improved regulatory compliance',
        'Competitive advantage in trading'
      ],
      technologies: ['Quantum Computing', 'Hybrid Algorithms', 'Financial Modeling', 'Cloud Infrastructure'],
      duration: '14 months',
      teamSize: '8 developers',
      featured: true,
      image: '/case-studies/quantum-financial-risk.jpg',
      tags: ['Quantum Computing', 'Financial Risk', 'Performance', 'Regulatory Compliance']
    },
    {
      id: 3,
      title: 'Smart Manufacturing IoT Platform for Automotive Supplier',
      client: 'Precision Auto Parts',
      industry: 'manufacturing',
      service: 'iot',
      description: 'Transformed manufacturing operations with IoT sensors and AI analytics, achieving 45% reduction in production costs and 70% improvement in quality control.',
      challenge: 'The manufacturing facility was experiencing high defect rates, production inefficiencies, and difficulty in predicting equipment maintenance needs.',
      solution: 'Deployed a comprehensive IoT platform with thousands of sensors, real-time data analytics, and predictive maintenance algorithms.',
      results: [
        '45% reduction in production costs',
        '70% improvement in quality control',
        '90% reduction in unplanned downtime',
        '25% increase in production capacity',
        '$4.1M annual cost savings'
      ],
      technologies: ['IoT Sensors', 'Edge Computing', 'Predictive Analytics', 'Machine Learning'],
      duration: '10 months',
      teamSize: '15 developers',
      featured: true,
      image: '/case-studies/iot-manufacturing.jpg',
      tags: ['IoT', 'Manufacturing', 'Predictive Maintenance', 'Quality Control']
    },
    {
      id: 4,
      title: 'Cybersecurity Platform for Government Agency',
      client: 'Department of Homeland Security',
      industry: 'government',
      service: 'cybersecurity',
      description: 'Developed a next-generation cybersecurity platform that detected and prevented 99.9% of cyber threats while maintaining zero false positives.',
      challenge: 'The agency was facing sophisticated cyber attacks and needed a solution that could detect advanced persistent threats without overwhelming analysts with false alarms.',
      solution: 'Built an AI-powered cybersecurity platform that combined behavioral analysis, threat intelligence, and machine learning to identify and respond to threats in real-time.',
      results: [
        '99.9% threat detection rate',
        'Zero false positives',
        '90% reduction in response time',
        'Enhanced threat intelligence sharing',
        'Improved national security posture'
      ],
      technologies: ['AI/ML', 'Behavioral Analysis', 'Threat Intelligence', 'Real-time Monitoring'],
      duration: '18 months',
      teamSize: '20 developers',
      featured: false,
      image: '/case-studies/cybersecurity-government.jpg',
      tags: ['Cybersecurity', 'Government', 'AI Security', 'Threat Detection']
    },
    {
      id: 5,
      title: 'E-commerce AI Platform for Retail Chain',
      client: 'Urban Retail Group',
      industry: 'retail',
      service: 'ai',
      description: 'Implemented AI-powered personalization and inventory management, resulting in 40% increase in online sales and 30% reduction in inventory costs.',
      challenge: 'The retail chain was struggling with poor online conversion rates, inventory inefficiencies, and inability to provide personalized shopping experiences.',
      solution: 'Developed an AI platform that provided personalized product recommendations, optimized inventory management, and improved customer engagement.',
      results: [
        '40% increase in online sales',
        '30% reduction in inventory costs',
        '50% improvement in customer engagement',
        '25% increase in average order value',
        'Enhanced customer satisfaction'
      ],
      technologies: ['Machine Learning', 'Recommendation Engine', 'Inventory Optimization', 'Customer Analytics'],
      duration: '12 months',
      teamSize: '10 developers',
      featured: false,
      image: '/case-studies/retail-ai-platform.jpg',
      tags: ['Retail AI', 'Personalization', 'Inventory Management', 'E-commerce']
    },
    {
      id: 6,
      title: 'Data Analytics Platform for Educational Institution',
      client: 'State University System',
      industry: 'education',
      service: 'data',
      description: 'Created a comprehensive data analytics platform that improved student outcomes and operational efficiency across 12 campuses.',
      challenge: 'The university system lacked visibility into student performance patterns and operational inefficiencies across multiple campuses.',
      solution: 'Built a centralized data analytics platform that integrated data from all campuses, providing insights into student success factors and operational optimization opportunities.',
      results: [
        '15% improvement in student retention',
        '20% increase in graduation rates',
        '30% reduction in administrative costs',
        'Enhanced decision-making capabilities',
        'Improved resource allocation'
      ],
      technologies: ['Big Data', 'Data Warehousing', 'Business Intelligence', 'Predictive Analytics'],
      duration: '16 months',
      teamSize: '18 developers',
      featured: false,
      image: '/case-studies/education-analytics.jpg',
      tags: ['Education', 'Data Analytics', 'Student Success', 'Operational Efficiency']
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    
    return matchesSearch && matchesIndustry && matchesService;
  });

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Explore real-world success stories and implementations of our AI, quantum computing, cybersecurity, and technology solutions across various industries."
        keywords="case studies, success stories, client implementations, AI case studies, quantum computing success, cybersecurity implementations, technology case studies"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container-responsive relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how our innovative technology solutions have transformed businesses across industries. 
              From healthcare to finance, manufacturing to government, see the real-world impact of our work.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search case studies, clients, or industries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b border-slate-700/50">
        <div className="container-responsive">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {/* Industry Filter */}
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-gray-400" />
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {industries.map((industry) => (
                  <option key={industry.id} value={industry.id}>
                    {industry.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Service Filter */}
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gray-400" />
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-400">
              {filteredCaseStudies.length} case studies found
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container-responsive">
          {filteredCaseStudies.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No case studies found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search terms or filters</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedIndustry('all');
                  setSelectedService('all');
                }}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
            <div className="space-y-12">
              {filteredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                    study.featured 
                      ? 'border-cyan-400/50 bg-gradient-to-br from-slate-800/80 to-slate-700/80 ring-2 ring-cyan-400/20' 
                      : 'border-slate-700/50 bg-slate-800/50 hover:border-slate-600/50'
                  }`}
                >
                  {study.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                        <Star className="w-3 h-3" />
                        Featured
                      </span>
                    </div>
                  )}

                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Left Column - Content */}
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                            study.industry === 'healthcare' ? 'bg-red-500/20 text-red-400' :
                            study.industry === 'finance' ? 'bg-green-500/20 text-green-400' :
                            study.industry === 'manufacturing' ? 'bg-blue-500/20 text-blue-400' :
                            study.industry === 'retail' ? 'bg-purple-500/20 text-purple-400' :
                            study.industry === 'education' ? 'bg-teal-500/20 text-teal-400' :
                            study.industry === 'government' ? 'bg-slate-500/20 text-slate-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {industries.find(i => i.id === study.industry)?.name}
                          </span>
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                            study.service === 'ai' ? 'bg-purple-500/20 text-purple-400' :
                            study.service === 'cloud' ? 'bg-blue-500/20 text-blue-400' :
                            study.service === 'cybersecurity' ? 'bg-red-500/20 text-red-400' :
                            study.service === 'data' ? 'bg-cyan-500/20 text-cyan-400' :
                            study.service === 'iot' ? 'bg-orange-500/20 text-orange-400' :
                            study.service === 'quantum' ? 'bg-violet-500/20 text-violet-400' :
                            study.service === 'blockchain' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {services.find(s => s.id === study.service)?.name}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                          {study.title}
                        </h3>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {study.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-semibold text-white mb-2">Challenge</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-2">Solution</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">{study.solution}</p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-white mb-3">Key Results</h4>
                          <ul className="space-y-2">
                            {study.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="flex items-center gap-2 text-sm text-gray-400">
                                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {study.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Column - Stats & Info */}
                      <div className="lg:col-span-1">
                        <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50">
                          <h4 className="font-semibold text-white mb-4">Project Details</h4>
                          
                          <div className="space-y-4">
                            <div>
                              <span className="text-sm text-gray-400">Client</span>
                              <p className="text-white font-medium">{study.client}</p>
                            </div>
                            
                            <div>
                              <span className="text-sm text-gray-400">Duration</span>
                              <p className="text-white font-medium">{study.duration}</p>
                            </div>
                            
                            <div>
                              <span className="text-sm text-gray-400">Team Size</span>
                              <p className="text-white font-medium">{study.teamSize}</p>
                            </div>
                            
                            <div>
                              <span className="text-sm text-gray-400">Technologies</span>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {study.technologies.map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-md"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 pt-6 border-t border-slate-600/50">
                            <Link
                              to="/contact"
                              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group/link"
                            >
                              Discuss Similar Project
                              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let our team of experts help you achieve similar results. 
              We'll analyze your needs and create a customized solution that drives real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let's Discuss Your Project
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our team has successfully delivered hundreds of projects across industries. 
                We're ready to help you achieve similar results and create your own success story.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="p-2 bg-slate-700/50 rounded-lg">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="p-2 bg-slate-700/50 rounded-lg">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <div className="p-2 bg-slate-700/50 rounded-lg mt-0.5">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-sm leading-relaxed">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-700/50"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-cyan-500/20 rounded-lg mt-0.5">
                    <Target className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Proven Track Record</h4>
                    <p className="text-sm text-gray-400">Hundreds of successful projects across industries</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-cyan-500/20 rounded-lg mt-0.5">
                    <Users className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Expert Team</h4>
                    <p className="text-sm text-gray-400">Experienced developers and domain experts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-cyan-500/20 rounded-lg mt-0.5">
                    <Zap className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Cutting-Edge Technology</h4>
                    <p className="text-sm text-gray-400">Latest AI, quantum, and emerging technologies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-cyan-500/20 rounded-lg mt-0.5">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Measurable Results</h4>
                    <p className="text-sm text-gray-400">Focus on delivering quantifiable business value</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <ArrowRight className="w-6 h-6 rotate-45" />
      </button>
    </div>
  );
};

export default CaseStudies;
