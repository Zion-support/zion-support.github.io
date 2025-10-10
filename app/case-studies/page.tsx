'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Calendar, Users, TrendingUp, CheckCircle } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Supply Chain Optimization',
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      category: 'AI',
      image: '/images/case-studies/supply-chain.jpg',
      challenge: 'Inefficient supply chain management leading to 30% inventory waste and delayed deliveries.',
      solution: 'Implemented AI-driven demand forecasting and automated inventory management system.',
      results: [
        'Reduced inventory waste by 45%',
        'Improved delivery times by 60%',
        'Saved $2.5M annually',
        'Achieved 99.2% forecast accuracy'
      ],
      duration: '6 months',
      teamSize: '8 experts',
      technologies: ['Machine Learning', 'Python', 'AWS', 'TensorFlow']
    },
    {
      id: 2,
      title: 'Cybersecurity Transformation',
      company: 'Financial Services Inc',
      industry: 'Finance',
      category: 'Security',
      image: '/images/case-studies/cybersecurity.jpg',
      challenge: 'Legacy security systems vulnerable to modern cyber threats and compliance requirements.',
      solution: 'Deployed comprehensive AI-powered security suite with real-time threat detection.',
      results: [
        'Zero security breaches in 18 months',
        '99.9% threat detection accuracy',
        'Reduced incident response time by 85%',
        'Achieved SOC 2 compliance'
      ],
      duration: '4 months',
      teamSize: '6 experts',
      technologies: ['AI Security', 'SIEM', 'Cloud Security', 'Compliance']
    },
    {
      id: 3,
      title: 'Cloud Migration & Optimization',
      company: 'E-commerce Platform',
      industry: 'Retail',
      category: 'Cloud',
      image: '/images/case-studies/cloud-migration.jpg',
      challenge: 'On-premise infrastructure unable to handle peak traffic and scaling requirements.',
      solution: 'Migrated to cloud-native architecture with auto-scaling and performance optimization.',
      results: [
        '99.99% uptime achieved',
        '50% reduction in infrastructure costs',
        '10x faster page load times',
        'Handles 5x more traffic'
      ],
      duration: '8 months',
      teamSize: '12 experts',
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Microservices']
    },
    {
      id: 4,
      title: 'AI Customer Support Automation',
      company: 'Tech Startup',
      industry: 'Technology',
      category: 'AI',
      image: '/images/case-studies/customer-support.jpg',
      challenge: 'High customer support costs and inconsistent response quality during peak hours.',
      solution: 'Deployed AI-powered chatbot with natural language processing and human handoff.',
      results: [
        '85% reduction in support tickets',
        '24/7 customer support availability',
        '95% customer satisfaction rate',
        '60% cost reduction'
      ],
      duration: '3 months',
      teamSize: '5 experts',
      technologies: ['NLP', 'Chatbot', 'Machine Learning', 'API Integration']
    },
    {
      id: 5,
      title: 'Data Analytics & Business Intelligence',
      company: 'Healthcare Provider',
      industry: 'Healthcare',
      category: 'Analytics',
      image: '/images/case-studies/data-analytics.jpg',
      challenge: 'Fragmented data across multiple systems preventing data-driven decision making.',
      solution: 'Built comprehensive data warehouse with real-time analytics and predictive insights.',
      results: [
        'Unified view of patient data',
        '40% improvement in treatment outcomes',
        'Real-time operational insights',
        'Reduced data processing time by 70%'
      ],
      duration: '10 months',
      teamSize: '10 experts',
      technologies: ['Data Warehouse', 'Power BI', 'SQL Server', 'ETL']
    },
    {
      id: 6,
      title: 'Mobile App Development',
      company: 'Fitness Company',
      industry: 'Health & Fitness',
      category: 'Development',
      image: '/images/case-studies/mobile-app.jpg',
      challenge: 'Need for a cross-platform mobile app to engage users and track fitness progress.',
      solution: 'Developed React Native app with AI-powered workout recommendations and progress tracking.',
      results: [
        '500K+ downloads in first year',
        '4.8/5 app store rating',
        '40% increase in user engagement',
        'Seamless cross-platform experience'
      ],
      duration: '5 months',
      teamSize: '7 experts',
      technologies: ['React Native', 'AI/ML', 'Cloud Backend', 'Analytics']
    }
  ];

  const categories = ['All', 'AI', 'Security', 'Cloud', 'Analytics', 'Development'];

  const filteredCaseStudies = selectedCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful AI and IT projects. See how we've helped companies transform their operations and achieve remarkable results." />
        <meta name="keywords" content="case studies, success stories, AI projects, IT solutions, client results" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Case
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Studies
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how we've helped companies across industries transform their operations 
            with cutting-edge AI and IT solutions. Real projects, real results.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                    : 'border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="bg-slate-800/50 rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-6xl opacity-50">
                    {study.category === 'AI' && '🤖'}
                    {study.category === 'Security' && '🔒'}
                    {study.category === 'Cloud' && '☁️'}
                    {study.category === 'Analytics' && '📊'}
                    {study.category === 'Development' && '💻'}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full">
                      {study.category}
                    </span>
                    <span className="text-sm text-gray-400">{study.industry}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4">{study.company}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-300">
                      <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                      {study.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <Users className="w-4 h-4 mr-2 text-cyan-400" />
                      {study.teamSize}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <div className="flex items-center text-sm text-gray-400">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Success
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="border border-cyan-500 text-cyan-400 font-semibold py-4 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>View Our Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;