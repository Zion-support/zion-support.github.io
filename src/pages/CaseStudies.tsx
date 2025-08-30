import React, { useState } from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { SEO  } from '../components/SEO';
import { TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Target, 
  CheckCircle,
  ArrowRight,
  Filter,
  Search,
  Building,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Heart,
  Globe,
  Star,
  Award,
  Zap,
  BarChart3,
  ShoppingCart
 } from 'lucide-react.ts';

export default function CaseStudies(...args[]):  {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'finance', name: 'Financial Services', icon: DollarSign },
    { id: 'manufacturing', name: 'Manufacturing', icon: Building },
    { id: 'retail', name: 'Retail & E-commerce', icon: ShoppingCart },
    { id: 'technology', name: 'Technology', icon: Brain },
    { id: 'energy', name: 'Energy & Utilities', icon: Zap },
    { id: 'government', name: 'Government', icon: Shield }
  ];

  const services = [
    { id: 'all', name: 'All Services', icon: Star },
    { id: 'ai-analytics', name: 'AI & Analytics', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Rocket },
    { id: 'iot-edge', name: 'IoT & Edge Computing', icon: Zap },
    { id: 'blockchain', name: 'Blockchain Solutions', icon: Shield },
    { id: 'healthcare-tech', name: 'Healthcare Technology', icon: Heart }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Compliance Automation for Global Bank',
      client: 'Fortune 500 Financial Institution',
      industry: 'finance',
      services['ai-analytics', 'cybersecurity'],
      challenge: 'Manual compliance processes causing delays and regulatory risks',
      solution: 'Implemented AI Compliance Copilot with natural language processing',
      results: {
        efficiency: '85%',
        costReduction: '60%',
        timeSaved: '40 hours/week',
        accuracy: '99.2%'
      },
      duration: '6 months',
      teamSize: '8',
      readMore: '/case-studies/ai-compliance-banking'
    },
    {
      id: 2,
      title: 'Digital Twin Implementation for Manufacturing Plant',
      client: 'Leading Automotive Manufacturer',
      industry: 'manufacturing',
      services['iot-edge', 'digital-transformation'],
      challenge: 'Limited visibility into production processes and equipment performance',
      solution: 'Deployed comprehensive digital twin platform with real-time monitoring',
      results: {
        efficiency: '92%',
        costReduction: '45%',
        timeSaved: '25 hours/week',
        accuracy: '98.5%'
      },
      duration: '8 months',
      teamSize: '12',
      readMore: '/case-studies/digital-twin-manufacturing'
    },
    {
      id: 3,
      title: 'Healthcare AI Diagnostic Platform',
      client: 'Regional Hospital Network',
      industry: 'healthcare',
      services['ai-analytics', 'healthcare-tech'],
      challenge: 'Long wait times for diagnostic results and limited specialist availability',
      solution: 'AI-powered diagnostic platform with machine learning algorithms',
      results: {
        efficiency: '78%',
        costReduction: '35%',
        timeSaved: '30 hours/week',
        accuracy: '96.8%'
      },
      duration: '10 months',
      teamSize: '15',
      readMore: '/case-studies/healthcare-ai-diagnostics'
    },
    {
      id: 4,
      title: 'Zero Trust Security Architecture for Tech Comp',
      client: 'SaaS Technology Provider',
      industry: 'technology',
      services['cybersecurity', 'cloud-devops'],
      challenge: 'Increasing cyber threats and complex access management',
      solution: 'Implemented zero trust network architecture with AI threat detection',
      results: {
        efficiency: '88%',
        costReduction: '50%',
        timeSaved: '35 hours/week',
        accuracy: '99.5%'
      },
      duration: '7 months',
      teamSize: '10',
      readMore: '/case-studies/zero-trust-security'
    },
    {
      id: 5,
      title: 'Cloud FinOps Optimization for Enterprise',
      client: 'Global Retail Corporation',
      industry: 'retail',
      services['cloud-devops', 'ai-analytics'],
      challenge: 'Uncontrolled cloud costs and lack of spending visibility',
      solution: 'Cloud FinOps platform with AI-powered cost optimization',
      results: {
        efficiency: '82%',
        costReduction: '55%',
        timeSaved: '20 hours/week',
        accuracy: '97.3%'
      },
      duration: '5 months',
      teamSize: '6',
      readMore: '/case-studies/cloud-finops-retail'
    },
    {
      id: 6,
      title: 'Blockchain Supply Chain Solution',
      client: 'International Logistics Comp',
      industry: 'manufacturing',
      services['blockchain', 'iot-edge'],
      challenge: 'Supply chain transparency and counterfeit prevention',
      solution: 'Blockchain-based supply chain tracking with IoT sensors',
      results: {
        efficiency: '90%',
        costReduction: '40%',
        timeSaved: '28 hours/week',
        accuracy: '99.1%'
      },
      duration: '9 months',
      teamSize: '14',
      readMore: '/case-studies/blockchain-supply-chain'
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.services.includes(selectedService);
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesIndustry && matchesService && matchesSearch});

  const stats = [
    { label: 'Projects Completed', value: '150+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Average ROI', value: '340%', icon: TrendingUp },
    { label: 'Time to Value', value: '6 months', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Explore real-world success stories and business outcomes from our AI and technology implementations."
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl mb-8"
          >
            <BarChart3 className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            Success Stories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-12"
          >
            Discover how we've helped organizations across industries achieve remarkable 
            results through innovative AI and technology solutions.
          </motion.p>
          
          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md: grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index)  => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Industry Filter */}
              <div className="relative">
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="appearance-none px-4 py-3 pr-10 rounded-lg bg-slate-800 border border-slate-600 focus: border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white text-sm"
                >
                  {industries.map((industry)  => (
                    <option key={industry.id} value={industry.id}>
                      {industry.name}
                    </option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
              </div>

              {/* Service Filter */}
              <div className="relative">
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="appearance-none px-4 py-3 pr-10 rounded-lg bg-slate-800 border border-slate-600 focus: border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white text-sm"
                >
                  {services.map((service)  => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">
            {filteredCaseStudies.map((study, index)  => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full">
                      {industries.find(i => i.id === study.industry)?.name}
                    </span>
                    <div className="flex items-center space-x-2 text-sm text-slate-400">
                      <Clock className="w-4 h-4" />
                      <span>{study.duration}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2">
                    {study.title}
                  </h3>
                  
                  <p className="text-cyan-400 font-medium">{study.client}</p>
                </div>

                {/* Challenge & Solution */}
                <div className="mb-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                      <Target className="w-4 h-4 mr-2 text-red-400" />
                      Challenge
                    </h4>
                    <p className="text-slate-300 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      Solution
                    </h4>
                    <p className="text-slate-300 text-sm">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Results</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                      <div className="text-2xl font-bold text-cyan-400">{study.results.efficiency}</div>
                      <div className="text-xs text-slate-400">Efficiency</div>
                    </div>
                    <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                      <div className="text-2xl font-bold text-green-400">{study.results.costReduction}</div>
                      <div className="text-xs text-slate-400">Cost Reduction</div>
                    </div>
                    <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                      <div className="text-2xl font-bold text-purple-400">{study.results.timeSaved}</div>
                      <div className="text-xs text-slate-400">Time Saved</div>
                    </div>
                    <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                      <div className="text-2xl font-bold text-yellow-400">{study.results.accuracy}</div>
                      <div className="text-xs text-slate-400">Accuracy</div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                  <div className="flex items-center space-x-4 text-sm text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{study.teamSize} team members</span>
                    </div>
                  </div>
                  
                  <a 
                    href={study.readMore}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-slate-700/50 rounded-full flex items-center justify-center">
                <Search className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No case studies found</h3>
              <p className="text-slate-400">Try adjusting your filters or search terms</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Start Your Success Story?</h2>
            <p className="text-slate-300 mb-8">
              Let's discuss how our AI and technology solutions can transform your business 
              and deliver measurable results like the ones you've seen here.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a 
                href="/request-quote"
                className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Request a Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )}
