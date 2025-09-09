import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Hospital, 
  Banknote, 
  ShoppingCart, 
  GraduationCap, 
  Landmark,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Globe,
  Clock,
  DollarSign,
  Target,
  Award,
  Zap,
  Shield,
  Brain,
  Cloud
} from 'lucide-react';

const CaseStudies = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedTechnology, setSelectedTechnology] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Globe, count: 12 },
    { id: 'healthcare', name: 'Healthcare', icon: Hospital, count: 4 },
    { id: 'finance', name: 'Financial Services', icon: Banknote, count: 3 },
    { id: 'retail', name: 'Retail & E-commerce', icon: ShoppingCart, count: 2 },
    { id: 'manufacturing', name: 'Manufacturing', icon: Building2, count: 2 },
    { id: 'education', name: 'Education', icon: GraduationCap, count: 1 }
  ];

  const technologies = [
    { id: 'all', name: 'All Technologies', count: 12 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 6 },
    { id: 'cloud', name: 'Cloud Computing', count: 5 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 4 },
    { id: 'iot', name: 'IoT Solutions', count: 3 },
    { id: 'data-analytics', name: 'Data Analytics', count: 4 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Patient Care Platform',
      client: 'MetroHealth Medical Center',
      industry: 'healthcare',
      technologies: ['ai-ml', 'cloud', 'cybersecurity'],
      duration: '8 months',
      teamSize: '12 developers',
      budget: '$2.5M',
      description: 'Developed an intelligent healthcare management system that improves patient outcomes and operational efficiency.',
      challenge: 'MetroHealth faced challenges with complex patient data management, HIPAA compliance, and the need for real-time decision support to improve patient care quality.',
      solution: 'Implemented an AI-driven patient risk assessment system with secure cloud infrastructure, seamless EHR integration, and predictive analytics for treatment optimization.',
      results: [
        '30% reduction in readmission rates',
        '25% improvement in patient satisfaction scores',
        '40% faster diagnosis times',
        '100% HIPAA compliance achievement',
        '$1.2M annual cost savings'
      ],
      metrics: {
        patientsServed: '50,000+',
        accuracy: '95%',
        uptime: '99.9%',
        roi: '180%'
      },
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      testimonial: {
        quote: "Zion Tech Group transformed our patient care operations with their AI platform. The results exceeded our expectations.",
        author: "Dr. Sarah Johnson",
        position: "Chief Medical Officer",
        company: "MetroHealth Medical Center"
      }
    },
    {
      id: 2,
      title: 'Digital Banking Transformation',
      client: 'First National Bank',
      industry: 'finance',
      technologies: ['cloud', 'cybersecurity', 'data-analytics'],
      duration: '12 months',
      teamSize: '18 developers',
      budget: '$4.2M',
      description: 'Modernized banking platform that enhances customer experience and operational efficiency.',
      challenge: 'First National Bank struggled with legacy system limitations, security vulnerabilities, and poor customer experience across digital channels.',
      solution: 'Built a microservices-based banking platform with advanced fraud detection, omnichannel customer experience, and real-time compliance monitoring.',
      results: [
        '50% faster transaction processing',
        '99.9% fraud detection accuracy',
        '45% increase in customer engagement',
        'Full regulatory compliance',
        '$3.1M annual cost reduction'
      ],
      metrics: {
        customersServed: '250,000+',
        transactionsPerDay: '2M+',
        securityScore: 'A+',
        roi: '165%'
      },
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      testimonial: {
        quote: "The digital transformation project delivered exceptional results. Our customers love the new experience.",
        author: "Michael Chen",
        position: "Chief Technology Officer",
        company: "First National Bank"
      }
    },
    {
      id: 3,
      title: 'Smart Manufacturing IoT Platform',
      client: 'Global Manufacturing Co.',
      industry: 'manufacturing',
      technologies: ['iot', 'ai-ml', 'cloud'],
      duration: '10 months',
      teamSize: '15 developers',
      budget: '$3.8M',
      description: 'Connected manufacturing system that optimizes production and reduces operational costs.',
      challenge: 'Global Manufacturing faced equipment downtime, production inefficiencies, quality control issues, and supply chain optimization challenges.',
      solution: 'Implemented an IoT sensor network with predictive maintenance algorithms, real-time quality monitoring, and supply chain automation.',
      results: [
        '35% reduction in equipment downtime',
        '20% increase in production efficiency',
        '15% improvement in product quality',
        '25% reduction in operational costs',
        '$2.8M annual savings'
      ],
      metrics: {
        factoriesConnected: '12',
        sensorsDeployed: '50,000+',
        dataPointsPerDay: '100M+',
        roi: '175%'
      },
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      testimonial: {
        quote: "The IoT platform revolutionized our manufacturing operations. The ROI was achieved within the first year.",
        author: "Robert Martinez",
        position: "Operations Director",
        company: "Global Manufacturing Co."
      }
    },
    {
      id: 4,
      title: 'E-commerce Personalization Engine',
      client: 'TechRetail Inc.',
      industry: 'retail',
      technologies: ['ai-ml', 'data-analytics', 'cloud'],
      duration: '6 months',
      teamSize: '10 developers',
      budget: '$1.8M',
      description: 'AI-driven personalization platform that increases customer engagement and sales.',
      challenge: 'TechRetail needed to improve customer behavior analysis, product recommendation accuracy, and real-time personalization across platforms.',
      solution: 'Built a machine learning recommendation engine with real-time customer behavior tracking and personalized marketing automation.',
      results: [
        '40% increase in conversion rates',
        '35% improvement in customer retention',
        '50% higher average order value',
        '25% reduction in cart abandonment',
        '$4.2M additional revenue'
      ],
      metrics: {
        customersAnalyzed: '500,000+',
        recommendationsPerDay: '10M+',
        personalizationAccuracy: '92%',
        roi: '220%'
      },
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      testimonial: {
        quote: "The personalization engine transformed our business. Sales increased dramatically while improving customer satisfaction.",
        author: "Jennifer Lee",
        position: "Chief Marketing Officer",
        company: "TechRetail Inc."
      }
    },
    {
      id: 5,
      title: 'Healthcare Data Analytics Platform',
      client: 'Regional Health Network',
      industry: 'healthcare',
      technologies: ['data-analytics', 'cloud', 'cybersecurity'],
      duration: '9 months',
      teamSize: '14 developers',
      budget: '$2.8M',
      description: 'Comprehensive data analytics solution for healthcare providers and administrators.',
      challenge: 'Regional Health Network struggled with data silos, complex regulatory requirements, and the need for real-time operational insights.',
      solution: 'Created a unified data warehouse with compliance automation tools, real-time analytics dashboard, and advanced security controls.',
      results: [
        '60% faster data access and analysis',
        '100% regulatory compliance',
        'Real-time operational insights',
        'Enhanced data security posture',
        '$1.9M annual cost savings'
      ],
      metrics: {
        dataSourcesIntegrated: '25+',
        reportsGenerated: '500+ daily',
        complianceScore: '100%',
        roi: '145%'
      },
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      testimonial: {
        quote: "The analytics platform gives us insights we never had before. It's transformed how we make decisions.",
        author: "Dr. David Thompson",
        position: "Chief Information Officer",
        company: "Regional Health Network"
      }
    },
    {
      id: 6,
      title: 'Financial Risk Management System',
      client: 'Merchant Bank International',
      industry: 'finance',
      technologies: ['ai-ml', 'data-analytics', 'cybersecurity'],
      duration: '11 months',
      teamSize: '16 developers',
      budget: '$3.5M',
      description: 'Advanced risk assessment and management platform for financial institutions.',
      challenge: 'Merchant Bank needed to improve risk modeling accuracy, process real-time market data, and ensure regulatory compliance.',
      solution: 'Developed AI-powered risk modeling algorithms with real-time market data integration and automated compliance reporting.',
      results: [
        '90% improvement in risk assessment accuracy',
        'Real-time risk monitoring',
        'Automated compliance reporting',
        'Enhanced decision-making capabilities',
        '$5.2M risk mitigation savings'
      ],
      metrics: {
        riskModels: '15+',
        dataPointsProcessed: '1B+ daily',
        riskAccuracy: '95%',
        roi: '190%'
      },
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      testimonial: {
        quote: "The risk management system has given us unprecedented visibility into our risk exposure. It's a game-changer.",
        author: "Amanda Rodriguez",
        position: "Chief Risk Officer",
        company: "Merchant Bank International"
      }
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesTechnology = selectedTechnology === 'all' || study.technologies.includes(selectedTechnology);
    return matchesIndustry && matchesTechnology;
  });

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent"
          >
            Case Studies
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed"
          >
            Real results from real projects. Explore how we've helped organizations across industries 
            achieve their technology goals and drive measurable business outcomes.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Industry Filter */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-4">Filter by Industry</h3>
              <div className="flex flex-wrap gap-3">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedIndustry === industry.id
                        ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/30'
                        : 'bg-zion-slate-darker text-zion-slate-light hover:bg-zion-slate-light hover:text-white border border-zion-slate-light/20'
                    }`}
                  >
                    <industry.icon className="w-4 h-4" />
                    <span>{industry.name}</span>
                    <span className="text-sm opacity-75">({industry.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Technology Filter */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-4">Filter by Technology</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <button
                    key={tech.id}
                    onClick={() => setSelectedTechnology(tech.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedTechnology === tech.id
                        ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/30'
                        : 'bg-zion-slate-darker text-zion-slate-light hover:bg-zion-slate-light hover:text-white border border-zion-slate-light/20'
                    }`}
                  >
                    {tech.name} ({tech.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-darker rounded-2xl border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300 overflow-hidden group"
              >
                {/* Case Study Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm font-medium rounded-full border border-zion-cyan/30">
                      {study.industry.charAt(0).toUpperCase() + study.industry.slice(1)}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-zion-blue/20 text-zion-blue text-sm font-medium rounded-full border border-zion-blue/30">
                      {study.duration}
                    </span>
                  </div>
                </div>
                
                {/* Case Study Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-zion-cyan transition-colors duration-300">
                    {study.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 font-medium">
                    {study.client}
                  </p>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {study.description}
                  </p>
                  
                  {/* Project Details */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-zion-cyan mb-1">{study.teamSize}</div>
                      <div className="text-xs text-zion-slate-light">Team Size</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-zion-cyan mb-1">{study.budget}</div>
                      <div className="text-xs text-zion-slate-light">Budget</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-zion-cyan mb-1">{study.metrics.roi}%</div>
                      <div className="text-xs text-zion-slate-light">ROI</div>
                    </div>
                  </div>
                  
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-zion-slate-light/10 text-zion-slate-light text-sm rounded-full border border-zion-slate-light/20"
                      >
                        {tech.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                    ))}
                  </div>
                  
                  {/* Key Results */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-zion-cyan" />
                      Key Results
                    </h4>
                    <div className="space-y-2">
                      {study.results.slice(0, 3).map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Testimonial */}
                  <div className="bg-zion-slate-light/5 p-4 rounded-lg border border-zion-slate-light/20 mb-6">
                    <p className="text-zion-slate-light text-sm italic mb-2">"{study.testimonial.quote}"</p>
                    <div className="text-xs text-zion-slate-light">
                      <strong>{study.testimonial.author}</strong> - {study.testimonial.position}, {study.testimonial.company}
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors duration-300 group-hover:translate-x-1"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
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
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No case studies found</h3>
              <p className="text-zion-slate-light mb-6">
                No case studies match your selected filters
              </p>
              <button
                onClick={() => {
                  setSelectedIndustry('all');
                  setSelectedTechnology('all');
                }}
                className="px-6 py-3 bg-zion-cyan text-white font-bold rounded-xl hover:bg-zion-cyan-dark transition-colors duration-300"
              >
                View All Case Studies
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 mb-20 bg-zion-slate-dark py-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Our Success Metrics
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to delivering exceptional results
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: '500+', label: 'Projects Delivered' },
              { icon: Award, value: '98%', label: 'Client Satisfaction' },
              { icon: TrendingUp, value: '180%', label: 'Average ROI' },
              { icon: Clock, value: '6-12', label: 'Months Delivery' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-10 h-10 text-zion-cyan" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <div className="container mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan-dark to-zion-blue-dark p-12 rounded-2xl"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help you achieve similar results and transform your business with innovative technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue-dark hover:bg-zion-slate-light font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
