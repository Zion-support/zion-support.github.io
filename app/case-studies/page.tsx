import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', count: 8 },
    { id: 'ai', name: 'AI Solutions', count: 3 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 2 },
    { id: 'cloud', name: 'Cloud Migration', count: 2 },
    { id: 'development', name: 'Development', count: 1 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'Global E-commerce Company',
      industry: 'Retail',
      category: 'ai',
      duration: '6 months',
      team: '8 developers',
      challenge: 'High customer service costs and inconsistent response quality across multiple channels.',
      solution: 'Implemented AI-powered chatbot system with natural language processing and machine learning capabilities.',
      results: [
        '75% reduction in customer service costs',
        '90% improvement in response time',
        '95% customer satisfaction rate',
        '50% increase in first-call resolution'
      ],
      technologies: ['React', 'Node.js', 'TensorFlow', 'AWS', 'MongoDB'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: 'Enterprise Cybersecurity Overhaul',
      client: 'Fortune 500 Financial Services',
      industry: 'Finance',
      category: 'cybersecurity',
      duration: '4 months',
      team: '12 security experts',
      challenge: 'Legacy security infrastructure vulnerable to modern cyber threats and compliance requirements.',
      solution: 'Comprehensive security assessment and implementation of zero-trust architecture with advanced threat detection.',
      results: [
        '99.9% security incident reduction',
        '100% compliance with industry regulations',
        '60% faster threat detection',
        '40% reduction in security management overhead'
      ],
      technologies: ['Azure Security', 'SIEM', 'EDR', 'IAM', 'Network Segmentation'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 3,
      title: 'Cloud Migration & Infrastructure Modernization',
      client: 'Healthcare Technology Provider',
      industry: 'Healthcare',
      category: 'cloud',
      duration: '8 months',
      team: '15 engineers',
      challenge: 'On-premises infrastructure struggling with scalability and high maintenance costs.',
      solution: 'Complete migration to AWS cloud with containerized microservices architecture.',
      results: [
        '70% reduction in infrastructure costs',
        '300% improvement in scalability',
        '99.99% uptime achievement',
        '50% faster deployment cycles'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CloudFormation'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 4,
      title: 'AI-Driven Predictive Analytics Platform',
      client: 'Manufacturing Conglomerate',
      industry: 'Manufacturing',
      category: 'ai',
      duration: '5 months',
      team: '10 data scientists',
      challenge: 'Inefficient production planning leading to inventory waste and missed deadlines.',
      solution: 'Built machine learning platform for demand forecasting and production optimization.',
      results: [
        '25% reduction in inventory costs',
        '30% improvement in production efficiency',
        '85% accuracy in demand forecasting',
        '20% increase in on-time delivery'
      ],
      technologies: ['Python', 'TensorFlow', 'Apache Spark', 'PostgreSQL', 'React'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 5,
      title: 'Zero-Trust Security Implementation',
      client: 'Government Agency',
      industry: 'Government',
      category: 'cybersecurity',
      duration: '6 months',
      team: '20 security specialists',
      challenge: 'Critical infrastructure requiring highest security standards and compliance.',
      solution: 'Implemented comprehensive zero-trust security model with multi-factor authentication and continuous monitoring.',
      results: [
        '100% compliance with security standards',
        'Zero security breaches',
        '80% reduction in access management time',
        'Real-time threat detection and response'
      ],
      technologies: ['Okta', 'CrowdStrike', 'Splunk', 'Palo Alto', 'Microsoft Defender'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 6,
      title: 'Multi-Cloud Infrastructure Strategy',
      client: 'Global Technology Company',
      industry: 'Technology',
      category: 'cloud',
      duration: '7 months',
      team: '18 cloud architects',
      challenge: 'Vendor lock-in and need for disaster recovery across multiple regions.',
      solution: 'Designed and implemented multi-cloud strategy with AWS, Azure, and GCP.',
      results: [
        'Eliminated vendor lock-in',
        '99.99% disaster recovery capability',
        '40% cost optimization',
        'Global presence in 15+ regions'
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Ansible', 'Kubernetes'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 7,
      title: 'AI-Powered Fraud Detection System',
      client: 'Digital Banking Platform',
      industry: 'Fintech',
      category: 'ai',
      duration: '4 months',
      team: '6 AI engineers',
      challenge: 'Increasing fraud attempts and need for real-time detection capabilities.',
      solution: 'Developed machine learning models for real-time fraud detection and prevention.',
      results: [
        '95% fraud detection accuracy',
        'Real-time processing capability',
        '60% reduction in false positives',
        '99.9% system availability'
      ],
      technologies: ['Python', 'TensorFlow', 'Apache Kafka', 'Redis', 'Docker'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 8,
      title: 'Custom Enterprise Application Development',
      client: 'Logistics Company',
      industry: 'Logistics',
      category: 'development',
      duration: '9 months',
      team: '12 full-stack developers',
      challenge: 'Outdated legacy systems hindering operational efficiency and growth.',
      solution: 'Built modern, scalable web application with mobile app integration.',
      results: [
        '50% improvement in operational efficiency',
        'Real-time tracking capabilities',
        'Mobile-first user experience',
        '99.5% user satisfaction rate'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'React Native'],
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => 
    selectedCategory === 'all' || study.category === selectedCategory
  );

  const featuredStudies = caseStudies.filter(study => study.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful technology implementations across AI, cybersecurity, cloud migration, and custom development projects." />
        <meta name="keywords" content="case studies, technology projects, AI implementation, cybersecurity solutions, cloud migration, custom development" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped organizations transform their technology infrastructure and achieve remarkable results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Studies */}
        {selectedCategory === 'all' && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Star className="w-8 h-8 text-yellow-400 mr-3" />
              Featured Projects
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredStudies.map((study) => (
                <div key={study.id} className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {categories.find(cat => cat.id === study.category)?.name}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {study.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      <strong>Client:</strong> {study.client} | <strong>Industry:</strong> {study.industry}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {study.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {study.team}
                      </div>
                    </div>
                    <div className="space-y-2 mb-6">
                      {study.results.slice(0, 2).map((result, index) => (
                        <div key={index} className="flex items-center text-green-400">
                          <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                    <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Case Studies */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <TrendingUp className="w-8 h-8 text-purple-400 mr-3" />
            {selectedCategory === 'all' ? 'All Projects' : categories.find(cat => cat.id === selectedCategory)?.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="bg-slate-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === study.category)?.name}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    <strong>{study.client}</strong> • {study.industry}
                  </p>
                  <div className="space-y-1 mb-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {study.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {study.team}
                    </div>
                  </div>
                  <div className="space-y-1 mb-4">
                    {study.results.slice(0, 2).map((result, index) => (
                      <div key={index} className="flex items-center text-green-400 text-sm">
                        <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0" />
                        {result}
                      </div>
                    ))}
                  </div>
                  <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                    View Details
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Success Story?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your technology infrastructure and achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Download Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
