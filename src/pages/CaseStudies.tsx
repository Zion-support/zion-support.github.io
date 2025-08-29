import React, { useState } from 'react';
import { EnhancedSEO as SEO } from '../components/EnhancedSEO';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Clock, ArrowRight, CheckCircle } from 'lucide-react';

function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Analytics Platform',
      client: 'Major Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Complex patient data analysis and treatment optimization across multiple facilities',
      solution: 'Implemented AI-powered analytics platform with real-time insights and predictive modeling',
      results: [
        '40% improvement in patient outcomes',
        '30% reduction in operational costs',
        '50% faster diagnosis times',
        '95% accuracy in treatment recommendations'
      ],
      technologies: ['AI/ML', 'Big Data', 'Cloud Computing', 'Real-time Analytics'],
      duration: '6 months',
      team: '12 specialists'
    },
    {
      id: 2,
      title: 'Quantum Computing for Financial Trading',
      client: 'Global Investment Bank',
      industry: 'Finance',
      challenge: 'Complex financial modeling and risk assessment requiring unprecedented computational power',
      solution: 'Developed quantum computing solution for portfolio optimization and risk analysis',
      results: [
        '1000x faster computation speeds',
        '25% improvement in portfolio returns',
        '60% reduction in risk exposure',
        'Real-time market analysis capabilities'
      ],
      technologies: ['Quantum Computing', 'AI/ML', 'Financial Modeling', 'Risk Analytics'],
      duration: '12 months',
      team: '15 researchers'
    },
    {
      id: 3,
      title: 'Digital Twin for Manufacturing Optimization',
      client: 'Fortune 500 Manufacturer',
      industry: 'Manufacturing',
      challenge: 'Inefficient production processes and lack of real-time monitoring capabilities',
      solution: 'Created comprehensive digital twin platform for production line optimization',
      results: [
        '35% increase in production efficiency',
        '45% reduction in downtime',
        '25% improvement in quality control',
        'Real-time predictive maintenance'
      ],
      technologies: ['IoT', 'Digital Twin', 'AI/ML', 'Real-time Monitoring'],
      duration: '8 months',
      team: '10 engineers'
    },
    {
      id: 4,
      title: 'Cybersecurity Threat Intelligence Platform',
      client: 'Government Agency',
      industry: 'Government',
      challenge: 'Advanced persistent threats and sophisticated cyber attacks requiring real-time detection',
      solution: 'Built AI-powered threat intelligence platform with automated response capabilities',
      results: [
        '99.9% threat detection accuracy',
        '90% reduction in response time',
        'Zero successful breaches',
        'Automated incident response'
      ],
      technologies: ['AI/ML', 'Cybersecurity', 'Threat Intelligence', 'Automation'],
      duration: '10 months',
      team: '18 security specialists'
    },
    {
      id: 5,
      title: 'Edge Computing for Autonomous Vehicles',
      client: 'Automotive Manufacturer',
      industry: 'Automotive',
      challenge: 'Real-time decision making for autonomous vehicles requiring ultra-low latency',
      solution: 'Implemented edge computing infrastructure for autonomous vehicle operations',
      results: [
        'Sub-10ms response times',
        '99.99% system reliability',
        'Enhanced safety features',
        'Scalable infrastructure'
      ],
      technologies: ['Edge Computing', 'IoT', 'AI/ML', 'Real-time Processing'],
      duration: '14 months',
      team: '20 engineers'
    },
    {
      id: 6,
      title: 'Blockchain Supply Chain Platform',
      client: 'Global Retail Chain',
      industry: 'Retail',
      challenge: 'Lack of transparency and traceability in supply chain operations',
      solution: 'Developed blockchain-based supply chain platform with smart contracts',
      results: [
        '100% supply chain transparency',
        '30% reduction in fraud',
        '50% faster dispute resolution',
        'Enhanced customer trust'
      ],
      technologies: ['Blockchain', 'Smart Contracts', 'Supply Chain', 'IoT'],
      duration: '7 months',
      team: '8 developers'
    }
  ];

  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const filteredCaseStudies = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry.toLowerCase() === filter.toLowerCase());

  const industries = ['all', ...Array.from(new Set(caseStudies.map(study => study.industry.toLowerCase()))];

  const stats = [
    { label: 'Projects Completed', value: '150+', icon: CheckCircle, color: 'text-green-500' },
    { label: 'Client Satisfaction', value: '98%', icon: Users, color: 'text-blue-500' },
    { label: 'Average ROI', value: '350%', icon: TrendingUp, color: 'text-purple-500' },
    { label: 'Time to Market', value: '6-12 months', icon: Clock, color: 'text-orange-500' }
  ];

  return (
    <>
      <SEO
        title="Case Studies - Zion Tech Group"
        description="Explore our successful technology implementations and digital transformation projects. See how we've helped clients achieve remarkable results with AI, quantum computing, and innovative solutions."
        keywords={['case studies', 'success stories', 'digital transformation', 'AI implementation', 'quantum computing', 'technology solutions']}
        type="website"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(56,189,248,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Success Stories
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Discover how we've transformed businesses across industries with cutting-edge technology solutions. 
                Real results, measurable impact, and lasting success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 bg-slate-700/50 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setFilter(industry)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    filter === industry
                      ? 'bg-cyan-500 text-white shadow-glow'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 hover:text-white'
                  }`}
                >
                  {industry === 'all' ? 'All Industries' : industry.charAt(0).toUpperCase() + industry.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-800/70 p-8">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-block px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs font-medium rounded-full">
                          {study.industry}
                        </span>
                        <div className="text-slate-400 text-sm">
                          {study.duration} • {study.team}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {study.title}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        <span className="font-medium text-slate-300">Client:</span> {study.client}
                      </p>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-300 mb-2">Challenge</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-300 mb-2">Solution</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-300 mb-3">Results</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-slate-400 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-300 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <button
                      onClick={() => setSelectedCase(selectedCase === study.id ? null : study.id)}
                      className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <span>View Details</span>
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                        selectedCase === study.id ? 'rotate-90' : ''
                      }`} />
                    </button>

                    {/* Expanded Details */}
                    {selectedCase === study.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-slate-700/50"
                      >
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-slate-300 mb-2">Project Timeline</h4>
                            <div className="bg-slate-700/30 rounded-lg p-3">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-slate-400">Duration:</span>
                                <span className="text-white font-medium">{study.duration}</span>
                              </div>
                              <div className="flex items-center justify-between text-sm mt-2">
                                <span className="text-slate-400">Team Size:</span>
                                <span className="text-white font-medium">{study.team}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Success Factors</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-400 text-sm">Strong client collaboration and feedback loops</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-400 text-sm">Agile development methodology with rapid prototyping</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-400 text-sm">Continuous integration and deployment practices</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-white">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Let's discuss how our innovative technology solutions can transform your business and deliver exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CaseStudies;
