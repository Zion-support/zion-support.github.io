import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  Building2,
  Heart,
  Factory,
  GraduationCap,
  Shield,
  Globe
} from 'lucide-react';

const CaseStudies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', count: 15, icon: Building2 },
    { id: 'healthcare', name: 'Healthcare', count: 4, icon: Heart },
    { id: 'manufacturing', name: 'Manufacturing', count: 3, icon: Factory },
    { id: 'finance', name: 'Financial Services', count: 3, icon: DollarSign },
    { id: 'education', name: 'Education', count: 2, icon: GraduationCap },
    { id: 'government', name: 'Government', count: 2, icon: Shield },
    { id: 'retail', name: 'Retail', count: 1, icon: Users }
  ];

  const services = [
    { id: 'all', name: 'All Services', count: 15 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 6 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 4 },
    { id: 'cloud', name: 'Cloud & DevOps', count: 3 },
    { id: 'data', name: 'Data Analytics', count: 2 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Diagnostics Platform',
      client: 'MetroHealth Systems',
      industry: 'healthcare',
      service: 'ai-ml',
      challenge: 'MetroHealth needed to reduce diagnostic errors and improve patient outcomes while handling increasing patient volumes.',
      solution: 'Implemented an AI-powered diagnostic platform using computer vision and machine learning algorithms.',
      results: [
        '40% reduction in diagnostic errors',
        '60% faster diagnosis times',
        '25% improvement in patient outcomes',
        '$2.3M annual cost savings'
      ],
      implementation: '8 months',
      teamSize: '12 engineers',
      technologies: ['Python', 'TensorFlow', 'AWS', 'React'],
      featured: true,
      image: '🏥'
    },
    {
      id: 2,
      title: 'Zero-Trust Security Implementation',
      client: 'Global Financial Corp',
      industry: 'finance',
      service: 'cybersecurity',
      challenge: 'Global Financial needed to protect sensitive financial data and comply with strict regulatory requirements.',
      solution: 'Designed and implemented a comprehensive zero-trust security framework with continuous monitoring.',
      results: [
        '99.9% threat detection rate',
        'Zero security breaches in 18 months',
        '100% regulatory compliance',
        '40% reduction in security incidents'
      ],
      implementation: '6 months',
      teamSize: '8 security specialists',
      technologies: ['CrowdStrike', 'Okta', 'Palo Alto', 'Splunk'],
      featured: true,
      image: '🔒'
    },
    {
      id: 3,
      title: 'Smart Manufacturing Optimization',
      client: 'Precision Manufacturing Inc',
      industry: 'manufacturing',
      service: 'ai-ml',
      challenge: 'Precision Manufacturing faced production inefficiencies and quality control issues affecting profitability.',
      solution: 'Deployed IoT sensors and AI algorithms for predictive maintenance and quality control automation.',
      results: [
        '35% increase in production efficiency',
        '50% reduction in equipment downtime',
        '30% improvement in product quality',
        '$1.8M annual cost savings'
      ],
      implementation: '10 months',
      teamSize: '15 engineers',
      technologies: ['Python', 'TensorFlow', 'Azure IoT', 'Power BI'],
      featured: true,
      image: '🏭'
    },
    {
      id: 4,
      title: 'Cloud Migration & DevOps Transformation',
      client: 'TechStart Solutions',
      industry: 'retail',
      service: 'cloud',
      challenge: 'TechStart needed to scale their e-commerce platform and improve deployment efficiency.',
      solution: 'Migrated to AWS cloud infrastructure and implemented CI/CD pipelines with automated testing.',
      results: [
        '300% improvement in deployment speed',
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        '10x faster time to market'
      ],
      implementation: '7 months',
      teamSize: '10 engineers',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
      featured: false,
      image: '☁️'
    },
    {
      id: 5,
      title: 'Data Analytics & Business Intelligence',
      client: 'EduTech Innovations',
      industry: 'education',
      service: 'data',
      challenge: 'EduTech needed to analyze student performance data and provide actionable insights for educators.',
      solution: 'Built a comprehensive data analytics platform with real-time dashboards and predictive modeling.',
      results: [
        '45% improvement in student retention',
        '30% increase in academic performance',
        'Real-time insights for educators',
        'Data-driven decision making'
      ],
      implementation: '5 months',
      teamSize: '8 data scientists',
      technologies: ['Python', 'Tableau', 'PostgreSQL', 'Apache Spark'],
      featured: false,
      image: '📚'
    },
    {
      id: 6,
      title: 'Cybersecurity Incident Response Platform',
      client: 'Defense Systems Ltd',
      industry: 'government',
      service: 'cybersecurity',
      challenge: 'Defense Systems needed rapid incident response capabilities to protect critical infrastructure.',
      solution: 'Developed an automated incident response platform with AI-powered threat detection and response.',
      results: [
        '90% faster incident response time',
        'Automated threat containment',
        'Real-time security monitoring',
        'Enhanced threat intelligence'
      ],
      implementation: '9 months',
      teamSize: '12 security engineers',
      technologies: ['Python', 'Elasticsearch', 'Kafka', 'React'],
      featured: false,
      image: '🛡️'
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = searchQuery === '' || 
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.challenge.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    
    return matchesSearch && matchesIndustry && matchesService;
  });

  const getIndustryIcon = (industryId: string) => {
    const industry = industries.find(ind => ind.id === industryId);
    return industry ? industry.icon : Building2;
  };

  const getIndustryName = (industryId: string) => {
    const industry = industries.find(ind => ind.id === industryId);
    return industry ? industry.name : 'General';
  };

  const getServiceName = (serviceId: string) => {
    const service = services.find(srv => srv.id === serviceId);
    return service ? service.name : 'General';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how we've helped organizations across industries achieve remarkable results 
              through innovative technology solutions and strategic implementation.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search case studies, clients, or industries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
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
                className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
              >
                {services.map(service => (
                  <option key={service.id} value={service.id}>
                    {service.name} ({service.count})
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most impactful implementations that demonstrate the transformative power of our solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies
              .filter(study => study.featured)
              .map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{study.image}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full font-medium">
                      {getIndustryName(study.industry)}
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full font-medium">
                      {getServiceName(study.service)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    <strong>Client:</strong> {study.client}
                  </p>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {study.challenge}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mt-1 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {study.implementation}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {study.teamSize}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
                    View Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">All Case Studies</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our complete portfolio of successful implementations across various industries and services.
            </p>
          </motion.div>

          {filteredCaseStudies.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No case studies found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedIndustry('all');
                  setSelectedService('all');
                }}
                className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Clear filters
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredCaseStudies
                .filter(study => !study.featured)
                .map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{study.image}</div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full font-medium">
                          {getIndustryName(study.industry)}
                        </span>
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-medium">
                          {getServiceName(study.service)}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                      {study.title}
                    </h3>
                    <p className="text-gray-300 mb-3 text-sm">
                      <strong>Client:</strong> {study.client}
                    </p>
                    <p className="text-gray-300 mb-4 line-clamp-3 text-sm">
                      {study.challenge}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <h4 className="text-xs font-semibold text-purple-400">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                            <CheckCircle className="w-3 h-3 text-purple-400 mt-0.5 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {study.implementation}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {study.teamSize}
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 rounded-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2">
                      Read Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact by the Numbers</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Quantifying the success and value we've delivered to our clients across all industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, metric: '500+', label: 'Successful Implementations', color: 'text-cyan-400' },
              { icon: DollarSign, metric: '$50M+', label: 'Client Cost Savings', color: 'text-green-400' },
              { icon: Users, metric: '200+', label: 'Happy Clients', color: 'text-purple-400' },
              { icon: Star, metric: '98%', label: 'Client Satisfaction Rate', color: 'text-yellow-400' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.metric}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12 border border-slate-600/50"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can transform your business 
              and deliver measurable results like the ones you've seen here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="/contact"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
