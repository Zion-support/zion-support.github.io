import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Star,
  Award,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Heart,
  Globe,
  Building,
  ChartBar,
  Lightbulb,
  Cog,
  BarChart3,
  PieChart,
  Activity,
  TrendingDown,
  Eye,
  Download,
  Share2,
  ExternalLink,
  Filter,
  Search,
  Industry,
  Briefcase,
  Cpu,
  Database,
  Network,
  Lock,
  Key,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Server,
  HardDrive,
  Wifi,
  Bluetooth,
  Satellite,
  Radio,
  Antenna
} from 'lucide-react';

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building, count: 24 },
    { id: 'healthcare', name: 'Healthcare', icon: Heart, count: 6 },
    { id: 'finance', name: 'Financial Services', icon: DollarSign, count: 5 },
    { id: 'manufacturing', name: 'Manufacturing', icon: Cog, count: 4 },
    { id: 'retail', name: 'Retail & E-commerce', icon: ShoppingCart, count: 3 },
    { id: 'technology', name: 'Technology', icon: Cpu, count: 3 },
    { id: 'energy', name: 'Energy & Utilities', icon: Zap, count: 2 },
    { id: 'education', name: 'Education', icon: GraduationCap, count: 1 }
  ];

  const services = [
    { id: 'all', name: 'All Services', icon: Cog, count: 24 },
    { id: 'ai-analytics', name: 'AI & Analytics', icon: Brain, count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 6 },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, count: 5 },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Rocket, count: 3 },
    { id: 'iot-edge', name: 'IoT & Edge Computing', icon: Network, count: 2 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Diagnostic Platform for Regional Hospital Network',
      client: 'Mid-Atlantic Healthcare System',
      industry: 'healthcare',
      services: ['ai-analytics', 'digital-transformation'],
      challenge: 'A regional hospital network needed to improve diagnostic accuracy and reduce patient wait times while maintaining high standards of care.',
      solution: 'Implemented an AI-powered diagnostic platform that combines machine learning algorithms with medical imaging analysis to provide rapid, accurate diagnoses.',
      results: [
        '95% improvement in diagnostic accuracy',
        '60% reduction in patient wait times',
        '40% increase in radiologist productivity',
        '$2.3M annual cost savings'
      ],
      metrics: {
        accuracy: 95,
        efficiency: 60,
        productivity: 40,
        savings: 2.3
      },
      duration: '8 months',
      teamSize: 12,
      featured: true,
      image: '/api/placeholder/400/250',
      tags: ['AI Diagnostics', 'Healthcare', 'Machine Learning', 'Productivity']
    },
    {
      id: 2,
      title: 'Zero-Trust Security Architecture for Global Financial Institution',
      client: 'Fortune 500 Bank',
      industry: 'finance',
      services: ['cybersecurity', 'digital-transformation'],
      challenge: 'A major international bank needed to modernize their security infrastructure to protect against increasingly sophisticated cyber threats while maintaining compliance with global regulations.',
      solution: 'Designed and implemented a comprehensive zero-trust security architecture with AI-powered threat detection and automated response systems.',
      results: [
        '99.9% threat detection rate',
        '85% reduction in security incidents',
        '70% faster incident response time',
        'Full regulatory compliance achieved'
      ],
      metrics: {
        detection: 99.9,
        incidents: 85,
        response: 70,
        compliance: 100
      },
      duration: '12 months',
      teamSize: 18,
      featured: true,
      image: '/api/placeholder/400/250',
      tags: ['Cybersecurity', 'Zero Trust', 'Compliance', 'AI Security']
    },
    {
      id: 3,
      title: 'Cloud-Native Microservices Platform for E-commerce Giant',
      client: 'Leading Online Retailer',
      industry: 'retail',
      services: ['cloud-devops', 'digital-transformation'],
      challenge: 'A major e-commerce platform needed to scale their infrastructure to handle 10x traffic during peak shopping seasons while reducing operational costs.',
      solution: 'Built a cloud-native microservices architecture with automated scaling, container orchestration, and CI/CD pipelines for rapid deployment.',
      results: [
        '10x traffic handling capacity',
        '80% reduction in infrastructure costs',
        '99.99% uptime during peak periods',
        '90% faster deployment cycles'
      ],
      metrics: {
        capacity: 1000,
        costs: 80,
        uptime: 99.99,
        deployment: 90
      },
      duration: '10 months',
      teamSize: 15,
      featured: false,
      image: '/api/placeholder/400/250',
      tags: ['Cloud Native', 'Microservices', 'DevOps', 'Scalability']
    },
    {
      id: 4,
      title: 'IoT-Based Predictive Maintenance for Manufacturing Plant',
      client: 'Industrial Manufacturing Corp',
      industry: 'manufacturing',
      services: ['iot-edge', 'ai-analytics'],
      challenge: 'A large manufacturing facility needed to reduce unplanned downtime and optimize maintenance schedules to improve production efficiency.',
      solution: 'Deployed IoT sensors throughout the facility and implemented AI-powered predictive maintenance algorithms to forecast equipment failures.',
      results: [
        '75% reduction in unplanned downtime',
        '45% decrease in maintenance costs',
        '30% improvement in production efficiency',
        '$1.8M annual savings'
      ],
      metrics: {
        downtime: 75,
        costs: 45,
        efficiency: 30,
        savings: 1.8
      },
      duration: '6 months',
      teamSize: 8,
      featured: false,
      image: '/api/placeholder/400/250',
      tags: ['IoT', 'Predictive Maintenance', 'Manufacturing', 'AI Analytics']
    },
    {
      id: 5,
      title: 'AI-Powered Compliance Automation for Insurance Company',
      client: 'National Insurance Provider',
      industry: 'finance',
      services: ['ai-analytics', 'cybersecurity'],
      challenge: 'An insurance company needed to automate compliance processes and reduce manual review time while ensuring regulatory accuracy.',
      solution: 'Developed an AI compliance assistant that automates document review, risk assessment, and regulatory reporting with natural language processing.',
      results: [
        '90% automation of compliance processes',
        '75% reduction in review time',
        '99.5% compliance accuracy rate',
        '$1.2M annual cost savings'
      ],
      metrics: {
        automation: 90,
        time: 75,
        accuracy: 99.5,
        savings: 1.2
      },
      duration: '7 months',
      teamSize: 10,
      featured: false,
      image: '/api/placeholder/400/250',
      tags: ['AI Compliance', 'Automation', 'Insurance', 'Regulatory']
    },
    {
      id: 6,
      title: 'Digital Twin Implementation for Energy Grid Management',
      client: 'Regional Energy Utility',
      industry: 'energy',
      services: ['iot-edge', 'ai-analytics'],
      challenge: 'A utility company needed to optimize energy distribution and predict demand patterns to reduce waste and improve service reliability.',
      solution: 'Created a comprehensive digital twin of the energy grid with real-time monitoring, predictive analytics, and automated optimization.',
      results: [
        '25% reduction in energy waste',
        '40% improvement in demand prediction',
        '99.5% service reliability',
        '$3.1M annual savings'
      ],
      metrics: {
        waste: 25,
        prediction: 40,
        reliability: 99.5,
        savings: 3.1
      },
      duration: '14 months',
      teamSize: 20,
      featured: false,
      image: '/api/placeholder/400/250',
      tags: ['Digital Twin', 'Energy', 'IoT', 'Predictive Analytics']
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.services.some(service => service === selectedService);
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesIndustry && matchesService && matchesSearch;
  });

  const getIndustryIcon = (industryId: string) => {
    const industry = industries.find(ind => ind.id === industryId);
    return industry ? industry.icon : Building;
  };

  const getServiceIcon = (serviceId: string) => {
    const service = services.find(srv => srv.id === serviceId);
    return service ? service.icon : Cog;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Explore real-world success stories and business outcomes from our AI, cybersecurity, and digital transformation projects across various industries."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-8">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Real-world results from our AI, cybersecurity, and digital transformation projects. 
              See how we've helped organizations achieve measurable business outcomes.
            </p>
            <div className="flex items-center justify-center space-x-6 text-slate-400">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>{caseStudies.length} Case Studies</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building className="w-5 h-5" />
                <span>8 Industries</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span>Proven Results</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-slate-800/30">
        <div className="container mx-auto px-4">
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

            {/* Industry Filter */}
            <div className="flex items-center space-x-4">
              <span className="text-slate-300 font-medium">Industry:</span>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                {industries.map((industry) => (
                  <option key={industry.id} value={industry.id}>
                    {industry.name} ({industry.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Service Filter */}
            <div className="flex items-center space-x-4">
              <span className="text-slate-300 font-medium">Service:</span>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
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

      {/* Featured Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Success Stories</h2>
            <p className="text-lg text-slate-300">Highlighting our most impactful and innovative projects</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.filter(study => study.featured).map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                      <getIndustryIcon(study.industry) className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{study.client}</h3>
                      <p className="text-slate-400 text-sm">{study.industry.replace('-', ' ').toUpperCase()}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-slate-400 text-sm">Featured</span>
                  </div>
                </div>

                {/* Title and Challenge */}
                <h4 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {study.title}
                </h4>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  <strong>Challenge:</strong> {study.challenge}
                </p>

                {/* Solution */}
                <div className="mb-6">
                  <h5 className="text-white font-semibold mb-2">Solution</h5>
                  <p className="text-slate-300 leading-relaxed">{study.solution}</p>
                </div>

                {/* Key Results */}
                <div className="mb-6">
                  <h5 className="text-white font-semibold mb-3">Key Results</h5>
                  <div className="grid grid-cols-2 gap-4">
                    {study.results.slice(0, 4).map((result, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-cyan-400">{study.metrics.accuracy}%</div>
                    <div className="text-slate-400 text-sm">Accuracy</div>
                  </div>
                  <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-400">{study.metrics.efficiency}%</div>
                    <div className="text-slate-400 text-sm">Efficiency</div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-700">
                  <div className="flex items-center space-x-4 text-sm text-slate-400">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{study.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{study.teamSize} team members</span>
                    </span>
                  </div>
                  <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies Grid */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">All Case Studies</h2>
            <p className="text-lg text-slate-300">Complete collection of our successful implementations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCaseStudies.filter(study => !study.featured).map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-xl rounded-xl p-6 border border-slate-700/30 hover:border-cyan-400/20 transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                      <getIndustryIcon(study.industry) className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-slate-400 text-xs font-medium">
                      {study.industry.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {study.services.slice(0, 2).map((service, idx) => (
                      <div key={idx} className="w-6 h-6 bg-slate-700 rounded flex items-center justify-center">
                        <getServiceIcon(service) className="w-3 h-3 text-blue-400" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-cyan-400 transition-colors">
                  {study.title}
                </h3>

                {/* Client */}
                <p className="text-cyan-400 font-semibold text-sm mb-3">{study.client}</p>

                {/* Challenge Preview */}
                <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-3">
                  <strong>Challenge:</strong> {study.challenge}
                </p>

                {/* Key Results */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold text-sm mb-2">Key Results</h4>
                  <div className="space-y-1">
                    {study.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300 text-xs">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <div className="flex items-center space-x-3 text-xs text-slate-400">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{study.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{study.teamSize}</span>
                    </span>
                  </div>
                  <button className="px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold">
                    Read More <ArrowRight className="w-3 h-3 inline ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 rounded-3xl p-12 text-center border border-cyan-400/30"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Success Story</span>?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI, cybersecurity, and digital transformation solutions 
              can help your organization achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </a>
              <a
                href="/request-quote"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
