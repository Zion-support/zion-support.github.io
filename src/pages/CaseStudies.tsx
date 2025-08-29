import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Users, DollarSign, Shield, Brain, Cloud, 
  ArrowRight, Search, Filter, Target, CheckCircle, Star,
  Building, Heart, Globe, Zap, Award, BarChart3
} from 'lucide-react';

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const categories = [
    { id: 'all', name: 'All Cases', count: 12 },
    { id: 'ai', name: 'AI Solutions', count: 5 },
    { id: 'cloud', name: 'Cloud Migration', count: 4 },
    { id: 'security', name: 'Cybersecurity', count: 3 },
    { id: 'transformation', name: 'Digital Transformation', count: 4 }
  ];

  const industries = [
    { id: 'all', name: 'All Industries', count: 12 },
    { id: 'healthcare', name: 'Healthcare', count: 3 },
    { id: 'finance', name: 'Financial Services', count: 2 },
    { id: 'manufacturing', name: 'Manufacturing', count: 2 },
    { id: 'retail', name: 'Retail & E-commerce', count: 2 },
    { id: 'technology', name: 'Technology', count: 3 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Analytics Platform',
      client: 'Regional Healthcare System',
      industry: 'healthcare',
      category: 'ai',
      challenge: 'A large healthcare system needed to analyze patient data across multiple hospitals to improve treatment outcomes and reduce costs.',
      solution: 'Developed a comprehensive AI analytics platform that processes patient data, predicts health outcomes, and provides treatment recommendations.',
      results: [
        '45% reduction in patient readmission rates',
        '30% improvement in treatment accuracy',
        '$2.5M annual cost savings',
        '60% faster diagnosis times'
      ],
      metrics: {
        roi: '340%',
        timeline: '8 months',
        teamSize: '12 engineers',
        accuracy: '94.2%'
      },
      technologies: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics', 'Azure Cloud'],
      image: '/images/case-studies/healthcare-ai.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum-Safe Cybersecurity Implementation',
      client: 'Global Financial Institution',
      industry: 'finance',
      category: 'security',
      challenge: 'A major bank needed to secure their infrastructure against quantum computing threats while maintaining performance.',
      solution: 'Implemented quantum-resistant cryptography and AI-powered threat detection systems across all critical infrastructure.',
      results: [
        '99.99% threat detection accuracy',
        '50% reduction in security incidents',
        'Zero data breaches in 18 months',
        'Compliance with new quantum security standards'
      ],
      metrics: {
        roi: '280%',
        timeline: '6 months',
        teamSize: '8 security specialists',
        accuracy: '99.99%'
      },
      technologies: ['Quantum Cryptography', 'AI Threat Detection', 'Zero Trust Architecture', 'Blockchain'],
      image: '/images/case-studies/quantum-security.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Cloud-Native Manufacturing Platform',
      client: 'Industrial Manufacturing Corp',
      industry: 'manufacturing',
      category: 'cloud',
      challenge: 'A manufacturing company needed to modernize their legacy systems and improve operational efficiency across 15 facilities.',
      solution: 'Built a cloud-native platform for predictive maintenance, supply chain optimization, and real-time production monitoring.',
      results: [
        '25% increase in production efficiency',
        '40% reduction in equipment downtime',
        '$3.2M annual operational savings',
        'Real-time visibility across all facilities'
      ],
      metrics: {
        roi: '420%',
        timeline: '10 months',
        teamSize: '15 engineers',
        accuracy: '96.8%'
      },
      technologies: ['IoT Sensors', 'Machine Learning', 'AWS Cloud', 'Real-time Analytics'],
      image: '/images/case-studies/manufacturing-cloud.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'AI Customer Service Automation',
      client: 'E-commerce Retailer',
      industry: 'retail',
      category: 'ai',
      challenge: 'A growing e-commerce company needed to handle 10x increase in customer inquiries while maintaining service quality.',
      solution: 'Implemented AI-powered chatbots, sentiment analysis, and automated customer support workflows.',
      results: [
        '80% reduction in response time',
        '95% customer satisfaction rate',
        '70% cost reduction in support operations',
        '24/7 customer service availability'
      ],
      metrics: {
        roi: '380%',
        timeline: '4 months',
        teamSize: '6 engineers',
        accuracy: '92.5%'
      },
      technologies: ['Natural Language Processing', 'Sentiment Analysis', 'Cloud Computing', 'API Integration'],
      image: '/images/case-studies/ecommerce-ai.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Digital Transformation for Tech Startup',
      client: 'SaaS Platform Provider',
      industry: 'technology',
      category: 'transformation',
      challenge: 'A fast-growing SaaS company needed to scale their platform to handle millions of users while maintaining performance.',
      solution: 'Implemented microservices architecture, automated DevOps, and AI-powered performance optimization.',
      results: [
        '10x increase in system capacity',
        '99.9% uptime achievement',
        '50% reduction in deployment time',
        'Automatic scaling based on demand'
      ],
      metrics: {
        roi: '450%',
        timeline: '12 months',
        teamSize: '20 engineers',
        accuracy: '99.9%'
      },
      technologies: ['Microservices', 'Kubernetes', 'DevOps Automation', 'AI Monitoring'],
      image: '/images/case-studies/saas-transformation.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Predictive Maintenance for Energy Sector',
      client: 'Renewable Energy Company',
      industry: 'technology',
      category: 'ai',
      challenge: 'An energy company needed to predict and prevent equipment failures across their wind and solar farms.',
      solution: 'Developed AI models to analyze sensor data and predict equipment maintenance needs before failures occur.',
      results: [
        '60% reduction in unplanned downtime',
        '25% increase in energy production',
        '$1.8M annual maintenance savings',
        'Predictive maintenance scheduling'
      ],
      metrics: {
        roi: '320%',
        timeline: '7 months',
        teamSize: '10 engineers',
        accuracy: '91.3%'
      },
      technologies: ['IoT Analytics', 'Machine Learning', 'Predictive Models', 'Cloud Computing'],
      image: '/images/case-studies/energy-predictive.jpg',
      featured: false
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesCategory = selectedCategory === 'all' || study.category === selectedCategory;
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    return matchesCategory && matchesIndustry;
  });

  const featuredCaseStudies = caseStudies.filter(study => study.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped organizations across industries achieve 
              measurable results with our cutting-edge technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center text-gray-300">
                <TrendingUp className="h-5 w-5 mr-2" />
                <span>340% Average ROI</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="h-5 w-5 mr-2" />
                <span>50+ Successful Projects</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Star className="h-5 w-5 mr-2" />
                <span>4.9/5 Client Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Case Studies */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Success Stories</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              These standout projects demonstrate the transformative impact of our solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded">
                      {categories.find(c => c.id === study.category)?.name}
                    </span>
                    <span className="px-2 py-1 bg-green-600/20 text-green-400 text-xs rounded">
                      {industries.find(i => i.id === study.industry)?.name}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{study.client}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="text-white font-medium text-sm mb-1">Challenge</h4>
                      <p className="text-gray-400 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm mb-1">Solution</h4>
                      <p className="text-gray-400 text-sm">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">{study.metrics.roi}</div>
                      <div className="text-xs text-gray-400">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{study.metrics.accuracy}</div>
                      <div className="text-xs text-gray-400">Accuracy</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                    View Full Case Study
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Filters */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-gray-300 font-medium">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedIndustry === industry.id
                    ? 'bg-green-600 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {industry.name} ({industry.count})
              </button>
            ))}
          </div>
        </section>

        {/* All Case Studies */}
        <section>
          <div className="space-y-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded">
                        {categories.find(c => c.id === study.category)?.name}
                      </span>
                      <span className="px-2 py-1 bg-green-600/20 text-green-400 text-xs rounded">
                        {industries.find(i => i.id === study.industry)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-white mb-2">{study.title}</h3>
                    <p className="text-gray-300 mb-4">{study.client}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-white font-medium mb-2">Challenge</h4>
                        <p className="text-gray-400 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">Solution</h4>
                        <p className="text-gray-400 text-sm">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-medium mb-3">Key Results</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="bg-white/5 rounded-lg p-4 mb-4">
                      <h4 className="text-white font-medium mb-3">Project Metrics</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-400 text-sm">ROI</span>
                          <span className="text-blue-400 font-semibold">{study.metrics.roi}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400 text-sm">Timeline</span>
                          <span className="text-green-400 font-semibold">{study.metrics.timeline}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400 text-sm">Accuracy</span>
                          <span className="text-purple-400 font-semibold">{study.metrics.accuracy}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400 text-sm">Team Size</span>
                          <span className="text-yellow-400 font-semibold">{study.metrics.teamSize}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 mb-4">
                      <h4 className="text-white font-medium mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-600/30 text-gray-300 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                      View Full Case Study
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Success Story?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can drive measurable results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Schedule a Consultation
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-colors border border-white/20">
                Download Case Studies PDF
              </button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
