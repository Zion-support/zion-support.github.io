import { ArrowRight, Users, TrendingUp, Clock, DollarSign, Globe } from 'lucide-react';
export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      company: 'Global Retail Corp',
      industry: 'Retail',
      challenge: 'High customer service costs and long response times affecting customer satisfaction',
      solution: 'Implemented AI-powered chatbots and intelligent routing system',
      results: [
        '40% reduction in customer service costs',
        '85% improvement in response time',
        '92% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      duration: '6 months',
      investment: '$250,000',
      roi: '320%',
      technologies: ['AI/ML', 'NLP', 'Cloud Computing', 'API Integration']
    },
    {
      id: 2,
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import {
  Brain,
  Cloud,
  Shield,
  Zap,
  Rocket,
  Users,
  Globe,
  CheckCircle,
  Star,
  ArrowRight,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  BarChart3,
  Database,
  Network,
  Server,
  Eye,
  BrainCircuit,
  GitBranch,
  RefreshCw,
  Briefcase,
  BarChart,
  ShieldCheck,
  Atom,
  BrainCircuit2
} from 'lucide-react';

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const categories = [
    { id: 'all', name: 'All Cases', icon: Globe, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 0 },
    { id: 'cloud', name: 'Cloud Infrastructure', icon: Cloud, count: 0 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 0 },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Zap, count: 0 },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Rocket, count: 0 }
  ];

  const industries = [
    { id: 'all', name: 'All Industries', count: 0 },
    { id: 'healthcare', name: 'Healthcare', count: 0 },
    { id: 'finance', name: 'Finance', count: 0 },
    { id: 'manufacturing', name: 'Manufacturing', count: 0 },
    { id: 'retail', name: 'Retail', count: 0 },
    { id: 'technology', name: 'Technology', count: 0 }
  ];

  const caseStudies = [
    {
      id: 'ai-consciousness-breakthrough',
      title: 'AI Consciousness Research Breakthrough',
      category: 'ai-ml',
      industry: 'technology',
      company: 'QuantumLabs Inc.',
      description: 'Revolutionary research in artificial consciousness that achieved self-aware AI systems',
      challenge: 'Developing truly self-aware AI systems that could understand and reason about their own existence',
      solution: 'Implemented advanced neural architecture with consciousness modeling frameworks and ethical AI guidelines',
      results: [
        'Achieved breakthrough in AI consciousness research',
        'Published 15 peer-reviewed papers in top journals',
        'Secured $50M in additional research funding',
        'Established industry-leading AI ethics framework'
      ],
      metrics: {
        researchOutput: '15 peer-reviewed papers',
        fundingSecured: '$50M',
        timeline: '18 months',
        teamSize: '25 researchers'
      },
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      id: 'quantum-ai-integration',
      title: 'Quantum AI Integration Platform',
      category: 'ai-ml',
      industry: 'finance',
      company: 'FinTech Global',
      description: 'Integration of quantum computing with AI for unprecedented financial modeling performance',
      challenge: 'Traditional AI models were too slow for real-time financial decision making',
      solution: 'Developed hybrid quantum-classical AI platform with quantum algorithm optimization',
      results: [
        '300x faster financial modeling',
        '99.9% accuracy in market predictions',
        'Reduced processing time from hours to seconds',
        'Increased trading efficiency by 500%'
      ],
      metrics: {
        performanceImprovement: '300x faster',
        accuracy: '99.9%',
        efficiencyGain: '500%',
        timeline: '12 months'
      },
      icon: Atom,
      color: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      id: 'zero-trust-security',
      title: 'Zero Trust Security Implementation',
      category: 'cybersecurity',
      industry: 'healthcare',
      company: 'MediTech Solutions',
      description: 'Comprehensive zero trust security architecture for healthcare data protection',
      challenge: 'Healthcare organization needed to protect sensitive patient data while maintaining accessibility',
      solution: 'Implemented zero trust architecture with identity verification, access control, and threat detection',
      results: [
        '100% compliance with HIPAA regulations',
        'Zero security breaches in 2 years',
        'Reduced security incidents by 95%',
        'Improved user experience while maintaining security'
      ],
      metrics: {
        compliance: '100% HIPAA',
        securityBreaches: '0 in 2 years',
        incidentReduction: '95%',
        timeline: '8 months'
      },
      icon: ShieldCheck,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'multi-cloud-strategy',
      title: 'Multi-Cloud Strategy Implementation',
      category: 'cloud',
      industry: 'manufacturing',
      company: 'Global Manufacturing Corp',
      description: 'Comprehensive multi-cloud architecture for global manufacturing operations',
      challenge: 'Legacy on-premise infrastructure couldn\'t scale with global expansion',
      solution: 'Designed and implemented multi-cloud strategy with cost optimization and security compliance',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime across global operations',
        'Scaled to 25+ countries seamlessly',
        'Improved disaster recovery capabilities'
      ],
      metrics: {
        costReduction: '50%',
        uptime: '99.9%',
        globalReach: '25+ countries',
        timeline: '10 months'
      },
      icon: Cloud,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'process-automation',
      title: 'Business Process Automation',
      category: 'digital-transformation',
      industry: 'retail',
      company: 'RetailTech Innovations',
      description: 'End-to-end business process automation for retail operations',
      challenge: 'Manual processes were causing delays and errors in retail operations',
      solution: 'Implemented comprehensive process automation with integration services and change management',
      results: [
        '70% reduction in processing time',
        '90% reduction in manual errors',
        'Improved customer satisfaction by 40%',
        'Reduced operational costs by 35%'
      ],
      metrics: {
        timeReduction: '70%',
        errorReduction: '90%',
        customerSatisfaction: '+40%',
        costReduction: '35%'
      },
      icon: Zap,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'project-management-saas',
      title: 'Project Management Platform Launch',
      category: 'micro-saas',
      industry: 'technology',
      company: 'StartupTech Solutions',
      description: 'Comprehensive project management and team collaboration platform',
      challenge: 'Startup needed scalable project management solution for growing team',
      solution: 'Developed custom SaaS platform with task management, collaboration, and analytics',
      results: [
        'Launched successful SaaS product',
        'Achieved 1000+ active users in 6 months',
        'Generated $500K in first-year revenue',
        'Reduced project delivery time by 40%'
      ],
      metrics: {
        activeUsers: '1000+',
        revenue: '$500K',
        deliveryImprovement: '40%',
        timeline: '6 months'
      },
      icon: Briefcase,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  // Update counts
  categories.forEach(category => {
    category.count = caseStudies.filter(study => 
      selectedCategory === 'all' || study.category === category.id
    ).length;
  });

  industries.forEach(industry => {
    industry.count = caseStudies.filter(study => 
      selectedIndustry === 'all' || study.industry === industry.id
    ).length;
  });

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesCategory = selectedCategory === 'all' || study.category === category.id;
    const matchesIndustry = selectedIndustry === 'all' || study.industry === industry.id;
    return matchesCategory && matchesIndustry;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO
        title="Case Studies"
        description="Real-world success stories and implementations of Zion Tech Group's technology solutions across various industries."
        keywords="case studies, success stories, AI implementation, cloud migration, cybersecurity, digital transformation"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Zion Tech Group Case Studies",
          "description": "Success stories and implementations",
          "numberOfItems": caseStudies.length
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 mr-2" />
              Real-World Success Stories
            </motion.div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Case <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Studies</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Discover how our revolutionary technology solutions have transformed businesses across industries.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Filters Section */}
      <section className="py-12 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Category Filters */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Filter by Category</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-zion-cyan text-white border-zion-cyan'
                        : 'bg-zion-slate-dark/50 text-zion-slate-light border-zion-slate/20 hover:border-zion-cyan/30'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className="bg-zion-slate/20 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Industry Filters */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Filter by Industry</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedIndustry === industry.id
                        ? 'bg-zion-cyan text-white border-zion-cyan'
                        : 'bg-zion-slate-dark/50 text-zion-slate-light border-zion-slate/20 hover:border-zion-cyan/30'
                    }`}
                  >
                    {industry.name}
                    <span className="bg-zion-slate/20 px-2 py-1 rounded-full text-xs ml-2">
                      {industry.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-zion-cyan">Success Stories</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Highlighting our most impactful implementations and breakthrough achievements.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.filter(study => study.featured).map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-xl border border-zion-slate/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                {/* Featured Badge */}
                <div className="relative">
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                  <div className={`w-full h-48 bg-gradient-to-r ${study.color} rounded-t-xl flex items-center justify-center`}>
                    <study.icon className="w-24 h-24 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                      {categories.find(c => c.id === study.category)?.name}
                    </span>
                    <span className="text-zion-slate-light text-sm">{study.company}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-zion-slate-light mb-4">{study.description}</p>

                  {/* Key Results */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2 uppercase tracking-wide">Key Results</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 3).map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="h-3 w-3 text-zion-cyan mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-zion-cyan/25">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies Grid */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              All <span className="text-zion-cyan">Case Studies</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive collection of our technology implementations and success stories.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/30 backdrop-blur-sm rounded-xl border border-zion-slate/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className={`w-full h-32 bg-gradient-to-r ${study.color} rounded-t-xl flex items-center justify-center`}>
                  <study.icon className="w-16 h-16 text-white" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                      {categories.find(c => c.id === study.category)?.name}
                    </span>
                    <span className="text-zion-slate-light text-xs">{study.company}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-zion-slate-light text-sm mb-4">{study.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {Object.entries(study.metrics).slice(0, 4).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-zion-cyan">{value}</div>
                        <div className="text-xs text-zion-slate-light capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="w-full px-4 py-2 bg-zion-slate-dark/50 text-zion-cyan font-medium rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                    View Details
                    <ArrowRight className="ml-2 h-3 w-3 inline" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-20">
              <Target className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No case studies found</h3>
              <p className="text-zion-slate-light">Try adjusting your category or industry filters.</p>
            </div>
          )}
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Let us help you achieve similar results with our proven technology solutions and expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center px-8 py-4 bg-white text-zion-slate-dark font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-slate-dark transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
      title: 'Cybersecurity Infrastructure Overhaul',
      company: 'Financial Services Inc',
      industry: 'Finance',
      challenge: 'Outdated security systems vulnerable to modern cyber threats',
      solution: 'Implemented zero-trust architecture with advanced threat detection',
      results: [
        '99.9% threat detection rate',
        'Zero security breaches in 18 months',
        '50% reduction in security incidents',
        'Full compliance with industry regulations'
      ],
      duration: '8 months',
      investment: '$500,000',
      roi: '280%',
      technologies: ['Zero Trust', 'SIEM', 'EDR', 'Threat Intelligence']
    },
    {
      id: 3,
      title: 'Cloud Migration and DevOps Transformation',
      company: 'Tech Startup XYZ',
      industry: 'Technology',
      challenge: 'Legacy infrastructure limiting scalability and deployment speed',
      solution: 'Migrated to cloud-native architecture with CI/CD pipelines',
      results: [
        '90% faster deployment cycles',
        '60% reduction in infrastructure costs',
        '99.9% uptime achieved',
        'Unlimited scalability for growth'
      ],
      duration: '4 months',
      investment: '$180,000',
      roi: '450%',
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Jenkins', 'Terraform']
    },
    {
      id: 4,
      title: 'Digital Transformation for Manufacturing',
      company: 'Industrial Manufacturing Co',
      industry: 'Manufacturing',
      challenge: 'Manual processes causing inefficiencies and quality issues',
      solution: 'Implemented IoT sensors and predictive analytics platform',
      results: [
        '25% increase in production efficiency',
        '30% reduction in quality defects',
        'Predictive maintenance preventing 80% of breakdowns',
        'Real-time monitoring and analytics'
      ],
      duration: '10 months',
      investment: '$750,000',
      roi: '180%',
      technologies: ['IoT', 'Big Data', 'Machine Learning', 'Cloud Platform']
    },
    {
      id: 5,
      title: 'Data Analytics and Business Intelligence',
      company: 'Healthcare Provider Network',
      industry: 'Healthcare',
      challenge: 'Fragmented data preventing insights and operational optimization',
      solution: 'Built centralized data warehouse with advanced analytics',
      results: [
        '360-degree patient view achieved',
        '20% improvement in treatment outcomes',
        '15% reduction in operational costs',
        'Real-time reporting and dashboards'
      ],
      duration: '7 months',
      investment: '$400,000',
      roi: '220%',
      technologies: ['Data Warehouse', 'ETL', 'Business Intelligence', 'Data Governance']
    },
    {
      id: 6,
      title: 'Legacy System Modernization',
      company: 'Government Agency',
      industry: 'Government',
      challenge: 'Outdated systems causing service delays and security risks',
      solution: 'Modernized applications with microservices architecture',
      results: [
        '70% faster service delivery',
        'Enhanced security and compliance',
        'Improved citizen experience',
        'Reduced maintenance costs'
      ],
      duration: '12 months',
      investment: '$1,200,000',
      roi: '150%',
      technologies: ['Microservices', 'API Gateway', 'Cloud Native', 'DevOps']
    }
  ];
  const industries = [
    { name: 'Retail', count: 15, icon: TrendingUp },
    { name: 'Finance', count: 12, icon: DollarSign },
    { name: 'Healthcare', count: 8, icon: Users },
    { name: 'Manufacturing', count: 10, icon: TrendingUp },
    { name: 'Technology', count: 20, icon: Globe },
    { name: 'Government', count: 6, icon: Users }
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto">
            Real-world examples of how we've helped organizations transform their business through innovative technology solutions
          </p>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">71+</div>
              <div className="text-zion-slate-dark">Successful Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-purple mb-2">$2.5M+</div>
              <div className="text-zion-slate-dark">Total Investment</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">280%</div>
              <div className="text-zion-slate-dark">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-purple mb-2">6</div>
              <div className="text-zion-slate-dark">Industries Served</div>
            </div>
          </div>
        </div>
      </section>
          </motion.div>
        </div>
      </section>
    </div>
  );
      {/* Industry Filter */}
      <section className="py-16 bg-zion-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-zion-slate-light">
              Explore case studies from your industry
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <industry.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <div className="text-lg font-semibold text-zion-slate-dark mb-1">
                  {industry.name}
                </div>
                <div className="text-sm text-zion-slate-light">
                  {industry.count} projects
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Discover how our solutions have delivered measurable results across different industries and use cases
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white border border-zion-slate-light/20 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-sm font-medium rounded-full">
                    {study.industry}
                  </span>
                  <div className="flex items-center space-x-2 text-zion-slate-light">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{study.duration}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-zion-slate-dark mb-2">
                  {study.title}
                </h3>
                <div className="flex items-center space-x-2 mb-4">
                  <Users className="w-4 h-4 text-zion-slate-light" />
                  <span className="text-zion-slate-light">{study.company}</span>
                </div>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-zion-slate-dark mb-2">Challenge:</h4>
                    <p className="text-zion-slate-light">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zion-slate-dark mb-2">Solution:</h4>
                    <p className="text-zion-slate-light">{study.solution}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-zion-slate-light/5 rounded-lg">
                    <div className="text-2xl font-bold text-zion-cyan">{study.roi}</div>
                    <div className="text-sm text-zion-slate-light">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-zion-slate-light/5 rounded-lg">
                    <div className="text-2xl font-bold text-zion-purple">${study.investment}</div>
                    <div className="text-sm text-zion-slate-light">Investment</div>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-zion-slate-dark mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-start text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-zion-slate-dark mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-zion-slate-light/10 text-zion-slate-dark rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                  View Full Case Study
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Let's discuss how our technology solutions can transform your business and deliver similar results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-zion-blue-dark font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
=======
}
