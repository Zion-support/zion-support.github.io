import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    title: 'AI-Powered E-commerce Transformation',
    company: 'TechRetail Inc.',
    industry: 'E-commerce',
    challenge: 'Legacy system limitations and poor customer experience',
    solution: 'Implemented AI-powered recommendation engine and modernized infrastructure',
    results: [
      { metric: 'Revenue Increase', value: '45%', icon: TrendingUp },
      { metric: 'Customer Satisfaction', value: '92%', icon: Users },
      { metric: 'Processing Time', value: '60% faster', icon: Clock }
    ],
    image: '🛒',
    color: 'from-blue-500 to-cyan-500',
    link: '/case-studies/ecommerce-transformation'
  },
  {
    id: 2,
    title: 'Cybersecurity Infrastructure Overhaul',
    company: 'FinSecure Bank',
    industry: 'Financial Services',
    challenge: 'Outdated security protocols and compliance risks',
    solution: 'Deployed zero-trust architecture and AI threat detection',
    results: [
      { metric: 'Security Incidents', value: '85% reduction', icon: Award },
      { metric: 'Compliance Score', value: '98%', icon: TrendingUp },
      { metric: 'Response Time', value: '90% faster', icon: Clock }
    ],
    image: '🏦',
    color: 'from-green-500 to-emerald-500',
    link: '/case-studies/cybersecurity-overhaul'
  },
  {
    id: 3,
    title: 'Cloud Migration & DevOps Automation',
    company: 'ManufactureTech',
    industry: 'Manufacturing',
    challenge: 'On-premise infrastructure costs and deployment delays',
    solution: 'Migrated to multi-cloud with automated CI/CD pipelines',
    results: [
      { metric: 'Infrastructure Costs', value: '40% reduction', icon: TrendingUp },
      { metric: 'Deployment Speed', value: '10x faster', icon: Clock },
      { metric: 'Uptime', value: '99.9%', icon: Award }
    ],
    image: '🏭',
    color: 'from-purple-500 to-pink-500',
    link: '/case-studies/cloud-migration'
  }
];

export function CaseStudiesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Success <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Real results from real clients. Discover how we've transformed businesses 
            across industries with innovative technology solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={study.link} className="block">
                <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 h-full hover:border-zion-cyan/40 hover:bg-zion-slate-dark/70 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zion-cyan/25">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${study.color} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                      {study.image}
                    </div>
                    <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-zion-slate-light text-sm mb-4">
                    <strong>{study.company}</strong>
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-zion-cyan mb-2">Challenge:</h4>
                    <p className="text-zion-slate-light text-sm mb-3">{study.challenge}</p>
                    
                    <h4 className="text-sm font-medium text-zion-cyan mb-2">Solution:</h4>
                    <p className="text-zion-slate-light text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    {study.results.map((result, resultIndex) => {
                      const IconComponent = result.icon;
                      return (
                        <div key={resultIndex} className="flex items-center justify-between">
                          <span className="text-zion-slate-light text-sm">{result.metric}</span>
                          <div className="flex items-center gap-2">
                            <IconComponent className="w-4 h-4 text-zion-cyan" />
                            <span className="text-white font-medium text-sm">{result.value}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="pt-4 border-t border-zion-cyan/20">
                    <span className="text-zion-cyan text-sm font-medium group-hover:text-zion-purple transition-colors flex items-center gap-2">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-zion-slate-light mb-6">
            Ready to write your own success story?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}