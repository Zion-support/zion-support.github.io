<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Users,
  TrendingUp,
  Award,
  ArrowRight,
  Search,
  Filter,
  Building2,
  Heart,
  Shield,
  Cloud,
  Brain,
  Zap,
  Globe,
  Clock,
  DollarSign,
  CheckCircle
} from 'lucide-react';

const CaseStudies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building2 },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'finance', name: 'Financial Services', icon: DollarSign },
    { id: 'manufacturing', name: 'Manufacturing', icon: Building2 },
    { id: 'retail', name: 'Retail & E-commerce', icon: Users },
    { id: 'government', name: 'Government', icon: Shield }
  ];

  const services = [
    { id: 'all', name: 'All Services', icon: Briefcase },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: TrendingUp },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Zap }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Analytics Platform',
      client: 'MetroHealth Systems',
      industry: 'healthcare',
      service: 'ai',
      challenge: 'MetroHealth needed to analyze vast amounts of patient data to improve diagnosis accuracy and treatment outcomes while maintaining HIPAA compliance.',
      solution: 'Developed a comprehensive AI-powered analytics platform that processes patient data in real-time, providing predictive insights for early disease detection and personalized treatment recommendations.',
      results: [
        '40% improvement in early disease detection',
        '35% reduction in diagnostic errors',
        '25% faster treatment planning',
        'Full HIPAA compliance achieved'
      ],
      technologies: ['Python', 'TensorFlow', 'AWS', 'React', 'PostgreSQL'],
      duration: '8 months',
      teamSize: '12 developers',
      featured: true,
      image: '🏥'
    },
    {
      id: 2,
      title: 'Cybersecurity Transformation for Financial Institution',
      client: 'Global Trust Bank',
      industry: 'finance',
      service: 'cybersecurity',
      challenge: 'Global Trust Bank required a comprehensive security overhaul to meet new regulatory requirements and protect against sophisticated cyber threats.',
      solution: 'Implemented a zero-trust security architecture with AI-powered threat detection, multi-factor authentication, and real-time monitoring systems.',
      results: [
        '99.9% threat detection rate',
        'Zero security breaches in 18 months',
        '100% regulatory compliance',
        '60% reduction in security incidents'
      ],
      technologies: ['AWS Security Hub', 'Okta', 'CrowdStrike', 'Splunk', 'Terraform'],
      duration: '12 months',
      teamSize: '8 security specialists',
      featured: true,
      image: '🏦'
    },
    {
      id: 3,
      title: 'Smart Manufacturing IoT Platform',
      client: 'Precision Manufacturing Co.',
      industry: 'manufacturing',
      service: 'iot',
      challenge: 'Precision Manufacturing needed to optimize production processes, reduce downtime, and improve quality control across multiple facilities.',
      solution: 'Deployed a comprehensive IoT platform with sensors, edge computing, and AI analytics to monitor production lines and predict maintenance needs.',
      results: [
        '30% reduction in unplanned downtime',
        '25% improvement in product quality',
        '20% increase in production efficiency',
        'Real-time monitoring across 5 facilities'
      ],
      technologies: ['Azure IoT Hub', 'Python', 'React', 'InfluxDB', 'Grafana'],
      duration: '10 months',
      teamSize: '10 engineers',
      featured: false,
      image: '🏭'
    },
    {
      id: 4,
      title: 'Cloud Migration and DevOps Transformation',
      client: 'TechStart Solutions',
      industry: 'retail',
      service: 'cloud',
      challenge: 'TechStart needed to migrate from legacy on-premise systems to modern cloud infrastructure while implementing DevOps practices.',
      solution: 'Executed a comprehensive cloud migration strategy using AWS, implemented CI/CD pipelines, and established DevOps best practices.',
      results: [
        '50% reduction in infrastructure costs',
        '90% faster deployment cycles',
        '99.9% uptime achieved',
        'Complete legacy system retirement'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
      duration: '14 months',
      teamSize: '15 engineers',
      featured: false,
      image: '🛒'
    },
    {
      id: 5,
      title: 'Digital Government Services Platform',
      client: 'City of Innovation',
      industry: 'government',
      service: 'digital-transformation',
      challenge: 'The city needed to modernize citizen services, improve accessibility, and streamline government operations.',
      solution: 'Developed a comprehensive digital services platform with citizen portals, automated workflows, and integrated payment systems.',
      results: [
        '80% improvement in citizen satisfaction',
        '70% reduction in processing times',
        '$2M annual cost savings',
        '24/7 service availability'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
      duration: '16 months',
      teamSize: '20 developers',
      featured: false,
      image: '🏛️'
    },
    {
      id: 6,
      title: 'AI-Powered Customer Experience Platform',
      client: 'RetailMax Corporation',
      industry: 'retail',
      service: 'ai',
      challenge: 'RetailMax needed to personalize customer experiences, optimize inventory management, and increase sales conversion rates.',
      solution: 'Built an AI-powered platform that analyzes customer behavior, provides personalized recommendations, and optimizes inventory levels.',
      results: [
        '45% increase in conversion rates',
        '30% improvement in inventory turnover',
        '25% boost in customer lifetime value',
        'Real-time personalization engine'
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'MongoDB', 'Redis'],
      duration: '9 months',
      teamSize: '14 developers',
      featured: false,
      image: '🛍️'
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.challenge.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesIndustry && matchesService && matchesSearch;
  });

  const featuredCaseStudies = caseStudies.filter(study => study.featured);

=======
<<<<<<< HEAD
=======
import React from 'react.ts';
import { SEO              } from '../components/SEO';

>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
export default function CaseStudies(...args: any[]): any {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {' '}Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped organizations across industries achieve 
              remarkable results through innovative technology solutions.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">Filter by:</span>
              </div>
              
              {/* Industry Filter */}
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
              >
                {industries.map((industry) => (
                  <option key={industry.id} value={industry.id}>
                    {industry.name}
                  </option>
                ))}
              </select>

              {/* Service Filter */}
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
              >
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {featuredCaseStudies.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Featured Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most impactful and transformative client engagements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                      Featured
                    </span>
                    <div className="text-4xl">{study.image}</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-cyan-400 font-semibold mb-4">{study.client}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Challenge</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Solution</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3 h-3" />
                        <span>{study.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-3 h-3" />
                        <span>{study.teamSize}</span>
                      </div>
                    </div>
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center space-x-2 transition-colors duration-200">
                      <span>View Full Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Case Studies */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              All Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our complete portfolio of successful client engagements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{study.image}</div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                    {industries.find(i => i.id === study.industry)?.name}
                  </span>
                  <span className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                    {services.find(s => s.id === study.service)?.name}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                <p className="text-cyan-400 font-semibold text-sm mb-3">{study.client}</p>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{study.challenge}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Results</h4>
                  <ul className="space-y-1">
                    {study.results.slice(0, 2).map((result, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 text-xs text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{study.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{study.teamSize}</span>
                    </div>
                  </div>
                </div>

                <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center space-x-2 transition-colors duration-200">
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </motion.div>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-400 mb-4">
                No case studies found matching your criteria.
              </p>
              <p className="text-gray-500">
                Try adjusting your search terms or filters.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Impact by the Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quantifying the success we've delivered for our clients across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '150+', label: 'Successful Projects', icon: CheckCircle, color: 'text-green-400' },
              { metric: '98%', label: 'Client Satisfaction', icon: Award, color: 'text-yellow-400' },
              { metric: '40%', label: 'Average Cost Reduction', icon: TrendingUp, color: 'text-blue-400' },
              { metric: '3x', label: 'Performance Improvement', icon: Zap, color: 'text-purple-400' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.metric}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your organization achieve similar 
              results through innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
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
