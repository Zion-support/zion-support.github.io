import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Star,
  Award,
  BarChart3,
  Cpu,
  Cloud,
  Lock,
  Brain,
  Database,
  Network,
  Server,
  Smartphone,
  Code,
  Settings,
  Gauge,
  Eye,
  Leaf,
  Atom,
  Globe,
  Heart,
  Scale,
  Factory,
  ShoppingCart,
  GraduationCap,
  Building2,
  Filter,
  Search,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Play,
  Download,
  Share2,
  Bookmark,
  MessageCircle,
  ThumbsUp,
  Eye as EyeIcon,
  Zap,
  Rocket,
  Crown,
  Sparkles
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const CaseStudies: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const industries = [
    { id: 'all', name: 'All Industries', count: 24 },
    { id: 'healthcare', name: 'Healthcare', count: 6, icon: Heart },
    { id: 'financial', name: 'Financial Services', count: 5, icon: TrendingUp },
    { id: 'manufacturing', name: 'Manufacturing', count: 4, icon: Factory },
    { id: 'retail', name: 'Retail & E-commerce', count: 4, icon: ShoppingCart },
    { id: 'education', name: 'Education', count: 3, icon: GraduationCap },
    { id: 'government', name: 'Government', count: 2, icon: Building2 }
  ];

  const services = [
    { id: 'all', name: 'All Services', count: 24 },
    { id: 'ai-analytics', name: 'AI & Analytics', count: 8, icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 5, icon: Shield },
    { id: 'cloud-devops', name: 'Cloud & DevOps', count: 4, icon: Cloud },
    { id: 'digital-transformation', name: 'Digital Transformation', count: 4, icon: Rocket },
    { id: 'quantum-computing', name: 'Quantum Computing', count: 3, icon: Atom }
  ];

  const caseStudies = [
    {
      id: 'healthcare-cost-reduction',
      title: 'Healthcare Provider Achieves 40% Cost Reduction with AI-Powered Diagnostics',
      industry: 'healthcare',
      service: 'ai-analytics',
      company: 'MetroHealth Systems',
      description: 'Implemented AI-powered diagnostic tools and predictive analytics to improve patient outcomes while significantly reducing operational costs.',
      challenge: 'High diagnostic costs, long wait times, and inconsistent patient outcomes across multiple facilities.',
      solution: 'Deployed AI-powered diagnostic platform with predictive analytics and automated workflow optimization.',
      results: [
        '40% reduction in operational costs',
        '60% faster diagnostic turnaround time',
        '25% improvement in patient outcomes',
        '30% reduction in readmission rates'
      ],
      metrics: {
        costSavings: '$2.4M annually',
        efficiencyGain: '60%',
        roi: '320%',
        timeline: '8 months'
      },
      featured: true,
      image: '/case-studies/healthcare-cost-reduction.jpg',
      date: '2025-01-15',
      readTime: '8 min read'
    },
    {
      id: 'manufacturing-efficiency',
      title: 'Manufacturing Company Boosts Efficiency 3x with IoT Edge Computing',
      industry: 'manufacturing',
      service: 'cloud-devops',
      company: 'Global Manufacturing Co.',
      description: 'Transformed manufacturing operations with IoT sensors, edge computing, and AI-powered predictive maintenance.',
      challenge: 'Unplanned downtime, inefficient maintenance schedules, and lack of real-time production insights.',
      solution: 'Implemented comprehensive IoT edge computing solution with AI-powered predictive maintenance and real-time analytics.',
      results: [
        '3x improvement in operational efficiency',
        '85% reduction in unplanned downtime',
        '45% reduction in maintenance costs',
        'Real-time production monitoring'
      ],
      metrics: {
        costSavings: '$1.8M annually',
        efficiencyGain: '300%',
        roi: '450%',
        timeline: '12 months'
      },
      featured: true,
      image: '/case-studies/manufacturing-efficiency.jpg',
      date: '2025-01-10',
      readTime: '10 min read'
    },
    {
      id: 'financial-risk-management',
      title: 'Financial Services Firm Reduces Risk by 65% with AI-Powered Analytics',
      industry: 'financial',
      service: 'ai-analytics',
      company: 'SecureBank Financial',
      description: 'Deployed advanced AI analytics platform for real-time risk assessment and fraud detection.',
      challenge: 'High fraud rates, manual risk assessment processes, and regulatory compliance requirements.',
      solution: 'Implemented AI-powered risk management platform with real-time fraud detection and automated compliance monitoring.',
      results: [
        '65% reduction in fraud incidents',
        '90% faster risk assessment',
        '100% regulatory compliance',
        'Real-time transaction monitoring'
      ],
      metrics: {
        costSavings: '$3.2M annually',
        riskReduction: '65%',
        roi: '280%',
        timeline: '10 months'
      },
      featured: true,
      image: '/case-studies/financial-risk-management.jpg',
      date: '2025-01-08',
      readTime: '12 min read'
    },
    {
      id: 'retail-customer-experience',
      title: 'Retail Chain Enhances Customer Experience with AI-Powered Personalization',
      industry: 'retail',
      service: 'ai-analytics',
      company: 'Urban Retail Group',
      description: 'Implemented AI-powered customer analytics and personalized marketing automation.',
      challenge: 'Generic customer experiences, low conversion rates, and inefficient marketing campaigns.',
      solution: 'Deployed AI-powered customer analytics platform with personalized marketing automation and real-time insights.',
      results: [
        '45% increase in customer engagement',
        '35% improvement in conversion rates',
        '50% reduction in marketing costs',
        'Personalized customer experiences'
      ],
      metrics: {
        revenueIncrease: '$4.1M annually',
        engagementGain: '45%',
        roi: '380%',
        timeline: '6 months'
      },
      featured: false,
      image: '/case-studies/retail-customer-experience.jpg',
      date: '2025-01-05',
      readTime: '9 min read'
    },
    {
      id: 'education-learning-platform',
      title: 'University Implements AI-Powered Learning Platform for Student Success',
      industry: 'education',
      service: 'digital-transformation',
      company: 'TechState University',
      description: 'Transformed traditional learning with AI-powered adaptive learning platform and student analytics.',
      challenge: 'Low student engagement, high dropout rates, and lack of personalized learning paths.',
      solution: 'Deployed AI-powered adaptive learning platform with personalized curriculum and real-time student analytics.',
      results: [
        '40% improvement in student engagement',
        '25% reduction in dropout rates',
        '35% increase in graduation rates',
        'Personalized learning paths'
      ],
      metrics: {
        costSavings: '$1.2M annually',
        engagementGain: '40%',
        roi: '250%',
        timeline: '14 months'
      },
      featured: false,
      image: '/case-studies/education-learning-platform.jpg',
      date: '2025-01-03',
      readTime: '11 min read'
    },
    {
      id: 'government-digital-services',
      title: 'Government Agency Modernizes Citizen Services with Digital Transformation',
      industry: 'government',
      service: 'digital-transformation',
      company: 'City of Innovation',
      description: 'Modernized government services with digital platforms and AI-powered citizen engagement tools.',
      challenge: 'Outdated systems, long processing times, and poor citizen satisfaction.',
      solution: 'Implemented comprehensive digital transformation with AI-powered citizen services and automated workflows.',
      results: [
        '70% reduction in processing times',
        '85% improvement in citizen satisfaction',
        '60% reduction in operational costs',
        '24/7 digital service availability'
      ],
      metrics: {
        costSavings: '$2.8M annually',
        efficiencyGain: '70%',
        roi: '320%',
        timeline: '18 months'
      },
      featured: false,
      image: '/case-studies/government-digital-services.jpg',
      date: '2024-12-28',
      readTime: '13 min read'
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesIndustry && matchesService && matchesSearch;
  });

  const featuredCaseStudies = filteredCaseStudies.filter(study => study.featured);
  const regularCaseStudies = filteredCaseStudies.filter(study => !study.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Explore real-world success stories and implementation results from our clients across various industries. See how our AI-powered solutions drive measurable business outcomes."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container-responsive relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success Stories &
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Real Results
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how our AI-powered solutions have transformed businesses across industries, 
              delivering measurable results and driving innovation.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { metric: '24+', label: 'Case Studies', icon: Target },
                { metric: '98%', label: 'Success Rate', icon: CheckCircle },
                { metric: '320%', label: 'Average ROI', icon: TrendingUp },
                { metric: '6', label: 'Industries', icon: Building2 }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.metric}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-slate-700/50">
        <div className="container-responsive">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Industry Filter */}
            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedIndustry === industry.id
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white border border-slate-600/50'
                  }`}
                >
                  {industry.icon && <industry.icon className="w-4 h-4" />}
                  {industry.name}
                  <span className="text-xs opacity-75">({industry.count})</span>
                </button>
              ))}
            </div>

            {/* Service Filter */}
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedService === service.id
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white border border-slate-600/50'
                  }`}
                >
                  {service.icon && <service.icon className="w-4 h-4" />}
                  {service.name}
                  <span className="text-xs opacity-75">({service.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {featuredCaseStudies.length > 0 && (
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Featured Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most impactful implementations that showcase the transformative power 
                of our AI-powered solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden hover:border-cyan-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/10"
                >
                  {/* Case Study Header */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                        Featured
                      </span>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {new Date(study.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{study.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {study.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {study.company}
                      </span>
                    </div>

                    {/* Key Results */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Results</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {study.results.slice(0, 4).map((result, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                        <div className="text-2xl font-bold text-cyan-400">{study.metrics.roi}</div>
                        <div className="text-xs text-gray-400">ROI</div>
                      </div>
                      <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                        <div className="text-2xl font-bold text-green-400">{study.metrics.costSavings}</div>
                        <div className="text-xs text-gray-400">Annual Savings</div>
                      </div>
                    </div>

                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors group-hover:translate-x-1"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Case Studies */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              All Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete collection of success stories and implementation results 
              across different industries and services.
            </p>
          </motion.div>

          {regularCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-700/50 rounded-xl border border-slate-600/50 overflow-hidden hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2 py-1 bg-slate-600/50 text-gray-300 text-xs font-medium rounded-full">
                        {study.industry.charAt(0).toUpperCase() + study.industry.slice(1)}
                      </span>
                      <div className="text-xs text-gray-400">
                        {new Date(study.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{study.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm line-clamp-3">{study.description}</p>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                      <Users className="w-4 h-4" />
                      {study.company}
                    </div>

                    {/* Quick Results */}
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Key Results:</div>
                      <div className="space-y-1">
                        {study.results.slice(0, 2).map((result, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-sm"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No case studies found</h3>
              <p className="text-gray-400">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI-powered solutions can help you achieve 
              similar results and transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
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
    </div>
  );
};

export default CaseStudies;
