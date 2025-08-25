import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Filter,
  Search,
  Globe,
  Brain,
  Shield,
  Cloud,
  Database
} from 'lucide-react';

const CaseStudies: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Globe, color: 'from-zion-purple to-zion-cyan' },
    { id: 'healthcare', name: 'Healthcare', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { id: 'finance', name: 'Financial Services', icon: DollarSign, color: 'from-green-500 to-emerald-500' },
    { id: 'manufacturing', name: 'Manufacturing', icon: Building, color: 'from-orange-500 to-red-500' },
    { id: 'retail', name: 'Retail & E-commerce', icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
    { id: 'technology', name: 'Technology', icon: Brain, color: 'from-indigo-500 to-blue-500' }
  ];

  const services = [
    { id: 'all', name: 'All Services', icon: Brain },
    { id: 'ai', name: 'AI Solutions', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'data', name: 'Data Analytics', icon: Database },
    { id: 'quantum', name: 'Quantum Technology', icon: Brain }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Analytics Platform',
      client: 'MedTech Solutions Inc.',
      industry: 'healthcare',
      service: 'ai',
      challenge: 'Complex patient data analysis and predictive modeling for early disease detection.',
      solution: 'Developed an AI-powered analytics platform using machine learning algorithms and neural networks.',
      results: [
        '40% improvement in early disease detection accuracy',
        '60% reduction in analysis time',
        '$2.5M annual cost savings',
        '99.9% system uptime achieved'
      ],
      duration: '6 months',
      team: '12 developers',
      technologies: ['Python', 'TensorFlow', 'AWS', 'React'],
      image: '/case-studies/healthcare-ai.jpg'
    },
    {
      id: 2,
      title: 'Quantum-Secured Financial Trading System',
      client: 'Global Capital Markets',
      industry: 'finance',
      service: 'quantum',
      challenge: 'Secure, high-frequency trading system with quantum-resistant encryption.',
      solution: 'Implemented quantum key distribution and post-quantum cryptography for ultra-secure trading.',
      results: [
        'Zero security breaches in 18 months',
        '50% faster trade execution',
        '$15M additional trading revenue',
        'Regulatory compliance achieved'
      ],
      duration: '8 months',
      team: '15 developers',
      technologies: ['Quantum SDK', 'Go', 'Kubernetes', 'PostgreSQL'],
      image: '/case-studies/quantum-finance.jpg'
    },
    {
      id: 3,
      title: 'Autonomous Manufacturing Optimization',
      client: 'SmartFactory Corp',
      industry: 'manufacturing',
      service: 'ai',
      challenge: 'Real-time production optimization and predictive maintenance for 24/7 operations.',
      solution: 'Deployed AI autonomous systems for predictive analytics and automated decision-making.',
      results: [
        '35% increase in production efficiency',
        '80% reduction in unplanned downtime',
        '$8M annual cost savings',
        'ROI achieved in 14 months'
      ],
      duration: '10 months',
      team: '18 developers',
      technologies: ['Python', 'PyTorch', 'IoT', 'Azure'],
      image: '/case-studies/manufacturing-ai.jpg'
    },
    {
      id: 4,
      title: 'Cybersecurity Threat Intelligence Platform',
      client: 'SecureNet Defense',
      industry: 'technology',
      service: 'cybersecurity',
      challenge: 'Advanced threat detection and automated response for enterprise security.',
      solution: 'Built an AI-powered threat intelligence platform with real-time monitoring and response.',
      results: [
        '95% threat detection accuracy',
        '90% faster incident response',
        'Zero successful breaches',
        'SOC2 compliance achieved'
      ],
      duration: '7 months',
      team: '14 developers',
      technologies: ['Python', 'Elasticsearch', 'React', 'Docker'],
      image: '/case-studies/cybersecurity.jpg'
    },
    {
      id: 5,
      title: 'Cloud-Native E-commerce Platform',
      client: 'RetailTech Solutions',
      industry: 'retail',
      service: 'cloud',
      challenge: 'Scalable, high-performance e-commerce platform for peak shopping seasons.',
      solution: 'Developed a microservices-based platform with auto-scaling and CDN optimization.',
      results: [
        '99.99% uptime during peak seasons',
        '10x faster page load times',
        '300% increase in conversion rates',
        '50% reduction in infrastructure costs'
      ],
      duration: '9 months',
      team: '20 developers',
      technologies: ['Node.js', 'React', 'AWS', 'MongoDB'],
      image: '/case-studies/ecommerce-cloud.jpg'
    },
    {
      id: 6,
      title: 'Big Data Analytics for Retail Insights',
      client: 'DataDriven Retail',
      industry: 'retail',
      service: 'data',
      challenge: 'Processing and analyzing massive amounts of customer and transaction data.',
      solution: 'Implemented a big data pipeline with real-time analytics and machine learning insights.',
      results: [
        'Real-time data processing',
        '25% increase in customer retention',
        '40% improvement in inventory management',
        '$12M additional revenue generated'
      ],
      duration: '5 months',
      team: '16 developers',
      technologies: ['Apache Spark', 'Python', 'Kafka', 'React'],
      image: '/case-studies/retail-analytics.jpg'
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesIndustry && matchesService && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Case <span className="text-gradient">Studies</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Real-world transformations and measurable business outcomes delivered 
              through our cutting-edge AI and technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-zion-slate/20 rounded-2xl p-6 backdrop-blur-sm">
            <div className="grid md:grid-cols-4 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate/30 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                />
              </div>

              {/* Industry Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate/30 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 appearance-none"
                >
                  {industries.map(industry => (
                    <option key={industry.id} value={industry.id} className="bg-zion-slate text-white">
                      {industry.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate/30 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 appearance-none"
                >
                  {services.map(service => (
                    <option key={service.id} value={service.id} className="bg-zion-slate text-white">
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-center justify-center">
                <span className="text-zion-slate-light">
                  {filteredCaseStudies.length} case studies found
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredCaseStudies.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate/20 rounded-2xl p-6 backdrop-blur-sm border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Building className="w-5 h-5 text-zion-cyan" />
                      <span className="text-sm text-zion-slate-light capitalize">{study.industry}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-zion-cyan font-medium">{study.client}</p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="mb-6 space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Challenge</h4>
                      <p className="text-sm text-zion-slate-light">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Solution</h4>
                      <p className="text-sm text-zion-slate-light">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-zion-slate-light">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Details */}
                  <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-zion-slate-light">Duration:</span>
                      <p className="text-white font-medium">{study.duration}</p>
                    </div>
                    <div>
                      <span className="text-zion-slate-light">Team Size:</span>
                      <p className="text-white font-medium">{study.team}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors group"
                  >
                    <span className="font-medium">View Full Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-zion-slate/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-zion-slate-light" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No Case Studies Found</h3>
              <p className="text-zion-slate-light mb-8">
                Try adjusting your filters or search terms to find relevant case studies.
              </p>
              <button
                onClick={() => {
                  setSelectedIndustry('all');
                  setSelectedService('all');
                  setSearchTerm('');
                }}
                className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how our AI and technology expertise can transform your business 
              and deliver measurable results like the ones you've seen above.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;