'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Clock, CheckCircle, Filter, Search } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    improvement: string;
    timeframe: string;
    roi: string;
  };
  category: string;
  image: string;
}

const CaseStudiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times affecting customer satisfaction',
      solution: 'Implemented AI-powered chatbot and automated ticket routing system',
      results: [
        'Reduced response time by 75%',
        'Cut customer service costs by 60%',
        'Improved customer satisfaction by 40%',
        'Handled 80% of queries automatically'
      ],
      metrics: {
        improvement: '75% faster response',
        timeframe: '3 months',
        roi: '300% ROI'
      },
      category: 'AI',
      image: '/images/case-studies/ai-customer-service.jpg'
    },
    {
      id: '2',
      title: 'Cloud Migration and Security Enhancement',
      client: 'FinanceFirst Bank',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing security vulnerabilities and scalability issues',
      solution: 'Complete cloud migration with enhanced security protocols and compliance measures',
      results: [
        '99.9% uptime achieved',
        '50% reduction in security incidents',
        '40% cost savings on infrastructure',
        'Full compliance with financial regulations'
      ],
      metrics: {
        improvement: '99.9% uptime',
        timeframe: '6 months',
        roi: '250% ROI'
      },
      category: 'Cloud',
      image: '/images/case-studies/cloud-migration.jpg'
    },
    {
      id: '3',
      title: 'Data Analytics and Business Intelligence',
      client: 'RetailMax Chain',
      industry: 'Retail',
      challenge: 'Poor inventory management and lack of customer insights affecting profitability',
      solution: 'Comprehensive data analytics platform with predictive modeling and real-time insights',
      results: [
        '30% reduction in inventory costs',
        '25% increase in sales',
        'Improved demand forecasting accuracy',
        'Real-time business insights'
      ],
      metrics: {
        improvement: '30% cost reduction',
        timeframe: '4 months',
        roi: '400% ROI'
      },
      category: 'Analytics',
      image: '/images/case-studies/data-analytics.jpg'
    },
    {
      id: '4',
      title: 'Cybersecurity Overhaul',
      client: 'HealthCare Plus',
      industry: 'Healthcare',
      challenge: 'Critical security vulnerabilities and compliance issues in patient data management',
      solution: 'Comprehensive cybersecurity framework with advanced threat detection and compliance automation',
      results: [
        'Zero security breaches in 12 months',
        '100% compliance with HIPAA regulations',
        'Automated threat detection and response',
        'Reduced security management overhead by 70%'
      ],
      metrics: {
        improvement: 'Zero breaches',
        timeframe: '2 months',
        roi: '500% ROI'
      },
      category: 'Security',
      image: '/images/case-studies/cybersecurity.jpg'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Case Studies' },
    { id: 'AI', name: 'AI Solutions' },
    { id: 'Cloud', name: 'Cloud Computing' },
    { id: 'Analytics', name: 'Data Analytics' },
    { id: 'Security', name: 'Cybersecurity' },
    { id: 'Development', name: 'Custom Development' }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesCategory = selectedCategory === 'all' || study.category === selectedCategory;
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.industry.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful client projects and see how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, client projects, AI solutions, IT transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Real success stories from our clients who have transformed their businesses with our AI and IT solutions
            </p>
          </section>

          {/* Search and Filter Section */}
          <section className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search case studies..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                      className="w-full px-4 py-3 pl-10 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Case Studies Grid */}
          <section className="mb-16">
            {filteredCaseStudies.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredCaseStudies.map((study) => (
                  <div
                    key={study.id}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden hover:border-cyan-400 transition-all duration-300"
                  >
                    <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                      <div className="text-6xl text-cyan-400/50">📊</div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                          {study.category}
                        </span>
                        <span className="text-sm text-gray-400">{study.industry}</span>
                      </div>

                      <h2 className="text-2xl font-semibold text-white mb-3">{study.title}</h2>
                      <p className="text-gray-400 mb-4">Client: <span className="text-white font-medium">{study.client}</span></p>
                      
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-white mb-2">Challenge:</h3>
                        <p className="text-gray-300 text-sm">{study.challenge}</p>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-white mb-2">Solution:</h3>
                        <p className="text-gray-300 text-sm">{study.solution}</p>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-white mb-3">Key Results:</h3>
                        <ul className="space-y-2">
                          {study.results.slice(0, 3).map((result, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-300">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-lg font-bold text-cyan-400">{study.metrics.improvement}</div>
                          <div className="text-xs text-gray-400">Improvement</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-purple-400">{study.metrics.timeframe}</div>
                          <div className="text-xs text-gray-400">Timeframe</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-400">{study.metrics.roi}</div>
                          <div className="text-xs text-gray-400">ROI</div>
                        </div>
                      </div>

                      <Link
                        to={`/case-studies/${study.id}`}
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>Read Full Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-white mb-2">No case studies found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search terms or category filter.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our proven AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;