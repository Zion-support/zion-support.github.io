import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Users, 
  Target, 
  Award,
  ArrowRight,
  Filter,
  Search,
  Building,
  Globe,
  Zap,
  Brain,
  Shield,
  Rocket
} from 'lucide-react';

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const industries = [
    { id: 'all', name: 'All Industries', count: 25 },
    { id: 'healthcare', name: 'Healthcare', count: 8 },
    { id: 'finance', name: 'Financial Services', count: 6 },
    { id: 'manufacturing', name: 'Manufacturing', count: 5 },
    { id: 'retail', name: 'Retail & E-commerce', count: 4 },
    { id: 'technology', name: 'Technology', count: 2 }
  ];

  const services = [
    { id: 'all', name: 'All Services', count: 25 },
    { id: 'ai-analytics', name: 'AI & Analytics', count: 12 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 8 },
    { id: 'cloud-devops', name: 'Cloud & DevOps', count: 5 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Analytics Platform',
      client: 'MetroHealth Systems',
      industry: 'healthcare',
      service: 'ai-analytics',
      challenge: 'Large healthcare system struggling with patient data analysis and predictive insights.',
      solution: 'Implemented AI-powered analytics platform with machine learning algorithms for patient outcome prediction.',
      results: [
        { metric: 'Patient Readmission Rate', before: '18%', after: '8%', improvement: '55%' },
        { metric: 'Cost Savings', before: '$0', after: '$2.4M', improvement: 'Annual' },
        { metric: 'Analysis Time', before: '48 hours', after: '2 hours', improvement: '96%' }
      ],
      duration: '6 months',
      teamSize: '8 people',
      featured: true,
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Cybersecurity Transformation for Financial Institution',
      client: 'First National Bank',
      industry: 'finance',
      service: 'cybersecurity',
      challenge: 'Traditional security measures unable to keep up with evolving cyber threats.',
      solution: 'Deployed AI-powered threat detection system with zero-trust architecture.',
      results: [
        { metric: 'Threat Detection', before: '65%', after: '98%', improvement: '51%' },
        { metric: 'Response Time', before: '4 hours', after: '15 minutes', improvement: '94%' },
        { metric: 'Security Incidents', before: '12/month', after: '2/month', improvement: '83%' }
      ],
      duration: '4 months',
      teamSize: '6 people',
      featured: true,
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Cloud Migration & DevOps Automation',
      client: 'TechCorp Solutions',
      industry: 'technology',
      service: 'cloud-devops',
      challenge: 'Legacy infrastructure causing deployment delays and scalability issues.',
      solution: 'Migrated to cloud-native architecture with automated CI/CD pipelines.',
      results: [
        { metric: 'Deployment Time', before: '2 weeks', after: '2 hours', improvement: '99%' },
        { metric: 'Infrastructure Costs', before: '$50K/month', after: '$25K/month', improvement: '50%' },
        { metric: 'System Uptime', before: '95%', after: '99.9%', improvement: '5%' }
      ],
      duration: '8 months',
      teamSize: '10 people',
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'AI Sales Automation Platform',
      client: 'Global Manufacturing Co.',
      industry: 'manufacturing',
      service: 'ai-analytics',
      challenge: 'Manual sales processes limiting growth and customer engagement.',
      solution: 'Built AI-powered sales automation platform with predictive lead scoring.',
      results: [
        { metric: 'Sales Conversion', before: '12%', after: '28%', improvement: '133%' },
        { metric: 'Revenue Growth', before: '$10M', after: '$18M', improvement: '80%' },
        { metric: 'Sales Cycle', before: '45 days', after: '28 days', improvement: '38%' }
      ],
      duration: '5 months',
      teamSize: '7 people',
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Retail Analytics & Personalization',
      client: 'StyleMart Retail',
      industry: 'retail',
      service: 'ai-analytics',
      challenge: 'Generic customer experience leading to low engagement and sales.',
      solution: 'Implemented AI-driven customer analytics and personalized recommendations.',
      results: [
        { metric: 'Customer Engagement', before: '35%', after: '68%', improvement: '94%' },
        { metric: 'Average Order Value', before: '$85', after: '$142', improvement: '67%' },
        { metric: 'Customer Retention', before: '45%', after: '78%', improvement: '73%' }
      ],
      duration: '7 months',
      teamSize: '9 people',
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'Quantum Computing Research Platform',
      client: 'National Research Institute',
      industry: 'technology',
      service: 'ai-analytics',
      challenge: 'Complex computational problems requiring quantum-level processing power.',
      solution: 'Developed quantum computing platform with AI optimization algorithms.',
      results: [
        { metric: 'Processing Speed', before: '100x', after: '1000x', improvement: '10x' },
        { metric: 'Research Efficiency', before: '60%', after: '95%', improvement: '58%' },
        { metric: 'Breakthroughs', before: '2/year', after: '8/year', improvement: '300%' }
      ],
      duration: '12 months',
      teamSize: '15 people',
      featured: true,
      image: '/api/placeholder/400/250'
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesIndustry && matchesService && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Explore real-world success stories and business outcomes from our AI and technology solutions across various industries."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Stories
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how our AI and technology solutions have transformed businesses across industries, 
              delivering measurable results and driving innovation.
            </p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
              <div className="text-slate-400">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">$50M+</div>
              <div className="text-slate-400">Value Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-slate-400">Industries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-slate-400">Success Rate</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Industry Filter */}
              <div className="flex items-center space-x-2">
                <Building className="w-5 h-5 text-slate-400" />
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                >
                  {industries.map(industry => (
                    <option key={industry.id} value={industry.id}>
                      {industry.name} ({industry.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Service Filter */}
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-slate-400" />
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
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
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border ${
                  study.featured 
                    ? 'border-cyan-400/50 bg-gradient-to-br from-slate-800/50 to-cyan-900/20' 
                    : 'border-slate-700/50'
                } hover:border-cyan-400/50 transition-all duration-300`}
              >
                {study.featured && (
                  <div className="px-6 py-3 bg-cyan-500/20 border-b border-cyan-400/20">
                    <div className="flex items-center text-cyan-400 text-sm font-semibold">
                      <Award className="w-4 h-4 mr-2" />
                      Featured Case Study
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                        {study.industry.charAt(0).toUpperCase() + study.industry.slice(1)}
                      </span>
                      <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                        {study.service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-cyan-400 font-semibold">{study.client}</p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="mb-6 space-y-4">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Challenge</h4>
                      <p className="text-slate-300 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Solution</h4>
                      <p className="text-slate-300 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Results</h4>
                    <div className="space-y-3">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                          <div className="text-slate-300 text-sm">{result.metric}</div>
                          <div className="flex items-center space-x-3">
                            <div className="text-slate-400 text-sm">
                              {result.before} → {result.after}
                            </div>
                            <div className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">
                              {result.improvement}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex items-center justify-between text-sm text-slate-400 mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{study.teamSize}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>View Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-slate-400 text-lg mb-4">No case studies found matching your criteria</div>
              <button
                onClick={() => {
                  setSelectedIndustry('all');
                  setSelectedService('all');
                  setSearchQuery('');
                }}
                className="px-6 py-3 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your Own
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Success Story?
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Let's discuss how our AI and technology solutions can transform your business 
              and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </a>
              <a
                href="/services-overview"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Explore Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
