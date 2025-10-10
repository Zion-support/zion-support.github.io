'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Star, TrendingUp, Users, Clock, CheckCircle, Eye, ThumbsUp, MessageCircle, Share, Phone, Mail, MapPin, Brain, Cloud, Shield, Code, BarChart, Target, Globe, Database, Smartphone, Lock, Zap, Award, Rocket, Lightbulb } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
    improvement: string;
  }[];
  technologies: string[];
  duration: string;
  team: string;
  image: string;
  featured: boolean;
  category: string;
}

const CaseStudiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'The client was struggling with inefficient supply chain management, leading to 30% inventory waste and delayed deliveries affecting customer satisfaction.',
      solution: 'We implemented an AI-powered supply chain optimization system that uses machine learning algorithms to predict demand, optimize inventory levels, and automate procurement processes.',
      results: [
        'Reduced inventory waste by 45%',
        'Improved delivery times by 60%',
        'Increased customer satisfaction by 35%',
        'Generated $2.5M in annual savings'
      ],
      metrics: [
        { label: 'Cost Reduction', value: '$2.5M', improvement: '45%' },
        { label: 'Delivery Time', value: '60%', improvement: 'Faster' },
        { label: 'Customer Satisfaction', value: '95%', improvement: '+35%' },
        { label: 'Inventory Accuracy', value: '98%', improvement: '+25%' }
      ],
      technologies: ['Machine Learning', 'Python', 'TensorFlow', 'AWS', 'Docker', 'Kubernetes'],
      duration: '6 months',
      team: '8 specialists',
      image: '/case-studies/supply-chain-ai.jpg',
      featured: true,
      category: 'AI Solutions'
    },
    {
      id: '2',
      title: 'Cloud Migration & Security Enhancement',
      client: 'Financial Services Inc',
      industry: 'Finance',
      challenge: 'A financial services company needed to migrate their legacy systems to the cloud while maintaining strict security compliance and zero downtime.',
      solution: 'We designed and executed a comprehensive cloud migration strategy using AWS, implementing advanced security measures and ensuring seamless transition with zero business disruption.',
      results: [
        'Zero downtime during migration',
        'Improved system performance by 70%',
        'Reduced infrastructure costs by 40%',
        'Achieved SOC2 compliance'
      ],
      metrics: [
        { label: 'Performance Improvement', value: '70%', improvement: 'Faster' },
        { label: 'Cost Reduction', value: '40%', improvement: 'Lower' },
        { label: 'Uptime', value: '99.99%', improvement: 'Maintained' },
        { label: 'Security Score', value: 'A+', improvement: 'Enhanced' }
      ],
      technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'Security Tools', 'Monitoring'],
      duration: '4 months',
      team: '12 specialists',
      image: '/case-studies/cloud-migration.jpg',
      featured: true,
      category: 'Cloud Infrastructure'
    },
    {
      id: '3',
      title: 'Cybersecurity Transformation',
      client: 'Healthcare Network',
      industry: 'Healthcare',
      challenge: 'A large healthcare network was experiencing frequent security breaches and needed to implement comprehensive cybersecurity measures to protect patient data.',
      solution: 'We implemented a multi-layered security approach including threat detection, incident response, staff training, and compliance management to protect sensitive healthcare data.',
      results: [
        'Eliminated security breaches',
        'Achieved HIPAA compliance',
        'Reduced security incidents by 95%',
        'Improved staff security awareness'
      ],
      metrics: [
        { label: 'Security Incidents', value: '95%', improvement: 'Reduction' },
        { label: 'Compliance Score', value: '100%', improvement: 'HIPAA' },
        { label: 'Threat Detection', value: '99.9%', improvement: 'Accuracy' },
        { label: 'Response Time', value: '5 min', improvement: 'Faster' }
      ],
      technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'Encryption', 'Monitoring'],
      duration: '3 months',
      team: '6 specialists',
      image: '/case-studies/cybersecurity.jpg',
      featured: false,
      category: 'Cybersecurity'
    },
    {
      id: '4',
      title: 'Data Analytics Platform',
      client: 'Retail Chain',
      industry: 'Retail',
      challenge: 'A retail chain needed to analyze customer behavior and sales data to improve decision-making and increase revenue.',
      solution: 'We built a comprehensive data analytics platform that processes real-time data from multiple sources, providing actionable insights through interactive dashboards and predictive analytics.',
      results: [
        'Increased revenue by 25%',
        'Improved customer retention by 40%',
        'Optimized inventory management',
        'Enhanced marketing effectiveness'
      ],
      metrics: [
        { label: 'Revenue Increase', value: '25%', improvement: 'Higher' },
        { label: 'Customer Retention', value: '40%', improvement: 'Better' },
        { label: 'Data Processing', value: 'Real-time', improvement: 'Instant' },
        { label: 'Decision Speed', value: '80%', improvement: 'Faster' }
      ],
      technologies: ['Python', 'Apache Spark', 'Tableau', 'PostgreSQL', 'Redis', 'Docker'],
      duration: '5 months',
      team: '10 specialists',
      image: '/case-studies/data-analytics.jpg',
      featured: false,
      category: 'Data Analytics'
    },
    {
      id: '5',
      title: 'Custom E-commerce Platform',
      client: 'Fashion Brand',
      industry: 'E-commerce',
      challenge: 'A fashion brand needed a custom e-commerce platform that could handle high traffic, provide personalized shopping experiences, and integrate with their existing systems.',
      solution: 'We developed a scalable e-commerce platform with AI-powered personalization, mobile optimization, and seamless integration with inventory and payment systems.',
      results: [
        'Increased online sales by 150%',
        'Improved user engagement by 60%',
        'Reduced cart abandonment by 35%',
        'Enhanced mobile experience'
      ],
      metrics: [
        { label: 'Sales Increase', value: '150%', improvement: 'Higher' },
        { label: 'User Engagement', value: '60%', improvement: 'Better' },
        { label: 'Cart Abandonment', value: '35%', improvement: 'Reduction' },
        { label: 'Page Load Speed', value: '2.1s', improvement: 'Faster' }
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'Stripe', 'AWS'],
      duration: '7 months',
      team: '15 specialists',
      image: '/case-studies/ecommerce-platform.jpg',
      featured: false,
      category: 'Custom Development'
    },
    {
      id: '6',
      title: 'AI-Powered Customer Service',
      client: 'Technology Company',
      industry: 'Technology',
      challenge: 'A technology company was overwhelmed with customer support requests and needed to automate responses while maintaining high service quality.',
      solution: 'We implemented an AI-powered customer service system with chatbots, sentiment analysis, and automated ticket routing to handle customer inquiries efficiently.',
      results: [
        'Reduced response time by 80%',
        'Improved customer satisfaction by 45%',
        'Handled 70% of inquiries automatically',
        'Reduced support costs by 50%'
      ],
      metrics: [
        { label: 'Response Time', value: '80%', improvement: 'Faster' },
        { label: 'Customer Satisfaction', value: '45%', improvement: 'Higher' },
        { label: 'Automation Rate', value: '70%', improvement: 'Efficient' },
        { label: 'Cost Reduction', value: '50%', improvement: 'Lower' }
      ],
      technologies: ['NLP', 'Machine Learning', 'Python', 'API Integration', 'Analytics', 'Monitoring'],
      duration: '4 months',
      team: '8 specialists',
      image: '/case-studies/ai-customer-service.jpg',
      featured: false,
      category: 'AI Solutions'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Case Studies', count: caseStudies.length },
    { id: 'AI Solutions', name: 'AI Solutions', count: caseStudies.filter(study => study.category === 'AI Solutions').length },
    { id: 'Cloud Infrastructure', name: 'Cloud Infrastructure', count: caseStudies.filter(study => study.category === 'Cloud Infrastructure').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: caseStudies.filter(study => study.category === 'Cybersecurity').length },
    { id: 'Data Analytics', name: 'Data Analytics', count: caseStudies.filter(study => study.category === 'Data Analytics').length },
    { id: 'Custom Development', name: 'Custom Development', count: caseStudies.filter(study => study.category === 'Custom Development').length }
  ];

  const filteredStudies = selectedCategory === 'all' 
    ? caseStudies.filter(study => 
        study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.industry.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : caseStudies.filter(study => 
        study.category === selectedCategory && (
          study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
          study.industry.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>Case Studies | Zion Tech Group - Success Stories and Client Results</title>
        <meta name="description" content="Explore our case studies and success stories. See how we've helped clients achieve remarkable results with AI, cloud, and technology solutions." />
        <meta name="keywords" content="case studies, success stories, client results, AI solutions, cloud migration, cybersecurity, data analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Case Studies">
            <span className="text-cyan-400 neon-text">Case</span> Studies
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how we've helped businesses achieve <span className="text-cyan-400 font-bold">remarkable results</span> with our AI and technology solutions.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="cyber-card hologram-card p-6 border border-cyan-500/20">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-4 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>
              </div>
              <div className="md:w-64">
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors appearance-none">
                    {categories.map((category) => (
                      <option key={category.id} value={category.id} className="bg-slate-800">
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.slice(1).map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white cyber-glow'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white neon-text">
              {selectedCategory === 'all' ? 'All Case Studies' : `${selectedCategory} Case Studies`}
            </h2>
            <span className="text-cyan-400 font-semibold">
              {filteredStudies.length} case study{filteredStudies.length !== 1 ? 'ies' : ''} found
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredStudies.map((study) => (
              <div key={study.id} className={`cyber-card group hover:scale-105 transition-all duration-300 relative ${
                study.featured ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' : 'border-slate-700/50'
              }`}>
                {study.featured && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Featured
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {study.client}
                        </div>
                        <div className="flex items-center">
                          <Globe className="w-4 h-4 mr-1" />
                          {study.industry}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {study.duration}
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.slice(0, 3).map((result, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.metrics.slice(0, 4).map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">{metric.value}</div>
                        <div className="text-xs text-gray-300">{metric.label}</div>
                        <div className="text-xs text-green-400">{metric.improvement}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.slice(0, 4).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-slate-800/50 text-gray-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-slate-800/50 text-gray-400 text-xs rounded">
                          +{study.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <a
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {filteredStudies.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">No case studies found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search terms or category filter</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="cyber-button"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card hologram-card p-12 border border-cyan-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve similar results with our AI and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="cyber-button text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;