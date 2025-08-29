import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Target,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Filter,
  Search,
  Star,
  Award,
  CheckCircle,
  Zap,
  Brain,
  Rocket,
  Shield,
  Heart,
  Crown,
  Sparkles,
  Flame,
  Globe,
  Building,
  Industry,
  ChartBar,
  BarChart3,
  PieChart,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Download,
  Share2,
  ExternalLink
} from 'lucide-react';
import EnhancedSEO from '@/components/EnhancedSEO';

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedService, setSelectedService] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const industries = ['All', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Technology', 'Education', 'Government'];
  const services = ['All', 'AI & Analytics', 'Cloud & DevOps', 'Digital Transformation', 'Cybersecurity', 'IoT & Edge', 'Blockchain'];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Diagnostics Platform',
      client: 'MetroHealth Systems',
      industry: 'Healthcare',
      service: 'AI & Analytics',
      duration: '8 months',
      teamSize: '12',
      challenge: 'MetroHealth needed to reduce diagnostic errors and improve patient outcomes while handling increasing patient volumes.',
      solution: 'Developed a comprehensive AI-powered diagnostic platform using computer vision and machine learning algorithms.',
      results: [
        'Reduced diagnostic errors by 78%',
        'Improved patient throughput by 45%',
        'Saved $2.3M annually in operational costs',
        'Enhanced diagnostic accuracy to 96.5%'
      ],
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'React', 'Node.js', 'PostgreSQL'],
      image: '/images/case-studies/healthcare-ai.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'AI Cybersecurity Threat Intelligence Platform',
      client: 'Global Financial Corp',
      industry: 'Finance',
      service: 'Cybersecurity',
      duration: '6 months',
      teamSize: '8',
      challenge: 'Global Financial Corp faced increasing sophisticated cyber threats and needed real-time threat detection and response.',
      solution: 'Implemented an AI-powered cybersecurity platform with advanced threat intelligence and automated incident response.',
      results: [
        'Reduced security incidents by 85%',
        'Improved threat detection speed by 90%',
        'Automated 70% of incident response tasks',
        'Achieved 99.9% threat detection accuracy'
      ],
      technologies: ['Python', 'Machine Learning', 'Cybersecurity Tools', 'React', 'Node.js', 'MongoDB'],
      image: '/images/case-studies/cybersecurity-ai.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'AI Financial Trading Risk Management System',
      client: 'Quantum Trading Solutions',
      industry: 'Finance',
      service: 'AI & Analytics',
      duration: '10 months',
      teamSize: '15',
      challenge: 'Quantum Trading needed to manage complex financial risks and optimize trading strategies in volatile markets.',
      solution: 'Built an AI-powered risk management platform with real-time market analysis and predictive modeling.',
      results: [
        'Reduced trading risks by 65%',
        'Improved portfolio returns by 28%',
        'Automated 80% of risk assessment tasks',
        'Enhanced market prediction accuracy to 87%'
      ],
      technologies: ['Python', 'TensorFlow', 'Financial APIs', 'React', 'FastAPI', 'Redis'],
      image: '/images/case-studies/financial-ai.jpg',
      featured: true
    },
    {
      id: 4,
      title: 'AI Legal Document Automation Platform',
      client: 'LegalTech Partners',
      industry: 'Technology',
      service: 'Digital Transformation',
      duration: '7 months',
      teamSize: '10',
      challenge: 'LegalTech Partners needed to automate document processing and legal analysis to improve efficiency.',
      solution: 'Developed an AI-powered legal document automation platform with natural language processing capabilities.',
      results: [
        'Reduced document processing time by 75%',
        'Improved legal analysis accuracy by 82%',
        'Automated 60% of routine legal tasks',
        'Enhanced client satisfaction by 40%'
      ],
      technologies: ['Python', 'NLP', 'Machine Learning', 'React', 'Django', 'PostgreSQL'],
      image: '/images/case-studies/legal-ai.jpg',
      featured: true
    },
    {
      id: 5,
      title: 'AI Customer Experience Analytics Platform',
      client: 'Retail Innovations Inc',
      industry: 'Retail',
      service: 'AI & Analytics',
      duration: '9 months',
      teamSize: '14',
      challenge: 'Retail Innovations needed to understand customer behavior and optimize customer experience across all touchpoints.',
      solution: 'Created an AI-powered customer experience analytics platform with real-time insights and predictive modeling.',
      results: [
        'Improved customer satisfaction by 35%',
        'Increased customer retention by 28%',
        'Optimized customer journey by 45%',
        'Enhanced marketing ROI by 52%'
      ],
      technologies: ['Python', 'Machine Learning', 'Data Analytics', 'React', 'Node.js', 'BigQuery'],
      image: '/images/case-studies/retail-ai.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'AI Content Generation Platform',
      client: 'Content Creators Pro',
      industry: 'Technology',
      service: 'AI & Analytics',
      duration: '5 months',
      teamSize: '9',
      challenge: 'Content Creators Pro needed to automate content creation while maintaining quality and brand consistency.',
      solution: 'Built an AI-powered content generation platform with natural language generation and content optimization.',
      results: [
        'Increased content production by 300%',
        'Improved content quality scores by 25%',
        'Reduced content creation costs by 60%',
        'Enhanced brand consistency by 40%'
      ],
      technologies: ['Python', 'GPT Models', 'NLP', 'React', 'FastAPI', 'PostgreSQL'],
      image: '/images/case-studies/content-ai.jpg',
      featured: false
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'All' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'All' || study.service === selectedService;
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.challenge.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesIndustry && matchesService && matchesSearch;
  });

  const stats = [
    {
      value: '150+',
      label: 'Projects Completed',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500'
    },
    {
      value: '98%',
      label: 'Client Satisfaction',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      value: '$50M+',
      label: 'Value Delivered',
      icon: DollarSign,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      value: '24/7',
      label: 'Support Available',
      icon: Clock,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="Case Studies - Zion Tech Group"
        description="Explore our successful projects and case studies showcasing how we've transformed businesses with AI, cloud, and digital solutions."
        canonical="/case-studies"
        url="https://ziontechgroup.com/case-studies"
        type="website"
        tags={['Case Studies', 'Success Stories', 'AI Projects', 'Digital Transformation', 'Technology Solutions']}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Success <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Stories</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Discover how we've helped businesses transform their operations and achieve remarkable results with our cutting-edge technology solutions
            </motion.p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-cyan-400 mb-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Industry Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Industry</label>
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                  >
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>

                {/* Service Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Service</label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                  >
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Search */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Search</label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search case studies..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-400">
                  Showing {filteredCaseStudies.length} of {caseStudies.length} case studies
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Featured Success Stories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most impactful projects showcasing the power of AI and innovative technology solutions
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredCaseStudies.filter(study => study.featured).map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-center justify-between mb-6">
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full">
                        {study.industry}
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
                        {study.service}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="flex items-center space-x-4 mb-6 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Building className="w-4 h-4" />
                        <span>{study.client}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{study.teamSize} team</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Challenge:</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Solution:</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-lg">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <span className="mr-2">View Details</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 text-gray-400 hover:text-white transition-all duration-300">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 text-gray-400 hover:text-white transition-all duration-300">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">All Case Studies</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our complete portfolio of successful projects and transformations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium text-gray-400 bg-slate-700/50 px-2 py-1 rounded-full">
                        {study.industry}
                      </span>
                      {study.featured && (
                        <span className="text-xs font-medium text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">
                      {study.client} • {study.duration} • {study.teamSize} team
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, idx) => (
                          <li key={idx} className="flex items-center text-xs text-gray-400">
                            <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-cyan-400 font-semibold">
                        {study.service}
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our proven technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/comprehensive-services-showcase-2026"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <span>Explore Our Services</span>
                <Rocket className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
